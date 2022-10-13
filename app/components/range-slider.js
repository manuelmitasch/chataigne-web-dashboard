import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class RangeSliderComponent extends Component {
    @service('settings') settings
    @tracked editing = false
    @tracked editingElement
    @tracked startDiff = 0
    @tracked popoverVisible = false
    lastTap = 0

    get roundedValue() {
        let rounded = Number.parseFloat(this.args.value).toFixed(3);
        return rounded;
    }

    get roundedValue2() {
        let rounded = Number.parseFloat(this.args.value).toFixed(6);
        return parseFloat(rounded);
    }

    get activeWidth() {
        return this.remapValue(this.args.value, this.args.min, this.args.max, 0, 100);
    }

    get containerStyles() {
        let styles = {
            background: this.args.bgColor,
            color: this.args.textColor
        };
        
        return styles;
    }
    
    get activeStyles() {
        let styles = {
            width: this.activeWidth + "%",
            background: this.args.fgColor
        };
    
        return styles;
    }

    @action
    updateEditing(value, event) {
        if (event.type.includes("touch")) {
            event.preventDefault(); // stop click delay
            
            if (value) { // emulate dblclick
                var delta = Date.now() - this.lastTap;

                if (delta < 200) {
                    this.showPopover();
                } else {
                    if (value) this.hidePopover();
                }

                this.lastTap = Date.now();
            }
        }

        this.editing = value;
        this.editingElement = event.srcElement;

        if (value && !this.args.readOnly) {
            let srcElement = this.editingElement;
            let value = this.calculateValue(event, srcElement);
            this.startDiff = this.args.value - value;
        }

        if (!value) {
            this.args.onFinishEditing();
        }
    }

    @action
    disableEditing() {
        this.editing = false;
        this.args.onFinishEditing();
    }

    @action
    updatePosition(event) {
        if (!this.args.readOnly) {
            let pageX = (this.isVertical) ? event.pageY : event.pageX;
            let srcElement = event.srcElement;

            let value = this.calculateValue(pageX, srcElement);
            let relValue = value + this.startDiff;

            this.args.onInput(relValue);
        }
    }

    calculateValue(event, srcElement) {
        if (this.isVertical) {
            return this.calculateValueY(event, srcElement);
        } else {
            return this.calculateValueX(event, srcElement);
        }
    }

    calculateValueX(event, srcElement) {
        let pageX = (event.type.includes("touch")) ? event.targetTouches[0].pageX : event.pageX;
        
        if (!srcElement.classList.contains("range-slider-container")) {
            srcElement = srcElement.parentElement;
        }
        
        let offsetLeft = srcElement.getBoundingClientRect().left + window.scrollX;
        let elementWidth = srcElement.getBoundingClientRect().width;
        
        let clickX = pageX - offsetLeft;  
        let value; 

        if (this.hasRange) {
            value = this.remapValue(clickX, 0, elementWidth, this.args.min, this.args.max); 
        } else {
            value = clickX / 10;
        }

        return value;
    } 

    calculateValueY(event, srcElement) {
        let pageY = (event.type.includes("touch")) ? event.targetTouches[0].pageY : event.pageY;

        if (!srcElement.classList.contains("range-slider-container")) {
            srcElement = srcElement.parentElement;
        }

        let offsetTop = srcElement.getBoundingClientRect().top + window.scrollY;
        let elementHeight = srcElement.getBoundingClientRect().height;

        let clickY = pageY - offsetTop;    
        let value;

        if (this.hasRange) {
            value = this.remapValue(clickY, elementHeight, 0, this.args.min, this.args.max); 
        } else {
            value = - (clickY / 10);
        }

        return value;
    }

    @action
    registerListener(element) {
        let options = { "passive": true };

        document.addEventListener('mousemove', this.moveListener, options);
        element.addEventListener('touchmove', this.moveListener, options);
        document.addEventListener('mouseup', this.disableEditing, options);
        document.addEventListener('click', this.hidePopover, options);
    }
  
    @action
    unregisterListener(element) {
        let options = { "passive": true };

        document.removeEventListener('movemove', this.moveListener, options);
        element.removeEventListener('touchmove', this.moveListener,options);
        document.removeEventListener('mouseup', this.disableEditing, options)
        document.removeEventListener('click', this.hidePopover, options);
    }

    @action
    moveListener(event) {
        if (this.editing && !this.args.readOnly) {
            let srcElement = this.editingElement;

            let value = this.calculateValue(event, srcElement);
            let relValue = value + this.startDiff;

            this.args.onInput(relValue);
            this.update();
        }
    }

    @action
    leaveListener(event) {
        this.editing = false;
    }

    @action 
    input(event) {
        if (this.args.onInput && !this.args.readOnly) {
            if (this.value < this.args.min) {
                this.value = this.args.min;
            } else if (this.value > this.args.max) {
                this.value = this.args.max;
            }

            this.args.onInput(this.value);
        }
    }

    @action 
    update(event) {
        if (this.args.onUpdate && !this.args.readOnly) {
            if (this.value < this.args.min) {
                this.value = this.args.min;
            } else if (this.value > this.args.max) {
                this.value = this.args.max;
            }

            this.args.onUpdate(this.value);
        }
    }

    @action
    showPopover(event) {
        if (!this.args.readOnly) {
            this.popoverVisible = true;
        }
    }

    @action
    hidePopover(event) {
        this.popoverVisible = false;
    }

    @action
    clickPopover(event) {
        event.stopPropagation();
    }

    @action
    setValue(event) {
        var value = parseFloat(event.srcElement.value);

        if (this.args.onInput && !this.args.readOnly) {
            if (value < this.args.min) {
                value = this.args.min;
            } else if (value > this.args.max) {
                value = this.args.max;
            }
        
            this.args.onInput(value);
            this.args.onUpdate(value);
        }

        this.hidePopover();
    }
    
    get isVertical() {
        return this.args.isVertical && this.settings.displayLayout;
    }

    get hasRange() {
        return this.args.min != undefined && this.args.max != undefined;
    }

    remapValue (value, in_min, in_max, out_min, out_max) {
        return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
}

import ControlComponent from './control';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CanvasPoint2dComponent extends ControlComponent {
    @tracked editing = false
    @tracked editingElement
    @tracked startDiffX = 0
    @tracked startDiffY = 0
    @tracked popoverVisible = false
    @tracked xAxisLocked = false
    @tracked YAxisLocked = false
    
    get pointX () {
        return this.remapValue(this.args.value, this.args.min, this.args.max, 0, this.width-12); 
    }    

    get pointY () {
        return this.remapValue(this.args.value2, this.args.min2, this.args.max2, this.height-12, 0); 
    }

    get crosshairX() {
        return this.pointX + 4.5;
    }

    get crosshairY() {
        return this.pointY - 5.5;
    }
    
    get roundedX() {
        let rounded = Number.parseFloat(this.args.value).toFixed(4);
        return rounded;
    }

    get roundedX2() {
        let rounded = Number.parseFloat(this.args.value).toFixed(4);
        return parseFloat(rounded);
    }
    
    get roundedY() {
        let rounded = Number.parseFloat(this.args.value2).toFixed(4);
        return rounded;
    }
        
    get roundedY2() {
        let rounded = Number.parseFloat(this.args.value2).toFixed(4);
        return parseFloat(rounded);
    }

    get width() {
        let borderWidth = this.args.borderWidth;
        let width = (this.settings.displayLayout) ? this.args.width : 300;
        return (borderWidth) ? width - this.args.borderWidth * 2 : width;
    }

    get height() {
        let borderWidth = this.args.borderWidth;
        let height = (this.settings.displayLayout) ? this.args.height : 300;
        return (borderWidth) ? height - this.args.borderWidth * 2 : height;
    }

    @action
    updateEditing(value, event) {
        this.editing = value;
        this.editingElement = event.srcElement;

        if (value && !this.args.readOnly) {
            let srcElement = this.editingElement;

            let valueX = this.calculateX(event, srcElement);
            this.startDiffX = this.args.value - valueX;

            let valueY = this.calculateY(event, srcElement);
            this.startDiffY = this.args.value2 - valueY;
        }
    }

    
    @action
    disableEditing() {
        this.editing = false;
    }

    @action
    updatePosition(event) {
        if (!this.args.readOnly) {
            let pageX = event.pageX;
            let pageY = event.pageY;
            let srcElement = event.srcElement;

            let valueX = this.calculateX(pageX, srcElement);
            let relValueX = valueX + this.startDiffX;

            let valueY = this.calculateY(pageY, srcElement);
            let relValueY = valueY + this.startDiffY;

            this.args.onInput(relValueX);
            this.args.onInput2(relValueY);
        }
    }

    calculateX(event, srcElement) {
        let pageX = (event.type.includes("touch")) ? event.changedTouches[0].pageX : event.pageX;

        if (!srcElement.classList.contains("canvas")) {
            srcElement = srcElement.parentElement;
        }

        let offsetLeft = srcElement.getBoundingClientRect().left + window.scrollX;
        let elementWidth = srcElement.getBoundingClientRect().width;

        let clickX = pageX - offsetLeft;    
        let value = this.remapValue(clickX, 0, elementWidth, this.args.min, this.args.max); 

        return value;
    } 

    calculateY(event, srcElement) {
        let pageY = (event.type.includes("touch")) ? event.changedTouches[0].pageY : event.pageY;

        if (!srcElement.classList.contains("canvas")) {
            srcElement = srcElement.parentElement;
        }

        let offsetTop = srcElement.getBoundingClientRect().top + window.scrollY;
        let elementHeight = srcElement.getBoundingClientRect().height;

        let clickY = pageY - offsetTop;    
        let value = this.remapValue(clickY, elementHeight, 0, this.args.min2, this.args.max2); 

        return value;
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

        if (this.args.onInput2 && !this.args.readOnly) {
            if (this.value2 < this.args.min2) {
                this.value2 = this.args.min2;
            } else if (this.value2 > this.args.max2) {
                this.value2 = this.args.max2;
            }

            this.args.onInput2(this.value2);
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

        if (this.args.onUpdate2 && !this.args.readOnly) {
            if (this.value2 < this.args.min2) {
                this.value2 = this.args.min2;
            } else if (this.value2 > this.args.max2) {
                this.value2 = this.args.max2;
            }
        
            this.args.onUpdate2(this.value2);
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
    moveListener(event) {
        if (this.editing && !this.args.readOnly && !this.popoverVisible) {
            let srcElement = this.editingElement;

            let valueX = this.calculateX(event, srcElement)
            let relValueX = valueX + this.startDiffX;

            if (!this.xAxisLocked) this.args.onInput(relValueX);

            let valueY = this.calculateY(event, srcElement)
            let relValueY = valueY + this.startDiffY;
            
            if (!this.YAxisLocked) this.args.onInput2(relValueY);

            this.update();

            if (event.type.includes("touch")) event.preventDefault();
        }
    }

    @action
    leaveListener(event) {
        this.editing = false;
    }
  
    @action
    registerListener(element) {
        document.addEventListener('mousemove', this.moveListener);
        element.addEventListener('touchmove', this.moveListener);
        document.addEventListener('mouseup', this.disableEditing)
        document.addEventListener('click', this.hidePopover);
        document.addEventListener('keydown', this.keyListener);
        document.addEventListener('keyup', this.keyListener);
    }
  
    @action
    unregisterListener(element) {
        document.removeEventListener('movemove', this.moveListener);
        element.removeEventListener('touchmove', this.moveListener);
        document.removeEventListener('mouseup', this.disableEditing)
        document.removeEventListener('click', this.hidePopover);
        document.removeEventListener('keydown', this.keyListener);
        document.removeEventListener('keyup', this.keyListener);
    }

    get containerStyles() {
        let styles = {
            width: this.width + "px",
            height: this.height + "px",
            marginTop: this.args.marginTop + "px",
            background: this.args.bgColor,
            borderColor: this.args.borderColor,
        };
        
        return styles;
    }

    get pointStyles() {
        let styles = {
            left: this.pointX + "px",
            top: this.pointY + "px",
            background: this.args.fgColor
        }

        return styles;
    }

    get crosshairXStyles() {
        let styles = {
            top: this.crosshairY + "px"
        }

        return styles;
    }

    get crosshairYStyles() {
        let styles = {
            left: this.crosshairX + "px"
        }

        return styles;
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
    }

    @action
    setValue2(event) {
        var value = parseFloat(event.srcElement.value);

        if (this.args.onInput2 && !this.args.readOnly) {
            if (value < this.args.min2) {
                value = this.args.min2;
            } else if (value > this.args.max2) {
                value = this.args.max2;
            }
        
            this.args.onInput2(value);
            this.args.onUpdate2(value);
        }
    }

    @action
    keyListener(event) {
        if (event.type == "keydown") {
            if (event.shiftKey) {
                this.YAxisLocked = true;
            } else if (event.altKey) {
                this.xAxisLocked = true;
            }
        } else if (event.type == "keyup") {
            if (event.key == "Shift") {
                this.YAxisLocked = false;
            } else if (event.key == "Alt") {
                this.xAxisLocked = false;
            }
        }
    }

    remapValue (value, in_min, in_max, out_min, out_max) {
        return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
}

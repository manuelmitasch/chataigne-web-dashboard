import ControlComponent from './control';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CanvasPoint2dComponent extends ControlComponent {
    @tracked editing = false
    canvasWidth = 300
    canvasHeight = 300
    
    get pointX () {
        const control = this.args.control;
        const result = this.remapValue(control.value, control.minVal, control.maxVal, -2.5, this.canvasWidth-3.5); 
        return result;
    }    

    get pointY () {
        const control = this.args.control;
        const result = this.remapValue(control.value2, control.minVal2, control.maxVal2, -2.5, this.canvasHeight-3.5); 
        return result;
    }

    get crosshairX() {
        return this.pointX + 2;
    }

    get crosshairY() {
        return this.pointY - 3;
    }

    @action
    updateEditing(value, event) {
        this.editing = value;
    }

    @action
    updatePosition(event) {
        let pageX = event.pageX;
        let pageY = event.pageY;
        let srcElement = event.srcElement;
        
        if (!srcElement.classList.contains("canvas")) {
            srcElement = srcElement.parentElement;
        }
        
        let offsetTop = srcElement.getBoundingClientRect().top + window.scrollY;
        let offsetLeft = srcElement.getBoundingClientRect().left + window.scrollX;
     
        this.calculateXY(pageX, pageY, offsetLeft, offsetTop, srcElement);

    }

    calculateXY(pageX, pageY, offsetLeft, offsetTop, canvasElement) {
        const control = this.args.control;

        let clickX = pageX - offsetLeft;
        let clickY = pageY - offsetTop;

        let valueX = this.remapValue(clickX, 0, this.canvasWidth, control.minVal, control.maxVal); 
        let valueY = this.remapValue(clickY, 0, this.canvasHeight+1, control.minVal2, control.maxVal2); 

        control.value = valueX;
        control.value2 = valueY;

        this.update();
    }

    @action
    update(event) {
      const control = this.args.control;
  
      if (control.value < control.minVal) {
        control.value = control.minVal;
      } else if (control.value > control.maxVal) {
        control.value = control.maxVal;
      }
  
      if (control.value2 < control.minVal2) {
        control.value2 = control.minVal2;
      } else if (control.value2 > control.maxVal2) {
        control.value2 = control.maxVal2;
      }
  
      this.socket.sendFeedback(control.controlAddress, [control.value, control.value2]);
      // control.save();
    }

    @action
    moveListener(event) {
        if (this.editing) {
            let pageX = event.pageX;
            let pageY = event.pageY;
            let srcElement = event.srcElement;
            
            if (!srcElement.classList.contains("canvas")) {
                srcElement = srcElement.parentElement;
            }
            
            let offsetTop = srcElement.getBoundingClientRect().top + window.scrollY;
            let offsetLeft = srcElement.getBoundingClientRect().left + window.scrollX;
         
            this.calculateXY(pageX, pageY, offsetLeft, offsetTop, srcElement);
        }
    }

    @action
    touchListener(event) {
        if (this.editing) {
            let pageX = event.changedTouches[0].pageX;
            let pageY = event.changedTouches[0].pageY;
            let srcElement = event.srcElement;
            
            if (!srcElement.classList.contains("canvas")) {
                srcElement = srcElement.parentElement;
            }
            
            let offsetTop = srcElement.getBoundingClientRect().top + window.scrollY;
            let offsetLeft = srcElement.getBoundingClientRect().left + window.scrollX;
         
            this.calculateXY(pageX, pageY, offsetLeft, offsetTop, srcElement);

            event.preventDefault();
        }
    }

    @action
    leaveListener(event) {
        this.editing = false;
    }
  
    @action
    registerListener(element) {
      element.addEventListener('mousemove', this.moveListener);
      element.addEventListener('touchmove', this.touchListener);
      element.addEventListener('mouseleave', this.leaveListener);
    }
  
    @action
    unregisterListener(element) {
      element.removeEventListener('movemove', this.moveListener);
      element.removeEventListener('touchmove', this.touchListener);
      element.removeEventListener('mouseleave', this.leaveListener);
    }

    remapValue (value, in_min, in_max, out_min, out_max) {
        return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
}

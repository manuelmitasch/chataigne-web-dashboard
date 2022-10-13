import FloatControlComponent from './float-control';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IntegerControlComponent extends FloatControlComponent {
  @tracked editing = false
  @tracked editingElement
  @tracked startDiff = 0

  get step() {
    return 1;
  }

  get roundedValue() {
    return parseInt(this.args.control.value);
  }

  @action
  setValue(value) {
    this.args.control.value = Math.round(value);
  }

  get showLabel() {
    if (!this.settings.displayLayout) return true;
    if (!this.args.control.showLabel) return false;
    return (this.args.control.isColorIndicator && !this.args.control.isRotarySlider) || !this.args.control.hasRange;
  }

  @action
  updateEditing(value, event) {
      this.editing = value;
      this.editingElement = event.srcElement;

      if (value && !this.args.control.readOnly) {
          let srcElement = this.editingElement;
          let value = this.calculateValue(event, srcElement);
          this.startDiff = this.args.control.value - value;
      }
  }

  @action
  disableEditing() {
      this.editing = false;
  }

  calculateValue(event, srcElement) {
    if (this.hasSmallHeight && this.settings.displayLayout) {
      return this.calculateValueX(event, srcElement);
    } else {
      return this.calculateValueY(event, srcElement);
    }
  }

  calculateValueX(event, srcElement) {
      let pageX = (event.type.includes("touch")) ? event.targetTouches[0].pageX : event.pageX;
      
      let offsetLeft = srcElement.getBoundingClientRect().left + window.scrollX;
      
      let value; 
      let clickX = pageX - offsetLeft;  

      if (this.hasRange) {
          value = this.remapValue(clickX, 0, 110, this.args.control.minVal, this.args.control.maxVal); 
      } else {
          value = parseInt(clickX);
      }

      return value;
  } 

  @action
  calculateValueY(event, srcElement) {
    let pageY = (event.type.includes("touch")) ? event.targetTouches[0].pageY : event.pageY;
    let offsetTop = srcElement.getBoundingClientRect().top + window.scrollY;

    let value;
    let clickY = pageY - offsetTop;    

    if (this.hasRange) {
      value = this.remapValue(clickY, 110, 0, this.args.control.minVal, this.args.control.maxVal); 
    } else {
      value = parseInt(-clickY);
    }

    return value;
  }

  @action
  registerListener(element) {
    let options = { "passive": true };
    document.addEventListener('mousemove', this.moveListener, options);
    element.addEventListener('touchmove', this.moveListener, options);
    document.addEventListener('mouseup', this.disableEditing, options);
  }

  @action
  unregisterListener(element) {
    let options = { "passive": true };
    element.removeEventListener('movemove', this.moveListener, options);
    element.removeEventListener('touchmove', this.moveListener,options);
    document.removeEventListener('mouseup', this.disableEditing, options);
  }

  @action
  moveListener(event) {
      if (this.editing && !this.args.control.readOnly) {
          let srcElement = this.editingElement;

          let value = this.calculateValue(event, srcElement);
          let relValue = value + this.startDiff;

          const control = this.args.control;
          control.value = relValue;
          this.update();
      }
  }

  remapValue (value, in_min, in_max, out_min, out_max) {
    return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
}

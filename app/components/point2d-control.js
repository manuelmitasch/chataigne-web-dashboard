import ControlComponent from './control';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Point2DControlComponent extends ControlComponent {
  @tracked displayCanvas = false

  get showCanvas() {
    return this.displayCanvas && !this.settings.displayLayout;
  }

  get showLabel() {
    return !this.args.control.is2DCanvas;
  }

  get step() {
    return 0.001;
  }

  get roundedValue() {
    let rounded = Number.parseFloat(this.args.control.value).toFixed(3);
    return parseFloat(rounded);
  }

  get roundedValue2() {
    let rounded = Number.parseFloat(this.args.control.value2).toFixed(3);
    return parseFloat(rounded);
  }

  get useWidthSplit() {
    return this.args.control.height < 35;
  }

  @action
  input(position, event) {
    const control = this.args.control;

    if (position == 2) {
      control.value2 = event.target.value;
    } else {
      event = position;
      control.value = event.target.value;
    }
  }

  @action
  setValue2(value) {
    this.args.control.value2 = value;
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
  toggleCanvas() {
    this.displayCanvas = !this.displayCanvas;
  }

  
  get customizeStyles() {
    let control = this.args.control;
    let styles = {
      ...((control.bgColor) && { background: control.bgColorRgba }),
      ...((control.textColor) && { color: control.textColorRgba }),
      ...((control.borderColor) && { borderColor: control.borderColorRgba }),
      ...((control.borderWidth) && { borderWidth: control.borderWidth/2 + "px" }),
    };

    return styles;
  }

  
  get fgColorRgba() {
    if (this.args.control.fgColor) return this.args.control.fgColorRgba;
    if (this.args.control.readOnly) return "#18b5ef";
    return "#7eb357";
  }

  get bgColorRgba() {
    if (this.args.control.bgColor) return this.args.control.bgColorRgba;
    return "#222222";
  }

  get borderColorRgba() {
    if (this.args.control.borderColor) return this.args.control.borderColorRgba;
    return "#383838";
  }
  
}

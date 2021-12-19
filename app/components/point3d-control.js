import ControlComponent from './control';
import { action } from '@ember/object';

export default class Point2DControlComponent extends ControlComponent {
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

  get roundedValue3() {
    let rounded = Number.parseFloat(this.args.control.value3).toFixed(3);
    return parseFloat(rounded);
  }

  get useWidthSplit() {
    return this.args.control.height < 55;
  }

  @action
  input(position, event) {
    const control = this.args.control;

    if (position == 2) {
      control.value2 = event.target.value;
    } else if (position == 3) {
      control.value3 = event.target.value;
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
  setValue3(value) {
    this.args.control.value3 = value;
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

    if (control.value3 < control.minVal3) {
      control.value3 = control.minVal3;
    } else if (control.value3 > control.maxVal3) {
      control.value3 = control.maxVal3;
    }

    this.socket.sendFeedback(control.controlAddress, [control.value, control.value2, control.value3]);
    // control.save();
  }

  
  get customizeStyles() {
    let control = this.args.control;
    let styles = {
      ...((control.bgColor) && { background: control.bgColorRgba }),
      ...((control.textColor) && { color: control.textColorRgba }),
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
      return "#303030";
  }

  
}

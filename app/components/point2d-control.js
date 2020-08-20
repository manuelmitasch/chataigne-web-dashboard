import ControlComponent from './control';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Point2DControlComponent extends ControlComponent {
  @tracked showCanvas = false

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
    this.showCanvas = !this.showCanvas;
  }
  
}

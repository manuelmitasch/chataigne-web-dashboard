import ControlComponent from './control';
import { action } from '@ember/object';

export default class BooleanControlComponent extends ControlComponent {  
  @action
  input(event) {
    const control = this.args.control;
    control.value = event.target.value;
  }

  @action
  update(value, event) {
    const control = this.args.control;
    this.socket.sendFeedback(control.controlAddress, control.value);
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
}

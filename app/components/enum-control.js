import ControlComponent from './control';
import { action } from '@ember/object';

export default class EnumControlComponent extends ControlComponent {  
  @action
  input(event) {
  }

  @action
  update(event) {
    const control = this.args.control;
    control.value = event.target.value;
    this.socket.sendFeedback(control.controlAddress, control.value);
    // control.save();
  }
}

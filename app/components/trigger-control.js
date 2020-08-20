import ControlComponent from './control';
import { action } from '@ember/object';

export default class TriggerControlComponent extends ControlComponent {  
  @action
  update(value, event) {
    const control = this.args.control;
    this.socket.sendFeedback(control.controlAddress, true);
    // control.save();
  }
}

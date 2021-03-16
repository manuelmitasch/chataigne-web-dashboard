import ControlComponent from './control';
import { action } from '@ember/object';

export default class TriggerControlComponent extends ControlComponent {  
  @action
  update(value, event) {
    const control = this.args.control;
    this.socket.sendFeedback(control.controlAddress, true);

    event = (event) ? event : value;
    event.preventDefault();
    // control.save();
  }

  get customizeStyles() {
    let control = this.args.control;
    let h = control.height;
    let fontSize = 16;

    if (h <= 15) {
      fontSize = 10;
    } else if (h <= 25) {
      fontSize = 12;
    } else if (h <= 35) {
      fontSize = 14;
    } else if (h <= 45) {
      fontSize = 16;
    } else {
      fontSize = 18;
    } 

    let styles = {
      fontSize: fontSize + "px"
    };

    return styles;
  }
}

import ControlComponent from './control';
import { action } from '@ember/object';

export default class BooleanControlComponent extends ControlComponent {  
  @action
  input(event) {
  }

  @action
  update(value, event) {
    const control = this.args.control;
    this.socket.sendFeedback(control.controlAddress, !control.value);
    // control.save();
  }

  get sizeStyles() {
    if (this.args.displayLayout) {
      return {
        width: this.args.control.height + 'px',
        height: this.args.control.height + 'px',
        right: '0px'
      }
    } else {
      return {}
    }
  }
}

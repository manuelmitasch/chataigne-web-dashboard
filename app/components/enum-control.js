import ControlComponent from './control';
import { action } from '@ember/object';

export default class EnumControlComponent extends ControlComponent {  
  @action
  input(event) {
  }

  @action
  update(event) {
    const control = this.args.control;
    
    if (event.target) { // assume it's an event object
      control.value = event.target.value;
    } 

    this.socket.sendFeedback(control.controlAddress, control.value);
    // control.save();
  }

  get customizeStyles() {
    let control = this.args.control;
    let h = control.height;
    let fontSize;

    if (control.textSize) {
      fontSize = control.textSize;
    } else {
      if (h < 25) fontSize = 9;
      else fontSize = 14;
    }

    let styles = {
      fontSize: fontSize + "px",
      ...((control.bgColor) && { background: control.bgColorRgba }),
      ...((control.textColor) && { color: control.textColorRgba }),
    };

    return styles;
  }

  get showLabel() {
    return (this.args.control.isColorIndicator) ? this.args.control.showValue : false;
  }
}

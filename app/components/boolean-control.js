import ControlComponent from './control';
import { action } from '@ember/object';

export default class BooleanControlComponent extends ControlComponent {  
  @action
  input(event) {
  }

  @action
  update(value, event) {
    const control = this.args.control;
    event = (event) ? event : value;

    if (!control.readOnly) {
      if(event.type == "mousedown" || event.type == "touchstart") {
        this.socket.sendFeedback(control.controlAddress, !control.value);
      } else if (control.momentaryMode && (event.type == "mouseup" || event.type == "touchend")) {
        this.socket.sendFeedback(control.controlAddress, !control.value);
      }
    }

    event.preventDefault();
  }

  get showLabel() {
    return this.args.control.showLabel && ! this.args.control.buttonUI;
  }


  get borderWidth() {
    let width = this.args.control.borderWidth;
    return (width) ? width/2 : 0;
  }

  get sizeStyles() {
    if (this.settings.displayLayout) {
      let size = this.args.control.height - this.borderWidth*2;

      return {
        width: size + 'px',
        height: size + 'px',
        right: '0px'
      }
    } else {
      return {}
    }
  }
  
  get customizeStyles() {
    let control = this.args.control;
    let styles = {
      ...((control.bgColor) && { background: control.bgColorRgba }),
      ...((control.textColor) && { color: control.textColorRgba }),
      ...((control.borderColor) && { borderColor: control.borderColorRgba }),
      ...((control.borderWidth) && { borderWidth: this.borderWidth + "px" }),
      ...((control.value && control.bgColor)) && { filter: "brightness(1.5)" },
    };

    return styles;
  }
}

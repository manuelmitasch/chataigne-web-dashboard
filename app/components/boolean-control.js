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

    event = (event) ? event : value;
    event.preventDefault();
  }


  get borderWidth() {
    let contourThickness = this.args.control.contourThickness;
    return (contourThickness) ? contourThickness/2 : 0;
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
      ...((control.contourColor) && { borderColor: control.contourColorRgba }),
      ...((control.contourThickness) && { borderWidth: this.borderWidth + "px" }),
    };

    return styles;
  }
}

import ControlComponent from './control';
import { action } from '@ember/object';

export default class TriggerControlComponent extends ControlComponent {  
  @action
  update(value, event) {
    const control = this.args.control;

    if (!control.readOnly) {
      this.socket.sendFeedback(control.controlAddress, true);
    }

    event = (event) ? event : value;
    event.preventDefault();
    // control.save();
  }

  get customizeStyles() {
    let control = this.args.control;
    let h = control.height;
    let fontSize = 16;

    if (!this.settings.displayLayout) {
      fontSize = 14;
    } else if (control.textSize) {
      fontSize = control.textSize;
    } else {
      if (h <= 15) {
        fontSize = 9;
      } else if (h <= 25) {
        fontSize = 10;
      } else if (h <= 35) {
        fontSize = 12;
      } else if (h <= 45) {
        fontSize = 16;
      } else {
        fontSize = 22;
      } 
    }

    let styles = {
      fontSize: fontSize + "px",
      ...((control.bgColor) && { background: control.bgColorRgba }),
      ...((control.textColor) && { color: control.textColorRgba }),
      ...((control.textColor) && { mixBlendMode: "normal" }),
      ...((control.triggered && control.bgColor)) && { filter: "brightness(1.5)" },
    };

    return styles;
  }

  get customImageStyles() {
    let control = this.args.control;

    if (control.customImage) {
      return {
        backgroundImage: 'url(' + control.imageSrc + ') !important',
        backgroundSize: '100% 100%',
        border: 'none',
        backgroundColor: 'unset !important',
        ...((!control.triggered) && { filter: 'grayscale(100%)' }),
      }
    } else {
      return {}
    }
  }
}

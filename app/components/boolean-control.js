import ControlComponent from './control';
import { action } from '@ember/object';

export default class BooleanControlComponent extends ControlComponent {  
  valueOnStart = false;

  @action
  input(event) {
  }

  @action
  update(value, event) {
    const control = this.args.control;
    event = (event) ? event : value;

    if (!control.readOnly) {
      if(event.type == "mousedown" || event.type == "touchstart") {
        this.valueOnStart = !control.value;
        this.socket.sendFeedback(control.controlAddress, this.valueOnStart);
      } else if (control.momentaryMode && (event.type == "mouseup" || event.type == "touchend")) {
        this.socket.sendFeedback(control.controlAddress, !this.valueOnStart);
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
      let height = this.args.control.height - this.borderWidth*2;
      let width = this.args.control.width - this.borderWidth*2;
      width = (height > width) ? width : height;

      return {
        width: width + 'px',
        height: height + 'px',
        ...((this.args.control.showLabel) && { right: '0px' })
      }
    } else {
      return {}
    }
  }

  get customImageStyles() {
    let control = this.args.control;

    if (control.customImage) {
      return {
        backgroundImage: 'url(' + control.imageSrc + ') !important',
        backgroundSize: '100% 100% !important',
        backgroundRepeat: 'no-repeat',
        border: 'none',
        backgroundColor: 'unset !important',
        ...((!control.value) && { filter: 'grayscale(100%)' }),
      }
    } else {
      return {}
    }
  }
  
  get customizeStyles() {
    let control = this.args.control;
    let h = control.height;
    let fontSize = 14;

    if (control.textSize) {
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
      ...((control.borderColor) && { borderColor: control.borderColorRgba }),
      ...((control.borderWidth) && { borderWidth: this.borderWidth + "px" }),
      ...((control.value && control.bgColor)) && { filter: "brightness(1.5)" },
    };

    return styles;
  }
}

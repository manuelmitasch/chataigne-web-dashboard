import ControlComponent from './control';
import { action } from '@ember/object';

export default class ColorControlComponent extends ControlComponent {
  @action
  input(channel, event) {
    const control = this.args.control;
    if (channel == "red") {
      control.red = event.target.value;
    } else if (channel == "green") {
      control.green = event.target.value;
    } else if (channel == "blue") {
      control.blue = event.target.value;
    }  else if (channel == "alpha") {
      control.alpha = event.target.value;
    } else {
      event = channel;
      const hex = event.target.value;
      const rgb = this.hexToRGB(hex);

      control.red = rgb.red;
      control.green = rgb.green;
      control.blue = rgb.blue;
    }
  }
  
  @action
  update(event) {
    const control = this.args.control;

    this.socket.sendFeedback(control.controlAddress, [control.red, control.green, control.blue, control.alpha]);
    // control.save();
  }

  get roundedRed() {
    const rounded = Number.parseFloat(this.args.control.red).toFixed(3);
    return parseFloat(rounded);
  }

  get roundedBlue() {
      const rounded = Number.parseFloat(this.args.control.blue).toFixed(3);
      return parseFloat(rounded);
  }

  get roundedGreen() {
      const rounded = Number.parseFloat(this.args.control.green).toFixed(3);
      return parseFloat(rounded);
  }

  get roundedAlpha() {
      const rounded = Number.parseFloat(this.args.control.alpha).toFixed(3);
      return parseFloat(rounded);
  }

  hexToRGB(h) {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    r = r / 255;
    g = g / 255;
    b = b / 255;

    return { 
      "red": r, 
      "green": g,
      "blue": b
    };
  }
  
}

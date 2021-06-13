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
    let imageSrc = control.imageSrc;
    let imageSize = control.width + "px " + control.height + "px";
    let fontSize = 16;

    if (h <= 15) {
      fontSize = 10;
    } else if (h <= 25) {
      fontSize = 12;
    } else if (h <= 35) {
      fontSize = 14;
    } else if (h <= 45) {
      fontSize = 18;
    } else {
      fontSize = 22;
    } 

    let styles = {
      fontSize: fontSize + "px",
      ...((control.bgColor) && { background: control.bgColorRgba }),
      ...((control.textColor) && { color: control.textColorRgba }),
      ...((control.textColor) && { mixBlendMode: "normal" }),
      ...((imageSrc) && { backgroundImage: "url(" + imageSrc + ")" }),
      ...((imageSrc) && { backgroundRepeat: "no-repeat" }),
      ...((imageSrc) && { backgroundSize: imageSize }),
      ...((imageSrc && control.contourColor) && { borderColor: control.contourColorRgba }),
      ...((imageSrc && control.contourThickness) && { borderWidth: control.contourThickness/2 + "px" })
    };

    return styles;
  }
}

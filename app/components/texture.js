import ControlComponent from './control';
import { action } from '@ember/object';

export default class TextureControlComponent extends ControlComponent {  
  
  get srcBlob() {
    if (this.args.control.imgBlob) {
      return 'data:image/jpeg;base64,' + this.args.control.imgBlob;
    }
  }

  get imgStyles() {
    let control = this.args.control;
    let imgRatio = control.imgRatio;
    let containerRatio = control.width / control.height;

    if (imgRatio > containerRatio) {
      let h = control.width / imgRatio;

      return { 
        width: "100%",
        height: h + "px"
      }
    } else {
      let w = control.height * imgRatio;

      return { 
        width: w + "px",
        height: "100%" 
      }
    }
  }
}
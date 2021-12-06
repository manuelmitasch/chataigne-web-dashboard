import ControlComponent from './control';
import { action } from '@ember/object';

export default class TextureControlComponent extends ControlComponent {  
  get srcBlob() {
    return 'data:image/jpeg;base64,' + this.args.control.imgBlob;
  }
}
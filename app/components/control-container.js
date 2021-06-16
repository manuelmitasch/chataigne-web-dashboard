import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ControlContainerComponent extends Component {
  @service('settings') settings

  get width() {
    return (this.args.control.isVertical) ? this.args.control.height : this.args.control.width;
  }

  get height() {
    return (this.args.control.isVertical) ? this.args.control.width : this.args.control.height;
  }

  get transform() {
    return (this.args.control.isVertical) ? 'rotate(-90deg)' : 'none';
  }

  get transformOrigin() {
    let halfHeight = this.width / 2;
    return halfHeight + 'px ' + halfHeight + 'px'; 
  }

  get positionStyles() {
    if (this.settings.displayLayout) {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
        top: this.args.control.positionY + 'px',
        left: this.args.control.positionX + 'px',
        transform: this.transform,
        transformOrigin: this.transformOrigin
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
      ...((control.textColor) && { mixBlendMode: "normal" }),
      ...((control.borderColor) && { borderColor: control.borderColorRgba }),
      ...((control.borderWidth) && { borderWidth: control.borderWidth/2 + "px" }),
    };

    return styles;
  }
    
  get fontStyles() {
    let control = this.args.control;
    let styles = {
      ...((control.textColor) && { color: control.textColorRgba }),
    };

    return styles;
  }

  get showLabel() {
    return this.args.showLabel || !this.settings.displayLayout;
  }
}

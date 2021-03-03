import Component from '@glimmer/component';

export default class ControlContainerComponent extends Component {
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
    if (this.args.displayLayout) {
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

  get showLabel() {
    return this.args.showLabel || !this.args.displayLayout;
  }
}

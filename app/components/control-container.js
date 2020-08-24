import Component from '@glimmer/component';

export default class ControlContainerComponent extends Component {
  get positionStyles() {
    if (this.args.displayLayout) {
      return {
        width: this.args.control.width + 'px',
        height: this.args.control.height + 'px',
        top: this.args.control.positionY + 'px',
        left: this.args.control.positionX + 'px'
      }
    } else {
      return {}
    }
  }

  get showLabel() {
    return this.args.showLabel || !this.args.displayLayout;
  }
}

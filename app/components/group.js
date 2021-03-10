import Component from '@glimmer/component';

export default class GroupComponent extends Component {
    get positionStyles() {
        if (this.args.displayLayout) {
            return {
                width: this.args.control.width + 'px',
                height: this.args.control.height + 'px',
                left: this.args.control.positionX + 'px',
                top: this.args.control.positionY + 'px',
                border: this.args.control.borderWidth + 'px solid ' + this.borderColor,
                background: this.backgroundColor
            }
        } else {
            return {}
        }
    }

    get borderColor() {
        let c = this.args.control.borderColor;
        let r = c[0] * 255;
        let g = c[1] * 255;
        let b = c[2] * 255;

        return 'rgba(' + r + ',' + g + ',' + b + ',' + c[3] + ')';
    }

    get backgroundColor() {
        let c = this.args.control.backgroundColor;

        if (c) {
            let r = c[0] * 255;
            let g = c[1] * 255;
            let b = c[2] * 255;

            return 'rgba(' + r + ',' + g + ',' + b + ',' + c[3] + ')';
        } else {
            return 'none';
        }
    }
}

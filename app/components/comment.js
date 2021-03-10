import Component from '@glimmer/component';

export default class CommentComponent extends Component {
    get positionStyles() {
        if (this.args.displayLayout) {
            return {
                left: this.args.control.positionX + 'px',
                top: this.args.control.positionY + 'px'
            }
        } else {
            return {}
        }
    }

    get colorStyles() {
        return {
            color: this.color,
            fontSize: this.args.control.size + "px"
        }
    }

    get color() {
        let c = this.args.control.color;
        let r = c[0] * 255;
        let g = c[1] * 255;
        let b = c[2] * 255;

        return 'rgba(' + r + ',' + g + ',' + b + ',' + c[3] + ')';
    }
}

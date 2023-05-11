import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class CommentComponent extends Component {
    @service('settings') settings

    get positionStyles() {
        if (this.settings.displayLayout) {
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
            fontSize: this.args.control.size + "px",
            ...((this.args.control.isVisible == false) && { display: "none"}), 
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

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DashboardComponent extends Component {
    get sizeStyle() {
        if (this.args.displayLayout) {
            let scaleWidth = this.args.viewWidth / (this.args.dashboard.width);
            let scaleHeight = (this.args.viewHeight - 37) / (this.args.dashboard.height);

            let scale = (scaleWidth > scaleHeight) ? scaleHeight : scaleWidth;

            return {
                width: this.args.dashboard.width + 'px',
                height: this.args.dashboard.height + 'px',
                transformOrigin: 'top left',
                transform: 'scale(' + scale + ')'
            }
        } else {
            return {}
        }
    }
}

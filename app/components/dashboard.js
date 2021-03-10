import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class DashboardComponent extends Component {
    @service('settings') settings

    get sizeStyle() {
        if (this.settings.displayLayout) {
            let scaleWidth = this.settings.viewWidth / (this.args.dashboard.width);
            let scaleHeight = (this.settings.viewHeight - 37) / (this.args.dashboard.height);

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

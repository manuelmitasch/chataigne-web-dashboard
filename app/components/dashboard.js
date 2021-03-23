import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class DashboardComponent extends Component {
    @service('settings') settings

    get sizeStyle() {
        if (this.settings.displayLayout) {
            let scaleWidth = this.settings.viewWidth / (this.args.dashboard.width);
            let scaleHeight = (this.settings.viewHeight) / (this.args.dashboard.height);

            let scale = (scaleWidth > scaleHeight) ? scaleHeight : scaleWidth;

            if (this.settings.scaleLayout) {
                return {
                    width: this.args.dashboard.width + 'px',
                    height: this.args.dashboard.height + 'px',
                    transform: 'scale(' + scale + ')'
                }
            } else {
                return {
                    width: this.args.dashboard.width + 'px',
                    height: this.args.dashboard.height + 'px'
                }
            }
        } else {
            return {}
        }
    }
}

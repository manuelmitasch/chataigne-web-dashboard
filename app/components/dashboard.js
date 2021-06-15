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
  
    get customizeStyles() {
        let dashboard = this.args.dashboard;
        
        let styles = {
          ...((dashboard.bgColor) && { background: dashboard.bgColorRgba }),
        };
    
        return styles;
    }

    get backgroundStyle() {
        if (this.settings.displayLayout && this.args.dashboard.bgImage && this.args.dashboard.bgImageHeight) {
            let marginTop = (this.args.dashboard.height - this.args.dashboard.bgImageHeight) / -2;

            return {
                width: this.args.dashboard.bgImageWidth + "px",
                height: this.args.dashboard.bgImageHeight + "px",
                display: "block",
                margin: "auto",
                marginTop: "-" + marginTop.toString() + "px",
                transform: "scale(" + this.args.dashboard.bgImageScale + ")",
                zIndex: "-300",
                opacity: this.args.dashboard.bgImageAlpha.toString()
            }
        }

        return {
            display: "none"
        }
    }
}

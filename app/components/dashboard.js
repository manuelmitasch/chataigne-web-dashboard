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
          ...((dashboard.bgColor && dashboard.bgColor[3] != 0) && { background: dashboard.bgColorRgba }),
        };
    
        return styles;
    }

    get backgroundStyle() {
        if (this.settings.displayLayout && this.args.dashboard.bgImage && this.args.dashboard.bgImageHeight) {

            let marginTop = (this.args.dashboard.height - (this.args.dashboard.bgImageHeight * this.args.dashboard.bgImageScale)) / 2;
            let marginLeft = (this.args.dashboard.width - (this.args.dashboard.bgImageWidth * this.args.dashboard.bgImageScale)) / 2;
            
            return {
                width: this.args.dashboard.bgImageWidth + "px",
                height: this.args.dashboard.bgImageHeight + "px",
                display: "block",
                marginTop: marginTop.toString() + "px",
                marginLeft: marginLeft.toString() + "px",
                transform: "scale(" + this.args.dashboard.bgImageScale + ")",
                transformOrigin: "top left",
                zIndex: "-300",
                opacity: this.args.dashboard.bgImageAlpha.toString()
            }
        }

        return {
            display: "none"
        }
    }
}

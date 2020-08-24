import Component from '@glimmer/component';

export default class DashboardComponent extends Component {
    get sizeStyle() {
        if (this.args.displayLayout) {
            return {
                width: this.args.dashboard.width + 'px',
                height: this.args.dashboard.height + 'px'
            }
        } else {
            return {}
        }
    }
}

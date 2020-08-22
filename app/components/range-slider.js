import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RangeSliderComponent extends Component {
    get roundedValue() {
        let rounded = Number.parseFloat(this.args.value).toFixed(3);
        return parseFloat(rounded);
    }

    @action 
    input(event) {
        if (this.args.onInput) {
            this.args.onInput(event);
        }
    }

    @action 
    update(event) {
        if (this.args.onUpdate) {
            this.args.onUpdate(event);
        }
    }
}

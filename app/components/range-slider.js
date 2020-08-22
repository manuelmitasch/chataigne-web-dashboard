import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RangeSliderComponent extends Component {
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

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class EnumBarComponent extends Component {
    
    @action
    setValue(value, event) {
        this.args.control.value = value;
        this.args.onUpdate(value);
    }
    
    get optionStyles() {
        let styles = {
            width: (this.args.control.isVerticalEnumBar) ? "100%" : this.optionSize,
            height: (this.args.control.isVerticalEnumBar) ? this.optionSize : "100%"
        };
        
        return styles;
    }
    
    get optionSize() {
        return (100 / this.args.control.options.length) + "%";
    }
}

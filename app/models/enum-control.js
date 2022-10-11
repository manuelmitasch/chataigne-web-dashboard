import Model, { attr, belongsTo } from '@ember-data/model';
import Control from './control';

export default class BooleanControlModel extends Control {
    @attr("string") value
    
    get isEnumBar() {
        return this.style == 20 || this.style == 21;
    }

    get isVerticalEnumBar() {
        return this.style == 21;
    }
}

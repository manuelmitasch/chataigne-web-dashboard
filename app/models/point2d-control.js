import Model, { attr, belongsTo } from '@ember-data/model';
import Control from './control';

export default class FloatControlModel extends Control {
    @attr("number") value
    @attr("number") minVal
    @attr("number") maxVal
    @attr("number") value2
    @attr("number") minVal2
    @attr("number") maxVal2
    @attr("bool") invertX
    @attr("bool") invertY
    @attr("bool") stretchMode

    get hasRange2() {
        return (this.maxVal2 != undefined && this.minVal2 != undefined) && (this.maxVal2 != 2147483648 && this.minVal2 != -2147483648);
    }

    get hasAllRanges() {
        return (this.hasRange && this.hasRange2);
    }

    get is2DCanvas() {
        return this.style == 12;
    }
}

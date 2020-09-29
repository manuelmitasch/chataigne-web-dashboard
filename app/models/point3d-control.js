import Model, { attr, belongsTo } from '@ember-data/model';
import Control from './control';

export default class FloatControlModel extends Control {
    @attr("number") value
    @attr("number") minVal
    @attr("number") maxVal
    
    @attr("number") value2
    @attr("number") minVal2
    @attr("number") maxVal2

    @attr("number") value3
    @attr("number") minVal3
    @attr("number") maxVal3

    get hasRange2() {
        return (this.maxVal2 != undefined && this.minVal2 != undefined) && (this.maxVal2 != 2147483648 && this.minVal2 != -2147483648);
    }

    get hasRange3() {
        return (this.maxVal3 != undefined && this.minVal3 != undefined) && (this.maxVal3 != 2147483648 && this.minVal3 != -2147483648);
    }

    get hasAllRanges() {
        return (this.hasRange && this.hasRange2 && this.hasRange3);
    }
}

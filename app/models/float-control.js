import Model, { attr, belongsTo } from '@ember-data/model';
import Control from './control';

export default class FloatControlModel extends Control {
    @attr("number") value
    @attr("number") minVal
    @attr("number") maxVal
    
    get isVertical() {
        return this.style == 1;  
    }

    get isRotarySlider() {
        return this.style == 5;
    }

    get hasRange() {
        if (this.style == 2) return false;
        return (this.maxVal != undefined && this.minVal != undefined) && (this.maxVal != 2147483648 && this.minVal != -2147483648);
    }

    get colorValue() {
        if (this.style != 10 && this.style != 11) return "rgba(0,0,0,0)";

        let selectedKey = null;

        for (const [k, v] of Object.entries(this.colorMap)) {
            if (k <= this.value) selectedKey = k;
        }

        let c = this.colorMap[selectedKey];

        if (c) return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + c[3]/255 + ")";
        return "rgba(0,0,0,0)";
    }
}

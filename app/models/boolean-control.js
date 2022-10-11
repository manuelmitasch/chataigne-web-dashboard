import Model, { attr, belongsTo } from '@ember-data/model';
import Control from './control';

export default class BooleanControlModel extends Control {
    @attr("boolean") value
    @attr("boolean") buttonUI
    @attr("boolean") momentaryMode

    get colorValue() {
        let c;

        if (this.style != 10 && this.style != 11) return "rgba(0,0,0,0)";

        if (this.value) {
            c = this.colorMap[1];
        } else {
            c = this.colorMap[0];
        }

        if (c) return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + c[3]/255 + ")";
        
        return "rgba(0,0,0,0)";
    }
}

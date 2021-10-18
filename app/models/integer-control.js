import Model, { attr, belongsTo } from '@ember-data/model';
import FloatControl from './float-control';

export default class ControlModel extends FloatControl {
    
    get hasRange() {
        if (this.style == -1 || this.style == 2) return false;
        return (this.maxVal != undefined && this.minVal != undefined) && (this.maxVal != 2147483648 && this.minVal != -2147483648);
    }
}

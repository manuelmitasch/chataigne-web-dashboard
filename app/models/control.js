import Model, { attr, belongsTo } from '@ember-data/model';

export default class ControlModel extends Model {
    @attr("string") label
    @attr("string") controlAddress

    @attr("number") positionX
    @attr("number") positionY
    @attr("number") width
    @attr("number") height

    @attr("number") defaultUI
    @attr("number") style

    @belongsTo('dashboard') dashboard

    get hasRange() {
        return (this.maxVal != undefined && this.minVal != undefined) && (this.maxVal != 2147483648 && this.minVal != -2147483648);
    }

    get hasAllRanges() {
        return this.hasRange;
    }

    get modelName() {
        return this.constructor.modelName;
    }
}

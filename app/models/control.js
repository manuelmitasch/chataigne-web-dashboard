import Model, { attr, belongsTo } from '@ember-data/model';

export default class ControlModel extends Model {
    @attr("string") label
    @attr("string") controlAddress

    @attr("number") positionX
    @attr("number") positionY
    @attr("number") sizeX
    @attr("number") sizeY

    @attr("string") defaultUI

    @belongsTo('dashboard') dashboard

    get hasRange() {
        return this.maxVal != undefined && this.minVal != undefined;
    }
}
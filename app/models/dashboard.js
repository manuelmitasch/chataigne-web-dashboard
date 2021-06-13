import Model, { attr, hasMany } from '@ember-data/model';
import { sort } from '@ember/object/computed';

export default class DashboardModel extends Model {
    @attr('string') name

    @attr('number') width
    @attr('number') height

    @attr('string') bgImage;
    @attr('number') bgImageAlpha;
    @attr('number') bgImageScale;

    @attr('number') bgImageWidth;
    @attr('number') bgImageHeight;

    @hasMany('control', { polymorphic: true }) controls

    controlSorting = ['positionY', 'positionX']
    @sort('controls', 'controlSorting') sortedControls

    get bgSrc() {
        let url = "http://localhost:9999/fileData?controlAddress=" + this.bgImage;
        let image = new Image();
        image.src = url;
        let self = this;

        image.onload = function() {
            self.bgImageWidth = image.width;
            self.bgImageHeight = image.height;
        }

        return encodeURI(url);
    }
}

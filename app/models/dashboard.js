import Model, { attr, hasMany } from '@ember-data/model';
import { sort } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class DashboardModel extends Model {
    @service('url') urlService

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
        let url = this.urlService.imageSrc(this.bgImage);

        let image = new Image();
        image.src = url;
        let self = this;

        image.onload = function() {
            self.bgImageWidth = image.width;
            self.bgImageHeight = image.height;
        }

        return url;
    }
}

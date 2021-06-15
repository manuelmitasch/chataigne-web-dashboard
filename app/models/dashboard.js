import Model, { attr, hasMany } from '@ember-data/model';
import { sort } from '@ember/object/computed';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DashboardModel extends Model {
    @service('url') urlService

    @attr('string') name

    @attr('number') width
    @attr('number') height

    @attr() bgColor
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

        
    @computed('bgColor')
    get bgColorRgba() {
        return this.transformToRgba('bgColor');
    }

    transformToRgba(parameterName) {
        let color = this[parameterName];

        if (color) {
            const red = parseInt(this[parameterName][0] * 255);
            const green = parseInt(this[parameterName][1] * 255);
            const blue = parseInt(this[parameterName][2] * 255);
            const alpha = this[parameterName][3];
    
            return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha +  ')';
        }

        return 'none';
    }
}

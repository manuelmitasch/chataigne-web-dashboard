import Model, { attr, hasMany } from '@ember-data/model';
import { sort } from '@ember/object/computed';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DashboardModel extends Model {
    @service('url') urlService
    @service('settings') settings
    @service('router') router

    @attr('string') name

    @attr('number') width
    @attr('number') height

    @attr() bgColor
    @attr('string') bgImage;
    @attr('number') bgImageAlpha;
    @attr('number') bgImageScale;
    @attr('number') bgImageWidth;
    @attr('number') bgImageHeight;

    @attr('string') password
    @attr('string') passwordEntered
    @attr('boolean') unlockOnce
    
    @hasMany('control', { polymorphic: true }) controls

    controlSorting = ['positionY', 'positionX']
    @sort('controls', 'controlSorting') sortedControls

    get controlAddress() {
        return "/dashboard/" + this.id;
    }

    get itemControlAddress() {
        return this.controlAddress;
    }

    get unlocked() {
        return this.password == this.passwordEntered;
    }

    get bgSrc() {
        let url = this.urlService.imageSrc(this.bgImage)+ "&" + (new Date()).getTime();

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

    @computed('router.currentURL')
    get isActive() {
        return this.router.isActive("dashboard", this.id);
    }
      
    get activeStyle() {
        let bgColor = (!this.isActive) ? this.settings.tabBgColorRgba : this.settings.tabBgColorSelectedRgba;
        let textColor = (!this.isActive) ? this.settings.tabTextColorRgba : this.settings.tabTextColorSelectedRgba;
        let borderColor = (!this.isActive) ? this.settings.tabBorderColorRgba : this.settings.tabBorderColorSelectedRgba;
        let borderWidth = (!this.isActive) ? this.settings.tabBorderWidth : this.settings.tabBorderWidthSelected;

        let styles = {
            background: bgColor,
            color: textColor,
            borderColor: borderColor,
            padding: (10-borderWidth/2) + "px",
            borderWidth: borderWidth/2 + "px",
        };
        
        return styles;
    }
}

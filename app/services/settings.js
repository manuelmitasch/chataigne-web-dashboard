import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';


const displayLayoutKey = "displayLayout"
const scaleLayoutKey = "scaleLayout"
const hideListKey = "hideList"

export default class SettingsService extends Service {
    @tracked displayLayout = true;
    @tracked scaleLayout = true;
    @tracked menuOpen = false;
    @tracked viewWidth = 1920;
    @tracked viewHeight = 1080;    
    @tracked dashboardScale = 1;
    @tracked appName = "Chataigne";
    @tracked hideList = false;
    @tracked hideMenu = false;

    @tracked tabBgColor = [0.18, 0.18, 0.18, 1];
    @tracked tabTextColor = [0.82, 0.82, 0.82, 1];
    @tracked tabBorderColor = [0, 0, 0, 0];
    @tracked tabBorderWidth = 0;

    init() {
        super.init(...arguments);

        this.displayLayout = this.getLocalStorage(displayLayoutKey, true);
        this.scaleLayout = this.getLocalStorage(scaleLayoutKey, true);
        this.hideList = this.getLocalStorage(hideListKey, false);
    }

    toggleDisplayLayout() {
        this.displayLayout = !this.displayLayout;
        this.setLocalStorage(displayLayoutKey, this.displayLayout);
    } 
    
    toggleScaleLayout() {
        this.scaleLayout = !this.scaleLayout;
        this.setLocalStorage(scaleLayoutKey, this.scaleLayout);
    } 
        
    toggleHideList() {
        this.hideList = !this.hideList;
        this.setLocalStorage(hideListKey, this.hideList);
    } 
            
    toggleHideMenu() {
        this.hideMenu = !this.hideMenu;
    } 

    getLocalStorage(key, defaultValue) {
        let value = localStorage.getItem(key);

        if (value == null) {
            this.setLocalStorage(key, defaultValue);
            return defaultValue;
        } 

        return value == 1;
    }

    setLocalStorage(key, value) {
        value = (value) ? 1 : 0;
        localStorage.setItem(key, value);
    }


    /////////// TABS
    get tabStyles() {
        let styles = {
          ...((this.tabBgColor) && { background: this.tabBgColorRgba }),
          ...((this.tabTextColor) && { color: this.tabTextColorRgba }),
          ...((this.tabBorderColor) && { borderColor: this.tabBorderColorRgba }),
          ...((this.tabBorderWidth) && { borderWidth: this.tabBorderWidth/2 + "px" }),
          ...((this.tabBorderWidth) && { padding: (10-this.tabBorderWidth/2) + "px" }),
        };
    
        return styles;
    }

    @computed('tabBgColor', 'tabBgColor.0')
    get tabBgColorRgba() {
        return this.transformToRgba('tabBgColor');
    }

    @computed('tabTextColor')
    get tabTextColorRgba() {
        return this.transformToRgba('tabTextColor');
    }
            
    @computed('tabBorderColor')
    get tabBorderColorRgba() {
        return this.transformToRgba('tabBorderColor');
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

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
    @tracked appVersion = ""
    @tracked osName = ""
    @tracked hideList = false;
    @tracked hideMenu = false;

    @tracked tabBgColor = [0.18, 0.18, 0.18, 1];
    @tracked tabBgColorSelected = [0.49, 0.7, 0.34, 1];
    @tracked tabTextColor = [0.82, 0.82, 0.82, 1];
    @tracked tabTextColorSelected = [0, 0, 0, 1];
    @tracked tabBorderColor = [0, 0, 0, 0];
    @tracked tabBorderColorSelected = [0, 0, 0, 0];
    @tracked tabBorderWidth = 0;
    @tracked tabBorderWidthSelected = 0;

    @tracked password = ""
    @tracked passwordEntered = ""

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


    @computed('tabBgColor', 'tabBgColor.0')
    get tabBgColorRgba() {
        return this.transformToRgba('tabBgColor');
    }

    @computed('tabBgColorSelected', 'tabBgColorSelected.0')
    get tabBgColorSelectedRgba() {
        return this.transformToRgba('tabBgColorSelected');
    }

    @computed('tabTextColor')
    get tabTextColorRgba() {
        return this.transformToRgba('tabTextColor');
    }

    @computed('tabTextColorSelected')
    get tabTextColorSelectedRgba() {
        return this.transformToRgba('tabTextColorSelected');
    }
            
    @computed('tabBorderColor')
    get tabBorderColorRgba() {
        return this.transformToRgba('tabBorderColor');
    }
                
    @computed('tabBorderColorSelected')
    get tabBorderColorSelectedRgba() {
        return this.transformToRgba('tabBorderColorSelected');
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

    get unlocked() {
        return this.password == this.passwordEntered;
    }
}

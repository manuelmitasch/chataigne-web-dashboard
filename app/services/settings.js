import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

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
}

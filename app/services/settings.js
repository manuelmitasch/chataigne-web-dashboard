import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

const displayLayoutKey = "displayLayout"
const scaleLayoutKey = "scaleLayout"

export default class SettingsService extends Service {
    @tracked displayLayout = true;
    @tracked scaleLayout = true;
    @tracked menuOpen = false;
    @tracked viewWidth = 1920;
    @tracked viewHeight = 1080;    
    @tracked appName = "Chataigne";

    init() {
        super.init(...arguments);

        this.displayLayout = this.getLocalStorage(displayLayoutKey, true);
        this.scaleLayout = this.getLocalStorage(scaleLayoutKey, true);
    }

    toggleDisplayLayout() {
        this.displayLayout = !this.displayLayout;
        localStorage.setItem(displayLayoutKey, this.displayLayout);
    } 
    
    toggleScaleLayout() {
        this.scaleLayout = !this.scaleLayout;
        localStorage.setItem(scaleLayoutKey, this.scaleLayout);
    } 

    getLocalStorage(key, defaultValue) {
        let value = localStorage.getItem(key);

        if (value == null) {
            localStorage.setItem(key, defaultValue);
            return defaultValue;
        } 

        return value;
    }
}

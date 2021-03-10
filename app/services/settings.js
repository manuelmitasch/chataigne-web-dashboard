import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

const displayLayoutKey = "displayLayout"

export default class SettingsService extends Service {
    @tracked displayLayout = false;
    @tracked viewWidth = 1920;
    @tracked viewHeight = 1080;    

    init() {
        super.init(...arguments);

        this.displayLayout = localStorage.getItem(displayLayoutKey) == 'true';
    }

    toggleDisplayLayout() {
        this.displayLayout = !this.displayLayout;
        localStorage.setItem(displayLayoutKey, this.displayLayout);
    } 
}

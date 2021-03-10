import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
    @service('chataigne-websocket') socket
    @service('fullscreen') fullscreen
    @tracked selectedDashboard
    @tracked displayLayout = false;
    @tracked viewWidth = 1920;
    @tracked viewHeight = 1080;

    init() {
        super.init();
        this.displayLayout = localStorage.getItem('showLayout') == 'true';

    }

    get isConnected() {
        return this.socket.isConnected;
    }

    @action
    selectDashboard(dashboard, event) {
        if (event == undefined) {
            this.selectedDashboard = null;
        } else {
            this.selectedDashboard = dashboard;
        }
    }

    @computed("model")
    get modelCount() {
        let length = this.model.length;

        if (length > 0) {
            let firstDashboard = this.model.firstObject;
            this.selectedDashboard = firstDashboard;
        }
        return length;
    }

    @action
    reloadDashboards() {
        this.selectedDashboard = null;
        this.socket.reconnect(0);
    }

   @action
   toggleDisplayLayout() {
       this.displayLayout = !this.displayLayout;
       localStorage.setItem('showLayout', this.displayLayout);
   } 

   @action
   toggleFullscreen() {
       this.fullscreen.toggle();
       this.onResize();
   } 

   @action
   onResize(element) {
     this.viewWidth = document.documentElement.clientWidth;
     this.viewHeight = document.documentElement.clientHeight;
   }

}

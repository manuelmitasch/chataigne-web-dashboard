import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
    @service('chataigne-websocket') socket
    @tracked selectedDashboard
    @tracked displayLayout = false;

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

    @action
    reloadDashboards() {
        this.selectedDashboard = null;
        this.socket.reconnect(0);
    }

   @action
   toggleDisplayLayout() {
       this.displayLayout = !this.displayLayout;
   } 

}

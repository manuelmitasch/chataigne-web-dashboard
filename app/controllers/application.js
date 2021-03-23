import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { inject as controller} from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
    @service('chataigne-websocket') socket
    @service('settings') settings
    @service('fullscreen') fullscreen
    @controller('dashboard') dashboardController
    @tracked loaded = false

    init() {
        super.init();
        // this.socket.init();
    }

    get isConnected() {
        return this.socket.isConnected;
    }

    @action
    toggleDisplayLayout(e) {
        this.settings.toggleDisplayLayout();
        e.stopPropagation();
    } 

    @action
    toggleScaleLayout(e) {
        this.settings.toggleScaleLayout();
        e.stopPropagation();
    } 

    @action
    toggleFullscreen(e) {
        this.fullscreen.toggle();
        this.onResize();

        e.stopPropagation();
    } 

    @action
    onResize(element) {
        this.settings.viewWidth = document.documentElement.clientWidth;
        this.settings.viewHeight = document.documentElement.clientHeight;

        let selectedDashboard = this.dashboardController.model;
        let scaleWidth = this.settings.viewWidth / (selectedDashboard.width);
        let scaleHeight = (this.settings.viewHeight) / (selectedDashboard.height);

        let scale = (scaleWidth > scaleHeight) ? scaleHeight : scaleWidth;
        this.settings.dashboardScale = scale;
    }

    @action
    removePreload() {
        let self = this;

        setTimeout(function() {
            self.loaded = true;
        }, 1000);
    }

    @action
    hideMenu() {
        this.settings.menuOpen = false;
    }

    @action
    openMenu() {
        this.settings.menuOpen = true;
    }

    @computed("settings.dashboardScale", "settings.scaleLayout", "settings.displayLayout", "settings.viewWidth", "settings.viewHeight")
    get scaleStyle() {
        if (this.settings.displayLayout) {
            let scale = this.settings.dashboardScale;

            if (this.settings.scaleLayout) {
                return {
                    transformOrigin: 'top left',
                    transform: 'scale(' + scale + ')'
                }
            } else {
                return {}
            }
        } else {
            return {}
        }
    }
}

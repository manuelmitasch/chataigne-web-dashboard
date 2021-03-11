import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
    @service('chataigne-websocket') socket
    @service('settings') settings
    @service('fullscreen') fullscreen

    init() {
        super.init();
    }

    get isConnected() {
        return true;
        return this.socket.isConnected;
    }

    @action
    toggleDisplayLayout(e) {
        this.settings.toggleDisplayLayout();
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
    }

    @action
    hideMenu() {
        this.settings.menuOpen = false;
    }

    @action
    openMenu() {
        this.settings.menuOpen = true;
    }

}

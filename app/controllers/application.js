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
    toggleDisplayLayout() {
        this.settings.toggleDisplayLayout();
    } 

    @action
    toggleFullscreen() {
        this.fullscreen.toggle();
        this.onResize();
    } 

    @action
    onResize(element) {
        this.settings.viewWidth = document.documentElement.clientWidth;
        this.settings.viewHeight = document.documentElement.clientHeight;
    }

}

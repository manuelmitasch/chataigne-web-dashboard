import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
    @service('chataigne-websocket') socket;

    updateRecord(store, type, snapshot) {
        const controlAddress = snapshot.attr('controlAddress');
        const value = snapshot.attr('value');

        this.socket.sendFeedback(controlAddress, value);
    }
}

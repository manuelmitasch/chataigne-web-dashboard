import Service from '@ember/service';
import ENV from 'chataigne-web-dashboard/config/environment';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class WebsocketService extends Service {
    @service('websockets') websockets
    @service('store') store

    socket = null
    address = 'ws://' + location.host + '/ws'

    @tracked isConnected = false

    init() {
        super.init(...arguments);

        if (ENV.environment == 'development') {
            this.address = this.devAddress();
        }

        const socket = this.websockets.socketFor(this.address);
    
        socket.on('open', this.open, this);
        socket.on('close', this.reconnect, this);
        socket.on('message', this.handleMessage, this);
    
        this.set('socket', socket);
    }

    devAddress() {
        let address = location.host;
        address = address.split(':')[0];
        let port = 9999;

        return 'ws://' + address + ':' + port + '/ws';
    }

    open() {
        this.isConnected = true;
    }

    reconnect(time) {
        time = (time != undefined) ? time : 5000;

        this.store.unloadAll();
        this.isConnected = false;

        Ember.run.later(this, () => {
            this.socket.reconnect();
        }, time);
    }

    handleMessage(msg) {
        const payload = JSON.parse(msg.data);

        switch(payload.dataType) {
            case 'all':
                this.store.pushPayload(payload);
                break;

            case 'feedback':
                this.handleFeedback(payload);
                break;

            default:
                console.log('Data type not handled : '+payload.dataType);
                break;
      }
    }

    sendFeedback(address, value) {
        const data = { 'controlAddress' : address, 'value': value };
        console.log('Sending feedback for ' + address + ': ' + value);
        this.socket.send(JSON.stringify(data));
    }

    handleFeedback(payload) {
        console.log('Updating ' + payload.controlAddress + ': ' + payload.value);
        
        this.store.peekAll('float-control').forEach(function(item) {
            if (item.controlAddress == payload.controlAddress) {
                item.value = payload.value;
            }
        });

        this.store.peekAll('integer-control').forEach(function(item) {
            if (item.controlAddress == payload.controlAddress) {
                item.value = payload.value;
            }
        });

        this.store.peekAll('boolean-control').forEach(function(item) {
            if (item.controlAddress == payload.controlAddress) {
                item.value = payload.value;
            }
        });

        this.store.peekAll('string-control').forEach(function(item) {
            if (item.controlAddress == payload.controlAddress) {
                item.value = payload.value;
            }
        });

        this.store.peekAll('trigger-control').forEach(function(item) {
            if (item.controlAddress == payload.controlAddress) {
                item.triggered = true;
            }
        });

        this.store.peekAll('point2d-control').forEach(function(item) {
            if (item.controlAddress == payload.controlAddress) {
                item.value = payload.value[0];
                item.value2 = payload.value[1];
            }
        });

        this.store.peekAll('point3d-control').forEach(function(item) {
            if (item.controlAddress == payload.controlAddress) {
                item.value = payload.value[0];
                item.value2 = payload.value[1];
                item.value3 = payload.value[2];
            }
        });

        this.store.peekAll('color-control').forEach(function(item) {
            if (item.controlAddress == payload.controlAddress) {
                item.red = payload.value[0];
                item.green = payload.value[1];
                item.blue = payload.value[2];
                item.alpha = payload.value[3];
            }
        });
    }

}

import Service from '@ember/service';
import ENV from 'chataigne-web-dashboard/config/environment';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class WebsocketService extends Service {
    @service('websockets') websockets
    @service('settings') settings
    @service('store') store

    socket = null
    @tracked address = 'ws://' + location.host

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

        return 'ws://' + address + ':' + port;
    }

    open() {
        this.isConnected = true;
    }

    reconnect(time) {
        time = (time != undefined) ? time : 5000;

        // this.store.unloadAll();
        this.isConnected = false;

        Ember.run.later(this, () => {
            this.socket.reconnect();
        }, time);
    }

    handleMessage(msg) {
        const payload = JSON.parse(msg.data);

        if (payload.refresh) location.reload();

        switch(payload.dataType) {
            case 'all':
                this.store.pushPayload(payload);
                break;

            case 'feedback':
                if (this.settings.appVersion) {
                    if (payload.feedbackType == "uiFeedback") this.handleUiFeedback(payload);
                    else this.handleFeedback(payload);
                } else {
                    this.legacyHandleFeedback(payload);
                }
                break;

            default:
                console.log('Type not handled : '+payload.type);
                break;
      }
    }

    sendFeedback(address, value) {
        const data = { 'controlAddress' : address, 'value': value };
        console.log('Sending feedback for ' + address + ': ' + value);
        this.socket.send(JSON.stringify(data));
    }

    handleFeedback(payload) {
        console.log('Updating feedback ' + payload.controlAddress + ': ' + payload.value);
        if (!payload.type) return;
        
        let type = getControlType(payload.type);

        switch(type) {
            case 'integer-control':
            case 'float-control':
            case 'boolean-control':
            case 'enum-control':
            case 'string-control':
                this.store.peekAll(type).forEach(simpleUpdateHandler(payload)); 
                break;

            case 'trigger-control':
                this.store.peekAll(type).forEach(function(item) {
                    if (item.controlAddress == payload.controlAddress) {
                        item.triggered = true;
                    }
                });
                break;

            case 'point2d-control':
                this.store.peekAll(type).forEach(function(item) {
                    if (item.controlAddress == payload.controlAddress) {
                        if (!item.isEditing) {
                            item.value = payload.value[0];
                            item.value2 = payload.value[1];
                        }
                    }
                });
                break;

            case 'point3d-control':
                this.store.peekAll(type).forEach(function(item) {
                    if (item.controlAddress == payload.controlAddress) {
                        item.value = payload.value[0];
                        item.value2 = payload.value[1];
                        item.value3 = payload.value[2];
                    }
                });
                break;

            case 'color-control':
                this.store.peekAll(type).forEach(function(item) {
                    if (item.controlAddress == payload.controlAddress) {
                        item.red = payload.value[0];
                        item.green = payload.value[1];
                        item.blue = payload.value[2];
                        item.alpha = payload.value[3];
                    }
                });
                break;

            case 'texture':
                this.store.peekAll(type).forEach(function(item) {
                    if (item.itemControlAddress == payload.controlAddress) {
                            item.imgBlob = payload.value;
                            item.imgRatio = payload.ratio;
                    }
                });
                break;

            default:
                console.log('Data type not handled : ' + payload.dataType);
                break;
      }
    }

    handleUiFeedback(payload) {
        console.log('Updating uiFeedback ' + payload.controlAddress + ': ' + payload.value);

        if (!payload.targetType) return;

        let a = getUiFeedbackName(payload.controlAddress);
        let itemAddress = a.itemAddress;
        let uiParameter = a.uiParameter;
        let type = getControlType(payload.targetType);


        switch(uiParameter) {
            case "viewUIPosition":
                this.store.peekAll(type).forEach(positionUpdateHandler(payload, itemAddress));
                break;

            case "viewUISize":
                this.store.peekAll(type).forEach(sizeUpdateHandler(payload, itemAddress));
                break;

            case "textColor":
            case "borderWidth":
                this.store.peekAll(type).forEach(flexibleUpdateHandler(payload, itemAddress, uiParameter));
                break;

            case "borderColor":
                if (payload.enabled) {
                    this.store.peekAll(type).forEach(flexibleUpdateHandler(payload, itemAddress, "borderColor"));
                }
                this.store.peekAll(type).forEach(moreFlexibleUpdateHandler(payload, itemAddress, "borderColorEnabled", "enabled"));
                break;

            case "customText":
                if (payload.enabled) {
                    this.store.peekAll(type).forEach(flexibleUpdateHandler(payload, itemAddress, "customText"));
                }
                this.store.peekAll(type).forEach(moreFlexibleUpdateHandler(payload, itemAddress, "customTextEnabled", "enabled"));
                break;

            case "backgroundColor":
                this.store.peekAll(type).forEach(flexibleUpdateHandler(payload, itemAddress, "bgColor"));
                break;
            
            case "foregroundColor":
                this.store.peekAll(type).forEach(flexibleUpdateHandler(payload, itemAddress, "fgColor"));
                break;

            case "readOnly":
                this.store.peekAll(type).forEach(flexibleUpdateHandler(payload, itemAddress, "readOnly"));
                break;

            case "customDescription":
                this.store.peekAll(type).forEach(flexibleUpdateHandler(payload, itemAddress, "customDescription"));
                break;
                
            case "showValue":
                this.store.peekAll(type).forEach(flexibleUpdateHandler(payload, itemAddress, "showValue"));
                break;

            case "showLabel":
                this.store.peekAll(type).forEach(flexibleUpdateHandler(payload, itemAddress, "showLabel"));
                break;

            case "size":
                this.store.peekAll(type).forEach(flexibleUpdateHandler(payload, itemAddress, "size"));
                break;

            case "style":
                this.store.peekAll(type).forEach(function(item) {
                    if (item.itemControlAddress == itemAddress) {
                        item["style"] = payload.value;
                        if ((payload.value == 10 || payload.value == 11) && item.colorMap.length < 1) location.reload();
                    }
                });
                break;

            default:
                console.log('Ui feedback type not handled : ' + uiParameter);
        }
    }

    legacyHandleFeedback(payload) {
        console.log('Legacy Updating ' + payload.controlAddress + ': ' + payload.value);
        
        this.store.peekAll('texture').forEach(function(item) {
            if (item.itemControlAddress == payload.controlAddress) {
                    item.imgBlob = payload.value;
            }
        });

        this.store.peekAll('float-control').forEach(function(item) {
            if (item.controlAddress == payload.controlAddress) {
                if (!item.isEditing) {
                    item.value = payload.value;
                }
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

        this.store.peekAll('enum-control').forEach(function(item) {
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
                if (!item.isEditing) {
                    item.value = payload.value[0];
                    item.value2 = payload.value[1];
                }
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

const types = ['float-control', 'integer-control', 'boolean-control', 'enum-control', 'string-control', 'trigger-control', 'point2d-control', 'point3d-control', 'color-control', 'texture', "group", "comment"];

function getUiFeedbackName(address) {
    let lastSlash = address.lastIndexOf("/");
    let uiParameterName = address.substr(lastSlash+1, address.length-lastSlash);
    address = address.substr(0, lastSlash);

    return {
        "itemAddress": address,
        "uiParameter": uiParameterName
    };
}

function simpleUpdateHandler(payload) {
    return function(item) {
        if (item.controlAddress == payload.controlAddress) {
            if (!item.isEditing) {
                item.value = payload.value;
            }
        }
    }
};

function positionUpdateHandler(payload, itemAddress) {
    return function(item) {
        if (item.itemControlAddress == itemAddress) {
            item.nativePositionX = payload.value[0];
            item.nativePositionY = payload.value[1];
        }
    }
};

function sizeUpdateHandler(payload, itemAddress) {
    return function(item) {
        if (item.itemControlAddress == itemAddress) {
            item.width = payload.value[0];
            item.height = payload.value[1];
        }
    }
};

function flexibleUpdateHandler(payload, itemAddress, parameterName) {
    return function(item) {
        if (item.itemControlAddress == itemAddress) {
            item[parameterName] = payload.value;
        }
    }
};

function moreFlexibleUpdateHandler(payload, itemAddress, parameterName, payloadParameterName) {
    return function(item) {
        if (item.itemControlAddress == itemAddress) {
            item[parameterName] = payload[payloadParameterName];
        }
    }
};



function getControlType(type) {
    switch (type) {
      case "Float": 
        type = "float-control"; break;
      case "Integer": 
        type = "integer-control"; break;
      case "Boolean": 
        type = "boolean-control"; break;
      case "String":
        type = "string-control"; break;
      case "Trigger":
        type = "trigger-control"; break;
      case "Point2D":
        type = "point2d-control"; break;
      case "Point3D":
        type = "point3d-control"; break;
      case "Color":
        type = "color-control"; break;
      case "Enum":
        type = "enum-control"; break;
      case "DashboardCommentItem":
        type = "comment"; break;
      case "DashboardGroupItem":
        type = "group"; break;
      case "Shared Texture":
        type = "texture"; break;
      default:
        type = "control";
      }
      return type;
  }
  
import Serializer from '@ember-data/serializer';
import {uuid} from 'ember-cli-uuid';
import { inject as service } from '@ember/service';

export default class ApplicationSerializer extends Serializer {
    @service('settings') settings

    pushPayload(store, payload) {
        let normalizedPayload = this.normalizeResponse(store, "dashboard", payload);
        store.push(normalizedPayload);
    }

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        let result = {
            "data": [],
            "included": []
        };

        var includedData = [];

        this.settings.appName = payload.appName;
        
        payload.items.forEach(function(dashboard) {
          let dashboardHash = {
            "type": "dashboard",
            "id": dashboard.id,
            "attributes": {
              "name": dashboard.name,
              "width": dashboard.size[0],
              "height": dashboard.size[1]
            },
            "relationships": {
                "controls": {
                    "data": []
                }
            },
          }
          
          var controlRelationshipData = [];

          if (dashboard.items) {
            dashboard.items.forEach(function(item, index) {
              let type = item.type;
              let isGroup = (item.items != undefined);
              let isComment = (item.text != undefined);
              let hash = {};

              if (isGroup) {
                let group = getGroupHash(item, dashboard, index);

                controlRelationshipData.push({ "id": group.hash.id, "type": group.hash.type });
                includedData.push(group.hash);

                group.included.forEach(function(item) {
                  includedData.push(item);
                });
              } else if (isComment) {
                hash = getCommentHash(item, dashboard, index);
                
                controlRelationshipData.push({ "id": hash.id, "type": hash.type });
                includedData.push(hash);
              } else {
                hash = getControlHash(item, dashboard);

                controlRelationshipData.push({ "id": hash.id, "type": hash.type });
                includedData.push(hash);
              }
            });
          }
          
          dashboardHash.relationships.controls.data = controlRelationshipData;
          result.data.push(dashboardHash);
        });

        result.included = includedData;
        return result;
    }
}


function convertCoordinate(value, max, fromGroup) {
  if (fromGroup) return value;

  value = value + (max/2);
  return value;
};


function getCommentHash(item, dashboard, index, fromGroup) {
  let id = "comment-" + uuid();

  let commentHash =  { 
    "id": id, 
    "type": 'comment', 
    "attributes": { 
        "positionX": convertCoordinate(item.position[0], dashboard.size[0], fromGroup),
        "positionY": convertCoordinate(item.position[1], dashboard.size[1], fromGroup),
        "text": item.text,
        "size": item.size,
        "backgroundAlpha": item.backgroundAlpha,
        "color": item.color,
    }
  }

  return commentHash;
}


function getGroupHash(group, dashboard, index, fromGroup) {
  let id = "group-" + uuid();
  let includedData = [];

  let groupHash =  { 
    "id": id, 
    "type": 'group', 
    "attributes": { 
        "positionX": convertCoordinate(group.position[0], dashboard.size[0], fromGroup),
        "positionY": convertCoordinate(group.position[1], dashboard.size[1], fromGroup),
        "width": group.size[0],
        "height": group.size[1],
        "backgroundColor": group.backgroundColor,
        "borderColor": group.borderColor,
        "borderWidth": group.borderWidth,
    },
    "relationships": {
      "controls": {
          "data": []
      }
    }
  }

  var controlRelationshipData = [];

  if (group.items) {
    group.items.forEach(function(item, index) {
      let type = item.type;
      let isGroup = (item.items != undefined);
      let isComment = (item.text != undefined);
      let hash = {};

      if (isGroup) {
        let groupHash = getGroupHash(item, group, index, true);

        controlRelationshipData.push({ "id": groupHash.hash.id, "type": groupHash.hash.type });
        
        groupHash.included.forEach(function(i) {
          includedData.push(i);
        });
      } else if (isComment) {
        hash = getCommentHash(item, group, index, true);
        
        controlRelationshipData.push({ "id": hash.id, "type": hash.type });
        includedData.push(hash);
      } else {
        hash = getControlHash(item, group, true);

        controlRelationshipData.push({ "id": hash.id, "type": hash.type });
        includedData.push(hash);
      }
    });
  }
  
  groupHash.relationships.controls.data = controlRelationshipData;

  return {
    hash: groupHash,
    included: includedData
  };
}

function getControlHash(item, dashboard, fromGroup) {
  // let id = dashboard.id + "-" + item.id; 
  let id = uuid();
  let type = getControlType(item);

  let controlHash =  { 
    "id": id, 
    "type":type, 
    "attributes": { 
        "label": item.label, 
        "value": item.value, 
        "minVal": item.minVal, 
        "maxVal": item.maxVal,
        "controlAddress": item.controlAddress,
        "positionX": convertCoordinate(item.position[0], dashboard.size[0], fromGroup),
        "positionY": convertCoordinate(item.position[1], dashboard.size[1], fromGroup),
        "width": item.size[0],
        "height": item.size[1],
        "defaultUI": item.defaultUI,
        "style": item.style,
    }
  }

  if (type == "point2d-control") {
    controlHash.attributes.value = item.value[0];
    controlHash.attributes.value2 = item.value[1];

    if (controlHash.attributes.minVal) {
      controlHash.attributes.minVal = item.minVal[0];
      controlHash.attributes.minVal2 = item.minVal[1];
    }
    
    if (controlHash.attributes.maxVal) {
      controlHash.attributes.maxVal = item.maxVal[0];
      controlHash.attributes.maxVal2 = item.maxVal[1];
    }
  }

  if (type == "point3d-control") {
    controlHash.attributes.value = item.value[0];
    controlHash.attributes.value2 = item.value[1];
    controlHash.attributes.value3 = item.value[2];

    if (item.minVal) {
      controlHash.attributes.minVal = item.minVal[0];
      controlHash.attributes.minVal2 = item.minVal[1];
      controlHash.attributes.minVal3 = item.minVal[2];
    }
    
    if (item.maxVal) {
      controlHash.attributes.maxVal = item.maxVal[0];
      controlHash.attributes.maxVal2 = item.maxVal[1];
      controlHash.attributes.maxVal3 = item.maxVal[2];
    }
  }

  if (type == "color-control") {
    controlHash.attributes.red = item.value[0];
    controlHash.attributes.green = item.value[1];
    controlHash.attributes.blue = item.value[2];
    controlHash.attributes.alpha = item.value[3];
  }

  if (type == "enum-control") {
    controlHash.attributes.value = item.value

    var options = item.options.map(function(o) {
      return o.key;
    });

    controlHash.attributes.options = options;
  }

  return controlHash;
}


function getControlType(item) {
  let type = item.type;

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
    default:
      type = "control";
    }
    return type;
}
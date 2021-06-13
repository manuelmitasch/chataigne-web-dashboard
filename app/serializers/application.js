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

          if (dashboard.bgImage) {
            dashboardHash.attributes.bgImage = dashboard.bgImage;
            dashboardHash.attributes.bgImageAlpha = dashboard.bgImageAlpha;
            dashboardHash.attributes.bgImageScale = dashboard.bgImageScale;
          }
          
          var controlRelationshipData = [];

          if (dashboard.items) {
            dashboard.items.forEach(function(item, index) {
              let { data, included } = getHash(item, dashboard, index);
              controlRelationshipData.push({ "id": data.id, "type": data.type });
              includedData.push(data);

              included.forEach(function(i) {
                includedData.push(i);
              });
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


function getHash(item, dashboard, index, fromGroup) {
  let modelType = getControlType(item);

  if (modelType == "comment") return getCommentHash(item, dashboard, index, fromGroup);
  else if (modelType == "group") return getGroupHash(item, dashboard, index, fromGroup);
  return getControlHash(item, dashboard, index, fromGroup);
}


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

  return { data: commentHash, included: [] };
}


function getGroupHash(group, dashboard, index, fromGroup) {
  let id = "group-" + uuid();
  let includedData = [];
  let controlRelationshipData = [];

  let data =  { 
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


  if (group.items) {
    group.items.forEach(function(item, index) {
      let { data, included } = getHash(item, dashboard, index, true);
      controlRelationshipData.push({ "id": data.id, "type": data.type });
      includedData.push(data);

      included.forEach(function(i) {
        includedData.push(i);
      });
    });

    data.relationships.controls.data = controlRelationshipData;
  }
  return {
    data: data,
    included: includedData
  };
}


function getControlHash(item, dashboard, index, fromGroup) {
  let type = getControlType(item);
  let id = type + "-" + uuid();

  let data =  { 
    "id": id, 
    "type":type, 
    "attributes": { 
        "label": item.label, 
        "showLabel": item.showLabel,
        "value": item.value, 
        "minVal": item.minVal, 
        "maxVal": item.maxVal,
        "controlAddress": item.controlAddress,

        "positionX": convertCoordinate(item.position[0], dashboard.size[0], fromGroup),
        "positionY": convertCoordinate(item.position[1], dashboard.size[1], fromGroup),
        "width": item.size[0],
        "height": item.size[1],

        "textColor": item.textColor,
        "bgColor": item.bgColor,
        "fgColor": item.fgColor,
        "contourColor": item.contourColor,
        "contourThickness": item.contourThickness,
        "opaqueBackground": item.opaqueBackground,

        "defaultUI": item.defaultUI,
        "style": item.style,
    }
  }

  if (type == "point2d-control") {
    data.attributes.value = item.value[0];
    data.attributes.value2 = item.value[1];

    if (data.attributes.minVal) {
      data.attributes.minVal = item.minVal[0];
      data.attributes.minVal2 = item.minVal[1];
    }
    
    if (data.attributes.maxVal) {
      data.attributes.maxVal = item.maxVal[0];
      data.attributes.maxVal2 = item.maxVal[1];
    }
  }

  if (type == "point3d-control") {
    data.attributes.value = item.value[0];
    data.attributes.value2 = item.value[1];
    data.attributes.value3 = item.value[2];

    if (item.minVal) {
      data.attributes.minVal = item.minVal[0];
      data.attributes.minVal2 = item.minVal[1];
      data.attributes.minVal3 = item.minVal[2];
    }
    
    if (item.maxVal) {
      data.attributes.maxVal = item.maxVal[0];
      data.attributes.maxVal2 = item.maxVal[1];
      data.attributes.maxVal3 = item.maxVal[2];
    }
  }

  if (type == "color-control") {
    data.attributes.red = item.value[0];
    data.attributes.green = item.value[1];
    data.attributes.blue = item.value[2];
    data.attributes.alpha = item.value[3];
  }

  if (type == "enum-control") {
    data.attributes.value = item.value

    var options = item.options.map(function(o) {
      return o.key;
    });

    data.attributes.options = options;
  }

  return { data: data, included: [] };
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
    case "DashboardCommentItem":
          type = "comment"; break;
    case "DashboardGroupItem":
          type = "group"; break;
    default:
      type = "control";
    }
    return type;
}

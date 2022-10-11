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
        this.settings.appVersion = payload.appVersion;
        this.settings.osName = payload.osName;
        this.settings.password = payload.password || "";
        
        if (payload.tabs) {
          this.settings.tabBgColor = payload.tabs.bgColor;
          this.settings.tabBgColorSelected = payload.tabs.bgColorSelected;
          this.settings.tabTextColor = payload.tabs.textColor || payload.tabs.labelColor;
          this.settings.tabTextColorSelected = payload.tabs.labelColorSelected;
          this.settings.tabBorderColor = payload.tabs.borderColor;
          this.settings.tabBorderColorSelected = payload.tabs.borderColorSelected;
          this.settings.tabBorderWidth = payload.tabs.borderWidth;
          this.settings.tabBorderWidthSelected = payload.tabs.borderWidthSelected;
        }

        payload.items.forEach(function(dashboard) {
          let dashboardHash = {
            "type": "dashboard",
            "id": dashboard.id,
            "attributes": {
              "name": dashboard.name,
              "password": dashboard.password || "",
              "passwordEntered": "",
              "unlockOnce": dashboard.unlockOnce || false,
              "width": dashboard.size[0],
              "height": dashboard.size[1],
              "bgColor": dashboard.bgColor
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
        "nativePositionX": item.position[0],
        "nativePositionY": item.position[1],
        "text": item.text,
        "size": item.size,
        "backgroundAlpha": item.backgroundAlpha,
        "color": item.color,
        "itemControlAddress": item.itemControlAddress,
        "inGroup": fromGroup
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
        "nativePositionX": group.position[0],
        "nativePositionY": group.position[1],
        "width": group.size[0],
        "height": group.size[1],
        "backgroundColor": group.backgroundColor,
        "borderColor": group.borderColor,
        "borderWidth": group.borderWidth,
        "itemControlAddress": group.itemControlAddress,
        "inGroup": fromGroup
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
        "labelRaw": item.label, 
        "customText": item.customText, 
        "customTextEnabled": item.customTextEnabled, 
        "showLabel": item.showLabel,
        "customDescription": item.customDescription,
        "value": item.value, 
        "minVal": item.minVal, 
        "maxVal": item.maxVal,
        "showValue": (item.showValue == undefined) ? true : item.showValue,
        "controlAddress": item.controlAddress,
        "itemControlAddress": item.itemControlAddress,
        "name": item.name,

        "width": item.size[0],
        "height": item.size[1],
        
        "nativePositionX": item.position[0],
        "nativePositionY": item.position[1],

        "textSize": item.textSize,
        "textColor": item.textColor,
        "bgColor": item.bgColor,
        "fgColor": item.fgColor,
        "borderColor": item.borderColor || item.contourColor,
        "borderColorEnabled": item.borderColorEnabled,
        "borderWidth": item.borderWidth || item.contourThickness,
        "opaqueBackground": item.opaqueBackground,
        "customImage": item.customImage,
        "colorMap": getColorMap(item.colorMap, type),

        "defaultUI": item.defaultUI,
        "style": item.style,
        "readOnly": item.readOnly,

        "inGroup": fromGroup
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

  if (type == "link-control") {
    data.attributes.target = item.target;
    data.attributes.setInClients = item.setInClients;
  }

  if (type == "iframe-container") {
    data.attributes.url = item.url;
  }

  if (type == "boolean-control") {
    data.attributes.momentaryMode = item.momentaryMode;
    data.attributes.buttonUI = item.buttonUI;
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
    case "Shared Texture":
      type = "texture"; break;
    case "DashboardLinkItem":
      type = "link-control"; break;
    case "IFrame":
      type = "iframe-container"; break;
    default:
      type = "control";
    }
    return type;
}

function getColorMap(map, type) {
  if (!map) return [];
  if (type != "integer-control" && type != "float-control") return map;
  
  let result = [];
 
  for (const [key, value] of Object.entries(map)) {
    result[parseFloat(key)] = value;
  }
   
  return result;
}

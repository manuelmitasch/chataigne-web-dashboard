import Serializer from '@ember-data/serializer';

export default class ApplicationSerializer extends Serializer {
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
          
          var relationshipData = [];

          if (dashboard.items) {
            dashboard.items.forEach(function(item) {
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

              relationshipData.push({ "id": dashboard.id + "-" + item.id, "type": type });
              
              let controlHash = { 
                "id": dashboard.id + "-" + item.id, 
                "type": type, 
                "attributes": { 
                    "label": item.label, 
                    "value": item.value, 
                    "minVal": item.minVal, 
                    "maxVal": item.maxVal,
                    "controlAddress": item.controlAddress,
                    "positionX": convertCoordinate(item.position[0], dashboard.size[0]),
                    "positionY": convertCoordinate(item.position[1], dashboard.size[1]),
                    "width": item.size[0],
                    "height": item.size[1],
                    "defaultUI": item.defaultUI,
                }
              }

              if (type == "point2d-control") {
                controlHash.attributes.value = item.value[0];
                controlHash.attributes.minVal = item.minVal[0];
                controlHash.attributes.maxVal = item.maxVal[0];

                controlHash.attributes.value2 = item.value[1];
                controlHash.attributes.minVal2 = item.minVal[1];
                controlHash.attributes.maxVal2 = item.maxVal[1];
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

              includedData.push(controlHash);
            });
          }
          
          dashboardHash.relationships.controls.data = relationshipData;
          result.data.push(dashboardHash);
        });

        result.included = includedData;

        return result;
    }
}


function convertCoordinate(value, max) {
  value = value + (max/2);
  return value;
};

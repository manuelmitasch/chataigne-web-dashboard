'use strict';



;define("chataigne-web-dashboard/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("chataigne-web-dashboard/adapters/application", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationAdapter = (_dec = Ember.inject.service('chataigne-websocket'), (_class = (_temp = class ApplicationAdapter extends _jsonApi.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "socket", _descriptor, this);
    }

    updateRecord(store, type, snapshot) {
      const controlAddress = snapshot.attr('controlAddress');
      const value = snapshot.attr('value');
      this.socket.sendFeedback(controlAddress, value);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "socket", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationAdapter;
});
;define("chataigne-web-dashboard/app", ["exports", "ember-resolver", "ember-load-initializers", "chataigne-web-dashboard/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("chataigne-web-dashboard/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("chataigne-web-dashboard/components/boolean-control", ["exports", "chataigne-web-dashboard/components/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <ControlContainer @control={{@control}}>
      <div class="clear"></div>
      <Input @type="checkbox" @checked={{@control.value}} {{on "input" (fn this.update @control.value)}} class="switch" />
      {{yield}}
  </ControlContainer>
  */
  {"id":"haqas4fl","block":"{\"symbols\":[\"@control\",\"&default\"],\"statements\":[[8,\"control-container\",[],[[\"@control\"],[[32,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"div\"],[14,0,\"clear\"],[12],[13],[2,\"\\n    \"],[8,\"input\",[[24,0,\"switch\"],[4,[38,1],[\"input\",[30,[36,0],[[32,0,[\"update\"]],[32,1,[\"value\"]]],null]],null]],[[\"@type\",\"@checked\"],[\"checkbox\",[32,1,[\"value\"]]]],null],[2,\"\\n    \"],[18,2,null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\"]}","meta":{"moduleName":"chataigne-web-dashboard/components/boolean-control.hbs"}});

  let BooleanControlComponent = (_dec = Ember._action, _dec2 = Ember._action, (_class = class BooleanControlComponent extends _control.default {
    input(event) {}

    update(value, event) {
      const control = this.args.control;
      this.socket.sendFeedback(control.controlAddress, !control.value); // control.save();
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "input", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "input"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype)), _class));
  _exports.default = BooleanControlComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, BooleanControlComponent);
});
;define("chataigne-web-dashboard/components/canvas-point2d", ["exports", "chataigne-web-dashboard/components/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="canvas" style="width: {{this.canvasWidth}}px; height: {{this.canvasHeight}}px"
      {{on "click" this.updatePosition}} 
      {{on "mousedown" (fn this.updateEditing true)}}
      {{on "touchstart" (fn this.updateEditing true)}}
      {{on "mouseup" (fn this.updateEditing false)}}
      {{on "touchend" (fn this.updateEditing false)}}
      {{did-insert this.registerListener}}
      {{will-destroy this.unregisterListener}}
  >
      <div class="point" style="left: {{this.pointX}}px; top: {{this.pointY}}px"></div>
      <div class="crosshair x" style="top: {{this.crosshairY}}px"></div>
      <div class="crosshair y" style="left: {{this.crosshairX}}px"></div>
  </div>
  
  {{yield}}
  */
  {"id":"ehkfYF66","block":"{\"symbols\":[\"&default\"],\"statements\":[[11,\"div\"],[24,0,\"canvas\"],[16,5,[31,[\"width: \",[32,0,[\"canvasWidth\"]],\"px; height: \",[32,0,[\"canvasHeight\"]],\"px\"]]],[4,[38,0],[\"click\",[32,0,[\"updatePosition\"]]],null],[4,[38,0],[\"mousedown\",[30,[36,1],[[32,0,[\"updateEditing\"]],true],null]],null],[4,[38,0],[\"touchstart\",[30,[36,1],[[32,0,[\"updateEditing\"]],true],null]],null],[4,[38,0],[\"mouseup\",[30,[36,1],[[32,0,[\"updateEditing\"]],false],null]],null],[4,[38,0],[\"touchend\",[30,[36,1],[[32,0,[\"updateEditing\"]],false],null]],null],[4,[38,2],[[32,0,[\"registerListener\"]]],null],[4,[38,3],[[32,0,[\"unregisterListener\"]]],null],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"point\"],[15,5,[31,[\"left: \",[32,0,[\"pointX\"]],\"px; top: \",[32,0,[\"pointY\"]],\"px\"]]],[12],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"crosshair x\"],[15,5,[31,[\"top: \",[32,0,[\"crosshairY\"]],\"px\"]]],[12],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"crosshair y\"],[15,5,[31,[\"left: \",[32,0,[\"crosshairX\"]],\"px\"]]],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[18,1,null]],\"hasEval\":false,\"upvars\":[\"on\",\"fn\",\"did-insert\",\"will-destroy\"]}","meta":{"moduleName":"chataigne-web-dashboard/components/canvas-point2d.hbs"}});

  let CanvasPoint2dComponent = (_dec = Ember._tracked, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, _dec6 = Ember._action, _dec7 = Ember._action, _dec8 = Ember._action, _dec9 = Ember._action, (_class = (_temp = class CanvasPoint2dComponent extends _control.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "editing", _descriptor, this);

      _defineProperty(this, "canvasWidth", 300);

      _defineProperty(this, "canvasHeight", 300);
    }

    get pointX() {
      const control = this.args.control;
      const result = this.remapValue(control.value, control.minVal, control.maxVal, -2.5, this.canvasWidth - 3.5);
      return result;
    }

    get pointY() {
      const control = this.args.control;
      const result = this.remapValue(control.value2, control.minVal2, control.maxVal2, -1.5, this.canvasHeight - 2.5);
      return result;
    }

    get crosshairX() {
      return this.pointX + 2;
    }

    get crosshairY() {
      return this.pointY - 3;
    }

    updateEditing(value, event) {
      this.editing = value;
    }

    updatePosition(event) {
      let offsetTop = event.target.offsetTop;
      let offsetLeft = event.target.offsetLeft;
      let pageX = event.pageX;
      let pageY = event.pageY;
      let srcElement = event.srcElement;

      if (srcElement.classList.contains("canvas")) {
        this.calculateXY(pageX, pageY, offsetLeft, offsetTop, srcElement);
      } else {
        let canvasElement = srcElement.parentElement;
        offsetTop = canvasElement.offsetTop;
        offsetLeft = canvasElement.offsetLeft;
        this.calculateXY(pageX, pageY, offsetLeft, offsetTop, canvasElement);
      }
    }

    calculateXY(pageX, pageY, offsetLeft, offsetTop, canvasElement) {
      const control = this.args.control;
      let clickX = pageX - offsetLeft;
      let clickY = pageY - offsetTop;
      let valueX = this.remapValue(clickX, 0, this.canvasWidth, control.minVal, control.maxVal);
      let valueY = this.remapValue(clickY, 0, this.canvasHeight + 1, control.minVal2, control.maxVal2);
      control.value = valueX;
      control.value2 = valueY;
      this.update();
    }

    update(event) {
      const control = this.args.control;

      if (control.value < control.minVal) {
        control.value = control.minVal;
      } else if (control.value > control.maxVal) {
        control.value = control.maxVal;
      }

      if (control.value2 < control.minVal2) {
        control.value2 = control.minVal2;
      } else if (control.value2 > control.maxVal2) {
        control.value2 = control.maxVal2;
      }

      this.socket.sendFeedback(control.controlAddress, [control.value, control.value2]); // control.save();
    }

    moveListener(event) {
      if (this.editing) {
        let offsetTop = event.target.offsetTop;
        let offsetLeft = event.target.offsetLeft;
        let pageX = event.pageX;
        let pageY = event.pageY;
        let srcElement = event.srcElement;

        if (srcElement.classList.contains("canvas")) {
          this.calculateXY(pageX, pageY, offsetLeft, offsetTop, srcElement);
        } else {
          let canvasElement = srcElement.parentElement;
          offsetTop = canvasElement.offsetTop;
          offsetLeft = canvasElement.offsetLeft;
          this.calculateXY(pageX, pageY, offsetLeft, offsetTop, canvasElement);
        }
      }
    }

    touchListener(event) {
      if (this.editing) {
        let offsetTop = event.target.offsetTop;
        let offsetLeft = event.target.offsetLeft;
        let pageX = event.changedTouches[0].pageX;
        let pageY = event.changedTouches[0].pageY;
        let srcElement = event.srcElement;

        if (srcElement.classList.contains("canvas")) {
          this.calculateXY(pageX, pageY, offsetLeft, offsetTop, srcElement);
        } else {
          let canvasElement = srcElement.parentElement;
          offsetTop = canvasElement.offsetTop;
          offsetLeft = canvasElement.offsetLeft;
          this.calculateXY(pageX, pageY, offsetLeft, offsetTop, canvasElement);
        }

        event.preventDefault();
      }
    }

    leaveListener(event) {
      this.editing = false;
    }

    registerListener(element) {
      element.addEventListener('mousemove', this.moveListener);
      element.addEventListener('touchmove', this.touchListener);
      element.addEventListener('mouseleave', this.leaveListener);
    }

    unregisterListener(element) {
      element.removeEventListener('movemove', this.moveListener);
      element.removeEventListener('touchmove', this.touchListener);
      element.removeEventListener('mouseleave', this.leaveListener);
    }

    remapValue(value, in_min, in_max, out_min, out_max) {
      return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "editing", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "updateEditing", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "updateEditing"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updatePosition", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "updatePosition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "moveListener", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "moveListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "touchListener", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "touchListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "leaveListener", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "leaveListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "registerListener", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "registerListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unregisterListener", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "unregisterListener"), _class.prototype)), _class));
  _exports.default = CanvasPoint2dComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, CanvasPoint2dComponent);
});
;define("chataigne-web-dashboard/components/color-control", ["exports", "chataigne-web-dashboard/components/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <ControlContainer @control={{@control}} @extraClass="no-bottom-padding">
      <div class="secondary-container">
          <Input value={{ this.roundedRed }} {{on "change" (fn this.input "red") }} {{on "change" this.update }} class="secondary" />
          <Input value={{ this.roundedGreen }} {{on "change" (fn this.input "green") }} {{on "change" this.update }} class="secondary" />
          <Input value={{ this.roundedBlue }} {{on "change" (fn this.input "blue") }} {{on "change" this.update }} class="secondary" />
          <Input value={{ this.roundedAlpha }} {{on "change" (fn this.input "alpha") }} {{on "change" this.update }} class="secondary" />
      </div>
      
      <div class="clear"></div>
      <Input value={{ @control.hex }} {{on "input" this.input }} {{on "input" this.update}} type="color" />
      {{yield}}
  </ControlContainer>
  */
  {"id":"tT1bznO5","block":"{\"symbols\":[\"@control\",\"&default\"],\"statements\":[[8,\"control-container\",[],[[\"@control\",\"@extraClass\"],[[32,1],\"no-bottom-padding\"]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"div\"],[14,0,\"secondary-container\"],[12],[2,\"\\n        \"],[8,\"input\",[[16,2,[32,0,[\"roundedRed\"]]],[24,0,\"secondary\"],[4,[38,1],[\"change\",[30,[36,0],[[32,0,[\"input\"]],\"red\"],null]],null],[4,[38,1],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n        \"],[8,\"input\",[[16,2,[32,0,[\"roundedGreen\"]]],[24,0,\"secondary\"],[4,[38,1],[\"change\",[30,[36,0],[[32,0,[\"input\"]],\"green\"],null]],null],[4,[38,1],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n        \"],[8,\"input\",[[16,2,[32,0,[\"roundedBlue\"]]],[24,0,\"secondary\"],[4,[38,1],[\"change\",[30,[36,0],[[32,0,[\"input\"]],\"blue\"],null]],null],[4,[38,1],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n        \"],[8,\"input\",[[16,2,[32,0,[\"roundedAlpha\"]]],[24,0,\"secondary\"],[4,[38,1],[\"change\",[30,[36,0],[[32,0,[\"input\"]],\"alpha\"],null]],null],[4,[38,1],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n    \"],[13],[2,\"\\n    \\n    \"],[10,\"div\"],[14,0,\"clear\"],[12],[13],[2,\"\\n    \"],[8,\"input\",[[16,2,[32,1,[\"hex\"]]],[24,4,\"color\"],[4,[38,1],[\"input\",[32,0,[\"input\"]]],null],[4,[38,1],[\"input\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n    \"],[18,2,null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\"]}","meta":{"moduleName":"chataigne-web-dashboard/components/color-control.hbs"}});

  let ColorControlComponent = (_dec = Ember._action, _dec2 = Ember._action, (_class = class ColorControlComponent extends _control.default {
    input(channel, event) {
      const control = this.args.control;

      if (channel == "red") {
        control.red = event.target.value;
      } else if (channel == "green") {
        control.green = event.target.value;
      } else if (channel == "blue") {
        control.blue = event.target.value;
      } else if (channel == "alpha") {
        control.alpha = event.target.value;
      } else {
        event = channel;
        const hex = event.target.value;
        const rgb = this.hexToRGB(hex);
        control.red = rgb.red;
        control.green = rgb.green;
        control.blue = rgb.blue;
      }
    }

    update(event) {
      console.log("update from update method");
      const control = this.args.control;
      this.socket.sendFeedback(control.controlAddress, [control.red, control.green, control.blue, control.alpha]); // control.save();
    }

    get roundedRed() {
      const rounded = Number.parseFloat(this.args.control.red).toFixed(3);
      return parseFloat(rounded);
    }

    get roundedBlue() {
      const rounded = Number.parseFloat(this.args.control.blue).toFixed(3);
      return parseFloat(rounded);
    }

    get roundedGreen() {
      const rounded = Number.parseFloat(this.args.control.green).toFixed(3);
      return parseFloat(rounded);
    }

    get roundedAlpha() {
      const rounded = Number.parseFloat(this.args.control.alpha).toFixed(3);
      return parseFloat(rounded);
    }

    hexToRGB(h) {
      let r = 0,
          g = 0,
          b = 0; // 3 digits

      if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3]; // 6 digits
      } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
      }

      r = r / 255;
      g = g / 255;
      b = b / 255;
      return {
        "red": r,
        "green": g,
        "blue": b
      };
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "input", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "input"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype)), _class));
  _exports.default = ColorControlComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ColorControlComponent);
});
;define("chataigne-web-dashboard/components/control-container", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="container {{@extraClass}}">
      <label for={{@control.id}}>{{@control.label}}</label>
      
      {{yield}}
  </div>
  */
  {"id":"WBXYbeJ2","block":"{\"symbols\":[\"@extraClass\",\"@control\",\"&default\"],\"statements\":[[10,\"div\"],[15,0,[31,[\"container \",[32,1]]]],[12],[2,\"\\n    \"],[10,\"label\"],[15,\"for\",[32,2,[\"id\"]]],[12],[1,[32,2,[\"label\"]]],[13],[2,\"\\n    \\n    \"],[18,3,null],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}","meta":{"moduleName":"chataigne-web-dashboard/components/control-container.hbs"}});

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("chataigne-web-dashboard/components/control", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ControlComponent = (_dec = Ember.inject.service('chataigne-websocket'), _dec2 = Ember._action, _dec3 = Ember._action, (_class = (_temp = class ControlComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "socket", _descriptor, this);
    }

    input(event) {
      const control = this.args.control;
      control.value = event.target.value;
    }

    update(event) {
      const control = this.args.control;
      this.socket.sendFeedback(control.controlAddress, control.value); // control.save();
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "socket", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "input", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "input"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype)), _class));
  _exports.default = ControlComponent;
});
;define("chataigne-web-dashboard/components/dashboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <h1>{{@dashboard.name}}</h1>
  
  {{#each @dashboard.sortedControls as |control|}}
      {{#let (component control.constructor.modelName) as |WhateverName|}}
          <WhateverName @control={{control}} />
      {{/let}}
  {{/each}}
  
  {{yield}}
  */
  {"id":"bWqSkM9f","block":"{\"symbols\":[\"control\",\"WhateverName\",\"@dashboard\",\"&default\"],\"statements\":[[10,\"h1\"],[12],[1,[32,3,[\"name\"]]],[13],[2,\"\\n\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,3,[\"sortedControls\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,1],[[30,[36,0],[[32,1,[\"constructor\",\"modelName\"]]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,[32,2],[],[[\"@control\"],[[32,1]]],null],[2,\"\\n\"]],\"parameters\":[2]}]]]],\"parameters\":[1]}]]],[2,\"\\n\"],[18,4,null]],\"hasEval\":false,\"upvars\":[\"component\",\"let\",\"-track-array\",\"each\"]}","meta":{"moduleName":"chataigne-web-dashboard/components/dashboard.hbs"}});

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("chataigne-web-dashboard/components/float-control", ["exports", "chataigne-web-dashboard/components/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <ControlContainer @control={{@control}}>
      <div class="secondary-container">
          {{#if this.isTime }}
              <Input value={{this.time}} {{on "change" (fn this.input "time") }} {{on "change" this.update}} class="secondary time" />
          {{else}}
              <Input value={{this.roundedValue}} {{on "change" this.input}} {{on "change" this.update}} class="secondary" />
          {{/if}}
      </div>
      
      {{#if @control.hasRange}}
          <Input name={{@control.id}} value={{@control.value}} {{on "input" this.input}} {{on "input" this.update}} type="range" min={{@control.minVal}} max={{@control.maxVal}} step={{this.step}} style="--min: {{@control.minVal}}; --max: {{@control.maxVal}}; --val: {{@control.value}};"/>
      {{/if}}
      
      {{yield}}
  </ControlContainer>
  */
  {"id":"zvXiONNB","block":"{\"symbols\":[\"@control\",\"&default\"],\"statements\":[[8,\"control-container\",[],[[\"@control\"],[[32,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"div\"],[14,0,\"secondary-container\"],[12],[2,\"\\n\"],[6,[37,2],[[32,0,[\"isTime\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"            \"],[8,\"input\",[[16,2,[32,0,[\"time\"]]],[24,0,\"secondary time\"],[4,[38,0],[\"change\",[30,[36,1],[[32,0,[\"input\"]],\"time\"],null]],null],[4,[38,0],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"            \"],[8,\"input\",[[16,2,[32,0,[\"roundedValue\"]]],[24,0,\"secondary\"],[4,[38,0],[\"change\",[32,0,[\"input\"]]],null],[4,[38,0],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \\n\"],[6,[37,2],[[32,1,[\"hasRange\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,\"input\",[[16,3,[32,1,[\"id\"]]],[16,2,[32,1,[\"value\"]]],[16,\"min\",[32,1,[\"minVal\"]]],[16,\"max\",[32,1,[\"maxVal\"]]],[16,\"step\",[32,0,[\"step\"]]],[16,5,[31,[\"--min: \",[32,1,[\"minVal\"]],\"; --max: \",[32,1,[\"maxVal\"]],\"; --val: \",[32,1,[\"value\"]],\";\"]]],[24,4,\"range\"],[4,[38,0],[\"input\",[32,0,[\"input\"]]],null],[4,[38,0],[\"input\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \\n    \"],[18,2,null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"on\",\"fn\",\"if\"]}","meta":{"moduleName":"chataigne-web-dashboard/components/float-control.hbs"}});

  let FloatControlComponent = (_dec = Ember._action, _dec2 = Ember._action, (_class = class FloatControlComponent extends _control.default {
    get step() {
      return 0.001;
    }

    get roundedValue() {
      let rounded = Number.parseFloat(this.args.control.value).toFixed(3);
      return parseFloat(rounded);
    }

    input(type, event) {
      const control = this.args.control;

      if (type == "time") {
        let time = event.target.value;
        time = time.split(".");
        debugger;
        let ms = time.length > 1 ? time[1] : "0";

        if (ms.length < 2) {
          ms = parseInt(ms + "00");
        } else if (ms.length < 3) {
          ms = parseInt(ms + "0");
        } else {
          ms = parseInt(ms);
        }

        time = time[0].split(":");
        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        if (time.length > 2) {
          hours = time[0] ? parseInt(time[0]) : 0;
          minutes = time[1] ? parseInt(time[1]) : 0;
          seconds = time[2] ? parseInt(time[2]) : 0;
        } else if (time.length == 2) {
          minutes = time[0] ? parseInt(time[0]) : 0;
          seconds = time[1] ? parseInt(time[1]) : 0;
        } else if (time.length == 1) {
          seconds = time[0] ? parseInt(time[0]) : 0;
        }

        const result = hours * 60 * 60 + minutes * 60 + seconds + ms / 1000;
        debugger;
        control.value = result;
      } else {
        event = type;
        control.value = event.target.value;
      }
    }

    update(type, event) {
      const control = this.args.control;

      if (control.value < control.minVal) {
        control.value = control.minVal;
      } else if (control.value > control.maxVal) {
        control.value = control.maxVal;
      }

      this.socket.sendFeedback(control.controlAddress, control.value); // control.save();
    }

    get isTime() {
      const control = this.args.control;
      return control.defaultUI == 4;
    }

    get time() {
      const control = this.args.control;
      let hours = Math.floor(control.value / 60 / 60);
      let minutes = Math.floor(control.value / 60 - hours * 60);
      let seconds = Math.floor(control.value - hours * 60 * 60 - minutes * 60);
      let ms = (control.value - hours * 60 * 60 - minutes * 60 - seconds) * 1000;
      ms = parseInt(Math.round(ms));
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      if (ms < 10) {
        ms = "00" + ms;
      } else if (ms < 100) {
        ms = "0" + ms;
      }

      return hours + ":" + minutes + ":" + seconds + "." + ms;
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "input", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "input"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype)), _class));
  _exports.default = FloatControlComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, FloatControlComponent);
});
;define("chataigne-web-dashboard/components/integer-control", ["exports", "chataigne-web-dashboard/components/float-control"], function (_exports, _floatControl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IntegerControlComponent extends _floatControl.default {
    get step() {
      return 1;
    }

    get roundedValue() {
      return parseInt(this.args.control.value);
    }

  }

  _exports.default = IntegerControlComponent;
});
;define("chataigne-web-dashboard/components/point2d-control", ["exports", "chataigne-web-dashboard/components/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <ControlContainer @control={{@control}}>
      <div class="secondary-container">
          <button {{on "click" this.toggleCanvas}}>2D Canvas</button>
          <Input value={{this.roundedValue}} {{on "change" this.input}} {{on "change" this.update}} class="secondary" />
          <Input value={{ this.roundedValue2 }} {{on "change" (fn this.input "2") }} {{ on "change" this.update }} class="secondary" />
      </div>
  
      {{#if @control.hasRange}}
          <Input name={{ @control.id}} value={{@control.value}} {{on "input" this.input}} {{on "input" this.update}} type="range" min={{@control.minVal}} max={{@control.maxVal}} step={{this.step}} style="--min: {{@control.minVal}}; --max: {{@control.maxVal}}; --val: {{@control.value}};" />
      {{/if}}
      
      {{#if @control.hasRange2}}
          <Input name={{ concat @control.id "2" }} value={{ @control.value2 }} {{ on "input" (fn this.input "2") }} {{ on "input" (fn this.update "2") }} type="range" min={{@control.minVal2}} max={{@control.maxVal2}} step={{this.step}} style="--min: {{@control.minVal2}}; --max: {{@control.maxVal2}}; --val: {{@control.value2}};"  class="no-top-margin" />
      {{/if}}
  
      {{#if this.showCanvas}}
          <CanvasPoint2d @control={{@control}}></CanvasPoint2d>
      {{/if}}
  
      {{yield}}
  </ControlContainer>
  */
  {"id":"sDyg3iLY","block":"{\"symbols\":[\"@control\",\"&default\"],\"statements\":[[8,\"control-container\",[],[[\"@control\"],[[32,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"div\"],[14,0,\"secondary-container\"],[12],[2,\"\\n        \"],[11,\"button\"],[4,[38,2],[\"click\",[32,0,[\"toggleCanvas\"]]],null],[12],[2,\"2D Canvas\"],[13],[2,\"\\n        \"],[8,\"input\",[[16,2,[32,0,[\"roundedValue\"]]],[24,0,\"secondary\"],[4,[38,2],[\"change\",[32,0,[\"input\"]]],null],[4,[38,2],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n        \"],[8,\"input\",[[16,2,[32,0,[\"roundedValue2\"]]],[24,0,\"secondary\"],[4,[38,2],[\"change\",[30,[36,1],[[32,0,[\"input\"]],\"2\"],null]],null],[4,[38,2],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n    \"],[13],[2,\"\\n\\n\"],[6,[37,3],[[32,1,[\"hasRange\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,\"input\",[[16,3,[32,1,[\"id\"]]],[16,2,[32,1,[\"value\"]]],[16,\"min\",[32,1,[\"minVal\"]]],[16,\"max\",[32,1,[\"maxVal\"]]],[16,\"step\",[32,0,[\"step\"]]],[16,5,[31,[\"--min: \",[32,1,[\"minVal\"]],\"; --max: \",[32,1,[\"maxVal\"]],\"; --val: \",[32,1,[\"value\"]],\";\"]]],[24,4,\"range\"],[4,[38,2],[\"input\",[32,0,[\"input\"]]],null],[4,[38,2],[\"input\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \\n\"],[6,[37,3],[[32,1,[\"hasRange2\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,\"input\",[[16,3,[30,[36,0],[[32,1,[\"id\"]],\"2\"],null]],[16,2,[32,1,[\"value2\"]]],[16,\"min\",[32,1,[\"minVal2\"]]],[16,\"max\",[32,1,[\"maxVal2\"]]],[16,\"step\",[32,0,[\"step\"]]],[16,5,[31,[\"--min: \",[32,1,[\"minVal2\"]],\"; --max: \",[32,1,[\"maxVal2\"]],\"; --val: \",[32,1,[\"value2\"]],\";\"]]],[24,0,\"no-top-margin\"],[24,4,\"range\"],[4,[38,2],[\"input\",[30,[36,1],[[32,0,[\"input\"]],\"2\"],null]],null],[4,[38,2],[\"input\",[30,[36,1],[[32,0,[\"update\"]],\"2\"],null]],null]],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,3],[[32,0,[\"showCanvas\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,\"canvas-point2d\",[],[[\"@control\"],[[32,1]]],[[\"default\"],[{\"statements\":[],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[18,2,null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"concat\",\"fn\",\"on\",\"if\"]}","meta":{"moduleName":"chataigne-web-dashboard/components/point2d-control.hbs"}});

  let Point2DControlComponent = (_dec = Ember._tracked, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, (_class = (_temp = class Point2DControlComponent extends _control.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "showCanvas", _descriptor, this);
    }

    get step() {
      return 0.001;
    }

    get roundedValue() {
      let rounded = Number.parseFloat(this.args.control.value).toFixed(3);
      return parseFloat(rounded);
    }

    get roundedValue2() {
      let rounded = Number.parseFloat(this.args.control.value2).toFixed(3);
      return parseFloat(rounded);
    }

    input(position, event) {
      const control = this.args.control;

      if (position == 2) {
        control.value2 = event.target.value;
      } else {
        event = position;
        control.value = event.target.value;
      }
    }

    update(event) {
      const control = this.args.control;

      if (control.value < control.minVal) {
        control.value = control.minVal;
      } else if (control.value > control.maxVal) {
        control.value = control.maxVal;
      }

      if (control.value2 < control.minVal2) {
        control.value2 = control.minVal2;
      } else if (control.value2 > control.maxVal2) {
        control.value2 = control.maxVal2;
      }

      this.socket.sendFeedback(control.controlAddress, [control.value, control.value2]); // control.save();
    }

    toggleCanvas() {
      this.showCanvas = !this.showCanvas;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "showCanvas", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "input", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "input"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleCanvas", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "toggleCanvas"), _class.prototype)), _class));
  _exports.default = Point2DControlComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Point2DControlComponent);
});
;define("chataigne-web-dashboard/components/point3d-control", ["exports", "chataigne-web-dashboard/components/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <ControlContainer @control={{@control}}>
      <div class="secondary-container">
          <Input value={{this.roundedValue}} {{on "change" this.input}} {{on "change" this.update}} class="secondary" />
          <Input value={{ this.roundedValue2 }} {{on "change" (fn this.input "2") }} {{ on "change" this.update }} class="secondary" />
          <Input value={{ this.roundedValue3 }} {{on "change" (fn this.input "3") }} {{ on "change" this.update }} class="secondary" />
      </div>
  
      {{#if @control.hasRange}}
          <Input name={{ @control.id}} value={{@control.value}} {{on "input" this.input}} {{on "input" this.update}} type="range" min={{@control.minVal}} max={{@control.maxVal}} step={{this.step}} style="--min: {{@control.minVal}}; --max: {{@control.maxVal}}; --val: {{@control.value}};" />
      {{/if}}
  
      {{#if @control.hasRange2}}
          <Input name={{ concat @control.id "2" }} value={{ @control.value2 }} {{ on "input" (fn this.input "2") }} {{ on "input" (fn this.update "2") }} type="range" min={{@control.minVal2}} max={{@control.maxVal2}} step={{this.step}} style="--min: {{@control.minVal2}}; --max: {{@control.maxVal2}}; --val: {{@control.value2}};"  class="no-top-margin" />
      {{/if}}
  
      {{#if @control.hasRange3}}
          <Input name={{ concat @control.id "3" }} value={{ @control.value2 }} {{ on "input" (fn this.input "3") }} {{ on "input" (fn this.update "3") }} type="range" min={{@control.minVal3}} max={{@control.maxVal3}} step={{this.step}} style="--min: {{@control.minVal3}}; --max: {{@control.maxVal3}}; --val: {{@control.value3}};"  class="no-top-margin" />
      {{/if}}
      
      {{yield}}
  </ControlContainer>
  */
  {"id":"yPbPffYb","block":"{\"symbols\":[\"@control\",\"&default\"],\"statements\":[[8,\"control-container\",[],[[\"@control\"],[[32,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"div\"],[14,0,\"secondary-container\"],[12],[2,\"\\n        \"],[8,\"input\",[[16,2,[32,0,[\"roundedValue\"]]],[24,0,\"secondary\"],[4,[38,2],[\"change\",[32,0,[\"input\"]]],null],[4,[38,2],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n        \"],[8,\"input\",[[16,2,[32,0,[\"roundedValue2\"]]],[24,0,\"secondary\"],[4,[38,2],[\"change\",[30,[36,1],[[32,0,[\"input\"]],\"2\"],null]],null],[4,[38,2],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n        \"],[8,\"input\",[[16,2,[32,0,[\"roundedValue3\"]]],[24,0,\"secondary\"],[4,[38,2],[\"change\",[30,[36,1],[[32,0,[\"input\"]],\"3\"],null]],null],[4,[38,2],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n    \"],[13],[2,\"\\n\\n\"],[6,[37,3],[[32,1,[\"hasRange\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,\"input\",[[16,3,[32,1,[\"id\"]]],[16,2,[32,1,[\"value\"]]],[16,\"min\",[32,1,[\"minVal\"]]],[16,\"max\",[32,1,[\"maxVal\"]]],[16,\"step\",[32,0,[\"step\"]]],[16,5,[31,[\"--min: \",[32,1,[\"minVal\"]],\"; --max: \",[32,1,[\"maxVal\"]],\"; --val: \",[32,1,[\"value\"]],\";\"]]],[24,4,\"range\"],[4,[38,2],[\"input\",[32,0,[\"input\"]]],null],[4,[38,2],[\"input\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,3],[[32,1,[\"hasRange2\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,\"input\",[[16,3,[30,[36,0],[[32,1,[\"id\"]],\"2\"],null]],[16,2,[32,1,[\"value2\"]]],[16,\"min\",[32,1,[\"minVal2\"]]],[16,\"max\",[32,1,[\"maxVal2\"]]],[16,\"step\",[32,0,[\"step\"]]],[16,5,[31,[\"--min: \",[32,1,[\"minVal2\"]],\"; --max: \",[32,1,[\"maxVal2\"]],\"; --val: \",[32,1,[\"value2\"]],\";\"]]],[24,0,\"no-top-margin\"],[24,4,\"range\"],[4,[38,2],[\"input\",[30,[36,1],[[32,0,[\"input\"]],\"2\"],null]],null],[4,[38,2],[\"input\",[30,[36,1],[[32,0,[\"update\"]],\"2\"],null]],null]],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[6,[37,3],[[32,1,[\"hasRange3\"]]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,\"input\",[[16,3,[30,[36,0],[[32,1,[\"id\"]],\"3\"],null]],[16,2,[32,1,[\"value2\"]]],[16,\"min\",[32,1,[\"minVal3\"]]],[16,\"max\",[32,1,[\"maxVal3\"]]],[16,\"step\",[32,0,[\"step\"]]],[16,5,[31,[\"--min: \",[32,1,[\"minVal3\"]],\"; --max: \",[32,1,[\"maxVal3\"]],\"; --val: \",[32,1,[\"value3\"]],\";\"]]],[24,0,\"no-top-margin\"],[24,4,\"range\"],[4,[38,2],[\"input\",[30,[36,1],[[32,0,[\"input\"]],\"3\"],null]],null],[4,[38,2],[\"input\",[30,[36,1],[[32,0,[\"update\"]],\"3\"],null]],null]],[[],[]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \\n    \"],[18,2,null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"concat\",\"fn\",\"on\",\"if\"]}","meta":{"moduleName":"chataigne-web-dashboard/components/point3d-control.hbs"}});

  let Point2DControlComponent = (_dec = Ember._action, _dec2 = Ember._action, (_class = class Point2DControlComponent extends _control.default {
    get step() {
      return 0.001;
    }

    get roundedValue() {
      let rounded = Number.parseFloat(this.args.control.value).toFixed(3);
      return parseFloat(rounded);
    }

    get roundedValue2() {
      let rounded = Number.parseFloat(this.args.control.value2).toFixed(3);
      return parseFloat(rounded);
    }

    get roundedValue3() {
      let rounded = Number.parseFloat(this.args.control.value3).toFixed(3);
      return parseFloat(rounded);
    }

    input(position, event) {
      const control = this.args.control;

      if (position == 2) {
        control.value2 = event.target.value;
      } else if (position == 3) {
        control.value3 = event.target.value;
      } else {
        event = position;
        control.value = event.target.value;
      }
    }

    update(event) {
      const control = this.args.control;

      if (control.value < control.minVal) {
        control.value = control.minVal;
      } else if (control.value > control.maxVal) {
        control.value = control.maxVal;
      }

      if (control.value2 < control.minVal2) {
        control.value2 = control.minVal2;
      } else if (control.value2 > control.maxVal2) {
        control.value2 = control.maxVal2;
      }

      if (control.value3 < control.minVal3) {
        control.value3 = control.minVal3;
      } else if (control.value3 > control.maxVal3) {
        control.value3 = control.maxVal3;
      }

      this.socket.sendFeedback(control.controlAddress, [control.value, control.value2, control.value3]); // control.save();
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "input", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "input"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype)), _class));
  _exports.default = Point2DControlComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Point2DControlComponent);
});
;define("chataigne-web-dashboard/components/string-control", ["exports", "chataigne-web-dashboard/components/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <ControlContainer @control={{@control}}>
      <div class="clear"></div>
      <Input value={{@control.value}} {{on "change" this.input}} {{on "change" this.update}} class="string-input" />
      {{yield}}
  </ControlContainer>
  */
  {"id":"WXRpJwc5","block":"{\"symbols\":[\"@control\",\"&default\"],\"statements\":[[8,\"control-container\",[],[[\"@control\"],[[32,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"div\"],[14,0,\"clear\"],[12],[13],[2,\"\\n    \"],[8,\"input\",[[16,2,[32,1,[\"value\"]]],[24,0,\"string-input\"],[4,[38,0],[\"change\",[32,0,[\"input\"]]],null],[4,[38,0],[\"change\",[32,0,[\"update\"]]],null]],[[],[]],null],[2,\"\\n    \"],[18,2,null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"on\"]}","meta":{"moduleName":"chataigne-web-dashboard/components/string-control.hbs"}});

  let BooleanControlComponent = (_dec = Ember._action, _dec2 = Ember._action, (_class = class BooleanControlComponent extends _control.default {
    input(event) {
      const control = this.args.control;
      control.value = event.target.value;
    }

    update(value, event) {
      const control = this.args.control;
      this.socket.sendFeedback(control.controlAddress, control.value); // control.save();
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "input", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "input"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype)), _class));
  _exports.default = BooleanControlComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, BooleanControlComponent);
});
;define("chataigne-web-dashboard/components/trigger-control", ["exports", "chataigne-web-dashboard/components/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <ControlContainer @control={{@control}}>
      <div class="clear"></div>
      <button {{on "click" this.update}} class="{{ if @control.triggered "triggered" }}">{{@control.label}}</button>
      {{yield}}
  </ControlContainer>
  */
  {"id":"8BUxtkqy","block":"{\"symbols\":[\"@control\",\"&default\"],\"statements\":[[8,\"control-container\",[],[[\"@control\"],[[32,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"div\"],[14,0,\"clear\"],[12],[13],[2,\"\\n    \"],[11,\"button\"],[16,0,[31,[[30,[36,0],[[32,1,[\"triggered\"]],\"triggered\"],null]]]],[4,[38,1],[\"click\",[32,0,[\"update\"]]],null],[12],[1,[32,1,[\"label\"]]],[13],[2,\"\\n    \"],[18,2,null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"if\",\"on\"]}","meta":{"moduleName":"chataigne-web-dashboard/components/trigger-control.hbs"}});

  let TriggerControlComponent = (_dec = Ember._action, (_class = class TriggerControlComponent extends _control.default {
    update(value, event) {
      const control = this.args.control;
      this.socket.sendFeedback(control.controlAddress, true); // control.save();
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "update", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype)), _class));
  _exports.default = TriggerControlComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TriggerControlComponent);
});
;define("chataigne-web-dashboard/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationController = (_dec = Ember.inject.service('chataigne-websocket'), _dec2 = Ember._tracked, _dec3 = Ember._action, _dec4 = Ember._action, (_class = (_temp = class ApplicationController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "socket", _descriptor, this);

      _initializerDefineProperty(this, "selectedDashboard", _descriptor2, this);
    }

    get isConnected() {
      return this.socket.isConnected;
    }

    selectDashboard(dashboard, event) {
      if (event == undefined) {
        this.selectedDashboard = null;
      } else {
        this.selectedDashboard = dashboard;
      }
    }

    reloadDashboards() {
      this.socket.reconnect(0);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "socket", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "selectedDashboard", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "selectDashboard", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "selectDashboard"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "reloadDashboards", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "reloadDashboards"), _class.prototype)), _class));
  _exports.default = ApplicationController;
});
;define("chataigne-web-dashboard/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("chataigne-web-dashboard/helpers/app-version", ["exports", "chataigne-web-dashboard/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("chataigne-web-dashboard/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("chataigne-web-dashboard/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("chataigne-web-dashboard/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "chataigne-web-dashboard/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("chataigne-web-dashboard/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("chataigne-web-dashboard/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("chataigne-web-dashboard/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("chataigne-web-dashboard/initializers/export-application-global", ["exports", "chataigne-web-dashboard/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("chataigne-web-dashboard/instance-initializers/chataigne-websocket", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(appInstance) {
    appInstance.lookup('service:chataigne-websocket');
  }

  var _default = {
    name: 'chataigne-websocket',
    initialize
  };
  _exports.default = _default;
});
;define("chataigne-web-dashboard/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("chataigne-web-dashboard/models/boolean-control", ["exports", "@ember-data/model", "chataigne-web-dashboard/models/control"], function (_exports, _model, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let BooleanControlModel = (_dec = (0, _model.attr)("boolean"), (_class = (_temp = class BooleanControlModel extends _control.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "value", _descriptor, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "value", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = BooleanControlModel;
});
;define("chataigne-web-dashboard/models/color-control", ["exports", "@ember-data/model", "chataigne-web-dashboard/models/control"], function (_exports, _model, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ColorControlModel = (_dec = (0, _model.attr)("number"), _dec2 = (0, _model.attr)("number"), _dec3 = (0, _model.attr)("number"), _dec4 = (0, _model.attr)("number"), _dec5 = Ember.computed('red', 'green', 'blue', 'alpha'), _dec6 = Ember.computed('red', 'green', 'blue', 'alpha'), (_class = (_temp = class ColorControlModel extends _control.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "red", _descriptor, this);

      _initializerDefineProperty(this, "green", _descriptor2, this);

      _initializerDefineProperty(this, "blue", _descriptor3, this);

      _initializerDefineProperty(this, "alpha", _descriptor4, this);
    }

    get rgba() {
      const red = parseInt(this.red * 255);
      const green = parseInt(this.green * 255);
      const blue = parseInt(this.blue * 255);
      const alpha = this.alpha;
      return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
    }

    get hex() {
      let red = Math.round(this.red * 255).toString(16);
      let green = Math.round(this.green * 255).toString(16);
      let blue = Math.round(this.blue * 255).toString(16);
      if (red.length == 1) red = "0" + red;
      if (green.length == 1) green = "0" + green;
      if (blue.length == 1) blue = "0" + blue;
      return "#" + red + green + blue;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "red", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "green", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "blue", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "alpha", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "rgba", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "rgba"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hex", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "hex"), _class.prototype)), _class));
  _exports.default = ColorControlModel;
});
;define("chataigne-web-dashboard/models/control", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ControlModel = (_dec = (0, _model.attr)("string"), _dec2 = (0, _model.attr)("string"), _dec3 = (0, _model.attr)("number"), _dec4 = (0, _model.attr)("number"), _dec5 = (0, _model.attr)("number"), _dec6 = (0, _model.attr)("number"), _dec7 = (0, _model.attr)("string"), _dec8 = (0, _model.belongsTo)('dashboard'), (_class = (_temp = class ControlModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "label", _descriptor, this);

      _initializerDefineProperty(this, "controlAddress", _descriptor2, this);

      _initializerDefineProperty(this, "positionX", _descriptor3, this);

      _initializerDefineProperty(this, "positionY", _descriptor4, this);

      _initializerDefineProperty(this, "sizeX", _descriptor5, this);

      _initializerDefineProperty(this, "sizeY", _descriptor6, this);

      _initializerDefineProperty(this, "defaultUI", _descriptor7, this);

      _initializerDefineProperty(this, "dashboard", _descriptor8, this);
    }

    get hasRange() {
      return this.maxVal != undefined && this.minVal != undefined;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "label", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "controlAddress", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "positionX", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "positionY", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "sizeX", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "sizeY", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "defaultUI", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "dashboard", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ControlModel;
});
;define("chataigne-web-dashboard/models/dashboard", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let DashboardModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.hasMany)('control', {
    polymorphic: true
  }), _dec3 = Ember.computed.sort('controls', 'controlSorting'), (_class = (_temp = class DashboardModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "controls", _descriptor2, this);

      _defineProperty(this, "controlSorting", ['positionY', 'positionX']);

      _initializerDefineProperty(this, "sortedControls", _descriptor3, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "controls", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "sortedControls", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = DashboardModel;
});
;define("chataigne-web-dashboard/models/float-control", ["exports", "@ember-data/model", "chataigne-web-dashboard/models/control"], function (_exports, _model, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FloatControlModel = (_dec = (0, _model.attr)("number"), _dec2 = (0, _model.attr)("number"), _dec3 = (0, _model.attr)("number"), (_class = (_temp = class FloatControlModel extends _control.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "value", _descriptor, this);

      _initializerDefineProperty(this, "minVal", _descriptor2, this);

      _initializerDefineProperty(this, "maxVal", _descriptor3, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "value", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "minVal", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "maxVal", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = FloatControlModel;
});
;define("chataigne-web-dashboard/models/integer-control", ["exports", "@ember-data/model", "chataigne-web-dashboard/models/float-control"], function (_exports, _model, _floatControl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ControlModel extends _floatControl.default {}

  _exports.default = ControlModel;
});
;define("chataigne-web-dashboard/models/point2d-control", ["exports", "@ember-data/model", "chataigne-web-dashboard/models/control"], function (_exports, _model, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FloatControlModel = (_dec = (0, _model.attr)("number"), _dec2 = (0, _model.attr)("number"), _dec3 = (0, _model.attr)("number"), _dec4 = (0, _model.attr)("number"), _dec5 = (0, _model.attr)("number"), _dec6 = (0, _model.attr)("number"), (_class = (_temp = class FloatControlModel extends _control.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "value", _descriptor, this);

      _initializerDefineProperty(this, "minVal", _descriptor2, this);

      _initializerDefineProperty(this, "maxVal", _descriptor3, this);

      _initializerDefineProperty(this, "value2", _descriptor4, this);

      _initializerDefineProperty(this, "minVal2", _descriptor5, this);

      _initializerDefineProperty(this, "maxVal2", _descriptor6, this);
    }

    get hasRange2() {
      return this.maxVal2 != undefined && this.minVal2 != undefined;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "value", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "minVal", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "maxVal", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "value2", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "minVal2", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "maxVal2", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = FloatControlModel;
});
;define("chataigne-web-dashboard/models/point3d-control", ["exports", "@ember-data/model", "chataigne-web-dashboard/models/control"], function (_exports, _model, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FloatControlModel = (_dec = (0, _model.attr)("number"), _dec2 = (0, _model.attr)("number"), _dec3 = (0, _model.attr)("number"), _dec4 = (0, _model.attr)("number"), _dec5 = (0, _model.attr)("number"), _dec6 = (0, _model.attr)("number"), _dec7 = (0, _model.attr)("number"), _dec8 = (0, _model.attr)("number"), _dec9 = (0, _model.attr)("number"), (_class = (_temp = class FloatControlModel extends _control.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "value", _descriptor, this);

      _initializerDefineProperty(this, "minVal", _descriptor2, this);

      _initializerDefineProperty(this, "maxVal", _descriptor3, this);

      _initializerDefineProperty(this, "value2", _descriptor4, this);

      _initializerDefineProperty(this, "minVal2", _descriptor5, this);

      _initializerDefineProperty(this, "maxVal2", _descriptor6, this);

      _initializerDefineProperty(this, "value3", _descriptor7, this);

      _initializerDefineProperty(this, "minVal3", _descriptor8, this);

      _initializerDefineProperty(this, "maxVal3", _descriptor9, this);
    }

    get hasRange2() {
      return this.maxVal2 != undefined && this.minVal2 != undefined;
    }

    get hasRange3() {
      return this.maxVal3 != undefined && this.minVal3 != undefined;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "value", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "minVal", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "maxVal", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "value2", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "minVal2", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "maxVal2", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "value3", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "minVal3", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "maxVal3", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = FloatControlModel;
});
;define("chataigne-web-dashboard/models/string-control", ["exports", "@ember-data/model", "chataigne-web-dashboard/models/control"], function (_exports, _model, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let StringControlModel = (_dec = (0, _model.attr)("string"), (_class = (_temp = class StringControlModel extends _control.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "value", _descriptor, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "value", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = StringControlModel;
});
;define("chataigne-web-dashboard/models/trigger-control", ["exports", "@ember-data/model", "chataigne-web-dashboard/models/control"], function (_exports, _model, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let TriggerControlModel = (_dec = (0, _model.attr)("boolean"), (_class = (_temp = class TriggerControlModel extends _control.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "triggered", _descriptor, this);
    }

    init() {
      super.init();
      this.addObserver('triggered', this, 'disableTriggered');
    }

    disableTriggered() {
      Ember.run.later(this, () => {
        this.triggered = false;
      }, 100);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "triggered", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TriggerControlModel;
});
;define("chataigne-web-dashboard/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("chataigne-web-dashboard/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("chataigne-web-dashboard/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("chataigne-web-dashboard/router", ["exports", "chataigne-web-dashboard/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("chataigne-web-dashboard/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationRoute extends Ember.Route {
    model() {
      return this.store.peekAll('dashboard');
    }

  }

  _exports.default = ApplicationRoute;
});
;define("chataigne-web-dashboard/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("chataigne-web-dashboard/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("chataigne-web-dashboard/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("chataigne-web-dashboard/serializers/application", ["exports", "@ember-data/serializer"], function (_exports, _serializer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationSerializer extends _serializer.default {
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
      payload.items.forEach(function (dashboard) {
        let dashboardHash = {
          "type": "dashboard",
          "id": dashboard.id,
          "attributes": {
            "name": dashboard.name
          },
          "relationships": {
            "controls": {
              "data": []
            }
          }
        };
        var relationshipData = [];
        dashboard.items.forEach(function (item) {
          let type = item.type;

          switch (type) {
            case "Float":
              type = "float-control";
              break;

            case "Integer":
              type = "integer-control";
              break;

            case "Boolean":
              type = "boolean-control";
              break;

            case "String":
              type = "string-control";
              break;

            case "Trigger":
              type = "trigger-control";
              break;

            case "Point2D":
              type = "point2d-control";
              break;

            case "Point3D":
              type = "point3d-control";
              break;

            case "Color":
              type = "color-control";
              break;

            default:
              type = "control";
          }

          relationshipData.push({
            "id": dashboard.id + "-" + item.id,
            "type": type
          });
          let controlHash = {
            "id": dashboard.id + "-" + item.id,
            "type": type,
            "attributes": {
              "label": item.label,
              "value": item.value,
              "minVal": item.minVal,
              "maxVal": item.maxVal,
              "controlAddress": item.controlAddress,
              "positionX": item.position[0],
              "positionY": item.position[1],
              "sizeX": item.size[0],
              "sizeY": item.size[1],
              "defaultUI": item.defaultUI
            }
          };

          if (type == "point2d-control") {
            controlHash.attributes.value = item.value[0];
            controlHash.attributes.minVal = 0;
            controlHash.attributes.maxVal = 100;
            controlHash.attributes.value2 = item.value[1];
            controlHash.attributes.minVal2 = 0;
            controlHash.attributes.maxVal2 = 100;
          }

          if (type == "point3d-control") {
            controlHash.attributes.value = item.value[0];
            controlHash.attributes.minVal = 0;
            controlHash.attributes.maxVal = 100;
            controlHash.attributes.value2 = item.value[1];
            controlHash.attributes.minVal2 = 0;
            controlHash.attributes.maxVal2 = 100;
            controlHash.attributes.value3 = item.value[2];
            controlHash.attributes.minVal3 = 0;
            controlHash.attributes.maxVal3 = 100;
          }

          if (type == "color-control") {
            controlHash.attributes.red = item.value[0];
            controlHash.attributes.green = item.value[1];
            controlHash.attributes.blue = item.value[2];
            controlHash.attributes.alpha = item.value[3];
          }

          includedData.push(controlHash);
        });
        dashboardHash.relationships.controls.data = relationshipData;
        result.data.push(dashboardHash);
      });
      result.included = includedData;
      return result;
    }

  }

  _exports.default = ApplicationSerializer;
});
;define("chataigne-web-dashboard/services/chataigne-websocket", ["exports", "chataigne-web-dashboard/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let WebsocketService = (_dec = Ember.inject.service('websockets'), _dec2 = Ember.inject.service('store'), _dec3 = Ember._tracked, (_class = (_temp = class WebsocketService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "websockets", _descriptor, this);

      _initializerDefineProperty(this, "store", _descriptor2, this);

      _defineProperty(this, "socket", null);

      _defineProperty(this, "address", 'ws://' + location.host + '/ws');

      _initializerDefineProperty(this, "isConnected", _descriptor3, this);
    }

    init() {
      super.init(...arguments);

      if (_environment.default.environment == "development") {
        this.address = _environment.default.websocket.address;
      }

      const socket = this.websockets.socketFor(this.address);
      socket.on('open', this.open, this);
      socket.on('close', this.reconnect, this);
      socket.on('message', this.handleMessage, this);
      this.set('socket', socket);
    }

    open() {
      this.isConnected = true;
    }

    reconnect(time) {
      debugger;
      time = time != undefined ? time : 5000;
      this.store.unloadAll();
      this.isConnected = false;
      Ember.run.later(this, () => {
        this.socket.reconnect();
      }, time);
    }

    handleMessage(msg) {
      const payload = JSON.parse(msg.data);

      switch (payload.dataType) {
        case "all":
          this.store.pushPayload(payload);
          break;

        case "feedback":
          this.handleFeedback(payload);
          break;

        default:
          console.log("Data type not handled : " + payload.dataType);
          break;
      }
    }

    sendFeedback(address, value) {
      const data = {
        "controlAddress": address,
        "value": value
      };
      console.log("Sending feedback for " + address + ": " + value);
      this.socket.send(JSON.stringify(data));
    }

    handleFeedback(payload) {
      console.log("Updating " + payload.controlAddress + ": " + payload.value);
      this.store.peekAll("float-control").forEach(function (item) {
        if (item.controlAddress == payload.controlAddress) {
          item.value = payload.value;
        }
      });
      this.store.peekAll("integer-control").forEach(function (item) {
        if (item.controlAddress == payload.controlAddress) {
          item.value = payload.value;
        }
      });
      this.store.peekAll("boolean-control").forEach(function (item) {
        if (item.controlAddress == payload.controlAddress) {
          item.value = payload.value;
        }
      });
      this.store.peekAll("string-control").forEach(function (item) {
        if (item.controlAddress == payload.controlAddress) {
          item.value = payload.value;
        }
      });
      this.store.peekAll("trigger-control").forEach(function (item) {
        if (item.controlAddress == payload.controlAddress) {
          item.triggered = true;
        }
      });
      this.store.peekAll("point2d-control").forEach(function (item) {
        if (item.controlAddress == payload.controlAddress) {
          item.value = payload.value[0];
          item.value2 = payload.value[1];
        }
      });
      this.store.peekAll("point3d-control").forEach(function (item) {
        if (item.controlAddress == payload.controlAddress) {
          item.value = payload.value[0];
          item.value2 = payload.value[1];
          item.value3 = payload.value[2];
        }
      });
      this.store.peekAll("color-control").forEach(function (item) {
        if (item.controlAddress == payload.controlAddress) {
          item.red = payload.value[0];
          item.green = payload.value[1];
          item.blue = payload.value[2];
          item.alpha = payload.value[3];
        }
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "websockets", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isConnected", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  })), _class));
  _exports.default = WebsocketService;
});
;define("chataigne-web-dashboard/services/socket-io", ["exports", "ember-websockets/services/socket-io"], function (_exports, _socketIo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _socketIo.default;
    }
  });
});
;define("chataigne-web-dashboard/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("chataigne-web-dashboard/services/websockets", ["exports", "ember-websockets/services/websockets"], function (_exports, _websockets) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _websockets.default;
    }
  });
});
;define("chataigne-web-dashboard/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "rfX9WHE8",
    "block": "{\"symbols\":[\"dashboard\",\"dashboard\",\"@model\"],\"statements\":[[10,\"div\"],[14,0,\"menu\"],[12],[2,\"\\n    \"],[11,\"a\"],[4,[38,4],[\"click\",[30,[36,3],[[32,0,[\"reloadDashboards\"]],\"0\"],null]],null],[12],[10,\"img\"],[14,\"src\",\"chataigne-icon.png\"],[14,0,\"logo\"],[12],[13],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,5],[[35,8]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[10,\"ul\"],[14,0,\"dashboard-list\"],[12],[2,\"\\n        \"],[11,\"li\"],[4,[38,4],[\"click\",[30,[36,3],[[32,0,[\"selectDashboard\"]]],null]],null],[12],[2,\"Show All\"],[13],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,3]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[11,\"li\"],[4,[38,4],[\"click\",[30,[36,3],[[32,0,[\"selectDashboard\"]],[32,2]],null]],null],[12],[1,[32,2,[\"name\"]]],[13],[2,\"\\n\"]],\"parameters\":[2]}]]],[2,\"    \"],[13],[2,\"\\n\\n\"],[6,[37,5],[[35,2]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[8,\"dashboard\",[],[[\"@dashboard\"],[[34,2]]],null],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,3]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[8,\"dashboard\",[],[[\"@dashboard\"],[[32,1]]],null],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"parameters\":[]}]]],[2,\"\\n    \"],[1,[30,[36,7],[[30,[36,6],null,null]],null]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    Connecting to Chataigne\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\",\"selectedDashboard\",\"fn\",\"on\",\"if\",\"-outlet\",\"component\",\"isConnected\"]}",
    "meta": {
      "moduleName": "chataigne-web-dashboard/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("chataigne-web-dashboard/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+39rMR+0",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "chataigne-web-dashboard/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("chataigne-web-dashboard/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("chataigne-web-dashboard/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("chataigne-web-dashboard/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("chataigne-web-dashboard/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('chataigne-web-dashboard/config/environment', [], function() {
  var prefix = 'chataigne-web-dashboard';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("chataigne-web-dashboard/app")["default"].create({"name":"chataigne-web-dashboard","version":"0.0.0+294f2a68"});
          }
        
//# sourceMappingURL=chataigne-web-dashboard.map

"use strict"
define("chataigne-web-dashboard/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/adapters/application",["exports","@ember-data/adapter/json-api"],(function(e,t){var n,r,o,i
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return p(this,n)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,h,m,v,g,w,O=(n=Ember.inject.service("chataigne-websocket"),i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(a,e)
var t,n,r,i=s(a)
function a(){var e
l(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return u(b(e=i.call.apply(i,[this].concat(n))),"socket",o,b(e)),e}return t=a,(n=[{key:"pathForType",value:function(e){return"dashboard"==e?"data":e}},{key:"updateRecord",value:function(e,t,n){var r=n.attr("controlAddress"),o=n.attr("value")
this.socket.sendFeedback(r,o)}}])&&c(t.prototype,n),r&&c(t,r),a}(t.default),y=(r=i).prototype,h="socket",m=[n],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=m.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(y,h,w),w=null),o=w,r)
e.default=O})),define("chataigne-web-dashboard/app",["exports","ember-resolver","ember-load-initializers","chataigne-web-dashboard/config/environment"],(function(e,t,n,r){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=f(e)
if(t){var o=f(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return l(this,n)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(o,Ember.Application)
var n=u(o)
function o(){var e
i(this,o)
for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l]
return s(c(e=n.call.apply(n,[this].concat(u))),"modulePrefix",r.default.modulePrefix),s(c(e),"podModulePrefix",r.default.podModulePrefix),s(c(e),"Resolver",t.default),e}return o}()
e.default=p,(0,n.default)(p,r.default.modulePrefix)})),define("chataigne-web-dashboard/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/components/boolean-control",["exports","chataigne-web-dashboard/components/control"],(function(e,t){var n,r,o
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=s(e)
if(t){var o=s(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=Ember.HTMLBars.template({id:"1z3wh/Tj",block:'{"symbols":["@control","&default"],"statements":[[8,"control-container",[],[["@control","@showLabel"],[[32,1],true]],[["default"],[{"statements":[[2,"\\n    "],[11,"div"],[16,0,[31,["main-input ",[30,[36,0],[[32,1,["value"]],"enabled","disabled"],null]]]],[4,[38,1],["touchstart",[32,0,["update"]]],null],[4,[38,1],["mousedown",[32,0,["update"]]],null],[12],[2,"\\n        "],[11,"div"],[24,0,"checkbox"],[4,[38,2],[[32,0,["sizeStyles"]]],null],[12],[13],[2,"\\n    "],[13],[2,"\\n    "],[18,2,null],[2,"\\n"]],"parameters":[]}]]]],"hasEval":false,"upvars":["if","on","style"]}',meta:{moduleName:"chataigne-web-dashboard/components/boolean-control.hbs"}}),d=(n=Ember._action,r=Ember._action,p((o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(i,e)
var t,n,r,o=c(i)
function i(){return a(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"input",value:function(e){}},{key:"update",value:function(e,t){var n=this.args.control
this.socket.sendFeedback(n.controlAddress,!n.value),(t=t||e).preventDefault()}},{key:"sizeStyles",get:function(){return this.settings.displayLayout?{width:this.args.control.height+"px",height:this.args.control.height+"px",right:"0px"}:{}}}])&&u(t.prototype,n),r&&u(t,r),i}(t.default)).prototype,"input",[n],Object.getOwnPropertyDescriptor(o.prototype,"input"),o.prototype),p(o.prototype,"update",[r],Object.getOwnPropertyDescriptor(o.prototype,"update"),o.prototype),o)
e.default=d,Ember._setComponentTemplate(b,d)})),define("chataigne-web-dashboard/components/canvas-point2d",["exports","chataigne-web-dashboard/components/control"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p,b
function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=j(e)
if(t){var o=j(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return w(this,n)}}function w(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var z=Ember.HTMLBars.template({id:"I4Fe2EPM",block:'{"symbols":["&default"],"statements":[[11,"div"],[24,0,"canvas unselectable"],[16,5,[31,["width: ",[32,0,["canvasWidth"]],"px; height: ",[32,0,["canvasHeight"]],"px"]]],[4,[38,0],["click",[32,0,["updatePosition"]]],null],[4,[38,0],["mousedown",[30,[36,1],[[32,0,["updateEditing"]],true],null]],null],[4,[38,0],["touchstart",[30,[36,1],[[32,0,["updateEditing"]],true],null]],null],[4,[38,0],["mouseup",[30,[36,1],[[32,0,["updateEditing"]],false],null]],null],[4,[38,0],["touchend",[30,[36,1],[[32,0,["updateEditing"]],false],null]],null],[4,[38,2],[[32,0,["registerListener"]]],null],[4,[38,3],[[32,0,["unregisterListener"]]],null],[12],[2,"\\n    "],[10,"div"],[14,0,"point"],[15,5,[31,["left: ",[32,0,["pointX"]],"px; top: ",[32,0,["pointY"]],"px"]]],[12],[13],[2,"\\n    "],[10,"div"],[14,0,"crosshair x"],[15,5,[31,["top: ",[32,0,["crosshairY"]],"px"]]],[12],[13],[2,"\\n    "],[10,"div"],[14,0,"crosshair y"],[15,5,[31,["left: ",[32,0,["crosshairX"]],"px"]]],[12],[13],[2,"\\n"],[13],[2,"\\n\\n"],[18,1,null]],"hasEval":false,"upvars":["on","fn","did-insert","will-destroy"]}',meta:{moduleName:"chataigne-web-dashboard/components/canvas-point2d.hbs"}}),x=(n=Ember._tracked,r=Ember._action,o=Ember._action,i=Ember._action,a=Ember._action,u=Ember._action,l=Ember._action,c=Ember._action,f=Ember._action,b=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)})(i,e)
var t,n,r,o=g(i)
function i(){var e
h(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return y(O(e=o.call.apply(o,[this].concat(n))),"editing",p,O(e)),_(O(e),"canvasWidth",300),_(O(e),"canvasHeight",300),e}return t=i,(n=[{key:"updateEditing",value:function(e,t){this.editing=e}},{key:"updatePosition",value:function(e){var t=e.pageX,n=e.pageY,r=e.srcElement
r.classList.contains("canvas")||(r=r.parentElement)
var o=r.getBoundingClientRect().top+window.scrollY,i=r.getBoundingClientRect().left+window.scrollX
this.calculateXY(t,n,i,o,r)}},{key:"calculateXY",value:function(e,t,n,r,o){var i=this.args.control,a=e-n,u=t-r,l=this.remapValue(a,0,this.canvasWidth,i.minVal,i.maxVal),c=this.remapValue(u,0,this.canvasHeight+1,i.maxVal2,i.minVal2)
i.value=l,i.value2=c,this.update()}},{key:"update",value:function(e){var t=this.args.control
t.value<t.minVal?t.value=t.minVal:t.value>t.maxVal&&(t.value=t.maxVal),t.value2<t.minVal2?t.value2=t.minVal2:t.value2>t.maxVal2&&(t.value2=t.maxVal2),this.socket.sendFeedback(t.controlAddress,[t.value,t.value2])}},{key:"moveListener",value:function(e){if(this.editing){var t=e.pageX,n=e.pageY,r=e.srcElement
r.classList.contains("canvas")||(r=r.parentElement)
var o=r.getBoundingClientRect().top+window.scrollY,i=r.getBoundingClientRect().left+window.scrollX
this.calculateXY(t,n,i,o,r)}}},{key:"touchListener",value:function(e){if(this.editing){var t=e.changedTouches[0].pageX,n=e.changedTouches[0].pageY,r=e.srcElement
r.classList.contains("canvas")||(r=r.parentElement)
var o=r.getBoundingClientRect().top+window.scrollY,i=r.getBoundingClientRect().left+window.scrollX
this.calculateXY(t,n,i,o,r),e.preventDefault()}}},{key:"leaveListener",value:function(e){this.editing=!1}},{key:"registerListener",value:function(e){e.addEventListener("mousemove",this.moveListener),e.addEventListener("touchmove",this.touchListener),e.addEventListener("mouseleave",this.leaveListener)}},{key:"unregisterListener",value:function(e){e.removeEventListener("movemove",this.moveListener),e.removeEventListener("touchmove",this.touchListener),e.removeEventListener("mouseleave",this.leaveListener)}},{key:"remapValue",value:function(e,t,n,r,o){return(e-t)*(o-r)/(n-t)+r}},{key:"pointX",get:function(){var e=this.args.control
return this.remapValue(e.value,e.minVal,e.maxVal,-2.5,this.canvasWidth-3.5)}},{key:"pointY",get:function(){var e=this.args.control
return this.remapValue(e.value2,e.minVal2,e.maxVal2,this.canvasHeight-3.5,-2.5)}},{key:"crosshairX",get:function(){return this.pointX+2}},{key:"crosshairY",get:function(){return this.pointY-3}}])&&m(t.prototype,n),r&&m(t,r),i}(t.default),p=P((s=b).prototype,"editing",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),P(s.prototype,"updateEditing",[r],Object.getOwnPropertyDescriptor(s.prototype,"updateEditing"),s.prototype),P(s.prototype,"updatePosition",[o],Object.getOwnPropertyDescriptor(s.prototype,"updatePosition"),s.prototype),P(s.prototype,"update",[i],Object.getOwnPropertyDescriptor(s.prototype,"update"),s.prototype),P(s.prototype,"moveListener",[a],Object.getOwnPropertyDescriptor(s.prototype,"moveListener"),s.prototype),P(s.prototype,"touchListener",[u],Object.getOwnPropertyDescriptor(s.prototype,"touchListener"),s.prototype),P(s.prototype,"leaveListener",[l],Object.getOwnPropertyDescriptor(s.prototype,"leaveListener"),s.prototype),P(s.prototype,"registerListener",[c],Object.getOwnPropertyDescriptor(s.prototype,"registerListener"),s.prototype),P(s.prototype,"unregisterListener",[f],Object.getOwnPropertyDescriptor(s.prototype,"unregisterListener"),s.prototype),s)
e.default=x,Ember._setComponentTemplate(z,x)})),define("chataigne-web-dashboard/components/color-control",["exports","chataigne-web-dashboard/components/control"],(function(e,t){var n,r,o
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=s(e)
if(t){var o=s(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=Ember.HTMLBars.template({id:"yvYsqAwQ",block:'{"symbols":["@control","&default"],"statements":[[8,"control-container",[],[["@control","@showLabel","@extraClass"],[[32,1],true,"no-bottom-padding"]],[["default"],[{"statements":[[2,"\\n    "],[10,"div"],[14,0,"secondary-container"],[12],[2,"\\n        "],[8,"input",[[16,2,[32,0,["roundedRed"]]],[24,0,"secondary"],[4,[38,1],["change",[30,[36,0],[[32,0,["input"]],"red"],null]],null],[4,[38,1],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n        "],[8,"input",[[16,2,[32,0,["roundedGreen"]]],[24,0,"secondary"],[4,[38,1],["change",[30,[36,0],[[32,0,["input"]],"green"],null]],null],[4,[38,1],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n        "],[8,"input",[[16,2,[32,0,["roundedBlue"]]],[24,0,"secondary"],[4,[38,1],["change",[30,[36,0],[[32,0,["input"]],"blue"],null]],null],[4,[38,1],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n        "],[8,"input",[[16,2,[32,0,["roundedAlpha"]]],[24,0,"secondary"],[4,[38,1],["change",[30,[36,0],[[32,0,["input"]],"alpha"],null]],null],[4,[38,1],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n    "],[13],[2,"\\n    \\n    "],[10,"div"],[14,0,"clear"],[12],[13],[2,"\\n\\n    "],[10,"div"],[14,0,"main-input"],[12],[2,"\\n        "],[8,"input",[[16,2,[32,1,["hex"]]],[24,4,"color"],[4,[38,1],["input",[32,0,["input"]]],null],[4,[38,1],["input",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n    "],[13],[2,"\\n    \\n    "],[18,2,null],[2,"\\n"]],"parameters":[]}]]]],"hasEval":false,"upvars":["fn","on"]}',meta:{moduleName:"chataigne-web-dashboard/components/color-control.hbs"}}),d=(n=Ember._action,r=Ember._action,p((o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(i,e)
var t,n,r,o=c(i)
function i(){return a(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"input",value:function(e,t){var n=this.args.control
if("red"==e)n.red=t.target.value
else if("green"==e)n.green=t.target.value
else if("blue"==e)n.blue=t.target.value
else if("alpha"==e)n.alpha=t.target.value
else{var r=(t=e).target.value,o=this.hexToRGB(r)
n.red=o.red,n.green=o.green,n.blue=o.blue}}},{key:"update",value:function(e){console.log("update from update method")
var t=this.args.control
this.socket.sendFeedback(t.controlAddress,[t.red,t.green,t.blue,t.alpha])}},{key:"hexToRGB",value:function(e){var t=0,n=0,r=0
return 4==e.length?(t="0x"+e[1]+e[1],n="0x"+e[2]+e[2],r="0x"+e[3]+e[3]):7==e.length&&(t="0x"+e[1]+e[2],n="0x"+e[3]+e[4],r="0x"+e[5]+e[6]),{red:t/=255,green:n/=255,blue:r/=255}}},{key:"roundedRed",get:function(){var e=Number.parseFloat(this.args.control.red).toFixed(3)
return parseFloat(e)}},{key:"roundedBlue",get:function(){var e=Number.parseFloat(this.args.control.blue).toFixed(3)
return parseFloat(e)}},{key:"roundedGreen",get:function(){var e=Number.parseFloat(this.args.control.green).toFixed(3)
return parseFloat(e)}},{key:"roundedAlpha",get:function(){var e=Number.parseFloat(this.args.control.alpha).toFixed(3)
return parseFloat(e)}}])&&u(t.prototype,n),r&&u(t,r),i}(t.default)).prototype,"input",[n],Object.getOwnPropertyDescriptor(o.prototype,"input"),o.prototype),p(o.prototype,"update",[r],Object.getOwnPropertyDescriptor(o.prototype,"update"),o.prototype),o)
e.default=d,Ember._setComponentTemplate(b,d)})),define("chataigne-web-dashboard/components/comment",["exports","@glimmer/component"],(function(e,t){var n,r,o,i
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return p(this,n)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,h,m,v,g,w,O=Ember.HTMLBars.template({id:"2gD2C1w1",block:'{"symbols":["@control","&default"],"statements":[[6,[37,1],[[32,0,["settings","displayLayout"]]],null,[["default","else"],[{"statements":[[2,"    "],[11,"div"],[16,0,[31,["comment ",[30,[36,1],[[32,0,["settings","displayLayout"]],"layout","responsive"],null]]]],[4,[38,0],[[32,0,["positionStyles"]]],null],[4,[38,0],[[32,0,["colorStyles"]]],null],[12],[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n    "],[13],[2,"\\n"]],"parameters":[]},{"statements":[[2,"    "],[11,"div"],[24,0,"control comment"],[4,[38,0],[[32,0,["colorStyles"]]],null],[12],[2,"\\n        "],[1,[32,1,["text"]]],[2,"\\n    "],[13],[2,"\\n"]],"parameters":[]}]]],[2,"\\n"],[18,2,null]],"hasEval":false,"upvars":["style","if"]}',meta:{moduleName:"chataigne-web-dashboard/components/comment.hbs"}}),j=(n=Ember.inject.service("settings"),i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(a,e)
var t,n,r,i=s(a)
function a(){var e
l(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return u(b(e=i.call.apply(i,[this].concat(n))),"settings",o,b(e)),e}return t=a,(n=[{key:"positionStyles",get:function(){return this.settings.displayLayout?{left:this.args.control.positionX+"px",top:this.args.control.positionY+"px"}:{}}},{key:"colorStyles",get:function(){return{color:this.color,fontSize:this.args.control.size+"px"}}},{key:"color",get:function(){var e=this.args.control.color
return"rgba("+255*e[0]+","+255*e[1]+","+255*e[2]+","+e[3]+")"}}])&&c(t.prototype,n),r&&c(t,r),a}(t.default),y=(r=i).prototype,h="settings",m=[n],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=m.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(y,h,w),w=null),o=w,r)
e.default=j,Ember._setComponentTemplate(O,j)})),define("chataigne-web-dashboard/components/control-container",["exports","@glimmer/component"],(function(e,t){var n,r,o,i
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return p(this,n)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,h,m,v,g,w,O=Ember.HTMLBars.template({id:"xg+xJUGI",block:'{"symbols":["@control","@useWidthSplit","@extraClass","&default"],"statements":[[11,"div"],[16,0,[31,["control ",[32,3]," ",[32,1,["modelName"]]," ",[30,[36,0],[[32,1,["hasAllRanges"]],"","no-range"],null]," ",[30,[36,0],[[32,1,["isVertical"]],"vertical",""],null]," ",[30,[36,0],[[32,2],"width-split",""],null]]]],[4,[38,1],[[32,0,["positionStyles"]]],null],[12],[2,"\\n"],[6,[37,0],[[32,0,["showLabel"]]],null,[["default"],[{"statements":[[2,"        "],[10,"label"],[15,"for",[32,1,["id"]]],[14,0,"control-label unselectable"],[12],[2,"\\n            "],[1,[32,1,["label"]]],[2,"\\n        "],[13],[2,"\\n"]],"parameters":[]}]]],[2,"\\n    "],[18,4,null],[2,"\\n"],[13]],"hasEval":false,"upvars":["if","style"]}',meta:{moduleName:"chataigne-web-dashboard/components/control-container.hbs"}}),j=(n=Ember.inject.service("settings"),i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(a,e)
var t,n,r,i=s(a)
function a(){var e
l(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return u(b(e=i.call.apply(i,[this].concat(n))),"settings",o,b(e)),e}return t=a,(n=[{key:"width",get:function(){return this.args.control.isVertical?this.args.control.height:this.args.control.width}},{key:"height",get:function(){return this.args.control.isVertical?this.args.control.width:this.args.control.height}},{key:"transform",get:function(){return this.args.control.isVertical?"rotate(-90deg)":"none"}},{key:"transformOrigin",get:function(){var e=this.width/2
return e+"px "+e+"px"}},{key:"positionStyles",get:function(){return this.settings.displayLayout?{width:this.width+"px",height:this.height+"px",top:this.args.control.positionY+"px",left:this.args.control.positionX+"px",transform:this.transform,transformOrigin:this.transformOrigin}:{}}},{key:"showLabel",get:function(){return this.args.showLabel||!this.settings.displayLayout}}])&&c(t.prototype,n),r&&c(t,r),a}(t.default),y=(r=i).prototype,h="settings",m=[n],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=m.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(y,h,w),w=null),o=w,r)
e.default=j,Ember._setComponentTemplate(O,j)})),define("chataigne-web-dashboard/components/control",["exports","@glimmer/component"],(function(e,t){var n,r,o,i,a,u,l,c
function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=v(e)
if(t){var o=v(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return h(this,n)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var w=(n=Ember.inject.service("chataigne-websocket"),r=Ember.inject.service("settings"),o=Ember._action,i=Ember._action,c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)})(i,e)
var t,n,r,o=y(i)
function i(){var e
p(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return s(m(e=o.call.apply(o,[this].concat(n))),"socket",u,m(e)),s(m(e),"settings",l,m(e)),e}return t=i,(n=[{key:"input",value:function(e){this.args.control.value=e.target.value}},{key:"update",value:function(e){var t=this.args.control
this.socket.sendFeedback(t.controlAddress,t.value)}}])&&b(t.prototype,n),r&&b(t,r),i}(t.default),u=g((a=c).prototype,"socket",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=g(a.prototype,"settings",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g(a.prototype,"input",[o],Object.getOwnPropertyDescriptor(a.prototype,"input"),a.prototype),g(a.prototype,"update",[i],Object.getOwnPropertyDescriptor(a.prototype,"update"),a.prototype),a)
e.default=w})),define("chataigne-web-dashboard/components/dashboard",["exports","@glimmer/component"],(function(e,t){var n,r,o,i
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return p(this,n)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,h,m,v,g,w,O=Ember.HTMLBars.template({id:"/8OSR2ki",block:'{"symbols":["control","TheComponent","@dashboard","&default"],"statements":[[11,"div"],[16,0,[31,["dashboard ",[30,[36,2],[[32,0,["settings","displayLayout"]],"layout","responsive"],null]]]],[4,[38,3],[[32,0,["sizeStyle"]]],null],[12],[2,"\\n"],[6,[37,2],[[32,3,["name"]]],null,[["default"],[{"statements":[[2,"        "],[10,"h1"],[14,0,"unselectable"],[12],[1,[32,3,["name"]]],[13],[2,"\\n"]],"parameters":[]}]]],[2,"\\n"],[6,[37,5],[[30,[36,4],[[30,[36,4],[[32,3,["sortedControls"]]],null]],null]],null,[["default"],[{"statements":[[6,[37,1],[[30,[36,0],[[32,1,["constructor","modelName"]]],null]],null,[["default"],[{"statements":[[2,"            "],[8,[32,2],[],[["@control"],[[32,1]]],null],[2,"\\n"]],"parameters":[2]}]]]],"parameters":[1]}]]],[13],[2,"\\n\\n"],[18,4,null]],"hasEval":false,"upvars":["component","let","if","style","-track-array","each"]}',meta:{moduleName:"chataigne-web-dashboard/components/dashboard.hbs"}}),j=(n=Ember.inject.service("settings"),i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(a,e)
var t,n,r,i=s(a)
function a(){var e
l(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return u(b(e=i.call.apply(i,[this].concat(n))),"settings",o,b(e)),e}return t=a,(n=[{key:"sizeStyle",get:function(){if(this.settings.displayLayout){var e=this.settings.viewWidth/this.args.dashboard.width,t=(this.settings.viewHeight-37)/this.args.dashboard.height,n=e>t?t:e
return{width:this.args.dashboard.width+"px",height:this.args.dashboard.height+"px",transformOrigin:"top left",transform:"scale("+n+")"}}return{}}}])&&c(t.prototype,n),r&&c(t,r),a}(t.default),y=(r=i).prototype,h="settings",m=[n],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=m.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(y,h,w),w=null),o=w,r)
e.default=j,Ember._setComponentTemplate(O,j)})),define("chataigne-web-dashboard/components/enum-control",["exports","chataigne-web-dashboard/components/control"],(function(e,t){var n,r,o
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=s(e)
if(t){var o=s(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=Ember.HTMLBars.template({id:"N26LKHzU",block:'{"symbols":["optionValue","@control","&default"],"statements":[[8,"control-container",[],[["@control","@showLabel"],[[32,2],true]],[["default"],[{"statements":[[2,"\\n    "],[10,"div"],[14,0,"clear"],[12],[13],[2,"\\n    "],[10,"div"],[14,0,"main-input"],[12],[2,"\\n        "],[11,"select"],[4,[38,1],["change",[32,0,["update"]]],null],[12],[2,"\\n"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,2,["options"]]],null]],null]],null,[["default"],[{"statements":[[2,"                "],[10,"option"],[15,2,[32,1]],[15,"selected",[30,[36,0],[[32,2,["value"]],[32,1]],null]],[12],[1,[32,1]],[13],[2,"\\n"]],"parameters":[1]}]]],[2,"        "],[13],[2,"\\n    "],[13],[2,"\\n    "],[18,3,null],[2,"\\n"]],"parameters":[]}]]]],"hasEval":false,"upvars":["eq","on","-track-array","each"]}',meta:{moduleName:"chataigne-web-dashboard/components/enum-control.hbs"}}),d=(n=Ember._action,r=Ember._action,p((o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(i,e)
var t,n,r,o=c(i)
function i(){return a(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"input",value:function(e){}},{key:"update",value:function(e){var t=this.args.control
t.value=e.target.value,this.socket.sendFeedback(t.controlAddress,t.value)}}])&&u(t.prototype,n),r&&u(t,r),i}(t.default)).prototype,"input",[n],Object.getOwnPropertyDescriptor(o.prototype,"input"),o.prototype),p(o.prototype,"update",[r],Object.getOwnPropertyDescriptor(o.prototype,"update"),o.prototype),o)
e.default=d,Ember._setComponentTemplate(b,d)})),define("chataigne-web-dashboard/components/float-control",["exports","chataigne-web-dashboard/components/control"],(function(e,t){var n,r,o
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=s(e)
if(t){var o=s(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=Ember.HTMLBars.template({id:"kgNy5NW4",block:'{"symbols":["@control","&default"],"statements":[[8,"control-container",[],[["@control","@showLabel"],[[32,1],true]],[["default"],[{"statements":[[2,"\\n    \\n    "],[10,"div"],[14,0,"secondary-container"],[12],[2,"\\n"],[6,[37,2],[[32,0,["isTime"]]],null,[["default","else"],[{"statements":[[2,"            "],[8,"input",[[16,2,[32,0,["time"]]],[24,0,"secondary time"],[4,[38,0],["change",[30,[36,1],[[32,0,["input"]],"time"],null]],null],[4,[38,0],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n"]],"parameters":[]},{"statements":[[2,"            "],[8,"input",[[16,2,[32,0,["roundedValue"]]],[24,0,"secondary"],[4,[38,0],["change",[32,0,["input"]]],null],[4,[38,0],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n"]],"parameters":[]}]]],[2,"    "],[13],[2,"\\n    \\n    "],[10,"div"],[14,0,"main-input"],[12],[2,"\\n"],[6,[37,2],[[32,1,["hasRange"]]],null,[["default","else"],[{"statements":[[2,"            "],[8,"range-slider",[],[["@name","@value","@label","@min","@max","@step","@onInput","@onUpdate"],[[32,1,["id"]],[32,1,["value"]],[32,1,["label"]],[32,1,["minVal"]],[32,1,["maxVal"]],[32,0,["step"]],[32,0,["input"]],[32,0,["update"]]]],null],[2,"\\n"]],"parameters":[]},{"statements":[[6,[37,2],[[32,0,["isTime"]]],null,[["default","else"],[{"statements":[[2,"                "],[8,"input",[[16,2,[32,0,["time"]]],[24,0,"secondary time"],[4,[38,0],["change",[30,[36,1],[[32,0,["input"]],"time"],null]],null],[4,[38,0],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n"]],"parameters":[]},{"statements":[[2,"                "],[8,"input",[[16,2,[32,0,["roundedValue"]]],[24,0,"secondary"],[4,[38,0],["change",[32,0,["input"]]],null],[4,[38,0],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n"]],"parameters":[]}]]]],"parameters":[]}]]],[2,"    "],[13],[2,"\\n\\n    \\n    "],[18,2,null],[2,"\\n"]],"parameters":[]}]]]],"hasEval":false,"upvars":["on","fn","if"]}',meta:{moduleName:"chataigne-web-dashboard/components/float-control.hbs"}}),d=(n=Ember._action,r=Ember._action,p((o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(i,e)
var t,n,r,o=c(i)
function i(){return a(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"input",value:function(e,t){var n=this.args.control
if("time"==e){var r=t.target.value,o=(r=r.split(".")).length>1?r[1]:"0"
o=o.length<2?parseInt(o+"00"):o.length<3?parseInt(o+"0"):parseInt(o)
var i=0,a=0,u=0;(r=r[0].split(":")).length>2?(i=r[0]?parseInt(r[0]):0,a=r[1]?parseInt(r[1]):0,u=r[2]?parseInt(r[2]):0):2==r.length?(a=r[0]?parseInt(r[0]):0,u=r[1]?parseInt(r[1]):0):1==r.length&&(u=r[0]?parseInt(r[0]):0)
var l=60*i*60+60*a+u+o/1e3
n.value=l}else t=e,n.value=t.target.value}},{key:"update",value:function(e,t){var n=this.args.control
n.value<n.minVal?n.value=n.minVal:n.value>n.maxVal&&(n.value=n.maxVal),this.socket.sendFeedback(n.controlAddress,n.value)}},{key:"step",get:function(){return.001}},{key:"roundedValue",get:function(){var e=Number.parseFloat(this.args.control.value).toFixed(3)
return parseFloat(e)}},{key:"isTime",get:function(){return 4==this.args.control.defaultUI}},{key:"time",get:function(){var e=this.args.control,t=Math.floor(e.value/60/60),n=Math.floor(e.value/60-60*t),r=Math.floor(e.value-60*t*60-60*n),o=1e3*(e.value-60*t*60-60*n-r)
return(o=parseInt(Math.round(o)))<10?o="00"+o:o<100&&(o="0"+o),(t=t<10?"0"+t:t)+":"+(n=n<10?"0"+n:n)+":"+(r=r<10?"0"+r:r)+"."+o}}])&&u(t.prototype,n),r&&u(t,r),i}(t.default)).prototype,"input",[n],Object.getOwnPropertyDescriptor(o.prototype,"input"),o.prototype),p(o.prototype,"update",[r],Object.getOwnPropertyDescriptor(o.prototype,"update"),o.prototype),o)
e.default=d,Ember._setComponentTemplate(b,d)})),define("chataigne-web-dashboard/components/group",["exports","@glimmer/component"],(function(e,t){var n,r,o,i
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return p(this,n)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,h,m,v,g,w,O=Ember.HTMLBars.template({id:"J7PmDJQV",block:'{"symbols":["c","TheComponent","@control","&default"],"statements":[[11,"div"],[16,0,[31,["group ",[30,[36,2],[[32,0,["settings","displayLayout"]],"layout","responsive"],null]]]],[4,[38,3],[[32,0,["positionStyles"]]],null],[12],[2,"\\n"],[6,[37,5],[[30,[36,4],[[30,[36,4],[[32,3,["sortedControls"]]],null]],null]],null,[["default"],[{"statements":[[6,[37,1],[[30,[36,0],[[32,1,["constructor","modelName"]]],null]],null,[["default"],[{"statements":[[2,"            "],[8,[32,2],[],[["@control"],[[32,1]]],null],[2,"\\n"]],"parameters":[2]}]]]],"parameters":[1]}]]],[13],[2,"\\n\\n"],[18,4,null]],"hasEval":false,"upvars":["component","let","if","style","-track-array","each"]}',meta:{moduleName:"chataigne-web-dashboard/components/group.hbs"}}),j=(n=Ember.inject.service("settings"),i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(a,e)
var t,n,r,i=s(a)
function a(){var e
l(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return u(b(e=i.call.apply(i,[this].concat(n))),"settings",o,b(e)),e}return t=a,(n=[{key:"positionStyles",get:function(){return this.settings.displayLayout?{width:this.args.control.width+"px",height:this.args.control.height+"px",left:this.args.control.positionX+"px",top:this.args.control.positionY+"px",border:this.args.control.borderWidth+"px solid "+this.borderColor,background:this.backgroundColor}:{border:this.args.control.borderWidth+"px solid "+this.borderColor,background:this.backgroundColor}}},{key:"borderColor",get:function(){var e=this.args.control.borderColor
return"rgba("+255*e[0]+","+255*e[1]+","+255*e[2]+","+e[3]+")"}},{key:"backgroundColor",get:function(){var e=this.args.control.backgroundColor
return e?"rgba("+255*e[0]+","+255*e[1]+","+255*e[2]+","+e[3]+")":"none"}}])&&c(t.prototype,n),r&&c(t,r),a}(t.default),y=(r=i).prototype,h="settings",m=[n],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=m.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(y,h,w),w=null),o=w,r)
e.default=j,Ember._setComponentTemplate(O,j)})),define("chataigne-web-dashboard/components/integer-control",["exports","chataigne-web-dashboard/components/float-control"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=l(e)
if(t){var o=l(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(c,e)
var t,n,u,l=a(c)
function c(){return r(this,c),l.apply(this,arguments)}return t=c,(n=[{key:"step",get:function(){return 1}},{key:"roundedValue",get:function(){return parseInt(this.args.control.value)}}])&&o(t.prototype,n),u&&o(t,u),c}(t.default)
e.default=c})),define("chataigne-web-dashboard/components/point2d-control",["exports","chataigne-web-dashboard/components/control"],(function(e,t){var n,r,o,i,a,u,l
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=m(e)
if(t){var o=m(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return y(this,n)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=Ember.HTMLBars.template({id:"tavur2xU",block:'{"symbols":["@control","&default"],"statements":[[8,"control-container",[],[["@control","@showLabel","@useWidthSplit"],[[32,1],true,[32,0,["useWidthSplit"]]]],[["default"],[{"statements":[[2,"\\n    "],[10,"div"],[14,0,"secondary-container"],[12],[2,"\\n"],[6,[37,3],[[32,1,["hasAllRanges"]]],null,[["default"],[{"statements":[[2,"            "],[11,"button"],[4,[38,1],["click",[32,0,["toggleCanvas"]]],null],[12],[2,"2D Canvas"],[13],[2,"\\n"]],"parameters":[]}]]],[2,"        "],[8,"input",[[16,2,[32,0,["roundedValue"]]],[24,0,"secondary"],[4,[38,1],["change",[32,0,["input"]]],null],[4,[38,1],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n        "],[8,"input",[[16,2,[32,0,["roundedValue2"]]],[24,0,"secondary"],[4,[38,1],["change",[30,[36,0],[[32,0,["input"]],"2"],null]],null],[4,[38,1],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n    "],[13],[2,"\\n\\n    "],[10,"div"],[14,0,"main-input"],[12],[2,"\\n"],[6,[37,3],[[32,1,["hasRange"]]],null,[["default","else"],[{"statements":[[2,"            "],[8,"range-slider",[],[["@name","@value","@min","@max","@step","@onInput","@onUpdate"],[[32,1,["id"]],[32,1,["value"]],[32,1,["minVal"]],[32,1,["maxVal"]],[32,0,["step"]],[32,0,["input"]],[32,0,["update"]]]],null],[2,"\\n"]],"parameters":[]},{"statements":[[2,"            "],[8,"input",[[16,2,[32,0,["roundedValue"]]],[24,0,"secondary"],[4,[38,1],["change",[32,0,["input"]]],null],[4,[38,1],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n"]],"parameters":[]}]]],[2,"        \\n"],[6,[37,3],[[32,1,["hasRange2"]]],null,[["default","else"],[{"statements":[[2,"            "],[8,"range-slider",[],[["@name","@value","@min","@max","@step","@class","@onInput","@onUpdate"],[[30,[36,2],[[32,1,["id"]],"2"],null],[32,1,["value2"]],[32,1,["minVal2"]],[32,1,["maxVal2"]],[32,0,["step"]],"no-top-margin",[30,[36,0],[[32,0,["input"]],"2"],null],[30,[36,0],[[32,0,["update"]],"2"],null]]],null],[2,"\\n"]],"parameters":[]},{"statements":[[2,"            "],[8,"input",[[16,2,[32,0,["roundedValue2"]]],[24,0,"secondary"],[4,[38,1],["change",[30,[36,0],[[32,0,["input"]],"2"],null]],null],[4,[38,1],["change",[30,[36,0],[[32,0,["update"]],"2"],null]],null]],[[],[]],null],[2,"\\n"]],"parameters":[]}]]],[2,"    "],[13],[2,"\\n\\n"],[6,[37,3],[[32,0,["showCanvas"]]],null,[["default"],[{"statements":[[2,"        "],[8,"canvas-point2d",[],[["@control"],[[32,1]]],[["default"],[{"statements":[],"parameters":[]}]]],[2,"\\n"]],"parameters":[]}]]],[2,"\\n    "],[18,2,null],[2,"\\n"]],"parameters":[]}]]]],"hasEval":false,"upvars":["fn","on","concat","if"]}',meta:{moduleName:"chataigne-web-dashboard/components/point2d-control.hbs"}}),w=(n=Ember._tracked,r=Ember._action,o=Ember._action,i=Ember._action,l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)})(i,e)
var t,n,r,o=d(i)
function i(){var e
s(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return f(h(e=o.call.apply(o,[this].concat(n))),"showCanvas",u,h(e)),e}return t=i,(n=[{key:"input",value:function(e,t){var n=this.args.control
2==e?n.value2=t.target.value:(t=e,n.value=t.target.value)}},{key:"update",value:function(e){var t=this.args.control
t.value<t.minVal?t.value=t.minVal:t.value>t.maxVal&&(t.value=t.maxVal),t.value2<t.minVal2?t.value2=t.minVal2:t.value2>t.maxVal2&&(t.value2=t.maxVal2),this.socket.sendFeedback(t.controlAddress,[t.value,t.value2])}},{key:"toggleCanvas",value:function(){this.showCanvas=!this.showCanvas}},{key:"step",get:function(){return.001}},{key:"roundedValue",get:function(){var e=Number.parseFloat(this.args.control.value).toFixed(3)
return parseFloat(e)}},{key:"roundedValue2",get:function(){var e=Number.parseFloat(this.args.control.value2).toFixed(3)
return parseFloat(e)}},{key:"useWidthSplit",get:function(){return this.args.control.height<35}}])&&p(t.prototype,n),r&&p(t,r),i}(t.default),u=v((a=l).prototype,"showCanvas",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),v(a.prototype,"input",[r],Object.getOwnPropertyDescriptor(a.prototype,"input"),a.prototype),v(a.prototype,"update",[o],Object.getOwnPropertyDescriptor(a.prototype,"update"),a.prototype),v(a.prototype,"toggleCanvas",[i],Object.getOwnPropertyDescriptor(a.prototype,"toggleCanvas"),a.prototype),a)
e.default=w,Ember._setComponentTemplate(g,w)})),define("chataigne-web-dashboard/components/point3d-control",["exports","chataigne-web-dashboard/components/control"],(function(e,t){var n,r,o
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=s(e)
if(t){var o=s(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=Ember.HTMLBars.template({id:"gMH5J3vr",block:'{"symbols":["@control","&default"],"statements":[[8,"control-container",[],[["@control","@showLabel","@useWidthSplit"],[[32,1],true,[32,0,["useWidthSplit"]]]],[["default"],[{"statements":[[2,"\\n    "],[10,"div"],[14,0,"secondary-container"],[12],[2,"\\n        "],[8,"input",[[16,2,[32,0,["roundedValue"]]],[24,0,"secondary"],[4,[38,1],["change",[32,0,["input"]]],null],[4,[38,1],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n        "],[8,"input",[[16,2,[32,0,["roundedValue2"]]],[24,0,"secondary"],[4,[38,1],["change",[30,[36,0],[[32,0,["input"]],"2"],null]],null],[4,[38,1],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n        "],[8,"input",[[16,2,[32,0,["roundedValue3"]]],[24,0,"secondary"],[4,[38,1],["change",[30,[36,0],[[32,0,["input"]],"3"],null]],null],[4,[38,1],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n    "],[13],[2,"\\n\\n    "],[10,"div"],[14,0,"main-input"],[12],[2,"\\n"],[6,[37,3],[[32,1,["hasRange"]]],null,[["default","else"],[{"statements":[[2,"            "],[8,"range-slider",[],[["@name","@value","@min","@max","@step","@onInput","@onUpdate"],[[32,1,["id"]],[32,1,["value"]],[32,1,["minVal"]],[32,1,["maxVal"]],[32,0,["step"]],[32,0,["input"]],[32,0,["update"]]]],null],[2,"\\n"]],"parameters":[]},{"statements":[[2,"            "],[8,"input",[[16,2,[32,0,["roundedValue"]]],[24,0,"secondary"],[4,[38,1],["change",[32,0,["input"]]],null],[4,[38,1],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n"]],"parameters":[]}]]],[2,"\\n"],[6,[37,3],[[32,1,["hasRange2"]]],null,[["default","else"],[{"statements":[[2,"            "],[8,"range-slider",[],[["@name","@value","@min","@max","@step","@class","@onInput","@onUpdate"],[[30,[36,2],[[32,1,["id"]],"2"],null],[32,1,["value2"]],[32,1,["minVal2"]],[32,1,["maxVal2"]],[32,0,["step"]],"no-top-margin",[30,[36,0],[[32,0,["input"]],"2"],null],[30,[36,0],[[32,0,["update"]],"2"],null]]],null],[2,"\\n\\n"]],"parameters":[]},{"statements":[[2,"            "],[8,"input",[[16,2,[32,0,["roundedValue2"]]],[24,0,"secondary"],[4,[38,1],["change",[30,[36,0],[[32,0,["input"]],"2"],null]],null],[4,[38,1],["change",[30,[36,0],[[32,0,["update"]],"2"],null]],null]],[[],[]],null],[2,"\\n"]],"parameters":[]}]]],[2,"\\n"],[6,[37,3],[[32,1,["hasRange3"]]],null,[["default","else"],[{"statements":[[2,"            "],[8,"range-slider",[],[["@name","@value","@min","@max","@step","@class","@onInput","@onUpdate"],[[30,[36,2],[[32,1,["id"]],"3"],null],[32,1,["value3"]],[32,1,["minVal3"]],[32,1,["maxVal3"]],[32,0,["step"]],"no-top-margin",[30,[36,0],[[32,0,["input"]],"3"],null],[30,[36,0],[[32,0,["update"]],"3"],null]]],null],[2,"\\n\\n"]],"parameters":[]},{"statements":[[2,"            "],[8,"input",[[16,2,[32,0,["roundedValue3"]]],[24,0,"secondary"],[4,[38,1],["change",[30,[36,0],[[32,0,["input"]],"3"],null]],null],[4,[38,1],["change",[30,[36,0],[[32,0,["update"]],"3"],null]],null]],[[],[]],null],[2,"\\n"]],"parameters":[]}]]],[2,"    "],[13],[2,"\\n    \\n    "],[18,2,null],[2,"\\n"]],"parameters":[]}]]]],"hasEval":false,"upvars":["fn","on","concat","if"]}',meta:{moduleName:"chataigne-web-dashboard/components/point3d-control.hbs"}}),d=(n=Ember._action,r=Ember._action,p((o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(i,e)
var t,n,r,o=c(i)
function i(){return a(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"input",value:function(e,t){var n=this.args.control
2==e?n.value2=t.target.value:3==e?n.value3=t.target.value:(t=e,n.value=t.target.value)}},{key:"update",value:function(e){var t=this.args.control
t.value<t.minVal?t.value=t.minVal:t.value>t.maxVal&&(t.value=t.maxVal),t.value2<t.minVal2?t.value2=t.minVal2:t.value2>t.maxVal2&&(t.value2=t.maxVal2),t.value3<t.minVal3?t.value3=t.minVal3:t.value3>t.maxVal3&&(t.value3=t.maxVal3),this.socket.sendFeedback(t.controlAddress,[t.value,t.value2,t.value3])}},{key:"step",get:function(){return.001}},{key:"roundedValue",get:function(){var e=Number.parseFloat(this.args.control.value).toFixed(3)
return parseFloat(e)}},{key:"roundedValue2",get:function(){var e=Number.parseFloat(this.args.control.value2).toFixed(3)
return parseFloat(e)}},{key:"roundedValue3",get:function(){var e=Number.parseFloat(this.args.control.value3).toFixed(3)
return parseFloat(e)}},{key:"useWidthSplit",get:function(){return this.args.control.height<55}}])&&u(t.prototype,n),r&&u(t,r),i}(t.default)).prototype,"input",[n],Object.getOwnPropertyDescriptor(o.prototype,"input"),o.prototype),p(o.prototype,"update",[r],Object.getOwnPropertyDescriptor(o.prototype,"update"),o.prototype),o)
e.default=d,Ember._setComponentTemplate(b,d)})),define("chataigne-web-dashboard/components/range-slider",["exports","@glimmer/component"],(function(e,t){var n,r,o
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=s(e)
if(t){var o=s(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=Ember.HTMLBars.template({id:"gyDs7AgO",block:'{"symbols":["@label","@name","@value","@step","@min","@max","@showLabel","&default"],"statements":[[10,"div"],[14,0,"range-slider-container"],[12],[2,"\\n    "],[8,"input",[[16,3,[32,2]],[16,2,[32,3]],[16,"step",[32,4]],[16,"min",[32,5]],[16,"max",[32,6]],[16,5,[31,["--min: ",[32,5],"; --max: ",[32,6],"; --val: ",[32,3],";"]]],[24,4,"range"],[4,[38,0],["input",[32,0,["input"]]],null],[4,[38,0],["input",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n\\n    "],[10,"label"],[15,"for",[32,2]],[14,0,"range-slider-label"],[12],[2,"\\n"],[6,[37,1],[[32,7]],null,[["default"],[{"statements":[[2,"            "],[1,[32,1]],[2,": \\n"]],"parameters":[]}]]],[2,"        "],[1,[32,0,["roundedValue"]]],[2,"\\n    "],[13],[2,"\\n    "],[18,8,null],[2,"\\n"],[13]],"hasEval":false,"upvars":["on","if"]}',meta:{moduleName:"chataigne-web-dashboard/components/range-slider.hbs"}}),d=(n=Ember._action,r=Ember._action,p((o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(i,e)
var t,n,r,o=c(i)
function i(){return a(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"input",value:function(e){this.args.onInput&&this.args.onInput(e)}},{key:"update",value:function(e){this.args.onUpdate&&this.args.onUpdate(e)}},{key:"roundedValue",get:function(){var e=Number.parseFloat(this.args.value).toFixed(3)
return parseFloat(e)}}])&&u(t.prototype,n),r&&u(t,r),i}(t.default)).prototype,"input",[n],Object.getOwnPropertyDescriptor(o.prototype,"input"),o.prototype),p(o.prototype,"update",[r],Object.getOwnPropertyDescriptor(o.prototype,"update"),o.prototype),o)
e.default=d,Ember._setComponentTemplate(b,d)})),define("chataigne-web-dashboard/components/string-control",["exports","chataigne-web-dashboard/components/control"],(function(e,t){var n,r,o
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=s(e)
if(t){var o=s(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=Ember.HTMLBars.template({id:"aaJq5oOw",block:'{"symbols":["@control","&default"],"statements":[[8,"control-container",[],[["@control","@showLabel"],[[32,1],true]],[["default"],[{"statements":[[2,"\\n    "],[10,"div"],[14,0,"clear"],[12],[13],[2,"\\n    "],[8,"input",[[16,2,[32,1,["value"]]],[24,0,"string-input"],[4,[38,0],["change",[32,0,["input"]]],null],[4,[38,0],["change",[32,0,["update"]]],null]],[[],[]],null],[2,"\\n    "],[18,2,null],[2,"\\n"]],"parameters":[]}]]]],"hasEval":false,"upvars":["on"]}',meta:{moduleName:"chataigne-web-dashboard/components/string-control.hbs"}}),d=(n=Ember._action,r=Ember._action,p((o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(i,e)
var t,n,r,o=c(i)
function i(){return a(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"input",value:function(e){this.args.control.value=e.target.value}},{key:"update",value:function(e,t){var n=this.args.control
this.socket.sendFeedback(n.controlAddress,n.value)}}])&&u(t.prototype,n),r&&u(t,r),i}(t.default)).prototype,"input",[n],Object.getOwnPropertyDescriptor(o.prototype,"input"),o.prototype),p(o.prototype,"update",[r],Object.getOwnPropertyDescriptor(o.prototype,"update"),o.prototype),o)
e.default=d,Ember._setComponentTemplate(b,d)})),define("chataigne-web-dashboard/components/trigger-control",["exports","chataigne-web-dashboard/components/control"],(function(e,t){var n,r
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=f(e)
if(t){var o=f(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return c(this,n)}}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s,p,b,d,y,h,m=Ember.HTMLBars.template({id:"fXiDj9aP",block:'{"symbols":["@control","&default"],"statements":[[8,"control-container",[],[["@control","@showLabel"],[[32,1],false]],[["default"],[{"statements":[[2,"\\n    "],[10,"div"],[14,0,"clear"],[12],[13],[2,"\\n    "],[11,"button"],[16,0,[31,[[30,[36,0],[[32,1,["triggered"]],"triggered"],null]]]],[4,[38,1],["touchstart",[32,0,["update"]]],null],[4,[38,1],["mousedown",[32,0,["update"]]],null],[12],[1,[32,1,["label"]]],[13],[2,"\\n    "],[18,2,null],[2,"\\n"]],"parameters":[]}]]]],"hasEval":false,"upvars":["if","on"]}',meta:{moduleName:"chataigne-web-dashboard/components/trigger-control.hbs"}}),v=(n=Ember._action,r=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(c,e)
var t,n,r,o=l(c)
function c(){return i(this,c),o.apply(this,arguments)}return t=c,(n=[{key:"update",value:function(e,t){var n=this.args.control
this.socket.sendFeedback(n.controlAddress,!0),(t=t||e).preventDefault()}}])&&a(t.prototype,n),r&&a(t,r),c}(t.default),s=r.prototype,p="update",b=[n],d=Object.getOwnPropertyDescriptor(r.prototype,"update"),y=r.prototype,h={},Object.keys(d).forEach((function(e){h[e]=d[e]})),h.enumerable=!!h.enumerable,h.configurable=!!h.configurable,("value"in h||h.initializer)&&(h.writable=!0),h=b.slice().reverse().reduce((function(e,t){return t(s,p,e)||e}),h),y&&void 0!==h.initializer&&(h.value=h.initializer?h.initializer.call(y):void 0,h.initializer=void 0),void 0===h.initializer&&(Object.defineProperty(s,p,h),h=null),r)
e.default=v,Ember._setComponentTemplate(m,v)})),define("chataigne-web-dashboard/controllers/application",["exports"],(function(e){var t,n,r,o,i,a,u,l,c,f
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t)
if(r){var o=Object.getOwnPropertyDescriptor(r,t)
return o.get?o.get.call(n):o.value}})(e,t,n||e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=w(e)
if(t){var o=w(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return v(this,n)}}function v(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var j=(t=Ember.inject.service("chataigne-websocket"),n=Ember.inject.service("settings"),r=Ember.inject.service("fullscreen"),o=Ember._action,i=Ember._action,a=Ember._action,l=O((u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)})(i,Ember.Controller)
var t,n,r,o=m(i)
function i(){var e
b(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return p(g(e=o.call.apply(o,[this].concat(n))),"socket",l,g(e)),p(g(e),"settings",c,g(e)),p(g(e),"fullscreen",f,g(e)),e}return t=i,(n=[{key:"init",value:function(){y(w(i.prototype),"init",this).call(this)}},{key:"toggleDisplayLayout",value:function(){this.settings.toggleDisplayLayout()}},{key:"toggleFullscreen",value:function(){this.fullscreen.toggle(),this.onResize()}},{key:"onResize",value:function(e){this.settings.viewWidth=document.documentElement.clientWidth,this.settings.viewHeight=document.documentElement.clientHeight}},{key:"isConnected",get:function(){return!0}}])&&d(t.prototype,n),r&&d(t,r),i}()).prototype,"socket",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=O(u.prototype,"settings",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=O(u.prototype,"fullscreen",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O(u.prototype,"toggleDisplayLayout",[o],Object.getOwnPropertyDescriptor(u.prototype,"toggleDisplayLayout"),u.prototype),O(u.prototype,"toggleFullscreen",[i],Object.getOwnPropertyDescriptor(u.prototype,"toggleFullscreen"),u.prototype),O(u.prototype,"onResize",[a],Object.getOwnPropertyDescriptor(u.prototype,"onResize"),u.prototype),u)
e.default=j})),define("chataigne-web-dashboard/controllers/dashboard",["exports"],(function(e){var t,n,r
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=s(e)
if(t){var o=s(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return c(this,n)}}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p,b,d,y,h,m,v=(t=Ember.inject.service("settings"),p=(n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(n,Ember.Controller)
var t=l(n)
function n(){var e
a(this,n)
for(var o=arguments.length,u=new Array(o),l=0;l<o;l++)u[l]=arguments[l]
return i(f(e=t.call.apply(t,[this].concat(u))),"settings",r,f(e)),e}return n}()).prototype,b="settings",d=[t],y={configurable:!0,enumerable:!0,writable:!0,initializer:null},m={},Object.keys(y).forEach((function(e){m[e]=y[e]})),m.enumerable=!!m.enumerable,m.configurable=!!m.configurable,("value"in m||m.initializer)&&(m.writable=!0),m=d.slice().reverse().reduce((function(e,t){return t(p,b,e)||e}),m),h&&void 0!==m.initializer&&(m.value=m.initializer?m.initializer.call(h):void 0,m.initializer=void 0),void 0===m.initializer&&(Object.defineProperty(p,b,m),m=null),r=m,n)
e.default=v})),define("chataigne-web-dashboard/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/helpers/and",["exports","ember-truth-helpers/helpers/and"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}})})),define("chataigne-web-dashboard/helpers/app-version",["exports","chataigne-web-dashboard/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=r.versionOnly||r.hideSha,a=r.shaOnly||r.hideVersion,u=null
return i&&(r.showExtended&&(u=o.match(n.versionExtendedRegExp)),u||(u=o.match(n.versionRegExp))),a&&(u=o.match(n.shaRegExp)),u?u[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var o=Ember.Helper.helper(r)
e.default=o})),define("chataigne-web-dashboard/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})})),define("chataigne-web-dashboard/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})})),define("chataigne-web-dashboard/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})})),define("chataigne-web-dashboard/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})})),define("chataigne-web-dashboard/helpers/is-empty",["exports","ember-truth-helpers/helpers/is-empty"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}))
define("chataigne-web-dashboard/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})})),define("chataigne-web-dashboard/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})})),define("chataigne-web-dashboard/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})})),define("chataigne-web-dashboard/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return t.notEq}})})),define("chataigne-web-dashboard/helpers/not",["exports","ember-truth-helpers/helpers/not"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})})),define("chataigne-web-dashboard/helpers/or",["exports","ember-truth-helpers/helpers/or"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})})),define("chataigne-web-dashboard/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("chataigne-web-dashboard/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("chataigne-web-dashboard/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})})),define("chataigne-web-dashboard/index",["exports","ember-cli-uuid"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"uuid",{enumerable:!0,get:function(){return t.uuid}})})),define("chataigne-web-dashboard/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","chataigne-web-dashboard/config/environment"],(function(e,t,n){var r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,o=n.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(r,o)}
e.default=i})),define("chataigne-web-dashboard/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("chataigne-web-dashboard/initializers/ember-cli-uuid",["exports","chataigne-web-dashboard/config/environment","ember-cli-uuid/mixins/adapters/uuid","ember-cli-uuid/configuration","@ember-data/adapter"],(function(e,t,n,r,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-cli-uuid",initialize:function(){var e=t.default["ember-cli-uuid"]||{}
r.default.load(e),o.default.reopen({generateIdForRecord:function(){return r.default.defaultUUID?n.generateIdForRecord.apply(void 0,arguments):null}})}}
e.default=i})),define("chataigne-web-dashboard/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:n.default}
e.default=r})),define("chataigne-web-dashboard/initializers/export-application-global",["exports","chataigne-web-dashboard/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r})),define("chataigne-web-dashboard/instance-initializers/chataigne-websocket",["exports"],(function(e){function t(e){e.lookup("service:chataigne-websocket")}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default=void 0
var n={name:"chataigne-websocket",initialize:t}
e.default=n})),define("chataigne-web-dashboard/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n})),define("chataigne-web-dashboard/models/boolean-control",["exports","@ember-data/model","chataigne-web-dashboard/models/control"],(function(e,t,n){var r,o,i,a
function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return p(this,n)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,h,m,v,g,w,O=(r=(0,t.attr)("boolean"),a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(n,e)
var t=s(n)
function n(){var e
c(this,n)
for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a]
return l(b(e=t.call.apply(t,[this].concat(o))),"value",i,b(e)),e}return n}(n.default),y=(o=a).prototype,h="value",m=[r],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=m.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(y,h,w),w=null),i=w,o)
e.default=O})),define("chataigne-web-dashboard/models/color-control",["exports","@ember-data/model","chataigne-web-dashboard/models/control"],(function(e,t,n){var r,o,i,a,u,l,c,f,s,p,b,d
function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=_(e)
if(t){var o=_(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return O(this,n)}}function O(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var z=(r=(0,t.attr)("number"),o=(0,t.attr)("number"),i=(0,t.attr)("number"),a=(0,t.attr)("number"),u=Ember.computed("red","green","blue","alpha"),l=Ember.computed("red","green","blue","alpha"),d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)})(i,e)
var t,n,r,o=w(i)
function i(){var e
m(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return h(j(e=o.call.apply(o,[this].concat(n))),"red",f,j(e)),h(j(e),"green",s,j(e)),h(j(e),"blue",p,j(e)),h(j(e),"alpha",b,j(e)),e}return t=i,(n=[{key:"rgba",get:function(){return"rgba("+parseInt(255*this.red)+","+parseInt(255*this.green)+","+parseInt(255*this.blue)+","+this.alpha+")"}},{key:"hex",get:function(){var e=Math.round(255*this.red).toString(16),t=Math.round(255*this.green).toString(16),n=Math.round(255*this.blue).toString(16)
return 1==e.length&&(e="0"+e),1==t.length&&(t="0"+t),1==n.length&&(n="0"+n),"#"+e+t+n}}])&&v(t.prototype,n),r&&v(t,r),i}(n.default),f=P((c=d).prototype,"red",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=P(c.prototype,"green",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=P(c.prototype,"blue",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=P(c.prototype,"alpha",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P(c.prototype,"rgba",[u],Object.getOwnPropertyDescriptor(c.prototype,"rgba"),c.prototype),P(c.prototype,"hex",[l],Object.getOwnPropertyDescriptor(c.prototype,"hex"),c.prototype),c)
e.default=z})),define("chataigne-web-dashboard/models/comment",["exports","@ember-data/model","chataigne-web-dashboard/models/control"],(function(e,t,n){var r,o,i,a,u,l,c,f,s,p
function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=w(e)
if(t){var o=w(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return v(this,n)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var j=(r=(0,t.attr)("string"),o=(0,t.attr)("number"),i=(0,t.attr)("number"),a=(0,t.attr)(),p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)})(n,e)
var t=m(n)
function n(){var e
y(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return d(g(e=t.call.apply(t,[this].concat(o))),"text",l,g(e)),d(g(e),"size",c,g(e)),d(g(e),"backgroundAlpha",f,g(e)),d(g(e),"color",s,g(e)),e}return n}(n.default),l=O((u=p).prototype,"text",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=O(u.prototype,"size",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=O(u.prototype,"backgroundAlpha",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=O(u.prototype,"color",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u)
e.default=j})),define("chataigne-web-dashboard/models/control",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p,b,d,y,h,m,v,g,w,O
function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=k(e)
if(t){var o=k(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return E(this,n)}}function E(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var D=(n=(0,t.attr)("string"),r=(0,t.attr)("string"),o=(0,t.attr)("number"),i=(0,t.attr)("number"),a=(0,t.attr)("number"),u=(0,t.attr)("number"),l=(0,t.attr)("number"),c=(0,t.attr)("number"),f=(0,t.belongsTo)("dashboard"),O=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)})(i,e)
var t,n,r,o=S(i)
function i(){var e
P(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return _(R(e=o.call.apply(o,[this].concat(n))),"label",p,R(e)),_(R(e),"controlAddress",b,R(e)),_(R(e),"positionX",d,R(e)),_(R(e),"positionY",y,R(e)),_(R(e),"width",h,R(e)),_(R(e),"height",m,R(e)),_(R(e),"defaultUI",v,R(e)),_(R(e),"style",g,R(e)),_(R(e),"dashboard",w,R(e)),e}return t=i,(n=[{key:"hasRange",get:function(){return null!=this.maxVal&&null!=this.minVal&&2147483648!=this.maxVal&&-2147483648!=this.minVal}},{key:"hasAllRanges",get:function(){return this.hasRange}},{key:"modelName",get:function(){return this.constructor.modelName}}])&&z(t.prototype,n),r&&z(t,r),i}(t.default),p=V((s=O).prototype,"label",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=V(s.prototype,"controlAddress",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=V(s.prototype,"positionX",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=V(s.prototype,"positionY",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=V(s.prototype,"width",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=V(s.prototype,"height",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=V(s.prototype,"defaultUI",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=V(s.prototype,"style",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=V(s.prototype,"dashboard",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)
e.default=D})),define("chataigne-web-dashboard/models/dashboard",["exports","@ember-data/model"],(function(e,t){var n,r,o,i,a,u,l,c,f,s,p,b
function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=O(e)
if(t){var o=O(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return g(this,n)}}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var P=(n=(0,t.attr)("string"),r=(0,t.attr)("number"),o=(0,t.attr)("number"),i=(0,t.hasMany)("control",{polymorphic:!0}),a=Ember.computed.sort("controls","controlSorting"),b=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)})(n,e)
var t=v(n)
function n(){var e
h(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return y(w(e=t.call.apply(t,[this].concat(o))),"name",l,w(e)),y(w(e),"width",c,w(e)),y(w(e),"height",f,w(e)),y(w(e),"controls",s,w(e)),j(w(e),"controlSorting",["positionY","positionX"]),y(w(e),"sortedControls",p,w(e)),e}return n}(t.default),l=_((u=b).prototype,"name",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=_(u.prototype,"width",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=_(u.prototype,"height",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=_(u.prototype,"controls",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=_(u.prototype,"sortedControls",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u)
e.default=P})),define("chataigne-web-dashboard/models/enum-control",["exports","@ember-data/model","chataigne-web-dashboard/models/control"],(function(e,t,n){var r,o,i,a,u,l
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=h(e)
if(t){var o=h(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v=(r=(0,t.attr)("string"),o=(0,t.attr)(),l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(n,e)
var t=b(n)
function n(){var e
s(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return f(y(e=t.call.apply(t,[this].concat(o))),"value",a,y(e)),f(y(e),"options",u,y(e)),e}return n}(n.default),a=m((i=l).prototype,"value",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=m(i.prototype,"options",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)
e.default=v})),define("chataigne-web-dashboard/models/float-control",["exports","@ember-data/model","chataigne-web-dashboard/models/control"],(function(e,t,n){var r,o,i,a,u,l,c,f
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=g(e)
if(t){var o=g(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return m(this,n)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var O=(r=(0,t.attr)("number"),o=(0,t.attr)("number"),i=(0,t.attr)("number"),f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)})(i,e)
var t,n,r,o=h(i)
function i(){var e
b(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return p(v(e=o.call.apply(o,[this].concat(n))),"value",u,v(e)),p(v(e),"minVal",l,v(e)),p(v(e),"maxVal",c,v(e)),e}return t=i,(n=[{key:"isVertical",get:function(){return 1==this.style}}])&&d(t.prototype,n),r&&d(t,r),i}(n.default),u=w((a=f).prototype,"value",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=w(a.prototype,"minVal",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=w(a.prototype,"maxVal",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a)
e.default=O})),define("chataigne-web-dashboard/models/group",["exports","@ember-data/model","chataigne-web-dashboard/models/control"],(function(e,t,n){var r,o,i,a,u,l,c,f,s,p,b,d
function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=j(e)
if(t){var o=j(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return w(this,n)}}function w(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var z=(r=(0,t.attr)(),o=(0,t.attr)(),i=(0,t.attr)("number"),a=(0,t.hasMany)("control",{polymorphic:!0}),u=Ember.computed.sort("controls","controlSorting"),d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)})(n,e)
var t=g(n)
function n(){var e
m(this,n)
for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i]
return h(O(e=t.call.apply(t,[this].concat(o))),"backgroundColor",c,O(e)),h(O(e),"borderColor",f,O(e)),h(O(e),"borderWidth",s,O(e)),h(O(e),"controls",p,O(e)),_(O(e),"controlSorting",["positionY","positionX"]),h(O(e),"sortedControls",b,O(e)),e}return n}(n.default),c=P((l=d).prototype,"backgroundColor",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=P(l.prototype,"borderColor",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=P(l.prototype,"borderWidth",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=P(l.prototype,"controls",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=P(l.prototype,"sortedControls",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l)
e.default=z})),define("chataigne-web-dashboard/models/integer-control",["exports","@ember-data/model","chataigne-web-dashboard/models/float-control"],(function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=l(e)
if(t){var o=l(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(n,e)
var t=a(n)
function n(){return o(this,n),t.apply(this,arguments)}return n}(n.default)
e.default=c})),define("chataigne-web-dashboard/models/point2d-control",["exports","@ember-data/model","chataigne-web-dashboard/models/control"],(function(e,t,n){var r,o,i,a,u,l,c,f,s,p,b,d,y,h
function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=z(e)
if(t){var o=z(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return _(this,n)}}function _(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var S=(r=(0,t.attr)("number"),o=(0,t.attr)("number"),i=(0,t.attr)("number"),a=(0,t.attr)("number"),u=(0,t.attr)("number"),l=(0,t.attr)("number"),h=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)})(i,e)
var t,n,r,o=j(i)
function i(){var e
g(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return v(P(e=o.call.apply(o,[this].concat(n))),"value",f,P(e)),v(P(e),"minVal",s,P(e)),v(P(e),"maxVal",p,P(e)),v(P(e),"value2",b,P(e)),v(P(e),"minVal2",d,P(e)),v(P(e),"maxVal2",y,P(e)),e}return t=i,(n=[{key:"hasRange2",get:function(){return null!=this.maxVal2&&null!=this.minVal2&&2147483648!=this.maxVal2&&-2147483648!=this.minVal2}},{key:"hasAllRanges",get:function(){return this.hasRange&&this.hasRange2}}])&&w(t.prototype,n),r&&w(t,r),i}(n.default),f=x((c=h).prototype,"value",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=x(c.prototype,"minVal",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=x(c.prototype,"maxVal",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=x(c.prototype,"value2",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=x(c.prototype,"minVal2",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=x(c.prototype,"maxVal2",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c)
e.default=S})),define("chataigne-web-dashboard/models/point3d-control",["exports","@ember-data/model","chataigne-web-dashboard/models/control"],(function(e,t,n){var r,o,i,a,u,l,c,f,s,p,b,d,y,h,m,v,g,w,O,j
function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=V(e)
if(t){var o=V(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return R(this,n)}}function R(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var T=(r=(0,t.attr)("number"),o=(0,t.attr)("number"),i=(0,t.attr)("number"),a=(0,t.attr)("number"),u=(0,t.attr)("number"),l=(0,t.attr)("number"),c=(0,t.attr)("number"),f=(0,t.attr)("number"),s=(0,t.attr)("number"),j=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)})(i,e)
var t,n,r,o=E(i)
function i(){var e
z(this,i)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return P(k(e=o.call.apply(o,[this].concat(n))),"value",b,k(e)),P(k(e),"minVal",d,k(e)),P(k(e),"maxVal",y,k(e)),P(k(e),"value2",h,k(e)),P(k(e),"minVal2",m,k(e)),P(k(e),"maxVal2",v,k(e)),P(k(e),"value3",g,k(e)),P(k(e),"minVal3",w,k(e)),P(k(e),"maxVal3",O,k(e)),e}return t=i,(n=[{key:"hasRange2",get:function(){return null!=this.maxVal2&&null!=this.minVal2&&2147483648!=this.maxVal2&&-2147483648!=this.minVal2}},{key:"hasRange3",get:function(){return null!=this.maxVal3&&null!=this.minVal3&&2147483648!=this.maxVal3&&-2147483648!=this.minVal3}},{key:"hasAllRanges",get:function(){return this.hasRange&&this.hasRange2&&this.hasRange3}}])&&x(t.prototype,n),r&&x(t,r),i}(n.default),b=D((p=j).prototype,"value",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=D(p.prototype,"minVal",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=D(p.prototype,"maxVal",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=D(p.prototype,"value2",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=D(p.prototype,"minVal2",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=D(p.prototype,"maxVal2",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=D(p.prototype,"value3",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=D(p.prototype,"minVal3",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=D(p.prototype,"maxVal3",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p)
e.default=T})),define("chataigne-web-dashboard/models/string-control",["exports","@ember-data/model","chataigne-web-dashboard/models/control"],(function(e,t,n){var r,o,i,a
function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return p(this,n)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var y,h,m,v,g,w,O=(r=(0,t.attr)("string"),a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(n,e)
var t=s(n)
function n(){var e
c(this,n)
for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a]
return l(b(e=t.call.apply(t,[this].concat(o))),"value",i,b(e)),e}return n}(n.default),y=(o=a).prototype,h="value",m=[r],v={configurable:!0,enumerable:!0,writable:!0,initializer:null},w={},Object.keys(v).forEach((function(e){w[e]=v[e]})),w.enumerable=!!w.enumerable,w.configurable=!!w.configurable,("value"in w||w.initializer)&&(w.writable=!0),w=m.slice().reverse().reduce((function(e,t){return t(y,h,e)||e}),w),g&&void 0!==w.initializer&&(w.value=w.initializer?w.initializer.call(g):void 0,w.initializer=void 0),void 0===w.initializer&&(Object.defineProperty(y,h,w),w=null),i=w,o)
e.default=O}))
define("chataigne-web-dashboard/models/trigger-control",["exports","@ember-data/model","chataigne-web-dashboard/models/control"],(function(e,t,n){var r,o,i,a
function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t)
if(r){var o=Object.getOwnPropertyDescriptor(r,t)
return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=h(e)
if(t){var o=h(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return d(this,n)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m,v,g,w,O,j,_=(r=(0,t.attr)("boolean"),a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(a,e)
var t,n,r,o=b(a)
function a(){var e
c(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return l(y(e=o.call.apply(o,[this].concat(n))),"triggered",i,y(e)),e}return t=a,(n=[{key:"init",value:function(){s(h(a.prototype),"init",this).call(this),this.addObserver("triggered",this,"disableTriggered")}},{key:"disableTriggered",value:function(){var e=this
Ember.run.later(this,(function(){e.triggered=!1}),100)}}])&&f(t.prototype,n),r&&f(t,r),a}(n.default),m=(o=a).prototype,v="triggered",g=[r],w={configurable:!0,enumerable:!0,writable:!0,initializer:null},j={},Object.keys(w).forEach((function(e){j[e]=w[e]})),j.enumerable=!!j.enumerable,j.configurable=!!j.configurable,("value"in j||j.initializer)&&(j.writable=!0),j=g.slice().reverse().reduce((function(e,t){return t(m,v,e)||e}),j),O&&void 0!==j.initializer&&(j.value=j.initializer?j.initializer.call(O):void 0,j.initializer=void 0),void 0===j.initializer&&(Object.defineProperty(m,v,j),j=null),i=j,o)
e.default=_})),define("chataigne-web-dashboard/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/modifiers/did-resize",["exports","ember-did-resize-modifier/modifiers/did-resize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/modifiers/style",["exports","ember-style-modifier/modifiers/style"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/router",["exports","chataigne-web-dashboard/config/environment"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=l(e)
if(t){var o=l(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return a(this,n)}}function a(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(a,Ember.Router)
var n=i(a)
function a(){var e
r(this,a)
for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l]
return c(u(e=n.call.apply(n,[this].concat(i))),"location",t.default.locationType),c(u(e),"rootURL",t.default.rootURL),e}return a}()
e.default=f,f.map((function(){this.route("dashboard",{path:"/:dashboard_id"})}))})),define("chataigne-web-dashboard/routes/application",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return a(this,n)}}function a(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(c,Ember.Route)
var t,a,u,l=i(c)
function c(){return n(this,c),l.apply(this,arguments)}return t=c,(a=[{key:"model",value:function(){return this.store.findAll("dashboard")}},{key:"redirect",value:function(e,t){e.length>0&&"dashboard"!=t.targetName&&this.transitionTo("dashboard",e.firstObject)}}])&&r(t.prototype,a),u&&r(t,u),c}()
e.default=l})),define("chataigne-web-dashboard/routes/dashboard",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return a(this,n)}}function a(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(c,Ember.Route)
var t,a,u,l=i(c)
function c(){return n(this,c),l.apply(this,arguments)}return t=c,(a=[{key:"model",value:function(e){return this.store.peekRecord("dashboard",e.dashboard_id)}}])&&r(t.prototype,a),u&&r(t,u),c}()
e.default=l})),define("chataigne-web-dashboard/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/serializers/application",["exports","@ember-data/serializer","ember-cli-uuid"],(function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=c(e)
if(t){var o=c(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return l(this,n)}}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(f,e)
var t,r,l,c=u(f)
function f(){return o(this,f),c.apply(this,arguments)}return t=f,(r=[{key:"pushPayload",value:function(e,t){var n=this.normalizeResponse(e,"dashboard",t)
e.push(n)}},{key:"normalizeResponse",value:function(e,t,r,o,i){var a={data:[],included:[]},u=[]
return r.items.forEach((function(e){var t={type:"dashboard",id:e.id,attributes:{name:e.name,width:e.size[0],height:e.size[1]},relationships:{controls:{data:[]}}},r=[]
e.items&&e.items.forEach((function(t,o){t.type
var i=null!=t.items,a=null!=t.text,l={}
if(i){var c=function e(t,r,o,i){var a="group-"+(0,n.uuid)(),u=[],l={id:a,type:"group",attributes:{positionX:s(t.position[0],r.size[0],i),positionY:s(t.position[1],r.size[1],i),width:t.size[0],height:t.size[1],backgroundColor:t.backgroundColor,borderColor:t.borderColor,borderWidth:t.borderWidth},relationships:{controls:{data:[]}}},c=[]
return t.items&&t.items.forEach((function(n,r){n.type
var o=null!=n.items,i=null!=n.text,a={}
if(o){var l=e(n,t,r,!0)
c.push({id:l.hash.id,type:l.hash.type}),l.included.forEach((function(e){u.push(e)}))}else i?(a=p(n,t,r,!0),c.push({id:a.id,type:a.type}),u.push(a)):(a=b(n,t,!0),c.push({id:a.id,type:a.type}),u.push(a))})),l.relationships.controls.data=c,{hash:l,included:u}}(t,e)
r.push({id:c.hash.id,type:c.hash.type}),u.push(c.hash),c.included.forEach((function(e){u.push(e)}))}else a?(l=p(t,e,o),r.push({id:l.id,type:l.type}),u.push(l)):(l=b(t,e),r.push({id:l.id,type:l.type}),u.push(l))})),t.relationships.controls.data=r,a.data.push(t)})),a.included=u,a}}])&&i(t.prototype,r),l&&i(t,l),f}(t.default)
function s(e,t,n){return n?e:e+=t/2}function p(e,t,r,o){return{id:"comment-"+(0,n.uuid)(),type:"comment",attributes:{positionX:s(e.position[0],t.size[0],o),positionY:s(e.position[1],t.size[1],o),text:e.text,size:e.size,backgroundAlpha:e.backgroundAlpha,color:e.color}}}function b(e,t,r){var o=(0,n.uuid)(),i=function(e){var t=e.type
switch(t){case"Float":t="float-control"
break
case"Integer":t="integer-control"
break
case"Boolean":t="boolean-control"
break
case"String":t="string-control"
break
case"Trigger":t="trigger-control"
break
case"Point2D":t="point2d-control"
break
case"Point3D":t="point3d-control"
break
case"Color":t="color-control"
break
case"Enum":t="enum-control"
break
default:t="control"}return t}(e),a={id:o,type:i,attributes:{label:e.label,value:e.value,minVal:e.minVal,maxVal:e.maxVal,controlAddress:e.controlAddress,positionX:s(e.position[0],t.size[0],r),positionY:s(e.position[1],t.size[1],r),width:e.size[0],height:e.size[1],defaultUI:e.defaultUI,style:e.style}}
if("point2d-control"==i&&(a.attributes.value=e.value[0],a.attributes.value2=e.value[1],a.attributes.minVal&&(a.attributes.minVal=e.minVal[0],a.attributes.minVal2=e.minVal[1]),a.attributes.maxVal&&(a.attributes.maxVal=e.maxVal[0],a.attributes.maxVal2=e.maxVal[1])),"point3d-control"==i&&(a.attributes.value=e.value[0],a.attributes.value2=e.value[1],a.attributes.value3=e.value[2],e.minVal&&(a.attributes.minVal=e.minVal[0],a.attributes.minVal2=e.minVal[1],a.attributes.minVal3=e.minVal[2]),e.maxVal&&(a.attributes.maxVal=e.maxVal[0],a.attributes.maxVal2=e.maxVal[1],a.attributes.maxVal3=e.maxVal[2])),"color-control"==i&&(a.attributes.red=e.value[0],a.attributes.green=e.value[1],a.attributes.blue=e.value[2],a.attributes.alpha=e.value[3]),"enum-control"==i){a.attributes.value=e.value
var u=e.options.map((function(e){return e.key}))
a.attributes.options=u}return a}e.default=f})),define("chataigne-web-dashboard/services/chataigne-websocket",["exports","chataigne-web-dashboard/config/environment"],(function(e,t){var n,r,o,i,a,u,l
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t)
if(r){var o=Object.getOwnPropertyDescriptor(r,t)
return o.get?o.get.call(n):o.value}})(e,t,n||e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=v(e)
if(t){var o=v(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return h(this,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var O=(n=Ember.inject.service("websockets"),r=Ember.inject.service("store"),o=Ember._tracked,a=w((i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)})(c,Ember.Service)
var n,r,o,i=y(c)
function c(){var e
s(this,c)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return f(m(e=i.call.apply(i,[this].concat(n))),"websockets",a,m(e)),f(m(e),"store",u,m(e)),g(m(e),"socket",null),g(m(e),"address","ws://"+location.host+"/ws"),f(m(e),"isConnected",l,m(e)),e}return n=c,(r=[{key:"init",value:function(){b(v(c.prototype),"init",this).apply(this,arguments),"development"==t.default.environment&&(this.address=this.devAddress())
var e=this.websockets.socketFor(this.address)
e.on("open",this.open,this),e.on("close",this.reconnect,this),e.on("message",this.handleMessage,this),this.set("socket",e)}},{key:"devAddress",value:function(){var e=location.host
return"ws://"+(e=e.split(":")[0])+":9999/ws"}},{key:"open",value:function(){this.isConnected=!0}},{key:"reconnect",value:function(e){var t=this
e=null!=e?e:5e3,this.isConnected=!1,Ember.run.later(this,(function(){t.socket.reconnect()}),e)}},{key:"handleMessage",value:function(e){var t=JSON.parse(e.data)
switch(t.dataType){case"all":this.store.pushPayload(t)
break
case"feedback":this.handleFeedback(t)
break
default:console.log("Data type not handled : "+t.dataType)}}},{key:"sendFeedback",value:function(e,t){var n={controlAddress:e,value:t}
console.log("Sending feedback for "+e+": "+t),this.socket.send(JSON.stringify(n))}},{key:"handleFeedback",value:function(e){console.log("Updating "+e.controlAddress+": "+e.value),this.store.peekAll("float-control").forEach((function(t){t.controlAddress==e.controlAddress&&(t.value=e.value)})),this.store.peekAll("integer-control").forEach((function(t){t.controlAddress==e.controlAddress&&(t.value=e.value)})),this.store.peekAll("boolean-control").forEach((function(t){t.controlAddress==e.controlAddress&&(t.value=e.value)})),this.store.peekAll("enum-control").forEach((function(t){t.controlAddress==e.controlAddress&&(t.value=e.value)})),this.store.peekAll("string-control").forEach((function(t){t.controlAddress==e.controlAddress&&(t.value=e.value)})),this.store.peekAll("trigger-control").forEach((function(t){t.controlAddress==e.controlAddress&&(t.triggered=!0)})),this.store.peekAll("point2d-control").forEach((function(t){t.controlAddress==e.controlAddress&&(t.value=e.value[0],t.value2=e.value[1])})),this.store.peekAll("point3d-control").forEach((function(t){t.controlAddress==e.controlAddress&&(t.value=e.value[0],t.value2=e.value[1],t.value3=e.value[2])})),this.store.peekAll("color-control").forEach((function(t){t.controlAddress==e.controlAddress&&(t.red=e.value[0],t.green=e.value[1],t.blue=e.value[2],t.alpha=e.value[3])}))}}])&&p(n.prototype,r),o&&p(n,o),c}()).prototype,"websockets",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=w(i.prototype,"store",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=w(i.prototype,"isConnected",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),i)
e.default=O})),define("chataigne-web-dashboard/services/did-resize-detector",["exports","ember-did-resize-modifier/services/did-resize-detector"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/services/fullscreen",["exports","ember-fullscreen/services/fullscreen"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/services/settings",["exports"],(function(e){var t,n,r,o,i,a,u
function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t)
if(r){var o=Object.getOwnPropertyDescriptor(r,t)
return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=m(e)
if(t){var o=m(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return y(this,n)}}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var g=(t=Ember._tracked,n=Ember._tracked,r=Ember._tracked,i=v((o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)})(l,Ember.Service)
var t,n,r,o=d(l)
function l(){var e
f(this,l)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return c(h(e=o.call.apply(o,[this].concat(n))),"displayLayout",i,h(e)),c(h(e),"viewWidth",a,h(e)),c(h(e),"viewHeight",u,h(e)),e}return t=l,(n=[{key:"init",value:function(){p(m(l.prototype),"init",this).apply(this,arguments),this.displayLayout="true"==localStorage.getItem("displayLayout")}},{key:"toggleDisplayLayout",value:function(){this.displayLayout=!this.displayLayout,localStorage.setItem("displayLayout",this.displayLayout)}}])&&s(t.prototype,n),r&&s(t,r),l}()).prototype,"displayLayout",[t],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),a=v(o.prototype,"viewWidth",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1920}}),u=v(o.prototype,"viewHeight",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1080}}),o)
e.default=g})),define("chataigne-web-dashboard/services/socket-io",["exports","ember-websockets/services/socket-io"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/services/websockets",["exports","ember-websockets/services/websockets"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("chataigne-web-dashboard/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"HpHkuThe",block:'{"symbols":["dashboard","@model"],"statements":[[11,"div"],[16,0,[31,["wrapper-main ",[30,[36,0],[[32,0,["settings","displayLayout"]],"layout","responsive"],null]]]],[4,[38,1],[[32,0,["onResize"]]],[["debounce"],[10]]],[4,[38,2],[[32,0,["onResize"]]],null],[12],[2,"\\n    "],[10,"div"],[14,0,"menu"],[12],[2,"\\n        "],[10,"img"],[14,"src","icon-d2816931ac268e09965ab1de612dc3d5.png"],[14,0,"logo"],[12],[13],[2,"\\n    "],[13],[2,"\\n\\n    "],[10,"ul"],[14,0,"dashboard-list"],[12],[2,"\\n"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[32,2]],null]],null]],null,[["default"],[{"statements":[[2,"            "],[10,"li"],[14,0,"unselectable"],[12],[2,"\\n                "],[8,"link-to",[],[["@route","@model"],["dashboard",[32,1]]],[["default"],[{"statements":[[1,[32,1,["name"]]]],"parameters":[]}]]],[2,"\\n            "],[13],[2,"\\n"]],"parameters":[1]}]]],[2,"    "],[13],[2,"\\n\\n    "],[10,"ul"],[14,0,"layout-options"],[12],[2,"\\n        "],[10,"li"],[15,0,[31,["unselectable ",[30,[36,0],[[32,0,["settings","displayLayout"]],"enabled",""],null]]]],[12],[2,"    \\n            "],[11,"a"],[4,[38,5],["click",[32,0,["toggleDisplayLayout"]]],null],[12],[2,"Layout"],[13],[2,"\\n        "],[13],[2,"\\n        "],[10,"li"],[15,0,[31,["unselectable ",[30,[36,0],[[32,0,["fullscreen","isEnabled"]],"enabled",""],null]]]],[12],[2,"    \\n             "],[11,"a"],[4,[38,5],["click",[32,0,["toggleFullscreen"]]],null],[12],[2,"Fullscreen"],[13],[2,"\\n        "],[13],[2,"\\n    "],[13],[2,"\\n\\n    "],[1,[30,[36,7],[[30,[36,6],null,null]],null]],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":["if","did-resize","did-insert","-track-array","each","on","-outlet","component"]}',meta:{moduleName:"chataigne-web-dashboard/templates/application.hbs"}})
e.default=t})),define("chataigne-web-dashboard/templates/dashboard",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"+3F/GiVQ",block:'{"symbols":[],"statements":[[8,"dashboard",[],[["@dashboard"],[[34,0]]],null],[2,"\\n\\n"],[1,[30,[36,2],[[30,[36,1],null,null]],null]]],"hasEval":false,"upvars":["model","-outlet","component"]}',meta:{moduleName:"chataigne-web-dashboard/templates/dashboard.hbs"}})
e.default=t})),define("chataigne-web-dashboard/templates/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"+39rMR+0",block:'{"symbols":[],"statements":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,"\\n"]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"chataigne-web-dashboard/templates/index.hbs"}})
e.default=t})),define("chataigne-web-dashboard/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("chataigne-web-dashboard/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("chataigne-web-dashboard/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("chataigne-web-dashboard/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("chataigne-web-dashboard/config/environment",[],(function(){try{var e="chataigne-web-dashboard/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("chataigne-web-dashboard/app").default.create({name:"chataigne-web-dashboard",version:"0.0.0+f28cc382"})

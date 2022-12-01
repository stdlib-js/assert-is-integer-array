// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,c){var f,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((a="value"in c)&&(u.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=r,delete t[e],t[e]=c.value,t.__proto__=f):t[e]=c.value),p="get"in c,y="set"in c,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,c.get),y&&i&&i.call(t,e,c.set),t};function f(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function a(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",m=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[_],i=_,e=null!=(o=t)&&s.call(o,i);try{t[_]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[_]=r:delete t[_],n}:function(t){return b.call(t)},d=Number,v=d.prototype.toString,g=y();function j(t){return"object"==typeof t&&(t instanceof d||(g?function(t){try{return v.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function h(t){return a(t)||j(t)}f(h,"isPrimitive",a),f(h,"isObject",j);var S=Number.POSITIVE_INFINITY,O=d.NEGATIVE_INFINITY,w=Math.floor;function T(t){return w(t)===t}function I(t){return t<S&&t>O&&T(t)}function P(t){return a(t)&&I(t)}function N(t){return j(t)&&I(t.valueOf())}function E(t){return P(t)||N(t)}function V(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=4294967295}(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}f(E,"isPrimitive",P),f(E,"isObject",N);var A=V(E.isPrimitive),x=V(E.isObject),F=V(E);return f(F,"primitives",A),f(F,"objects",x),F},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isIntegerArray=e();
//# sourceMappingURL=browser.js.map

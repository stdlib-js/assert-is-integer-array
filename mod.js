// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;var c=e,f=function(t,r,e){var c,f,v,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(a.call(t,r)||l.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),v="get"in e,p="set"in e,f&&(v||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t},v=r()?c:f;var p=function(t,r,e){v(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})};var b=function(t){return"number"==typeof t};var y=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return y&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,m=s;var g=function(t){return m.call(t)},j=Object.prototype.hasOwnProperty;var d=function(t,r){return null!=t&&j.call(t,r)},h="function"==typeof Symbol?Symbol.toStringTag:"",O=d,S=h,w=s;var P=g,I=function(t){var r,e,n;if(null==t)return w.call(t);e=t[S],r=O(t,S);try{t[S]=void 0}catch(r){return w.call(t)}return n=w.call(t),r?t[S]=e:delete t[S],n},T=_()?I:P,N=Number,E=N.prototype.toString;var V=T,A=N,F=function(t){try{return E.call(t),!0}catch(t){return!1}},G=_();var k=function(t){return"object"==typeof t&&(t instanceof A||(G?F(t):"[object Number]"===V(t)))},x=b,M=k;var Y=p,C=function(t){return x(t)||M(t)},q=k;Y(C,"isPrimitive",b),Y(C,"isObject",q);var z=C,B=Number.POSITIVE_INFINITY,D=N.NEGATIVE_INFINITY,H=Math.floor;var J=function(t){return H(t)===t},K=B,L=D,Q=J;var R=function(t){return t<K&&t>L&&Q(t)},U=z.isPrimitive,W=R;var X=function(t){return U(t)&&W(t)},Z=z.isObject,$=R;var tt=function(t){return Z(t)&&$(t.valueOf())},rt=X,et=tt;var nt=p,ot=function(t){return rt(t)||et(t)},it=tt;nt(ot,"isPrimitive",X),nt(ot,"isObject",it);var ut=ot,at=J;var lt=function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&at(t.length)&&t.length>=0&&t.length<=4294967295};var ct=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!lt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}},ft=ct(ut);p(ft,"primitives",ct(ut.isPrimitive)),p(ft,"objects",ct(ut.isObject));export{ft as default};
//# sourceMappingURL=mod.js.map

// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";function t(t){return t!=t}var r=Number.POSITIVE_INFINITY,n=Number,e=n.NEGATIVE_INFINITY;function o(t){return t===r||t===e}var i=Math.sqrt;function u(n){return e=function(t){return t.re}(n),u=function(t){return t.im}(n),t(e)||t(u)?NaN:o(e)||o(u)?r:(e<0&&(e=-e),u<0&&(u=-u),e<u&&(a=u,u=e,e=a),0===e?0:e*i(1+(u/=e)*u));var e,u,a}var a="function"==typeof Object.defineProperty?Object.defineProperty:null,f=Object.defineProperty,c=Object.prototype,l=c.toString,y=c.__defineGetter__,p=c.__defineSetter__,b=c.__lookupGetter__,m=c.__lookupSetter__,v=function(){try{return a({},"x",{}),!0}catch(t){return!1}}()?f:function(t,r,n){var e,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===l.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(b.call(t,r)||m.call(t,r)?(e=t.__proto__,t.__proto__=c,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&y&&y.call(t,r,n.get),u&&p&&p.call(t,r,n.set),t};function s(t,r,n){v(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return w&&"symbol"==typeof Symbol.toStringTag}var h,_=Object.prototype.toString,A=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"",E=d()?function(t){var r,n,e,o,i;if(null==t)return _.call(t);n=t[g],i=g,r=null!=(o=t)&&A.call(o,i);try{t[g]=void 0}catch(r){return _.call(t)}return e=_.call(t),r?t[g]=n:delete t[g],e}:function(t){return _.call(t)},U="function"==typeof Uint32Array,j="function"==typeof Uint32Array?Uint32Array:null,N="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var t,r,n;if("function"!=typeof j)return!1;try{r=new j(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(U&&n instanceof Uint32Array||"[object Uint32Array]"===E(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?N:function(){throw new Error("not implemented")};var S,T=h,I="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;S=function(){var t,r,n;if("function"!=typeof O)return!1;try{r=new O([1,3.14,-3.14,NaN]),n=r,t=(I&&n instanceof Float64Array||"[object Float64Array]"===E(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?F:function(){throw new Error("not implemented")};var P,H=S,G="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var t,r,n;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,256,257]),n=r,t=(G&&n instanceof Uint8Array||"[object Uint8Array]"===E(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?V:function(){throw new Error("not implemented")};var x,W=P,Y="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var t,r,n;if("function"!=typeof k)return!1;try{r=new k(r=[1,3.14,-3.14,65536,65537]),n=r,t=(Y&&n instanceof Uint16Array||"[object Uint16Array]"===E(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?C:function(){throw new Error("not implemented")};var M,R={uint16:x,uint8:W};(M=new R.uint16(1))[0]=4660;var B,q,J=52===new R.uint8(M.buffer)[0];!0===J?(B=1,q=0):(B=0,q=1);var z={HIGH:B,LOW:q},D=new H(1),K=new T(D.buffer),Q=z.HIGH,X=z.LOW;function Z(t,r,n,e){return D[0]=t,r[e]=K[Q],r[e+n]=K[X],r}function $(t){return Z(t,[0,0],1,0)}s($,"assign",Z);var tt,rt,nt=!0===J?1:0,et=new H(1),ot=new T(et.buffer);function it(t){return et[0]=t,ot[nt]}!0===J?(tt=1,rt=0):(tt=0,rt=1);var ut={HIGH:tt,LOW:rt},at=new H(1),ft=new T(at.buffer),ct=ut.HIGH,lt=ut.LOW,yt=[0,0];function pt(t,r){var n,e,o,i;return $.assign(t,yt,1,0),n=yt[0],n&=2147483647,e=it(r),o=n|=e&=2147483648,i=yt[1],ft[ct]=o,ft[lt]=i,at[0]}var bt=1.5707963267948966,mt=6123233995736766e-32,vt=3.141592653589793;function st(n,i){var u;return t(i)||t(n)?NaN:o(i)?i===r?o(n)?pt(vt/4,n):pt(0,n):o(n)?pt(3*vt/4,n):pt(vt,n):o(n)?pt(vt/2,n):0===n?i>=0&&!function(t){return!!(it(t)>>>31)}(i)?pt(0,n):pt(vt,n):0===i?pt(vt/2,n):(u=function(n){var o,i,u,a;return t(n)||0===n?n:n===r?bt:n===e?-bt:(n<0&&(i=!0,n=-n),o=0,n>2.414213562373095?(u=bt,o=1,n=-1/n):n<=.66?u=0:(u=.7853981633974483,o=2,n=(n-1)/(n+1)),a=(a=n*n)*function(t){return 0===t?-64.85021904942025:t*(t*(t*(-.8750608600031904*t-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(a)/function(t){return 0===t?194.5506571482614:194.5506571482614+t*(485.3903996359137+t*(432.88106049129027+t*(165.02700983169885+t*(24.858464901423062+1*t))))}(a),a=n*a+n,2===o?a+=.5*mt:1===o&&(a+=mt),u+=a,i?-u:u)}(n/i),i<0?u<=0?u+vt:u-vt:u)}function wt(t){return"number"==typeof t}var dt=n.prototype.toString,ht=d();function _t(t){return"object"==typeof t&&(t instanceof n||(ht?function(t){try{return dt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===E(t)))}function At(t){return wt(t)||_t(t)}function gt(t,r){if(!(this instanceof gt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!wt(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!wt(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return v(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),v(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}function Et(t,r,n){var e;return e=new gt(r,n),t[0]=u(e),t[1]=function(t,r){return st(r,t)}(e),t}return s(At,"isPrimitive",wt),s(At,"isObject",_t),s(gt,"BYTES_PER_ELEMENT",8),s(gt.prototype,"BYTES_PER_ELEMENT",8),s(gt.prototype,"byteLength",16),s(gt.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),s(gt.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t})),function(t,r,n){return 2===arguments.length?Et([0,0],t,r):Et(t,r,n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).cpolar=r();
//# sourceMappingURL=browser.js.map

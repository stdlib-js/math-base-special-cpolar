// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var t=Number.POSITIVE_INFINITY,n=Number,e=n.NEGATIVE_INFINITY;function o(r){return r===t||r===e}var i=Math.sqrt;function a(n){return e=function(r){return r.re}(n),a=function(r){return r.im}(n),r(e)||r(a)?NaN:o(e)||o(a)?t:(e<0&&(e=-e),a<0&&(a=-a),e<a&&(u=a,a=e,e=u),0===e?0:e*i(1+(a/=e)*a));var e,a,u}var u="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty,f=Object.prototype,l=f.toString,y=f.__defineGetter__,p=f.__defineSetter__,v=f.__lookupGetter__,b=f.__lookupSetter__;var m=function(){try{return u({},"x",{}),!0}catch(r){return!1}}()?c:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===l.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(v.call(r,t)||b.call(r,t)?(e=r.__proto__,r.__proto__=f,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&y&&y.call(r,t,n.get),a&&p&&p.call(r,t,n.set),r};function s(r,t,n){m(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return w&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=h()?function(r){var t,n,e,o,i;if(null==r)return _.call(r);n=r[d],i=d,t=null!=(o=r)&&A.call(o,i);try{r[d]=void 0}catch(t){return _.call(r)}return e=_.call(r),t?r[d]=n:delete r[d],e}:function(r){return _.call(r)},E="function"==typeof Uint32Array;var U="function"==typeof Uint32Array?Uint32Array:null;var j,N="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var r,t,n;if("function"!=typeof U)return!1;try{t=new U(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(E&&n instanceof Uint32Array||"[object Uint32Array]"===g(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?N:function(){throw new Error("not implemented")};var S=j,T="function"==typeof Float64Array;var I="function"==typeof Float64Array?Float64Array:null;var O,F="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,t,n;if("function"!=typeof I)return!1;try{t=new I([1,3.14,-3.14,NaN]),n=t,r=(T&&n instanceof Float64Array||"[object Float64Array]"===g(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var P=O,H="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var L,V="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,256,257]),n=t,r=(H&&n instanceof Uint8Array||"[object Uint8Array]"===g(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W=L,Y="function"==typeof Uint16Array;var k="function"==typeof Uint16Array?Uint16Array:null;var x,C="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Y&&n instanceof Uint16Array||"[object Uint16Array]"===g(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?C:function(){throw new Error("not implemented")};var M,R={uint16:x,uint8:W};(M=new R.uint16(1))[0]=4660;var B,q,J=52===new R.uint8(M.buffer)[0];!0===J?(B=1,q=0):(B=0,q=1);var z={HIGH:B,LOW:q},D=new P(1),K=new S(D.buffer),Q=z.HIGH,X=z.LOW;function Z(r,t,n,e){return D[0]=r,t[e]=K[Q],t[e+n]=K[X],t}function $(r){return Z(r,[0,0],1,0)}s($,"assign",Z);var rr,tr,nr=!0===J?1:0,er=new P(1),or=new S(er.buffer);function ir(r){return er[0]=r,or[nr]}!0===J?(rr=1,tr=0):(rr=0,tr=1);var ar={HIGH:rr,LOW:tr},ur=new P(1),cr=new S(ur.buffer),fr=ar.HIGH,lr=ar.LOW;var yr=[0,0];function pr(r,t){var n,e,o,i;return $.assign(r,yr,1,0),n=yr[0],n&=2147483647,e=ir(t),o=n|=e&=2147483648,i=yr[1],cr[fr]=o,cr[lr]=i,ur[0]}var vr=1.5707963267948966;var br=3.141592653589793;function mr(n,i){var a;return r(i)||r(n)?NaN:o(i)?i===t?o(n)?pr(br/4,n):pr(0,n):o(n)?pr(3*br/4,n):pr(br,n):o(n)?pr(br/2,n):0===n?i>=0&&!function(r){return!!(ir(r)>>>31)}(i)?pr(0,n):pr(br,n):0===i?pr(br/2,n):(a=function(n){var o,i,a,u;return r(n)||0===n?n:n===t?vr:n===e?-vr:(n<0&&(i=!0,n=-n),o=0,n>2.414213562373095?(a=vr,o=1,n=-1/n):n<=.66?a=0:(a=.7853981633974483,o=2,n=(n-1)/(n+1)),u=(u=n*n)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(u)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(u),u=n*u+n,2===o?u+=3061616997868383e-32:1===o&&(u+=6123233995736766e-32),a+=u,i?-a:a)}(n/i),i<0?a<=0?a+br:a-br:a)}function sr(r){return"number"==typeof r}var wr=n.prototype.toString;var hr=h();function _r(r){return"object"==typeof r&&(r instanceof n||(hr?function(r){try{return wr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===g(r)))}function Ar(r){return sr(r)||_r(r)}function dr(r,t){if(!(this instanceof dr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!sr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!sr(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return m(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),m(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}function gr(r,t,n){var e;return e=new dr(t,n),r[0]=a(e),r[1]=function(r,t){return mr(t,r)}(e),r}function Er(r,t,n){return 2===arguments.length?gr([0,0],r,t):gr(r,t,n)}s(Ar,"isPrimitive",sr),s(Ar,"isObject",_r),s(dr,"BYTES_PER_ELEMENT",8),s(dr.prototype,"BYTES_PER_ELEMENT",8),s(dr.prototype,"byteLength",16),s(dr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),s(dr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));export{Er as default};
//# sourceMappingURL=mod.js.map
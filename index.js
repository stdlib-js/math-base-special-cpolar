// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;function o(n){return n===t||n===r}var e=Math.sqrt;function i(r){return i=function(n){return n.re}(r),u=function(n){return n.im}(r),n(i)||n(u)?NaN:o(i)||o(u)?t:(i<0&&(i=-i),u<0&&(u=-u),i<u&&(f=u,u=i,i=f),0===i?0:i*e(1+(u/=i)*u));var i,u,f}var u,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),a=Object.prototype.toString,c=Object.prototype.hasOwnProperty,y="function"==typeof Symbol?Symbol.toStringTag:"",l=f&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,o,e,i;if(null==n)return a.call(n);r=n[y],i=y,t=null!=(e=n)&&c.call(e,i);try{n[y]=void 0}catch(t){return a.call(n)}return o=a.call(n),t?n[y]=r:delete n[y],o}:function(n){return a.call(n)},p="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,v="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(p&&r instanceof Uint32Array||"[object Uint32Array]"===l(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?v:function(){throw new Error("not implemented")};var b,m=u,w="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;b=function(){var n,t,r;if("function"!=typeof U)return!1;try{t=new U([1,3.14,-3.14,NaN]),r=t,n=(w&&r instanceof Float64Array||"[object Float64Array]"===l(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var h,s=b,I="function"==typeof Uint8Array,N="function"==typeof Uint8Array?Uint8Array:null,g="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var n,t,r;if("function"!=typeof N)return!1;try{t=new N(t=[1,3.14,-3.14,256,257]),r=t,n=(I&&r instanceof Uint8Array||"[object Uint8Array]"===l(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?g:function(){throw new Error("not implemented")};var F,S=h,H="function"==typeof Uint16Array,O="function"==typeof Uint16Array?Uint16Array:null,T="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var n,t,r;if("function"!=typeof O)return!1;try{t=new O(t=[1,3.14,-3.14,65536,65537]),r=t,n=(H&&r instanceof Uint16Array||"[object Uint16Array]"===l(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?T:function(){throw new Error("not implemented")};var j,E={uint16:F,uint8:S};(j=new E.uint16(1))[0]=4660;var G,L,W=52===new E.uint8(j.buffer)[0];!0===W?(G=1,L=0):(G=0,L=1);var x={HIGH:G,LOW:L},P=new s(1),V=new m(P.buffer),Y=x.HIGH,_=x.LOW;function q(n,t){return P[0]=t,n[0]=V[Y],n[1]=V[_],n}var M,k,z=!0===W?1:0,B=new s(1),C=new m(B.buffer);function D(n){return B[0]=n,C[z]}!0===W?(M=1,k=0):(M=0,k=1);var J={HIGH:M,LOW:k},K=new s(1),Q=new m(K.buffer),R=J.HIGH,X=J.LOW,Z=[0,0];function $(n,t){var r,o,e,i;return function(n,t){1===arguments.length?q([0,0],n):q(n,t)}(Z,n),r=Z[0],r&=2147483647,o=D(t),e=r|=o&=2147483648,i=Z[1],Q[R]=e,Q[X]=i,K[0]}var nn=1.5707963267948966,tn=6123233995736766e-32,rn=3.141592653589793;function on(e,i){var u;return n(i)||n(e)?NaN:o(i)?i===t?o(e)?$(rn/4,e):$(0,e):o(e)?$(3*rn/4,e):$(rn,e):o(e)?$(rn/2,e):0===e?i>=0&&!function(n){return!!(D(n)>>>31)}(i)?$(0,e):$(rn,e):0===i?$(rn/2,e):(u=function(o){var e,i,u,f;return n(o)||0===o?o:o===t?nn:o===r?-nn:(o<0&&(i=!0,o=-o),e=0,o>2.414213562373095?(u=nn,e=1,o=-1/o):o<=.66?u=0:(u=.7853981633974483,e=2,o=(o-1)/(o+1)),f=(f=o*o)*function(n){return 0===n?-64.85021904942025:n*(n*(n*(-.8750608600031904*n-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(f)/function(n){return 0===n?194.5506571482614:194.5506571482614+n*(485.3903996359137+n*(432.88106049129027+n*(165.02700983169885+n*(24.858464901423062+1*n))))}(f),f=o*f+o,2===e?f+=.5*tn:1===e&&(f+=tn),u+=f,i?-u:u)}(e/i),i<0?u<=0?u+rn:u-rn:u)}function en(n,t,r){return n[0]=i(t),n[1]=function(n,t){return on(t,n)}(t,r),n}return function(n,t,r){return 2===arguments.length?en([0,0],n,t):en(n,t,r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).cpolar=t();
//# sourceMappingURL=index.js.map

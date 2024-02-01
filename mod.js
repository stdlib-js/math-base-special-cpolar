// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+A(n):A(n)+r}var E=String.fromCharCode,U=isNaN,I=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,a,o,f,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(u(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,U(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){return"string"==typeof r}function T(r){var e,t,n;if(!N(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=j(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&G&&G.call(r,e,t.set),r};function L(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var P=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;function Z(r){return r===P||r===R}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"";var B=M&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return X.call(r);t=r[z],a=z,e=null!=(i=r)&&Y.call(i,a);try{r[z]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[z]=t:delete r[z],n}:function(r){return X.call(r)},D="function"==typeof Uint32Array;var J="function"==typeof Uint32Array?Uint32Array:null;var K,Q="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,e,t;if("function"!=typeof J)return!1;try{e=new J(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(D&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr=K,er="function"==typeof Float64Array;var tr="function"==typeof Float64Array?Float64Array:null;var nr,ir="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr([1,3.14,-3.14,NaN]),t=e,r=(er&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=nr,or="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null;var ur,fr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),t=e,r=(or&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr=ur,lr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null;var yr,gr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(lr&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,vr={uint16:yr,uint8:sr};(dr=new vr.uint16(1))[0]=4660;var hr,wr,br=52===new vr.uint8(dr.buffer)[0];!0===br?(hr=1,wr=0):(hr=0,wr=1);var mr={HIGH:hr,LOW:wr},Ar=new ar(1),_r=new rr(Ar.buffer),Er=mr.HIGH,Ur=mr.LOW;function Ir(r,e,t,n){return Ar[0]=r,e[n]=_r[Er],e[n+t]=_r[Ur],e}function Sr(r){return Ir(r,[0,0],1,0)}L(Sr,"assign",Ir);var kr,xr,Fr=!0===br?1:0,jr=new ar(1),Nr=new rr(jr.buffer);function Tr(r){return jr[0]=r,Nr[Fr]}!0===br?(kr=1,xr=0):(kr=0,xr=1);var Or={HIGH:kr,LOW:xr},Vr=new ar(1),$r=new rr(Vr.buffer),Gr=Or.HIGH,Hr=Or.LOW;var Wr=[0,0];function Cr(r,e){var t,n,i,a;return Sr.assign(r,Wr,1,0),t=Wr[0],t&=2147483647,n=Tr(e),i=t|=n&=2147483648,a=Wr[1],$r[Gr]=i,$r[Hr]=a,Vr[0]}function Lr(r){return r!=r}var Pr=1.5707963267948966;var Rr=3.141592653589793;function Zr(r,e){var t;return Lr(e)||Lr(r)?NaN:Z(e)?e===P?Z(r)?Cr(Rr/4,r):Cr(0,r):Z(r)?Cr(3*Rr/4,r):Cr(Rr,r):Z(r)?Cr(Rr/2,r):0===r?e>=0&&!function(r){return!!(Tr(r)>>>31)}(e)?Cr(0,r):Cr(Rr,r):0===e?Cr(Rr/2,r):(t=function(r){var e,t,n,i;return Lr(r)||0===r?r:r===P?Pr:r===R?-Pr:(r<0&&(t=!0,r=-r),e=0,r>2.414213562373095?(n=Pr,e=1,r=-1/r):r<=.66?n=0:(n=.7853981633974483,e=2,r=(r-1)/(r+1)),i=(i=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(i)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(i),i=r*i+r,2===e?i+=3061616997868383e-32:1===e&&(i+=6123233995736766e-32),n+=i,t?-n:n)}(r/e),e<0?t<=0?t+Rr:t-Rr:t)}function Mr(r){return r.re}function Xr(r){return r.im}var Yr=Math.sqrt;function qr(r){return e=Mr(r),t=Xr(r),Lr(e)||Lr(t)?NaN:Z(e)||Z(t)?P:(e<0&&(e=-e),t<0&&(t=-t),e<t&&(n=t,t=e,e=n),0===e?0:e*Yr(1+(t/=e)*t));var e,t,n}function zr(r,e,t,n){return e[n]=qr(r),e[n+t]=function(r){return Zr(Xr(r),Mr(r))}(r),e}function Br(r){return zr(r,[0,0],1,0)}L(Br,"assign",zr);export{zr as assign,Br as default};
//# sourceMappingURL=mod.js.map

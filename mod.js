// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return n!=n},r=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,o=r,e=t;var u=function(n){return n===o||n===e},i=Math.sqrt,a=n,f=u,c=r,y=i;var v=function(n,r){var t;return a(n)||a(r)?NaN:f(n)||f(r)?c:(n<0&&(n=-n),r<0&&(r=-r),n<r&&(t=r,r=n,n=t),0===n?0:n*y(1+(r/=n)*r))},l=function(n){return n.re},p=function(n){return n.im};var A=function(n){return v(l(n),p(n))};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var U=function(){return w&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,m=b;var h=function(n){return m.call(n)},I=Object.prototype.hasOwnProperty;var N=function(n,r){return null!=n&&I.call(n,r)},d="function"==typeof Symbol?Symbol.toStringTag:"",s=N,F=d,S=b;var H=h,O=function(n){var r,t,o;if(null==n)return S.call(n);t=n[F],r=s(n,F);try{n[F]=void 0}catch(r){return S.call(n)}return o=S.call(n),r?n[F]=t:delete n[F],o},g=U()?O:H,E=g,j="function"==typeof Uint32Array;var T="function"==typeof Uint32Array?Uint32Array:null,G=function(n){return j&&n instanceof Uint32Array||"[object Uint32Array]"===E(n)},L=T;var W=function(){var n,r;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,4294967296,4294967297]),n=G(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var P="function"==typeof Uint32Array?Uint32Array:void 0,V=function(){throw new Error("not implemented")},Y=W()?P:V,_=g,q="function"==typeof Float64Array;var x="function"==typeof Float64Array?Float64Array:null,M=function(n){return q&&n instanceof Float64Array||"[object Float64Array]"===_(n)},k=x;var z=function(){var n,r;if("function"!=typeof k)return!1;try{r=new k([1,3.14,-3.14,NaN]),n=M(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var B="function"==typeof Float64Array?Float64Array:void 0,C=function(){throw new Error("not implemented")},D=z()?B:C,J=g,K="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null,R=function(n){return K&&n instanceof Uint8Array||"[object Uint8Array]"===J(n)},X=Q;var Z=function(){var n,r;if("function"!=typeof X)return!1;try{r=new X(r=[1,3.14,-3.14,256,257]),n=R(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var $="function"==typeof Uint8Array?Uint8Array:void 0,nn=function(){throw new Error("not implemented")},rn=Z()?$:nn,tn=g,on="function"==typeof Uint16Array;var en="function"==typeof Uint16Array?Uint16Array:null,un=function(n){return on&&n instanceof Uint16Array||"[object Uint16Array]"===tn(n)},an=en;var fn=function(){var n,r;if("function"!=typeof an)return!1;try{r=new an(r=[1,3.14,-3.14,65536,65537]),n=un(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var cn,yn="function"==typeof Uint16Array?Uint16Array:void 0,vn=function(){throw new Error("not implemented")},ln={uint16:fn()?yn:vn,uint8:rn};(cn=new ln.uint16(1))[0]=4660;var pn,An,wn=52===new ln.uint8(cn.buffer)[0];!0===wn?(pn=1,An=0):(pn=0,An=1);var Un=Y,bn={HIGH:pn,LOW:An},mn=new D(1),hn=new Un(mn.buffer),In=bn.HIGH,Nn=bn.LOW;var dn=function(n,r){return mn[0]=r,n[0]=hn[In],n[1]=hn[Nn],n};var sn=function(n,r){return 1===arguments.length?dn([0,0],n):dn(n,r)},Fn=Y,Sn=!0===wn?1:0,Hn=new D(1),On=new Fn(Hn.buffer);var gn,En,jn=function(n){return Hn[0]=n,On[Sn]};!0===wn?(gn=1,En=0):(gn=0,En=1);var Tn=Y,Gn={HIGH:gn,LOW:En},Ln=new D(1),Wn=new Tn(Ln.buffer),Pn=Gn.HIGH,Vn=Gn.LOW;var Yn=function(n,r){return Wn[Pn]=n,Wn[Vn]=r,Ln[0]},_n=sn,qn=jn,xn=Yn,Mn=[0,0];var kn=jn;var zn=n,Bn=r,Cn=1.5707963267948966,Dn=t,Jn=function(n){return 0===n?-64.85021904942025:n*(n*(n*(-.8750608600031904*n-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025},Kn=function(n){return 0===n?194.5506571482614:194.5506571482614+n*(485.3903996359137+n*(432.88106049129027+n*(165.02700983169885+n*(24.858464901423062+1*n))))};var Qn=u,Rn=function(n,r){var t,o;return _n(Mn,n),t=Mn[0],t&=2147483647,o=qn(r),xn(t|=o&=2147483648,Mn[1])},Xn=function(n){return!!(kn(n)>>>31)},Zn=n,$n=function(n){var r,t,o,e;return zn(n)||0===n?n:n===Bn?Cn:n===Dn?-Cn:(n<0&&(t=!0,n=-n),r=0,n>2.414213562373095?(o=Cn,r=1,n=-1/n):n<=.66?o=0:(o=.7853981633974483,r=2,n=(n-1)/(n+1)),e=n*(e=(e=n*n)*Jn(e)/Kn(e))+n,2===r?e+=3061616997868383e-32:1===r&&(e+=6123233995736766e-32),o+=e,t?-o:o)},nr=r,rr=3.141592653589793;var tr=function(n,r){var t;return Zn(r)||Zn(n)?NaN:Qn(r)?r===nr?Qn(n)?Rn(rr/4,n):Rn(0,n):Qn(n)?Rn(3*rr/4,n):Rn(rr,n):Qn(n)?Rn(rr/2,n):0===n?r>=0&&!Xn(r)?Rn(0,n):Rn(rr,n):0===r?Rn(rr/2,n):(t=$n(n/r),r<0?t<=0?t+rr:t-rr:t)};var or=function(n,r){return tr(r,n)};function er(n,r,t){return n[0]=A(r),n[1]=or(r,t),n}function ur(n,r,t){return 2===arguments.length?er([0,0],n,r):er(n,r,t)}export{ur as default};
//# sourceMappingURL=mod.js.map
// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r=Math.floor;function n(r){return r!=r}var t,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,i=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol:void 0,u="function"==typeof a?a.toStringTag:"",f=e&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,a,f;if(null==r)return o.call(r);t=r[u],f=u,n=null!=(a=r)&&i.call(a,f);try{r[u]=void 0}catch(n){return o.call(r)}return e=o.call(r),n?r[u]=t:delete r[u],e}:function(r){return o.call(r)},c="function"==typeof Uint32Array,l="function"==typeof Uint32Array?Uint32Array:null,s="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var r,n,t;if("function"!=typeof l)return!1;try{n=new l(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(c&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?s:function(){throw new Error("not implemented")};var p,y=t,v="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,w="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d([1,3.14,-3.14,NaN]),t=n,r=(v&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var h,g=p,A="function"==typeof Uint8Array,b="function"==typeof Uint8Array?Uint8Array:null,F="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,256,257]),t=n,r=(A&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var N,m=h,I="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,_="function"==typeof Uint16Array?Uint16Array:void 0;N=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,65536,65537]),t=n,r=(I&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var T,S={uint16:N,uint8:m};(T=new S.uint16(1))[0]=4660;var j=52===new S.uint8(T.buffer)[0],U=!0===j?1:0,V=new g(1),O=new y(V.buffer);function x(r){return V[0]=r,O[U]}var k,G="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,W="function"==typeof Float64Array?Float64Array:void 0;k=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(G&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var Y=!0===j?0:1,L=new k(1),P=new y(L.buffer);function $(r,n){return L[0]=r,P[Y]=n>>>0,L[0]}function M(r,n,t){var e,o,i,a,u,f,c,l,s;return(o=2147483647&(e=x(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(s=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(s=r*r)*s),c=s*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=n+s*((u=s*r)*(a+c)+n),l=r+(a+=.3333333333333341*u),o>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-a))):1===t?l:(c=a-((s=$(l,0))-r),(f=$(i=-1/l,0))+i*((u=1+f*s)+f*c))}var C,R=2146435072,Z=1048575,X="function"==typeof Float64Array,q="function"==typeof Float64Array?Float64Array:null,z="function"==typeof Float64Array?Float64Array:void 0;C=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q([1,3.14,-3.14,NaN]),t=n,r=(X&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D,J,K=!0===j?0:1,Q=new C(1),rr=new y(Q.buffer),nr="function"==typeof Float64Array,tr="function"==typeof Float64Array?Float64Array:null,er="function"==typeof Float64Array?Float64Array:void 0;B=function(){var r,n,t;if("function"!=typeof tr)return!1;try{n=new tr([1,3.14,-3.14,NaN]),t=n,r=(nr&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")},!0===j?(D=1,J=0):(D=0,J=1);var or={HIGH:D,LOW:J},ir=new B(1),ar=new y(ir.buffer),ur=or.HIGH,fr=or.LOW;function cr(r,n){return ar[ur]=r,ar[fr]=n,ir[0]}var lr=Number.POSITIVE_INFINITY,sr=Number,pr=sr.NEGATIVE_INFINITY,yr=1023,vr=Number.POSITIVE_INFINITY,dr=sr.NEGATIVE_INFINITY;function wr(r){return r===vr||r===dr}var hr="function"==typeof Object.defineProperty?Object.defineProperty:null,gr=Object.defineProperty;function Ar(r){return"number"==typeof r}function br(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function Fr(r,n,t){var e=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+br(o):br(o)+r,e&&(r="-"+r)),r}var Nr=String.prototype.toLowerCase,mr=String.prototype.toUpperCase;function Ir(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!Ar(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=Fr(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=Fr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===mr.call(r.specifier)?mr.call(t):Nr.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Er(r){return"string"==typeof r}var _r=Math.abs,Tr=String.prototype.toLowerCase,Sr=String.prototype.toUpperCase,jr=String.prototype.replace,Ur=/e\+(\d)$/,Vr=/e-(\d)$/,Or=/^(\d+)$/,xr=/^(\d+)e/,kr=/\.0$/,Gr=/\.0*e/,Hr=/(\..*[^0])0*e/;function Wr(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!Ar(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":_r(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=jr.call(t,Hr,"$1e"),t=jr.call(t,Gr,"e"),t=jr.call(t,kr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=jr.call(t,Ur,"e+0$1"),t=jr.call(t,Vr,"e-0$1"),r.alternate&&(t=jr.call(t,Or,"$1."),t=jr.call(t,xr,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Sr.call(r.specifier)?Sr.call(t):Tr.call(t)}function Yr(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Lr(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Yr(e):Yr(e)+r}var Pr=String.fromCharCode,$r=isNaN,Mr=Array.isArray;function Cr(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Rr(r){var n,t,e,o,i,a,u,f,c;if(!Mr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(Er(e=r[f]))a+=e;else{if(n=void 0!==e.precision,!(e=Cr(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(o=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,$r(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,$r(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=Ir(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!$r(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=$r(i)?String(e.arg):Pr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Wr(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Fr(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Lr(e.arg,e.width,e.padRight)),a+=e.arg||"",u+=1}return a}var Zr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Xr(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function qr(r){var n,t,e,o;for(t=[],o=0,e=Zr.exec(r);e;)(n=r.slice(o,Zr.lastIndex-e[0].length)).length&&t.push(n),t.push(Xr(e)),o=Zr.lastIndex,e=Zr.exec(r);return(n=r.slice(o)).length&&t.push(n),t}function zr(r){return"string"==typeof r}function Br(r){var n,t;if(!zr(r))throw new TypeError(Br("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[qr(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return Rr.apply(null,n)}var Dr=Object.prototype,Jr=Dr.toString,Kr=Dr.__defineGetter__,Qr=Dr.__defineSetter__,rn=Dr.__lookupGetter__,nn=Dr.__lookupSetter__,tn=function(){try{return hr({},"x",{}),!0}catch(r){return!1}}()?gr:function(r,n,t){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Jr.call(r))throw new TypeError(Br("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Jr.call(t))throw new TypeError(Br("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(rn.call(r,n)||nn.call(r,n)?(e=r.__proto__,r.__proto__=Dr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Kr&&Kr.call(r,n,t.get),a&&Qr&&Qr.call(r,n,t.set),r};function en(r,n,t){tn(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var on,an,un,fn="function"==typeof Float64Array,cn="function"==typeof Float64Array?Float64Array:null,ln="function"==typeof Float64Array?Float64Array:void 0;on=function(){var r,n,t;if("function"!=typeof cn)return!1;try{n=new cn([1,3.14,-3.14,NaN]),t=n,r=(fn&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?ln:function(){throw new Error("not implemented")},!0===j?(an=1,un=0):(an=0,un=1);var sn={HIGH:an,LOW:un},pn=new on(1),yn=new y(pn.buffer),vn=sn.HIGH,dn=sn.LOW;function wn(r,n,t,e){return pn[0]=r,n[e]=yn[vn],n[e+t]=yn[dn],n}function hn(r){return wn(r,[0,0],1,0)}en(hn,"assign",wn);var gn=[0,0];function An(r,n){var t,e;return hn.assign(r,gn,1,0),t=gn[0],t&=2147483647,e=x(n),cr(t|=e&=2147483648,gn[1])}function bn(r,t,e,o){return n(r)||wr(r)?(t[o]=r,t[o+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[o]=4503599627370496*r,t[o+e]=-52,t):(t[o]=r,t[o+e]=0,t)}en((function(r){return bn(r,[0,0],1,0)}),"assign",bn);var Fn,Nn,mn,In="function"==typeof Float64Array,En="function"==typeof Float64Array?Float64Array:null,_n="function"==typeof Float64Array?Float64Array:void 0;Fn=function(){var r,n,t;if("function"!=typeof En)return!1;try{n=new En([1,3.14,-3.14,NaN]),t=n,r=(In&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?_n:function(){throw new Error("not implemented")},!0===j?(Nn=1,mn=0):(Nn=0,mn=1);var Tn={HIGH:Nn,LOW:mn},Sn=new Fn(1),jn=new y(Sn.buffer),Un=Tn.HIGH,Vn=Tn.LOW;function On(r,n,t,e){return Sn[0]=r,n[e]=jn[Un],n[e+t]=jn[Vn],n}function xn(r){return On(r,[0,0],1,0)}en(xn,"assign",On);var kn=[0,0],Gn=[0,0];function Hn(r,t){var e,o;return 0===t||0===r||n(r)||wr(r)?r:(bn(r,kn,1,0),t+=kn[1],t+=function(r){var n=x(r);return(n=(n&R)>>>20)-yr|0}(r=kn[0]),t<-1074?An(0,r):t>1023?r<0?pr:lr:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,xn.assign(r,Gn,1,0),e=Gn[0],e&=2148532223,o*cr(e|=t+yr<<20,Gn[1])))}function Wn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Yn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ln=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Pn=16777216,$n=5.960464477539063e-8,Mn=Wn(20),Cn=Wn(20),Rn=Wn(20),Zn=Wn(20);function Xn(n,t,e,o,i,a,u,f,c){var l,s,p,y,v,d,w,h,g;for(y=a,g=o[e],h=e,v=0;h>0;v++)s=$n*g|0,Zn[v]=g-Pn*s|0,g=o[h-1]+s,h-=1;if(g=Hn(g,i),g-=8*r(.125*g),g-=w=0|g,p=0,i>0?(w+=v=Zn[e-1]>>24-i,Zn[e-1]-=v<<24-i,p=Zn[e-1]>>23-i):0===i?p=Zn[e-1]>>23:g>=.5&&(p=2),p>0){for(w+=1,l=0,v=0;v<e;v++)h=Zn[v],0===l?0!==h&&(l=1,Zn[v]=16777216-h):Zn[v]=16777215-h;if(i>0)switch(i){case 1:Zn[e-1]&=8388607;break;case 2:Zn[e-1]&=4194303}2===p&&(g=1-g,0!==l&&(g-=Hn(1,i)))}if(0===g){for(h=0,v=e-1;v>=a;v--)h|=Zn[v];if(0===h){for(d=1;0===Zn[a-d];d++);for(v=e+1;v<=e+d;v++){for(c[f+v]=Yn[u+v],s=0,h=0;h<=f;h++)s+=n[h]*c[f+(v-h)];o[v]=s}return Xn(n,t,e+=d,o,i,a,u,f,c)}}if(0===g)for(e-=1,i-=24;0===Zn[e];)e-=1,i-=24;else(g=Hn(g,-i))>=Pn?(s=$n*g|0,Zn[e]=g-Pn*s|0,i+=24,Zn[e+=1]=s):Zn[e]=0|g;for(s=Hn(1,i),v=e;v>=0;v--)o[v]=s*Zn[v],s*=$n;for(v=e;v>=0;v--){for(s=0,d=0;d<=y&&d<=e-v;d++)s+=Ln[d]*o[v+d];Rn[e-v]=s}for(s=0,v=e;v>=0;v--)s+=Rn[v];for(t[0]=0===p?s:-s,s=Rn[0]-s,v=1;v<=e;v++)s+=Rn[v];return t[1]=0===p?s:-s,7&w}function qn(r,n,t,e){var o,i,a,u,f,c,l;for((i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),c=i-(a=e-1),l=a+4,f=0;f<=l;f++)Mn[f]=c<0?0:Yn[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*Mn[a+(f-c)];Cn[f]=o}return Xn(r,n,4,Cn,u,4,i,a,Mn)}var zn=Math.round;function Bn(r,n,t){var e,o,i,a,u;return i=r-1.5707963267341256*(e=zn(.6366197723675814*r)),a=6077100506506192e-26*e,u=n>>20|0,t[0]=i-a,u-(x(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),t[0]=i-a,u-(x(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),t[0]=i-a)),t[1]=i-t[0]-a,e}var Dn=1.5707963267341256,Jn=6077100506506192e-26,Kn=2*Jn,Qn=3*Jn,rt=4*Jn,nt=[0,0,0],tt=[0,0];function et(r,n){var t,e,o,i,a,u,f;if((o=2147483647&x(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(o&Z)?Bn(r,o,n):o<=1073928572?r>0?(f=r-Dn,n[0]=f-Jn,n[1]=f-n[0]-Jn,1):(f=r+Dn,n[0]=f+Jn,n[1]=f-n[0]+Jn,-1):r>0?(f=r-2*Dn,n[0]=f-Kn,n[1]=f-n[0]-Kn,2):(f=r+2*Dn,n[0]=f+Kn,n[1]=f-n[0]+Kn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Bn(r,o,n):r>0?(f=r-3*Dn,n[0]=f-Qn,n[1]=f-n[0]-Qn,3):(f=r+3*Dn,n[0]=f+Qn,n[1]=f-n[0]+Qn,-3):1075388923===o?Bn(r,o,n):r>0?(f=r-4*Dn,n[0]=f-rt,n[1]=f-n[0]-rt,4):(f=r+4*Dn,n[0]=f+rt,n[1]=f-n[0]+rt,-4);if(o<1094263291)return Bn(r,o,n);if(o>=R)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Q[0]=r,rr[K]}(r),f=cr(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)nt[a]=0|f,f=16777216*(f-nt[a]);for(nt[2]=f,i=3;0===nt[i-1];)i-=1;return u=qn(nt,tt,e,i),r<0?(n[0]=-tt[0],n[1]=-tt[1],-u):(n[0]=tt[0],n[1]=tt[1],u)}var ot,it=[0,0],at=3.141592653589793,ut="function"==typeof Float64Array,ft="function"==typeof Float64Array?Float64Array:null,ct="function"==typeof Float64Array?Float64Array:void 0;ot=function(){var r,n,t;if("function"!=typeof ft)return!1;try{n=new ft([1,3.14,-3.14,NaN]),t=n,r=(ut&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?ct:function(){throw new Error("not implemented")};var lt=!0===j?1:0,st=new ot(1),pt=new y(st.buffer);function yt(r,n){return st[0]=r,pt[lt]=n>>>0,st[0]}var vt=sr.NEGATIVE_INFINITY,dt=.6931471803691238,wt=1.9082149292705877e-10,ht=1048575;function gt(r){var t,e,o,i,a,u,f,c,l,s,p,y;return 0===r?vt:n(r)||r<0?NaN:(a=0,(e=x(r))<1048576&&(a-=54,e=x(r*=0x40000000000000)),e>=2146435072?r+r:(a+=(e>>20)-yr|0,a+=(c=614244+(e&=ht)&1048576|0)>>20|0,f=(r=yt(r,e|1072693248^c))-1,(ht&2+e)<3?0===f?0===a?0:a*dt+a*wt:(u=f*f*(.5-.3333333333333333*f),0===a?f-u:a*dt-(u-a*wt-f)):(c=e-398458|0,l=440401-e|0,i=(p=(y=(s=f/(2+f))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),o=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=o+i,(c|=l)>0?(t=.5*f*f,0===a?f-(t-s*(t+u)):a*dt-(t-(s*(t+u)+a*wt)-f)):0===a?f-s*(f-u):a*dt-(s*(f-u)-a*wt-f))))}function At(t){var e,o;if(n(t)||0===t)return NaN;if(t<=-1){if((e=(t=1-t)-r(t))>.5&&(e-=1),0===e)return NaN;o=at/function(r){var n,t;return n=x(r),(n&=2147483647)<=1072243195?n<1044381696?r:M(r,0,1):n>=2146435072?NaN:(t=et(r,it),M(it[0],it[1],1-((1&t)<<1)))}(at*e)}else o=0;if(t>=10)return o+=function(r){var n;return gt(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(t),o;for(;t>2;)o+=1/(t-=1);for(;t<1;)o-=1/t,t+=1;return o+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(t),o}function bt(n){return r(n)===n}var Ft=sr.NEGATIVE_INFINITY;function Nt(r){return Math.abs(r)}function mt(r,n){var t,e,o,i;return o=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*e-r*n))}var It=-.16666666666666632;function Et(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(It+o*t):r-(o*(.5*n-e*t)-n-e*It)}var _t=[0,0],Tt=Number.POSITIVE_INFINITY,St=sr.NEGATIVE_INFINITY;function jt(r){return bt(r/2)}function Ut(r){return jt(r>0?r-1:r+1)}var Vt=Math.sqrt;function Ot(r){return Math.abs(r)}var xt,kt,Gt,Ht="function"==typeof Float64Array,Wt="function"==typeof Float64Array?Float64Array:null,Yt="function"==typeof Float64Array?Float64Array:void 0;xt=function(){var r,n,t;if("function"!=typeof Wt)return!1;try{n=new Wt([1,3.14,-3.14,NaN]),t=n,r=(Ht&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Yt:function(){throw new Error("not implemented")},!0===j?(kt=1,Gt=0):(kt=0,Gt=1);var Lt={HIGH:kt,LOW:Gt},Pt=new xt(1),$t=new y(Pt.buffer),Mt=Lt.HIGH,Ct=Lt.LOW;function Rt(r,n,t,e){return Pt[0]=r,n[e]=$t[Mt],n[e+t]=$t[Ct],n}function Zt(r){return Rt(r,[0,0],1,0)}function Xt(r){return 0|r}en(Zt,"assign",Rt);var qt=sr.NEGATIVE_INFINITY,zt=Number.POSITIVE_INFINITY,Bt=2147483647,Dt=1048576,Jt=[1,1.5],Kt=[0,.5849624872207642],Qt=[0,1.350039202129749e-8],re=1048576,ne=1083179008,te=1e300,ee=1e-300,oe=[0,0],ie=[0,0];function ae(r,t){var e,o,i,a,u,f,c,l,s,p,y,v,d,w;if(n(r)||n(t))return NaN;if(Zt.assign(t,oe,1,0),u=oe[0],0===oe[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Vt(r);if(-.5===t)return 1/Vt(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(wr(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ot(r)<1==(n===zt)?0:zt}(r,t)}if(Zt.assign(r,oe,1,0),a=oe[0],0===oe[1]){if(0===a)return function(r,n){return n===qt?zt:n===zt?0:n>0?Ut(n)?r:0:Ut(n)?An(zt,r):zt}(r,t);if(1===r)return 1;if(-1===r&&Ut(t))return-1;if(wr(r))return r===qt?ae(-0,-t):t<0?0:zt}if(r<0&&!1===bt(t))return(r-r)/(r-r);if(i=Ot(r),e=a&Bt|0,o=u&Bt|0,c=u>>>31|0,f=(f=a>>>31|0)&&Ut(t)?-1:1,o>1105199104){if(o>1139802112)return function(r,n){return(x(r)&Bt)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,t);if(e<1072693247)return 1===c?f*te*te:f*ee*ee;if(e>1072693248)return 0===c?f*te*te:f*ee*ee;y=function(r,n){var t,e,o,i,a,u;return t=(a=1.9259629911266175e-8*(o=n-1)-o*o*(0===(u=o)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=$(e=(i=1.4426950216293335*o)+a,0))-i),r[0]=e,r[1]=t,r}(ie,i)}else y=function(r,n,t){var e,o,i,a,u,f,c,l,s,p,y,v,d,w,h,g,A,b,F,N,m;return b=0,t<Dt&&(b-=53,t=x(n*=9007199254740992)),b+=(t>>20)-yr|0,t=1072693248|(F=1048575&t|0),F<=235662?N=0:F<767610?N=1:(N=0,b+=1,t-=Dt),a=$(o=(g=(n=yt(n,t))-(c=Jt[N]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),f=yt(0,e+=N<<18),h=(i=o*o)*i*(0===(m=i)?.5999999999999946:.5999999999999946+m*(.4285714285785502+m*(.33333332981837743+m*(.272728123808534+m*(.23066074577556175+.20697501780033842*m))))),f=$(f=3+(i=a*a)+(h+=(u=A*(g-a*f-a*(n-(f-c))))*(a+o)),0),d=(y=-7.028461650952758e-9*(s=$(s=(g=a*f)+(A=u*f+(h-(f-3-i))*o),0))+.9617966939259756*(A-(s-g))+Qt[N])-((v=$(v=(p=.9617967009544373*s)+y+(l=Kt[N])+(w=b),0))-w-l-p),r[0]=v,r[1]=d,r}(ie,i,e);if(v=(p=(t-(l=$(t,0)))*y[0]+t*y[1])+(s=l*y[0]),Zt.assign(v,oe,1,0),d=Xt(oe[0]),w=Xt(oe[1]),d>=ne){if(0!=(d-ne|w))return f*te*te;if(p+8008566259537294e-32>v-s)return f*te*te}else if((d&Bt)>=1083231232){if(0!=(d-3230714880|w))return f*ee*ee;if(p<=v-s)return f*ee*ee}return v=function(r,n,t){var e,o,i,a,u,f,c,l,s,p;return s=((l=r&Bt|0)>>20)-yr|0,c=0,l>1071644672&&(o=yt(0,((c=r+(re>>s+1)>>>0)&~(Z>>(s=((c&Bt)>>20)-yr|0)))>>>0),c=(c&Z|re)>>20-s>>>0,r<0&&(c=-c),n-=o),r=Xt(r=x(f=1-((f=(i=.6931471824645996*(o=$(o=t+n,0)))+(a=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=f-(o=f*f)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-i))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Hn(f,c):yt(f,r)}(d,s,p),f*v}var ue=Math.ceil;function fe(n){return n<0?ue(n):r(n)}var ce=sr.NEGATIVE_INFINITY,le=Number.POSITIVE_INFINITY,se=1.4426950408889634,pe=1/(1<<28);function ye(r){var t;return n(r)||r===le?r:r===ce?0:r>709.782712893384?le:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<pe?1+r:function(r,n,t){var e,o,i,a;return Hn(1-(n-(e=r-n)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(t=fe(r<0?se*r-.5:se*r+.5)),1.9082149292705877e-10*t,t)}function ve(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=ye(r),2.5066282746310007*(t=r>143.01608?(e=ae(r,.5*r-.25))*(e/t):ae(r,r-.5)/t)*n}function de(r,n){return n/((1+.5772156649015329*r)*r)}function we(t){var e,o,i,a;if(bt(t)&&t<0||t===St||n(t))return NaN;if(0===t)return function(r){return 0===r&&1/r===Ft}(t)?St:Tt;if(t>171.61447887182297)return Tt;if(t<-170.5674972726612)return 0;if((o=Nt(t))>33)return t>=0?ve(t):(e=0==(1&(i=r(o)))?-1:1,(a=o-i)>.5&&(a=o-(i+=1)),a=o*function(r){var n;if(n=x(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Et(r,0);if(n>=R)return NaN;switch(3&et(r,_t)){case 0:return Et(_t[0],_t[1]);case 1:return mt(_t[0],_t[1]);case 2:return-Et(_t[0],_t[1]);default:return-mt(_t[0],_t[1])}}(at*a),e*at/(Nt(a)*ve(o)));for(a=1;t>=3;)a*=t-=1;for(;t<0;){if(t>-1e-9)return de(t,a);a/=t,t+=1}for(;t<2;){if(t<1e-9)return de(t,a);a/=t,t+=1}return 2===t?a:a*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(t-=2)}return function(t,e){return!(r(o=t)===o&&o>0)||n(e)||e<=0?NaN:(1-t)*At(t)+gt(we(t)/e)+t;var o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).entropy=n();
//# sourceMappingURL=browser.js.map
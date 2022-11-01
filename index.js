// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r=Math.floor;function n(r){return r!=r}var t,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),u=Object.prototype.toString,o=Object.prototype.hasOwnProperty,f="function"==typeof Symbol?Symbol.toStringTag:"";t=e&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,i,a;if(null==r)return u.call(r);t=r[f],a=f,n=null!=(i=r)&&o.call(i,a);try{r[f]=void 0}catch(n){return u.call(r)}return e=u.call(r),n?r[f]=t:delete r[f],e}:function(r){return u.call(r)};var i,a=t,c="function"==typeof Uint32Array,l="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var r,n,t;if("function"!=typeof l)return!1;try{n=new l(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(c&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?y:function(){throw new Error("not implemented")};var v,p=i,b="function"==typeof Float64Array,s="function"==typeof Float64Array?Float64Array:null,w="function"==typeof Float64Array?Float64Array:void 0;v=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s([1,3.14,-3.14,NaN]),t=n,r=(b&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var d,A=v,_="function"==typeof Uint8Array,N="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,256,257]),t=n,r=(_&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var h,U=d,g="function"==typeof Uint16Array,j="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,65536,65537]),t=n,r=(g&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S={uint16:h,uint8:U};(O=new S.uint16(1))[0]=4660;var E=52===new S.uint8(O.buffer)[0],F=!0===E?1:0,T=new A(1),H=new p(T.buffer);function G(r){return T[0]=r,H[F]}var P=!0===E?0:1,M=new A(1),x=new p(M.buffer);function L(r,n){return M[0]=r,x[P]=n>>>0,M[0]}function V(r,n,t){var e,u,o,f,i,a,c,l,y;return(u=2147483647&(e=G(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),f=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),f=n+y*((i=y*r)*(f+c)+n),l=r+(f+=.3333333333333341*i),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-f))):1===t?l:(L(y=l,0),c=f-(y-r),L(a=o=-1/l,0),a+o*((i=1+a*y)+a*c))}var W,k,Y=!0===E?0:1,q=new A(1),C=new p(q.buffer);!0===E?(W=1,k=0):(W=0,k=1);var z={HIGH:W,LOW:k},B=new A(1),D=new p(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,n){return D[J]=r,D[K]=n,B[0]}var R,X,Z=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY,rr=1023;function nr(r){return r===Z||r===$}!0===E?(R=1,X=0):(R=0,X=1);var tr={HIGH:R,LOW:X},er=new A(1),ur=new p(er.buffer),or=tr.HIGH,fr=tr.LOW;function ir(r,n){return er[0]=n,r[0]=ur[or],r[1]=ur[fr],r}function ar(r,n){return 1===arguments.length?ir([0,0],r):ir(r,n)}var cr=[0,0];function lr(r,n){var t,e;return ar(cr,r),t=cr[0],t&=2147483647,e=G(n),Q(t|=e&=2147483648,cr[1])}var yr,vr="function"==typeof Object.defineProperty?Object.defineProperty:null,pr=Object.defineProperty,br=Object.prototype,sr=br.toString,wr=br.__defineGetter__,dr=br.__defineSetter__,Ar=br.__lookupGetter__,_r=br.__lookupSetter__;function Nr(r){return Math.abs(r)}function mr(r,t,e,u){return n(r)||nr(r)?(t[u]=r,t[u+e]=0,t):0!==r&&Nr(r)<22250738585072014e-324?(t[u]=4503599627370496*r,t[u+e]=-52,t):(t[u]=r,t[u+e]=0,t)}yr=function(){try{return vr({},"x",{}),!0}catch(r){return!1}}()?pr:function(r,n,t){var e,u,o,f;if("object"!=typeof r||null===r||"[object Array]"===sr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===sr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(Ar.call(r,n)||_r.call(r,n)?(e=r.__proto__,r.__proto__=br,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,f="set"in t,u&&(o||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&wr&&wr.call(r,n,t.get),f&&dr&&dr.call(r,n,t.set),r},yr((function(r){return mr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:mr});var hr=[0,0],Ur=[0,0];function gr(r,t){var e,u;return 0===t||0===r||n(r)||nr(r)?r:(mr(r,hr,1,0),t+=hr[1],t+=function(r){var n=G(r);return(n=(2146435072&n)>>>20)-rr|0}(r=hr[0]),t<-1074?lr(0,r):t>1023?r<0?$:Z:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,ar(Ur,r),e=Ur[0],e&=2148532223,u*Q(e|=t+rr<<20,Ur[1])))}function jr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ir=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Or=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Sr=16777216,Er=5.960464477539063e-8,Fr=jr(20),Tr=jr(20),Hr=jr(20),Gr=jr(20);function Pr(n,t,e,u,o,f,i,a,c){var l,y,v,p,b,s,w,d,A;for(p=f,A=u[e],d=e,b=0;d>0;b++)y=Er*A|0,Gr[b]=A-Sr*y|0,A=u[d-1]+y,d-=1;if(A=gr(A,o),A-=8*r(.125*A),A-=w=0|A,v=0,o>0?(w+=b=Gr[e-1]>>24-o,Gr[e-1]-=b<<24-o,v=Gr[e-1]>>23-o):0===o?v=Gr[e-1]>>23:A>=.5&&(v=2),v>0){for(w+=1,l=0,b=0;b<e;b++)d=Gr[b],0===l?0!==d&&(l=1,Gr[b]=16777216-d):Gr[b]=16777215-d;if(o>0)switch(o){case 1:Gr[e-1]&=8388607;break;case 2:Gr[e-1]&=4194303}2===v&&(A=1-A,0!==l&&(A-=gr(1,o)))}if(0===A){for(d=0,b=e-1;b>=f;b--)d|=Gr[b];if(0===d){for(s=1;0===Gr[f-s];s++);for(b=e+1;b<=e+s;b++){for(c[a+b]=Ir[i+b],y=0,d=0;d<=a;d++)y+=n[d]*c[a+(b-d)];u[b]=y}return Pr(n,t,e+=s,u,o,f,i,a,c)}}if(0===A)for(e-=1,o-=24;0===Gr[e];)e-=1,o-=24;else(A=gr(A,-o))>=Sr?(y=Er*A|0,Gr[e]=A-Sr*y|0,o+=24,Gr[e+=1]=y):Gr[e]=0|A;for(y=gr(1,o),b=e;b>=0;b--)u[b]=y*Gr[b],y*=Er;for(b=e;b>=0;b--){for(y=0,s=0;s<=p&&s<=e-b;s++)y+=Or[s]*u[b+s];Hr[e-b]=y}for(y=0,b=e;b>=0;b--)y+=Hr[b];for(t[0]=0===v?y:-y,y=Hr[0]-y,b=1;b<=e;b++)y+=Hr[b];return t[1]=0===v?y:-y,7&w}function Mr(r,n,t,e){var u,o,f,i,a,c,l;for((o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),l=f+4,a=0;a<=l;a++)Fr[a]=c<0?0:Ir[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Fr[f+(a-c)];Tr[a]=u}return Pr(r,n,4,Tr,i,4,o,f,Fr)}var xr=Math.round;function Lr(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=xr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(G(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(G(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e}var Vr=1.5707963267341256,Wr=6077100506506192e-26,kr=2*Wr,Yr=3*Wr,qr=4*Wr,Cr=[0,0,0],zr=[0,0];function Br(r,n){var t,e,u,o,f,i,a;if((u=2147483647&G(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Lr(r,u,n):u<=1073928572?r>0?(a=r-Vr,n[0]=a-Wr,n[1]=a-n[0]-Wr,1):(a=r+Vr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-1):r>0?(a=r-2*Vr,n[0]=a-kr,n[1]=a-n[0]-kr,2):(a=r+2*Vr,n[0]=a+kr,n[1]=a-n[0]+kr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Lr(r,u,n):r>0?(a=r-3*Vr,n[0]=a-Yr,n[1]=a-n[0]-Yr,3):(a=r+3*Vr,n[0]=a+Yr,n[1]=a-n[0]+Yr,-3):1075388923===u?Lr(r,u,n):r>0?(a=r-4*Vr,n[0]=a-qr,n[1]=a-n[0]-qr,4):(a=r+4*Vr,n[0]=a+qr,n[1]=a-n[0]+qr,-4);if(u<1094263291)return Lr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return q[0]=r,C[Y]}(r),a=Q(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)Cr[f]=0|a,a=16777216*(a-Cr[f]);for(Cr[2]=a,o=3;0===Cr[o-1];)o-=1;return i=Mr(Cr,zr,e,o),r<0?(n[0]=-zr[0],n[1]=-zr[1],-i):(n[0]=zr[0],n[1]=zr[1],i)}var Dr=[0,0],Jr=3.141592653589793,Kr=!0===E?1:0,Qr=new A(1),Rr=new p(Qr.buffer);function Xr(r,n){return Qr[0]=r,Rr[Kr]=n>>>0,Qr[0]}var Zr=.6931471803691238,$r=1.9082149292705877e-10,rn=1048575;function nn(r){var t,e,u,o,f,i,a,c,l,y,v,p;return 0===r?$:n(r)||r<0?NaN:(f=0,(e=G(r))<1048576&&(f-=54,e=G(r*=0x40000000000000)),e>=2146435072?r+r:(f+=(e>>20)-rr|0,f+=(c=614244+(e&=rn)&1048576|0)>>20|0,a=(r=Xr(r,e|1072693248^c))-1,(rn&2+e)<3?0===a?0===f?0:f*Zr+f*$r:(i=a*a*(.5-.3333333333333333*a),0===f?a-i:f*Zr-(i-f*$r-a)):(c=e-398458|0,l=440401-e|0,o=(v=(p=(y=a/(2+a))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),u=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=u+o,(c|=l)>0?(t=.5*a*a,0===f?a-(t-y*(t+i)):f*Zr-(t-(y*(t+i)+f*$r)-a)):0===f?a-y*(a-i):f*Zr-(y*(a-i)-f*$r-a))))}function tn(t){var e,u;if(n(t)||0===t)return NaN;if(t<=-1){if((e=(t=1-t)-r(t))>.5&&(e-=1),0===e)return NaN;u=Jr/function(r){var n,t;return n=G(r),(n&=2147483647)<=1072243195?n<1044381696?r:V(r,0,1):n>=2146435072?NaN:(t=Br(r,Dr),V(Dr[0],Dr[1],1-((1&t)<<1)))}(Jr*e)}else u=0;if(t>=10)return u+=function(r){var n;return nn(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(t),u;for(;t>2;)u+=1/(t-=1);for(;t<1;)u-=1/t,t+=1;return u+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(t),u}function en(n){return r(n)===n}function un(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var on=-.16666666666666632;function fn(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(on+u*t):r-(u*(.5*n-e*t)-n-e*on)}var an=[0,0];function cn(r){return en(r/2)}function ln(r){return cn(r>0?r-1:r+1)}var yn=Math.sqrt;function vn(r){return 0|r}var pn=1048576,bn=[1,1.5],sn=[0,.5849624872207642],wn=[0,1.350039202129749e-8],dn=2147483647,An=1048575,_n=1048576,Nn=2147483647,mn=1083179008,hn=1e300,Un=1e-300,gn=[0,0],jn=[0,0];function In(r,t){var e,u,o,f,i,a,c,l,y,v,p,b,s,w;if(n(r)||n(t))return NaN;if(ar(gn,t),i=gn[0],0===gn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return yn(r);if(-.5===t)return 1/yn(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(nr(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Nr(r)<1==(n===Z)?0:Z}(r,t)}if(ar(gn,r),f=gn[0],0===gn[1]){if(0===f)return function(r,n){return n===$?Z:n===Z?0:n>0?ln(n)?r:0:ln(n)?lr(Z,r):Z}(r,t);if(1===r)return 1;if(-1===r&&ln(t))return-1;if(nr(r))return r===$?In(-0,-t):t<0?0:Z}if(r<0&&!1===en(t))return(r-r)/(r-r);if(o=Nr(r),e=f&Nn|0,u=i&Nn|0,c=i>>>31|0,a=(a=f>>>31|0)&&ln(t)?-1:1,u>1105199104){if(u>1139802112)return function(r,n){return(2147483647&G(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,t);if(e<1072693247)return 1===c?a*hn*hn:a*Un*Un;if(e>1072693248)return 0===c?a*hn*hn:a*Un*Un;p=function(r,n){var t,e,u,o,f,i;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(i=u)?.5:.5+i*(.25*i-.3333333333333333))*1.4426950408889634)-((e=L(e=(o=1.4426950216293335*u)+f,0))-o),r[0]=e,r[1]=t,r}(jn,o)}else p=function(r,n,t){var e,u,o,f,i,a,c,l,y,v,p,b,s,w,d,A,_,N,m,h,U;return N=0,t<pn&&(N-=53,t=G(n*=9007199254740992)),N+=(t>>20)-rr|0,t=1072693248|(m=1048575&t|0),m<=235662?h=0:m<767610?h=1:(h=0,N+=1,t-=pn),f=L(u=(A=(n=Xr(n,t))-(c=bn[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=Xr(0,e+=h<<18),d=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=L(a=3+(o=f*f)+(d+=(i=_*(A-f*a-f*(n-(a-c))))*(f+u)),0),s=(p=-7.028461650952758e-9*(y=L(y=(A=f*a)+(_=i*a+(d-(a-3-o))*u),0))+.9617966939259756*(_-(y-A))+wn[h])-((b=L(b=(v=.9617967009544373*y)+p+(l=sn[h])+(w=N),0))-w-l-v),r[0]=b,r[1]=s,r}(jn,o,e);if(v=(t-(l=L(t,0)))*p[0]+t*p[1],y=l*p[0],ar(gn,b=v+y),s=vn(gn[0]),w=vn(gn[1]),s>=mn){if(0!=(s-mn|w))return a*hn*hn;if(v+8008566259537294e-32>b-y)return a*hn*hn}else if((s&Nn)>=1083231232){if(0!=(s-3230714880|w))return a*Un*Un;if(v<=b-y)return a*Un*Un}return b=function(r,n,t){var e,u,o,f,i,a,c,l,y,v;return y=((l=r&dn|0)>>20)-rr|0,c=0,l>1071644672&&(u=Xr(0,((c=r+(_n>>y+1)>>>0)&~(An>>(y=((c&dn)>>20)-rr|0)))>>>0),c=(c&An|_n)>>20-y>>>0,r<0&&(c=-c),n-=u),r=vn(r=G(a=1-((a=(o=.6931471824645996*(u=L(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((i=f-(a-o))+a*i)-a))),(r+=c<<20>>>0)>>20<=0?gr(a,c):Xr(a,r)}(s,y,v),a*b}var On=Math.ceil;function Sn(n){return n<0?On(n):r(n)}var En=1.4426950408889634,Fn=1/(1<<28);function Tn(r){var t;return n(r)||r===Z?r:r===$?0:r>709.782712893384?Z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Fn?1+r:function(r,n,t){var e,u,o,f;return gr(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(t=Sn(r<0?En*r-.5:En*r+.5)),1.9082149292705877e-10*t,t)}function Hn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Tn(r),2.5066282746310007*(t=r>143.01608?(e=In(r,.5*r-.25))*(e/t):In(r,r-.5)/t)*n}function Gn(r,n){return n/((1+.5772156649015329*r)*r)}function Pn(t){var e,u,o,f;if(en(t)&&t<0||t===$||n(t))return NaN;if(0===t)return function(r){return 0===r&&1/r===$}(t)?$:Z;if(t>171.61447887182297)return Z;if(t<-170.5674972726612)return 0;if((u=Nr(t))>33)return t>=0?Hn(t):(e=0==(1&(o=r(u)))?-1:1,(f=u-o)>.5&&(f=u-(o+=1)),f=u*function(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1045430272?r:fn(r,0);if(n>=2146435072)return NaN;switch(3&Br(r,an)){case 0:return fn(an[0],an[1]);case 1:return un(an[0],an[1]);case 2:return-fn(an[0],an[1]);default:return-un(an[0],an[1])}}(Jr*f),e*Jr/(Nr(f)*Hn(u)));for(f=1;t>=3;)f*=t-=1;for(;t<0;){if(t>-1e-9)return Gn(t,f);f/=t,t+=1}for(;t<2;){if(t<1e-9)return Gn(t,f);f/=t,t+=1}return 2===t?f:f*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(t-=2)}return function(t,e){return!(r(u=t)===u&&u>0)||n(e)||e<=0?NaN:(1-t)*tn(t)+nn(Pn(t)/e)+t;var u}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).entropy=n();
//# sourceMappingURL=index.js.map

// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function n(r){return r!=r}var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;var f="function"==typeof Symbol?Symbol.toStringTag:"";var i=t&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,i,o,a;if(null==r)return e.call(r);t=r[f],a=f,n=null!=(o=r)&&u.call(o,a);try{r[f]=void 0}catch(n){return e.call(r)}return i=e.call(r),n?r[f]=t:delete r[f],i}:function(r){return e.call(r)},o="function"==typeof Uint32Array;var a="function"==typeof Uint32Array?Uint32Array:null;var c,v="function"==typeof Uint32Array?Uint32Array:void 0;c=function(){var r,n,t;if("function"!=typeof a)return!1;try{n=new a(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(o&&t instanceof Uint32Array||"[object Uint32Array]"===i(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?v:function(){throw new Error("not implemented")};var y=c,l="function"==typeof Float64Array;var p="function"==typeof Float64Array?Float64Array:null;var w,A="function"==typeof Float64Array?Float64Array:void 0;w=function(){var r,n,t;if("function"!=typeof p)return!1;try{n=new p([1,3.14,-3.14,NaN]),t=n,r=(l&&t instanceof Float64Array||"[object Float64Array]"===i(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var N=w,b="function"==typeof Uint8Array;var s="function"==typeof Uint8Array?Uint8Array:null;var U,h="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,256,257]),t=n,r=(b&&t instanceof Uint8Array||"[object Uint8Array]"===i(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var m=U,d="function"==typeof Uint16Array;var I="function"==typeof Uint16Array?Uint16Array:null;var F,S="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,65536,65537]),t=n,r=(d&&t instanceof Uint16Array||"[object Uint16Array]"===i(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var H,O={uint16:F,uint8:m};(H=new O.uint16(1))[0]=4660;var g=52===new O.uint8(H.buffer)[0],E=!0===g?1:0,j=new N(1),T=new y(j.buffer);function G(r){return j[0]=r,T[E]}var M=!0===g?0:1,L=new N(1),W=new y(L.buffer);function x(r,n){return L[0]=r,W[M]=n>>>0,L[0]}function P(r,n,t){var e,u,f,i,o,a,c,v,y;return(u=2147483647&(e=G(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(v=3061616997868383e-32-n),n=0),i=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(v=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(v),i=n+y*((o=y*r)*(i+c)+n),v=r+(i+=.3333333333333341*o),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(v*v/(v+c)-i))):1===t?v:(x(y=v,0),c=i-(y-r),x(a=f=-1/v,0),a+f*((o=1+a*y)+a*c))}var V,Y,_=!0===g?0:1,k=new N(1),q=new y(k.buffer);!0===g?(V=1,Y=0):(V=0,Y=1);var z={HIGH:V,LOW:Y},B=new N(1),C=new y(B.buffer),D=z.HIGH,J=z.LOW;function K(r,n){return C[D]=r,C[J]=n,B[0]}var Q,R,X=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY;function $(r){return r===X||r===Z}!0===g?(Q=1,R=0):(Q=0,R=1);var rr={HIGH:Q,LOW:R},nr=new N(1),tr=new y(nr.buffer),er=rr.HIGH,ur=rr.LOW;function fr(r,n){return nr[0]=n,r[0]=tr[er],r[1]=tr[ur],r}function ir(r,n){return 1===arguments.length?fr([0,0],r):fr(r,n)}var or=[0,0];function ar(r,n){var t,e;return ir(or,r),t=or[0],t&=2147483647,e=G(n),K(t|=e&=2147483648,or[1])}function cr(r){return Math.abs(r)}function vr(r,t){return n(t)||$(t)?(r[0]=t,r[1]=0,r):0!==t&&cr(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var yr=[0,0],lr=[0,0];function pr(r,t){var e,u;return 0===t||0===r||n(r)||$(r)?r:(function(r,n){1===arguments.length?vr([0,0],r):vr(r,n)}(yr,r),t+=yr[1],t+=function(r){var n=G(r);return(n=(2146435072&n)>>>20)-1023|0}(r=yr[0]),t<-1074?ar(0,r):t>1023?r<0?Z:X:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,ir(lr,r),e=lr[0],e&=2148532223,u*K(e|=t+1023<<20,lr[1])))}function wr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ar=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Nr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],br=5.960464477539063e-8,sr=wr(20),Ur=wr(20),hr=wr(20),mr=wr(20);function dr(n,t,e,u,f,i,o,a,c){var v,y,l,p,w,A,N,b,s;for(p=i,s=u[e],b=e,w=0;b>0;w++)y=br*s|0,mr[w]=s-16777216*y|0,s=u[b-1]+y,b-=1;if(s=pr(s,f),s-=8*r(.125*s),s-=N=0|s,l=0,f>0?(N+=w=mr[e-1]>>24-f,mr[e-1]-=w<<24-f,l=mr[e-1]>>23-f):0===f?l=mr[e-1]>>23:s>=.5&&(l=2),l>0){for(N+=1,v=0,w=0;w<e;w++)b=mr[w],0===v?0!==b&&(v=1,mr[w]=16777216-b):mr[w]=16777215-b;if(f>0)switch(f){case 1:mr[e-1]&=8388607;break;case 2:mr[e-1]&=4194303}2===l&&(s=1-s,0!==v&&(s-=pr(1,f)))}if(0===s){for(b=0,w=e-1;w>=i;w--)b|=mr[w];if(0===b){for(A=1;0===mr[i-A];A++);for(w=e+1;w<=e+A;w++){for(c[a+w]=Ar[o+w],y=0,b=0;b<=a;b++)y+=n[b]*c[a+(w-b)];u[w]=y}return dr(n,t,e+=A,u,f,i,o,a,c)}}if(0===s)for(e-=1,f-=24;0===mr[e];)e-=1,f-=24;else(s=pr(s,-f))>=16777216?(y=br*s|0,mr[e]=s-16777216*y|0,f+=24,mr[e+=1]=y):mr[e]=0|s;for(y=pr(1,f),w=e;w>=0;w--)u[w]=y*mr[w],y*=br;for(w=e;w>=0;w--){for(y=0,A=0;A<=p&&A<=e-w;A++)y+=Nr[A]*u[w+A];hr[e-w]=y}for(y=0,w=e;w>=0;w--)y+=hr[w];for(t[0]=0===l?y:-y,y=hr[0]-y,w=1;w<=e;w++)y+=hr[w];return t[1]=0===l?y:-y,7&N}function Ir(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)sr[a]=c<0?0:Ar[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*sr[i+(a-c)];Ur[a]=u}return 4,dr(r,n,4,Ur,o,4,f,i,sr)}var Fr=Math.round;function Sr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Fr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(G(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(G(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Hr=1.5707963267341256,Or=6077100506506192e-26,gr=2*Or,Er=4*Or,jr=[0,0,0],Tr=[0,0];function Gr(r,n){var t,e,u,f,i,o,a;if((u=2147483647&G(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Sr(r,u,n):u<=1073928572?r>0?(a=r-Hr,n[0]=a-Or,n[1]=a-n[0]-Or,1):(a=r+Hr,n[0]=a+Or,n[1]=a-n[0]+Or,-1):r>0?(a=r-2*Hr,n[0]=a-gr,n[1]=a-n[0]-gr,2):(a=r+2*Hr,n[0]=a+gr,n[1]=a-n[0]+gr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Sr(r,u,n):r>0?(a=r-3*Hr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Hr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Sr(r,u,n):r>0?(a=r-4*Hr,n[0]=a-Er,n[1]=a-n[0]-Er,4):(a=r+4*Hr,n[0]=a+Er,n[1]=a-n[0]+Er,-4);if(u<1094263291)return Sr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return k[0]=r,q[_]}(r),a=K(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)jr[i]=0|a,a=16777216*(a-jr[i]);for(jr[2]=a,f=3;0===jr[f-1];)f-=1;return o=Ir(jr,Tr,e,f),r<0?(n[0]=-Tr[0],n[1]=-Tr[1],-o):(n[0]=Tr[0],n[1]=Tr[1],o)}var Mr=[0,0];var Lr=3.141592653589793,Wr=!0===g?1:0,xr=new N(1),Pr=new y(xr.buffer);function Vr(r,n){return xr[0]=r,Pr[Wr]=n>>>0,xr[0]}var Yr=.6931471803691238,_r=1.9082149292705877e-10;function kr(r){var t,e,u,f,i,o,a,c,v,y,l,p;return 0===r?Z:n(r)||r<0?NaN:(i=0,(e=G(r))<1048576&&(i-=54,e=G(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-1023|0,i+=(c=(e&=1048575)+614244&1048576|0)>>20|0,a=(r=Vr(r,e|1072693248^c))-1,(1048575&2+e)<3?0===a?0===i?0:i*Yr+i*_r:(o=a*a*(.5-.3333333333333333*a),0===i?a-o:i*Yr-(o-i*_r-a)):(c=e-398458|0,v=440401-e|0,f=(l=(p=(y=a/(2+a))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),u=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=u+f,(c|=v)>0?(t=.5*a*a,0===i?a-(t-y*(t+o)):i*Yr-(t-(y*(t+o)+i*_r)-a)):0===i?a-y*(a-o):i*Yr-(y*(a-o)-i*_r-a))))}function qr(t){var e,u;if(n(t)||0===t)return NaN;if(t<=-1){if((e=(t=1-t)-r(t))>.5&&(e-=1),0===e)return NaN;u=Lr/function(r){var n,t;return n=G(r),(n&=2147483647)<=1072243195?n<1044381696?r:P(r,0,1):n>=2146435072?NaN:(t=Gr(r,Mr),P(Mr[0],Mr[1],1-((1&t)<<1)))}(Lr*e)}else u=0;if(t>=10)return u+=function(r){var n;return kr(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(t),u;for(;t>2;)u+=1/(t-=1);for(;t<1;)u-=1/t,t+=1;return u+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(t),u}function zr(n){return r(n)===n}function Br(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var Cr=-.16666666666666632;function Dr(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Cr+u*t):r-(u*(.5*n-e*t)-n-e*Cr)}var Jr=[0,0];function Kr(r){return zr(r/2)}function Qr(r){return Kr(r>0?r-1:r+1)}var Rr=Math.sqrt;function Xr(r){return 0|r}var Zr=[1,1.5],$r=[0,.5849624872207642],rn=[0,1.350039202129749e-8];var nn=1e300,tn=1e-300,en=[0,0],un=[0,0];function fn(r,t){var e,u,f,i,o,a,c,v,y,l,p,w,A,N;if(n(r)||n(t))return NaN;if(ir(en,t),o=en[0],0===en[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Rr(r);if(-.5===t)return 1/Rr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if($(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:cr(r)<1==(n===X)?0:X}(r,t)}if(ir(en,r),i=en[0],0===en[1]){if(0===i)return function(r,n){return n===Z?X:n===X?0:n>0?Qr(n)?r:0:Qr(n)?ar(X,r):X}(r,t);if(1===r)return 1;if(-1===r&&Qr(t))return-1;if($(r))return r===Z?fn(-0,-t):t<0?0:X}if(r<0&&!1===zr(t))return(r-r)/(r-r);if(f=cr(r),e=2147483647&i|0,u=2147483647&o|0,c=o>>>31|0,a=(a=i>>>31|0)&&Qr(t)?-1:1,u>1105199104){if(u>1139802112)return function(r,n){return(2147483647&G(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,t);if(e<1072693247)return 1===c?a*nn*nn:a*tn*tn;if(e>1072693248)return 0===c?a*nn*nn:a*tn*tn;p=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=x(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(un,f)}else p=function(r,n,t){var e,u,f,i,o,a,c,v,y,l,p,w,A,N,b,s,U,h,m,d,I;return h=0,t<1048576&&(h-=53,t=G(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?d=0:m<767610?d=1:(d=0,h+=1,t-=1048576),i=x(u=(s=(n=Vr(n,t))-(c=Zr[d]))*(U=1/(n+c)),0),e=524288+(t>>1|536870912),a=Vr(0,e+=d<<18),b=(f=u*u)*f*(0===(I=f)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),a=x(a=3+(f=i*i)+(b+=(o=U*(s-i*a-i*(n-(a-c))))*(i+u)),0),A=(p=-7.028461650952758e-9*(y=x(y=(s=i*a)+(U=o*a+(b-(a-3-f))*u),0))+.9617966939259756*(U-(y-s))+rn[d])-((w=x(w=(l=.9617967009544373*y)+p+(v=$r[d])+(N=h),0))-N-v-l),r[0]=w,r[1]=A,r}(un,f,e);if(l=(t-(v=x(t,0)))*p[0]+t*p[1],y=v*p[0],ir(en,w=l+y),A=Xr(en[0]),N=Xr(en[1]),A>=1083179008){if(0!=(A-1083179008|N))return a*nn*nn;if(l+8008566259537294e-32>w-y)return a*nn*nn}else if((2147483647&A)>=1083231232){if(0!=(A-3230714880|N))return a*tn*tn;if(l<=w-y)return a*tn*tn}return w=function(r,n,t){var e,u,f,i,o,a,c,v,y,l,p;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=f=Vr(0,e)),r=Xr(r=G(c=1-((c=(i=.6931471824645996*(f=x(f=t+n,0)))+(o=.6931471805599453*(t-(f-n))+-1.904654299957768e-9*f))*(u=c-(f=c*c)*(0===(p=f)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-i))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?pr(c,v):Vr(c,r)}(A,y,l),a*w}var on=Math.ceil;function an(n){return n<0?on(n):r(n)}function cn(r){var t;return n(r)||r===X?r:r===Z?0:r>709.782712893384?X:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,f,i;return pr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(t=an(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function vn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=cn(r),2.5066282746310007*(t=r>143.01608?(e=fn(r,.5*r-.25))*(e/t):fn(r,r-.5)/t)*n}function yn(r,n){return n/((1+.5772156649015329*r)*r)}function ln(t){var e,u,f,i;if(zr(t)&&t<0||t===Z||n(t))return NaN;if(0===t)return function(r){return 0===r&&1/r===Z}(t)?Z:X;if(t>171.61447887182297)return X;if(t<-170.5674972726612)return 0;if((u=cr(t))>33)return t>=0?vn(t):(e=0==(1&(f=r(u)))?-1:1,(i=u-f)>.5&&(i=u-(f+=1)),i=u*function(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Dr(r,0);if(n>=2146435072)return NaN;switch(3&Gr(r,Jr)){case 0:return Dr(Jr[0],Jr[1]);case 1:return Br(Jr[0],Jr[1]);case 2:return-Dr(Jr[0],Jr[1]);default:return-Br(Jr[0],Jr[1])}}(Lr*i),e*Lr/(cr(i)*vn(u)));for(i=1;t>=3;)i*=t-=1;for(;t<0;){if(t>-1e-9)return yn(t,i);i/=t,t+=1}for(;t<2;){if(t<1e-9)return yn(t,i);i/=t,t+=1}return 2===t?i:i*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(t-=2)}function pn(t,e){return!(r(u=t)===u&&u>0)||n(e)||e<=0?NaN:(1-t)*qr(t)+kr(ln(t)/e)+t;var u}export{pn as default};
//# sourceMappingURL=mod.js.map

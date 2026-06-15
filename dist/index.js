"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var t=n(function(p,i){
var a=require('@stdlib/math-base-assert-is-positive-integer/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-digamma/dist'),q=require('@stdlib/math-base-special-gamma/dist'),o=require('@stdlib/math-base-special-ln/dist');function c(e,r){return!a(e)||s(r)||r<=0?NaN:(1-e)*v(e)+o(q(e)/r)+e}i.exports=c
});var g=t();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

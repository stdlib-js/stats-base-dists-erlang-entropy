"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(m,i){
var n=require('@stdlib/math-base-assert-is-positive-integer/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-digamma/dist'),v=require('@stdlib/math-base-special-gamma/dist'),q=require('@stdlib/math-base-special-ln/dist');function o(e,r){return!n(e)||a(r)||r<=0?NaN:(1-e)*s(e)+q(v(e)/r)+e}i.exports=o
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

(self.webpackChunkbqplot=self.webpackChunkbqplot||[]).push([[963],{7963:(n,t,r)=>{"use strict";r.r(t),r.d(t,{VERSION:()=>u,after:()=>Tt,all:()=>tr,allKeys:()=>gn,any:()=>rr,assign:()=>Tn,before:()=>qt,bind:()=>At,bindAll:()=>Ot,chain:()=>bt,chunk:()=>Vr,clone:()=>zn,collect:()=>Ht,compact:()=>Er,compose:()=>Rt,constant:()=>Y,contains:()=>er,countBy:()=>dr,create:()=>Vn,debounce:()=>It,default:()=>Kr,defaults:()=>qn,defer:()=>kt,delay:()=>Mt,detect:()=>$t,difference:()=>kr,drop:()=>Sr,each:()=>Gt,escape:()=>at,every:()=>tr,extend:()=>Rn,extendOwn:()=>Tn,filter:()=>Zt,find:()=>$t,findIndex:()=>Wt,findKey:()=>Vt,findLastIndex:()=>Pt,findWhere:()=>Jt,first:()=>_r,flatten:()=>Mr,foldl:()=>Xt,foldr:()=>Yt,forEach:()=>Gt,functions:()=>Nn,get:()=>Ln,groupBy:()=>hr,has:()=>Cn,head:()=>_r,identity:()=>$n,include:()=>er,includes:()=>er,indexBy:()=>vr,indexOf:()=>Lt,initial:()=>Ar,inject:()=>Xt,intersection:()=>Dr,invert:()=>In,invoke:()=>ur,isArguments:()=>H,isArray:()=>$,isArrayBuffer:()=>F,isBoolean:()=>M,isDataView:()=>C,isDate:()=>D,isElement:()=>k,isEmpty:()=>fn,isEqual:()=>yn,isError:()=>T,isFinite:()=>Q,isFunction:()=>W,isMap:()=>Sn,isMatch:()=>ln,isNaN:()=>X,isNull:()=>O,isNumber:()=>N,isObject:()=>S,isRegExp:()=>R,isSet:()=>En,isString:()=>I,isSymbol:()=>q,isTypedArray:()=>un,isUndefined:()=>E,isWeakMap:()=>On,isWeakSet:()=>Mn,iteratee:()=>Xn,keys:()=>cn,last:()=>Or,lastIndexOf:()=>Ct,map:()=>Ht,mapObject:()=>Zn,matcher:()=>Jn,matches:()=>Jn,max:()=>ar,memoize:()=>Et,methods:()=>Nn,min:()=>cr,mixin:()=>Wr,negate:()=>Dt,noop:()=>nt,now:()=>ut,object:()=>qr,omit:()=>xr,once:()=>Ft,pairs:()=>Bn,partial:()=>xt,partition:()=>yr,pick:()=>jr,pluck:()=>ir,property:()=>Gn,propertyOf:()=>tt,random:()=>et,range:()=>Fr,reduce:()=>Xt,reduceRight:()=>Yt,reject:()=>nr,rest:()=>Sr,restArguments:()=>_,result:()=>yt,sample:()=>fr,select:()=>Zt,shuffle:()=>lr,size:()=>br,some:()=>rr,sortBy:()=>sr,sortedIndex:()=>Ut,tail:()=>Sr,take:()=>_r,tap:()=>Wn,template:()=>dt,templateSettings:()=>ft,throttle:()=>Bt,times:()=>rt,toArray:()=>mr,toPath:()=>Pn,transpose:()=>Rr,unescape:()=>ct,union:()=>Nr,uniq:()=>Ir,unique:()=>Ir,uniqueId:()=>mt,unzip:()=>Rr,values:()=>kn,where:()=>or,without:()=>Br,wrap:()=>Nt,zip:()=>Tr});var e={};r.r(e),r.d(e,{VERSION:()=>u,after:()=>Tt,all:()=>tr,allKeys:()=>gn,any:()=>rr,assign:()=>Tn,before:()=>qt,bind:()=>At,bindAll:()=>Ot,chain:()=>bt,chunk:()=>Vr,clone:()=>zn,collect:()=>Ht,compact:()=>Er,compose:()=>Rt,constant:()=>Y,contains:()=>er,countBy:()=>dr,create:()=>Vn,debounce:()=>It,default:()=>Pr,defaults:()=>qn,defer:()=>kt,delay:()=>Mt,detect:()=>$t,difference:()=>kr,drop:()=>Sr,each:()=>Gt,escape:()=>at,every:()=>tr,extend:()=>Rn,extendOwn:()=>Tn,filter:()=>Zt,find:()=>$t,findIndex:()=>Wt,findKey:()=>Vt,findLastIndex:()=>Pt,findWhere:()=>Jt,first:()=>_r,flatten:()=>Mr,foldl:()=>Xt,foldr:()=>Yt,forEach:()=>Gt,functions:()=>Nn,get:()=>Ln,groupBy:()=>hr,has:()=>Cn,head:()=>_r,identity:()=>$n,include:()=>er,includes:()=>er,indexBy:()=>vr,indexOf:()=>Lt,initial:()=>Ar,inject:()=>Xt,intersection:()=>Dr,invert:()=>In,invoke:()=>ur,isArguments:()=>H,isArray:()=>$,isArrayBuffer:()=>F,isBoolean:()=>M,isDataView:()=>C,isDate:()=>D,isElement:()=>k,isEmpty:()=>fn,isEqual:()=>yn,isError:()=>T,isFinite:()=>Q,isFunction:()=>W,isMap:()=>Sn,isMatch:()=>ln,isNaN:()=>X,isNull:()=>O,isNumber:()=>N,isObject:()=>S,isRegExp:()=>R,isSet:()=>En,isString:()=>I,isSymbol:()=>q,isTypedArray:()=>un,isUndefined:()=>E,isWeakMap:()=>On,isWeakSet:()=>Mn,iteratee:()=>Xn,keys:()=>cn,last:()=>Or,lastIndexOf:()=>Ct,map:()=>Ht,mapObject:()=>Zn,matcher:()=>Jn,matches:()=>Jn,max:()=>ar,memoize:()=>Et,methods:()=>Nn,min:()=>cr,mixin:()=>Wr,negate:()=>Dt,noop:()=>nt,now:()=>ut,object:()=>qr,omit:()=>xr,once:()=>Ft,pairs:()=>Bn,partial:()=>xt,partition:()=>yr,pick:()=>jr,pluck:()=>ir,property:()=>Gn,propertyOf:()=>tt,random:()=>et,range:()=>Fr,reduce:()=>Xt,reduceRight:()=>Yt,reject:()=>nr,rest:()=>Sr,restArguments:()=>_,result:()=>yt,sample:()=>fr,select:()=>Zt,shuffle:()=>lr,size:()=>br,some:()=>rr,sortBy:()=>sr,sortedIndex:()=>Ut,tail:()=>Sr,take:()=>_r,tap:()=>Wn,template:()=>dt,templateSettings:()=>ft,throttle:()=>Bt,times:()=>rt,toArray:()=>mr,toPath:()=>Pn,transpose:()=>Rr,unescape:()=>ct,union:()=>Nr,uniq:()=>Ir,unique:()=>Ir,uniqueId:()=>mt,unzip:()=>Rr,values:()=>kn,where:()=>or,without:()=>Br,wrap:()=>Nt,zip:()=>Tr});var u="1.13.1",i="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},o=Array.prototype,a=Object.prototype,c="undefined"!=typeof Symbol?Symbol.prototype:null,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h="undefined"!=typeof ArrayBuffer,v="undefined"!=typeof DataView,d=Array.isArray,y=Object.keys,g=Object.create,m=h&&ArrayBuffer.isView,b=isNaN,w=isFinite,j=!{toString:null}.propertyIsEnumerable("toString"),x=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],A=Math.pow(2,53)-1;function _(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),u=0;u<r;u++)e[u]=arguments[u+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(t+1);for(u=0;u<t;u++)i[u]=arguments[u];return i[t]=e,n.apply(this,i)}}function S(n){var t=typeof n;return"function"===t||"object"===t&&!!n}function O(n){return null===n}function E(n){return void 0===n}function M(n){return!0===n||!1===n||"[object Boolean]"===s.call(n)}function k(n){return!(!n||1!==n.nodeType)}function B(n){var t="[object "+n+"]";return function(n){return s.call(n)===t}}const I=B("String"),N=B("Number"),D=B("Date"),R=B("RegExp"),T=B("Error"),q=B("Symbol"),F=B("ArrayBuffer");var V=B("Function"),z=i.document&&i.document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof z&&(V=function(n){return"function"==typeof n||!1});const W=V,P=B("Object");var U=v&&P(new DataView(new ArrayBuffer(8))),K="undefined"!=typeof Map&&P(new Map),L=B("DataView");const C=U?function(n){return null!=n&&W(n.getInt8)&&F(n.buffer)}:L,$=d||B("Array");function J(n,t){return null!=n&&p.call(n,t)}var G=B("Arguments");!function(){G(arguments)||(G=function(n){return J(n,"callee")})}();const H=G;function Q(n){return!q(n)&&w(n)&&!isNaN(parseFloat(n))}function X(n){return N(n)&&b(n)}function Y(n){return function(){return n}}function Z(n){return function(t){var r=n(t);return"number"==typeof r&&r>=0&&r<=A}}function nn(n){return function(t){return null==t?void 0:t[n]}}const tn=nn("byteLength"),rn=Z(tn);var en=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;const un=h?function(n){return m?m(n)&&!C(n):rn(n)&&en.test(s.call(n))}:Y(!1),on=nn("length");function an(n,t){t=function(n){for(var t={},r=n.length,e=0;e<r;++e)t[n[e]]=!0;return{contains:function(n){return t[n]},push:function(r){return t[r]=!0,n.push(r)}}}(t);var r=x.length,e=n.constructor,u=W(e)&&e.prototype||a,i="constructor";for(J(n,i)&&!t.contains(i)&&t.push(i);r--;)(i=x[r])in n&&n[i]!==u[i]&&!t.contains(i)&&t.push(i)}function cn(n){if(!S(n))return[];if(y)return y(n);var t=[];for(var r in n)J(n,r)&&t.push(r);return j&&an(n,t),t}function fn(n){if(null==n)return!0;var t=on(n);return"number"==typeof t&&($(n)||I(n)||H(n))?0===t:0===on(cn(n))}function ln(n,t){var r=cn(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0}function sn(n){return n instanceof sn?n:this instanceof sn?void(this._wrapped=n):new sn(n)}function pn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,tn(n))}sn.VERSION=u,sn.prototype.value=function(){return this._wrapped},sn.prototype.valueOf=sn.prototype.toJSON=sn.prototype.value,sn.prototype.toString=function(){return String(this._wrapped)};var hn="[object DataView]";function vn(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return!1;if(n!=n)return t!=t;var u=typeof n;return("function"===u||"object"===u||"object"==typeof t)&&dn(n,t,r,e)}function dn(n,t,r,e){n instanceof sn&&(n=n._wrapped),t instanceof sn&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;if(U&&"[object Object]"==u&&C(n)){if(!C(t))return!1;u=hn}switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:0==+n?1/+n==1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object Symbol]":return c.valueOf.call(n)===c.valueOf.call(t);case"[object ArrayBuffer]":case hn:return dn(pn(n),pn(t),r,e)}var i="[object Array]"===u;if(!i&&un(n)){if(tn(n)!==tn(t))return!1;if(n.buffer===t.buffer&&n.byteOffset===t.byteOffset)return!0;i=!0}if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(W(o)&&o instanceof o&&W(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}e=e||[];for(var f=(r=r||[]).length;f--;)if(r[f]===n)return e[f]===t;if(r.push(n),e.push(t),i){if((f=n.length)!==t.length)return!1;for(;f--;)if(!vn(n[f],t[f],r,e))return!1}else{var l,p=cn(n);if(f=p.length,cn(t).length!==f)return!1;for(;f--;)if(!J(t,l=p[f])||!vn(n[l],t[l],r,e))return!1}return r.pop(),e.pop(),!0}function yn(n,t){return vn(n,t)}function gn(n){if(!S(n))return[];var t=[];for(var r in n)t.push(r);return j&&an(n,t),t}function mn(n){var t=on(n);return function(r){if(null==r)return!1;var e=gn(r);if(on(e))return!1;for(var u=0;u<t;u++)if(!W(r[n[u]]))return!1;return n!==An||!W(r[bn])}}var bn="forEach",wn=["clear","delete"],jn=["get","has","set"],xn=wn.concat(bn,jn),An=wn.concat(jn),_n=["add"].concat(wn,bn,"has");const Sn=K?mn(xn):B("Map"),On=K?mn(An):B("WeakMap"),En=K?mn(_n):B("Set"),Mn=B("WeakSet");function kn(n){for(var t=cn(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e}function Bn(n){for(var t=cn(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e}function In(n){for(var t={},r=cn(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t}function Nn(n){var t=[];for(var r in n)W(n[r])&&t.push(r);return t.sort()}function Dn(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||null==r)return r;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;c<a;c++){var f=o[c];t&&void 0!==r[f]||(r[f]=i[f])}return r}}const Rn=Dn(gn),Tn=Dn(cn),qn=Dn(gn,!0);function Fn(n){if(!S(n))return{};if(g)return g(n);var t=function(){};t.prototype=n;var r=new t;return t.prototype=null,r}function Vn(n,t){var r=Fn(n);return t&&Tn(r,t),r}function zn(n){return S(n)?$(n)?n.slice():Rn({},n):n}function Wn(n,t){return t(n),n}function Pn(n){return $(n)?n:[n]}function Un(n){return sn.toPath(n)}function Kn(n,t){for(var r=t.length,e=0;e<r;e++){if(null==n)return;n=n[t[e]]}return r?n:void 0}function Ln(n,t,r){var e=Kn(n,Un(t));return E(e)?r:e}function Cn(n,t){for(var r=(t=Un(t)).length,e=0;e<r;e++){var u=t[e];if(!J(n,u))return!1;n=n[u]}return!!r}function $n(n){return n}function Jn(n){return n=Tn({},n),function(t){return ln(t,n)}}function Gn(n){return n=Un(n),function(t){return Kn(t,n)}}function Hn(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}}function Qn(n,t,r){return null==n?$n:W(n)?Hn(n,t,r):S(n)&&!$(n)?Jn(n):Gn(n)}function Xn(n,t){return Qn(n,t,1/0)}function Yn(n,t,r){return sn.iteratee!==Xn?sn.iteratee(n,t):Qn(n,t,r)}function Zn(n,t,r){t=Yn(t,r);for(var e=cn(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=t(n[a],a,n)}return i}function nt(){}function tt(n){return null==n?nt:function(t){return Ln(n,t)}}function rt(n,t,r){var e=Array(Math.max(0,n));t=Hn(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e}function et(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}sn.toPath=Pn,sn.iteratee=Xn;const ut=Date.now||function(){return(new Date).getTime()};function it(n){var t=function(t){return n[t]},r="(?:"+cn(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}}const ot={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},at=it(ot),ct=it(In(ot)),ft=sn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var lt=/(.)^/,st={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},pt=/\\|'|\r|\n|\u2028|\u2029/g;function ht(n){return"\\"+st[n]}var vt=/^\s*(\w|\$)+\s*$/;function dt(n,t,r){!t&&r&&(t=r),t=qn({},t,sn.templateSettings);var e=RegExp([(t.escape||lt).source,(t.interpolate||lt).source,(t.evaluate||lt).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,(function(t,r,e,o,a){return i+=n.slice(u,a).replace(pt,ht),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t})),i+="';\n";var o,a=t.variable;if(a){if(!vt.test(a))throw new Error("variable is not a bare identifier: "+a)}else i="with(obj||{}){\n"+i+"}\n",a="obj";i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{o=new Function(a,"_",i)}catch(n){throw n.source=i,n}var c=function(n){return o.call(this,n,sn)};return c.source="function("+a+"){\n"+i+"}",c}function yt(n,t,r){var e=(t=Un(t)).length;if(!e)return W(r)?r.call(n):r;for(var u=0;u<e;u++){var i=null==n?void 0:n[t[u]];void 0===i&&(i=r,u=e),n=W(i)?i.call(n):i}return n}var gt=0;function mt(n){var t=++gt+"";return n?n+t:t}function bt(n){var t=sn(n);return t._chain=!0,t}function wt(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=Fn(n.prototype),o=n.apply(i,u);return S(o)?o:i}var jt=_((function(n,t){var r=jt.placeholder,e=function(){for(var u=0,i=t.length,o=Array(i),a=0;a<i;a++)o[a]=t[a]===r?arguments[u++]:t[a];for(;u<arguments.length;)o.push(arguments[u++]);return wt(n,e,this,this,o)};return e}));jt.placeholder=sn;const xt=jt,At=_((function(n,t,r){if(!W(n))throw new TypeError("Bind must be called on a function");var e=_((function(u){return wt(n,e,t,this,r.concat(u))}));return e})),_t=Z(on);function St(n,t,r,e){if(e=e||[],t||0===t){if(t<=0)return e.concat(n)}else t=1/0;for(var u=e.length,i=0,o=on(n);i<o;i++){var a=n[i];if(_t(a)&&($(a)||H(a)))if(t>1)St(a,t-1,r,e),u=e.length;else for(var c=0,f=a.length;c<f;)e[u++]=a[c++];else r||(e[u++]=a)}return e}const Ot=_((function(n,t){var r=(t=St(t,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=At(n[e],n)}return n}));function Et(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return J(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r}const Mt=_((function(n,t,r){return setTimeout((function(){return n.apply(null,r)}),t)})),kt=xt(Mt,sn,1);function Bt(n,t,r){var e,u,i,o,a=0;r||(r={});var c=function(){a=!1===r.leading?0:ut(),e=null,o=n.apply(u,i),e||(u=i=null)},f=function(){var f=ut();a||!1!==r.leading||(a=f);var l=t-(f-a);return u=this,i=arguments,l<=0||l>t?(e&&(clearTimeout(e),e=null),a=f,o=n.apply(u,i),e||(u=i=null)):e||!1===r.trailing||(e=setTimeout(c,l)),o};return f.cancel=function(){clearTimeout(e),a=0,e=u=i=null},f}function It(n,t,r){var e,u,i,o,a,c=function(){var f=ut()-u;t>f?e=setTimeout(c,t-f):(e=null,r||(o=n.apply(a,i)),e||(i=a=null))},f=_((function(f){return a=this,i=f,u=ut(),e||(e=setTimeout(c,t),r&&(o=n.apply(a,i))),o}));return f.cancel=function(){clearTimeout(e),e=i=a=null},f}function Nt(n,t){return xt(t,n)}function Dt(n){return function(){return!n.apply(this,arguments)}}function Rt(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}}function Tt(n,t){return function(){if(--n<1)return t.apply(this,arguments)}}function qt(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}}const Ft=xt(qt,2);function Vt(n,t,r){t=Yn(t,r);for(var e,u=cn(n),i=0,o=u.length;i<o;i++)if(t(n[e=u[i]],e,n))return e}function zt(n){return function(t,r,e){r=Yn(r,e);for(var u=on(t),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(r(t[i],i,t))return i;return-1}}const Wt=zt(1),Pt=zt(-1);function Ut(n,t,r,e){for(var u=(r=Yn(r,e,1))(t),i=0,o=on(n);i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i}function Kt(n,t,r){return function(e,u,i){var o=0,a=on(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return e[i=r(e,u)]===u?i:-1;if(u!=u)return(i=t(l.call(e,o,a),X))>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&i<a;i+=n)if(e[i]===u)return i;return-1}}const Lt=Kt(1,Wt,Ut),Ct=Kt(-1,Pt);function $t(n,t,r){var e=(_t(n)?Wt:Vt)(n,t,r);if(void 0!==e&&-1!==e)return n[e]}function Jt(n,t){return $t(n,Jn(t))}function Gt(n,t,r){var e,u;if(t=Hn(t,r),_t(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=cn(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n}function Ht(n,t,r){t=Yn(t,r);for(var e=!_t(n)&&cn(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i}function Qt(n){var t=function(t,r,e,u){var i=!_t(t)&&cn(t),o=(i||t).length,a=n>0?0:o-1;for(u||(e=t[i?i[a]:a],a+=n);a>=0&&a<o;a+=n){var c=i?i[a]:a;e=r(e,t[c],c,t)}return e};return function(n,r,e,u){var i=arguments.length>=3;return t(n,Hn(r,u,4),e,i)}}const Xt=Qt(1),Yt=Qt(-1);function Zt(n,t,r){var e=[];return t=Yn(t,r),Gt(n,(function(n,r,u){t(n,r,u)&&e.push(n)})),e}function nr(n,t,r){return Zt(n,Dt(Yn(t)),r)}function tr(n,t,r){t=Yn(t,r);for(var e=!_t(n)&&cn(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0}function rr(n,t,r){t=Yn(t,r);for(var e=!_t(n)&&cn(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1}function er(n,t,r,e){return _t(n)||(n=kn(n)),("number"!=typeof r||e)&&(r=0),Lt(n,t,r)>=0}const ur=_((function(n,t,r){var e,u;return W(t)?u=t:(t=Un(t),e=t.slice(0,-1),t=t[t.length-1]),Ht(n,(function(n){var i=u;if(!i){if(e&&e.length&&(n=Kn(n,e)),null==n)return;i=n[t]}return null==i?i:i.apply(n,r)}))}));function ir(n,t){return Ht(n,Gn(t))}function or(n,t){return Zt(n,Jn(t))}function ar(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=_t(n)?n:kn(n)).length;a<c;a++)null!=(e=n[a])&&e>i&&(i=e);else t=Yn(t,r),Gt(n,(function(n,r,e){((u=t(n,r,e))>o||u===-1/0&&i===-1/0)&&(i=n,o=u)}));return i}function cr(n,t,r){var e,u,i=1/0,o=1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=_t(n)?n:kn(n)).length;a<c;a++)null!=(e=n[a])&&e<i&&(i=e);else t=Yn(t,r),Gt(n,(function(n,r,e){((u=t(n,r,e))<o||u===1/0&&i===1/0)&&(i=n,o=u)}));return i}function fr(n,t,r){if(null==t||r)return _t(n)||(n=kn(n)),n[et(n.length-1)];var e=_t(n)?zn(n):kn(n),u=on(e);t=Math.max(Math.min(t,u),0);for(var i=u-1,o=0;o<t;o++){var a=et(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,t)}function lr(n){return fr(n,1/0)}function sr(n,t,r){var e=0;return t=Yn(t,r),ir(Ht(n,(function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}})).sort((function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index})),"value")}function pr(n,t){return function(r,e,u){var i=t?[[],[]]:{};return e=Yn(e,u),Gt(r,(function(t,u){var o=e(t,u,r);n(i,t,o)})),i}}const hr=pr((function(n,t,r){J(n,r)?n[r].push(t):n[r]=[t]})),vr=pr((function(n,t,r){n[r]=t})),dr=pr((function(n,t,r){J(n,r)?n[r]++:n[r]=1})),yr=pr((function(n,t,r){n[r?0:1].push(t)}),!0);var gr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function mr(n){return n?$(n)?l.call(n):I(n)?n.match(gr):_t(n)?Ht(n,$n):kn(n):[]}function br(n){return null==n?0:_t(n)?n.length:cn(n).length}function wr(n,t,r){return t in r}const jr=_((function(n,t){var r={},e=t[0];if(null==n)return r;W(e)?(t.length>1&&(e=Hn(e,t[1])),t=gn(n)):(e=wr,t=St(t,!1,!1),n=Object(n));for(var u=0,i=t.length;u<i;u++){var o=t[u],a=n[o];e(a,o,n)&&(r[o]=a)}return r})),xr=_((function(n,t){var r,e=t[0];return W(e)?(e=Dt(e),t.length>1&&(r=t[1])):(t=Ht(St(t,!1,!1),String),e=function(n,r){return!er(t,r)}),jr(n,e,r)}));function Ar(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))}function _r(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[0]:Ar(n,n.length-t)}function Sr(n,t,r){return l.call(n,null==t||r?1:t)}function Or(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[n.length-1]:Sr(n,Math.max(0,n.length-t))}function Er(n){return Zt(n,Boolean)}function Mr(n,t){return St(n,t,!1)}const kr=_((function(n,t){return t=St(t,!0,!0),Zt(n,(function(n){return!er(t,n)}))})),Br=_((function(n,t){return kr(n,t)}));function Ir(n,t,r,e){M(t)||(e=r,r=t,t=!1),null!=r&&(r=Yn(r,e));for(var u=[],i=[],o=0,a=on(n);o<a;o++){var c=n[o],f=r?r(c,o,n):c;t&&!r?(o&&i===f||u.push(c),i=f):r?er(i,f)||(i.push(f),u.push(c)):er(u,c)||u.push(c)}return u}const Nr=_((function(n){return Ir(St(n,!0,!0))}));function Dr(n){for(var t=[],r=arguments.length,e=0,u=on(n);e<u;e++){var i=n[e];if(!er(t,i)){var o;for(o=1;o<r&&er(arguments[o],i);o++);o===r&&t.push(i)}}return t}function Rr(n){for(var t=n&&ar(n,on).length||0,r=Array(t),e=0;e<t;e++)r[e]=ir(n,e);return r}const Tr=_(Rr);function qr(n,t){for(var r={},e=0,u=on(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r}function Fr(n,t,r){null==t&&(t=n||0,n=0),r||(r=t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u}function Vr(n,t){if(null==t||t<1)return[];for(var r=[],e=0,u=n.length;e<u;)r.push(l.call(n,e,e+=t));return r}function zr(n,t){return n._chain?sn(t).chain():t}function Wr(n){return Gt(Nn(n),(function(t){var r=sn[t]=n[t];sn.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),zr(this,r.apply(sn,n))}})),sn}Gt(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var t=o[n];sn.prototype[n]=function(){var r=this._wrapped;return null!=r&&(t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0]),zr(this,r)}})),Gt(["concat","join","slice"],(function(n){var t=o[n];sn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=t.apply(n,arguments)),zr(this,n)}}));const Pr=sn;var Ur=Wr(e);Ur._=Ur;const Kr=Ur}}]);
(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&e(f)}).observe(document,{childList:!0,subtree:!0});function t(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function e(i){if(i.ep)return;i.ep=!0;const u=t(i);fetch(i.href,u)}})();const Pn=(n,r)=>{const t=document.createElement("img");t.src="cartas/"+n+".png",t.className="carta",r.append(t)};var Ln="1.13.6",wn=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},W=Array.prototype,nn=Object.prototype,An=typeof Symbol<"u"?Symbol.prototype:null,Tr=W.push,R=W.slice,T=nn.toString,Pr=nn.hasOwnProperty,Rn=typeof ArrayBuffer<"u",Lr=typeof DataView<"u",Rr=Array.isArray,_n=Object.keys,On=Object.create,En=Rn&&ArrayBuffer.isView,Vr=isNaN,qr=isFinite,Vn=!{toString:null}.propertyIsEnumerable("toString"),Nn=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Fr=Math.pow(2,53)-1;function m(n,r){return r=r==null?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),i=0;i<t;i++)e[i]=arguments[i+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var u=Array(r+1);for(i=0;i<r;i++)u[i]=arguments[i];return u[r]=e,n.apply(this,u)}}function N(n){var r=typeof n;return r==="function"||r==="object"&&!!n}function $r(n){return n===null}function qn(n){return n===void 0}function Fn(n){return n===!0||n===!1||T.call(n)==="[object Boolean]"}function zr(n){return!!(n&&n.nodeType===1)}function h(n){var r="[object "+n+"]";return function(t){return T.call(t)===r}}const rn=h("String"),$n=h("Number"),Gr=h("Date"),Hr=h("RegExp"),Wr=h("Error"),zn=h("Symbol"),Gn=h("ArrayBuffer");var Hn=h("Function"),Jr=wn.document&&wn.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof Jr!="function"&&(Hn=function(n){return typeof n=="function"||!1});const g=Hn,Wn=h("Object");var Jn=Lr&&Wn(new DataView(new ArrayBuffer(8))),tn=typeof Map<"u"&&Wn(new Map),Cr=h("DataView");function Xr(n){return n!=null&&g(n.getInt8)&&Gn(n.buffer)}const z=Jn?Xr:Cr,M=Rr||h("Array");function O(n,r){return n!=null&&Pr.call(n,r)}var Y=h("Arguments");(function(){Y(arguments)||(Y=function(n){return O(n,"callee")})})();const en=Y;function Qr(n){return!zn(n)&&qr(n)&&!isNaN(parseFloat(n))}function Cn(n){return $n(n)&&Vr(n)}function Xn(n){return function(){return n}}function Qn(n){return function(r){var t=n(r);return typeof t=="number"&&t>=0&&t<=Fr}}function Yn(n){return function(r){return r==null?void 0:r[n]}}const G=Yn("byteLength"),Yr=Qn(G);var Ur=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function Zr(n){return En?En(n)&&!z(n):Yr(n)&&Ur.test(T.call(n))}const Un=Rn?Zr:Xn(!1),d=Yn("length");function Kr(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(i){return r[i]===!0},push:function(i){return r[i]=!0,n.push(i)}}}function Zn(n,r){r=Kr(r);var t=Nn.length,e=n.constructor,i=g(e)&&e.prototype||nn,u="constructor";for(O(n,u)&&!r.contains(u)&&r.push(u);t--;)u=Nn[t],u in n&&n[u]!==i[u]&&!r.contains(u)&&r.push(u)}function v(n){if(!N(n))return[];if(_n)return _n(n);var r=[];for(var t in n)O(n,t)&&r.push(t);return Vn&&Zn(n,r),r}function xr(n){if(n==null)return!0;var r=d(n);return typeof r=="number"&&(M(n)||rn(n)||en(n))?r===0:d(v(n))===0}function Kn(n,r){var t=v(r),e=t.length;if(n==null)return!e;for(var i=Object(n),u=0;u<e;u++){var f=t[u];if(r[f]!==i[f]||!(f in i))return!1}return!0}function o(n){if(n instanceof o)return n;if(!(this instanceof o))return new o(n);this._wrapped=n}o.VERSION=Ln;o.prototype.value=function(){return this._wrapped};o.prototype.valueOf=o.prototype.toJSON=o.prototype.value;o.prototype.toString=function(){return String(this._wrapped)};function Mn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}var In="[object DataView]";function U(n,r,t,e){if(n===r)return n!==0||1/n===1/r;if(n==null||r==null)return!1;if(n!==n)return r!==r;var i=typeof n;return i!=="function"&&i!=="object"&&typeof r!="object"?!1:xn(n,r,t,e)}function xn(n,r,t,e){n instanceof o&&(n=n._wrapped),r instanceof o&&(r=r._wrapped);var i=T.call(n);if(i!==T.call(r))return!1;if(Jn&&i=="[object Object]"&&z(n)){if(!z(r))return!1;i=In}switch(i){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:+n==0?1/+n===1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return An.valueOf.call(n)===An.valueOf.call(r);case"[object ArrayBuffer]":case In:return xn(Mn(n),Mn(r),t,e)}var u=i==="[object Array]";if(!u&&Un(n)){var f=G(n);if(f!==G(r))return!1;if(n.buffer===r.buffer&&n.byteOffset===r.byteOffset)return!0;u=!0}if(!u){if(typeof n!="object"||typeof r!="object")return!1;var l=n.constructor,c=r.constructor;if(l!==c&&!(g(l)&&l instanceof l&&g(c)&&c instanceof c)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var a=t.length;a--;)if(t[a]===n)return e[a]===r;if(t.push(n),e.push(r),u){if(a=n.length,a!==r.length)return!1;for(;a--;)if(!U(n[a],r[a],t,e))return!1}else{var s=v(n),p;if(a=s.length,v(r).length!==a)return!1;for(;a--;)if(p=s[a],!(O(r,p)&&U(n[p],r[p],t,e)))return!1}return t.pop(),e.pop(),!0}function kr(n,r){return U(n,r)}function V(n){if(!N(n))return[];var r=[];for(var t in n)r.push(t);return Vn&&Zn(n,r),r}function un(n){var r=d(n);return function(t){if(t==null)return!1;var e=V(t);if(d(e))return!1;for(var i=0;i<r;i++)if(!g(t[n[i]]))return!1;return n!==jn||!g(t[fn])}}var fn="forEach",kn="has",ln=["clear","delete"],bn=["get",kn,"set"],br=ln.concat(fn,bn),jn=ln.concat(bn),jr=["add"].concat(ln,fn,kn);const nt=tn?un(br):h("Map"),rt=tn?un(jn):h("WeakMap"),tt=tn?un(jr):h("Set"),et=h("WeakSet");function S(n){for(var r=v(n),t=r.length,e=Array(t),i=0;i<t;i++)e[i]=n[r[i]];return e}function ut(n){for(var r=v(n),t=r.length,e=Array(t),i=0;i<t;i++)e[i]=[r[i],n[r[i]]];return e}function nr(n){for(var r={},t=v(n),e=0,i=t.length;e<i;e++)r[n[t[e]]]=t[e];return r}function Z(n){var r=[];for(var t in n)g(n[t])&&r.push(t);return r.sort()}function an(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||t==null)return t;for(var i=1;i<e;i++)for(var u=arguments[i],f=n(u),l=f.length,c=0;c<l;c++){var a=f[c];(!r||t[a]===void 0)&&(t[a]=u[a])}return t}}const rr=an(V),H=an(v),tr=an(V,!0);function it(){return function(){}}function er(n){if(!N(n))return{};if(On)return On(n);var r=it();r.prototype=n;var t=new r;return r.prototype=null,t}function ft(n,r){var t=er(n);return r&&H(t,r),t}function lt(n){return N(n)?M(n)?n.slice():rr({},n):n}function at(n,r){return r(n),n}function ur(n){return M(n)?n:[n]}o.toPath=ur;function q(n){return o.toPath(n)}function cn(n,r){for(var t=r.length,e=0;e<t;e++){if(n==null)return;n=n[r[e]]}return t?n:void 0}function ir(n,r,t){var e=cn(n,q(r));return qn(e)?t:e}function ct(n,r){r=q(r);for(var t=r.length,e=0;e<t;e++){var i=r[e];if(!O(n,i))return!1;n=n[i]}return!!t}function on(n){return n}function P(n){return n=H({},n),function(r){return Kn(r,n)}}function sn(n){return n=q(n),function(r){return cn(r,n)}}function F(n,r,t){if(r===void 0)return n;switch(t??3){case 1:return function(e){return n.call(r,e)};case 3:return function(e,i,u){return n.call(r,e,i,u)};case 4:return function(e,i,u,f){return n.call(r,e,i,u,f)}}return function(){return n.apply(r,arguments)}}function fr(n,r,t){return n==null?on:g(n)?F(n,r,t):N(n)&&!M(n)?P(n):sn(n)}function vn(n,r){return fr(n,r,1/0)}o.iteratee=vn;function y(n,r,t){return o.iteratee!==vn?o.iteratee(n,r):fr(n,r,t)}function ot(n,r,t){r=y(r,t);for(var e=v(n),i=e.length,u={},f=0;f<i;f++){var l=e[f];u[l]=r(n[l],l,n)}return u}function lr(){}function st(n){return n==null?lr:function(r){return ir(n,r)}}function vt(n,r,t){var e=Array(Math.max(0,n));r=F(r,t,1);for(var i=0;i<n;i++)e[i]=r(i);return e}function K(n,r){return r==null&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}const L=Date.now||function(){return new Date().getTime()};function ar(n){var r=function(u){return n[u]},t="(?:"+v(n).join("|")+")",e=RegExp(t),i=RegExp(t,"g");return function(u){return u=u==null?"":""+u,e.test(u)?u.replace(i,r):u}}const cr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},ht=ar(cr),pt=nr(cr),gt=ar(pt),mt=o.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var C=/(.)^/,dt={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},yt=/\\|'|\r|\n|\u2028|\u2029/g;function wt(n){return"\\"+dt[n]}var At=/^\s*(\w|\$)+\s*$/;function _t(n,r,t){!r&&t&&(r=t),r=tr({},r,o.templateSettings);var e=RegExp([(r.escape||C).source,(r.interpolate||C).source,(r.evaluate||C).source].join("|")+"|$","g"),i=0,u="__p+='";n.replace(e,function(a,s,p,dn,yn){return u+=n.slice(i,yn).replace(yt,wt),i=yn+a.length,s?u+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:p?u+=`'+
((__t=(`+p+`))==null?'':__t)+
'`:dn&&(u+=`';
`+dn+`
__p+='`),a}),u+=`';
`;var f=r.variable;if(f){if(!At.test(f))throw new Error("variable is not a bare identifier: "+f)}else u=`with(obj||{}){
`+u+`}
`,f="obj";u=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+u+`return __p;
`;var l;try{l=new Function(f,"_",u)}catch(a){throw a.source=u,a}var c=function(a){return l.call(this,a,o)};return c.source="function("+f+`){
`+u+"}",c}function Ot(n,r,t){r=q(r);var e=r.length;if(!e)return g(t)?t.call(n):t;for(var i=0;i<e;i++){var u=n==null?void 0:n[r[i]];u===void 0&&(u=t,i=e),n=g(u)?u.call(n):u}return n}var Et=0;function Nt(n){var r=++Et+"";return n?n+r:r}function Mt(n){var r=o(n);return r._chain=!0,r}function or(n,r,t,e,i){if(!(e instanceof r))return n.apply(t,i);var u=er(n.prototype),f=n.apply(u,i);return N(f)?f:u}var B=m(function(n,r){var t=B.placeholder,e=function(){for(var i=0,u=r.length,f=Array(u),l=0;l<u;l++)f[l]=r[l]===t?arguments[i++]:r[l];for(;i<arguments.length;)f.push(arguments[i++]);return or(n,e,this,this,f)};return e});B.placeholder=o;const sr=m(function(n,r,t){if(!g(n))throw new TypeError("Bind must be called on a function");var e=m(function(i){return or(n,e,r,this,t.concat(i))});return e}),w=Qn(d);function I(n,r,t,e){if(e=e||[],!r&&r!==0)r=1/0;else if(r<=0)return e.concat(n);for(var i=e.length,u=0,f=d(n);u<f;u++){var l=n[u];if(w(l)&&(M(l)||en(l)))if(r>1)I(l,r-1,t,e),i=e.length;else for(var c=0,a=l.length;c<a;)e[i++]=l[c++];else t||(e[i++]=l)}return e}const It=m(function(n,r){r=I(r,!1,!1);var t=r.length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=sr(n[e],n)}return n});function Dt(n,r){var t=function(e){var i=t.cache,u=""+(r?r.apply(this,arguments):e);return O(i,u)||(i[u]=n.apply(this,arguments)),i[u]};return t.cache={},t}const vr=m(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),St=B(vr,o,1);function Bt(n,r,t){var e,i,u,f,l=0;t||(t={});var c=function(){l=t.leading===!1?0:L(),e=null,f=n.apply(i,u),e||(i=u=null)},a=function(){var s=L();!l&&t.leading===!1&&(l=s);var p=r-(s-l);return i=this,u=arguments,p<=0||p>r?(e&&(clearTimeout(e),e=null),l=s,f=n.apply(i,u),e||(i=u=null)):!e&&t.trailing!==!1&&(e=setTimeout(c,p)),f};return a.cancel=function(){clearTimeout(e),l=0,e=i=u=null},a}function Tt(n,r,t){var e,i,u,f,l,c=function(){var s=L()-i;r>s?e=setTimeout(c,r-s):(e=null,t||(f=n.apply(l,u)),e||(u=l=null))},a=m(function(s){return l=this,u=s,i=L(),e||(e=setTimeout(c,r),t&&(f=n.apply(l,u))),f});return a.cancel=function(){clearTimeout(e),e=u=l=null},a}function Pt(n,r){return B(r,n)}function hn(n){return function(){return!n.apply(this,arguments)}}function Lt(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}}function Rt(n,r){return function(){if(--n<1)return r.apply(this,arguments)}}function hr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}const Vt=B(hr,2);function pr(n,r,t){r=y(r,t);for(var e=v(n),i,u=0,f=e.length;u<f;u++)if(i=e[u],r(n[i],i,n))return i}function gr(n){return function(r,t,e){t=y(t,e);for(var i=d(r),u=n>0?0:i-1;u>=0&&u<i;u+=n)if(t(r[u],u,r))return u;return-1}}const pn=gr(1),mr=gr(-1);function dr(n,r,t,e){t=y(t,e,1);for(var i=t(r),u=0,f=d(n);u<f;){var l=Math.floor((u+f)/2);t(n[l])<i?u=l+1:f=l}return u}function yr(n,r,t){return function(e,i,u){var f=0,l=d(e);if(typeof u=="number")n>0?f=u>=0?u:Math.max(u+l,f):l=u>=0?Math.min(u+1,l):u+l+1;else if(t&&u&&l)return u=t(e,i),e[u]===i?u:-1;if(i!==i)return u=r(R.call(e,f,l),Cn),u>=0?u+f:-1;for(u=n>0?f:l-1;u>=0&&u<l;u+=n)if(e[u]===i)return u;return-1}}const wr=yr(1,pn,dr),qt=yr(-1,mr);function x(n,r,t){var e=w(n)?pn:pr,i=e(n,r,t);if(i!==void 0&&i!==-1)return n[i]}function Ft(n,r){return x(n,P(r))}function _(n,r,t){r=F(r,t);var e,i;if(w(n))for(e=0,i=n.length;e<i;e++)r(n[e],e,n);else{var u=v(n);for(e=0,i=u.length;e<i;e++)r(n[u[e]],u[e],n)}return n}function E(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),i=(e||n).length,u=Array(i),f=0;f<i;f++){var l=e?e[f]:f;u[f]=r(n[l],l,n)}return u}function Ar(n){var r=function(t,e,i,u){var f=!w(t)&&v(t),l=(f||t).length,c=n>0?0:l-1;for(u||(i=t[f?f[c]:c],c+=n);c>=0&&c<l;c+=n){var a=f?f[c]:c;i=e(i,t[a],a,t)}return i};return function(t,e,i,u){var f=arguments.length>=3;return r(t,F(e,u,4),i,f)}}const X=Ar(1),Dn=Ar(-1);function D(n,r,t){var e=[];return r=y(r,t),_(n,function(i,u,f){r(i,u,f)&&e.push(i)}),e}function $t(n,r,t){return D(n,hn(y(r)),t)}function Sn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),i=(e||n).length,u=0;u<i;u++){var f=e?e[u]:u;if(!r(n[f],f,n))return!1}return!0}function Bn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),i=(e||n).length,u=0;u<i;u++){var f=e?e[u]:u;if(r(n[f],f,n))return!0}return!1}function A(n,r,t,e){return w(n)||(n=S(n)),(typeof t!="number"||e)&&(t=0),wr(n,r,t)>=0}const zt=m(function(n,r,t){var e,i;return g(r)?i=r:(r=q(r),e=r.slice(0,-1),r=r[r.length-1]),E(n,function(u){var f=i;if(!f){if(e&&e.length&&(u=cn(u,e)),u==null)return;f=u[r]}return f==null?f:f.apply(u,t)})});function gn(n,r){return E(n,sn(r))}function Gt(n,r){return D(n,P(r))}function _r(n,r,t){var e=-1/0,i=-1/0,u,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:S(n);for(var l=0,c=n.length;l<c;l++)u=n[l],u!=null&&u>e&&(e=u)}else r=y(r,t),_(n,function(a,s,p){f=r(a,s,p),(f>i||f===-1/0&&e===-1/0)&&(e=a,i=f)});return e}function Ht(n,r,t){var e=1/0,i=1/0,u,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:S(n);for(var l=0,c=n.length;l<c;l++)u=n[l],u!=null&&u<e&&(e=u)}else r=y(r,t),_(n,function(a,s,p){f=r(a,s,p),(f<i||f===1/0&&e===1/0)&&(e=a,i=f)});return e}var Wt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Or(n){return n?M(n)?R.call(n):rn(n)?n.match(Wt):w(n)?E(n,on):S(n):[]}function Er(n,r,t){if(r==null||t)return w(n)||(n=S(n)),n[K(n.length-1)];var e=Or(n),i=d(e);r=Math.max(Math.min(r,i),0);for(var u=i-1,f=0;f<r;f++){var l=K(f,u),c=e[f];e[f]=e[l],e[l]=c}return e.slice(0,r)}function Jt(n){return Er(n,1/0)}function Ct(n,r,t){var e=0;return r=y(r,t),gn(E(n,function(i,u,f){return{value:i,index:e++,criteria:r(i,u,f)}}).sort(function(i,u){var f=i.criteria,l=u.criteria;if(f!==l){if(f>l||f===void 0)return 1;if(f<l||l===void 0)return-1}return i.index-u.index}),"value")}function J(n,r){return function(t,e,i){var u=r?[[],[]]:{};return e=y(e,i),_(t,function(f,l){var c=e(f,l,t);n(u,f,c)}),u}}const Xt=J(function(n,r,t){O(n,t)?n[t].push(r):n[t]=[r]}),Qt=J(function(n,r,t){n[t]=r}),Yt=J(function(n,r,t){O(n,t)?n[t]++:n[t]=1}),Ut=J(function(n,r,t){n[t?0:1].push(r)},!0);function Zt(n){return n==null?0:w(n)?n.length:v(n).length}function Kt(n,r,t){return r in t}const Nr=m(function(n,r){var t={},e=r[0];if(n==null)return t;g(e)?(r.length>1&&(e=F(e,r[1])),r=V(n)):(e=Kt,r=I(r,!1,!1),n=Object(n));for(var i=0,u=r.length;i<u;i++){var f=r[i],l=n[f];e(l,f,n)&&(t[f]=l)}return t}),xt=m(function(n,r){var t=r[0],e;return g(t)?(t=hn(t),r.length>1&&(e=r[1])):(r=E(I(r,!1,!1),String),t=function(i,u){return!A(r,u)}),Nr(n,t,e)});function Mr(n,r,t){return R.call(n,0,Math.max(0,n.length-(r==null||t?1:r)))}function Q(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[0]:Mr(n,n.length-r)}function $(n,r,t){return R.call(n,r==null||t?1:r)}function kt(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[n.length-1]:$(n,Math.max(0,n.length-r))}function bt(n){return D(n,Boolean)}function jt(n,r){return I(n,r,!1)}const Ir=m(function(n,r){return r=I(r,!0,!0),D(n,function(t){return!A(r,t)})}),ne=m(function(n,r){return Ir(n,r)});function k(n,r,t,e){Fn(r)||(e=t,t=r,r=!1),t!=null&&(t=y(t,e));for(var i=[],u=[],f=0,l=d(n);f<l;f++){var c=n[f],a=t?t(c,f,n):c;r&&!t?((!f||u!==a)&&i.push(c),u=a):t?A(u,a)||(u.push(a),i.push(c)):A(i,c)||i.push(c)}return i}const re=m(function(n){return k(I(n,!0,!0))});function te(n){for(var r=[],t=arguments.length,e=0,i=d(n);e<i;e++){var u=n[e];if(!A(r,u)){var f;for(f=1;f<t&&A(arguments[f],u);f++);f===t&&r.push(u)}}return r}function b(n){for(var r=n&&_r(n,d).length||0,t=Array(r),e=0;e<r;e++)t[e]=gn(n,e);return t}const ee=m(b);function ue(n,r){for(var t={},e=0,i=d(n);e<i;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t}function ie(n,r,t){r==null&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),i=Array(e),u=0;u<e;u++,n+=t)i[u]=n;return i}function fe(n,r){if(r==null||r<1)return[];for(var t=[],e=0,i=n.length;e<i;)t.push(R.call(n,e,e+=r));return t}function mn(n,r){return n._chain?o(r).chain():r}function Dr(n){return _(Z(n),function(r){var t=o[r]=n[r];o.prototype[r]=function(){var e=[this._wrapped];return Tr.apply(e,arguments),mn(this,t.apply(o,e))}}),o}_(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=W[n];o.prototype[n]=function(){var t=this._wrapped;return t!=null&&(r.apply(t,arguments),(n==="shift"||n==="splice")&&t.length===0&&delete t[0]),mn(this,t)}});_(["concat","join","slice"],function(n){var r=W[n];o.prototype[n]=function(){var t=this._wrapped;return t!=null&&(t=r.apply(t,arguments)),mn(this,t)}});const le=Object.freeze(Object.defineProperty({__proto__:null,VERSION:Ln,after:Rt,all:Sn,allKeys:V,any:Bn,assign:H,before:hr,bind:sr,bindAll:It,chain:Mt,chunk:fe,clone:lt,collect:E,compact:bt,compose:Lt,constant:Xn,contains:A,countBy:Yt,create:ft,debounce:Tt,default:o,defaults:tr,defer:St,delay:vr,detect:x,difference:Ir,drop:$,each:_,escape:ht,every:Sn,extend:rr,extendOwn:H,filter:D,find:x,findIndex:pn,findKey:pr,findLastIndex:mr,findWhere:Ft,first:Q,flatten:jt,foldl:X,foldr:Dn,forEach:_,functions:Z,get:ir,groupBy:Xt,has:ct,head:Q,identity:on,include:A,includes:A,indexBy:Qt,indexOf:wr,initial:Mr,inject:X,intersection:te,invert:nr,invoke:zt,isArguments:en,isArray:M,isArrayBuffer:Gn,isBoolean:Fn,isDataView:z,isDate:Gr,isElement:zr,isEmpty:xr,isEqual:kr,isError:Wr,isFinite:Qr,isFunction:g,isMap:nt,isMatch:Kn,isNaN:Cn,isNull:$r,isNumber:$n,isObject:N,isRegExp:Hr,isSet:tt,isString:rn,isSymbol:zn,isTypedArray:Un,isUndefined:qn,isWeakMap:rt,isWeakSet:et,iteratee:vn,keys:v,last:kt,lastIndexOf:qt,map:E,mapObject:ot,matcher:P,matches:P,max:_r,memoize:Dt,methods:Z,min:Ht,mixin:Dr,negate:hn,noop:lr,now:L,object:ue,omit:xt,once:Vt,pairs:ut,partial:B,partition:Ut,pick:Nr,pluck:gn,property:sn,propertyOf:st,random:K,range:ie,reduce:X,reduceRight:Dn,reject:$t,rest:$,restArguments:m,result:Ot,sample:Er,select:D,shuffle:Jt,size:Zt,some:Bn,sortBy:Ct,sortedIndex:dr,tail:$,take:Q,tap:at,template:_t,templateSettings:mt,throttle:Bt,times:vt,toArray:Or,toPath:ur,transpose:b,unescape:gt,union:re,uniq:k,unique:k,uniqueId:Nt,unzip:b,values:S,where:Gt,without:ne,wrap:Pt,zip:ee},Symbol.toStringTag,{value:"Module"}));var j=Dr(le);j._=j;const ae=()=>{let n=[];for(let r of["C","D","H","S"]){for(let t=2;t<=10;t++)n.push(t+r);for(let t of["A","J","Q","K"])n.push(t+r)}return j.shuffle(n)},Sr=n=>{if(n.length===0)throw"No quedan cartas";return n.pop()},Tn=(n,r,t,e,i)=>{do{let u=Sr(i);if(r+=Br(u),t[1].innerText="Ordenador | "+r,Pn(u,e),n>21)break}while(r<n&&n<=21);setTimeout(()=>{ce(n,r)},100)},ce=(n,r)=>{n>r&&n<=21||n<=21&&r>21?alert("HA GANADO EL JUGADOR"):r>n&&r<=21||r<=21&&n>21?alert("HA GANADO EL ORDENADOR"):alert("EMPATE, NADIE HA GANADO")},Br=n=>{let r;return isNaN(r=n[0])?r==="A"?11:10:parseInt(n.match(/[0-9]/g).join(""))};(()=>{const n=document.querySelector("#carta"),r=document.querySelector("#end"),t=document.querySelector("#new"),e=document.querySelectorAll("h1"),i=document.querySelector("#jugador-cartas"),u=document.querySelector("#ordenador-cartas");let f=0,l=0,c=ae();return n.addEventListener("click",()=>{let a=Sr(c);f+=Br(a),e[0].innerText="Jugador | "+f,Pn(a,i),f>=21&&(n.disabled=!0,r.disabled=!0,Tn(f,l,e,u,c))}),r.addEventListener("click",()=>{n.disabled=!0,r.disabled=!0,Tn(f,l,e,u,c)}),t.addEventListener("click",()=>{location.reload()}),{mazo:c}})();

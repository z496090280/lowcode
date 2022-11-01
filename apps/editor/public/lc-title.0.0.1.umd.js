(function(u,y){typeof exports=="object"&&typeof module!="undefined"?module.exports=y():typeof define=="function"&&define.amd?define(y):(u=typeof globalThis!="undefined"?globalThis:u||self,u.LcTitle=y())})(this,function(){"use strict";function u(t){if(f(t)){const n={};for(let e=0;e<t.length;e++){const i=t[e],s=a(i)?E(i):u(i);if(s)for(const l in s)n[l]=s[l]}return n}else{if(a(t))return t;if(m(t))return t}}const y=/;(?![^(]*\))/g,A=/:(.+)/;function E(t){const n={};return t.split(y).forEach(e=>{if(e){const i=e.split(A);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function b(t){let n="";if(a(t))n=t;else if(f(t))for(let e=0;e<t.length;e++){const i=b(t[e]);i&&(n+=i+" ")}else if(m(t))for(const e in t)t[e]&&(n+=e+" ");return n.trim()}const M=t=>a(t)?t:t==null?"":f(t)||m(t)&&(t.toString===h||!g(t.toString))?JSON.stringify(t,z,2):String(t),z=(t,n)=>n&&n.__v_isRef?z(t,n.value):L(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((e,[i,s])=>(e[`${i} =>`]=s,e),{})}:P(n)?{[`Set(${n.size})`]:[...n.values()]}:m(n)&&!f(n)&&!K(n)?String(n):n,B=[],$=/^on[^a-z]/,D=t=>$.test(t),R=Object.assign,f=Array.isArray,L=t=>C(t)==="[object Map]",P=t=>C(t)==="[object Set]",g=t=>typeof t=="function",a=t=>typeof t=="string",m=t=>t!==null&&typeof t=="object",h=Object.prototype.toString,C=t=>h.call(t),K=t=>C(t)==="[object Object]";function N(t){return j(t)?N(t.__v_raw):!!(t&&t.__v_isReactive)}function j(t){return!!(t&&t.__v_isReadonly)}function O(t){return N(t)||j(t)}function Y(t){return!!(t&&t.__v_isRef===!0)}let p=null,w=null;const H=t=>t.__isSuspense;function J(t){return g(t)?{setup:t,name:t.name}:t}const U=t=>t.__isTeleport,W=Symbol(),V=Symbol(void 0),q=Symbol(void 0),G=Symbol(void 0),S=[];let _=null;function Q(t=!1){S.push(_=t?null:[])}function X(){S.pop(),_=S[S.length-1]||null}function Z(t){return t.dynamicChildren=_||B,X(),_&&_.push(t),t}function v(t,n,e,i,s,l){return Z(x(t,n,e,i,s,l,!0))}function tt(t){return t?t.__v_isVNode===!0:!1}const I="__vInternal",T=({key:t})=>t!=null?t:null,d=({ref:t,ref_key:n,ref_for:e})=>t!=null?a(t)||Y(t)||g(t)?{i:p,r:t,k:n,f:!!e}:t:null;function x(t,n=null,e=null,i=0,s=null,l=t===V?0:1,r=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&T(n),ref:n&&d(n),scopeId:w,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return o?(F(c,e),l&128&&t.normalize(c)):e&&(c.shapeFlag|=a(e)?8:16),!r&&_&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&_.push(c),c}const nt=et;function et(t,n=null,e=null,i=0,s=null,l=!1){if((!t||t===W)&&(t=G),tt(t)){const o=k(t,n,!0);return e&&F(o,e),o}if(ct(t)&&(t=t.__vccOpts),n){n=st(n);let{class:o,style:c}=n;o&&!a(o)&&(n.class=b(o)),m(c)&&(O(c)&&!f(c)&&(c=R({},c)),n.style=u(c))}const r=a(t)?1:H(t)?128:U(t)?64:m(t)?4:g(t)?2:0;return x(t,n,e,i,s,r,l,!0)}function st(t){return t?O(t)||I in t?R({},t):t:null}function k(t,n,e=!1){const{props:i,ref:s,patchFlag:l,children:r}=t,o=n?lt(i||{},n):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&T(o),ref:n&&n.ref?e&&s?f(s)?s.concat(d(n)):[s,d(n)]:d(n):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==V?l===-1?16:l|16:l,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&k(t.ssContent),ssFallback:t.ssFallback&&k(t.ssFallback),el:t.el,anchor:t.anchor}}function it(t=" ",n=0){return nt(q,null,t,n)}function F(t,n){let e=0;const{shapeFlag:i}=t;if(n==null)n=null;else if(f(n))e=16;else if(typeof n=="object")if(i&65){const s=n.default;s&&(s._c&&(s._d=!1),F(t,s()),s._c&&(s._d=!0));return}else{e=32;const s=n._;!s&&!(I in n)?n._ctx=p:s===3&&p&&(p.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else g(n)?(n={default:n,_ctx:p},e=32):(n=String(n),i&64?(e=16,n=[it(n)]):e=8);t.children=n,t.shapeFlag|=e}function lt(...t){const n={};for(let e=0;e<t.length;e++){const i=t[e];for(const s in i)if(s==="class")n.class!==i.class&&(n.class=b([n.class,i.class]));else if(s==="style")n.style=u([n.style,i.style]);else if(D(s)){const l=n[s],r=i[s];r&&l!==r&&!(f(l)&&l.includes(r))&&(n[s]=l?[].concat(l,r):r)}else s!==""&&(n[s]=i[s])}return n}function ct(t){return g(t)&&"__vccOpts"in t}const ot=J({props:{title:null,color:null,size:null},setup(t){return(n,e)=>(Q(),v("div",{class:"lc-title",style:u({color:t.color,fontSize:`${t.size}px`})},M(t.title),5))}});var ut="",rt={render:ot,editorProps:{title:{type:"string",defaultValue:"Hello World"},color:{type:"color",defaultValue:"#333"},size:{type:"number",defaultValue:16}}};return rt});

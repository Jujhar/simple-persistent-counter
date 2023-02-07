const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};z();function A(){}function F(e){return e()}function D(){return Object.create(null)}function C(e){e.forEach(F)}function G(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function K(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function k(){return R(" ")}function U(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function V(e){return function(t){return t.preventDefault(),e.call(this,t)}}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function W(e){return Array.from(e.childNodes)}function v(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let q;function S(e){q=e}const x=[],$=[],E=[],B=[],X=Promise.resolve();let M=!1;function Z(){M||(M=!0,X.then(Y))}function N(e){E.push(e)}const j=new Set;let L=0;function Y(){const e=q;do{for(;L<x.length;){const t=x[L];L++,S(t),ee(t.$$)}for(S(null),x.length=0,L=0;$.length;)$.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];j.has(n)||(j.add(n),n())}E.length=0}while(x.length);for(;B.length;)B.pop()();M=!1,j.clear(),S(e)}function ee(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const te=new Set;function ne(e,t){e&&e.i&&(te.delete(e),e.i(t))}function re(e,t,n,s){const{fragment:r,on_mount:l,on_destroy:c,after_update:i}=e.$$;r&&r.m(t,n),s||N(()=>{const d=l.map(F).filter(G);c?c.push(...d):C(d),e.$$.on_mount=[]}),i.forEach(N)}function oe(e,t){const n=e.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&(x.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(e,t,n,s,r,l,c,i=[-1]){const d=q;S(e);const o=e.$$={fragment:null,ctx:null,props:l,update:A,not_equal:r,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:D(),dirty:i,skip_bound:!1,root:t.target||d.$$.root};c&&c(o.root);let a=!1;if(o.ctx=n?n(e,t.props||{},(u,h,..._)=>{const y=_.length?_[0]:h;return o.ctx&&r(o.ctx[u],o.ctx[u]=y)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](y),a&&se(e,u)),h}):[],o.update(),a=!0,C(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const u=W(t.target);o.fragment&&o.fragment.l(u),u.forEach(w)}else o.fragment&&o.fragment.c();t.intro&&ne(e.$$.fragment),re(e,t.target,t.anchor,t.customElement),Y()}S(d)}class ce{$destroy(){oe(this,1),this.$destroy=A}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ie(e){let t,n,s,r,l,c,i,d,o,a,u,h,_,y,P,T,I,O,H;return document.title=t="Count "+e[1],{c(){n=m("meta"),s=m("html"),r=k(),l=m("html"),c=m("body"),i=m("div"),d=m("center"),o=m("h1"),a=k(),u=m("input"),h=k(),_=m("br"),y=k(),P=m("br"),T=k(),I=m("div"),I.innerHTML=`<br/> 

<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/> 
<br/>`,b(n,"name","robots"),b(n,"content","noindex nofollow"),b(s,"lang","en"),b(o,"class","text-3xl"),v(o,"margin-bottom","30px"),v(o,"background-color","#f0756e"),b(o,"title",e[1]),b(u,"active",""),u.value="Y",b(u,"title","Ignore this"),b(u,"class","svelte-jl6q2q"),b(i,"class","mb-10"),v(c,"background-color",e[0]),b(c,"class","svelte-jl6q2q"),b(l,"data-theme","retro"),b(l,"lang","en")},m(p,g){f(document.head,n),f(document.head,s),K(p,r,g),K(p,l,g),f(l,c),f(c,i),f(i,d),f(d,o),o.innerHTML=e[2],f(i,a),f(i,u),f(i,h),f(i,_),f(i,y),f(i,P),f(c,T),f(c,I),O||(H=U(window,"keydown",V(e[3])),O=!0)},p(p,[g]){g&2&&t!==(t="Count "+p[1])&&(document.title=t),g&4&&(o.innerHTML=p[2]),g&2&&b(o,"title",p[1]),g&1&&v(c,"background-color",p[0])},i:A,o:A,d(p){w(n),w(s),p&&w(r),p&&w(l),O=!1,H()}}}function ae(e,t,n){let s="rgb(24,39,20)",r=0,l=0,c=0,i="";if(localStorage.getItem("state")!==null){r=localStorage.getItem("state"),c=localStorage.getItem("state"),l="";for(let o=0;o<r;o++)o>=10&&o<=20||o>=30&&o<=32||o>=66&&o<101||o>=199?i="filter: contrast(0.5);":i="",l+="<img style='display: inline;height: 30px;"+i+"' src='https://raw.githubusercontent.com/Silbad/pixa/main/icons/bird.svg' />"}function d(o){switch(o.keyCode){case 13:n(1,r++,r);break;case 38:case 87:case 68:case 73:case 76:case 32:case 175:case 221:n(1,r++,r);break;case 40:case 83:case 75:case 74:case 8:case 46:case 174:case 219:n(1,r--,r);break;case 19:case 7:n(1,r=c);break;case 48:case 82:n(1,r=0);break;case 37:case 65:n(1,r--,r);break;case 39:n(1,r++,r);break}localStorage.setItem("state",r),n(2,l="");for(let a=0;a<r;a++)a>=10&&a<=19||a>=30&&a<=32||a>=65&&a<100||a>=199?i="filter: contrast(0.5);":i="",n(2,l+="<img style='display: inline;height: 30px;"+i+"' src='https://raw.githubusercontent.com/Silbad/pixa/main/icons/bird.svg' />");console.log(o.keyCode),r.toString().includes(5)||r.toString().includes(7)?n(0,s="#256e11"):r.toString().includes(8)?n(0,s="#6b7a66"):r.toString().includes(9)?n(0,s="#464746"):n(0,s="rgb(24,39,20)"),localStorage.setItem("state",r)}return[s,r,l,d]}class ue extends ce{constructor(t){super(),le(this,t,ae,ie,J,{})}}new ue({target:document.body});

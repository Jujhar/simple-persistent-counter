const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}};Q();function C(){}function G(e){return e()}function T(){return Object.create(null)}function L(e){e.forEach(G)}function R(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function V(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function D(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function k(){return W(" ")}function K(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function X(e){return function(t){return t.preventDefault(),e.call(this,t)}}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Y(e){return Array.from(e.childNodes)}function Z(e,t){e.value=t==null?"":t}function w(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let q;function x(e){q=e}const v=[],B=[],E=[],F=[],$=Promise.resolve();let M=!1;function ee(){M||(M=!0,$.then(J))}function N(e){E.push(e)}const j=new Set;let A=0;function J(){const e=q;do{for(;A<v.length;){const t=v[A];A++,x(t),te(t.$$)}for(x(null),v.length=0,A=0;B.length;)B.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];j.has(n)||(j.add(n),n())}E.length=0}while(v.length);for(;F.length;)F.pop()();M=!1,j.clear(),x(e)}function te(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const ne=new Set;function re(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function oe(e,t,n,s){const{fragment:r,on_mount:c,on_destroy:i,after_update:u}=e.$$;r&&r.m(t,n),s||N(()=>{const d=c.map(G).filter(R);i?i.push(...d):L(d),e.$$.on_mount=[]}),u.forEach(N)}function le(e,t){const n=e.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&(v.push(e),ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ce(e,t,n,s,r,c,i,u=[-1]){const d=q;x(e);const o=e.$$={fragment:null,ctx:null,props:c,update:C,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:T(),dirty:u,skip_bound:!1,root:t.target||d.$$.root};i&&i(o.root);let a=!1;if(o.ctx=n?n(e,t.props||{},(l,h,..._)=>{const y=_.length?_[0]:h;return o.ctx&&r(o.ctx[l],o.ctx[l]=y)&&(!o.skip_bound&&o.bound[l]&&o.bound[l](y),a&&se(e,l)),h}):[],o.update(),a=!0,L(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const l=Y(t.target);o.fragment&&o.fragment.l(l),l.forEach(S)}else o.fragment&&o.fragment.c();t.intro&&re(e.$$.fragment),oe(e,t.target,t.anchor,t.customElement),J()}x(d)}class ie{$destroy(){le(this,1),this.$destroy=C}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!V(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ue(e){let t,n,s,r,c,i,u,d,o,a,l,h,_,y,H,P,I,O,z;return document.title=t="Count "+e[1],{c(){n=m("meta"),s=m("html"),r=k(),c=m("html"),i=m("body"),u=m("div"),d=m("center"),o=m("h1"),a=k(),l=m("input"),h=k(),_=m("br"),y=k(),H=m("br"),P=k(),I=m("div"),I.innerHTML=`<br/> 

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
<br/>`,p(n,"name","robots"),p(n,"content","noindex nofollow"),p(s,"lang","en"),p(o,"class","text-3xl"),w(o,"margin-bottom","30px"),w(o,"background-color","#f0756e"),w(o,"padding","10px"),p(o,"title",e[1]),p(l,"active",""),l.disabled=!0,p(l,"title","Ignore this"),p(l,"class","svelte-jl6q2q"),p(u,"class","mb-10"),w(i,"background-color",e[0]),p(i,"class","svelte-jl6q2q"),p(c,"data-theme","retro"),p(c,"lang","en")},m(b,g){f(document.head,n),f(document.head,s),D(b,r,g),D(b,c,g),f(c,i),f(i,u),f(u,d),f(d,o),o.innerHTML=e[2],f(u,a),f(u,l),Z(l,e[1]),f(u,h),f(u,_),f(u,y),f(u,H),f(i,P),f(i,I),O||(z=[K(window,"keydown",X(e[3])),K(l,"input",e[4])],O=!0)},p(b,[g]){g&2&&t!==(t="Count "+b[1])&&(document.title=t),g&4&&(o.innerHTML=b[2]),g&2&&p(o,"title",b[1]),g&2&&l.value!==b[1]&&Z(l,b[1]),g&1&&w(i,"background-color",b[0])},i:C,o:C,d(b){S(n),S(s),b&&S(r),b&&S(c),O=!1,L(z)}}}function ae(e,t,n){let s="rgb(24,39,20)",r=0,c=0,i=0,u="";if(localStorage.getItem("state")!==null){r=localStorage.getItem("state"),i=localStorage.getItem("state"),c="";for(let a=0;a<r;a++)a>=10&&a<=20||a>=30&&a<=32||a>=66&&a<101||a>=199?u="filter: contrast(0.5);":u="",c+="<img style='display: inline;height: 30px;"+u+"' src='https://icons.veryicon.com/png/Holiday/Swarm%20App%20Sticker/Zzz.png' />"}function d(a){switch(a.keyCode){case 13:n(1,r++,r);break;case 38:case 87:case 68:case 73:case 76:case 32:case 175:case 221:n(1,r++,r);break;case 40:case 83:case 75:case 74:case 8:case 46:case 174:case 219:n(1,r--,r);break;case 19:case 7:n(1,r=i);break;case 48:case 82:n(1,r=0);break;case 37:case 65:n(1,r--,r);break;case 39:n(1,r++,r);break}localStorage.setItem("state",r),n(2,c="");for(let l=0;l<r;l++)l>=10&&l<=19||l>=30&&l<=32||l>=65&&l<100||l>=199?u="filter: contrast(0.5);":u="",n(2,c+="<img style='display: inline;height: 30px;"+u+"' src='https://icons.veryicon.com/png/Holiday/Swarm%20App%20Sticker/Zzz.png' />");console.log(a.keyCode),r.toString().includes(5)||r.toString().includes(7)?n(0,s="#256e11"):r.toString().includes(8)?n(0,s="#6b7a66"):r.toString().includes(9)?n(0,s="#464746"):n(0,s="rgb(24,39,20)"),localStorage.setItem("state",r)}function o(){r=this.value,n(1,r)}return[s,r,c,d,o]}class fe extends ie{constructor(t){super(),ce(this,t,ae,ue,U,{})}}new fe({target:document.body});

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=a(l);fetch(l.href,i)}})();var J,g,$e,P,he,Te,Ce,De,ce,re,ae,Ie,q={},Q=[],Ye=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;function D(t,r){for(var a in r)t[a]=r[a];return t}function oe(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Pe(t,r,a){var n,l,i,s={};for(i in r)i=="key"?n=r[i]:i=="ref"?l=r[i]:s[i]=r[i];if(arguments.length>2&&(s.children=arguments.length>3?J.call(arguments,2):a),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)s[i]===void 0&&(s[i]=t.defaultProps[i]);return B(t,s,n,l,null)}function B(t,r,a,n,l){var i={type:t,props:r,key:a,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:l??++$e,__i:-1,__u:0};return l==null&&g.vnode!=null&&g.vnode(i),i}function j(t){return t.children}function z(t,r){this.props=t,this.context=r}function F(t,r){if(r==null)return t.__?F(t.__,t.__i+1):null;for(var a;r<t.__k.length;r++)if((a=t.__k[r])!=null&&a.__e!=null)return a.__e;return typeof t.type=="function"?F(t):null}function Xe(t){if(t.__P&&t.__d){var r=t.__v,a=r.__e,n=[],l=[],i=D({},r);i.__v=r.__v+1,g.vnode&&g.vnode(i),de(t.__P,i,r,t.__n,t.__P.namespaceURI,32&r.__u?[a]:null,n,a??F(r),!!(32&r.__u),l),i.__v=r.__v,i.__.__k[i.__i]=i,Le(n,i,l),r.__e=r.__=null,i.__e!=a&&Me(i)}}function Me(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(r){if(r!=null&&r.__e!=null)return t.__e=t.__c.base=r.__e}),Me(t)}function ie(t){(!t.__d&&(t.__d=!0)&&P.push(t)&&!G.__r++||he!=g.debounceRendering)&&((he=g.debounceRendering)||Te)(G)}function G(){try{for(var t,r=1;P.length;)P.length>r&&P.sort(Ce),t=P.shift(),r=P.length,Xe(t)}finally{P.length=G.__r=0}}function Ee(t,r,a,n,l,i,s,o,p,d,u){var c,_,h,y,x,w,f,m=n&&n.__k||Q,b=r.length;for(p=Ze(a,r,m,p,b),c=0;c<b;c++)(h=a.__k[c])!=null&&(_=h.__i!=-1&&m[h.__i]||q,h.__i=c,w=de(t,h,_,l,i,s,o,p,d,u),y=h.__e,h.ref&&_.ref!=h.ref&&(_.ref&&me(_.ref,null,h),u.push(h.ref,h.__c||y,h)),x==null&&y!=null&&(x=y),(f=!!(4&h.__u))||_.__k===h.__k?p=je(h,p,t,f):typeof h.type=="function"&&w!==void 0?p=w:y&&(p=y.nextSibling),h.__u&=-7);return a.__e=x,p}function Ze(t,r,a,n,l){var i,s,o,p,d,u=a.length,c=u,_=0;for(t.__k=new Array(l),i=0;i<l;i++)(s=r[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=t.__k[i]=B(null,s,null,null,null):Y(s)?s=t.__k[i]=B(j,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=t.__k[i]=B(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):t.__k[i]=s,p=i+_,s.__=t,s.__b=t.__b+1,o=null,(d=s.__i=et(s,a,p,c))!=-1&&(c--,(o=a[d])&&(o.__u|=2)),o==null||o.__v==null?(d==-1&&(l>u?_--:l<u&&_++),typeof s.type!="function"&&(s.__u|=4)):d!=p&&(d==p-1?_--:d==p+1?_++:(d>p?_--:_++,s.__u|=4))):t.__k[i]=null;if(c)for(i=0;i<u;i++)(o=a[i])!=null&&!(2&o.__u)&&(o.__e==n&&(n=F(o)),Fe(o,o));return n}function je(t,r,a,n){var l,i;if(typeof t.type=="function"){for(l=t.__k,i=0;l&&i<l.length;i++)l[i]&&(l[i].__=t,r=je(l[i],r,a,n));return r}t.__e!=r&&(n&&(r&&t.type&&!r.parentNode&&(r=F(t)),a.insertBefore(t.__e,r||null)),r=t.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function et(t,r,a,n){var l,i,s,o=t.key,p=t.type,d=r[a],u=d!=null&&(2&d.__u)==0;if(d===null&&o==null||u&&o==d.key&&p==d.type)return a;if(n>(u?1:0)){for(l=a-1,i=a+1;l>=0||i<r.length;)if((d=r[s=l>=0?l--:i++])!=null&&!(2&d.__u)&&o==d.key&&p==d.type)return s}return-1}function ue(t,r,a){r[0]=="-"?t.setProperty(r,a??""):t[r]=a==null?"":typeof a!="number"||Ye.test(r)?a:a+"px"}function W(t,r,a,n,l){var i,s;e:if(r=="style")if(typeof a=="string")t.style.cssText=a;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(r in n)a&&r in a||ue(t.style,r,"");if(a)for(r in a)n&&a[r]==n[r]||ue(t.style,r,a[r])}else if(r[0]=="o"&&r[1]=="n")i=r!=(r=r.replace(De,"$1")),s=r.toLowerCase(),r=s in t||r=="onFocusOut"||r=="onFocusIn"?s.slice(2):r.slice(2),t.l||(t.l={}),t.l[r+i]=a,a?n?a.u=n.u:(a.u=ce,t.addEventListener(r,i?ae:re,i)):t.removeEventListener(r,i?ae:re,i);else{if(l=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in t)try{t[r]=a??"";break e}catch{}typeof a=="function"||(a==null||a===!1&&r[4]!="-"?t.removeAttribute(r):t.setAttribute(r,r=="popover"&&a==1?"":a))}}function _e(t){return function(r){if(this.l){var a=this.l[r.type+t];if(r.t==null)r.t=ce++;else if(r.t<a.u)return;return a(g.event?g.event(r):r)}}}function de(t,r,a,n,l,i,s,o,p,d){var u,c,_,h,y,x,w,f,m,b,T,k,Z,E,U,S=r.type;if(r.constructor!==void 0)return null;128&a.__u&&(p=!!(32&a.__u),i=[o=r.__e=a.__e]),(u=g.__b)&&u(r);e:if(typeof S=="function")try{if(f=r.props,m=S.prototype&&S.prototype.render,b=(u=S.contextType)&&n[u.__c],T=u?b?b.props.value:u.__:n,a.__c?w=(c=r.__c=a.__c).__=c.__E:(m?r.__c=c=new S(f,T):(r.__c=c=new z(f,T),c.constructor=S,c.render=rt),b&&b.sub(c),c.state||(c.state={}),c.__n=n,_=c.__d=!0,c.__h=[],c._sb=[]),m&&c.__s==null&&(c.__s=c.state),m&&S.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=D({},c.__s)),D(c.__s,S.getDerivedStateFromProps(f,c.__s))),h=c.props,y=c.state,c.__v=r,_)m&&S.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),m&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(m&&S.getDerivedStateFromProps==null&&f!==h&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(f,T),r.__v==a.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(f,c.__s,T)===!1){r.__v!=a.__v&&(c.props=f,c.state=c.__s,c.__d=!1),r.__e=a.__e,r.__k=a.__k,r.__k.some(function(A){A&&(A.__=r)}),Q.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(f,c.__s,T),m&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(h,y,x)})}if(c.context=T,c.props=f,c.__P=t,c.__e=!1,k=g.__r,Z=0,m)c.state=c.__s,c.__d=!1,k&&k(r),u=c.render(c.props,c.state,c.context),Q.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,k&&k(r),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++Z<25);c.state=c.__s,c.getChildContext!=null&&(n=D(D({},n),c.getChildContext())),m&&!_&&c.getSnapshotBeforeUpdate!=null&&(x=c.getSnapshotBeforeUpdate(h,y)),E=u!=null&&u.type===j&&u.key==null?Ue(u.props.children):u,o=Ee(t,Y(E)?E:[E],r,a,n,l,i,s,o,p,d),c.base=r.__e,r.__u&=-161,c.__h.length&&s.push(c),w&&(c.__E=c.__=null)}catch(A){if(r.__v=null,p||i!=null)if(A.then){for(r.__u|=p?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;i[i.indexOf(o)]=null,r.__e=o}else{for(U=i.length;U--;)oe(i[U]);ne(r)}else r.__e=a.__e,r.__k=a.__k,A.then||ne(r);g.__e(A,r,a)}else i==null&&r.__v==a.__v?(r.__k=a.__k,r.__e=a.__e):o=r.__e=tt(a.__e,r,a,n,l,i,s,p,d);return(u=g.diffed)&&u(r),128&r.__u?void 0:o}function ne(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(ne))}function Le(t,r,a){for(var n=0;n<a.length;n++)me(a[n],a[++n],a[++n]);g.__c&&g.__c(r,t),t.some(function(l){try{t=l.__h,l.__h=[],t.some(function(i){i.call(l)})}catch(i){g.__e(i,l.__v)}})}function Ue(t){return typeof t!="object"||t==null||t.__b>0?t:Y(t)?t.map(Ue):D({},t)}function tt(t,r,a,n,l,i,s,o,p){var d,u,c,_,h,y,x,w=a.props||q,f=r.props,m=r.type;if(m=="svg"?l="http://www.w3.org/2000/svg":m=="math"?l="http://www.w3.org/1998/Math/MathML":l||(l="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((h=i[d])&&"setAttribute"in h==!!m&&(m?h.localName==m:h.nodeType==3)){t=h,i[d]=null;break}}if(t==null){if(m==null)return document.createTextNode(f);t=document.createElementNS(l,m,f.is&&f),o&&(g.__m&&g.__m(r,i),o=!1),i=null}if(m==null)w===f||o&&t.data==f||(t.data=f);else{if(i=i&&J.call(t.childNodes),!o&&i!=null)for(w={},d=0;d<t.attributes.length;d++)w[(h=t.attributes[d]).name]=h.value;for(d in w)h=w[d],d=="dangerouslySetInnerHTML"?c=h:d=="children"||d in f||d=="value"&&"defaultValue"in f||d=="checked"&&"defaultChecked"in f||W(t,d,null,h,l);for(d in f)h=f[d],d=="children"?_=h:d=="dangerouslySetInnerHTML"?u=h:d=="value"?y=h:d=="checked"?x=h:o&&typeof h!="function"||w[d]===h||W(t,d,h,w[d],l);if(u)o||c&&(u.__html==c.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),r.__k=[];else if(c&&(t.innerHTML=""),Ee(r.type=="template"?t.content:t,Y(_)?_:[_],r,a,n,m=="foreignObject"?"http://www.w3.org/1999/xhtml":l,i,s,i?i[0]:a.__k&&F(a,0),o,p),i!=null)for(d=i.length;d--;)oe(i[d]);o||(d="value",m=="progress"&&y==null?t.removeAttribute("value"):y!=null&&(y!==t[d]||m=="progress"&&!y||m=="option"&&y!=w[d])&&W(t,d,y,w[d],l),d="checked",x!=null&&x!=t[d]&&W(t,d,x,w[d],l))}return t}function me(t,r,a){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&r==null||(t.__u=t(r))}else t.current=r}catch(l){g.__e(l,a)}}function Fe(t,r,a){var n,l;if(g.unmount&&g.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||me(n,null,r)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){g.__e(i,r)}n.base=n.__P=null}if(n=t.__k)for(l=0;l<n.length;l++)n[l]&&Fe(n[l],r,a||typeof t.type!="function");a||oe(t.__e),t.__c=t.__=t.__e=void 0}function rt(t,r,a){return this.constructor(t,a)}function at(t,r,a){var n,l,i,s;r==document&&(r=document.documentElement),g.__&&g.__(t,r),l=(n=!1)?null:r.__k,i=[],s=[],de(r,t=r.__k=Pe(j,null,[t]),l||q,q,r.namespaceURI,l?null:r.firstChild?J.call(r.childNodes):null,i,l?l.__e:r.firstChild,n,s),Le(i,t,s)}function He(t){function r(a){var n,l;return this.getChildContext||(n=new Set,(l={})[r.__c]=this,this.getChildContext=function(){return l},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(i){this.props.value!=i.value&&n.forEach(function(s){s.__e=!0,ie(s)})},this.sub=function(i){n.add(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){n&&n.delete(i),s&&s.call(i)}}),a.children}return r.__c="__cC"+Ie++,r.__=t,r.Provider=r.__l=(r.Consumer=function(a,n){return a.children(n)}).contextType=r,r}J=Q.slice,g={__e:function(t,r,a,n){for(var l,i,s;r=r.__;)if((l=r.__c)&&!l.__)try{if((i=l.constructor)&&i.getDerivedStateFromError!=null&&(l.setState(i.getDerivedStateFromError(t)),s=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(t,n||{}),s=l.__d),s)return l.__E=l}catch(o){t=o}throw t}},$e=0,z.prototype.setState=function(t,r){var a;a=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=D({},this.state),typeof t=="function"&&(t=t(D({},a),this.props)),t&&D(a,t),t!=null&&this.__v&&(r&&this._sb.push(r),ie(this))},z.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ie(this))},z.prototype.render=j,P=[],Te=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ce=function(t,r){return t.__v.__b-r.__v.__b},G.__r=0,De=/(PointerCapture)$|Capture$/i,ce=0,re=_e(!1),ae=_e(!0),Ie=0;var it=0;function e(t,r,a,n,l,i){r||(r={});var s,o,p=r;if("ref"in p)for(o in p={},r)o=="ref"?s=r[o]:p[o]=r[o];var d={type:t,props:p,key:a,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--it,__i:-1,__u:0,__source:l,__self:i};if(typeof t=="function"&&(s=t.defaultProps))for(o in s)p[o]===void 0&&(p[o]=s[o]);return g.vnode&&g.vnode(d),d}var H,v,ee,fe,K=0,We=[],N=g,ge=N.__b,ve=N.__r,be=N.diffed,we=N.__c,Ne=N.unmount,ye=N.__;function X(t,r){N.__h&&N.__h(v,t,K||r),K=0;var a=v.__H||(v.__H={__:[],__h:[]});return t>=a.__.length&&a.__.push({}),a.__[t]}function le(t){return K=1,nt(qe,t)}function nt(t,r,a){var n=X(H++,2);if(n.t=t,!n.__c&&(n.__=[qe(void 0,r),function(o){var p=n.__N?n.__N[0]:n.__[0],d=n.t(p,o);p!==d&&(n.__N=[d,n.__[1]],n.__c.setState({}))}],n.__c=v,!v.__f)){var l=function(o,p,d){if(!n.__c.__H)return!0;var u=n.__c.__H.__.filter(function(_){return _.__c});if(u.every(function(_){return!_.__N}))return!i||i.call(this,o,p,d);var c=n.__c.props!==o;return u.some(function(_){if(_.__N){var h=_.__[0];_.__=_.__N,_.__N=void 0,h!==_.__[0]&&(c=!0)}}),i&&i.call(this,o,p,d)||c};v.__f=!0;var i=v.shouldComponentUpdate,s=v.componentWillUpdate;v.componentWillUpdate=function(o,p,d){if(this.__e){var u=i;i=void 0,l(o,p,d),i=u}s&&s.call(this,o,p,d)},v.shouldComponentUpdate=l}return n.__N||n.__}function Oe(t,r){var a=X(H++,3);!N.__s&&Ve(a.__H,r)&&(a.__=t,a.u=r,v.__H.__h.push(a))}function te(t){return K=5,Be(function(){return{current:t}},[])}function Be(t,r){var a=X(H++,7);return Ve(a.__H,r)&&(a.__=t(),a.__H=r,a.__h=t),a.__}function ze(t){var r=v.context[t.__c],a=X(H++,9);return a.c=t,r?(a.__==null&&(a.__=!0,r.sub(v)),r.props.value):t.__}function lt(){for(var t;t=We.shift();){var r=t.__H;if(t.__P&&r)try{r.__h.some(V),r.__h.some(se),r.__h=[]}catch(a){r.__h=[],N.__e(a,t.__v)}}}N.__b=function(t){v=null,ge&&ge(t)},N.__=function(t,r){t&&r.__k&&r.__k.__m&&(t.__m=r.__k.__m),ye&&ye(t,r)},N.__r=function(t){ve&&ve(t),H=0;var r=(v=t.__c).__H;r&&(ee===v?(r.__h=[],v.__h=[],r.__.some(function(a){a.__N&&(a.__=a.__N),a.u=a.__N=void 0})):(r.__h.some(V),r.__h.some(se),r.__h=[],H=0)),ee=v},N.diffed=function(t){be&&be(t);var r=t.__c;r&&r.__H&&(r.__H.__h.length&&(We.push(r)!==1&&fe===N.requestAnimationFrame||((fe=N.requestAnimationFrame)||st)(lt)),r.__H.__.some(function(a){a.u&&(a.__H=a.u),a.u=void 0})),ee=v=null},N.__c=function(t,r){r.some(function(a){try{a.__h.some(V),a.__h=a.__h.filter(function(n){return!n.__||se(n)})}catch(n){r.some(function(l){l.__h&&(l.__h=[])}),r=[],N.__e(n,a.__v)}}),we&&we(t,r)},N.unmount=function(t){Ne&&Ne(t);var r,a=t.__c;a&&a.__H&&(a.__H.__.some(function(n){try{V(n)}catch(l){r=l}}),a.__H=void 0,r&&N.__e(r,a.__v))};var xe=typeof requestAnimationFrame=="function";function st(t){var r,a=function(){clearTimeout(n),xe&&cancelAnimationFrame(r),setTimeout(t)},n=setTimeout(a,35);xe&&(r=requestAnimationFrame(a))}function V(t){var r=v,a=t.__c;typeof a=="function"&&(t.__c=void 0,a()),v=r}function se(t){var r=v;t.__c=t.__(),v=r}function Ve(t,r){return!t||t.length!==r.length||r.some(function(a,n){return a!==t[n]})}function qe(t,r){return typeof r=="function"?r(t):r}function O(){return typeof window>"u"?"/":new URL(window.location.href).pathname.replace(/\/+$/g,"")||"/"}function ct(t){if(typeof window>"u")return t||"/";const r=new URL(t,window.location.origin);return`${r.pathname.replace(/\/+$/g,"")||"/"}${r.search}${r.hash}`}function ot(t){return t.metaKey||t.ctrlKey||t.shiftKey||t.altKey}const Qe=He({path:"/",navigate:()=>{}});function dt({children:t}){const[r,a]=le(O());Oe(()=>{const l=()=>{a(O())};return window.addEventListener("popstate",l),()=>{window.removeEventListener("popstate",l)}},[]);const n=Be(()=>({path:r,navigate(l,i=!1){const s=ct(l),o=`${O()}${window.location.search}${window.location.hash}`;s!==o&&(i?window.history.replaceState(null,"",s):window.history.pushState(null,"",s)),a(O()),window.scrollTo(0,0)}}),[r]);return e(Qe.Provider,{value:n,children:t})}function pe(){return ze(Qe)}function R({to:t,href:r,onClick:a,replace:n=!1,target:l,rel:i,children:s,...o}){const{navigate:p}=pe(),d=t||r||"/";return e("a",{href:d,onClick:c=>{a==null||a(c),!(c.defaultPrevented||c.button!==0||ot(c)||l&&l!=="_self"||new URL(d,window.location.origin).origin!==window.location.origin)&&(c.preventDefault(),p(d,n))},target:l,rel:i,...o,children:s})}const mt=7777,Ge={meta:{version:"1.0"},project:{name:"",repo:"",created_at:""},tasks:[],ci:{status:"unknown",last_run:"",workflow_url:""},nudges:[],commits:[],reviews:[],init_commit:""},Ke=He({state:Ge,connected:!1});function pt({children:t}){const[r,a]=le(Ge),[n,l]=le(!1),i=te(0),s=te(null),o=te(null);return Oe(()=>{let p=!1;const d=async()=>{try{const c=await fetch("/api/state");if(!c.ok)return;const _=await c.json();p||a(_)}catch{}},u=()=>{if(p)return;const c=new WebSocket(`ws://localhost:${mt}/ws`);s.current=c,c.onopen=()=>{i.current=0,p||l(!0)},c.onmessage=_=>{try{const h=JSON.parse(_.data);p||a(h)}catch{}},c.onerror=()=>{p||l(!1)},c.onclose=()=>{p||(l(!1),!(i.current>=5)&&(i.current+=1,o.current=window.setTimeout(u,2e3)))}};return d(),u(),()=>{p=!0,l(!1),o.current&&window.clearTimeout(o.current),s.current&&s.current.close()}},[]),Pe(Ke.Provider,{value:{state:r,connected:n}},t)}function C(){return ze(Ke)}const ht=[{href:"/",label:"Dashboard"},{href:"/issues",label:"Issues"},{href:"/ci",label:"Actions"},{href:"/nudges",label:"Nudges"},{href:"/timetrack",label:"Time"},{href:"/commits",label:"Commits"},{href:"/reviews",label:"Reviews"},{href:"/settings",label:"Settings"}];function ut(t){return{padding:"12px 16px",borderRadius:"14px",fontWeight:700,color:t?"#63a5ff":"#c2cce0",background:t?"rgba(47, 129, 247, 0.16)":"transparent",border:t?"1px solid rgba(47, 129, 247, 0.22)":"1px solid transparent"}}function _t(){var l;const{connected:t,state:r}=C(),{path:a}=pe(),n=(((l=r.project)==null?void 0:l.name)||"DD").split(/[\s-]+/).filter(Boolean).slice(0,2).map(i=>{var s;return(s=i[0])==null?void 0:s.toUpperCase()}).join("")||"DD";return e("header",{style:{position:"sticky",top:0,zIndex:20,borderBottom:"1px solid rgba(122, 147, 191, 0.14)",background:"rgba(10, 16, 27, 0.9)",backdropFilter:"blur(14px)"},children:e("div",{style:{width:"min(1560px, calc(100% - 48px))",margin:"0 auto",display:"flex",alignItems:"center",gap:"22px",padding:"14px 0",flexWrap:"wrap"},children:[e(R,{to:"/",style:{display:"flex",alignItems:"center",gap:"14px",marginRight:"8px"},children:[e("span",{style:{width:"42px",height:"42px",borderRadius:"13px",display:"grid",placeItems:"center",fontWeight:800,background:"linear-gradient(180deg, #2f81f7, #1f6bd8)",color:"white",boxShadow:"0 10px 24px rgba(47, 129, 247, 0.28)"},children:"DD"}),e("div",{children:[e("div",{style:{fontSize:"1.9rem",fontWeight:800,letterSpacing:"-0.03em",color:"#f4f7fb"},children:"DevDive"}),e("div",{style:{color:"#8f9db6",marginTop:"-2px"},children:r.project.name||"Project control room"})]})]}),e("nav",{style:{display:"flex",flexWrap:"wrap",gap:"10px",marginRight:"auto"},children:ht.map(i=>{const s=a===i.href;return e(R,{to:i.href,"aria-current":s?"page":void 0,style:ut(s),children:i.label},i.href)})}),e("div",{style:{minWidth:"280px",flex:"0 1 340px",display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"16px",border:"1px solid rgba(122, 147, 191, 0.16)",background:"#141e31",color:"#8f9db6"},children:[e("span",{style:{fontWeight:800},children:"?"}),e("input",{type:"text",placeholder:"Search issues, tasks...",style:{flex:1,background:"transparent",border:0,outline:"none",color:"#dfe7f5"}}),e("span",{style:{padding:"4px 8px",borderRadius:"10px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",fontSize:"0.8rem"},children:"/"})]}),e("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"14px",background:"rgba(17, 26, 43, 0.88)",border:"1px solid rgba(122, 147, 191, 0.14)",color:"#8f9db6"},children:[e("span",{style:{width:"8px",height:"8px",borderRadius:"999px",background:t?"#2bc48a":"#56657f",boxShadow:t?"0 0 14px rgba(43, 196, 138, 0.5)":"none"}}),t?"Live":"Offline"]}),e("span",{style:{width:"42px",height:"42px",borderRadius:"999px",display:"grid",placeItems:"center",fontWeight:800,color:"#f4f7fb",background:"linear-gradient(180deg, #273652, #172131)",border:"1px solid rgba(122, 147, 191, 0.18)"},children:n})]})]})})}const ke={open:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},todo:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},in_progress:{background:"rgba(47, 129, 247, 0.16)",border:"rgba(47, 129, 247, 0.24)",color:"#7db1ff"},review:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},complete:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},rejected:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},done:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},passing:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},failing:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},pending:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},unknown:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},critical:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},warning:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},info:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},active:{background:"rgba(47, 129, 247, 0.16)",border:"rgba(47, 129, 247, 0.24)",color:"#7db1ff"},manual:{background:"rgba(154, 104, 255, 0.16)",border:"rgba(154, 104, 255, 0.24)",color:"#c7a0ff"}};function $({status:t}){const r=t||"unknown",a=ke[r]||ke.unknown;return e("span",{style:{display:"inline-flex",alignItems:"center",padding:"6px 10px",borderRadius:"999px",background:a.background,border:`1px solid ${a.border}`,color:a.color,fontSize:"0.78rem",fontWeight:700,textTransform:"capitalize",whiteSpace:"nowrap"},children:r.replaceAll("_"," ")})}const ft=72,gt=[{key:"core",title:"Core Features",items:["Plan init from the README, current repo files, and recent commit history.","Re-evaluate GitHub issues from real code changes and update their state.","Detect README changes and update the board when project intent shifts.","Review project drift against the README, codebase, and recent work."]},{key:"workflow",title:"Workflow Features",items:["Refine project intent by updating the README or plan.","Add AI issue guidance with implementation tips and advice.","Add progress check-ins for stale or slow-moving work.","Build a priority list from existing issues and current code state."]},{key:"evaluation",title:"Evaluation Features",items:["Re-evaluate issues incrementally using the last reviewed commit window.","Distinguish todo, in progress, review, rejected, and complete.","Separate ready for approval from actually complete.","Review changed code for poor implementation and queue follow-up work."]}],vt=["README is the primary source of project intent.","Codebase and commit history are used as evidence of progress.","Review should inspect actual files, not just devdive.json.","Sync should keep GitHub issue state and local state aligned."],Je=new Set(["auth","api","database","backend","security"]),Re={todo:"tone-slate",in_progress:"tone-blue",review:"tone-amber",rejected:"tone-rose",complete:"tone-green"},Se={todo:"To Do",in_progress:"In Progress",review:"In Review",rejected:"Rejected",complete:"Complete"};function M(t){const r=new Date(t||"").getTime();return Number.isFinite(r)?r:0}function bt(t){const r=M(t);return r?(Date.now()-r)/36e5:Number.POSITIVE_INFINITY}function wt(t){switch((t||"").toLowerCase()){case"open":return"todo";case"done":return"complete";default:return(t||"todo").toLowerCase()}}function Nt(t){const r={};for(const a of t.commits||[]){const n=a.analysed_at||"",l=a.commit_hash||"";for(const i of a.tasks_progressed||[]){const s=r[i]||{commitCount:0};r[i]={...s,commitCount:s.commitCount+1,lastTouchedAt:n,lastProgressedAt:n,lastCommitHash:l}}for(const i of a.tasks_updated||[]){const s=r[i]||{commitCount:0};r[i]={...s,commitCount:s.commitCount+1,lastTouchedAt:n,lastUpdatedAt:n,lastCommitHash:l}}}return r}function yt(t){const r=t.reviews||[];return r.length>0?r[r.length-1]:null}function xt(t,r,a){const n=wt(t.status);if(n==="rejected"||n==="review"||n==="in_progress")return n;if(n==="complete"){const l=r.lastTouchedAt||"";return!a||M(l)>M(a)?"review":"complete"}return r.lastProgressedAt?"in_progress":"todo"}function kt(t,r,a,n){const l=t.labels||[];return r==="review"?"Code looks implemented, but it still needs a clean review pass before it counts as complete.":a&&r==="in_progress"?"Work started but has gone quiet. Schedule a progress check-in before the issue drifts.":a?"This issue has not moved recently. Re-scope it or reconnect it to the current README intent.":l.some(i=>Je.has((i||"").toLowerCase()))?t.design_notes||"This issue touches a core system path. Validate it against the existing codebase before changing state.":n>0?t.design_notes||"Recent code evidence exists. Use the latest commit window when deciding the next state change.":t.design_notes||"No implementation evidence yet. Start from the current README and repository structure."}function Rt(t){let r=0;return t.workflowStage==="review"?r+=40:t.workflowStage==="in_progress"?r+=28:t.workflowStage==="todo"&&(r+=14),t.stale&&(r+=22),(t.labels||[]).some(a=>Je.has((a||"").toLowerCase()))&&(r+=14),r+=Math.min(Number(t.estimate_hours||0),13),r+=Math.min(t.commitCount||0,6),r}function St(t){return t.workflowStage==="review"?"Ready for approval":t.stale?"Needs check-in":t.workflowStage==="in_progress"?"Active implementation":"Backlog candidate"}function I(t,r="No signal yet"){if(!t)return r;const a=Date.now()-M(t),n=Math.floor(a/6e4);if(n<1)return"Just now";if(n<60)return`${n} minutes ago`;const l=Math.floor(n/60);return l<24?`${l} hours ago`:`${Math.floor(l/24)} days ago`}function At(t){return t?new Date(t).toLocaleString():"Unknown"}function L(t){var x,w,f;const r=yt(t),a=(r==null?void 0:r.reviewed_at)||"",n=Nt(t),l=((x=t.project)==null?void 0:x.created_at)||"",i=(t.commits||[]).filter(m=>a?M(m.analysed_at)>M(a):!0),s=(t.tasks||[]).map(m=>{const b=n[m.id]||{commitCount:0},T=b.lastTouchedAt||"",k=xt(m,b,a),E=k!=="complete"&&k!=="rejected"&&bt(T||l)>=ft,U=b.commitCount||0,S=kt(m,k,E,U),A={...m,workflowStage:k,workflowLabel:Se[k]||Se.todo,workflowTone:Re[k]||Re.todo,lastTouchedAt:T,lastCommitHash:b.lastCommitHash||"",commitCount:U,stale:E,readyForApproval:k==="review",actuallyComplete:k==="complete",nextAction:S};return A.priorityScore=Rt(A),A.prioritySummary=St(A),A}),o={todo:[],in_progress:[],review:[],rejected:[],complete:[]};for(const m of s)o[m.workflowStage]=o[m.workflowStage]||[],o[m.workflowStage].push(m);const p=[...s].filter(m=>m.workflowStage!=="complete"&&m.workflowStage!=="rejected").sort((m,b)=>b.priorityScore-m.priorityScore),d=[...s].filter(m=>m.stale).sort((m,b)=>b.priorityScore-m.priorityScore),u=[...o.review].sort((m,b)=>b.priorityScore-m.priorityScore),c=[...o.complete].sort((m,b)=>M(b.lastTouchedAt)-M(m.lastTouchedAt)),_=[{title:"README Intent",status:t.init_commit?"active":"manual",detail:t.init_commit?"Use the README as the planning baseline and refine it when project intent changes.":"No init baseline recorded yet."},{title:"Repository Evidence",status:s.length>0?"active":"manual",detail:s.length>0?`${s.length} tracked issues are mapped onto the current project state.`:"Run init to generate an issue-backed project plan."},{title:"Recent Commit History",status:(w=t.commits)!=null&&w.length?"active":"manual",detail:(f=t.commits)!=null&&f.length?`${t.commits.length} analysed commits are available as evidence for re-evaluation.`:"No analysed commits yet. The review window will stay empty until code starts moving."}],h=p.slice(0,6).map(m=>({id:m.id||m.title,title:m.title,workflowStage:m.workflowStage,workflowLabel:m.workflowLabel,workflowTone:m.workflowTone,summary:m.nextAction,detail:m.design_notes||"No design notes available yet.",stale:m.stale,issueURL:m.issue_url,lastTouchedAt:m.lastTouchedAt}));return{latestReview:r,latestReviewAt:a,commitsSinceReview:i,tasks:s,tasksByStage:o,priorityTasks:p,staleTasks:d,reviewQueue:u,completedTasks:c,issueGuidance:h,intentSources:_,commandRecipes:[{title:"Refine intent from the README",command:"devdive init --from-readme",detail:"Use this when the README or plan changes enough that the issue board should be regenerated."},{title:"Re-sync issue state from real work",command:"devdive sync",detail:"Pull the current state back into alignment after new commits, issue changes, or nudges."},{title:"Run an incremental drift review",command:"devdive review",detail:"Use recent commit evidence to separate ready-for-approval work from actually complete work."}]}}function $t(t){var a,n,l,i;const r=[];for(const s of(t.commits||[]).slice(-4))r.push({id:`commit-${s.commit_hash}`,title:s.summary||"Commit analysis recorded",body:`Used real code changes to move ${((a=s.tasks_progressed)==null?void 0:a.length)||0} issues forward and close ${((n=s.tasks_updated)==null?void 0:n.length)||0}.`,time:s.analysed_at,tone:"blue",icon:"CM"});for(const s of(t.nudges||[]).slice(-3))r.push({id:`nudge-${s.created_at}`,title:"AI guidance posted",body:s.message,time:s.created_at,tone:"purple",icon:"AI"});for(const s of(t.reviews||[]).slice(-2))r.push({id:`review-${s.reviewed_at}`,title:s.findings.length===0?"Review cleared the current window":`Review found ${s.findings.length} drift items`,body:s.findings.length===0?"No architectural drift detected in the latest review scope.":((l=s.findings[0])==null?void 0:l.finding)||"Recent work needs follow-up before it is complete.",time:s.reviewed_at,tone:s.findings.some(o=>o.severity==="critical")?"rose":"green",icon:"RV"});return(i=t.ci)!=null&&i.last_run&&r.push({id:`ci-${t.ci.last_run}`,title:`CI is ${t.ci.status.replaceAll("_"," ")}`,body:t.ci.workflow_url?"Latest workflow run is linked on the Actions page.":"Waiting for a workflow run URL.",time:t.ci.last_run,tone:t.ci.status==="failing"?"rose":"green",icon:"CI"}),r.filter(s=>s.time).sort((s,o)=>new Date(o.time)-new Date(s.time)).slice(0,6)}function Tt(){const{state:t}=C(),r=L(t),a=$t(t),n=r.tasks.filter(s=>s.workflowStage!=="complete"&&s.workflowStage!=="rejected"),l=r.priorityTasks.slice(0,3),i=r.staleTasks.slice(0,4);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Dashboard"}),e("h1",{className:"page-title",children:t.project.name||"DevDive Overview"}),e("p",{className:"page-subtitle",children:"A README-led operations view that uses repo evidence, recent commits, and review windows to prioritize what should move next."})]}),e("div",{className:"hero-actions",children:[e(R,{className:"button-secondary",to:"/issues",children:"Open issue flow"}),e(R,{className:"button",to:"/reviews",children:"Inspect review window"})]})]}),e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Active Issues"}),e("div",{className:"metric-icon metric-icon--blue",children:"IS"})]}),e("div",{className:"metric-card__value",children:[n.length,e("span",{className:"metric-card__delta",children:[r.tasks.length," tracked"]})]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Ready For Approval"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:[r.reviewQueue.length,e("span",{className:"metric-card__delta",children:[r.completedTasks.length," confirmed complete"]})]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Stale Check-ins"}),e("div",{className:"metric-icon metric-icon--purple",children:"CK"})]}),e("div",{className:"metric-card__value",children:[r.staleTasks.length,e("span",{className:"metric-card__delta",children:[t.nudges.length," nudges recorded"]})]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Commits Since Review"}),e("div",{className:"metric-icon metric-icon--green",children:"CM"})]}),e("div",{className:"metric-card__value",children:[r.commitsSinceReview.length,e("span",{className:"metric-card__delta",children:r.latestReviewAt?`Latest review ${I(r.latestReviewAt)}`:"No review baseline yet"})]})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Recent Activity"}),e(R,{className:"panel-link",to:"/commits",children:"Open timeline"})]}),a.length===0?e("div",{className:"empty-state",children:"No recent activity yet. Run init and start committing to populate the dashboard."}):e("div",{className:"timeline-list",children:a.map(s=>e("article",{className:"timeline-item",children:[e("div",{className:`timeline-icon timeline-icon--${s.tone}`,children:s.icon}),e("div",{children:[e("h3",{className:"timeline-title",children:s.title}),e("p",{className:"timeline-copy",children:s.body})]}),e("div",{className:"timeline-time",children:I(s.time)})]},s.id))})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Priority Queue"}),e(R,{className:"panel-link",to:"/issues",children:"View board"})]}),l.length===0?e("div",{className:"empty-state",children:"No active tasks. Run devdive init to generate a project plan."}):e("div",{className:"priority-list",children:[l.map(s=>e("article",{className:"priority-card",children:[e("div",{className:"card-head",children:[e("span",{className:`priority-ribbon ${s.workflowTone}`,children:s.prioritySummary}),e($,{status:s.workflowStage})]}),e("h3",{className:"priority-title",children:s.title}),e("p",{className:"card-copy",children:s.nextAction}),e("div",{className:"issue-meta",children:[e("span",{children:[Number(s.estimate_hours||0).toFixed(1),"h estimate"]}),e("span",{children:s.id?`#${s.id}`:"Untracked"})]})]},s.id||s.title)),e("div",{className:"dashed-card",children:"+ Build Priority List"})]})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Intent Signals"}),e(R,{className:"panel-link",to:"/settings",children:"Refine guidance"})]}),e("div",{className:"stack-list",children:r.intentSources.map(s=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:s.title}),e("h3",{className:"card-title",children:s.status==="active"?"Connected to live planning":"Needs manual refresh"})]}),e($,{status:s.status})]}),e("p",{className:"card-copy",children:s.detail})]},s.title))})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Stale Check-ins"}),e(R,{className:"panel-link",to:"/nudges",children:"Open guidance"})]}),i.length===0?e("div",{className:"empty-state",children:"No stale work right now. Recent commits are keeping the board warm."}):e("div",{className:"stack-list",children:i.map(s=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:s.id?`Issue #${s.id}`:"Planned task"}),e("h3",{className:"card-title",children:s.title})]}),e($,{status:s.workflowStage})]}),e("p",{className:"card-copy",children:s.nextAction}),e("div",{className:"issue-meta",children:[e("span",{children:s.lastTouchedAt?`Last touched ${I(s.lastTouchedAt)}`:"No commit evidence yet"}),e("span",{children:[s.commitCount," related commits"]})]})]},`stale-${s.id||s.title}`))})]})]})]})}const Ct=[{key:"todo",title:"To Do"},{key:"in_progress",title:"In Progress"},{key:"review",title:"In Review"},{key:"rejected",title:"Rejected"},{key:"complete",title:"Complete"}];function Dt({task:t,index:r}){const a=(t.title||"T").split(/\s+/).slice(0,2).map(n=>{var l;return(l=n[0])==null?void 0:l.toUpperCase()}).join("");return e("article",{className:"issue-card",children:[e("div",{className:"issue-card__head",children:[e("span",{className:"issue-id",children:t.id?`#${t.id}`:"Task"}),e($,{status:t.workflowStage})]}),e("h3",{className:"issue-title",children:t.title}),e("div",{className:"pill-row",children:[(t.labels||[]).map(n=>e("span",{className:`label-tag ${r%4===0?"tone-blue":r%4===1?"tone-purple":r%4===2?"tone-amber":"tone-slate"}`,children:n},`${t.id}-${n}`)),t.stale?e("span",{className:"label-tag tone-rose",children:"stale"}):null,t.readyForApproval?e("span",{className:"label-tag tone-amber",children:"approval gate"}):null]}),e("p",{className:"card-copy",style:{marginTop:"14px"},children:t.nextAction}),e("div",{className:"issue-meta",children:[e("div",{className:"status-row",children:[e("span",{className:"avatar-chip",children:a}),e("span",{children:[Number(t.estimate_hours||0).toFixed(1),"h"]}),e("span",{children:[t.commitCount," commits"]})]}),t.issue_url?e("a",{className:"panel-link",href:t.issue_url,target:"_blank",rel:"noreferrer",children:"Open issue"}):e("span",{children:t.lastTouchedAt?`Touched ${I(t.lastTouchedAt)}`:"No code evidence yet"})]})]})}function It(){const{state:t}=C(),r=L(t),a=r.tasks.reduce((n,l)=>n+Number(l.estimate_hours||0),0);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Issues"}),e("h1",{className:"page-title",children:t.project.name||"Issue Flow"}),e("p",{className:"page-subtitle",children:"Workflow states are derived from README-led planning, actual commit evidence, and the latest review window rather than a blank-slate board."})]}),e("div",{className:"hero-actions",children:[e("span",{className:"button-secondary",children:[a.toFixed(1),"h scoped"]}),e(R,{className:"button",to:"/reviews",children:"Review current window"})]})]}),e("div",{className:"board-toolbar",children:[e("div",{className:"toolbar-row",children:[e("span",{className:"toolbar-chip",children:"README intent"}),e("span",{className:"toolbar-chip",children:"Repo files"}),e("span",{className:"toolbar-chip",children:"Commit evidence"}),e("span",{className:"toolbar-chip",children:"Drift review"})]}),e("div",{className:"toolbar-row",children:[e("span",{className:"toolbar-chip--active",children:[r.reviewQueue.length," awaiting approval"]}),e("span",{className:"toolbar-chip",children:[r.staleTasks.length," stale check-ins"]})]})]}),r.tasks.length===0?e("div",{className:"empty-state",children:"No tasks yet. Run devdive init to get started."}):e("div",{className:"board-grid",children:Ct.map(n=>{var l;return e("section",{className:"board-column",children:[e("div",{className:"board-column__head",children:[e("div",{className:"board-column__title",children:[e("span",{children:n.title}),e("span",{className:`board-count ${((l=r.tasksByStage[n.key][0])==null?void 0:l.workflowTone)||"tone-slate"}`,children:r.tasksByStage[n.key].length})]}),e("span",{className:"ghost-action",children:"..."})]}),e("div",{className:"board-stack",children:[r.tasksByStage[n.key].length===0?e("div",{className:"board-empty",children:n.key==="review"?"Nothing is waiting on approval yet.":n.key==="complete"?"Completed work will settle here after review clears it.":"Nothing parked here yet."}):r.tasksByStage[n.key].map((i,s)=>e(Dt,{task:i,index:s},`${n.key}-${i.id}-${i.title}`)),n.key==="todo"?e("div",{className:"dashed-card",children:"+ Rebuild from README"}):null]})]},n.key)})})]})}function Ae(t){if(!t)return"No runs yet";const r=Date.now()-new Date(t).getTime(),a=Math.floor(r/6e4);if(a<1)return"Just now";if(a<60)return`${a} minutes ago`;const n=Math.floor(a/60);return n<24?`${n} hours ago`:`${Math.floor(n/24)} days ago`}function Pt(){const{state:t}=C(),r=t.reviews[0],a=t.nudges[t.nudges.length-1];return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Actions"}),e("h1",{className:"page-title",children:"Build and Release Health"}),e("p",{className:"page-subtitle",children:"The CI signal sits inside the same operational frame as nudges, drift, and recent delivery activity."})]}),e("div",{className:"hero-actions",children:t.ci.workflow_url?e("a",{className:"button",href:t.ci.workflow_url,target:"_blank",rel:"noreferrer",children:"Open workflow"}):e("span",{className:"button-secondary",children:"Waiting for workflow URL"})})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Current Run"}),e($,{status:t.ci.status})]}),e("div",{className:"stack-list",children:e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:"Workflow status"}),e("h3",{className:"card-title",style:{textTransform:"capitalize"},children:t.ci.status.replaceAll("_"," ")})]}),e("div",{className:"metric-icon metric-icon--green",children:"CI"})]}),t.ci.status==="unknown"?e("p",{className:"card-copy",children:"No CI runs detected yet."}):e(j,{children:[e("p",{className:"card-copy",children:["Last run completed ",Ae(t.ci.last_run),"."]}),e("div",{className:"issue-meta",children:[e("span",{children:t.ci.workflow_url?"Workflow run available":"No workflow link yet"}),t.ci.workflow_url?e("a",{className:"panel-link",href:t.ci.workflow_url,target:"_blank",rel:"noreferrer",children:"View workflow"}):null]})]})]})})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Related Signals"}),e(R,{className:"panel-link",to:"/reviews",children:"Open reviews"})]}),e("div",{className:"stack-list",children:[e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:"Latest review"}),e("h3",{className:"card-title",children:r?`${r.findings.length} findings in latest review`:"No design reviews yet"}),e("p",{className:"card-copy",children:r?`Reviewed ${Ae(r.reviewed_at)}.`:"Run devdive review to compare the codebase against the original plan."})]}),e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:"Latest nudge"}),e("h3",{className:"card-title",children:a?"AI advisory available":"No nudges yet"}),e("p",{className:"card-copy",children:a?a.message:"Operational nudges will appear here when CI or reviews need attention."})]})]})]})]})]})}function Mt(t){const r=[];for(const a of t.issueGuidance.slice(0,4))r.push({id:`tip-${a.id}`,title:a.title,message:a.summary,detail:a.detail,createdAt:a.lastTouchedAt,ribbon:a.stale?"Progress Check-in":"Implementation Tip",tone:a.stale?"tone-rose":a.workflowTone});return r}function Et(){const{state:t}=C(),r=L(t),a=[...t.nudges].reverse().map((i,s)=>({id:`nudge-${s}-${i.created_at}`,title:i.message,message:"Generated from current state transitions, failing signals, or architectural drift.",detail:"Use this as issue guidance, not just a passive notification.",createdAt:i.created_at,ribbon:"AI Advisory",tone:"tone-purple"})),n=Mt(r),l=[...a,...n];return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Nudges"}),e("h1",{className:"page-title",children:"Advisory Feed"}),e("p",{className:"page-subtitle",children:"AI guidance now mixes global nudges with issue-level implementation tips and stale-work check-ins."})]}),e("div",{className:"hero-actions",children:e("span",{className:"button-secondary",children:[l.length," guidance items"]})})]}),l.length===0?e("div",{className:"empty-state",children:"No nudges yet. DevDive will suggest improvements as work starts moving."}):e("div",{className:"stack-list",children:l.map(i=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("span",{className:`priority-ribbon ${i.tone}`,children:i.ribbon}),e("span",{className:"card-time",children:i.createdAt?I(i.createdAt):"Planning signal"})]}),e("h3",{className:"card-title",children:i.title}),e("p",{className:"card-copy",children:i.message}),e("p",{className:"detail-text",style:{marginTop:"12px"},children:i.detail})]},i.id))})]})}function jt(){const{state:t}=C(),r=L(t),a=r.tasks.reduce((o,p)=>o+Number(p.estimate_hours||0),0),n=r.completedTasks.reduce((o,p)=>o+Number(p.estimate_hours||0),0),l=r.reviewQueue.reduce((o,p)=>o+Number(p.estimate_hours||0),0),i=Math.max(a-n,0),s=a===0?0:Math.round(n/a*100);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Time"}),e("h1",{className:"page-title",children:"Burndown and Throughput"}),e("p",{className:"page-subtitle",children:"Burndown now distinguishes implemented work waiting on review from work that is actually complete."})]})}),r.tasks.length===0?e("div",{className:"empty-state",children:"No tasks yet."}):e(j,{children:[e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Estimated"}),e("div",{className:"metric-icon metric-icon--blue",children:"ET"})]}),e("div",{className:"metric-card__value",children:[a.toFixed(1),"h"]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Complete"}),e("div",{className:"metric-icon metric-icon--green",children:"OK"})]}),e("div",{className:"metric-card__value",children:[n.toFixed(1),"h"]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Awaiting Review"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:[l.toFixed(1),"h"]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Remaining"}),e("div",{className:"metric-icon metric-icon--purple",children:"RM"})]}),e("div",{className:"metric-card__value",children:[i.toFixed(1),"h"]})]})]}),e("div",{className:"panel",children:[e("div",{className:"panel-header",children:[e("strong",{children:"Burndown Progress"}),e("span",{children:[s,"%"]})]}),e("div",{className:"progress-track",children:e("div",{className:"progress-fill",style:{width:`${s}%`}})})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Workflow Timing"}),e(R,{className:"panel-link",to:"/issues",children:"Open board"})]}),e("div",{className:"table-wrap",children:e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{children:"Title"}),e("th",{children:"Estimate"}),e("th",{children:"Stage"}),e("th",{children:"Last Touched"})]})}),e("tbody",{children:r.tasks.map(o=>e("tr",{children:[e("td",{children:o.title}),e("td",{children:[Number(o.estimate_hours||0).toFixed(1),"h"]}),e("td",{children:e($,{status:o.workflowStage})}),e("td",{children:o.lastTouchedAt?I(o.lastTouchedAt):"No code evidence yet"})]},`${o.id}-${o.title}`))})]})})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Check-ins"}),e(R,{className:"panel-link",to:"/nudges",children:"Open guidance"})]}),r.staleTasks.length===0?e("div",{className:"empty-state",children:"No stale tasks are asking for a check-in."}):e("div",{className:"stack-list",children:r.staleTasks.slice(0,4).map(o=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:o.id?`Issue #${o.id}`:"Planned task"}),e("h3",{className:"card-title",children:o.title})]}),e($,{status:o.workflowStage})]}),e("p",{className:"card-copy",children:o.nextAction})]},`checkin-${o.id||o.title}`))})]})]})]})]})}function Lt(){const{state:t}=C(),r=L(t),a=[...t.commits].reverse(),n=t.commits.reduce((i,s)=>{var o;return i+(((o=s.tasks_updated)==null?void 0:o.length)||0)},0),l=t.commits.reduce((i,s)=>{var o;return i+(((o=s.tasks_progressed)==null?void 0:o.length)||0)},0);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Commits"}),e("h1",{className:"page-title",children:"Delivery Timeline"}),e("p",{className:"page-subtitle",children:"Recent commits are treated as planning evidence so issue state can be re-evaluated incrementally instead of by keyword heuristics."})]})}),e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Analysed Commits"}),e("div",{className:"metric-icon metric-icon--blue",children:"CM"})]}),e("div",{className:"metric-card__value",children:t.commits.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Since Last Review"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:r.commitsSinceReview.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Issues Progressed"}),e("div",{className:"metric-icon metric-icon--purple",children:"IP"})]}),e("div",{className:"metric-card__value",children:l})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Issues Completed"}),e("div",{className:"metric-icon metric-icon--green",children:"DN"})]}),e("div",{className:"metric-card__value",children:n})]})]}),a.length===0?e("div",{className:"empty-state",children:"No commits analysed yet. DevDive analyses your commits as you push."}):e("div",{className:"stack-list",children:a.map(i=>{const s=r.latestReviewAt?new Date(i.analysed_at)>new Date(r.latestReviewAt):!0;return e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("strong",{className:"mono",children:(i.commit_hash||"").slice(0,7)||"unknown"}),e("span",{className:"card-time",children:I(i.analysed_at)})]}),e("h3",{className:"card-title",children:i.summary}),e("p",{className:"card-copy",children:s?"This commit is still inside the active review window.":"This commit has already been covered by the latest review window."}),e("div",{className:"pill-row",children:[(i.tasks_updated||[]).map(o=>e("span",{className:"label-tag tone-green",children:["complete #",o]},`closed-${i.commit_hash}-${o}`)),(i.tasks_progressed||[]).map(o=>e("span",{className:"label-tag tone-blue",children:["progress #",o]},`progress-${i.commit_hash}-${o}`))]})]},`${i.commit_hash}-${i.analysed_at}`)})})]})}function Ut(){const{state:t}=C(),r=L(t),a=[...t.reviews].reverse(),n=a[0];return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Reviews"}),e("h1",{className:"page-title",children:"Architecture Reviews"}),e("p",{className:"page-subtitle",children:"Review windows separate code that looks ready from work that is actually complete after the latest review pass."})]})}),n&&n.findings.length===0?e("div",{className:"banner",children:"No drift detected in the latest review window."}):null,e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Ready For Approval"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:r.reviewQueue.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Actually Complete"}),e("div",{className:"metric-icon metric-icon--green",children:"OK"})]}),e("div",{className:"metric-card__value",children:r.completedTasks.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Commits In Scope"}),e("div",{className:"metric-icon metric-icon--blue",children:"CM"})]}),e("div",{className:"metric-card__value",children:r.commitsSinceReview.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Latest Findings"}),e("div",{className:"metric-icon metric-icon--purple",children:"DR"})]}),e("div",{className:"metric-card__value",children:(n==null?void 0:n.findings.length)||0})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Incremental Review Scope"}),e(R,{className:"panel-link",to:"/commits",children:"Open commits"})]}),e("div",{className:"stack-list",children:[e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:"Review baseline"}),e("h3",{className:"card-title",children:r.latestReviewAt?`Last review ${I(r.latestReviewAt)}`:"No review baseline yet"})]}),e($,{status:r.latestReviewAt?"active":"manual"})]}),e("p",{className:"card-copy",children:r.latestReviewAt?`${r.commitsSinceReview.length} commits and ${r.reviewQueue.length} issues are waiting to be re-evaluated.`:`The first review should inspect all ${t.commits.length} analysed commits since init.`})]}),e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:"Approval gate"}),e("h3",{className:"card-title",children:[r.reviewQueue.length," issues appear ready, ",r.completedTasks.length," are actually complete"]})]}),e($,{status:"review"})]}),e("p",{className:"card-copy",children:"DevDive now keeps a separate in-review state so changed code can be approved before it settles into complete."})]})]})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Approval Queue"}),e(R,{className:"panel-link",to:"/issues",children:"Open board"})]}),r.reviewQueue.length===0?e("div",{className:"empty-state",children:"No issues are waiting on approval right now."}):e("div",{className:"stack-list",children:r.reviewQueue.slice(0,5).map(l=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:l.id?`Issue #${l.id}`:"Planned task"}),e("h3",{className:"card-title",children:l.title})]}),e($,{status:l.workflowStage})]}),e("p",{className:"card-copy",children:l.nextAction})]},`review-${l.id||l.title}`))})]})]}),a.length===0?e("div",{className:"empty-state",children:"No design reviews yet. DevDive reviews your architecture every 10 commits."}):e("div",{className:"stack-list",children:a.map(l=>e("article",{className:"list-card",children:[e("div",{style:{marginBottom:"12px",color:"var(--text-muted)"},children:["Reviewed ",I(l.reviewed_at)]}),l.findings.length===0?e("div",{className:"card-copy",children:"No findings for this review."}):e("div",{className:"stack-list",children:l.findings.map((i,s)=>e("article",{className:"summary-card",children:[e("div",{className:"card-head",children:[e("code",{className:"mono",children:i.file}),e($,{status:i.severity})]}),e("p",{className:"card-copy",children:i.finding})]},`${i.file}-${i.detected_at}-${s}`))})]},l.reviewed_at))})]})}function Ft(){var a;const{state:t}=C(),r=L(t);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Settings"}),e("h1",{className:"page-title",children:"Project Configuration and Intent"}),e("p",{className:"page-subtitle",children:"Project metadata, planning assumptions, and the commands that refine README-led intent over time."})]})}),e("div",{className:"settings-grid",children:[e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Project Name"}),e("h3",{className:"card-title",children:t.project.name||"Unknown"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Repo"}),e("h3",{className:"card-title",children:t.project.repo||"Unknown"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Created"}),e("h3",{className:"card-title",children:At(t.project.created_at)})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Schema Version"}),e("h3",{className:"card-title",children:((a=t.meta)==null?void 0:a.version)||"1.0"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Init Commit"}),e("h3",{className:"card-title mono",children:t.init_commit||"Unknown"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Rollback"}),e("p",{className:"card-copy",children:["Run ",e("code",{className:"mono",children:"devdive rollback --sha <commit-sha>"})," to restore a prior state snapshot."]})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Intent Sources"}),e("span",{className:"panel-link",children:"README first"})]}),e("div",{className:"stack-list",children:r.intentSources.map(n=>e("article",{className:"list-card",children:e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:n.title}),e("h3",{className:"card-title",children:n.detail})]}),e($,{status:n.status})]})},n.title))})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Refine Intent"}),e("span",{className:"panel-link",children:"CLI recipes"})]}),e("div",{className:"stack-list",children:r.commandRecipes.map(n=>e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:n.title}),e("h3",{className:"card-title mono",children:n.command}),e("p",{className:"card-copy",children:n.detail})]},n.command))})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Plan Scope"}),e("span",{className:"panel-link",children:"Message file"})]}),e("div",{className:"stack-list",children:gt.map(n=>e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:n.title}),e("div",{className:"stack-list",children:n.items.map(l=>e("div",{className:"card-copy",children:["- ",l]},l))})]},n.key))})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Assumptions"}),e("span",{className:"panel-link",children:"Operational rules"})]}),e("div",{className:"stack-list",children:vt.map(n=>e("article",{className:"list-card",children:e("p",{className:"card-copy",children:n})},n))})]})]})]})}function Ht(t){if(!t)return"No recent sync";const r=Date.now()-new Date(t).getTime(),a=Math.floor(r/6e4);if(a<1)return"Just now";if(a<60)return`${a}m ago`;const n=Math.floor(a/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}function Wt(t){var a,n;const r=[(a=t.project)==null?void 0:a.created_at,(n=t.ci)==null?void 0:n.last_run,...(t.commits||[]).map(l=>l.analysed_at),...(t.nudges||[]).map(l=>l.created_at),...(t.reviews||[]).map(l=>l.reviewed_at)].filter(Boolean);return r.length===0?"":r.map(l=>new Date(l).getTime()).sort((l,i)=>i-l).map(l=>new Date(l).toISOString())[0]}function Ot(){var a;const{connected:t,state:r}=C();return e("footer",{className:"shell-footer",children:[e("div",{className:"shell-footer__group",children:[e("span",{className:`footer-dot ${t?"footer-dot--live":"footer-dot--idle"}`}),e("span",{children:t?"All systems operational":"Live sync unavailable"}),e("span",{className:"footer-divider"}),e("span",{children:["Last synced ",Ht(Wt(r))]})]}),e("div",{className:"shell-footer__group shell-footer__group--muted",children:[e("span",{children:((a=r.project)==null?void 0:a.repo)||"devdive"}),e("span",{className:"footer-divider"}),e("span",{children:"Shortcuts"})]})]})}function Bt(){const{path:t}=pe();switch(t){case"/issues":return e(It,{});case"/ci":return e(Pt,{});case"/nudges":return e(Et,{});case"/timetrack":return e(jt,{});case"/commits":return e(Lt,{});case"/reviews":return e(Ut,{});case"/settings":return e(Ft,{});case"/":default:return e(Tt,{})}}function zt(){return e(j,{children:[e("style",{children:`
        :root {
          --bg: #0c1320;
          --bg-deep: #0a101b;
          --panel: #111a2b;
          --panel-soft: #151f33;
          --panel-strong: #182338;
          --line: rgba(122, 147, 191, 0.16);
          --line-strong: rgba(122, 147, 191, 0.26);
          --text: #f4f7fb;
          --text-muted: #8f9db6;
          --text-soft: #a8b5cb;
          --blue: #2f81f7;
          --blue-soft: rgba(47, 129, 247, 0.14);
          --green: #2bc48a;
          --green-soft: rgba(43, 196, 138, 0.14);
          --amber: #f1a638;
          --amber-soft: rgba(241, 166, 56, 0.16);
          --rose: #f15b7a;
          --rose-soft: rgba(241, 91, 122, 0.16);
          --purple: #9a68ff;
          --purple-soft: rgba(154, 104, 255, 0.16);
          --shadow: 0 22px 48px rgba(5, 10, 18, 0.36);
          font-family: "Avenir Next", "Segoe UI", sans-serif;
          color: var(--text);
          background:
            radial-gradient(circle at top right, rgba(47, 129, 247, 0.12), transparent 26%),
            radial-gradient(circle at bottom left, rgba(154, 104, 255, 0.08), transparent 24%),
            linear-gradient(180deg, #0c1320 0%, #0a111c 100%);
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          min-height: 100vh;
          color: var(--text);
          background: transparent;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input {
          font: inherit;
        }

        .shell {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .shell-main {
          width: min(1560px, calc(100% - 48px));
          margin: 0 auto;
          display: flex;
          flex: 1;
          padding: 34px 0 110px;
        }

        .page {
          width: 100%;
          display: grid;
          gap: 28px;
        }

        .page-hero {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .eyebrow {
          margin: 0 0 12px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--text-muted);
        }

        .page-title {
          margin: 0 0 10px;
          font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
          font-size: clamp(2.25rem, 4vw, 3.35rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .page-subtitle {
          margin: 0;
          color: var(--text-muted);
          max-width: 62ch;
          line-height: 1.6;
        }

        .hero-actions,
        .toolbar-row,
        .pill-row,
        .status-row,
        .detail-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        .hero-actions {
          justify-content: flex-end;
        }

        .button,
        .button-secondary,
        .toolbar-chip,
        .toolbar-chip--active {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-radius: 14px;
          border: 1px solid var(--line);
          padding: 12px 18px;
          background: var(--panel-soft);
          color: var(--text-soft);
          font-weight: 600;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }

        .button {
          background: linear-gradient(180deg, #2f81f7, #1f6bd8);
          color: white;
          border-color: rgba(47, 129, 247, 0.34);
        }

        .toolbar-chip--active {
          background: var(--blue-soft);
          color: #7db1ff;
          border-color: rgba(47, 129, 247, 0.28);
        }

        .metric-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
        }

        .metric-card,
        .panel,
        .issue-card,
        .priority-card,
        .list-card,
        .summary-card {
          background: linear-gradient(180deg, rgba(18, 27, 43, 0.96), rgba(15, 23, 37, 0.96));
          border: 1px solid var(--line);
          border-radius: 22px;
          box-shadow: var(--shadow);
        }

        .metric-card {
          padding: 24px 26px;
          display: grid;
          gap: 18px;
          min-height: 166px;
        }

        .metric-card__top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 18px;
        }

        .metric-card__label,
        .panel-kicker,
        .muted-label {
          color: var(--text-muted);
          font-size: 0.96rem;
        }

        .metric-card__value {
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
          font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
          font-size: 3rem;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .metric-card__delta {
          font-size: 1rem;
          color: var(--text-muted);
          font-family: "Avenir Next", "Segoe UI", sans-serif;
        }

        .metric-card__delta--up {
          color: #5ed59d;
        }

        .metric-card__delta--down {
          color: #ef738e;
        }

        .metric-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .metric-icon--blue {
          color: #68a8ff;
          background: rgba(47, 129, 247, 0.12);
        }

        .metric-icon--amber {
          color: #ffb14c;
          background: rgba(241, 166, 56, 0.14);
        }

        .metric-icon--purple {
          color: #ba8bff;
          background: rgba(154, 104, 255, 0.14);
        }

        .metric-icon--green {
          color: #63d89f;
          background: rgba(43, 196, 138, 0.14);
        }

        .split-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.7fr) minmax(320px, 0.85fr);
          gap: 24px;
          align-items: start;
        }

        .panel {
          padding: 22px 24px;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .panel-title {
          margin: 0;
          font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
          font-size: 2rem;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .panel-link {
          color: #5d9cff;
          font-weight: 600;
        }

        .timeline-list,
        .stack-list,
        .priority-list {
          display: grid;
          gap: 14px;
        }

        .timeline-item,
        .stack-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 16px;
          align-items: start;
          padding: 20px 22px;
          border-top: 1px solid rgba(122, 147, 191, 0.1);
        }

        .timeline-item:first-child {
          border-top: 0;
        }

        .timeline-icon {
          width: 46px;
          height: 46px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          font-weight: 800;
          background: var(--panel-strong);
          color: var(--text);
        }

        .timeline-icon--blue { color: #69a7ff; background: rgba(47, 129, 247, 0.14); }
        .timeline-icon--purple { color: #bd8dff; background: rgba(154, 104, 255, 0.14); }
        .timeline-icon--green { color: #63d89f; background: rgba(43, 196, 138, 0.14); }
        .timeline-icon--rose { color: #ef738e; background: rgba(241, 91, 122, 0.14); }

        .timeline-title,
        .priority-title,
        .issue-title,
        .card-title {
          margin: 0 0 8px;
          font-size: 1.02rem;
          line-height: 1.45;
          font-weight: 700;
        }

        .timeline-copy,
        .card-copy,
        .subtle-text,
        .detail-text {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .timeline-time,
        .card-time,
        .mono-muted {
          color: var(--text-muted);
          font-size: 0.92rem;
        }

        .priority-card,
        .issue-card,
        .list-card,
        .summary-card {
          padding: 20px 22px;
        }

        .priority-ribbon,
        .label-tag,
        .board-count {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
          border: 1px solid transparent;
        }

        .tone-rose {
          background: var(--rose-soft);
          color: #ff8da5;
        }

        .tone-blue {
          background: var(--blue-soft);
          color: #7eb2ff;
        }

        .tone-green {
          background: var(--green-soft);
          color: #75dca9;
        }

        .tone-amber {
          background: var(--amber-soft);
          color: #ffbf69;
        }

        .tone-purple {
          background: var(--purple-soft);
          color: #c7a0ff;
        }

        .tone-slate {
          background: rgba(143, 157, 182, 0.12);
          color: #aab6ca;
        }

        .ghost-action {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          border: 1px solid var(--line);
          color: var(--text-muted);
          background: var(--panel-soft);
        }

        .board-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .board-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 22px;
          align-items: start;
        }

        .board-column {
          min-height: 720px;
          padding: 18px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(14, 22, 35, 0.96), rgba(12, 18, 30, 0.96));
          border: 1px solid rgba(67, 88, 122, 0.28);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }

        .board-column__head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .board-column__title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .board-stack {
          display: grid;
          gap: 16px;
        }

        .issue-card__head,
        .card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 14px;
        }

        .issue-id,
        .code-pill {
          color: var(--text-muted);
          font-family: "SFMono-Regular", "Menlo", "Monaco", monospace;
          font-size: 0.88rem;
        }

        .issue-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          color: var(--text-muted);
          font-size: 0.92rem;
          margin-top: 18px;
        }

        .avatar-chip {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: linear-gradient(180deg, #273652, #1a2538);
          border: 1px solid rgba(122, 147, 191, 0.18);
          color: var(--text-soft);
          font-size: 0.74rem;
          font-weight: 800;
        }

        .board-empty {
          min-height: 180px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          border: 1px dashed rgba(122, 147, 191, 0.18);
          color: var(--text-muted);
          background: rgba(17, 26, 43, 0.4);
          text-align: center;
          padding: 20px;
        }

        .dashed-card {
          border: 1px dashed rgba(93, 118, 161, 0.34);
          border-radius: 18px;
          padding: 22px;
          color: var(--text-soft);
          display: grid;
          place-items: center;
          min-height: 74px;
          background: rgba(12, 19, 31, 0.62);
        }

        .settings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 18px;
        }

        .table-wrap {
          overflow-x: auto;
          border-radius: 22px;
          border: 1px solid var(--line);
          background: linear-gradient(180deg, rgba(18, 27, 43, 0.96), rgba(15, 23, 37, 0.96));
          box-shadow: var(--shadow);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 16px 18px;
          text-align: left;
          vertical-align: top;
          border-bottom: 1px solid rgba(122, 147, 191, 0.12);
        }

        th {
          color: var(--text-muted);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        td {
          color: var(--text-soft);
        }

        tr:last-child td {
          border-bottom: 0;
        }

        .mono {
          font-family: "SFMono-Regular", "Menlo", "Monaco", monospace;
        }

        .banner {
          background: rgba(43, 196, 138, 0.12);
          border: 1px solid rgba(43, 196, 138, 0.2);
          color: #7addaf;
          border-radius: 18px;
          padding: 14px 16px;
        }

        .progress-track {
          width: 100%;
          height: 14px;
          border-radius: 999px;
          background: rgba(122, 147, 191, 0.12);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #2f81f7, #57c9ff);
        }

        .empty-state {
          min-height: 220px;
          display: grid;
          place-items: center;
          text-align: center;
          color: var(--text-muted);
          border: 1px dashed rgba(122, 147, 191, 0.18);
          border-radius: 22px;
          background: rgba(17, 26, 43, 0.46);
          padding: 24px;
        }

        .shell-footer {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          padding: 14px 24px;
          border-top: 1px solid rgba(122, 147, 191, 0.14);
          background: rgba(10, 16, 27, 0.9);
          backdrop-filter: blur(14px);
          color: var(--text-muted);
          font-size: 0.94rem;
        }

        .shell-footer__group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .shell-footer__group--muted {
          color: #7f93b4;
        }

        .footer-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          display: inline-block;
        }

        .footer-dot--live {
          background: var(--green);
          box-shadow: 0 0 16px rgba(43, 196, 138, 0.6);
        }

        .footer-dot--idle {
          background: #53637c;
        }

        .footer-divider {
          width: 1px;
          height: 14px;
          background: rgba(122, 147, 191, 0.18);
        }

        @media (max-width: 1240px) {
          .split-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 860px) {
          .shell-main {
            width: calc(100% - 28px);
            padding: 22px 0 132px;
          }

          .page-hero {
            flex-direction: column;
          }

          .timeline-item,
          .stack-item {
            grid-template-columns: auto 1fr;
          }

          .timeline-time {
            grid-column: 2;
          }

          .shell-footer {
            padding: 14px 16px;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}),e(pt,{children:e(dt,{children:e("div",{className:"shell",children:[e(_t,{}),e("main",{className:"shell-main",children:e(Bt,{})}),e(Ot,{})]})})})]})}at(e(zt,{}),document.getElementById("app"));

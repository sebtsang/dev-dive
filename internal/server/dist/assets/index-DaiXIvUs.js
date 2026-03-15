(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(l){if(l.ep)return;l.ep=!0;const a=i(l);fetch(l.href,a)}})();var J,g,$e,I,he,Te,Ce,De,ce,re,ie,Ie,q={},Q=[],Ye=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;function C(r,t){for(var i in t)r[i]=t[i];return r}function oe(r){r&&r.parentNode&&r.parentNode.removeChild(r)}function Pe(r,t,i){var n,l,a,s={};for(a in t)a=="key"?n=t[a]:a=="ref"?l=t[a]:s[a]=t[a];if(arguments.length>2&&(s.children=arguments.length>3?J.call(arguments,2):i),typeof r=="function"&&r.defaultProps!=null)for(a in r.defaultProps)s[a]===void 0&&(s[a]=r.defaultProps[a]);return B(r,s,n,l,null)}function B(r,t,i,n,l){var a={type:r,props:t,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:l??++$e,__i:-1,__u:0};return l==null&&g.vnode!=null&&g.vnode(a),a}function j(r){return r.children}function z(r,t){this.props=r,this.context=t}function F(r,t){if(t==null)return r.__?F(r.__,r.__i+1):null;for(var i;t<r.__k.length;t++)if((i=r.__k[t])!=null&&i.__e!=null)return i.__e;return typeof r.type=="function"?F(r):null}function Xe(r){if(r.__P&&r.__d){var t=r.__v,i=t.__e,n=[],l=[],a=C({},t);a.__v=t.__v+1,g.vnode&&g.vnode(a),de(r.__P,a,t,r.__n,r.__P.namespaceURI,32&t.__u?[i]:null,n,i??F(t),!!(32&t.__u),l),a.__v=t.__v,a.__.__k[a.__i]=a,Le(n,a,l),t.__e=t.__=null,a.__e!=i&&Me(a)}}function Me(r){if((r=r.__)!=null&&r.__c!=null)return r.__e=r.__c.base=null,r.__k.some(function(t){if(t!=null&&t.__e!=null)return r.__e=r.__c.base=t.__e}),Me(r)}function ae(r){(!r.__d&&(r.__d=!0)&&I.push(r)&&!G.__r++||he!=g.debounceRendering)&&((he=g.debounceRendering)||Te)(G)}function G(){try{for(var r,t=1;I.length;)I.length>t&&I.sort(Ce),r=I.shift(),t=I.length,Xe(r)}finally{I.length=G.__r=0}}function Ee(r,t,i,n,l,a,s,o,p,d,u){var c,_,h,y,x,w,f,m=n&&n.__k||Q,b=t.length;for(p=Ze(i,t,m,p,b),c=0;c<b;c++)(h=i.__k[c])!=null&&(_=h.__i!=-1&&m[h.__i]||q,h.__i=c,w=de(r,h,_,l,a,s,o,p,d,u),y=h.__e,h.ref&&_.ref!=h.ref&&(_.ref&&me(_.ref,null,h),u.push(h.ref,h.__c||y,h)),x==null&&y!=null&&(x=y),(f=!!(4&h.__u))||_.__k===h.__k?p=je(h,p,r,f):typeof h.type=="function"&&w!==void 0?p=w:y&&(p=y.nextSibling),h.__u&=-7);return i.__e=x,p}function Ze(r,t,i,n,l){var a,s,o,p,d,u=i.length,c=u,_=0;for(r.__k=new Array(l),a=0;a<l;a++)(s=t[a])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=r.__k[a]=B(null,s,null,null,null):Y(s)?s=r.__k[a]=B(j,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=r.__k[a]=B(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):r.__k[a]=s,p=a+_,s.__=r,s.__b=r.__b+1,o=null,(d=s.__i=et(s,i,p,c))!=-1&&(c--,(o=i[d])&&(o.__u|=2)),o==null||o.__v==null?(d==-1&&(l>u?_--:l<u&&_++),typeof s.type!="function"&&(s.__u|=4)):d!=p&&(d==p-1?_--:d==p+1?_++:(d>p?_--:_++,s.__u|=4))):r.__k[a]=null;if(c)for(a=0;a<u;a++)(o=i[a])!=null&&!(2&o.__u)&&(o.__e==n&&(n=F(o)),Fe(o,o));return n}function je(r,t,i,n){var l,a;if(typeof r.type=="function"){for(l=r.__k,a=0;l&&a<l.length;a++)l[a]&&(l[a].__=r,t=je(l[a],t,i,n));return t}r.__e!=t&&(n&&(t&&r.type&&!t.parentNode&&(t=F(r)),i.insertBefore(r.__e,t||null)),t=r.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function et(r,t,i,n){var l,a,s,o=r.key,p=r.type,d=t[i],u=d!=null&&(2&d.__u)==0;if(d===null&&o==null||u&&o==d.key&&p==d.type)return i;if(n>(u?1:0)){for(l=i-1,a=i+1;l>=0||a<t.length;)if((d=t[s=l>=0?l--:a++])!=null&&!(2&d.__u)&&o==d.key&&p==d.type)return s}return-1}function ue(r,t,i){t[0]=="-"?r.setProperty(t,i??""):r[t]=i==null?"":typeof i!="number"||Ye.test(t)?i:i+"px"}function W(r,t,i,n,l){var a,s;e:if(t=="style")if(typeof i=="string")r.style.cssText=i;else{if(typeof n=="string"&&(r.style.cssText=n=""),n)for(t in n)i&&t in i||ue(r.style,t,"");if(i)for(t in i)n&&i[t]==n[t]||ue(r.style,t,i[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(De,"$1")),s=t.toLowerCase(),t=s in r||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),r.l||(r.l={}),r.l[t+a]=i,i?n?i.u=n.u:(i.u=ce,r.addEventListener(t,a?ie:re,a)):r.removeEventListener(t,a?ie:re,a);else{if(l=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in r)try{r[t]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&t[4]!="-"?r.removeAttribute(t):r.setAttribute(t,t=="popover"&&i==1?"":i))}}function _e(r){return function(t){if(this.l){var i=this.l[t.type+r];if(t.t==null)t.t=ce++;else if(t.t<i.u)return;return i(g.event?g.event(t):t)}}}function de(r,t,i,n,l,a,s,o,p,d){var u,c,_,h,y,x,w,f,m,b,$,k,Z,E,U,R=t.type;if(t.constructor!==void 0)return null;128&i.__u&&(p=!!(32&i.__u),a=[o=t.__e=i.__e]),(u=g.__b)&&u(t);e:if(typeof R=="function")try{if(f=t.props,m=R.prototype&&R.prototype.render,b=(u=R.contextType)&&n[u.__c],$=u?b?b.props.value:u.__:n,i.__c?w=(c=t.__c=i.__c).__=c.__E:(m?t.__c=c=new R(f,$):(t.__c=c=new z(f,$),c.constructor=R,c.render=rt),b&&b.sub(c),c.state||(c.state={}),c.__n=n,_=c.__d=!0,c.__h=[],c._sb=[]),m&&c.__s==null&&(c.__s=c.state),m&&R.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=C({},c.__s)),C(c.__s,R.getDerivedStateFromProps(f,c.__s))),h=c.props,y=c.state,c.__v=t,_)m&&R.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),m&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(m&&R.getDerivedStateFromProps==null&&f!==h&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(f,$),t.__v==i.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(f,c.__s,$)===!1){t.__v!=i.__v&&(c.props=f,c.state=c.__s,c.__d=!1),t.__e=i.__e,t.__k=i.__k,t.__k.some(function(S){S&&(S.__=t)}),Q.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(f,c.__s,$),m&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(h,y,x)})}if(c.context=$,c.props=f,c.__P=r,c.__e=!1,k=g.__r,Z=0,m)c.state=c.__s,c.__d=!1,k&&k(t),u=c.render(c.props,c.state,c.context),Q.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,k&&k(t),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++Z<25);c.state=c.__s,c.getChildContext!=null&&(n=C(C({},n),c.getChildContext())),m&&!_&&c.getSnapshotBeforeUpdate!=null&&(x=c.getSnapshotBeforeUpdate(h,y)),E=u!=null&&u.type===j&&u.key==null?Ue(u.props.children):u,o=Ee(r,Y(E)?E:[E],t,i,n,l,a,s,o,p,d),c.base=t.__e,t.__u&=-161,c.__h.length&&s.push(c),w&&(c.__E=c.__=null)}catch(S){if(t.__v=null,p||a!=null)if(S.then){for(t.__u|=p?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;a[a.indexOf(o)]=null,t.__e=o}else{for(U=a.length;U--;)oe(a[U]);ne(t)}else t.__e=i.__e,t.__k=i.__k,S.then||ne(t);g.__e(S,t,i)}else a==null&&t.__v==i.__v?(t.__k=i.__k,t.__e=i.__e):o=t.__e=tt(i.__e,t,i,n,l,a,s,p,d);return(u=g.diffed)&&u(t),128&t.__u?void 0:o}function ne(r){r&&(r.__c&&(r.__c.__e=!0),r.__k&&r.__k.some(ne))}function Le(r,t,i){for(var n=0;n<i.length;n++)me(i[n],i[++n],i[++n]);g.__c&&g.__c(t,r),r.some(function(l){try{r=l.__h,l.__h=[],r.some(function(a){a.call(l)})}catch(a){g.__e(a,l.__v)}})}function Ue(r){return typeof r!="object"||r==null||r.__b>0?r:Y(r)?r.map(Ue):C({},r)}function tt(r,t,i,n,l,a,s,o,p){var d,u,c,_,h,y,x,w=i.props||q,f=t.props,m=t.type;if(m=="svg"?l="http://www.w3.org/2000/svg":m=="math"?l="http://www.w3.org/1998/Math/MathML":l||(l="http://www.w3.org/1999/xhtml"),a!=null){for(d=0;d<a.length;d++)if((h=a[d])&&"setAttribute"in h==!!m&&(m?h.localName==m:h.nodeType==3)){r=h,a[d]=null;break}}if(r==null){if(m==null)return document.createTextNode(f);r=document.createElementNS(l,m,f.is&&f),o&&(g.__m&&g.__m(t,a),o=!1),a=null}if(m==null)w===f||o&&r.data==f||(r.data=f);else{if(a=a&&J.call(r.childNodes),!o&&a!=null)for(w={},d=0;d<r.attributes.length;d++)w[(h=r.attributes[d]).name]=h.value;for(d in w)h=w[d],d=="dangerouslySetInnerHTML"?c=h:d=="children"||d in f||d=="value"&&"defaultValue"in f||d=="checked"&&"defaultChecked"in f||W(r,d,null,h,l);for(d in f)h=f[d],d=="children"?_=h:d=="dangerouslySetInnerHTML"?u=h:d=="value"?y=h:d=="checked"?x=h:o&&typeof h!="function"||w[d]===h||W(r,d,h,w[d],l);if(u)o||c&&(u.__html==c.__html||u.__html==r.innerHTML)||(r.innerHTML=u.__html),t.__k=[];else if(c&&(r.innerHTML=""),Ee(t.type=="template"?r.content:r,Y(_)?_:[_],t,i,n,m=="foreignObject"?"http://www.w3.org/1999/xhtml":l,a,s,a?a[0]:i.__k&&F(i,0),o,p),a!=null)for(d=a.length;d--;)oe(a[d]);o||(d="value",m=="progress"&&y==null?r.removeAttribute("value"):y!=null&&(y!==r[d]||m=="progress"&&!y||m=="option"&&y!=w[d])&&W(r,d,y,w[d],l),d="checked",x!=null&&x!=r[d]&&W(r,d,x,w[d],l))}return r}function me(r,t,i){try{if(typeof r=="function"){var n=typeof r.__u=="function";n&&r.__u(),n&&t==null||(r.__u=r(t))}else r.current=t}catch(l){g.__e(l,i)}}function Fe(r,t,i){var n,l;if(g.unmount&&g.unmount(r),(n=r.ref)&&(n.current&&n.current!=r.__e||me(n,null,t)),(n=r.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){g.__e(a,t)}n.base=n.__P=null}if(n=r.__k)for(l=0;l<n.length;l++)n[l]&&Fe(n[l],t,i||typeof r.type!="function");i||oe(r.__e),r.__c=r.__=r.__e=void 0}function rt(r,t,i){return this.constructor(r,i)}function it(r,t,i){var n,l,a,s;t==document&&(t=document.documentElement),g.__&&g.__(r,t),l=(n=!1)?null:t.__k,a=[],s=[],de(t,r=t.__k=Pe(j,null,[r]),l||q,q,t.namespaceURI,l?null:t.firstChild?J.call(t.childNodes):null,a,l?l.__e:t.firstChild,n,s),Le(a,r,s)}function He(r){function t(i){var n,l;return this.getChildContext||(n=new Set,(l={})[t.__c]=this,this.getChildContext=function(){return l},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(a){this.props.value!=a.value&&n.forEach(function(s){s.__e=!0,ae(s)})},this.sub=function(a){n.add(a);var s=a.componentWillUnmount;a.componentWillUnmount=function(){n&&n.delete(a),s&&s.call(a)}}),i.children}return t.__c="__cC"+Ie++,t.__=r,t.Provider=t.__l=(t.Consumer=function(i,n){return i.children(n)}).contextType=t,t}J=Q.slice,g={__e:function(r,t,i,n){for(var l,a,s;t=t.__;)if((l=t.__c)&&!l.__)try{if((a=l.constructor)&&a.getDerivedStateFromError!=null&&(l.setState(a.getDerivedStateFromError(r)),s=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(r,n||{}),s=l.__d),s)return l.__E=l}catch(o){r=o}throw r}},$e=0,z.prototype.setState=function(r,t){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=C({},this.state),typeof r=="function"&&(r=r(C({},i),this.props)),r&&C(i,r),r!=null&&this.__v&&(t&&this._sb.push(t),ae(this))},z.prototype.forceUpdate=function(r){this.__v&&(this.__e=!0,r&&this.__h.push(r),ae(this))},z.prototype.render=j,I=[],Te=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ce=function(r,t){return r.__v.__b-t.__v.__b},G.__r=0,De=/(PointerCapture)$|Capture$/i,ce=0,re=_e(!1),ie=_e(!0),Ie=0;var at=0;function e(r,t,i,n,l,a){t||(t={});var s,o,p=t;if("ref"in p)for(o in p={},t)o=="ref"?s=t[o]:p[o]=t[o];var d={type:r,props:p,key:i,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--at,__i:-1,__u:0,__source:l,__self:a};if(typeof r=="function"&&(s=r.defaultProps))for(o in s)p[o]===void 0&&(p[o]=s[o]);return g.vnode&&g.vnode(d),d}var H,v,ee,fe,K=0,We=[],N=g,ge=N.__b,ve=N.__r,be=N.diffed,we=N.__c,Ne=N.unmount,ye=N.__;function X(r,t){N.__h&&N.__h(v,r,K||t),K=0;var i=v.__H||(v.__H={__:[],__h:[]});return r>=i.__.length&&i.__.push({}),i.__[r]}function le(r){return K=1,nt(qe,r)}function nt(r,t,i){var n=X(H++,2);if(n.t=r,!n.__c&&(n.__=[qe(void 0,t),function(o){var p=n.__N?n.__N[0]:n.__[0],d=n.t(p,o);p!==d&&(n.__N=[d,n.__[1]],n.__c.setState({}))}],n.__c=v,!v.__f)){var l=function(o,p,d){if(!n.__c.__H)return!0;var u=n.__c.__H.__.filter(function(_){return _.__c});if(u.every(function(_){return!_.__N}))return!a||a.call(this,o,p,d);var c=n.__c.props!==o;return u.some(function(_){if(_.__N){var h=_.__[0];_.__=_.__N,_.__N=void 0,h!==_.__[0]&&(c=!0)}}),a&&a.call(this,o,p,d)||c};v.__f=!0;var a=v.shouldComponentUpdate,s=v.componentWillUpdate;v.componentWillUpdate=function(o,p,d){if(this.__e){var u=a;a=void 0,l(o,p,d),a=u}s&&s.call(this,o,p,d)},v.shouldComponentUpdate=l}return n.__N||n.__}function Oe(r,t){var i=X(H++,3);!N.__s&&Ve(i.__H,t)&&(i.__=r,i.u=t,v.__H.__h.push(i))}function te(r){return K=5,Be(function(){return{current:r}},[])}function Be(r,t){var i=X(H++,7);return Ve(i.__H,t)&&(i.__=r(),i.__H=t,i.__h=r),i.__}function ze(r){var t=v.context[r.__c],i=X(H++,9);return i.c=r,t?(i.__==null&&(i.__=!0,t.sub(v)),t.props.value):r.__}function lt(){for(var r;r=We.shift();){var t=r.__H;if(r.__P&&t)try{t.__h.some(V),t.__h.some(se),t.__h=[]}catch(i){t.__h=[],N.__e(i,r.__v)}}}N.__b=function(r){v=null,ge&&ge(r)},N.__=function(r,t){r&&t.__k&&t.__k.__m&&(r.__m=t.__k.__m),ye&&ye(r,t)},N.__r=function(r){ve&&ve(r),H=0;var t=(v=r.__c).__H;t&&(ee===v?(t.__h=[],v.__h=[],t.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(t.__h.some(V),t.__h.some(se),t.__h=[],H=0)),ee=v},N.diffed=function(r){be&&be(r);var t=r.__c;t&&t.__H&&(t.__H.__h.length&&(We.push(t)!==1&&fe===N.requestAnimationFrame||((fe=N.requestAnimationFrame)||st)(lt)),t.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),ee=v=null},N.__c=function(r,t){t.some(function(i){try{i.__h.some(V),i.__h=i.__h.filter(function(n){return!n.__||se(n)})}catch(n){t.some(function(l){l.__h&&(l.__h=[])}),t=[],N.__e(n,i.__v)}}),we&&we(r,t)},N.unmount=function(r){Ne&&Ne(r);var t,i=r.__c;i&&i.__H&&(i.__H.__.some(function(n){try{V(n)}catch(l){t=l}}),i.__H=void 0,t&&N.__e(t,i.__v))};var xe=typeof requestAnimationFrame=="function";function st(r){var t,i=function(){clearTimeout(n),xe&&cancelAnimationFrame(t),setTimeout(r)},n=setTimeout(i,35);xe&&(t=requestAnimationFrame(i))}function V(r){var t=v,i=r.__c;typeof i=="function"&&(r.__c=void 0,i()),v=t}function se(r){var t=v;r.__c=r.__(),v=t}function Ve(r,t){return!r||r.length!==t.length||t.some(function(i,n){return i!==r[n]})}function qe(r,t){return typeof t=="function"?t(r):t}function O(){return typeof window>"u"?"/":new URL(window.location.href).pathname.replace(/\/+$/g,"")||"/"}function ct(r){if(typeof window>"u")return r||"/";const t=new URL(r,window.location.origin);return`${t.pathname.replace(/\/+$/g,"")||"/"}${t.search}${t.hash}`}function ot(r){return r.metaKey||r.ctrlKey||r.shiftKey||r.altKey}const Qe=He({path:"/",navigate:()=>{}});function dt({children:r}){const[t,i]=le(O());Oe(()=>{const l=()=>{i(O())};return window.addEventListener("popstate",l),()=>{window.removeEventListener("popstate",l)}},[]);const n=Be(()=>({path:t,navigate(l,a=!1){const s=ct(l),o=`${O()}${window.location.search}${window.location.hash}`;s!==o&&(a?window.history.replaceState(null,"",s):window.history.pushState(null,"",s)),i(O()),window.scrollTo(0,0)}}),[t]);return e(Qe.Provider,{value:n,children:r})}function pe(){return ze(Qe)}function A({to:r,href:t,onClick:i,replace:n=!1,target:l,rel:a,children:s,...o}){const{navigate:p}=pe(),d=r||t||"/";return e("a",{href:d,onClick:c=>{i==null||i(c),!(c.defaultPrevented||c.button!==0||ot(c)||l&&l!=="_self"||new URL(d,window.location.origin).origin!==window.location.origin)&&(c.preventDefault(),p(d,n))},target:l,rel:a,...o,children:s})}const mt=7777,Ge={meta:{version:"1.0"},project:{name:"",repo:"",created_at:""},tasks:[],ci:{status:"unknown",last_run:"",workflow_url:""},nudges:[],commits:[],reviews:[],init_commit:""},Ke=He({state:Ge,connected:!1});function pt({children:r}){const[t,i]=le(Ge),[n,l]=le(!1),a=te(0),s=te(null),o=te(null);return Oe(()=>{let p=!1;const d=async()=>{try{const c=await fetch("/api/state");if(!c.ok)return;const _=await c.json();p||i(_)}catch{}},u=()=>{if(p)return;const c=new WebSocket(`ws://localhost:${mt}/ws`);s.current=c,c.onopen=()=>{a.current=0,p||l(!0)},c.onmessage=_=>{try{const h=JSON.parse(_.data);p||i(h)}catch{}},c.onerror=()=>{p||l(!1)},c.onclose=()=>{p||(l(!1),!(a.current>=5)&&(a.current+=1,o.current=window.setTimeout(u,2e3)))}};return d(),u(),()=>{p=!0,l(!1),o.current&&window.clearTimeout(o.current),s.current&&s.current.close()}},[]),Pe(Ke.Provider,{value:{state:t,connected:n}},r)}function D(){return ze(Ke)}const ht=[{href:"/",label:"Dashboard"},{href:"/issues",label:"Issues"},{href:"/ci",label:"Actions"},{href:"/nudges",label:"Nudges"},{href:"/timetrack",label:"Time"},{href:"/commits",label:"Commits"},{href:"/reviews",label:"Reviews"},{href:"/settings",label:"Settings"}];function ut(r){return{padding:"12px 16px",borderRadius:"14px",fontWeight:700,color:r?"#63a5ff":"#c2cce0",background:r?"rgba(47, 129, 247, 0.16)":"transparent",border:r?"1px solid rgba(47, 129, 247, 0.22)":"1px solid transparent"}}function _t(){var n;const{state:r}=D(),{path:t}=pe(),i=(((n=r.project)==null?void 0:n.name)||"DD").split(/[\s-]+/).filter(Boolean).slice(0,2).map(l=>{var a;return(a=l[0])==null?void 0:a.toUpperCase()}).join("")||"DD";return e("header",{style:{position:"sticky",top:0,zIndex:20,borderBottom:"1px solid rgba(122, 147, 191, 0.14)",background:"rgba(10, 16, 27, 0.9)",backdropFilter:"blur(14px)"},children:e("div",{style:{width:"min(1560px, calc(100% - 48px))",margin:"0 auto",display:"flex",alignItems:"center",gap:"22px",padding:"14px 0",flexWrap:"wrap"},children:[e(A,{to:"/",style:{display:"flex",alignItems:"center",gap:"14px",marginRight:"8px"},children:[e("span",{style:{width:"42px",height:"42px",borderRadius:"13px",display:"grid",placeItems:"center",fontWeight:800,background:"linear-gradient(180deg, #2f81f7, #1f6bd8)",color:"white",boxShadow:"0 10px 24px rgba(47, 129, 247, 0.28)"},children:"DD"}),e("div",{children:[e("div",{style:{fontSize:"1.9rem",fontWeight:800,letterSpacing:"-0.03em",color:"#f4f7fb"},children:"DevDive"}),e("div",{style:{color:"#8f9db6",marginTop:"-2px"},children:r.project.name||"Project control room"})]})]}),e("nav",{style:{display:"flex",flexWrap:"wrap",gap:"10px",marginRight:"auto"},children:ht.map(l=>{const a=t===l.href;return e(A,{to:l.href,"aria-current":a?"page":void 0,style:ut(a),children:l.label},l.href)})}),e("div",{style:{minWidth:"280px",flex:"0 1 340px",display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"16px",border:"1px solid rgba(122, 147, 191, 0.16)",background:"#141e31",color:"#8f9db6"},children:[e("span",{style:{fontWeight:800},children:"?"}),e("input",{type:"text",placeholder:"Search issues, tasks...",style:{flex:1,background:"transparent",border:0,outline:"none",color:"#dfe7f5"}}),e("span",{style:{padding:"4px 8px",borderRadius:"10px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",fontSize:"0.8rem"},children:"/"})]}),e("span",{style:{width:"42px",height:"42px",borderRadius:"999px",display:"grid",placeItems:"center",fontWeight:800,color:"#f4f7fb",background:"linear-gradient(180deg, #273652, #172131)",border:"1px solid rgba(122, 147, 191, 0.18)"},children:i})]})})}const ke={open:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},todo:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},in_progress:{background:"rgba(47, 129, 247, 0.16)",border:"rgba(47, 129, 247, 0.24)",color:"#7db1ff"},review:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},complete:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},rejected:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},done:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},passing:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},failing:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},pending:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},unknown:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},critical:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},warning:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},info:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},active:{background:"rgba(47, 129, 247, 0.16)",border:"rgba(47, 129, 247, 0.24)",color:"#7db1ff"},manual:{background:"rgba(154, 104, 255, 0.16)",border:"rgba(154, 104, 255, 0.24)",color:"#c7a0ff"}};function T({status:r}){const t=r||"unknown",i=ke[t]||ke.unknown;return e("span",{style:{display:"inline-flex",alignItems:"center",padding:"6px 10px",borderRadius:"999px",background:i.background,border:`1px solid ${i.border}`,color:i.color,fontSize:"0.78rem",fontWeight:700,textTransform:"capitalize",whiteSpace:"nowrap"},children:t.replaceAll("_"," ")})}const ft=72,gt=[{key:"core",title:"Core Features",items:["Plan init from the README, current repo files, and recent commit history.","Re-evaluate GitHub issues from real code changes and update their state.","Detect README changes and update the board when project intent shifts.","Review project drift against the README, codebase, and recent work."]},{key:"workflow",title:"Workflow Features",items:["Refine project intent by updating the README or plan.","Add AI issue guidance with implementation tips and advice.","Add progress check-ins for stale or slow-moving work.","Build a priority list from existing issues and current code state."]},{key:"evaluation",title:"Evaluation Features",items:["Re-evaluate issues incrementally using the last reviewed commit window.","Distinguish todo, in progress, review, rejected, and complete.","Separate ready for approval from actually complete.","Review changed code for poor implementation and queue follow-up work."]}],vt=["README is the primary source of project intent.","Codebase and commit history are used as evidence of progress.","Review should inspect actual files, not just devdive.json.","Sync should keep GitHub issue state and local state aligned."],Je=new Set(["auth","api","database","backend","security"]),Re={todo:"tone-slate",in_progress:"tone-blue",review:"tone-amber",rejected:"tone-rose",complete:"tone-green"},Se={todo:"To Do",in_progress:"In Progress",review:"In Review",rejected:"Rejected",complete:"Complete"};function P(r){const t=new Date(r||"").getTime();return Number.isFinite(t)?t:0}function bt(r){const t=P(r);return t?(Date.now()-t)/36e5:Number.POSITIVE_INFINITY}function wt(r){switch((r||"").toLowerCase()){case"open":return"todo";case"done":return"complete";default:return(r||"todo").toLowerCase()}}function Nt(r){const t={};for(const i of r.commits||[]){const n=i.analysed_at||"",l=i.commit_hash||"";for(const a of i.tasks_progressed||[]){const s=t[a]||{commitCount:0};t[a]={...s,commitCount:s.commitCount+1,lastTouchedAt:n,lastProgressedAt:n,lastCommitHash:l}}for(const a of i.tasks_updated||[]){const s=t[a]||{commitCount:0};t[a]={...s,commitCount:s.commitCount+1,lastTouchedAt:n,lastUpdatedAt:n,lastCommitHash:l}}}return t}function yt(r){const t=r.reviews||[];return t.length>0?t[t.length-1]:null}function xt(r,t,i){const n=wt(r.status);if(n==="rejected"||n==="review"||n==="in_progress")return n;if(n==="complete"){const l=t.lastTouchedAt||"";return!i||P(l)>P(i)?"review":"complete"}return t.lastProgressedAt?"in_progress":"todo"}function kt(r,t,i,n){const l=r.labels||[];return t==="review"?"Code looks implemented, but it still needs a clean review pass before it counts as complete.":i&&t==="in_progress"?"Work started but has gone quiet. Schedule a progress check-in before the issue drifts.":i?"This issue has not moved recently. Re-scope it or reconnect it to the current README intent.":l.some(a=>Je.has((a||"").toLowerCase()))?r.design_notes||"This issue touches a core system path. Validate it against the existing codebase before changing state.":n>0?r.design_notes||"Recent code evidence exists. Use the latest commit window when deciding the next state change.":r.design_notes||"No implementation evidence yet. Start from the current README and repository structure."}function Rt(r){let t=0;return r.workflowStage==="review"?t+=40:r.workflowStage==="in_progress"?t+=28:r.workflowStage==="todo"&&(t+=14),r.stale&&(t+=22),(r.labels||[]).some(i=>Je.has((i||"").toLowerCase()))&&(t+=14),t+=Math.min(Number(r.estimate_hours||0),13),t+=Math.min(r.commitCount||0,6),t}function St(r){return r.workflowStage==="review"?"Ready for approval":r.stale?"Needs check-in":r.workflowStage==="in_progress"?"Active implementation":"Backlog candidate"}function M(r,t="No signal yet"){if(!r)return t;const i=Date.now()-P(r),n=Math.floor(i/6e4);if(n<1)return"Just now";if(n<60)return`${n} minutes ago`;const l=Math.floor(n/60);return l<24?`${l} hours ago`:`${Math.floor(l/24)} days ago`}function At(r){return r?new Date(r).toLocaleString():"Unknown"}function L(r){var x,w,f;const t=yt(r),i=(t==null?void 0:t.reviewed_at)||"",n=Nt(r),l=((x=r.project)==null?void 0:x.created_at)||"",a=(r.commits||[]).filter(m=>i?P(m.analysed_at)>P(i):!0),s=(r.tasks||[]).map(m=>{const b=n[m.id]||{commitCount:0},$=b.lastTouchedAt||"",k=xt(m,b,i),E=k!=="complete"&&k!=="rejected"&&bt($||l)>=ft,U=b.commitCount||0,R=kt(m,k,E,U),S={...m,workflowStage:k,workflowLabel:Se[k]||Se.todo,workflowTone:Re[k]||Re.todo,lastTouchedAt:$,lastCommitHash:b.lastCommitHash||"",commitCount:U,stale:E,readyForApproval:k==="review",actuallyComplete:k==="complete",nextAction:R};return S.priorityScore=Rt(S),S.prioritySummary=St(S),S}),o={todo:[],in_progress:[],review:[],rejected:[],complete:[]};for(const m of s)o[m.workflowStage]=o[m.workflowStage]||[],o[m.workflowStage].push(m);const p=[...s].filter(m=>m.workflowStage!=="complete"&&m.workflowStage!=="rejected").sort((m,b)=>b.priorityScore-m.priorityScore),d=[...s].filter(m=>m.stale).sort((m,b)=>b.priorityScore-m.priorityScore),u=[...o.review].sort((m,b)=>b.priorityScore-m.priorityScore),c=[...o.complete].sort((m,b)=>P(b.lastTouchedAt)-P(m.lastTouchedAt)),_=[{title:"README Intent",status:r.init_commit?"active":"manual",detail:r.init_commit?"Use the README as the planning baseline and refine it when project intent changes.":"No init baseline recorded yet."},{title:"Repository Evidence",status:s.length>0?"active":"manual",detail:s.length>0?`${s.length} tracked issues are mapped onto the current project state.`:"Run init to generate an issue-backed project plan."},{title:"Recent Commit History",status:(w=r.commits)!=null&&w.length?"active":"manual",detail:(f=r.commits)!=null&&f.length?`${r.commits.length} analysed commits are available as evidence for re-evaluation.`:"No analysed commits yet. The review window will stay empty until code starts moving."}],h=p.slice(0,6).map(m=>({id:m.id||m.title,title:m.title,workflowStage:m.workflowStage,workflowLabel:m.workflowLabel,workflowTone:m.workflowTone,summary:m.nextAction,detail:m.design_notes||"No design notes available yet.",stale:m.stale,issueURL:m.issue_url,lastTouchedAt:m.lastTouchedAt}));return{latestReview:t,latestReviewAt:i,commitsSinceReview:a,tasks:s,tasksByStage:o,priorityTasks:p,staleTasks:d,reviewQueue:u,completedTasks:c,issueGuidance:h,intentSources:_,commandRecipes:[{title:"Refine intent from the README",command:"devdive init --from-readme",detail:"Use this when the README or plan changes enough that the issue board should be regenerated."},{title:"Re-sync issue state from real work",command:"devdive sync",detail:"Pull the current state back into alignment after new commits, issue changes, or nudges."},{title:"Run an incremental drift review",command:"devdive review",detail:"Use recent commit evidence to separate ready-for-approval work from actually complete work."}]}}function $t(r){var i,n,l,a;const t=[];for(const s of(r.commits||[]).slice(-4))t.push({id:`commit-${s.commit_hash}`,title:s.summary||"Commit analysis recorded",body:`Used real code changes to move ${((i=s.tasks_progressed)==null?void 0:i.length)||0} issues forward and close ${((n=s.tasks_updated)==null?void 0:n.length)||0}.`,time:s.analysed_at,tone:"blue",icon:"CM"});for(const s of(r.nudges||[]).slice(-3))t.push({id:`nudge-${s.created_at}`,title:"AI guidance posted",body:s.message,time:s.created_at,tone:"purple",icon:"AI"});for(const s of(r.reviews||[]).slice(-2))t.push({id:`review-${s.reviewed_at}`,title:s.findings.length===0?"Review cleared the current window":`Review found ${s.findings.length} drift items`,body:s.findings.length===0?"No architectural drift detected in the latest review scope.":((l=s.findings[0])==null?void 0:l.finding)||"Recent work needs follow-up before it is complete.",time:s.reviewed_at,tone:s.findings.some(o=>o.severity==="critical")?"rose":"green",icon:"RV"});return(a=r.ci)!=null&&a.last_run&&t.push({id:`ci-${r.ci.last_run}`,title:`CI is ${r.ci.status.replaceAll("_"," ")}`,body:r.ci.workflow_url?"Latest workflow run is linked on the Actions page.":"Waiting for a workflow run URL.",time:r.ci.last_run,tone:r.ci.status==="failing"?"rose":"green",icon:"CI"}),t.filter(s=>s.time).sort((s,o)=>new Date(o.time)-new Date(s.time)).slice(0,6)}function Tt(){const{state:r}=D(),t=L(r),i=$t(r),n=t.tasks.filter(a=>a.workflowStage!=="complete"&&a.workflowStage!=="rejected"),l=t.priorityTasks.slice(0,3);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Dashboard"}),e("h1",{className:"page-title",children:r.project.name||"DevDive Overview"}),e("p",{className:"page-subtitle",children:"A README-led operations view that uses repo evidence, recent commits, and review windows to prioritize what should move next."})]}),e("div",{className:"hero-actions",children:[e(A,{className:"button-secondary",to:"/issues",children:"Open issue flow"}),e(A,{className:"button",to:"/reviews",children:"Inspect review window"})]})]}),e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Active Issues"}),e("div",{className:"metric-icon metric-icon--blue",children:"IS"})]}),e("div",{className:"metric-card__value",children:[n.length,e("span",{className:"metric-card__delta",children:[t.tasks.length," tracked"]})]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Ready For Approval"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:[t.reviewQueue.length,e("span",{className:"metric-card__delta",children:[t.completedTasks.length," confirmed complete"]})]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"AI Nudges"}),e("div",{className:"metric-icon metric-icon--purple",children:"CK"})]}),e("div",{className:"metric-card__value",children:[r.nudges.length,e("span",{className:"metric-card__delta",children:[t.priorityTasks.length," priority candidates"]})]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Commits Since Review"}),e("div",{className:"metric-icon metric-icon--green",children:"CM"})]}),e("div",{className:"metric-card__value",children:[t.commitsSinceReview.length,e("span",{className:"metric-card__delta",children:t.latestReviewAt?`Latest review ${M(t.latestReviewAt)}`:"No review baseline yet"})]})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Recent Activity"}),e(A,{className:"panel-link",to:"/commits",children:"Open timeline"})]}),i.length===0?e("div",{className:"empty-state",children:"No recent activity yet. Run init and start committing to populate the dashboard."}):e("div",{className:"timeline-list",children:i.map(a=>e("article",{className:"timeline-item",children:[e("div",{className:`timeline-icon timeline-icon--${a.tone}`,children:a.icon}),e("div",{children:[e("h3",{className:"timeline-title",children:a.title}),e("p",{className:"timeline-copy",children:a.body})]}),e("div",{className:"timeline-time",children:M(a.time)})]},a.id))})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Priority Queue"}),e(A,{className:"panel-link",to:"/issues",children:"View board"})]}),l.length===0?e("div",{className:"empty-state",children:"No active tasks. Run devdive init to generate a project plan."}):e("div",{className:"priority-list",children:[l.map(a=>e("article",{className:"priority-card",children:[e("div",{className:"card-head",children:[e("span",{className:`priority-ribbon ${a.workflowTone}`,children:a.prioritySummary}),e(T,{status:a.workflowStage})]}),e("h3",{className:"priority-title",children:a.title}),e("p",{className:"card-copy",children:a.nextAction}),e("div",{className:"issue-meta",children:[e("span",{children:[Number(a.estimate_hours||0).toFixed(1),"h estimate"]}),e("span",{children:a.id?`#${a.id}`:"Untracked"})]})]},a.id||a.title)),e("div",{className:"dashed-card",children:"+ Build Priority List"})]})]})]})]})}const Ct=[{key:"todo",title:"To Do"},{key:"in_progress",title:"In Progress"},{key:"review",title:"In Review"},{key:"rejected",title:"Rejected"},{key:"complete",title:"Complete"}];function Dt({task:r,index:t}){const i=(r.title||"T").split(/\s+/).slice(0,2).map(n=>{var l;return(l=n[0])==null?void 0:l.toUpperCase()}).join("");return e("article",{className:"issue-card",children:[e("div",{className:"issue-card__head",children:[e("span",{className:"issue-id",children:r.id?`#${r.id}`:"Task"}),e(T,{status:r.workflowStage})]}),e("h3",{className:"issue-title",children:r.title}),e("div",{className:"pill-row",children:[(r.labels||[]).map(n=>e("span",{className:`label-tag ${t%4===0?"tone-blue":t%4===1?"tone-purple":t%4===2?"tone-amber":"tone-slate"}`,children:n},`${r.id}-${n}`)),r.stale?e("span",{className:"label-tag tone-rose",children:"stale"}):null,r.readyForApproval?e("span",{className:"label-tag tone-amber",children:"approval gate"}):null]}),e("p",{className:"card-copy",style:{marginTop:"14px"},children:r.nextAction}),e("div",{className:"issue-meta",children:[e("div",{className:"status-row",children:[e("span",{className:"avatar-chip",children:i}),e("span",{children:[Number(r.estimate_hours||0).toFixed(1),"h"]}),e("span",{children:[r.commitCount," commits"]})]}),r.issue_url?e("a",{className:"panel-link",href:r.issue_url,target:"_blank",rel:"noreferrer",children:"Open issue"}):e("span",{children:r.lastTouchedAt?`Touched ${M(r.lastTouchedAt)}`:"No code evidence yet"})]})]})}function It(){const{state:r}=D(),t=L(r),i=t.tasks.reduce((n,l)=>n+Number(l.estimate_hours||0),0);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Issues"}),e("h1",{className:"page-title",children:r.project.name||"Issue Flow"}),e("p",{className:"page-subtitle",children:"Workflow states are derived from README-led planning, actual commit evidence, and the latest review window rather than a blank-slate board."})]}),e("div",{className:"hero-actions",children:[e("span",{className:"button-secondary",children:[i.toFixed(1),"h scoped"]}),e(A,{className:"button",to:"/reviews",children:"Review current window"})]})]}),e("div",{className:"board-toolbar",children:[e("div",{className:"toolbar-row",children:[e("span",{className:"toolbar-chip",children:"README intent"}),e("span",{className:"toolbar-chip",children:"Repo files"}),e("span",{className:"toolbar-chip",children:"Commit evidence"}),e("span",{className:"toolbar-chip",children:"Drift review"})]}),e("div",{className:"toolbar-row",children:[e("span",{className:"toolbar-chip--active",children:[t.reviewQueue.length," awaiting approval"]}),e("span",{className:"toolbar-chip",children:[t.staleTasks.length," stale check-ins"]})]})]}),t.tasks.length===0?e("div",{className:"empty-state",children:"No tasks yet. Run devdive init to get started."}):e("div",{className:"board-grid",children:Ct.map(n=>{var l;return e("section",{className:"board-column",children:[e("div",{className:"board-column__head",children:[e("div",{className:"board-column__title",children:[e("span",{children:n.title}),e("span",{className:`board-count ${((l=t.tasksByStage[n.key][0])==null?void 0:l.workflowTone)||"tone-slate"}`,children:t.tasksByStage[n.key].length})]}),e("span",{className:"ghost-action",children:"..."})]}),e("div",{className:"board-stack",children:[t.tasksByStage[n.key].length===0?e("div",{className:"board-empty",children:n.key==="review"?"Nothing is waiting on approval yet.":n.key==="complete"?"Completed work will settle here after review clears it.":"Nothing parked here yet."}):t.tasksByStage[n.key].map((a,s)=>e(Dt,{task:a,index:s},`${n.key}-${a.id}-${a.title}`)),n.key==="todo"?e("div",{className:"dashed-card",children:"+ Rebuild from README"}):null]})]},n.key)})})]})}function Ae(r){if(!r)return"No runs yet";const t=Date.now()-new Date(r).getTime(),i=Math.floor(t/6e4);if(i<1)return"Just now";if(i<60)return`${i} minutes ago`;const n=Math.floor(i/60);return n<24?`${n} hours ago`:`${Math.floor(n/24)} days ago`}function Pt(){const{state:r}=D(),t=r.reviews[0],i=r.nudges[r.nudges.length-1];return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Actions"}),e("h1",{className:"page-title",children:"Build and Release Health"}),e("p",{className:"page-subtitle",children:"The CI signal sits inside the same operational frame as nudges, drift, and recent delivery activity."})]}),e("div",{className:"hero-actions",children:r.ci.workflow_url?e("a",{className:"button",href:r.ci.workflow_url,target:"_blank",rel:"noreferrer",children:"Open workflow"}):e("span",{className:"button-secondary",children:"Waiting for workflow URL"})})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Current Run"}),e(T,{status:r.ci.status})]}),e("div",{className:"stack-list",children:e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:"Workflow status"}),e("h3",{className:"card-title",style:{textTransform:"capitalize"},children:r.ci.status.replaceAll("_"," ")})]}),e("div",{className:"metric-icon metric-icon--green",children:"CI"})]}),r.ci.status==="unknown"?e("p",{className:"card-copy",children:"No CI runs detected yet."}):e(j,{children:[e("p",{className:"card-copy",children:["Last run completed ",Ae(r.ci.last_run),"."]}),e("div",{className:"issue-meta",children:[e("span",{children:r.ci.workflow_url?"Workflow run available":"No workflow link yet"}),r.ci.workflow_url?e("a",{className:"panel-link",href:r.ci.workflow_url,target:"_blank",rel:"noreferrer",children:"View workflow"}):null]})]})]})})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Related Signals"}),e(A,{className:"panel-link",to:"/reviews",children:"Open reviews"})]}),e("div",{className:"stack-list",children:[e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:"Latest review"}),e("h3",{className:"card-title",children:t?`${t.findings.length} findings in latest review`:"No design reviews yet"}),e("p",{className:"card-copy",children:t?`Reviewed ${Ae(t.reviewed_at)}.`:"Run devdive review to compare the codebase against the original plan."})]}),e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:"Latest nudge"}),e("h3",{className:"card-title",children:i?"AI advisory available":"No nudges yet"}),e("p",{className:"card-copy",children:i?i.message:"Operational nudges will appear here when CI or reviews need attention."})]})]})]})]})]})}function Mt(r){const t=[];for(const i of r.issueGuidance.slice(0,4))t.push({id:`tip-${i.id}`,title:i.title,message:i.summary,detail:i.detail,createdAt:i.lastTouchedAt,ribbon:i.stale?"Progress Check-in":"Implementation Tip",tone:i.stale?"tone-rose":i.workflowTone});return t}function Et(){const{state:r}=D(),t=L(r),i=[...r.nudges].reverse().map((a,s)=>({id:`nudge-${s}-${a.created_at}`,title:a.message,message:"Generated from current state transitions, failing signals, or architectural drift.",detail:"Use this as issue guidance, not just a passive notification.",createdAt:a.created_at,ribbon:"AI Advisory",tone:"tone-purple"})),n=Mt(t),l=[...i,...n];return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Nudges"}),e("h1",{className:"page-title",children:"Advisory Feed"}),e("p",{className:"page-subtitle",children:"AI guidance now mixes global nudges with issue-level implementation tips and stale-work check-ins."})]}),e("div",{className:"hero-actions",children:e("span",{className:"button-secondary",children:[l.length," guidance items"]})})]}),l.length===0?e("div",{className:"empty-state",children:"No nudges yet. DevDive will suggest improvements as work starts moving."}):e("div",{className:"stack-list",children:l.map(a=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("span",{className:`priority-ribbon ${a.tone}`,children:a.ribbon}),e("span",{className:"card-time",children:a.createdAt?M(a.createdAt):"Planning signal"})]}),e("h3",{className:"card-title",children:a.title}),e("p",{className:"card-copy",children:a.message}),e("p",{className:"detail-text",style:{marginTop:"12px"},children:a.detail})]},a.id))})]})}function jt(){const{state:r}=D(),t=L(r),i=t.tasks.reduce((o,p)=>o+Number(p.estimate_hours||0),0),n=t.completedTasks.reduce((o,p)=>o+Number(p.estimate_hours||0),0),l=t.reviewQueue.reduce((o,p)=>o+Number(p.estimate_hours||0),0),a=Math.max(i-n,0),s=i===0?0:Math.round(n/i*100);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Time"}),e("h1",{className:"page-title",children:"Burndown and Throughput"}),e("p",{className:"page-subtitle",children:"Burndown now distinguishes implemented work waiting on review from work that is actually complete."})]})}),t.tasks.length===0?e("div",{className:"empty-state",children:"No tasks yet."}):e(j,{children:[e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Estimated"}),e("div",{className:"metric-icon metric-icon--blue",children:"ET"})]}),e("div",{className:"metric-card__value",children:[i.toFixed(1),"h"]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Complete"}),e("div",{className:"metric-icon metric-icon--green",children:"OK"})]}),e("div",{className:"metric-card__value",children:[n.toFixed(1),"h"]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Awaiting Review"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:[l.toFixed(1),"h"]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Remaining"}),e("div",{className:"metric-icon metric-icon--purple",children:"RM"})]}),e("div",{className:"metric-card__value",children:[a.toFixed(1),"h"]})]})]}),e("div",{className:"panel",children:[e("div",{className:"panel-header",children:[e("strong",{children:"Burndown Progress"}),e("span",{children:[s,"%"]})]}),e("div",{className:"progress-track",children:e("div",{className:"progress-fill",style:{width:`${s}%`}})})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Workflow Timing"}),e(A,{className:"panel-link",to:"/issues",children:"Open board"})]}),e("div",{className:"table-wrap",children:e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{children:"Title"}),e("th",{children:"Estimate"}),e("th",{children:"Stage"}),e("th",{children:"Last Touched"})]})}),e("tbody",{children:t.tasks.map(o=>e("tr",{children:[e("td",{children:o.title}),e("td",{children:[Number(o.estimate_hours||0).toFixed(1),"h"]}),e("td",{children:e(T,{status:o.workflowStage})}),e("td",{children:o.lastTouchedAt?M(o.lastTouchedAt):"No code evidence yet"})]},`${o.id}-${o.title}`))})]})})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Check-ins"}),e(A,{className:"panel-link",to:"/nudges",children:"Open guidance"})]}),t.staleTasks.length===0?e("div",{className:"empty-state",children:"No stale tasks are asking for a check-in."}):e("div",{className:"stack-list",children:t.staleTasks.slice(0,4).map(o=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:o.id?`Issue #${o.id}`:"Planned task"}),e("h3",{className:"card-title",children:o.title})]}),e(T,{status:o.workflowStage})]}),e("p",{className:"card-copy",children:o.nextAction})]},`checkin-${o.id||o.title}`))})]})]})]})]})}function Lt(){const{state:r}=D(),t=L(r),i=[...r.commits].reverse(),n=r.commits.reduce((a,s)=>{var o;return a+(((o=s.tasks_updated)==null?void 0:o.length)||0)},0),l=r.commits.reduce((a,s)=>{var o;return a+(((o=s.tasks_progressed)==null?void 0:o.length)||0)},0);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Commits"}),e("h1",{className:"page-title",children:"Delivery Timeline"}),e("p",{className:"page-subtitle",children:"Recent commits are treated as planning evidence so issue state can be re-evaluated incrementally instead of by keyword heuristics."})]})}),e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Analysed Commits"}),e("div",{className:"metric-icon metric-icon--blue",children:"CM"})]}),e("div",{className:"metric-card__value",children:r.commits.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Since Last Review"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:t.commitsSinceReview.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Issues Progressed"}),e("div",{className:"metric-icon metric-icon--purple",children:"IP"})]}),e("div",{className:"metric-card__value",children:l})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Issues Completed"}),e("div",{className:"metric-icon metric-icon--green",children:"DN"})]}),e("div",{className:"metric-card__value",children:n})]})]}),i.length===0?e("div",{className:"empty-state",children:"No commits analysed yet. DevDive analyses your commits as you push."}):e("div",{className:"stack-list",children:i.map(a=>{const s=t.latestReviewAt?new Date(a.analysed_at)>new Date(t.latestReviewAt):!0;return e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("strong",{className:"mono",children:(a.commit_hash||"").slice(0,7)||"unknown"}),e("span",{className:"card-time",children:M(a.analysed_at)})]}),e("h3",{className:"card-title",children:a.summary}),e("p",{className:"card-copy",children:s?"This commit is still inside the active review window.":"This commit has already been covered by the latest review window."}),e("div",{className:"pill-row",children:[(a.tasks_updated||[]).map(o=>e("span",{className:"label-tag tone-green",children:["complete #",o]},`closed-${a.commit_hash}-${o}`)),(a.tasks_progressed||[]).map(o=>e("span",{className:"label-tag tone-blue",children:["progress #",o]},`progress-${a.commit_hash}-${o}`))]})]},`${a.commit_hash}-${a.analysed_at}`)})})]})}function Ut(){const{state:r}=D(),t=L(r),i=[...r.reviews].reverse(),n=i[0];return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Reviews"}),e("h1",{className:"page-title",children:"Architecture Reviews"}),e("p",{className:"page-subtitle",children:"Review windows separate code that looks ready from work that is actually complete after the latest review pass."})]})}),n&&n.findings.length===0?e("div",{className:"banner",children:"No drift detected in the latest review window."}):null,e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Ready For Approval"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:t.reviewQueue.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Actually Complete"}),e("div",{className:"metric-icon metric-icon--green",children:"OK"})]}),e("div",{className:"metric-card__value",children:t.completedTasks.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Commits In Scope"}),e("div",{className:"metric-icon metric-icon--blue",children:"CM"})]}),e("div",{className:"metric-card__value",children:t.commitsSinceReview.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Latest Findings"}),e("div",{className:"metric-icon metric-icon--purple",children:"DR"})]}),e("div",{className:"metric-card__value",children:(n==null?void 0:n.findings.length)||0})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Incremental Review Scope"}),e(A,{className:"panel-link",to:"/commits",children:"Open commits"})]}),e("div",{className:"stack-list",children:[e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:"Review baseline"}),e("h3",{className:"card-title",children:t.latestReviewAt?`Last review ${M(t.latestReviewAt)}`:"No review baseline yet"})]}),e(T,{status:t.latestReviewAt?"active":"manual"})]}),e("p",{className:"card-copy",children:t.latestReviewAt?`${t.commitsSinceReview.length} commits and ${t.reviewQueue.length} issues are waiting to be re-evaluated.`:`The first review should inspect all ${r.commits.length} analysed commits since init.`})]}),e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:"Approval gate"}),e("h3",{className:"card-title",children:[t.reviewQueue.length," issues appear ready, ",t.completedTasks.length," are actually complete"]})]}),e(T,{status:"review"})]}),e("p",{className:"card-copy",children:"DevDive now keeps a separate in-review state so changed code can be approved before it settles into complete."})]})]})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Approval Queue"}),e(A,{className:"panel-link",to:"/issues",children:"Open board"})]}),t.reviewQueue.length===0?e("div",{className:"empty-state",children:"No issues are waiting on approval right now."}):e("div",{className:"stack-list",children:t.reviewQueue.slice(0,5).map(l=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:l.id?`Issue #${l.id}`:"Planned task"}),e("h3",{className:"card-title",children:l.title})]}),e(T,{status:l.workflowStage})]}),e("p",{className:"card-copy",children:l.nextAction})]},`review-${l.id||l.title}`))})]})]}),i.length===0?e("div",{className:"empty-state",children:"No design reviews yet. DevDive reviews your architecture every 10 commits."}):e("div",{className:"stack-list",children:i.map(l=>e("article",{className:"list-card",children:[e("div",{style:{marginBottom:"12px",color:"var(--text-muted)"},children:["Reviewed ",M(l.reviewed_at)]}),l.findings.length===0?e("div",{className:"card-copy",children:"No findings for this review."}):e("div",{className:"stack-list",children:l.findings.map((a,s)=>e("article",{className:"summary-card",children:[e("div",{className:"card-head",children:[e("code",{className:"mono",children:a.file}),e(T,{status:a.severity})]}),e("p",{className:"card-copy",children:a.finding})]},`${a.file}-${a.detected_at}-${s}`))})]},l.reviewed_at))})]})}function Ft(){var i;const{state:r}=D(),t=L(r);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Settings"}),e("h1",{className:"page-title",children:"Project Configuration and Intent"}),e("p",{className:"page-subtitle",children:"Project metadata, planning assumptions, and the commands that refine README-led intent over time."})]})}),e("div",{className:"settings-grid",children:[e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Project Name"}),e("h3",{className:"card-title",children:r.project.name||"Unknown"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Repo"}),e("h3",{className:"card-title",children:r.project.repo||"Unknown"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Created"}),e("h3",{className:"card-title",children:At(r.project.created_at)})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Schema Version"}),e("h3",{className:"card-title",children:((i=r.meta)==null?void 0:i.version)||"1.0"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Init Commit"}),e("h3",{className:"card-title mono",children:r.init_commit||"Unknown"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Rollback"}),e("p",{className:"card-copy",children:["Run ",e("code",{className:"mono",children:"devdive rollback --sha <commit-sha>"})," to restore a prior state snapshot."]})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Intent Sources"}),e("span",{className:"panel-link",children:"README first"})]}),e("div",{className:"stack-list",children:t.intentSources.map(n=>e("article",{className:"list-card",children:e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:n.title}),e("h3",{className:"card-title",children:n.detail})]}),e(T,{status:n.status})]})},n.title))})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Refine Intent"}),e("span",{className:"panel-link",children:"CLI recipes"})]}),e("div",{className:"stack-list",children:t.commandRecipes.map(n=>e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:n.title}),e("h3",{className:"card-title mono",children:n.command}),e("p",{className:"card-copy",children:n.detail})]},n.command))})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Plan Scope"}),e("span",{className:"panel-link",children:"Message file"})]}),e("div",{className:"stack-list",children:gt.map(n=>e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:n.title}),e("div",{className:"stack-list",children:n.items.map(l=>e("div",{className:"card-copy",children:["- ",l]},l))})]},n.key))})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Assumptions"}),e("span",{className:"panel-link",children:"Operational rules"})]}),e("div",{className:"stack-list",children:vt.map(n=>e("article",{className:"list-card",children:e("p",{className:"card-copy",children:n})},n))})]})]})]})}function Ht(){const{path:r}=pe();switch(r){case"/issues":return e(It,{});case"/ci":return e(Pt,{});case"/nudges":return e(Et,{});case"/timetrack":return e(jt,{});case"/commits":return e(Lt,{});case"/reviews":return e(Ut,{});case"/settings":return e(Ft,{});case"/":default:return e(Tt,{})}}function Wt(){return e(j,{children:[e("style",{children:`
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
          padding: 34px 0 48px;
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

        @media (max-width: 1240px) {
          .split-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 860px) {
          .shell-main {
            width: calc(100% - 28px);
            padding: 22px 0 32px;
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

        }
      `}),e(pt,{children:e(dt,{children:e("div",{className:"shell",children:[e(_t,{}),e("main",{className:"shell-main",children:e(Ht,{})})]})})})]})}it(e(Wt,{}),document.getElementById("app"));

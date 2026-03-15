(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();var J,g,$e,P,he,Ce,Te,De,ce,re,ae,Ie,V={},q=[],Ye=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;function T(t,r){for(var a in r)t[a]=r[a];return t}function oe(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Pe(t,r,a){var n,s,i,l={};for(i in r)i=="key"?n=r[i]:i=="ref"?s=r[i]:l[i]=r[i];if(arguments.length>2&&(l.children=arguments.length>3?J.call(arguments,2):a),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)l[i]===void 0&&(l[i]=t.defaultProps[i]);return B(t,l,n,s,null)}function B(t,r,a,n,s){var i={type:t,props:r,key:a,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++$e,__i:-1,__u:0};return s==null&&g.vnode!=null&&g.vnode(i),i}function j(t){return t.children}function z(t,r){this.props=t,this.context=r}function H(t,r){if(r==null)return t.__?H(t.__,t.__i+1):null;for(var a;r<t.__k.length;r++)if((a=t.__k[r])!=null&&a.__e!=null)return a.__e;return typeof t.type=="function"?H(t):null}function Xe(t){if(t.__P&&t.__d){var r=t.__v,a=r.__e,n=[],s=[],i=T({},r);i.__v=r.__v+1,g.vnode&&g.vnode(i),de(t.__P,i,r,t.__n,t.__P.namespaceURI,32&r.__u?[a]:null,n,a??H(r),!!(32&r.__u),s),i.__v=r.__v,i.__.__k[i.__i]=i,Le(n,i,s),r.__e=r.__=null,i.__e!=a&&Ee(i)}}function Ee(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(r){if(r!=null&&r.__e!=null)return t.__e=t.__c.base=r.__e}),Ee(t)}function ie(t){(!t.__d&&(t.__d=!0)&&P.push(t)&&!Q.__r++||he!=g.debounceRendering)&&((he=g.debounceRendering)||Ce)(Q)}function Q(){try{for(var t,r=1;P.length;)P.length>r&&P.sort(Te),t=P.shift(),r=P.length,Xe(t)}finally{P.length=Q.__r=0}}function Me(t,r,a,n,s,i,l,o,m,d,u){var c,_,h,y,k,w,f,p=n&&n.__k||q,b=r.length;for(m=Ze(a,r,p,m,b),c=0;c<b;c++)(h=a.__k[c])!=null&&(_=h.__i!=-1&&p[h.__i]||V,h.__i=c,w=de(t,h,_,s,i,l,o,m,d,u),y=h.__e,h.ref&&_.ref!=h.ref&&(_.ref&&me(_.ref,null,h),u.push(h.ref,h.__c||y,h)),k==null&&y!=null&&(k=y),(f=!!(4&h.__u))||_.__k===h.__k?m=je(h,m,t,f):typeof h.type=="function"&&w!==void 0?m=w:y&&(m=y.nextSibling),h.__u&=-7);return a.__e=k,m}function Ze(t,r,a,n,s){var i,l,o,m,d,u=a.length,c=u,_=0;for(t.__k=new Array(s),i=0;i<s;i++)(l=r[i])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=t.__k[i]=B(null,l,null,null,null):Y(l)?l=t.__k[i]=B(j,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=t.__k[i]=B(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):t.__k[i]=l,m=i+_,l.__=t,l.__b=t.__b+1,o=null,(d=l.__i=et(l,a,m,c))!=-1&&(c--,(o=a[d])&&(o.__u|=2)),o==null||o.__v==null?(d==-1&&(s>u?_--:s<u&&_++),typeof l.type!="function"&&(l.__u|=4)):d!=m&&(d==m-1?_--:d==m+1?_++:(d>m?_--:_++,l.__u|=4))):t.__k[i]=null;if(c)for(i=0;i<u;i++)(o=a[i])!=null&&!(2&o.__u)&&(o.__e==n&&(n=H(o)),He(o,o));return n}function je(t,r,a,n){var s,i;if(typeof t.type=="function"){for(s=t.__k,i=0;s&&i<s.length;i++)s[i]&&(s[i].__=t,r=je(s[i],r,a,n));return r}t.__e!=r&&(n&&(r&&t.type&&!r.parentNode&&(r=H(t)),a.insertBefore(t.__e,r||null)),r=t.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function et(t,r,a,n){var s,i,l,o=t.key,m=t.type,d=r[a],u=d!=null&&(2&d.__u)==0;if(d===null&&o==null||u&&o==d.key&&m==d.type)return a;if(n>(u?1:0)){for(s=a-1,i=a+1;s>=0||i<r.length;)if((d=r[l=s>=0?s--:i++])!=null&&!(2&d.__u)&&o==d.key&&m==d.type)return l}return-1}function ue(t,r,a){r[0]=="-"?t.setProperty(r,a??""):t[r]=a==null?"":typeof a!="number"||Ye.test(r)?a:a+"px"}function W(t,r,a,n,s){var i,l;e:if(r=="style")if(typeof a=="string")t.style.cssText=a;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(r in n)a&&r in a||ue(t.style,r,"");if(a)for(r in a)n&&a[r]==n[r]||ue(t.style,r,a[r])}else if(r[0]=="o"&&r[1]=="n")i=r!=(r=r.replace(De,"$1")),l=r.toLowerCase(),r=l in t||r=="onFocusOut"||r=="onFocusIn"?l.slice(2):r.slice(2),t.l||(t.l={}),t.l[r+i]=a,a?n?a.u=n.u:(a.u=ce,t.addEventListener(r,i?ae:re,i)):t.removeEventListener(r,i?ae:re,i);else{if(s=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in t)try{t[r]=a??"";break e}catch{}typeof a=="function"||(a==null||a===!1&&r[4]!="-"?t.removeAttribute(r):t.setAttribute(r,r=="popover"&&a==1?"":a))}}function _e(t){return function(r){if(this.l){var a=this.l[r.type+t];if(r.t==null)r.t=ce++;else if(r.t<a.u)return;return a(g.event?g.event(r):r)}}}function de(t,r,a,n,s,i,l,o,m,d){var u,c,_,h,y,k,w,f,p,b,$,x,Z,M,U,R=r.type;if(r.constructor!==void 0)return null;128&a.__u&&(m=!!(32&a.__u),i=[o=r.__e=a.__e]),(u=g.__b)&&u(r);e:if(typeof R=="function")try{if(f=r.props,p=R.prototype&&R.prototype.render,b=(u=R.contextType)&&n[u.__c],$=u?b?b.props.value:u.__:n,a.__c?w=(c=r.__c=a.__c).__=c.__E:(p?r.__c=c=new R(f,$):(r.__c=c=new z(f,$),c.constructor=R,c.render=rt),b&&b.sub(c),c.state||(c.state={}),c.__n=n,_=c.__d=!0,c.__h=[],c._sb=[]),p&&c.__s==null&&(c.__s=c.state),p&&R.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=T({},c.__s)),T(c.__s,R.getDerivedStateFromProps(f,c.__s))),h=c.props,y=c.state,c.__v=r,_)p&&R.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),p&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(p&&R.getDerivedStateFromProps==null&&f!==h&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(f,$),r.__v==a.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(f,c.__s,$)===!1){r.__v!=a.__v&&(c.props=f,c.state=c.__s,c.__d=!1),r.__e=a.__e,r.__k=a.__k,r.__k.some(function(S){S&&(S.__=r)}),q.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&l.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(f,c.__s,$),p&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(h,y,k)})}if(c.context=$,c.props=f,c.__P=t,c.__e=!1,x=g.__r,Z=0,p)c.state=c.__s,c.__d=!1,x&&x(r),u=c.render(c.props,c.state,c.context),q.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,x&&x(r),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++Z<25);c.state=c.__s,c.getChildContext!=null&&(n=T(T({},n),c.getChildContext())),p&&!_&&c.getSnapshotBeforeUpdate!=null&&(k=c.getSnapshotBeforeUpdate(h,y)),M=u!=null&&u.type===j&&u.key==null?Ue(u.props.children):u,o=Me(t,Y(M)?M:[M],r,a,n,s,i,l,o,m,d),c.base=r.__e,r.__u&=-161,c.__h.length&&l.push(c),w&&(c.__E=c.__=null)}catch(S){if(r.__v=null,m||i!=null)if(S.then){for(r.__u|=m?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;i[i.indexOf(o)]=null,r.__e=o}else{for(U=i.length;U--;)oe(i[U]);ne(r)}else r.__e=a.__e,r.__k=a.__k,S.then||ne(r);g.__e(S,r,a)}else i==null&&r.__v==a.__v?(r.__k=a.__k,r.__e=a.__e):o=r.__e=tt(a.__e,r,a,n,s,i,l,m,d);return(u=g.diffed)&&u(r),128&r.__u?void 0:o}function ne(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(ne))}function Le(t,r,a){for(var n=0;n<a.length;n++)me(a[n],a[++n],a[++n]);g.__c&&g.__c(r,t),t.some(function(s){try{t=s.__h,s.__h=[],t.some(function(i){i.call(s)})}catch(i){g.__e(i,s.__v)}})}function Ue(t){return typeof t!="object"||t==null||t.__b>0?t:Y(t)?t.map(Ue):T({},t)}function tt(t,r,a,n,s,i,l,o,m){var d,u,c,_,h,y,k,w=a.props||V,f=r.props,p=r.type;if(p=="svg"?s="http://www.w3.org/2000/svg":p=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(d=0;d<i.length;d++)if((h=i[d])&&"setAttribute"in h==!!p&&(p?h.localName==p:h.nodeType==3)){t=h,i[d]=null;break}}if(t==null){if(p==null)return document.createTextNode(f);t=document.createElementNS(s,p,f.is&&f),o&&(g.__m&&g.__m(r,i),o=!1),i=null}if(p==null)w===f||o&&t.data==f||(t.data=f);else{if(i=i&&J.call(t.childNodes),!o&&i!=null)for(w={},d=0;d<t.attributes.length;d++)w[(h=t.attributes[d]).name]=h.value;for(d in w)h=w[d],d=="dangerouslySetInnerHTML"?c=h:d=="children"||d in f||d=="value"&&"defaultValue"in f||d=="checked"&&"defaultChecked"in f||W(t,d,null,h,s);for(d in f)h=f[d],d=="children"?_=h:d=="dangerouslySetInnerHTML"?u=h:d=="value"?y=h:d=="checked"?k=h:o&&typeof h!="function"||w[d]===h||W(t,d,h,w[d],s);if(u)o||c&&(u.__html==c.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),r.__k=[];else if(c&&(t.innerHTML=""),Me(r.type=="template"?t.content:t,Y(_)?_:[_],r,a,n,p=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,l,i?i[0]:a.__k&&H(a,0),o,m),i!=null)for(d=i.length;d--;)oe(i[d]);o||(d="value",p=="progress"&&y==null?t.removeAttribute("value"):y!=null&&(y!==t[d]||p=="progress"&&!y||p=="option"&&y!=w[d])&&W(t,d,y,w[d],s),d="checked",k!=null&&k!=t[d]&&W(t,d,k,w[d],s))}return t}function me(t,r,a){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&r==null||(t.__u=t(r))}else t.current=r}catch(s){g.__e(s,a)}}function He(t,r,a){var n,s;if(g.unmount&&g.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||me(n,null,r)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){g.__e(i,r)}n.base=n.__P=null}if(n=t.__k)for(s=0;s<n.length;s++)n[s]&&He(n[s],r,a||typeof t.type!="function");a||oe(t.__e),t.__c=t.__=t.__e=void 0}function rt(t,r,a){return this.constructor(t,a)}function at(t,r,a){var n,s,i,l;r==document&&(r=document.documentElement),g.__&&g.__(t,r),s=(n=!1)?null:r.__k,i=[],l=[],de(r,t=r.__k=Pe(j,null,[t]),s||V,V,r.namespaceURI,s?null:r.firstChild?J.call(r.childNodes):null,i,s?s.__e:r.firstChild,n,l),Le(i,t,l)}function Fe(t){function r(a){var n,s;return this.getChildContext||(n=new Set,(s={})[r.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(i){this.props.value!=i.value&&n.forEach(function(l){l.__e=!0,ie(l)})},this.sub=function(i){n.add(i);var l=i.componentWillUnmount;i.componentWillUnmount=function(){n&&n.delete(i),l&&l.call(i)}}),a.children}return r.__c="__cC"+Ie++,r.__=t,r.Provider=r.__l=(r.Consumer=function(a,n){return a.children(n)}).contextType=r,r}J=q.slice,g={__e:function(t,r,a,n){for(var s,i,l;r=r.__;)if((s=r.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(t)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,n||{}),l=s.__d),l)return s.__E=s}catch(o){t=o}throw t}},$e=0,z.prototype.setState=function(t,r){var a;a=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=T({},this.state),typeof t=="function"&&(t=t(T({},a),this.props)),t&&T(a,t),t!=null&&this.__v&&(r&&this._sb.push(r),ie(this))},z.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ie(this))},z.prototype.render=j,P=[],Ce=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Te=function(t,r){return t.__v.__b-r.__v.__b},Q.__r=0,De=/(PointerCapture)$|Capture$/i,ce=0,re=_e(!1),ae=_e(!0),Ie=0;var it=0;function e(t,r,a,n,s,i){r||(r={});var l,o,m=r;if("ref"in m)for(o in m={},r)o=="ref"?l=r[o]:m[o]=r[o];var d={type:t,props:m,key:a,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--it,__i:-1,__u:0,__source:s,__self:i};if(typeof t=="function"&&(l=t.defaultProps))for(o in l)m[o]===void 0&&(m[o]=l[o]);return g.vnode&&g.vnode(d),d}var F,v,ee,fe,K=0,We=[],N=g,ge=N.__b,ve=N.__r,be=N.diffed,we=N.__c,Ne=N.unmount,ye=N.__;function X(t,r){N.__h&&N.__h(v,t,K||r),K=0;var a=v.__H||(v.__H={__:[],__h:[]});return t>=a.__.length&&a.__.push({}),a.__[t]}function se(t){return K=1,nt(Ve,t)}function nt(t,r,a){var n=X(F++,2);if(n.t=t,!n.__c&&(n.__=[Ve(void 0,r),function(o){var m=n.__N?n.__N[0]:n.__[0],d=n.t(m,o);m!==d&&(n.__N=[d,n.__[1]],n.__c.setState({}))}],n.__c=v,!v.__f)){var s=function(o,m,d){if(!n.__c.__H)return!0;var u=n.__c.__H.__.filter(function(_){return _.__c});if(u.every(function(_){return!_.__N}))return!i||i.call(this,o,m,d);var c=n.__c.props!==o;return u.some(function(_){if(_.__N){var h=_.__[0];_.__=_.__N,_.__N=void 0,h!==_.__[0]&&(c=!0)}}),i&&i.call(this,o,m,d)||c};v.__f=!0;var i=v.shouldComponentUpdate,l=v.componentWillUpdate;v.componentWillUpdate=function(o,m,d){if(this.__e){var u=i;i=void 0,s(o,m,d),i=u}l&&l.call(this,o,m,d)},v.shouldComponentUpdate=s}return n.__N||n.__}function Oe(t,r){var a=X(F++,3);!N.__s&&Ge(a.__H,r)&&(a.__=t,a.u=r,v.__H.__h.push(a))}function te(t){return K=5,Be(function(){return{current:t}},[])}function Be(t,r){var a=X(F++,7);return Ge(a.__H,r)&&(a.__=t(),a.__H=r,a.__h=t),a.__}function ze(t){var r=v.context[t.__c],a=X(F++,9);return a.c=t,r?(a.__==null&&(a.__=!0,r.sub(v)),r.props.value):t.__}function st(){for(var t;t=We.shift();){var r=t.__H;if(t.__P&&r)try{r.__h.some(G),r.__h.some(le),r.__h=[]}catch(a){r.__h=[],N.__e(a,t.__v)}}}N.__b=function(t){v=null,ge&&ge(t)},N.__=function(t,r){t&&r.__k&&r.__k.__m&&(t.__m=r.__k.__m),ye&&ye(t,r)},N.__r=function(t){ve&&ve(t),F=0;var r=(v=t.__c).__H;r&&(ee===v?(r.__h=[],v.__h=[],r.__.some(function(a){a.__N&&(a.__=a.__N),a.u=a.__N=void 0})):(r.__h.some(G),r.__h.some(le),r.__h=[],F=0)),ee=v},N.diffed=function(t){be&&be(t);var r=t.__c;r&&r.__H&&(r.__H.__h.length&&(We.push(r)!==1&&fe===N.requestAnimationFrame||((fe=N.requestAnimationFrame)||lt)(st)),r.__H.__.some(function(a){a.u&&(a.__H=a.u),a.u=void 0})),ee=v=null},N.__c=function(t,r){r.some(function(a){try{a.__h.some(G),a.__h=a.__h.filter(function(n){return!n.__||le(n)})}catch(n){r.some(function(s){s.__h&&(s.__h=[])}),r=[],N.__e(n,a.__v)}}),we&&we(t,r)},N.unmount=function(t){Ne&&Ne(t);var r,a=t.__c;a&&a.__H&&(a.__H.__.some(function(n){try{G(n)}catch(s){r=s}}),a.__H=void 0,r&&N.__e(r,a.__v))};var ke=typeof requestAnimationFrame=="function";function lt(t){var r,a=function(){clearTimeout(n),ke&&cancelAnimationFrame(r),setTimeout(t)},n=setTimeout(a,35);ke&&(r=requestAnimationFrame(a))}function G(t){var r=v,a=t.__c;typeof a=="function"&&(t.__c=void 0,a()),v=r}function le(t){var r=v;t.__c=t.__(),v=r}function Ge(t,r){return!t||t.length!==r.length||r.some(function(a,n){return a!==t[n]})}function Ve(t,r){return typeof r=="function"?r(t):r}function O(){return typeof window>"u"?"/":new URL(window.location.href).pathname.replace(/\/+$/g,"")||"/"}function ct(t){if(typeof window>"u")return t||"/";const r=new URL(t,window.location.origin);return`${r.pathname.replace(/\/+$/g,"")||"/"}${r.search}${r.hash}`}function ot(t){return t.metaKey||t.ctrlKey||t.shiftKey||t.altKey}const qe=Fe({path:"/",navigate:()=>{}});function dt({children:t}){const[r,a]=se(O());Oe(()=>{const s=()=>{a(O())};return window.addEventListener("popstate",s),()=>{window.removeEventListener("popstate",s)}},[]);const n=Be(()=>({path:r,navigate(s,i=!1){const l=ct(s),o=`${O()}${window.location.search}${window.location.hash}`;l!==o&&(i?window.history.replaceState(null,"",l):window.history.pushState(null,"",l)),a(O()),window.scrollTo(0,0)}}),[r]);return e(qe.Provider,{value:n,children:t})}function pe(){return ze(qe)}function A({to:t,href:r,onClick:a,replace:n=!1,target:s,rel:i,children:l,...o}){const{navigate:m}=pe(),d=t||r||"/";return e("a",{href:d,onClick:c=>{a==null||a(c),!(c.defaultPrevented||c.button!==0||ot(c)||s&&s!=="_self"||new URL(d,window.location.origin).origin!==window.location.origin)&&(c.preventDefault(),m(d,n))},target:s,rel:i,...o,children:l})}const mt=7777,Qe={meta:{version:"1.0"},project:{name:"",repo:"",created_at:""},tasks:[],ci:{status:"unknown",last_run:"",workflow_url:""},nudges:[],commits:[],state_commits:[],reviews:[],init_commit:"",sync:{last_issue_sync:"",last_evaluated_commit:"",last_readme_hash:"",last_readme_sync:""}},Ke=Fe({state:Qe,connected:!1});function pt({children:t}){const[r,a]=se(Qe),[n,s]=se(!1),i=te(0),l=te(null),o=te(null);return Oe(()=>{let m=!1;const d=async()=>{try{const c=await fetch("/api/state");if(!c.ok)return;const _=await c.json();m||a(_)}catch{}},u=()=>{if(m)return;const c=new WebSocket(`ws://localhost:${mt}/ws`);l.current=c,c.onopen=()=>{i.current=0,m||s(!0)},c.onmessage=_=>{try{const h=JSON.parse(_.data);m||a(h)}catch{}},c.onerror=()=>{m||s(!1)},c.onclose=()=>{m||(s(!1),!(i.current>=5)&&(i.current+=1,o.current=window.setTimeout(u,2e3)))}};return d(),u(),()=>{m=!0,s(!1),o.current&&window.clearTimeout(o.current),l.current&&l.current.close()}},[]),Pe(Ke.Provider,{value:{state:r,connected:n}},t)}function I(){return ze(Ke)}const ht=[{href:"/",label:"Dashboard"},{href:"/issues",label:"Issues"},{href:"/ci",label:"Actions"},{href:"/nudges",label:"Nudges"},{href:"/timetrack",label:"Time"},{href:"/commits",label:"Commits"},{href:"/reviews",label:"Reviews"},{href:"/settings",label:"Settings"}];function ut(t){return{padding:"12px 16px",borderRadius:"14px",fontWeight:700,color:t?"#63a5ff":"#c2cce0",background:t?"rgba(47, 129, 247, 0.16)":"transparent",border:t?"1px solid rgba(47, 129, 247, 0.22)":"1px solid transparent"}}function _t(){var n;const{state:t}=I(),{path:r}=pe(),a=(((n=t.project)==null?void 0:n.name)||"DD").split(/[\s-]+/).filter(Boolean).slice(0,2).map(s=>{var i;return(i=s[0])==null?void 0:i.toUpperCase()}).join("")||"DD";return e("header",{style:{position:"sticky",top:0,zIndex:20,borderBottom:"1px solid rgba(122, 147, 191, 0.14)",background:"rgba(10, 16, 27, 0.9)",backdropFilter:"blur(14px)"},children:e("div",{style:{width:"min(1560px, calc(100% - 48px))",margin:"0 auto",display:"flex",alignItems:"center",gap:"22px",padding:"14px 0",flexWrap:"wrap"},children:[e(A,{to:"/",style:{display:"flex",alignItems:"center",gap:"14px",marginRight:"8px"},children:[e("span",{style:{width:"42px",height:"42px",borderRadius:"13px",display:"grid",placeItems:"center",fontWeight:800,background:"linear-gradient(180deg, #2f81f7, #1f6bd8)",color:"white",boxShadow:"0 10px 24px rgba(47, 129, 247, 0.28)"},children:"DD"}),e("div",{children:[e("div",{style:{fontSize:"1.9rem",fontWeight:800,letterSpacing:"-0.03em",color:"#f4f7fb"},children:"DevDive"}),e("div",{style:{color:"#8f9db6",marginTop:"-2px"},children:t.project.name||"Project control room"})]})]}),e("nav",{style:{display:"flex",flexWrap:"wrap",gap:"10px",marginRight:"auto"},children:ht.map(s=>{const i=r===s.href;return e(A,{to:s.href,"aria-current":i?"page":void 0,style:ut(i),children:s.label},s.href)})}),e("div",{style:{minWidth:"280px",flex:"0 1 340px",display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"16px",border:"1px solid rgba(122, 147, 191, 0.16)",background:"#141e31",color:"#8f9db6"},children:[e("span",{style:{fontWeight:800},children:"?"}),e("input",{type:"text",placeholder:"Search issues, tasks...",style:{flex:1,background:"transparent",border:0,outline:"none",color:"#dfe7f5"}}),e("span",{style:{padding:"4px 8px",borderRadius:"10px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",fontSize:"0.8rem"},children:"/"})]}),e("span",{style:{width:"42px",height:"42px",borderRadius:"999px",display:"grid",placeItems:"center",fontWeight:800,color:"#f4f7fb",background:"linear-gradient(180deg, #273652, #172131)",border:"1px solid rgba(122, 147, 191, 0.18)"},children:a})]})})}const xe={todo:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},in_progress:{background:"rgba(47, 129, 247, 0.16)",border:"rgba(47, 129, 247, 0.24)",color:"#7db1ff"},review:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},rejected:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},complete:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},passing:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},failing:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},pending:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},unknown:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},critical:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},warning:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},info:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},active:{background:"rgba(47, 129, 247, 0.16)",border:"rgba(47, 129, 247, 0.24)",color:"#7db1ff"},manual:{background:"rgba(154, 104, 255, 0.16)",border:"rgba(154, 104, 255, 0.24)",color:"#c7a0ff"}};function C({status:t}){const a={open:"todo",done:"complete"}[t]||t||"unknown",n=xe[a]||xe.unknown;return e("span",{style:{display:"inline-flex",alignItems:"center",padding:"6px 10px",borderRadius:"999px",background:n.background,border:`1px solid ${n.border}`,color:n.color,fontSize:"0.78rem",fontWeight:700,textTransform:"capitalize",whiteSpace:"nowrap"},children:a.replaceAll("_"," ")})}const ft=72,gt=[{key:"core",title:"Core Features",items:["Plan init from the README, current repo files, and recent commit history.","Re-evaluate GitHub issues from real code changes and update their state.","Detect README changes and update the board when project intent shifts.","Review project drift against the README, codebase, and recent work."]},{key:"workflow",title:"Workflow Features",items:["Refine project intent by updating the README or plan.","Add AI issue guidance with implementation tips and advice.","Add progress check-ins for stale or slow-moving work.","Build a priority list from existing issues and current code state."]},{key:"evaluation",title:"Evaluation Features",items:["Re-evaluate issues incrementally using the last reviewed commit window.","Distinguish todo, in progress, review, rejected, and complete.","Separate ready for approval from actually complete.","Review changed code for poor implementation and queue follow-up work."]}],vt=["README is the primary source of project intent.","Codebase and commit history are used as evidence of progress.","Review should inspect actual files, not just devdive.json.","Sync should keep GitHub issue state and local state aligned."],Je=new Set(["auth","api","database","backend","security"]),Re={todo:"tone-slate",in_progress:"tone-blue",review:"tone-amber",rejected:"tone-rose",complete:"tone-green"},Se={todo:"To Do",in_progress:"In Progress",review:"In Review",rejected:"Rejected",complete:"Complete"};function E(t){const r=new Date(t||"").getTime();return Number.isFinite(r)?r:0}function bt(t){const r=E(t);return r?(Date.now()-r)/36e5:Number.POSITIVE_INFINITY}function wt(t){switch((t||"").toLowerCase()){case"open":return"todo";case"done":return"complete";default:return(t||"todo").toLowerCase()}}function Nt(t){const r={};for(const a of t.commits||[]){const n=a.analysed_at||"",s=a.commit_hash||"";for(const i of a.tasks_progressed||[]){const l=r[i]||{commitCount:0};r[i]={...l,commitCount:l.commitCount+1,lastTouchedAt:n,lastProgressedAt:n,lastCommitHash:s}}for(const i of a.tasks_updated||[]){const l=r[i]||{commitCount:0};r[i]={...l,commitCount:l.commitCount+1,lastTouchedAt:n,lastUpdatedAt:n,lastCommitHash:s}}}return r}function yt(t){const r=t.reviews||[];return r.length>0?r[r.length-1]:null}function kt(t,r,a){const n=wt(t.status);if(n==="rejected"||n==="review"||n==="in_progress")return n;if(n==="complete"){const s=r.lastTouchedAt||"";return!a||E(s)>E(a)?"review":"complete"}return r.lastProgressedAt?"in_progress":"todo"}function xt(t,r,a,n){const s=t.labels||[];return r==="review"?"Code looks implemented, but it still needs a clean review pass before it counts as complete.":a&&r==="in_progress"?"Work started but has gone quiet. Schedule a progress check-in before the issue drifts.":a?"This issue has not moved recently. Re-scope it or reconnect it to the current README intent.":s.some(i=>Je.has((i||"").toLowerCase()))?t.design_notes||"This issue touches a core system path. Validate it against the existing codebase before changing state.":n>0?t.design_notes||"Recent code evidence exists. Use the latest commit window when deciding the next state change.":t.design_notes||"No implementation evidence yet. Start from the current README and repository structure."}function Rt(t){let r=0;return t.workflowStage==="review"?r+=40:t.workflowStage==="in_progress"?r+=28:t.workflowStage==="todo"&&(r+=14),t.stale&&(r+=22),(t.labels||[]).some(a=>Je.has((a||"").toLowerCase()))&&(r+=14),r+=Math.min(Number(t.estimate_hours||0),13),r+=Math.min(t.commitCount||0,6),r}function St(t){return t.workflowStage==="review"?"Ready for approval":t.stale?"Needs check-in":t.workflowStage==="in_progress"?"Active implementation":"Backlog candidate"}function D(t,r="No signal yet"){if(!t)return r;const a=Date.now()-E(t),n=Math.floor(a/6e4);if(n<1)return"Just now";if(n<60)return`${n} minutes ago`;const s=Math.floor(n/60);return s<24?`${s} hours ago`:`${Math.floor(s/24)} days ago`}function At(t){return t?new Date(t).toLocaleString():"Unknown"}function L(t){var k,w,f;const r=yt(t),a=(r==null?void 0:r.reviewed_at)||"",n=Nt(t),s=((k=t.project)==null?void 0:k.created_at)||"",i=(t.commits||[]).filter(p=>a?E(p.analysed_at)>E(a):!0),l=(t.tasks||[]).map(p=>{const b=n[p.id]||{commitCount:0},$=b.lastTouchedAt||"",x=kt(p,b,a),M=x!=="complete"&&x!=="rejected"&&bt($||s)>=ft,U=b.commitCount||0,R=xt(p,x,M,U),S={...p,workflowStage:x,workflowLabel:Se[x]||Se.todo,workflowTone:Re[x]||Re.todo,lastTouchedAt:$,lastCommitHash:b.lastCommitHash||"",commitCount:U,stale:M,readyForApproval:x==="review",actuallyComplete:x==="complete",nextAction:R};return S.priorityScore=Rt(S),S.prioritySummary=St(S),S}),o={todo:[],in_progress:[],review:[],rejected:[],complete:[]};for(const p of l)o[p.workflowStage]=o[p.workflowStage]||[],o[p.workflowStage].push(p);const m=[...l].filter(p=>p.workflowStage!=="complete"&&p.workflowStage!=="rejected").sort((p,b)=>b.priorityScore-p.priorityScore),d=[...l].filter(p=>p.stale).sort((p,b)=>b.priorityScore-p.priorityScore),u=[...o.review].sort((p,b)=>b.priorityScore-p.priorityScore),c=[...o.complete].sort((p,b)=>E(b.lastTouchedAt)-E(p.lastTouchedAt)),_=[{title:"README Intent",status:t.init_commit?"active":"manual",detail:t.init_commit?"Use the README as the planning baseline and refine it when project intent changes.":"No init baseline recorded yet."},{title:"Repository Evidence",status:l.length>0?"active":"manual",detail:l.length>0?`${l.length} tracked issues are mapped onto the current project state.`:"Run init to generate an issue-backed project plan."},{title:"Recent Commit History",status:(w=t.commits)!=null&&w.length?"active":"manual",detail:(f=t.commits)!=null&&f.length?`${t.commits.length} analysed commits are available as evidence for re-evaluation.`:"No analysed commits yet. The review window will stay empty until code starts moving."}],h=m.slice(0,6).map(p=>({id:p.id||p.title,title:p.title,workflowStage:p.workflowStage,workflowLabel:p.workflowLabel,workflowTone:p.workflowTone,summary:p.nextAction,detail:p.design_notes||"No design notes available yet.",stale:p.stale,issueURL:p.issue_url,lastTouchedAt:p.lastTouchedAt}));return{latestReview:r,latestReviewAt:a,commitsSinceReview:i,tasks:l,tasksByStage:o,priorityTasks:m,staleTasks:d,reviewQueue:u,completedTasks:c,issueGuidance:h,intentSources:_,commandRecipes:[{title:"Refine intent from the README",command:"devdive init --from-readme",detail:"Use this when the README or plan changes enough that the issue board should be regenerated."},{title:"Re-sync issue state from real work",command:"devdive sync",detail:"Pull the current state back into alignment after new commits, issue changes, or nudges."},{title:"Run an incremental drift review",command:"devdive review",detail:"Use recent commit evidence to separate ready-for-approval work from actually complete work."}]}}function $t(t){var a,n,s,i;const r=[];for(const l of(t.commits||[]).slice(-4))r.push({id:`commit-${l.commit_hash}`,title:l.summary||"Commit analysis recorded",body:`Used real code changes to move ${((a=l.tasks_progressed)==null?void 0:a.length)||0} issues forward and close ${((n=l.tasks_updated)==null?void 0:n.length)||0}.`,time:l.analysed_at,tone:"blue",icon:"CM"});[...t.state_commits||[]].sort((l,o)=>new Date(o.timestamp)-new Date(l.timestamp)).slice(0,4).forEach(l=>{r.push({id:`state-commit-${l.sha}`,title:l.message||"DevDive state synced",body:"Tracked devdive.json state was committed on GitHub and synced back into the dashboard.",time:l.timestamp,tone:"green",icon:"GH"})});for(const l of(t.nudges||[]).slice(-3))r.push({id:`nudge-${l.created_at}`,title:"AI guidance posted",body:l.message,time:l.created_at,tone:"purple",icon:"AI"});for(const l of(t.reviews||[]).slice(-2))r.push({id:`review-${l.reviewed_at}`,title:l.findings.length===0?"Review cleared the current window":`Review found ${l.findings.length} drift items`,body:l.findings.length===0?"No architectural drift detected in the latest review scope.":((s=l.findings[0])==null?void 0:s.finding)||"Recent work needs follow-up before it is complete.",time:l.reviewed_at,tone:l.findings.some(o=>o.severity==="critical")?"rose":"green",icon:"RV"});return(i=t.ci)!=null&&i.last_run&&r.push({id:`ci-${t.ci.last_run}`,title:`CI is ${t.ci.status.replaceAll("_"," ")}`,body:t.ci.workflow_url?"Latest workflow run is linked on the Actions page.":"Waiting for a workflow run URL.",time:t.ci.last_run,tone:t.ci.status==="failing"?"rose":"green",icon:"CI"}),r.filter(l=>l.time).sort((l,o)=>new Date(o.time)-new Date(l.time)).slice(0,6)}function Ct(){const{state:t}=I(),r=L(t),a=$t(t),n=r.tasks.filter(i=>i.workflowStage!=="complete"&&i.workflowStage!=="rejected"),s=r.priorityTasks.slice(0,3);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Dashboard"}),e("h1",{className:"page-title",children:t.project.name||"DevDive Overview"}),e("p",{className:"page-subtitle",children:"A README-led operations view that uses repo evidence, recent commits, and review windows to prioritize what should move next."})]}),e("div",{className:"hero-actions",children:[e(A,{className:"button-secondary",to:"/issues",children:"Open issue flow"}),e(A,{className:"button",to:"/reviews",children:"Inspect review window"})]})]}),e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Active Issues"}),e("div",{className:"metric-icon metric-icon--blue",children:"IS"})]}),e("div",{className:"metric-card__value",children:[n.length,e("span",{className:"metric-card__delta",children:[r.tasks.length," tracked"]})]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Ready For Approval"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:[r.reviewQueue.length,e("span",{className:"metric-card__delta",children:[r.completedTasks.length," confirmed complete"]})]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"AI Nudges"}),e("div",{className:"metric-icon metric-icon--purple",children:"CK"})]}),e("div",{className:"metric-card__value",children:[t.nudges.length,e("span",{className:"metric-card__delta",children:[r.priorityTasks.length," priority candidates"]})]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Commits Since Review"}),e("div",{className:"metric-icon metric-icon--green",children:"CM"})]}),e("div",{className:"metric-card__value",children:[r.commitsSinceReview.length,e("span",{className:"metric-card__delta",children:r.latestReviewAt?`Latest review ${D(r.latestReviewAt)}`:"No review baseline yet"})]})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Recent Activity"}),e(A,{className:"panel-link",to:"/commits",children:"Open timeline"})]}),a.length===0?e("div",{className:"empty-state",children:"No recent activity yet. Run init and start committing to populate the dashboard."}):e("div",{className:"timeline-list",children:a.map(i=>e("article",{className:"timeline-item",children:[e("div",{className:`timeline-icon timeline-icon--${i.tone}`,children:i.icon}),e("div",{children:[e("h3",{className:"timeline-title",children:i.title}),e("p",{className:"timeline-copy",children:i.body})]}),e("div",{className:"timeline-time",children:D(i.time)})]},i.id))})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Priority Queue"}),e(A,{className:"panel-link",to:"/issues",children:"View board"})]}),s.length===0?e("div",{className:"empty-state",children:"No active tasks. Run devdive init to generate a project plan."}):e("div",{className:"priority-list",children:[s.map(i=>e("article",{className:"priority-card",children:[e("div",{className:"card-head",children:[e("span",{className:`priority-ribbon ${i.workflowTone}`,children:i.prioritySummary}),e(C,{status:i.workflowStage})]}),e("h3",{className:"priority-title",children:i.title}),e("p",{className:"card-copy",children:i.nextAction}),e("div",{className:"issue-meta",children:[e("span",{children:[Number(i.estimate_hours||0).toFixed(1),"h estimate"]}),e("span",{children:i.id?`#${i.id}`:"Untracked"})]})]},i.id||i.title)),e("div",{className:"dashed-card",children:"+ Build Priority List"})]})]})]})]})}const Tt=[{key:"todo",title:"To Do"},{key:"in_progress",title:"In Progress"},{key:"review",title:"In Review"},{key:"rejected",title:"Rejected"},{key:"complete",title:"Complete"}];function Dt({task:t,index:r}){const a=(t.title||"T").split(/\s+/).slice(0,2).map(n=>{var s;return(s=n[0])==null?void 0:s.toUpperCase()}).join("");return e("article",{className:"issue-card",children:[e("div",{className:"issue-card__head",children:[e("span",{className:"issue-id",children:t.id?`#${t.id}`:"Task"}),e(C,{status:t.workflowStage})]}),e("h3",{className:"issue-title",children:t.title}),e("div",{className:"pill-row",children:[(t.labels||[]).map(n=>e("span",{className:`label-tag ${r%4===0?"tone-blue":r%4===1?"tone-purple":r%4===2?"tone-amber":"tone-slate"}`,children:n},`${t.id}-${n}`)),t.stale?e("span",{className:"label-tag tone-rose",children:"stale"}):null,t.readyForApproval?e("span",{className:"label-tag tone-amber",children:"approval gate"}):null]}),e("p",{className:"card-copy",style:{marginTop:"14px"},children:t.nextAction}),e("div",{className:"issue-meta",children:[e("div",{className:"status-row",children:[e("span",{className:"avatar-chip",children:a}),e("span",{children:[Number(t.estimate_hours||0).toFixed(1),"h"]}),e("span",{children:[t.commitCount," commits"]})]}),t.issue_url?e("a",{className:"panel-link",href:t.issue_url,target:"_blank",rel:"noreferrer",children:"Open issue"}):e("span",{children:t.lastTouchedAt?`Touched ${D(t.lastTouchedAt)}`:"No code evidence yet"})]})]})}function It(){const{state:t}=I(),r=L(t),a=r.tasks.reduce((n,s)=>n+Number(s.estimate_hours||0),0);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Issues"}),e("h1",{className:"page-title",children:t.project.name||"Issue Flow"}),e("p",{className:"page-subtitle",children:"Workflow states are derived from README-led planning, actual commit evidence, and the latest review window rather than a blank-slate board."})]}),e("div",{className:"hero-actions",children:[e("span",{className:"button-secondary",children:[a.toFixed(1),"h scoped"]}),e(A,{className:"button",to:"/reviews",children:"Review current window"})]})]}),e("div",{className:"board-toolbar",children:[e("div",{className:"toolbar-row",children:[e("span",{className:"toolbar-chip",children:"README intent"}),e("span",{className:"toolbar-chip",children:"Repo files"}),e("span",{className:"toolbar-chip",children:"Commit evidence"}),e("span",{className:"toolbar-chip",children:"Drift review"})]}),e("div",{className:"toolbar-row",children:[e("span",{className:"toolbar-chip--active",children:[r.reviewQueue.length," awaiting approval"]}),e("span",{className:"toolbar-chip",children:[r.staleTasks.length," stale check-ins"]})]})]}),r.tasks.length===0?e("div",{className:"empty-state",children:"No tasks yet. Run devdive init to get started."}):e("div",{className:"board-grid",children:Tt.map(n=>{var s;return e("section",{className:"board-column",children:[e("div",{className:"board-column__head",children:[e("div",{className:"board-column__title",children:[e("span",{children:n.title}),e("span",{className:`board-count ${((s=r.tasksByStage[n.key][0])==null?void 0:s.workflowTone)||"tone-slate"}`,children:r.tasksByStage[n.key].length})]}),e("span",{className:"ghost-action",children:"..."})]}),e("div",{className:"board-stack",children:[r.tasksByStage[n.key].length===0?e("div",{className:"board-empty",children:n.key==="review"?"Nothing is waiting on approval yet.":n.key==="complete"?"Completed work will settle here after review clears it.":"Nothing parked here yet."}):r.tasksByStage[n.key].map((i,l)=>e(Dt,{task:i,index:l},`${n.key}-${i.id}-${i.title}`)),n.key==="todo"?e("div",{className:"dashed-card",children:"+ Rebuild from README"}):null]})]},n.key)})})]})}function Ae(t){if(!t)return"No runs yet";const r=Date.now()-new Date(t).getTime(),a=Math.floor(r/6e4);if(a<1)return"Just now";if(a<60)return`${a} minutes ago`;const n=Math.floor(a/60);return n<24?`${n} hours ago`:`${Math.floor(n/24)} days ago`}function Pt(){const{state:t}=I(),r=t.reviews[0],a=t.nudges[t.nudges.length-1];return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Actions"}),e("h1",{className:"page-title",children:"Build and Release Health"}),e("p",{className:"page-subtitle",children:"The CI signal sits inside the same operational frame as nudges, drift, and recent delivery activity."})]}),e("div",{className:"hero-actions",children:t.ci.workflow_url?e("a",{className:"button",href:t.ci.workflow_url,target:"_blank",rel:"noreferrer",children:"Open workflow"}):e("span",{className:"button-secondary",children:"Waiting for workflow URL"})})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Current Run"}),e(C,{status:t.ci.status})]}),e("div",{className:"stack-list",children:e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:"Workflow status"}),e("h3",{className:"card-title",style:{textTransform:"capitalize"},children:t.ci.status.replaceAll("_"," ")})]}),e("div",{className:"metric-icon metric-icon--green",children:"CI"})]}),t.ci.status==="unknown"?e("p",{className:"card-copy",children:"No CI runs detected yet."}):e(j,{children:[e("p",{className:"card-copy",children:["Last run completed ",Ae(t.ci.last_run),"."]}),e("div",{className:"issue-meta",children:[e("span",{children:t.ci.workflow_url?"Workflow run available":"No workflow link yet"}),t.ci.workflow_url?e("a",{className:"panel-link",href:t.ci.workflow_url,target:"_blank",rel:"noreferrer",children:"View workflow"}):null]})]})]})})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Related Signals"}),e(A,{className:"panel-link",to:"/reviews",children:"Open reviews"})]}),e("div",{className:"stack-list",children:[e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:"Latest review"}),e("h3",{className:"card-title",children:r?`${r.findings.length} findings in latest review`:"No design reviews yet"}),e("p",{className:"card-copy",children:r?`Reviewed ${Ae(r.reviewed_at)}.`:"Run devdive review to compare the codebase against the original plan."})]}),e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:"Latest nudge"}),e("h3",{className:"card-title",children:a?"AI advisory available":"No nudges yet"}),e("p",{className:"card-copy",children:a?a.message:"Operational nudges will appear here when CI or reviews need attention."})]})]})]})]})]})}function Et(t){const r=[];for(const a of t.issueGuidance.slice(0,4))r.push({id:`tip-${a.id}`,title:a.title,message:a.summary,detail:a.detail,createdAt:a.lastTouchedAt,ribbon:a.stale?"Progress Check-in":"Implementation Tip",tone:a.stale?"tone-rose":a.workflowTone});return r}function Mt(){const{state:t}=I(),r=L(t),a=[...t.nudges].reverse().map((i,l)=>({id:`nudge-${l}-${i.created_at}`,title:i.message,message:"Generated from current state transitions, failing signals, or architectural drift.",detail:"Use this as issue guidance, not just a passive notification.",createdAt:i.created_at,ribbon:"AI Advisory",tone:"tone-purple"})),n=Et(r),s=[...a,...n];return e("section",{className:"page",children:[e("div",{className:"page-hero",children:[e("div",{children:[e("p",{className:"eyebrow",children:"Nudges"}),e("h1",{className:"page-title",children:"Advisory Feed"}),e("p",{className:"page-subtitle",children:"AI guidance now mixes global nudges with issue-level implementation tips and stale-work check-ins."})]}),e("div",{className:"hero-actions",children:e("span",{className:"button-secondary",children:[s.length," guidance items"]})})]}),s.length===0?e("div",{className:"empty-state",children:"No nudges yet. DevDive will suggest improvements as work starts moving."}):e("div",{className:"stack-list",children:s.map(i=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("span",{className:`priority-ribbon ${i.tone}`,children:i.ribbon}),e("span",{className:"card-time",children:i.createdAt?D(i.createdAt):"Planning signal"})]}),e("h3",{className:"card-title",children:i.title}),e("p",{className:"card-copy",children:i.message}),e("p",{className:"detail-text",style:{marginTop:"12px"},children:i.detail})]},i.id))})]})}function jt(){const{state:t}=I(),r=L(t),a=r.tasks.reduce((o,m)=>o+Number(m.estimate_hours||0),0),n=r.completedTasks.reduce((o,m)=>o+Number(m.estimate_hours||0),0),s=r.reviewQueue.reduce((o,m)=>o+Number(m.estimate_hours||0),0),i=Math.max(a-n,0),l=a===0?0:Math.round(n/a*100);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Time"}),e("h1",{className:"page-title",children:"Burndown and Throughput"}),e("p",{className:"page-subtitle",children:"Burndown now distinguishes implemented work waiting on review from work that is actually complete."})]})}),r.tasks.length===0?e("div",{className:"empty-state",children:"No tasks yet."}):e(j,{children:[e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Estimated"}),e("div",{className:"metric-icon metric-icon--blue",children:"ET"})]}),e("div",{className:"metric-card__value",children:[a.toFixed(1),"h"]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Complete"}),e("div",{className:"metric-icon metric-icon--green",children:"OK"})]}),e("div",{className:"metric-card__value",children:[n.toFixed(1),"h"]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Awaiting Review"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:[s.toFixed(1),"h"]})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Remaining"}),e("div",{className:"metric-icon metric-icon--purple",children:"RM"})]}),e("div",{className:"metric-card__value",children:[i.toFixed(1),"h"]})]})]}),e("div",{className:"panel",children:[e("div",{className:"panel-header",children:[e("strong",{children:"Burndown Progress"}),e("span",{children:[l,"%"]})]}),e("div",{className:"progress-track",children:e("div",{className:"progress-fill",style:{width:`${l}%`}})})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Workflow Timing"}),e(A,{className:"panel-link",to:"/issues",children:"Open board"})]}),e("div",{className:"table-wrap",children:e("table",{children:[e("thead",{children:e("tr",{children:[e("th",{children:"Title"}),e("th",{children:"Estimate"}),e("th",{children:"Stage"}),e("th",{children:"Last Touched"})]})}),e("tbody",{children:r.tasks.map(o=>e("tr",{children:[e("td",{children:o.title}),e("td",{children:[Number(o.estimate_hours||0).toFixed(1),"h"]}),e("td",{children:e(C,{status:o.workflowStage})}),e("td",{children:o.lastTouchedAt?D(o.lastTouchedAt):"No code evidence yet"})]},`${o.id}-${o.title}`))})]})})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Check-ins"}),e(A,{className:"panel-link",to:"/nudges",children:"Open guidance"})]}),r.staleTasks.length===0?e("div",{className:"empty-state",children:"No stale tasks are asking for a check-in."}):e("div",{className:"stack-list",children:r.staleTasks.slice(0,4).map(o=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:o.id?`Issue #${o.id}`:"Planned task"}),e("h3",{className:"card-title",children:o.title})]}),e(C,{status:o.workflowStage})]}),e("p",{className:"card-copy",children:o.nextAction})]},`checkin-${o.id||o.title}`))})]})]})]})]})}function Lt(){const{state:t}=I(),r=L(t),a=[...t.commits||[]].reverse(),n=[...t.state_commits||[]].sort((l,o)=>new Date(o.timestamp)-new Date(l.timestamp)),s=a.reduce((l,o)=>{var m;return l+(((m=o.tasks_progressed)==null?void 0:m.length)||0)},0),i=a.reduce((l,o)=>{var m;return l+(((m=o.tasks_updated)==null?void 0:m.length)||0)},0);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Commits"}),e("h1",{className:"page-title",children:"Delivery Timeline"}),e("p",{className:"page-subtitle",children:"Local commit analysis and synced GitHub-backed DevDive state history."})]})}),e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Analysed Commits"}),e("div",{className:"metric-icon metric-icon--blue",children:"CM"})]}),e("div",{className:"metric-card__value",children:t.commits.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Since Last Review"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:r.commitsSinceReview.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Issues Progressed"}),e("div",{className:"metric-icon metric-icon--purple",children:"IP"})]}),e("div",{className:"metric-card__value",children:s})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Issues Completed"}),e("div",{className:"metric-icon metric-icon--green",children:"DN"})]}),e("div",{className:"metric-card__value",children:i})]})]}),e("div",{className:"panel",style:{marginBottom:"1.5rem"},children:[e("div",{className:"panel-header",children:e("h2",{className:"panel-title",children:"Recent Repository Commit Analysis"})}),a.length===0?e("div",{className:"empty-state",children:"No commits analysed yet. DevDive analyses your commits as you push."}):e("div",{className:"stack-list",children:a.map(l=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("strong",{className:"mono",children:(l.commit_hash||"").slice(0,7)||"unknown"}),e("span",{className:"card-time",children:D(l.analysed_at)})]}),e("h3",{className:"card-title",children:l.summary}),e("p",{className:"card-copy",children:"Commit analysis updated task progress without relying on manual issue-closing keywords."}),e("div",{className:"pill-row",children:[(l.tasks_updated||[]).map(o=>e("span",{className:"label-tag tone-green",children:["closed #",o]},`closed-${l.commit_hash}-${o}`)),(l.tasks_progressed||[]).map(o=>e("span",{className:"label-tag tone-blue",children:["progressed #",o]},`progress-${l.commit_hash}-${o}`))]})]},`${l.commit_hash}-${l.analysed_at}`))})]}),e("div",{className:"panel",children:[e("div",{className:"panel-header",children:e("h2",{className:"panel-title",children:"Recent GitHub State Commits"})}),n.length===0?e("div",{className:"empty-state",children:"No GitHub state commits have been synced yet."}):e("div",{className:"stack-list",children:n.map(l=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("strong",{className:"mono",children:(l.sha||"").slice(0,7)||"unknown"}),e("span",{className:"card-time",children:D(l.timestamp)})]}),e("h3",{className:"card-title",children:l.message}),e("p",{className:"card-copy",children:"This timeline comes from GitHub commits to the tracked `devdive.json` state file."})]},`${l.sha}-${l.timestamp}`))})]})]})}function Ut(){const{state:t}=I(),r=L(t),a=[...t.reviews].reverse(),n=a[0];return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Reviews"}),e("h1",{className:"page-title",children:"Architecture Reviews"}),e("p",{className:"page-subtitle",children:"Review windows separate code that looks ready from work that is actually complete after the latest review pass."})]})}),n&&n.findings.length===0?e("div",{className:"banner",children:"No drift detected in the latest review window."}):null,e("div",{className:"metric-grid",children:[e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Ready For Approval"}),e("div",{className:"metric-icon metric-icon--amber",children:"RV"})]}),e("div",{className:"metric-card__value",children:r.reviewQueue.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Actually Complete"}),e("div",{className:"metric-icon metric-icon--green",children:"OK"})]}),e("div",{className:"metric-card__value",children:r.completedTasks.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Commits In Scope"}),e("div",{className:"metric-icon metric-icon--blue",children:"CM"})]}),e("div",{className:"metric-card__value",children:r.commitsSinceReview.length})]}),e("article",{className:"metric-card",children:[e("div",{className:"metric-card__top",children:[e("div",{className:"metric-card__label",children:"Latest Findings"}),e("div",{className:"metric-icon metric-icon--purple",children:"DR"})]}),e("div",{className:"metric-card__value",children:(n==null?void 0:n.findings.length)||0})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Incremental Review Scope"}),e(A,{className:"panel-link",to:"/commits",children:"Open commits"})]}),e("div",{className:"stack-list",children:[e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:"Review baseline"}),e("h3",{className:"card-title",children:r.latestReviewAt?`Last review ${D(r.latestReviewAt)}`:"No review baseline yet"})]}),e(C,{status:r.latestReviewAt?"active":"manual"})]}),e("p",{className:"card-copy",children:r.latestReviewAt?`${r.commitsSinceReview.length} commits and ${r.reviewQueue.length} issues are waiting to be re-evaluated.`:`The first review should inspect all ${t.commits.length} analysed commits since init.`})]}),e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:"Approval gate"}),e("h3",{className:"card-title",children:[r.reviewQueue.length," issues appear ready, ",r.completedTasks.length," are actually complete"]})]}),e(C,{status:"review"})]}),e("p",{className:"card-copy",children:"DevDive now keeps a separate in-review state so changed code can be approved before it settles into complete."})]})]})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Approval Queue"}),e(A,{className:"panel-link",to:"/issues",children:"Open board"})]}),r.reviewQueue.length===0?e("div",{className:"empty-state",children:"No issues are waiting on approval right now."}):e("div",{className:"stack-list",children:r.reviewQueue.slice(0,5).map(s=>e("article",{className:"list-card",children:[e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:s.id?`Issue #${s.id}`:"Planned task"}),e("h3",{className:"card-title",children:s.title})]}),e(C,{status:s.workflowStage})]}),e("p",{className:"card-copy",children:s.nextAction})]},`review-${s.id||s.title}`))})]})]}),a.length===0?e("div",{className:"empty-state",children:"No design reviews yet. DevDive reviews your architecture every 10 commits."}):e("div",{className:"stack-list",children:a.map(s=>e("article",{className:"list-card",children:[e("div",{style:{marginBottom:"12px",color:"var(--text-muted)"},children:["Reviewed ",D(s.reviewed_at)]}),s.findings.length===0?e("div",{className:"card-copy",children:"No findings for this review."}):e("div",{className:"stack-list",children:s.findings.map((i,l)=>e("article",{className:"summary-card",children:[e("div",{className:"card-head",children:[e("code",{className:"mono",children:i.file}),e(C,{status:i.severity})]}),e("p",{className:"card-copy",children:i.finding})]},`${i.file}-${i.detected_at}-${l}`))})]},s.reviewed_at))})]})}function Ht(){var a;const{state:t}=I(),r=L(t);return e("section",{className:"page",children:[e("div",{className:"page-hero",children:e("div",{children:[e("p",{className:"eyebrow",children:"Settings"}),e("h1",{className:"page-title",children:"Project Configuration and Intent"}),e("p",{className:"page-subtitle",children:"Project metadata, planning assumptions, and the commands that refine README-led intent over time."})]})}),e("div",{className:"settings-grid",children:[e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Project Name"}),e("h3",{className:"card-title",children:t.project.name||"Unknown"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Repo"}),e("h3",{className:"card-title",children:t.project.repo||"Unknown"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Created"}),e("h3",{className:"card-title",children:At(t.project.created_at)})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Schema Version"}),e("h3",{className:"card-title",children:((a=t.meta)==null?void 0:a.version)||"1.0"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Init Commit"}),e("h3",{className:"card-title mono",children:t.init_commit||"Unknown"})]}),e("article",{className:"summary-card",children:[e("div",{className:"panel-kicker",children:"Rollback"}),e("p",{className:"card-copy",children:["Run ",e("code",{className:"mono",children:"devdive rollback --sha <commit-sha>"})," to restore a prior state snapshot."]})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Intent Sources"}),e("span",{className:"panel-link",children:"README first"})]}),e("div",{className:"stack-list",children:r.intentSources.map(n=>e("article",{className:"list-card",children:e("div",{className:"card-head",children:[e("div",{children:[e("div",{className:"panel-kicker",children:n.title}),e("h3",{className:"card-title",children:n.detail})]}),e(C,{status:n.status})]})},n.title))})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Refine Intent"}),e("span",{className:"panel-link",children:"CLI recipes"})]}),e("div",{className:"stack-list",children:r.commandRecipes.map(n=>e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:n.title}),e("h3",{className:"card-title mono",children:n.command}),e("p",{className:"card-copy",children:n.detail})]},n.command))})]})]}),e("div",{className:"split-grid",children:[e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Plan Scope"}),e("span",{className:"panel-link",children:"Message file"})]}),e("div",{className:"stack-list",children:gt.map(n=>e("article",{className:"list-card",children:[e("div",{className:"panel-kicker",children:n.title}),e("div",{className:"stack-list",children:n.items.map(s=>e("div",{className:"card-copy",children:["- ",s]},s))})]},n.key))})]}),e("section",{className:"panel",children:[e("div",{className:"panel-header",children:[e("h2",{className:"panel-title",children:"Assumptions"}),e("span",{className:"panel-link",children:"Operational rules"})]}),e("div",{className:"stack-list",children:vt.map(n=>e("article",{className:"list-card",children:e("p",{className:"card-copy",children:n})},n))})]})]})]})}function Ft(){const{path:t}=pe();switch(t){case"/issues":return e(It,{});case"/ci":return e(Pt,{});case"/nudges":return e(Mt,{});case"/timetrack":return e(jt,{});case"/commits":return e(Lt,{});case"/reviews":return e(Ut,{});case"/settings":return e(Ht,{});case"/":default:return e(Ct,{})}}function Wt(){return e(j,{children:[e("style",{children:`
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
      `}),e(pt,{children:e(dt,{children:e("div",{className:"shell",children:[e(_t,{}),e("main",{className:"shell-main",children:e(Ft,{})})]})})})]})}at(e(Wt,{}),document.getElementById("app"));

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();var W,f,Ee,P,be,He,Oe,Fe,ce,ne,ae,We,Z={},V=[],it=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z=Array.isArray;function R(e,t){for(var i in t)e[i]=t[i];return e}function de(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function A(e,t,i){var n,s,a,c={};for(a in t)a=="key"?n=t[a]:a=="ref"?s=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?W.call(arguments,2):i),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return F(e,c,n,s,null)}function F(e,t,i,n,s){var a={type:e,props:t,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Ee,__i:-1,__u:0};return s==null&&f.vnode!=null&&f.vnode(a),a}function j(e){return e.children}function Y(e,t){this.props=e,this.context=t}function U(e,t){if(t==null)return e.__?U(e.__,e.__i+1):null;for(var i;t<e.__k.length;t++)if((i=e.__k[t])!=null&&i.__e!=null)return i.__e;return typeof e.type=="function"?U(e):null}function nt(e){if(e.__P&&e.__d){var t=e.__v,i=t.__e,n=[],s=[],a=R({},t);a.__v=t.__v+1,f.vnode&&f.vnode(a),pe(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[i]:null,n,i??U(t),!!(32&t.__u),s),a.__v=t.__v,a.__.__k[a.__i]=a,Ge(n,a,s),t.__e=t.__=null,a.__e!=i&&ze(a)}}function ze(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),ze(e)}function se(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!ee.__r++||be!=f.debounceRendering)&&((be=f.debounceRendering)||He)(ee)}function ee(){try{for(var e,t=1;P.length;)P.length>t&&P.sort(Oe),e=P.shift(),t=P.length,nt(e)}finally{P.length=ee.__r=0}}function Be(e,t,i,n,s,a,c,d,p,l,h){var o,u,_,v,k,x,g,m=n&&n.__k||V,$=t.length;for(p=at(i,t,m,p,$),o=0;o<$;o++)(_=i.__k[o])!=null&&(u=_.__i!=-1&&m[_.__i]||Z,_.__i=o,x=pe(e,_,u,s,a,c,d,p,l,h),v=_.__e,_.ref&&u.ref!=_.ref&&(u.ref&&ue(u.ref,null,_),h.push(_.ref,_.__c||v,_)),k==null&&v!=null&&(k=v),(g=!!(4&_.__u))||u.__k===_.__k?p=qe(_,p,e,g):typeof _.type=="function"&&x!==void 0?p=x:v&&(p=v.nextSibling),_.__u&=-7);return i.__e=k,p}function at(e,t,i,n,s){var a,c,d,p,l,h=i.length,o=h,u=0;for(e.__k=new Array(s),a=0;a<s;a++)(c=t[a])!=null&&typeof c!="boolean"&&typeof c!="function"?(typeof c=="string"||typeof c=="number"||typeof c=="bigint"||c.constructor==String?c=e.__k[a]=F(null,c,null,null,null):z(c)?c=e.__k[a]=F(j,{children:c},null,null,null):c.constructor===void 0&&c.__b>0?c=e.__k[a]=F(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):e.__k[a]=c,p=a+u,c.__=e,c.__b=e.__b+1,d=null,(l=c.__i=st(c,i,p,o))!=-1&&(o--,(d=i[l])&&(d.__u|=2)),d==null||d.__v==null?(l==-1&&(s>h?u--:s<h&&u++),typeof c.type!="function"&&(c.__u|=4)):l!=p&&(l==p-1?u--:l==p+1?u++:(l>p?u--:u++,c.__u|=4))):e.__k[a]=null;if(o)for(a=0;a<h;a++)(d=i[a])!=null&&!(2&d.__u)&&(d.__e==n&&(n=U(d)),Qe(d,d));return n}function qe(e,t,i,n){var s,a;if(typeof e.type=="function"){for(s=e.__k,a=0;s&&a<s.length;a++)s[a]&&(s[a].__=e,t=qe(s[a],t,i,n));return t}e.__e!=t&&(n&&(t&&e.type&&!t.parentNode&&(t=U(e)),i.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Je(e,t){return t=t||[],e==null||typeof e=="boolean"||(z(e)?e.some(function(i){Je(i,t)}):t.push(e)),t}function st(e,t,i,n){var s,a,c,d=e.key,p=e.type,l=t[i],h=l!=null&&(2&l.__u)==0;if(l===null&&d==null||h&&d==l.key&&p==l.type)return i;if(n>(h?1:0)){for(s=i-1,a=i+1;s>=0||a<t.length;)if((l=t[c=s>=0?s--:a++])!=null&&!(2&l.__u)&&d==l.key&&p==l.type)return c}return-1}function ve(e,t,i){t[0]=="-"?e.setProperty(t,i??""):e[t]=i==null?"":typeof i!="number"||it.test(t)?i:i+"px"}function G(e,t,i,n,s){var a,c;e:if(t=="style")if(typeof i=="string")e.style.cssText=i;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)i&&t in i||ve(e.style,t,"");if(i)for(t in i)n&&i[t]==n[t]||ve(e.style,t,i[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(Fe,"$1")),c=t.toLowerCase(),t=c in e||t=="onFocusOut"||t=="onFocusIn"?c.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=i,i?n?i.u=n.u:(i.u=ce,e.addEventListener(t,a?ae:ne,a)):e.removeEventListener(t,a?ae:ne,a);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&i==1?"":i))}}function ye(e){return function(t){if(this.l){var i=this.l[t.type+e];if(t.t==null)t.t=ce++;else if(t.t<i.u)return;return i(f.event?f.event(t):t)}}}function pe(e,t,i,n,s,a,c,d,p,l){var h,o,u,_,v,k,x,g,m,$,D,I,J,M,H,b=t.type;if(t.constructor!==void 0)return null;128&i.__u&&(p=!!(32&i.__u),a=[d=t.__e=i.__e]),(h=f.__b)&&h(t);e:if(typeof b=="function")try{if(g=t.props,m=b.prototype&&b.prototype.render,$=(h=b.contextType)&&n[h.__c],D=h?$?$.props.value:h.__:n,i.__c?x=(o=t.__c=i.__c).__=o.__E:(m?t.__c=o=new b(g,D):(t.__c=o=new Y(g,D),o.constructor=b,o.render=ot),$&&$.sub(o),o.state||(o.state={}),o.__n=n,u=o.__d=!0,o.__h=[],o._sb=[]),m&&o.__s==null&&(o.__s=o.state),m&&b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=R({},o.__s)),R(o.__s,b.getDerivedStateFromProps(g,o.__s))),_=o.props,v=o.state,o.__v=t,u)m&&b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),m&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(m&&b.getDerivedStateFromProps==null&&g!==_&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(g,D),t.__v==i.__v||!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(g,o.__s,D)===!1){t.__v!=i.__v&&(o.props=g,o.state=o.__s,o.__d=!1),t.__e=i.__e,t.__k=i.__k,t.__k.some(function(S){S&&(S.__=t)}),V.push.apply(o.__h,o._sb),o._sb=[],o.__h.length&&c.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(g,o.__s,D),m&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(_,v,k)})}if(o.context=D,o.props=g,o.__P=e,o.__e=!1,I=f.__r,J=0,m)o.state=o.__s,o.__d=!1,I&&I(t),h=o.render(o.props,o.state,o.context),V.push.apply(o.__h,o._sb),o._sb=[];else do o.__d=!1,I&&I(t),h=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++J<25);o.state=o.__s,o.getChildContext!=null&&(n=R(R({},n),o.getChildContext())),m&&!u&&o.getSnapshotBeforeUpdate!=null&&(k=o.getSnapshotBeforeUpdate(_,v)),M=h!=null&&h.type===j&&h.key==null?Ke(h.props.children):h,d=Be(e,z(M)?M:[M],t,i,n,s,a,c,d,p,l),o.base=t.__e,t.__u&=-161,o.__h.length&&c.push(o),x&&(o.__E=o.__=null)}catch(S){if(t.__v=null,p||a!=null)if(S.then){for(t.__u|=p?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;a[a.indexOf(d)]=null,t.__e=d}else{for(H=a.length;H--;)de(a[H]);le(t)}else t.__e=i.__e,t.__k=i.__k,S.then||le(t);f.__e(S,t,i)}else a==null&&t.__v==i.__v?(t.__k=i.__k,t.__e=i.__e):d=t.__e=lt(i.__e,t,i,n,s,a,c,p,l);return(h=f.diffed)&&h(t),128&t.__u?void 0:d}function le(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(le))}function Ge(e,t,i){for(var n=0;n<i.length;n++)ue(i[n],i[++n],i[++n]);f.__c&&f.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(a){a.call(s)})}catch(a){f.__e(a,s.__v)}})}function Ke(e){return typeof e!="object"||e==null||e.__b>0?e:z(e)?e.map(Ke):R({},e)}function lt(e,t,i,n,s,a,c,d,p){var l,h,o,u,_,v,k,x=i.props||Z,g=t.props,m=t.type;if(m=="svg"?s="http://www.w3.org/2000/svg":m=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),a!=null){for(l=0;l<a.length;l++)if((_=a[l])&&"setAttribute"in _==!!m&&(m?_.localName==m:_.nodeType==3)){e=_,a[l]=null;break}}if(e==null){if(m==null)return document.createTextNode(g);e=document.createElementNS(s,m,g.is&&g),d&&(f.__m&&f.__m(t,a),d=!1),a=null}if(m==null)x===g||d&&e.data==g||(e.data=g);else{if(a=a&&W.call(e.childNodes),!d&&a!=null)for(x={},l=0;l<e.attributes.length;l++)x[(_=e.attributes[l]).name]=_.value;for(l in x)_=x[l],l=="dangerouslySetInnerHTML"?o=_:l=="children"||l in g||l=="value"&&"defaultValue"in g||l=="checked"&&"defaultChecked"in g||G(e,l,null,_,s);for(l in g)_=g[l],l=="children"?u=_:l=="dangerouslySetInnerHTML"?h=_:l=="value"?v=_:l=="checked"?k=_:d&&typeof _!="function"||x[l]===_||G(e,l,_,x[l],s);if(h)d||o&&(h.__html==o.__html||h.__html==e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(o&&(e.innerHTML=""),Be(t.type=="template"?e.content:e,z(u)?u:[u],t,i,n,m=="foreignObject"?"http://www.w3.org/1999/xhtml":s,a,c,a?a[0]:i.__k&&U(i,0),d,p),a!=null)for(l=a.length;l--;)de(a[l]);d||(l="value",m=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[l]||m=="progress"&&!v||m=="option"&&v!=x[l])&&G(e,l,v,x[l],s),l="checked",k!=null&&k!=e[l]&&G(e,l,k,x[l],s))}return e}function ue(e,t,i){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(s){f.__e(s,i)}}function Qe(e,t,i){var n,s;if(f.unmount&&f.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||ue(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){f.__e(a,t)}n.base=n.__P=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&Qe(n[s],t,i||typeof e.type!="function");i||de(e.__e),e.__c=e.__=e.__e=void 0}function ot(e,t,i){return this.constructor(e,i)}function ct(e,t,i){var n,s,a,c;t==document&&(t=document.documentElement),f.__&&f.__(e,t),s=(n=!1)?null:t.__k,a=[],c=[],pe(t,e=t.__k=A(j,null,[e]),s||Z,Z,t.namespaceURI,s?null:t.firstChild?W.call(t.childNodes):null,a,s?s.__e:t.firstChild,n,c),Ge(a,e,c)}function xe(e,t,i){var n,s,a,c,d=R({},e.props);for(a in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)a=="key"?n=t[a]:a=="ref"?s=t[a]:d[a]=t[a]===void 0&&c!=null?c[a]:t[a];return arguments.length>2&&(d.children=arguments.length>3?W.call(arguments,2):i),F(e.type,d,n||e.key,s||e.ref,null)}function _e(e){function t(i){var n,s;return this.getChildContext||(n=new Set,(s={})[t.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(a){this.props.value!=a.value&&n.forEach(function(c){c.__e=!0,se(c)})},this.sub=function(a){n.add(a);var c=a.componentWillUnmount;a.componentWillUnmount=function(){n&&n.delete(a),c&&c.call(a)}}),i.children}return t.__c="__cC"+We++,t.__=e,t.Provider=t.__l=(t.Consumer=function(i,n){return i.children(n)}).contextType=t,t}W=V.slice,f={__e:function(e,t,i,n){for(var s,a,c;t=t.__;)if((s=t.__c)&&!s.__)try{if((a=s.constructor)&&a.getDerivedStateFromError!=null&&(s.setState(a.getDerivedStateFromError(e)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,n||{}),c=s.__d),c)return s.__E=s}catch(d){e=d}throw e}},Ee=0,Y.prototype.setState=function(e,t){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=R({},this.state),typeof e=="function"&&(e=e(R({},i),this.props)),e&&R(i,e),e!=null&&this.__v&&(t&&this._sb.push(t),se(this))},Y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),se(this))},Y.prototype.render=j,P=[],He=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Oe=function(e,t){return e.__v.__b-t.__v.__b},ee.__r=0,Fe=/(PointerCapture)$|Capture$/i,ce=0,ne=ye(!1),ae=ye(!0),We=0;var dt=0;function r(e,t,i,n,s,a){t||(t={});var c,d,p=t;if("ref"in p)for(d in p={},t)d=="ref"?c=t[d]:p[d]=t[d];var l={type:e,props:p,key:i,ref:c,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--dt,__i:-1,__u:0,__source:s,__self:a};if(typeof e=="function"&&(c=e.defaultProps))for(d in c)p[d]===void 0&&(p[d]=c[d]);return f.vnode&&f.vnode(l),l}var N,y,re,we,te=0,Ye=[],w=f,ke=w.__b,$e=w.__r,De=w.diffed,Se=w.__c,Ce=w.unmount,Re=w.__;function B(e,t){w.__h&&w.__h(y,e,te||t),te=0;var i=y.__H||(y.__H={__:[],__h:[]});return e>=i.__.length&&i.__.push({}),i.__[e]}function Te(e){return te=1,he(Ze,e)}function he(e,t,i){var n=B(N++,2);if(n.t=e,!n.__c&&(n.__=[Ze(void 0,t),function(d){var p=n.__N?n.__N[0]:n.__[0],l=n.t(p,d);p!==l&&(n.__N=[l,n.__[1]],n.__c.setState({}))}],n.__c=y,!y.__f)){var s=function(d,p,l){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(u){return u.__c});if(h.every(function(u){return!u.__N}))return!a||a.call(this,d,p,l);var o=n.__c.props!==d;return h.some(function(u){if(u.__N){var _=u.__[0];u.__=u.__N,u.__N=void 0,_!==u.__[0]&&(o=!0)}}),a&&a.call(this,d,p,l)||o};y.__f=!0;var a=y.shouldComponentUpdate,c=y.componentWillUpdate;y.componentWillUpdate=function(d,p,l){if(this.__e){var h=a;a=void 0,s(d,p,l),a=h}c&&c.call(this,d,p,l)},y.shouldComponentUpdate=s}return n.__N||n.__}function pt(e,t){var i=B(N++,3);!w.__s&&ge(i.__H,t)&&(i.__=e,i.u=t,y.__H.__h.push(i))}function Xe(e,t){var i=B(N++,4);!w.__s&&ge(i.__H,t)&&(i.__=e,i.u=t,y.__h.push(i))}function C(e){return te=5,fe(function(){return{current:e}},[])}function fe(e,t){var i=B(N++,7);return ge(i.__H,t)&&(i.__=e(),i.__H=t,i.__h=e),i.__}function me(e){var t=y.context[e.__c],i=B(N++,9);return i.c=e,t?(i.__==null&&(i.__=!0,t.sub(y)),t.props.value):e.__}function ut(){for(var e;e=Ye.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(X),t.__h.some(oe),t.__h=[]}catch(i){t.__h=[],w.__e(i,e.__v)}}}w.__b=function(e){y=null,ke&&ke(e)},w.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Re&&Re(e,t)},w.__r=function(e){$e&&$e(e),N=0;var t=(y=e.__c).__H;t&&(re===y?(t.__h=[],y.__h=[],t.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(t.__h.some(X),t.__h.some(oe),t.__h=[],N=0)),re=y},w.diffed=function(e){De&&De(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ye.push(t)!==1&&we===w.requestAnimationFrame||((we=w.requestAnimationFrame)||_t)(ut)),t.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),re=y=null},w.__c=function(e,t){t.some(function(i){try{i.__h.some(X),i.__h=i.__h.filter(function(n){return!n.__||oe(n)})}catch(n){t.some(function(s){s.__h&&(s.__h=[])}),t=[],w.__e(n,i.__v)}}),Se&&Se(e,t)},w.unmount=function(e){Ce&&Ce(e);var t,i=e.__c;i&&i.__H&&(i.__H.__.some(function(n){try{X(n)}catch(s){t=s}}),i.__H=void 0,t&&w.__e(t,i.__v))};var Pe=typeof requestAnimationFrame=="function";function _t(e){var t,i=function(){clearTimeout(n),Pe&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(i,35);Pe&&(t=requestAnimationFrame(i))}function X(e){var t=y,i=e.__c;typeof i=="function"&&(e.__c=void 0,i()),y=t}function oe(e){var t=y;e.__c=e.__(),y=t}function ge(e,t){return!e||e.length!==t.length||t.some(function(i,n){return i!==e[n]})}function Ze(e,t){return typeof t=="function"?t(e):t}let L,O;function ht(e){return!O||(typeof O=="string"?e.startsWith(O):O.test(e))}function ft(e,t){let i="";if(L=void 0,t&&t.type==="click"){if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button!==0)return e;const n=t.composedPath().find(a=>a.nodeName=="A"&&a.href),s=n&&n.getAttribute("href");if(!n||n.origin!=location.origin||/^#/.test(s)||!/^(_?self)?$/i.test(n.target)||!ht(s)||n.download)return e;L=!0,t.preventDefault(),i=n.href.replace(location.origin,"")}else t&&t.url?(L=!t.replace,i=t.url):i=location.pathname+location.search;return L===!0?history.pushState(null,"",i):L===!1&&history.replaceState(null,"",i),i}const mt=(e,t,i={})=>{e=e.split("/").filter(Boolean),t=(t||"").split("/").filter(Boolean),i.params||(i.params={});for(let n=0,s,a;n<Math.max(e.length,t.length);n++){let[,c,d,p]=(t[n]||"").match(/^(:?)(.*?)([+*?]?)$/);if(s=e[n],!(!c&&d==s)){if(!c&&s&&p=="*"){i.rest="/"+e.slice(n).map(decodeURIComponent).join("/");break}if(!c||!s&&p!="?"&&p!="*")return;if(a=p=="+"||p=="*",a?s=e.slice(n).map(decodeURIComponent).join("/")||void 0:s&&(s=decodeURIComponent(s)),i.params[d]=s,d in i||(i[d]=s),a)break}}return i};function q(e){const[t,i]=he(ft,e.url||location.pathname+location.search);e.scope&&(O=e.scope);const n=L===!0,s=fe(()=>{const a=new URL(t,location.origin),c=a.pathname.replace(/\/+$/g,"")||"/";return{url:t,path:c,query:Object.fromEntries(a.searchParams),route:(d,p)=>i({url:d,replace:p}),wasPush:n}},[t]);return Xe(()=>(addEventListener("click",i),addEventListener("popstate",i),()=>{removeEventListener("click",i),removeEventListener("popstate",i)}),[]),A(q.ctx.Provider,{value:s},e.children)}const gt=Promise.resolve();function Ve(e){const[t,i]=he(b=>b+1,0),{url:n,query:s,wasPush:a,path:c}=bt();if(!n)throw new Error("preact-iso's <Router> must be used within a <LocationProvider>, see: https://github.com/preactjs/preact-iso#locationprovider");const{rest:d=c,params:p={}}=me(Ie),l=C(!1),h=C(c),o=C(0),u=C(),_=C(),v=C(),k=C(!1),x=C();x.current=!1;let g,m,$;Je(e.children).some(b=>{if(mt(d,b.props.path,$={...b.props,path:d,query:s,params:Object.assign({},p),rest:""}))return g=xe(b,$);b.props.default&&(m=xe(b,$))});let D=g||m;const I=u.current&&u.current.__u&K&&u.current.__u&Q,J=u.current&&u.current.__h,M=fe(()=>{_.current=u.current,u.current=A(Ie.Provider,{value:$},D);const b=_.current&&_.current.props.children;return!b||!D||D.type!==b.type||D.props.component!==b.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),o.current++,!0):!1},[n,JSON.stringify($)]);I?(u.current.__u|=K,u.current.__u|=Q):J&&(u.current.__h=!0);const H=_.current;return _.current=null,this.__c=(b,S)=>{x.current=!0,_.current=H,e.onLoadStart&&e.onLoadStart(n),l.current=!0;let rt=o.current;b.then(()=>{rt===o.current&&(_.current=null,u.current&&(S.__h&&(u.current.__h=S.__h),S.__u&Q&&(u.current.__u|=Q),S.__u&K&&(u.current.__u|=K)),gt.then(i))})},Xe(()=>{const b=this.__v&&this.__v.__e;if(x.current){!k.current&&!v.current&&(v.current=b);return}!k.current&&v.current&&(v.current!==b&&v.current.remove(),v.current=null),k.current=!0,h.current!==c&&(a&&scrollTo(0,0),e.onRouteChange&&e.onRouteChange(n),h.current=c),e.onLoadEnd&&l.current&&e.onLoadEnd(n),l.current=!1},[c,a,t]),M?[A(ie,{r:u}),A(ie,{r:_})]:A(ie,{r:u})}const K=32,Q=128,ie=({r:e})=>e.current;Ve.Provider=q;q.ctx=_e({});const Ie=_e({}),bt=()=>me(q.ctx),Ae=f.__b;f.__b=e=>{e.type&&e.type._forwarded&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ae&&Ae(e)};const Ne=f.__e;f.__e=(e,t,i)=>{if(e&&e.then){let n=t;for(;n=n.__;)if(n.__c&&n.__c.__c)return t.__e==null&&(t.__c.__z=[i.__e],t.__e=i.__e,t.__k=i.__k),t.__k||(t.__k=[]),n.__c.__c(e,t)}Ne&&Ne(e,t,i)};const vt=7777,et={meta:{version:"1.0"},project:{name:"",repo:"",created_at:""},tasks:[],ci:{status:"unknown",last_run:"",workflow_url:""},nudges:[],commits:[],state_commits:[],reviews:[],init_commit:"",sync:{last_issue_sync:"",last_evaluated_commit:"",last_readme_hash:"",last_readme_sync:""}},tt=_e({state:et,connected:!1});function yt({children:e}){const[t,i]=Te(et),[n,s]=Te(!1),a=C(0),c=C(null),d=C(null);return pt(()=>{let p=!1;const l=async()=>{try{const o=await fetch("/api/state");if(!o.ok)return;const u=await o.json();p||i(u)}catch{}},h=()=>{if(p)return;const o=new WebSocket(`ws://localhost:${vt}/ws`);c.current=o,o.onopen=()=>{a.current=0,p||s(!0)},o.onmessage=u=>{try{const _=JSON.parse(u.data);p||i(_)}catch{}},o.onerror=()=>{p||s(!1)},o.onclose=()=>{p||(s(!1),!(a.current>=5)&&(a.current+=1,d.current=window.setTimeout(h,2e3)))}};return l(),h(),()=>{p=!0,s(!1),d.current&&window.clearTimeout(d.current),c.current&&c.current.close()}},[]),A(tt.Provider,{value:{state:t,connected:n}},e)}function T(){return me(tt)}const xt=[{href:"/",label:"Dashboard"},{href:"/issues",label:"Issues"},{href:"/ci",label:"Actions"},{href:"/nudges",label:"Nudges"},{href:"/timetrack",label:"Time"},{href:"/commits",label:"Commits"},{href:"/reviews",label:"Reviews"},{href:"/settings",label:"Settings"}];function wt(){var s;const{connected:e,state:t}=T(),i=typeof window<"u"?window.location.pathname:"/",n=(((s=t.project)==null?void 0:s.name)||"DD").split(/[\s-]+/).filter(Boolean).slice(0,2).map(a=>{var c;return(c=a[0])==null?void 0:c.toUpperCase()}).join("")||"DD";return r("header",{style:{position:"sticky",top:0,zIndex:20,borderBottom:"1px solid rgba(122, 147, 191, 0.14)",background:"rgba(10, 16, 27, 0.9)",backdropFilter:"blur(14px)"},children:r("div",{style:{width:"min(1560px, calc(100% - 48px))",margin:"0 auto",display:"flex",alignItems:"center",gap:"22px",padding:"14px 0",flexWrap:"wrap"},children:[r("a",{href:"/",style:{display:"flex",alignItems:"center",gap:"14px",marginRight:"8px"},children:[r("span",{style:{width:"42px",height:"42px",borderRadius:"13px",display:"grid",placeItems:"center",fontWeight:800,background:"linear-gradient(180deg, #2f81f7, #1f6bd8)",color:"white",boxShadow:"0 10px 24px rgba(47, 129, 247, 0.28)"},children:"DD"}),r("div",{children:[r("div",{style:{fontSize:"1.9rem",fontWeight:800,letterSpacing:"-0.03em",color:"#f4f7fb"},children:"DevDive"}),r("div",{style:{color:"#8f9db6",marginTop:"-2px"},children:t.project.name||"Project control room"})]})]}),r("nav",{style:{display:"flex",flexWrap:"wrap",gap:"10px",marginRight:"auto"},children:xt.map(a=>{const c=i===a.href;return r("a",{href:a.href,style:{padding:"12px 16px",borderRadius:"14px",fontWeight:700,color:c?"#63a5ff":"#c2cce0",background:c?"rgba(47, 129, 247, 0.16)":"transparent",border:c?"1px solid rgba(47, 129, 247, 0.22)":"1px solid transparent"},children:a.label},a.href)})}),r("div",{style:{minWidth:"280px",flex:"0 1 340px",display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"16px",border:"1px solid rgba(122, 147, 191, 0.16)",background:"#141e31",color:"#8f9db6"},children:[r("span",{style:{fontWeight:800},children:"?"}),r("input",{type:"text",placeholder:"Search issues, tasks...",style:{flex:1,background:"transparent",border:0,outline:"none",color:"#dfe7f5"}}),r("span",{style:{padding:"4px 8px",borderRadius:"10px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",fontSize:"0.8rem"},children:"/"})]}),r("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"14px",background:"rgba(17, 26, 43, 0.88)",border:"1px solid rgba(122, 147, 191, 0.14)",color:"#8f9db6"},children:[r("span",{style:{width:"8px",height:"8px",borderRadius:"999px",background:e?"#2bc48a":"#56657f",boxShadow:e?"0 0 14px rgba(43, 196, 138, 0.5)":"none"}}),e?"Live":"Offline"]}),r("span",{style:{width:"42px",height:"42px",borderRadius:"999px",display:"grid",placeItems:"center",fontWeight:800,color:"#f4f7fb",background:"linear-gradient(180deg, #273652, #172131)",border:"1px solid rgba(122, 147, 191, 0.18)"},children:n})]})]})})}const je={todo:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},in_progress:{background:"rgba(47, 129, 247, 0.16)",border:"rgba(47, 129, 247, 0.24)",color:"#7db1ff"},review:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},rejected:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},complete:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},passing:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},failing:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},pending:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},unknown:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},critical:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},warning:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},info:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"}};function E({status:e}){const i={open:"todo",done:"complete"}[e]||e||"unknown",n=je[i]||je.unknown;return r("span",{style:{display:"inline-flex",alignItems:"center",padding:"6px 10px",borderRadius:"999px",background:n.background,border:`1px solid ${n.border}`,color:n.color,fontSize:"0.78rem",fontWeight:700,textTransform:"capitalize",whiteSpace:"nowrap"},children:i.replaceAll("_"," ")})}function kt(e){if(!e)return"No updates yet";const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"Just now";if(i<60)return`${i} minutes ago`;const n=Math.floor(i/60);return n<24?`${n} hours ago`:`${Math.floor(n/24)} days ago`}function $t(e){var i;const t=[];return(e.commits||[]).slice(-4).forEach(n=>{var s,a;t.push({id:`commit-${n.commit_hash}`,title:n.summary||"Commit analysis recorded",body:`Tracked work updated for ${((s=n.tasks_updated)==null?void 0:s.length)||0} closed tasks and ${((a=n.tasks_progressed)==null?void 0:a.length)||0} active tasks.`,time:n.analysed_at,tone:"blue",icon:"CM"})}),[...e.state_commits||[]].sort((n,s)=>new Date(s.timestamp)-new Date(n.timestamp)).slice(0,4).forEach(n=>{t.push({id:`state-commit-${n.sha}`,title:n.message||"DevDive state synced",body:"Tracked devdive.json state was committed on GitHub and synced back into the dashboard.",time:n.timestamp,tone:"green",icon:"GH"})}),(e.nudges||[]).slice(-3).forEach(n=>{t.push({id:`nudge-${n.created_at}`,title:"AI nudge generated",body:n.message,time:n.created_at,tone:"purple",icon:"AI"})}),(e.reviews||[]).slice(-2).forEach(n=>{var s;t.push({id:`review-${n.reviewed_at}`,title:n.findings.length===0?"Design review passed cleanly":`Design review found ${n.findings.length} items`,body:n.findings.length===0?"No drift detected against the planned architecture.":((s=n.findings[0])==null?void 0:s.finding)||"Architectural drift requires attention.",time:n.reviewed_at,tone:n.findings.some(a=>a.severity==="critical")?"rose":"green",icon:"RV"})}),(i=e.ci)!=null&&i.last_run&&t.push({id:`ci-${e.ci.last_run}`,title:`CI is ${e.ci.status.replaceAll("_"," ")}`,body:e.ci.workflow_url?"Latest workflow run is available from the actions page.":"No workflow link is available yet.",time:e.ci.last_run,tone:e.ci.status==="failing"?"rose":"green",icon:"CI"}),t.filter(n=>n.time).sort((n,s)=>new Date(s.time)-new Date(n.time)).slice(0,5)}function Me(){var p;const{state:e}=T(),t=e.tasks.filter(l=>l.status!=="complete"),i=e.tasks.filter(l=>l.status==="in_progress"),n=e.tasks.filter(l=>l.status==="review"),s=e.tasks.filter(l=>l.status==="rejected"),a=e.tasks.filter(l=>l.status==="complete");(p=e.reviews[0])!=null&&p.findings;const c=$t(e),d=[...t].sort((l,h)=>{const o=Number(l.priority||5),u=Number(h.priority||5);return o===u?l.title.localeCompare(h.title):o-u}).slice(0,3);return r("section",{class:"page",children:[r("div",{class:"page-hero",children:[r("div",{children:[r("p",{class:"eyebrow",children:"Dashboard"}),r("h1",{class:"page-title",children:e.project.name||"DevDive Overview"}),r("p",{class:"page-subtitle",children:"A live command view for work in motion, review pressure, and the next tasks that deserve attention."})]}),r("div",{class:"hero-actions",children:[r("a",{class:"button-secondary",href:"/issues",children:"Open board"}),r("a",{class:"button",href:"/reviews",children:"Review latest drift"})]})]}),r("div",{class:"metric-grid",children:[r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"Open Issues"}),r("div",{class:"metric-icon metric-icon--blue",children:"OI"})]}),r("div",{class:"metric-card__value",children:[t.length,r("span",{class:"metric-card__delta metric-card__delta--up",children:[a.length," complete"]})]})]}),r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"In Progress"}),r("div",{class:"metric-icon metric-icon--amber",children:"IP"})]}),r("div",{class:"metric-card__value",children:[i.length,r("span",{class:"metric-card__delta",children:[n.length," in review"]})]})]}),r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"AI Nudges"}),r("div",{class:"metric-icon metric-icon--purple",children:"AI"})]}),r("div",{class:"metric-card__value",children:[e.nudges.length,r("span",{class:"metric-card__delta",children:[s.length," rejected tasks"]})]})]}),r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"CI Status"}),r("div",{class:"metric-icon metric-icon--green",children:"CI"})]}),r("div",{class:"metric-card__value",children:r("span",{style:{fontSize:"2.35rem",fontFamily:"inherit",textTransform:"capitalize"},children:e.ci.status.replaceAll("_"," ")})}),r(E,{status:e.ci.status})]})]}),r("div",{class:"split-grid",children:[r("section",{class:"panel",children:[r("div",{class:"panel-header",children:[r("h2",{class:"panel-title",children:"Recent Activity"}),r("a",{class:"panel-link",href:"/commits",children:"View all"})]}),c.length===0?r("div",{class:"empty-state",children:"No recent activity yet. Run init and start committing to populate the dashboard."}):r("div",{class:"timeline-list",children:c.map(l=>r("article",{class:"timeline-item",children:[r("div",{class:`timeline-icon timeline-icon--${l.tone}`,children:l.icon}),r("div",{children:[r("h3",{class:"timeline-title",children:l.title}),r("p",{class:"timeline-copy",children:l.body})]}),r("div",{class:"timeline-time",children:kt(l.time)})]},l.id))})]}),r("section",{class:"panel",children:[r("div",{class:"panel-header",children:[r("h2",{class:"panel-title",children:"Priority Tasks"}),r("a",{class:"panel-link",href:"/issues",children:"View board"})]}),d.length===0?r("div",{class:"empty-state",children:"No active tasks. Run devdive init to generate a project plan."}):r("div",{class:"priority-list",children:[d.map((l,h)=>{const o=l.status==="in_progress"?"tone-blue":l.status==="review"?"tone-amber":l.status==="rejected"?"tone-rose":h===0?"tone-purple":"tone-slate",u=l.status==="in_progress"?"In Progress":l.status==="review"?"Needs Review":l.status==="rejected"?"Rejected":`Priority ${l.priority||h+1}`;return r("article",{class:"priority-card",children:[r("div",{class:"card-head",children:[r("span",{class:`priority-ribbon ${o}`,children:u}),r(E,{status:l.status})]}),r("h3",{class:"priority-title",children:l.title}),r("p",{class:"card-copy",children:l.advice||l.design_notes}),r("div",{class:"issue-meta",children:[r("span",{children:[Number(l.estimate_hours||0).toFixed(1),"h estimate"]}),r("span",{children:l.id?`#${l.id}`:"Untracked"})]})]},l.id||l.title)}),r("div",{class:"dashed-card",children:"+ Add Priority Task"})]})]})]})]})}function Dt(e){return e<=1?"Updated just now":e<24?`Updated ${Math.round(e)}h ago`:`Updated ${Math.round(e/24)}d ago`}function St(e){return e==="todo"?"tone-slate":e==="in_progress"?"tone-blue":e==="review"?"tone-amber":e==="rejected"?"tone-rose":"tone-green"}function Ct({task:e,index:t}){const i=(e.title||"T").split(/\s+/).slice(0,2).map(n=>{var s;return(s=n[0])==null?void 0:s.toUpperCase()}).join("");return r("article",{class:"issue-card",children:[r("div",{class:"issue-card__head",children:[r("span",{class:"issue-id",children:e.id?`#${e.id}`:"Task"}),r(E,{status:e.status})]}),r("h3",{class:"issue-title",children:e.title}),r("div",{class:"pill-row",children:(e.labels||[]).map(n=>r("span",{class:`label-tag ${t%4===0?"tone-blue":t%4===1?"tone-purple":t%4===2?"tone-amber":"tone-slate"}`,children:n},`${e.id}-${n}`))}),r("p",{class:"card-copy",style:{marginTop:"14px"},children:e.design_notes}),r("div",{class:"issue-meta",children:[r("div",{class:"status-row",children:[r("span",{class:"avatar-chip",children:i}),r("span",{children:[Number(e.estimate_hours||0).toFixed(1),"h"]})]}),e.issue_url?r("a",{class:"panel-link",href:e.issue_url,target:"_blank",rel:"noreferrer",children:"Open issue"}):r("span",{children:Dt((t+1)*3)})]})]})}function Rt(){const{state:e}=T(),t=e.tasks.filter(p=>p.status==="todo"),i=e.tasks.filter(p=>p.status==="in_progress"),n=e.tasks.filter(p=>p.status==="review"),s=e.tasks.filter(p=>p.status==="rejected"),a=e.tasks.filter(p=>p.status==="complete"),c=e.tasks.reduce((p,l)=>p+Number(l.estimate_hours||0),0),d=[{key:"todo",title:"To Do",tasks:t},{key:"in_progress",title:"In Progress",tasks:i},{key:"review",title:"In Review",tasks:n},{key:"rejected",title:"Rejected",tasks:s},{key:"complete",title:"Done",tasks:a}];return r("section",{class:"page",children:[r("div",{class:"page-hero",children:[r("div",{children:[r("p",{class:"eyebrow",children:"Issues"}),r("h1",{class:"page-title",children:e.project.name||"Sprint Board"}),r("p",{class:"page-subtitle",children:"Active development board for the generated plan, grouped into the working states that matter most day to day."})]}),r("div",{class:"hero-actions",children:[r("span",{class:"button-secondary",children:[c.toFixed(1),"h scoped"]}),r("a",{class:"button",href:"/commits",children:"New activity"})]})]}),r("div",{class:"board-toolbar",children:[r("div",{class:"toolbar-row",children:[r("span",{class:"toolbar-chip",children:"Filters"}),r("span",{class:"toolbar-chip",children:"Assignee"}),r("span",{class:"toolbar-chip",children:"Label"}),r("span",{class:"toolbar-chip",children:"Milestone"})]}),r("div",{class:"toolbar-row",children:[r("span",{class:"toolbar-chip--active",children:"Only my issues"}),r("span",{class:"toolbar-chip",children:"Recently updated"})]})]}),e.tasks.length===0?r("div",{class:"empty-state",children:"No tasks yet. Run devdive init to get started."}):r("div",{class:"board-grid",children:d.map(p=>r("section",{class:"board-column",children:[r("div",{class:"board-column__head",children:[r("div",{class:"board-column__title",children:[r("span",{children:p.title}),r("span",{class:`board-count ${St(p.key)}`,children:p.tasks.length})]}),r("span",{class:"ghost-action",children:"..."})]}),r("div",{class:"board-stack",children:[p.tasks.length===0?r("div",{class:"board-empty",children:"Nothing parked here yet."}):p.tasks.map((l,h)=>r(Ct,{task:l,index:h},`${p.key}-${l.id}-${l.title}`)),p.key==="todo"?r("div",{class:"dashed-card",children:"+ Create Issue"}):null]})]},p.key))})]})}function Le(e){if(!e)return"No runs yet";const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"Just now";if(i<60)return`${i} minutes ago`;const n=Math.floor(i/60);return n<24?`${n} hours ago`:`${Math.floor(n/24)} days ago`}function Tt(){const{state:e}=T(),t=e.reviews[0],i=e.nudges[e.nudges.length-1];return r("section",{class:"page",children:[r("div",{class:"page-hero",children:[r("div",{children:[r("p",{class:"eyebrow",children:"Actions"}),r("h1",{class:"page-title",children:"Build and Release Health"}),r("p",{class:"page-subtitle",children:"The CI signal sits inside the same operational frame as nudges, drift, and recent delivery activity."})]}),r("div",{class:"hero-actions",children:e.ci.workflow_url?r("a",{class:"button",href:e.ci.workflow_url,target:"_blank",rel:"noreferrer",children:"Open workflow"}):r("span",{class:"button-secondary",children:"Waiting for workflow URL"})})]}),r("div",{class:"split-grid",children:[r("section",{class:"panel",children:[r("div",{class:"panel-header",children:[r("h2",{class:"panel-title",children:"Current Run"}),r(E,{status:e.ci.status})]}),r("div",{class:"stack-list",children:r("article",{class:"list-card",children:[r("div",{class:"card-head",children:[r("div",{children:[r("div",{class:"panel-kicker",children:"Workflow status"}),r("h3",{class:"card-title",style:{textTransform:"capitalize"},children:e.ci.status.replaceAll("_"," ")})]}),r("div",{class:"metric-icon metric-icon--green",children:"CI"})]}),e.ci.status==="unknown"?r("p",{class:"card-copy",children:"No CI runs detected yet."}):r(j,{children:[r("p",{class:"card-copy",children:["Last run completed ",Le(e.ci.last_run),"."]}),r("div",{class:"issue-meta",children:[r("span",{children:e.ci.workflow_url?"Workflow run available":"No workflow link yet"}),e.ci.workflow_url?r("a",{class:"panel-link",href:e.ci.workflow_url,target:"_blank",rel:"noreferrer",children:"View workflow"}):null]})]})]})})]}),r("section",{class:"panel",children:[r("div",{class:"panel-header",children:[r("h2",{class:"panel-title",children:"Related Signals"}),r("a",{class:"panel-link",href:"/reviews",children:"Open reviews"})]}),r("div",{class:"stack-list",children:[r("article",{class:"list-card",children:[r("div",{class:"panel-kicker",children:"Latest review"}),r("h3",{class:"card-title",children:t?`${t.findings.length} findings in latest review`:"No design reviews yet"}),r("p",{class:"card-copy",children:t?`Reviewed ${Le(t.reviewed_at)}.`:"Run devdive review to compare the codebase against the original plan."})]}),r("article",{class:"list-card",children:[r("div",{class:"panel-kicker",children:"Latest nudge"}),r("h3",{class:"card-title",children:i?"AI advisory available":"No nudges yet"}),r("p",{class:"card-copy",children:i?i.message:"Operational nudges will appear here when CI or reviews need attention."})]})]})]})]})]})}function Pt(e){if(!e)return"Unknown time";const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"Just now";if(i<60)return`${i} minutes ago`;const n=Math.floor(i/60);return n<24?`${n} hours ago`:`${Math.floor(n/24)} days ago`}function It(){const{state:e}=T(),t=[...e.nudges].reverse();return r("section",{class:"page",children:[r("div",{class:"page-hero",children:[r("div",{children:[r("p",{class:"eyebrow",children:"Nudges"}),r("h1",{class:"page-title",children:"Advisory Feed"}),r("p",{class:"page-subtitle",children:"Short prompts from the planner when CI breaks, drift appears, or work starts slipping."})]}),r("div",{class:"hero-actions",children:r("span",{class:"button-secondary",children:[t.length," total nudges"]})})]}),t.length===0?r("div",{class:"empty-state",children:"No nudges yet. DevDive will suggest improvements as you work."}):r("div",{class:"stack-list",children:t.map(i=>r("article",{class:"list-card",children:[r("div",{class:"card-head",children:[r("span",{class:"priority-ribbon tone-purple",children:"AI Advisory"}),r("span",{class:"card-time",children:Pt(i.created_at)})]}),r("h3",{class:"card-title",children:i.message}),r("p",{class:"card-copy",children:"Generated from current state transitions, failing signals, or architectural drift."})]},`${i.created_at}-${i.message}`))})]})}function At(){const{state:e}=T(),t=e.tasks.reduce((a,c)=>a+Number(c.estimate_hours||0),0),i=e.tasks.filter(a=>a.status==="complete").reduce((a,c)=>a+Number(c.estimate_hours||0),0),n=Math.max(t-i,0),s=t===0?0:Math.round(i/t*100);return r("section",{class:"page",children:[r("div",{class:"page-hero",children:r("div",{children:[r("p",{class:"eyebrow",children:"Time"}),r("h1",{class:"page-title",children:"Burndown and Throughput"}),r("p",{class:"page-subtitle",children:"A simple burndown readout from the plan estimates and the task statuses DevDive keeps in sync."})]})}),e.tasks.length===0?r("div",{class:"empty-state",children:"No tasks yet."}):r(j,{children:[r("div",{class:"metric-grid",children:[r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"Estimated"}),r("div",{class:"metric-icon metric-icon--blue",children:"ET"})]}),r("div",{class:"metric-card__value",children:[t.toFixed(1),"h"]})]}),r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"Completed"}),r("div",{class:"metric-icon metric-icon--green",children:"DN"})]}),r("div",{class:"metric-card__value",children:[i.toFixed(1),"h"]})]}),r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"Remaining"}),r("div",{class:"metric-icon metric-icon--amber",children:"RM"})]}),r("div",{class:"metric-card__value",children:[n.toFixed(1),"h"]})]})]}),r("div",{class:"panel",children:[r("div",{class:"panel-header",children:[r("strong",{children:"Burndown Progress"}),r("span",{children:[s,"%"]})]}),r("div",{class:"progress-track",children:r("div",{class:"progress-fill",style:{width:`${s}%`}})})]}),r("div",{class:"table-wrap",children:r("table",{children:[r("thead",{children:r("tr",{children:[r("th",{children:"Title"}),r("th",{children:"Estimate"}),r("th",{children:"Status"})]})}),r("tbody",{children:e.tasks.map(a=>r("tr",{children:[r("td",{children:a.title}),r("td",{children:[Number(a.estimate_hours||0).toFixed(1),"h"]}),r("td",{children:r(E,{status:a.status})})]},`${a.id}-${a.title}`))})]})})]})]})}function Ue(e){if(!e)return"Unknown time";const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"Just now";if(i<60)return`${i} minutes ago`;const n=Math.floor(i/60);return n<24?`${n} hours ago`:`${Math.floor(n/24)} days ago`}function Nt(){const{state:e}=T(),t=[...e.commits||[]].reverse(),i=[...e.state_commits||[]].sort((n,s)=>new Date(s.timestamp)-new Date(n.timestamp));return r("section",{class:"page",children:[r("div",{class:"page-hero",children:r("div",{children:[r("p",{class:"eyebrow",children:"Commits"}),r("h1",{class:"page-title",children:"Delivery Timeline"}),r("p",{class:"page-subtitle",children:"Local commit analysis and synced DevDive state commits from GitHub."})]})}),r("div",{class:"panel",style:{marginBottom:"1.5rem"},children:[r("div",{class:"panel-header",children:r("h2",{class:"panel-title",children:"Recent Repository Commit Analysis"})}),t.length===0?r("div",{class:"empty-state",children:"No local commit analysis yet. DevDive analyses project commits as they are evaluated."}):r("div",{class:"stack-list",children:t.map(n=>r("article",{class:"list-card",children:[r("div",{class:"card-head",children:[r("strong",{class:"mono",children:(n.commit_hash||"").slice(0,7)||"unknown"}),r("span",{class:"card-time",children:Ue(n.analysed_at)})]}),r("h3",{class:"card-title",children:n.summary}),r("p",{class:"card-copy",children:"Commit analysis updated task progress without relying on manual issue-closing keywords."}),r("div",{class:"pill-row",children:[(n.tasks_updated||[]).map(s=>r("span",{class:"label-tag tone-green",children:["closed #",s]},`closed-${n.commit_hash}-${s}`)),(n.tasks_progressed||[]).map(s=>r("span",{class:"label-tag tone-blue",children:["progressed #",s]},`progress-${n.commit_hash}-${s}`))]})]},`${n.commit_hash}-${n.analysed_at}`))})]}),r("div",{class:"panel",children:[r("div",{class:"panel-header",children:r("h2",{class:"panel-title",children:"Synced DevDive State Commits"})}),i.length===0?r("div",{class:"empty-state",children:"No remote DevDive state commits have been synced yet."}):r("div",{class:"stack-list",children:i.map(n=>r("article",{class:"list-card",children:[r("div",{class:"card-head",children:[r("strong",{class:"mono",children:(n.sha||"").slice(0,7)||"unknown"}),r("span",{class:"card-time",children:Ue(n.timestamp)})]}),r("h3",{class:"card-title",children:n.message}),r("p",{class:"card-copy",children:"This timeline comes from GitHub commits to the tracked `devdive.json` state file."})]},`${n.sha}-${n.timestamp}`))})]})]})}function jt(e){if(!e)return"Unknown time";const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"Just now";if(i<60)return`${i} minutes ago`;const n=Math.floor(i/60);return n<24?`${n} hours ago`:`${Math.floor(n/24)} days ago`}function Mt(){const{state:e}=T(),t=[...e.reviews].reverse(),i=t[0];return r("section",{class:"page",children:[r("div",{class:"page-hero",children:r("div",{children:[r("p",{class:"eyebrow",children:"Reviews"}),r("h1",{class:"page-title",children:"Architecture Reviews"}),r("p",{class:"page-subtitle",children:"Drift checks against the original design notes attached to each planned task."})]})}),i&&i.findings.length===0?r("div",{class:"banner",children:"No drift detected in latest review."}):null,t.length===0?r("div",{class:"empty-state",children:"No design reviews yet. DevDive reviews your architecture every 10 commits."}):r("div",{class:"stack-list",children:t.map(n=>r("article",{class:"list-card",children:[r("div",{style:{marginBottom:"12px",color:"var(--text-muted)"},children:["Reviewed ",jt(n.reviewed_at)]}),n.findings.length===0?r("div",{class:"card-copy",children:"No findings for this review."}):r("div",{class:"stack-list",children:n.findings.map((s,a)=>r("article",{class:"summary-card",children:[r("div",{class:"card-head",children:[r("code",{class:"mono",children:s.file}),r(E,{status:s.severity})]}),r("p",{class:"card-copy",children:s.finding})]},`${s.file}-${s.detected_at}-${a}`))})]},n.reviewed_at))})]})}function Lt(e){return e?new Date(e).toLocaleString():"Unknown"}function Ut(){var t;const{state:e}=T();return r("section",{class:"page",children:[r("div",{class:"page-hero",children:r("div",{children:[r("p",{class:"eyebrow",children:"Settings"}),r("h1",{class:"page-title",children:"Project Configuration"}),r("p",{class:"page-subtitle",children:"Read-only project metadata sourced from the live `devdive.json` state."})]})}),r("div",{class:"settings-grid",children:[r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Project Name"}),r("h3",{class:"card-title",children:e.project.name||"Unknown"})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Repo"}),r("h3",{class:"card-title",children:e.project.repo||"Unknown"})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Created"}),r("h3",{class:"card-title",children:Lt(e.project.created_at)})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Schema Version"}),r("h3",{class:"card-title",children:((t=e.meta)==null?void 0:t.version)||"1.0"})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Init Commit"}),r("h3",{class:"card-title mono",children:e.init_commit||"Unknown"})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Rollback"}),r("p",{class:"card-copy",children:["Run ",r("code",{class:"mono",children:"devdive rollback --sha <commit-sha>"})," to restore a prior state snapshot."]})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Configuration"}),r("p",{class:"card-copy",children:"To change settings, edit your .env file and restart DevDive."})]})]})]})}function Et(e){if(!e)return"No recent sync";const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"Just now";if(i<60)return`${i}m ago`;const n=Math.floor(i/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}function Ht(e){var i,n;const t=[(i=e.project)==null?void 0:i.created_at,(n=e.ci)==null?void 0:n.last_run,...(e.commits||[]).map(s=>s.analysed_at),...(e.nudges||[]).map(s=>s.created_at),...(e.reviews||[]).map(s=>s.reviewed_at)].filter(Boolean);return t.length===0?"":t.map(s=>new Date(s).getTime()).sort((s,a)=>a-s).map(s=>new Date(s).toISOString())[0]}function Ot(){var i;const{connected:e,state:t}=T();return r("footer",{class:"shell-footer",children:[r("div",{class:"shell-footer__group",children:[r("span",{class:`footer-dot ${e?"footer-dot--live":"footer-dot--idle"}`}),r("span",{children:e?"All systems operational":"Live sync unavailable"}),r("span",{class:"footer-divider"}),r("span",{children:["Last synced ",Et(Ht(t))]})]}),r("div",{class:"shell-footer__group shell-footer__group--muted",children:[r("span",{children:((i=t.project)==null?void 0:i.repo)||"devdive"}),r("span",{class:"footer-divider"}),r("span",{children:"Shortcuts"})]})]})}function Ft(){return r(j,{children:[r("style",{children:`
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
          grid-template-columns: repeat(4, minmax(280px, 1fr));
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

          .board-grid {
            grid-template-columns: repeat(2, minmax(280px, 1fr));
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

          .board-grid {
            grid-template-columns: 1fr;
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
      `}),r(yt,{children:r(q,{children:r("div",{class:"shell",children:[r(wt,{}),r("main",{class:"shell-main",children:r(Ve,{children:[r(Me,{path:"/"}),r(Rt,{path:"/issues"}),r(Tt,{path:"/ci"}),r(It,{path:"/nudges"}),r(At,{path:"/timetrack"}),r(Nt,{path:"/commits"}),r(Mt,{path:"/reviews"}),r(Ut,{path:"/settings"}),r(Me,{default:!0})]})}),r(Ot,{})]})})})]})}ct(r(Ft,{}),document.getElementById("app"));

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var W,f,je,I,be,Ee,He,Oe,ce,ie,ae,Fe,Z={},V=[],rt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z=Array.isArray;function C(e,t){for(var n in t)e[n]=t[n];return e}function de(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function A(e,t,n){var i,s,a,l={};for(a in t)a=="key"?i=t[a]:a=="ref"?s=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?W.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return F(e,l,i,s,null)}function F(e,t,n,i,s){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++je,__i:-1,__u:0};return s==null&&f.vnode!=null&&f.vnode(a),a}function N(e){return e.children}function Y(e,t){this.props=e,this.context=t}function j(e,t){if(t==null)return e.__?j(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?j(e):null}function nt(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,i=[],s=[],a=C({},t);a.__v=t.__v+1,f.vnode&&f.vnode(a),pe(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,i,n??j(t),!!(32&t.__u),s),a.__v=t.__v,a.__.__k[a.__i]=a,Je(i,a,s),t.__e=t.__=null,a.__e!=n&&We(a)}}function We(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),We(e)}function se(e){(!e.__d&&(e.__d=!0)&&I.push(e)&&!ee.__r++||be!=f.debounceRendering)&&((be=f.debounceRendering)||Ee)(ee)}function ee(){try{for(var e,t=1;I.length;)I.length>t&&I.sort(He),e=I.shift(),t=I.length,nt(e)}finally{I.length=ee.__r=0}}function ze(e,t,n,i,s,a,l,p,d,c,h){var o,u,_,v,k,x,m,g=i&&i.__k||V,$=t.length;for(d=it(n,t,g,d,$),o=0;o<$;o++)(_=n.__k[o])!=null&&(u=_.__i!=-1&&g[_.__i]||Z,_.__i=o,x=pe(e,_,u,s,a,l,p,d,c,h),v=_.__e,_.ref&&u.ref!=_.ref&&(u.ref&&ue(u.ref,null,_),h.push(_.ref,_.__c||v,_)),k==null&&v!=null&&(k=v),(m=!!(4&_.__u))||u.__k===_.__k?d=Be(_,d,e,m):typeof _.type=="function"&&x!==void 0?d=x:v&&(d=v.nextSibling),_.__u&=-7);return n.__e=k,d}function it(e,t,n,i,s){var a,l,p,d,c,h=n.length,o=h,u=0;for(e.__k=new Array(s),a=0;a<s;a++)(l=t[a])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=e.__k[a]=F(null,l,null,null,null):z(l)?l=e.__k[a]=F(N,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=e.__k[a]=F(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):e.__k[a]=l,d=a+u,l.__=e,l.__b=e.__b+1,p=null,(c=l.__i=at(l,n,d,o))!=-1&&(o--,(p=n[c])&&(p.__u|=2)),p==null||p.__v==null?(c==-1&&(s>h?u--:s<h&&u++),typeof l.type!="function"&&(l.__u|=4)):c!=d&&(c==d-1?u--:c==d+1?u++:(c>d?u--:u++,l.__u|=4))):e.__k[a]=null;if(o)for(a=0;a<h;a++)(p=n[a])!=null&&!(2&p.__u)&&(p.__e==i&&(i=j(p)),Ge(p,p));return i}function Be(e,t,n,i){var s,a;if(typeof e.type=="function"){for(s=e.__k,a=0;s&&a<s.length;a++)s[a]&&(s[a].__=e,t=Be(s[a],t,n,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=j(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function qe(e,t){return t=t||[],e==null||typeof e=="boolean"||(z(e)?e.some(function(n){qe(n,t)}):t.push(e)),t}function at(e,t,n,i){var s,a,l,p=e.key,d=e.type,c=t[n],h=c!=null&&(2&c.__u)==0;if(c===null&&p==null||h&&p==c.key&&d==c.type)return n;if(i>(h?1:0)){for(s=n-1,a=n+1;s>=0||a<t.length;)if((c=t[l=s>=0?s--:a++])!=null&&!(2&c.__u)&&p==c.key&&d==c.type)return l}return-1}function ve(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||rt.test(t)?n:n+"px"}function K(e,t,n,i,s){var a,l;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||ve(e.style,t,"");if(n)for(t in n)i&&n[t]==i[t]||ve(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(Oe,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i?n.u=i.u:(n.u=ce,e.addEventListener(t,a?ae:ie,a)):e.removeEventListener(t,a?ae:ie,a);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function ye(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ce++;else if(t.t<n.u)return;return n(f.event?f.event(t):t)}}}function pe(e,t,n,i,s,a,l,p,d,c){var h,o,u,_,v,k,x,m,g,$,D,P,J,L,H,b=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(d=!!(32&n.__u),a=[p=t.__e=n.__e]),(h=f.__b)&&h(t);e:if(typeof b=="function")try{if(m=t.props,g=b.prototype&&b.prototype.render,$=(h=b.contextType)&&i[h.__c],D=h?$?$.props.value:h.__:i,n.__c?x=(o=t.__c=n.__c).__=o.__E:(g?t.__c=o=new b(m,D):(t.__c=o=new Y(m,D),o.constructor=b,o.render=ot),$&&$.sub(o),o.state||(o.state={}),o.__n=i,u=o.__d=!0,o.__h=[],o._sb=[]),g&&o.__s==null&&(o.__s=o.state),g&&b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=C({},o.__s)),C(o.__s,b.getDerivedStateFromProps(m,o.__s))),_=o.props,v=o.state,o.__v=t,u)g&&b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),g&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(g&&b.getDerivedStateFromProps==null&&m!==_&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(m,D),t.__v==n.__v||!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(m,o.__s,D)===!1){t.__v!=n.__v&&(o.props=m,o.state=o.__s,o.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(S){S&&(S.__=t)}),V.push.apply(o.__h,o._sb),o._sb=[],o.__h.length&&l.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(m,o.__s,D),g&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(_,v,k)})}if(o.context=D,o.props=m,o.__P=e,o.__e=!1,P=f.__r,J=0,g)o.state=o.__s,o.__d=!1,P&&P(t),h=o.render(o.props,o.state,o.context),V.push.apply(o.__h,o._sb),o._sb=[];else do o.__d=!1,P&&P(t),h=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++J<25);o.state=o.__s,o.getChildContext!=null&&(i=C(C({},i),o.getChildContext())),g&&!u&&o.getSnapshotBeforeUpdate!=null&&(k=o.getSnapshotBeforeUpdate(_,v)),L=h!=null&&h.type===N&&h.key==null?Ke(h.props.children):h,p=ze(e,z(L)?L:[L],t,n,i,s,a,l,p,d,c),o.base=t.__e,t.__u&=-161,o.__h.length&&l.push(o),x&&(o.__E=o.__=null)}catch(S){if(t.__v=null,d||a!=null)if(S.then){for(t.__u|=d?160:128;p&&p.nodeType==8&&p.nextSibling;)p=p.nextSibling;a[a.indexOf(p)]=null,t.__e=p}else{for(H=a.length;H--;)de(a[H]);oe(t)}else t.__e=n.__e,t.__k=n.__k,S.then||oe(t);f.__e(S,t,n)}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):p=t.__e=st(n.__e,t,n,i,s,a,l,d,c);return(h=f.diffed)&&h(t),128&t.__u?void 0:p}function oe(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(oe))}function Je(e,t,n){for(var i=0;i<n.length;i++)ue(n[i],n[++i],n[++i]);f.__c&&f.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(a){a.call(s)})}catch(a){f.__e(a,s.__v)}})}function Ke(e){return typeof e!="object"||e==null||e.__b>0?e:z(e)?e.map(Ke):C({},e)}function st(e,t,n,i,s,a,l,p,d){var c,h,o,u,_,v,k,x=n.props||Z,m=t.props,g=t.type;if(g=="svg"?s="http://www.w3.org/2000/svg":g=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),a!=null){for(c=0;c<a.length;c++)if((_=a[c])&&"setAttribute"in _==!!g&&(g?_.localName==g:_.nodeType==3)){e=_,a[c]=null;break}}if(e==null){if(g==null)return document.createTextNode(m);e=document.createElementNS(s,g,m.is&&m),p&&(f.__m&&f.__m(t,a),p=!1),a=null}if(g==null)x===m||p&&e.data==m||(e.data=m);else{if(a=a&&W.call(e.childNodes),!p&&a!=null)for(x={},c=0;c<e.attributes.length;c++)x[(_=e.attributes[c]).name]=_.value;for(c in x)_=x[c],c=="dangerouslySetInnerHTML"?o=_:c=="children"||c in m||c=="value"&&"defaultValue"in m||c=="checked"&&"defaultChecked"in m||K(e,c,null,_,s);for(c in m)_=m[c],c=="children"?u=_:c=="dangerouslySetInnerHTML"?h=_:c=="value"?v=_:c=="checked"?k=_:p&&typeof _!="function"||x[c]===_||K(e,c,_,x[c],s);if(h)p||o&&(h.__html==o.__html||h.__html==e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(o&&(e.innerHTML=""),ze(t.type=="template"?e.content:e,z(u)?u:[u],t,n,i,g=="foreignObject"?"http://www.w3.org/1999/xhtml":s,a,l,a?a[0]:n.__k&&j(n,0),p,d),a!=null)for(c=a.length;c--;)de(a[c]);p||(c="value",g=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[c]||g=="progress"&&!v||g=="option"&&v!=x[c])&&K(e,c,v,x[c],s),c="checked",k!=null&&k!=e[c]&&K(e,c,k,x[c],s))}return e}function ue(e,t,n){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(s){f.__e(s,n)}}function Ge(e,t,n){var i,s;if(f.unmount&&f.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||ue(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){f.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&Ge(i[s],t,n||typeof e.type!="function");n||de(e.__e),e.__c=e.__=e.__e=void 0}function ot(e,t,n){return this.constructor(e,n)}function lt(e,t,n){var i,s,a,l;t==document&&(t=document.documentElement),f.__&&f.__(e,t),s=(i=!1)?null:t.__k,a=[],l=[],pe(t,e=t.__k=A(N,null,[e]),s||Z,Z,t.namespaceURI,s?null:t.firstChild?W.call(t.childNodes):null,a,s?s.__e:t.firstChild,i,l),Je(a,e,l)}function xe(e,t,n){var i,s,a,l,p=C({},e.props);for(a in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)a=="key"?i=t[a]:a=="ref"?s=t[a]:p[a]=t[a]===void 0&&l!=null?l[a]:t[a];return arguments.length>2&&(p.children=arguments.length>3?W.call(arguments,2):n),F(e.type,p,i||e.key,s||e.ref,null)}function _e(e){function t(n){var i,s;return this.getChildContext||(i=new Set,(s={})[t.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){i=null},this.shouldComponentUpdate=function(a){this.props.value!=a.value&&i.forEach(function(l){l.__e=!0,se(l)})},this.sub=function(a){i.add(a);var l=a.componentWillUnmount;a.componentWillUnmount=function(){i&&i.delete(a),l&&l.call(a)}}),n.children}return t.__c="__cC"+Fe++,t.__=e,t.Provider=t.__l=(t.Consumer=function(n,i){return n.children(i)}).contextType=t,t}W=V.slice,f={__e:function(e,t,n,i){for(var s,a,l;t=t.__;)if((s=t.__c)&&!s.__)try{if((a=s.constructor)&&a.getDerivedStateFromError!=null&&(s.setState(a.getDerivedStateFromError(e)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),l=s.__d),l)return s.__E=s}catch(p){e=p}throw e}},je=0,Y.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),se(this))},Y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),se(this))},Y.prototype.render=N,I=[],Ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,He=function(e,t){return e.__v.__b-t.__v.__b},ee.__r=0,Oe=/(PointerCapture)$|Capture$/i,ce=0,ie=ye(!1),ae=ye(!0),Fe=0;var ct=0;function r(e,t,n,i,s,a){t||(t={});var l,p,d=t;if("ref"in d)for(p in d={},t)p=="ref"?l=t[p]:d[p]=t[p];var c={type:e,props:d,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ct,__i:-1,__u:0,__source:s,__self:a};if(typeof e=="function"&&(l=e.defaultProps))for(p in l)d[p]===void 0&&(d[p]=l[p]);return f.vnode&&f.vnode(c),c}var M,y,re,we,te=0,Qe=[],w=f,ke=w.__b,$e=w.__r,De=w.diffed,Se=w.__c,Re=w.unmount,Ce=w.__;function B(e,t){w.__h&&w.__h(y,e,te||t),te=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Te(e){return te=1,he(Xe,e)}function he(e,t,n){var i=B(M++,2);if(i.t=e,!i.__c&&(i.__=[Xe(void 0,t),function(p){var d=i.__N?i.__N[0]:i.__[0],c=i.t(d,p);d!==c&&(i.__N=[c,i.__[1]],i.__c.setState({}))}],i.__c=y,!y.__f)){var s=function(p,d,c){if(!i.__c.__H)return!0;var h=i.__c.__H.__.filter(function(u){return u.__c});if(h.every(function(u){return!u.__N}))return!a||a.call(this,p,d,c);var o=i.__c.props!==p;return h.some(function(u){if(u.__N){var _=u.__[0];u.__=u.__N,u.__N=void 0,_!==u.__[0]&&(o=!0)}}),a&&a.call(this,p,d,c)||o};y.__f=!0;var a=y.shouldComponentUpdate,l=y.componentWillUpdate;y.componentWillUpdate=function(p,d,c){if(this.__e){var h=a;a=void 0,s(p,d,c),a=h}l&&l.call(this,p,d,c)},y.shouldComponentUpdate=s}return i.__N||i.__}function dt(e,t){var n=B(M++,3);!w.__s&&me(n.__H,t)&&(n.__=e,n.u=t,y.__H.__h.push(n))}function Ye(e,t){var n=B(M++,4);!w.__s&&me(n.__H,t)&&(n.__=e,n.u=t,y.__h.push(n))}function R(e){return te=5,fe(function(){return{current:e}},[])}function fe(e,t){var n=B(M++,7);return me(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ge(e){var t=y.context[e.__c],n=B(M++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(y)),t.props.value):e.__}function pt(){for(var e;e=Qe.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(X),t.__h.some(le),t.__h=[]}catch(n){t.__h=[],w.__e(n,e.__v)}}}w.__b=function(e){y=null,ke&&ke(e)},w.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ce&&Ce(e,t)},w.__r=function(e){$e&&$e(e),M=0;var t=(y=e.__c).__H;t&&(re===y?(t.__h=[],y.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(X),t.__h.some(le),t.__h=[],M=0)),re=y},w.diffed=function(e){De&&De(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Qe.push(t)!==1&&we===w.requestAnimationFrame||((we=w.requestAnimationFrame)||ut)(pt)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),re=y=null},w.__c=function(e,t){t.some(function(n){try{n.__h.some(X),n.__h=n.__h.filter(function(i){return!i.__||le(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],w.__e(i,n.__v)}}),Se&&Se(e,t)},w.unmount=function(e){Re&&Re(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(i){try{X(i)}catch(s){t=s}}),n.__H=void 0,t&&w.__e(t,n.__v))};var Ie=typeof requestAnimationFrame=="function";function ut(e){var t,n=function(){clearTimeout(i),Ie&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,35);Ie&&(t=requestAnimationFrame(n))}function X(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function le(e){var t=y;e.__c=e.__(),y=t}function me(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}function Xe(e,t){return typeof t=="function"?t(e):t}let U,O;function _t(e){return!O||(typeof O=="string"?e.startsWith(O):O.test(e))}function ht(e,t){let n="";if(U=void 0,t&&t.type==="click"){if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button!==0)return e;const i=t.composedPath().find(a=>a.nodeName=="A"&&a.href),s=i&&i.getAttribute("href");if(!i||i.origin!=location.origin||/^#/.test(s)||!/^(_?self)?$/i.test(i.target)||!_t(s)||i.download)return e;U=!0,t.preventDefault(),n=i.href.replace(location.origin,"")}else t&&t.url?(U=!t.replace,n=t.url):n=location.pathname+location.search;return U===!0?history.pushState(null,"",n):U===!1&&history.replaceState(null,"",n),n}const ft=(e,t,n={})=>{e=e.split("/").filter(Boolean),t=(t||"").split("/").filter(Boolean),n.params||(n.params={});for(let i=0,s,a;i<Math.max(e.length,t.length);i++){let[,l,p,d]=(t[i]||"").match(/^(:?)(.*?)([+*?]?)$/);if(s=e[i],!(!l&&p==s)){if(!l&&s&&d=="*"){n.rest="/"+e.slice(i).map(decodeURIComponent).join("/");break}if(!l||!s&&d!="?"&&d!="*")return;if(a=d=="+"||d=="*",a?s=e.slice(i).map(decodeURIComponent).join("/")||void 0:s&&(s=decodeURIComponent(s)),n.params[p]=s,p in n||(n[p]=s),a)break}}return n};function q(e){const[t,n]=he(ht,e.url||location.pathname+location.search);e.scope&&(O=e.scope);const i=U===!0,s=fe(()=>{const a=new URL(t,location.origin),l=a.pathname.replace(/\/+$/g,"")||"/";return{url:t,path:l,query:Object.fromEntries(a.searchParams),route:(p,d)=>n({url:p,replace:d}),wasPush:i}},[t]);return Ye(()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)}),[]),A(q.ctx.Provider,{value:s},e.children)}const gt=Promise.resolve();function Ze(e){const[t,n]=he(b=>b+1,0),{url:i,query:s,wasPush:a,path:l}=mt();if(!i)throw new Error("preact-iso's <Router> must be used within a <LocationProvider>, see: https://github.com/preactjs/preact-iso#locationprovider");const{rest:p=l,params:d={}}=ge(Pe),c=R(!1),h=R(l),o=R(0),u=R(),_=R(),v=R(),k=R(!1),x=R();x.current=!1;let m,g,$;qe(e.children).some(b=>{if(ft(p,b.props.path,$={...b.props,path:p,query:s,params:Object.assign({},d),rest:""}))return m=xe(b,$);b.props.default&&(g=xe(b,$))});let D=m||g;const P=u.current&&u.current.__u&G&&u.current.__u&Q,J=u.current&&u.current.__h,L=fe(()=>{_.current=u.current,u.current=A(Pe.Provider,{value:$},D);const b=_.current&&_.current.props.children;return!b||!D||D.type!==b.type||D.props.component!==b.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),o.current++,!0):!1},[i,JSON.stringify($)]);P?(u.current.__u|=G,u.current.__u|=Q):J&&(u.current.__h=!0);const H=_.current;return _.current=null,this.__c=(b,S)=>{x.current=!0,_.current=H,e.onLoadStart&&e.onLoadStart(i),c.current=!0;let tt=o.current;b.then(()=>{tt===o.current&&(_.current=null,u.current&&(S.__h&&(u.current.__h=S.__h),S.__u&Q&&(u.current.__u|=Q),S.__u&G&&(u.current.__u|=G)),gt.then(n))})},Ye(()=>{const b=this.__v&&this.__v.__e;if(x.current){!k.current&&!v.current&&(v.current=b);return}!k.current&&v.current&&(v.current!==b&&v.current.remove(),v.current=null),k.current=!0,h.current!==l&&(a&&scrollTo(0,0),e.onRouteChange&&e.onRouteChange(i),h.current=l),e.onLoadEnd&&c.current&&e.onLoadEnd(i),c.current=!1},[l,a,t]),L?[A(ne,{r:u}),A(ne,{r:_})]:A(ne,{r:u})}const G=32,Q=128,ne=({r:e})=>e.current;Ze.Provider=q;q.ctx=_e({});const Pe=_e({}),mt=()=>ge(q.ctx),Ae=f.__b;f.__b=e=>{e.type&&e.type._forwarded&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ae&&Ae(e)};const Me=f.__e;f.__e=(e,t,n)=>{if(e&&e.then){let i=t;for(;i=i.__;)if(i.__c&&i.__c.__c)return t.__e==null&&(t.__c.__z=[n.__e],t.__e=n.__e,t.__k=n.__k),t.__k||(t.__k=[]),i.__c.__c(e,t)}Me&&Me(e,t,n)};const bt=7777,Ve={meta:{version:"1.0"},project:{name:"",repo:"",created_at:""},tasks:[],ci:{status:"unknown",last_run:"",workflow_url:""},nudges:[],commits:[],reviews:[],init_commit:""},et=_e({state:Ve,connected:!1});function vt({children:e}){const[t,n]=Te(Ve),[i,s]=Te(!1),a=R(0),l=R(null),p=R(null);return dt(()=>{let d=!1;const c=async()=>{try{const o=await fetch("/api/state");if(!o.ok)return;const u=await o.json();d||n(u)}catch{}},h=()=>{if(d)return;const o=new WebSocket(`ws://localhost:${bt}/ws`);l.current=o,o.onopen=()=>{a.current=0,d||s(!0)},o.onmessage=u=>{try{const _=JSON.parse(u.data);d||n(_)}catch{}},o.onerror=()=>{d||s(!1)},o.onclose=()=>{d||(s(!1),!(a.current>=5)&&(a.current+=1,p.current=window.setTimeout(h,2e3)))}};return c(),h(),()=>{d=!0,s(!1),p.current&&window.clearTimeout(p.current),l.current&&l.current.close()}},[]),A(et.Provider,{value:{state:t,connected:i}},e)}function T(){return ge(et)}const yt=[{href:"/",label:"Dashboard"},{href:"/issues",label:"Issues"},{href:"/ci",label:"Actions"},{href:"/nudges",label:"Nudges"},{href:"/timetrack",label:"Time"},{href:"/commits",label:"Commits"},{href:"/reviews",label:"Reviews"},{href:"/settings",label:"Settings"}];function xt(){var s;const{connected:e,state:t}=T(),n=typeof window<"u"?window.location.pathname:"/",i=(((s=t.project)==null?void 0:s.name)||"DD").split(/[\s-]+/).filter(Boolean).slice(0,2).map(a=>{var l;return(l=a[0])==null?void 0:l.toUpperCase()}).join("")||"DD";return r("header",{style:{position:"sticky",top:0,zIndex:20,borderBottom:"1px solid rgba(122, 147, 191, 0.14)",background:"rgba(10, 16, 27, 0.9)",backdropFilter:"blur(14px)"},children:r("div",{style:{width:"min(1560px, calc(100% - 48px))",margin:"0 auto",display:"flex",alignItems:"center",gap:"22px",padding:"14px 0",flexWrap:"wrap"},children:[r("a",{href:"/",style:{display:"flex",alignItems:"center",gap:"14px",marginRight:"8px"},children:[r("span",{style:{width:"42px",height:"42px",borderRadius:"13px",display:"grid",placeItems:"center",fontWeight:800,background:"linear-gradient(180deg, #2f81f7, #1f6bd8)",color:"white",boxShadow:"0 10px 24px rgba(47, 129, 247, 0.28)"},children:"DD"}),r("div",{children:[r("div",{style:{fontSize:"1.9rem",fontWeight:800,letterSpacing:"-0.03em",color:"#f4f7fb"},children:"DevDive"}),r("div",{style:{color:"#8f9db6",marginTop:"-2px"},children:t.project.name||"Project control room"})]})]}),r("nav",{style:{display:"flex",flexWrap:"wrap",gap:"10px",marginRight:"auto"},children:yt.map(a=>{const l=n===a.href;return r("a",{href:a.href,style:{padding:"12px 16px",borderRadius:"14px",fontWeight:700,color:l?"#63a5ff":"#c2cce0",background:l?"rgba(47, 129, 247, 0.16)":"transparent",border:l?"1px solid rgba(47, 129, 247, 0.22)":"1px solid transparent"},children:a.label},a.href)})}),r("div",{style:{minWidth:"280px",flex:"0 1 340px",display:"flex",alignItems:"center",gap:"10px",padding:"12px 16px",borderRadius:"16px",border:"1px solid rgba(122, 147, 191, 0.16)",background:"#141e31",color:"#8f9db6"},children:[r("span",{style:{fontWeight:800},children:"?"}),r("input",{type:"text",placeholder:"Search issues, tasks...",style:{flex:1,background:"transparent",border:0,outline:"none",color:"#dfe7f5"}}),r("span",{style:{padding:"4px 8px",borderRadius:"10px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",fontSize:"0.8rem"},children:"/"})]}),r("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"10px 14px",borderRadius:"14px",background:"rgba(17, 26, 43, 0.88)",border:"1px solid rgba(122, 147, 191, 0.14)",color:"#8f9db6"},children:[r("span",{style:{width:"8px",height:"8px",borderRadius:"999px",background:e?"#2bc48a":"#56657f",boxShadow:e?"0 0 14px rgba(43, 196, 138, 0.5)":"none"}}),e?"Live":"Offline"]}),r("span",{style:{width:"42px",height:"42px",borderRadius:"999px",display:"grid",placeItems:"center",fontWeight:800,color:"#f4f7fb",background:"linear-gradient(180deg, #273652, #172131)",border:"1px solid rgba(122, 147, 191, 0.18)"},children:i})]})]})})}const Ne={open:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},in_progress:{background:"rgba(47, 129, 247, 0.16)",border:"rgba(47, 129, 247, 0.24)",color:"#7db1ff"},done:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},passing:{background:"rgba(43, 196, 138, 0.16)",border:"rgba(43, 196, 138, 0.22)",color:"#7addaf"},failing:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},pending:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},unknown:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"},critical:{background:"rgba(241, 91, 122, 0.16)",border:"rgba(241, 91, 122, 0.2)",color:"#ff8da5"},warning:{background:"rgba(241, 166, 56, 0.16)",border:"rgba(241, 166, 56, 0.2)",color:"#ffbf69"},info:{background:"rgba(143, 157, 182, 0.14)",border:"rgba(143, 157, 182, 0.2)",color:"#b8c2d5"}};function E({status:e}){const t=e||"unknown",n=Ne[t]||Ne.unknown;return r("span",{style:{display:"inline-flex",alignItems:"center",padding:"6px 10px",borderRadius:"999px",background:n.background,border:`1px solid ${n.border}`,color:n.color,fontSize:"0.78rem",fontWeight:700,textTransform:"capitalize",whiteSpace:"nowrap"},children:t.replaceAll("_"," ")})}function wt(e){if(!e)return"No updates yet";const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return"Just now";if(n<60)return`${n} minutes ago`;const i=Math.floor(n/60);return i<24?`${i} hours ago`:`${Math.floor(i/24)} days ago`}function kt(e){var n;const t=[];return(e.commits||[]).slice(-4).forEach(i=>{var s,a;t.push({id:`commit-${i.commit_hash}`,title:i.summary||"Commit analysis recorded",body:`Tracked work updated for ${((s=i.tasks_updated)==null?void 0:s.length)||0} closed tasks and ${((a=i.tasks_progressed)==null?void 0:a.length)||0} active tasks.`,time:i.analysed_at,tone:"blue",icon:"CM"})}),(e.nudges||[]).slice(-3).forEach(i=>{t.push({id:`nudge-${i.created_at}`,title:"AI nudge generated",body:i.message,time:i.created_at,tone:"purple",icon:"AI"})}),(e.reviews||[]).slice(-2).forEach(i=>{var s;t.push({id:`review-${i.reviewed_at}`,title:i.findings.length===0?"Design review passed cleanly":`Design review found ${i.findings.length} items`,body:i.findings.length===0?"No drift detected against the planned architecture.":((s=i.findings[0])==null?void 0:s.finding)||"Architectural drift requires attention.",time:i.reviewed_at,tone:i.findings.some(a=>a.severity==="critical")?"rose":"green",icon:"RV"})}),(n=e.ci)!=null&&n.last_run&&t.push({id:`ci-${e.ci.last_run}`,title:`CI is ${e.ci.status.replaceAll("_"," ")}`,body:e.ci.workflow_url?"Latest workflow run is available from the actions page.":"No workflow link is available yet.",time:e.ci.last_run,tone:e.ci.status==="failing"?"rose":"green",icon:"CI"}),t.filter(i=>i.time).sort((i,s)=>new Date(s.time)-new Date(i.time)).slice(0,5)}function Le(){var p;const{state:e}=T(),t=e.tasks.filter(d=>d.status!=="done"),n=e.tasks.filter(d=>d.status==="in_progress"),i=e.tasks.filter(d=>d.status==="done"),s=((p=e.reviews[0])==null?void 0:p.findings)||[],a=kt(e),l=[...t].sort((d,c)=>{const h=d.status==="in_progress"?0:1,o=c.status==="in_progress"?0:1;return h-o}).slice(0,3);return r("section",{class:"page",children:[r("div",{class:"page-hero",children:[r("div",{children:[r("p",{class:"eyebrow",children:"Dashboard"}),r("h1",{class:"page-title",children:e.project.name||"DevDive Overview"}),r("p",{class:"page-subtitle",children:"A live command view for work in motion, review pressure, and the next tasks that deserve attention."})]}),r("div",{class:"hero-actions",children:[r("a",{class:"button-secondary",href:"/issues",children:"Open board"}),r("a",{class:"button",href:"/reviews",children:"Review latest drift"})]})]}),r("div",{class:"metric-grid",children:[r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"Open Issues"}),r("div",{class:"metric-icon metric-icon--blue",children:"OI"})]}),r("div",{class:"metric-card__value",children:[t.length,r("span",{class:"metric-card__delta metric-card__delta--up",children:[i.length," closed"]})]})]}),r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"In Progress"}),r("div",{class:"metric-icon metric-icon--amber",children:"IP"})]}),r("div",{class:"metric-card__value",children:[n.length,r("span",{class:"metric-card__delta",children:[e.tasks.length," total tasks"]})]})]}),r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"AI Nudges"}),r("div",{class:"metric-icon metric-icon--purple",children:"AI"})]}),r("div",{class:"metric-card__value",children:[e.nudges.length,r("span",{class:"metric-card__delta",children:[s.length," active review findings"]})]})]}),r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"CI Status"}),r("div",{class:"metric-icon metric-icon--green",children:"CI"})]}),r("div",{class:"metric-card__value",children:r("span",{style:{fontSize:"2.35rem",fontFamily:"inherit",textTransform:"capitalize"},children:e.ci.status.replaceAll("_"," ")})}),r(E,{status:e.ci.status})]})]}),r("div",{class:"split-grid",children:[r("section",{class:"panel",children:[r("div",{class:"panel-header",children:[r("h2",{class:"panel-title",children:"Recent Activity"}),r("a",{class:"panel-link",href:"/commits",children:"View all"})]}),a.length===0?r("div",{class:"empty-state",children:"No recent activity yet. Run init and start committing to populate the dashboard."}):r("div",{class:"timeline-list",children:a.map(d=>r("article",{class:"timeline-item",children:[r("div",{class:`timeline-icon timeline-icon--${d.tone}`,children:d.icon}),r("div",{children:[r("h3",{class:"timeline-title",children:d.title}),r("p",{class:"timeline-copy",children:d.body})]}),r("div",{class:"timeline-time",children:wt(d.time)})]},d.id))})]}),r("section",{class:"panel",children:[r("div",{class:"panel-header",children:[r("h2",{class:"panel-title",children:"Priority Tasks"}),r("a",{class:"panel-link",href:"/issues",children:"View board"})]}),l.length===0?r("div",{class:"empty-state",children:"No active tasks. Run devdive init to generate a project plan."}):r("div",{class:"priority-list",children:[l.map((d,c)=>{const h=d.status==="in_progress"?"tone-blue":c===0?"tone-rose":"tone-slate",o=d.status==="in_progress"?"In Progress":c===0?"High Priority":"Backlog";return r("article",{class:"priority-card",children:[r("div",{class:"card-head",children:[r("span",{class:`priority-ribbon ${h}`,children:o}),r(E,{status:d.status})]}),r("h3",{class:"priority-title",children:d.title}),r("p",{class:"card-copy",children:d.design_notes}),r("div",{class:"issue-meta",children:[r("span",{children:[Number(d.estimate_hours||0).toFixed(1),"h estimate"]}),r("span",{children:d.id?`#${d.id}`:"Untracked"})]})]},d.id||d.title)}),r("div",{class:"dashed-card",children:"+ Add Priority Task"})]})]})]})]})}function $t(e){return e<=1?"Updated just now":e<24?`Updated ${Math.round(e)}h ago`:`Updated ${Math.round(e/24)}d ago`}function Dt(e){return e==="open"?"tone-slate":e==="in_progress"?"tone-blue":e==="review"?"tone-amber":"tone-green"}function St({task:e,index:t}){const n=(e.title||"T").split(/\s+/).slice(0,2).map(i=>{var s;return(s=i[0])==null?void 0:s.toUpperCase()}).join("");return r("article",{class:"issue-card",children:[r("div",{class:"issue-card__head",children:[r("span",{class:"issue-id",children:e.id?`#${e.id}`:"Task"}),r(E,{status:e.status})]}),r("h3",{class:"issue-title",children:e.title}),r("div",{class:"pill-row",children:(e.labels||[]).map(i=>r("span",{class:`label-tag ${t%4===0?"tone-blue":t%4===1?"tone-purple":t%4===2?"tone-amber":"tone-slate"}`,children:i},`${e.id}-${i}`))}),r("p",{class:"card-copy",style:{marginTop:"14px"},children:e.design_notes}),r("div",{class:"issue-meta",children:[r("div",{class:"status-row",children:[r("span",{class:"avatar-chip",children:n}),r("span",{children:[Number(e.estimate_hours||0).toFixed(1),"h"]})]}),e.issue_url?r("a",{class:"panel-link",href:e.issue_url,target:"_blank",rel:"noreferrer",children:"Open issue"}):r("span",{children:$t((t+1)*3)})]})]})}function Rt(){const{state:e}=T(),t=e.tasks.filter(c=>c.status==="open"),n=e.tasks.filter(c=>c.status==="in_progress"),i=e.tasks.filter(c=>c.status==="done"),s=new Set((e.commits||[]).slice(-3).flatMap(c=>c.tasks_updated||[])),a=i.filter(c=>s.has(c.id)),l=i.filter(c=>!s.has(c.id)),p=e.tasks.reduce((c,h)=>c+Number(h.estimate_hours||0),0),d=[{key:"open",title:"To Do",tasks:t},{key:"in_progress",title:"In Progress",tasks:n},{key:"review",title:"In Review",tasks:a},{key:"done",title:"Done",tasks:l}];return r("section",{class:"page",children:[r("div",{class:"page-hero",children:[r("div",{children:[r("p",{class:"eyebrow",children:"Issues"}),r("h1",{class:"page-title",children:e.project.name||"Sprint Board"}),r("p",{class:"page-subtitle",children:"Active development board for the generated plan, grouped into the working states that matter most day to day."})]}),r("div",{class:"hero-actions",children:[r("span",{class:"button-secondary",children:[p.toFixed(1),"h scoped"]}),r("a",{class:"button",href:"/commits",children:"New activity"})]})]}),r("div",{class:"board-toolbar",children:[r("div",{class:"toolbar-row",children:[r("span",{class:"toolbar-chip",children:"Filters"}),r("span",{class:"toolbar-chip",children:"Assignee"}),r("span",{class:"toolbar-chip",children:"Label"}),r("span",{class:"toolbar-chip",children:"Milestone"})]}),r("div",{class:"toolbar-row",children:[r("span",{class:"toolbar-chip--active",children:"Only my issues"}),r("span",{class:"toolbar-chip",children:"Recently updated"})]})]}),e.tasks.length===0?r("div",{class:"empty-state",children:"No tasks yet. Run devdive init to get started."}):r("div",{class:"board-grid",children:d.map(c=>r("section",{class:"board-column",children:[r("div",{class:"board-column__head",children:[r("div",{class:"board-column__title",children:[r("span",{children:c.title}),r("span",{class:`board-count ${Dt(c.key)}`,children:c.tasks.length})]}),r("span",{class:"ghost-action",children:"..."})]}),r("div",{class:"board-stack",children:[c.tasks.length===0?r("div",{class:"board-empty",children:"Nothing parked here yet."}):c.tasks.map((h,o)=>r(St,{task:h,index:o},`${c.key}-${h.id}-${h.title}`)),c.key==="open"?r("div",{class:"dashed-card",children:"+ Create Issue"}):null]})]},c.key))})]})}function Ue(e){if(!e)return"No runs yet";const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return"Just now";if(n<60)return`${n} minutes ago`;const i=Math.floor(n/60);return i<24?`${i} hours ago`:`${Math.floor(i/24)} days ago`}function Ct(){const{state:e}=T(),t=e.reviews[0],n=e.nudges[e.nudges.length-1];return r("section",{class:"page",children:[r("div",{class:"page-hero",children:[r("div",{children:[r("p",{class:"eyebrow",children:"Actions"}),r("h1",{class:"page-title",children:"Build and Release Health"}),r("p",{class:"page-subtitle",children:"The CI signal sits inside the same operational frame as nudges, drift, and recent delivery activity."})]}),r("div",{class:"hero-actions",children:e.ci.workflow_url?r("a",{class:"button",href:e.ci.workflow_url,target:"_blank",rel:"noreferrer",children:"Open workflow"}):r("span",{class:"button-secondary",children:"Waiting for workflow URL"})})]}),r("div",{class:"split-grid",children:[r("section",{class:"panel",children:[r("div",{class:"panel-header",children:[r("h2",{class:"panel-title",children:"Current Run"}),r(E,{status:e.ci.status})]}),r("div",{class:"stack-list",children:r("article",{class:"list-card",children:[r("div",{class:"card-head",children:[r("div",{children:[r("div",{class:"panel-kicker",children:"Workflow status"}),r("h3",{class:"card-title",style:{textTransform:"capitalize"},children:e.ci.status.replaceAll("_"," ")})]}),r("div",{class:"metric-icon metric-icon--green",children:"CI"})]}),e.ci.status==="unknown"?r("p",{class:"card-copy",children:"No CI runs detected yet."}):r(N,{children:[r("p",{class:"card-copy",children:["Last run completed ",Ue(e.ci.last_run),"."]}),r("div",{class:"issue-meta",children:[r("span",{children:e.ci.workflow_url?"Workflow run available":"No workflow link yet"}),e.ci.workflow_url?r("a",{class:"panel-link",href:e.ci.workflow_url,target:"_blank",rel:"noreferrer",children:"View workflow"}):null]})]})]})})]}),r("section",{class:"panel",children:[r("div",{class:"panel-header",children:[r("h2",{class:"panel-title",children:"Related Signals"}),r("a",{class:"panel-link",href:"/reviews",children:"Open reviews"})]}),r("div",{class:"stack-list",children:[r("article",{class:"list-card",children:[r("div",{class:"panel-kicker",children:"Latest review"}),r("h3",{class:"card-title",children:t?`${t.findings.length} findings in latest review`:"No design reviews yet"}),r("p",{class:"card-copy",children:t?`Reviewed ${Ue(t.reviewed_at)}.`:"Run devdive review to compare the codebase against the original plan."})]}),r("article",{class:"list-card",children:[r("div",{class:"panel-kicker",children:"Latest nudge"}),r("h3",{class:"card-title",children:n?"AI advisory available":"No nudges yet"}),r("p",{class:"card-copy",children:n?n.message:"Operational nudges will appear here when CI or reviews need attention."})]})]})]})]})]})}function Tt(e){if(!e)return"Unknown time";const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return"Just now";if(n<60)return`${n} minutes ago`;const i=Math.floor(n/60);return i<24?`${i} hours ago`:`${Math.floor(i/24)} days ago`}function It(){const{state:e}=T(),t=[...e.nudges].reverse();return r("section",{class:"page",children:[r("div",{class:"page-hero",children:[r("div",{children:[r("p",{class:"eyebrow",children:"Nudges"}),r("h1",{class:"page-title",children:"Advisory Feed"}),r("p",{class:"page-subtitle",children:"Short prompts from the planner when CI breaks, drift appears, or work starts slipping."})]}),r("div",{class:"hero-actions",children:r("span",{class:"button-secondary",children:[t.length," total nudges"]})})]}),t.length===0?r("div",{class:"empty-state",children:"No nudges yet. DevDive will suggest improvements as you work."}):r("div",{class:"stack-list",children:t.map(n=>r("article",{class:"list-card",children:[r("div",{class:"card-head",children:[r("span",{class:"priority-ribbon tone-purple",children:"AI Advisory"}),r("span",{class:"card-time",children:Tt(n.created_at)})]}),r("h3",{class:"card-title",children:n.message}),r("p",{class:"card-copy",children:"Generated from current state transitions, failing signals, or architectural drift."})]},`${n.created_at}-${n.message}`))})]})}function Pt(){const{state:e}=T(),t=e.tasks.reduce((a,l)=>a+Number(l.estimate_hours||0),0),n=e.tasks.filter(a=>a.status==="done").reduce((a,l)=>a+Number(l.estimate_hours||0),0),i=Math.max(t-n,0),s=t===0?0:Math.round(n/t*100);return r("section",{class:"page",children:[r("div",{class:"page-hero",children:r("div",{children:[r("p",{class:"eyebrow",children:"Time"}),r("h1",{class:"page-title",children:"Burndown and Throughput"}),r("p",{class:"page-subtitle",children:"A simple burndown readout from the plan estimates and the task statuses DevDive keeps in sync."})]})}),e.tasks.length===0?r("div",{class:"empty-state",children:"No tasks yet."}):r(N,{children:[r("div",{class:"metric-grid",children:[r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"Estimated"}),r("div",{class:"metric-icon metric-icon--blue",children:"ET"})]}),r("div",{class:"metric-card__value",children:[t.toFixed(1),"h"]})]}),r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"Completed"}),r("div",{class:"metric-icon metric-icon--green",children:"DN"})]}),r("div",{class:"metric-card__value",children:[n.toFixed(1),"h"]})]}),r("article",{class:"metric-card",children:[r("div",{class:"metric-card__top",children:[r("div",{class:"metric-card__label",children:"Remaining"}),r("div",{class:"metric-icon metric-icon--amber",children:"RM"})]}),r("div",{class:"metric-card__value",children:[i.toFixed(1),"h"]})]})]}),r("div",{class:"panel",children:[r("div",{class:"panel-header",children:[r("strong",{children:"Burndown Progress"}),r("span",{children:[s,"%"]})]}),r("div",{class:"progress-track",children:r("div",{class:"progress-fill",style:{width:`${s}%`}})})]}),r("div",{class:"table-wrap",children:r("table",{children:[r("thead",{children:r("tr",{children:[r("th",{children:"Title"}),r("th",{children:"Estimate"}),r("th",{children:"Status"})]})}),r("tbody",{children:e.tasks.map(a=>r("tr",{children:[r("td",{children:a.title}),r("td",{children:[Number(a.estimate_hours||0).toFixed(1),"h"]}),r("td",{children:r(E,{status:a.status})})]},`${a.id}-${a.title}`))})]})})]})]})}function At(e){if(!e)return"Unknown time";const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return"Just now";if(n<60)return`${n} minutes ago`;const i=Math.floor(n/60);return i<24?`${i} hours ago`:`${Math.floor(i/24)} days ago`}function Mt(){const{state:e}=T(),t=[...e.commits].reverse();return r("section",{class:"page",children:[r("div",{class:"page-hero",children:r("div",{children:[r("p",{class:"eyebrow",children:"Commits"}),r("h1",{class:"page-title",children:"Delivery Timeline"}),r("p",{class:"page-subtitle",children:"Semantic commit summaries from the LLM instead of keyword-based issue closing."})]})}),t.length===0?r("div",{class:"empty-state",children:"No commits analysed yet. DevDive analyses your commits as you push."}):r("div",{class:"stack-list",children:t.map(n=>r("article",{class:"list-card",children:[r("div",{class:"card-head",children:[r("strong",{class:"mono",children:(n.commit_hash||"").slice(0,7)||"unknown"}),r("span",{class:"card-time",children:At(n.analysed_at)})]}),r("h3",{class:"card-title",children:n.summary}),r("p",{class:"card-copy",children:"Commit analysis updated task progress without relying on manual issue-closing keywords."}),r("div",{class:"pill-row",children:[(n.tasks_updated||[]).map(i=>r("span",{class:"label-tag tone-green",children:["closed #",i]},`closed-${n.commit_hash}-${i}`)),(n.tasks_progressed||[]).map(i=>r("span",{class:"label-tag tone-blue",children:["progressed #",i]},`progress-${n.commit_hash}-${i}`))]})]},`${n.commit_hash}-${n.analysed_at}`))})]})}function Nt(e){if(!e)return"Unknown time";const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return"Just now";if(n<60)return`${n} minutes ago`;const i=Math.floor(n/60);return i<24?`${i} hours ago`:`${Math.floor(i/24)} days ago`}function Lt(){const{state:e}=T(),t=[...e.reviews].reverse(),n=t[0];return r("section",{class:"page",children:[r("div",{class:"page-hero",children:r("div",{children:[r("p",{class:"eyebrow",children:"Reviews"}),r("h1",{class:"page-title",children:"Architecture Reviews"}),r("p",{class:"page-subtitle",children:"Drift checks against the original design notes attached to each planned task."})]})}),n&&n.findings.length===0?r("div",{class:"banner",children:"No drift detected in latest review."}):null,t.length===0?r("div",{class:"empty-state",children:"No design reviews yet. DevDive reviews your architecture every 10 commits."}):r("div",{class:"stack-list",children:t.map(i=>r("article",{class:"list-card",children:[r("div",{style:{marginBottom:"12px",color:"var(--text-muted)"},children:["Reviewed ",Nt(i.reviewed_at)]}),i.findings.length===0?r("div",{class:"card-copy",children:"No findings for this review."}):r("div",{class:"stack-list",children:i.findings.map((s,a)=>r("article",{class:"summary-card",children:[r("div",{class:"card-head",children:[r("code",{class:"mono",children:s.file}),r(E,{status:s.severity})]}),r("p",{class:"card-copy",children:s.finding})]},`${s.file}-${s.detected_at}-${a}`))})]},i.reviewed_at))})]})}function Ut(e){return e?new Date(e).toLocaleString():"Unknown"}function jt(){var t;const{state:e}=T();return r("section",{class:"page",children:[r("div",{class:"page-hero",children:r("div",{children:[r("p",{class:"eyebrow",children:"Settings"}),r("h1",{class:"page-title",children:"Project Configuration"}),r("p",{class:"page-subtitle",children:"Read-only project metadata sourced from the live `devdive.json` state."})]})}),r("div",{class:"settings-grid",children:[r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Project Name"}),r("h3",{class:"card-title",children:e.project.name||"Unknown"})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Repo"}),r("h3",{class:"card-title",children:e.project.repo||"Unknown"})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Created"}),r("h3",{class:"card-title",children:Ut(e.project.created_at)})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Schema Version"}),r("h3",{class:"card-title",children:((t=e.meta)==null?void 0:t.version)||"1.0"})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Init Commit"}),r("h3",{class:"card-title mono",children:e.init_commit||"Unknown"})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Rollback"}),r("p",{class:"card-copy",children:["Run ",r("code",{class:"mono",children:"devdive rollback --sha <commit-sha>"})," to restore a prior state snapshot."]})]}),r("article",{class:"summary-card",children:[r("div",{class:"panel-kicker",children:"Configuration"}),r("p",{class:"card-copy",children:"To change settings, edit your .env file and restart DevDive."})]})]})]})}function Et(e){if(!e)return"No recent sync";const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return"Just now";if(n<60)return`${n}m ago`;const i=Math.floor(n/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}function Ht(e){var n,i;const t=[(n=e.project)==null?void 0:n.created_at,(i=e.ci)==null?void 0:i.last_run,...(e.commits||[]).map(s=>s.analysed_at),...(e.nudges||[]).map(s=>s.created_at),...(e.reviews||[]).map(s=>s.reviewed_at)].filter(Boolean);return t.length===0?"":t.map(s=>new Date(s).getTime()).sort((s,a)=>a-s).map(s=>new Date(s).toISOString())[0]}function Ot(){var n;const{connected:e,state:t}=T();return r("footer",{class:"shell-footer",children:[r("div",{class:"shell-footer__group",children:[r("span",{class:`footer-dot ${e?"footer-dot--live":"footer-dot--idle"}`}),r("span",{children:e?"All systems operational":"Live sync unavailable"}),r("span",{class:"footer-divider"}),r("span",{children:["Last synced ",Et(Ht(t))]})]}),r("div",{class:"shell-footer__group shell-footer__group--muted",children:[r("span",{children:((n=t.project)==null?void 0:n.repo)||"devdive"}),r("span",{class:"footer-divider"}),r("span",{children:"Shortcuts"})]})]})}function Ft(){return r(N,{children:[r("style",{children:`
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
      `}),r(vt,{children:r(q,{children:r("div",{class:"shell",children:[r(xt,{}),r("main",{class:"shell-main",children:r(Ze,{children:[r(Le,{path:"/"}),r(Rt,{path:"/issues"}),r(Ct,{path:"/ci"}),r(It,{path:"/nudges"}),r(Pt,{path:"/timetrack"}),r(Mt,{path:"/commits"}),r(Lt,{path:"/reviews"}),r(jt,{path:"/settings"}),r(Le,{default:!0})]})}),r(Ot,{})]})})})]})}lt(r(Ft,{}),document.getElementById("app"));

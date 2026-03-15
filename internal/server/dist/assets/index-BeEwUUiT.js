(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var F,h,Ee,T,ve,Ue,Ie,We,ce,ie,oe,je,X={},Z=[],tt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,O=Array.isArray;function P(t,e){for(var r in e)t[r]=e[r];return t}function _e(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function M(t,e,r){var n,s,i,l={};for(i in e)i=="key"?n=e[i]:i=="ref"?s=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?F.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)l[i]===void 0&&(l[i]=t.defaultProps[i]);return j(t,l,n,s,null)}function j(t,e,r,n,s){var i={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Ee,__i:-1,__u:0};return s==null&&h.vnode!=null&&h.vnode(i),i}function A(t){return t.children}function Q(t,e){this.props=t,this.context=e}function U(t,e){if(e==null)return t.__?U(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?U(t):null}function rt(t){if(t.__P&&t.__d){var e=t.__v,r=e.__e,n=[],s=[],i=P({},e);i.__v=e.__v+1,h.vnode&&h.vnode(i),de(t.__P,i,e,t.__n,t.__P.namespaceURI,32&e.__u?[r]:null,n,r??U(e),!!(32&e.__u),s),i.__v=e.__v,i.__.__k[i.__i]=i,qe(n,i,s),e.__e=e.__=null,i.__e!=r&&Fe(i)}}function Fe(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),Fe(t)}function se(t){(!t.__d&&(t.__d=!0)&&T.push(t)&&!V.__r++||ve!=h.debounceRendering)&&((ve=h.debounceRendering)||Ue)(V)}function V(){try{for(var t,e=1;T.length;)T.length>e&&T.sort(Ie),t=T.shift(),e=T.length,rt(t)}finally{T.length=V.__r=0}}function Oe(t,e,r,n,s,i,l,c,d,_,f){var a,u,p,y,w,x,g,m=n&&n.__k||Z,$=e.length;for(d=nt(r,e,m,d,$),a=0;a<$;a++)(p=r.__k[a])!=null&&(u=p.__i!=-1&&m[p.__i]||X,p.__i=a,x=de(t,p,u,s,i,l,c,d,_,f),y=p.__e,p.ref&&u.ref!=p.ref&&(u.ref&&ue(u.ref,null,p),f.push(p.ref,p.__c||y,p)),w==null&&y!=null&&(w=y),(g=!!(4&p.__u))||u.__k===p.__k?d=ze(p,d,t,g):typeof p.type=="function"&&x!==void 0?d=x:y&&(d=y.nextSibling),p.__u&=-7);return r.__e=w,d}function nt(t,e,r,n,s){var i,l,c,d,_,f=r.length,a=f,u=0;for(t.__k=new Array(s),i=0;i<s;i++)(l=e[i])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=t.__k[i]=j(null,l,null,null,null):O(l)?l=t.__k[i]=j(A,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=t.__k[i]=j(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):t.__k[i]=l,d=i+u,l.__=t,l.__b=t.__b+1,c=null,(_=l.__i=it(l,r,d,a))!=-1&&(a--,(c=r[_])&&(c.__u|=2)),c==null||c.__v==null?(_==-1&&(s>f?u--:s<f&&u++),typeof l.type!="function"&&(l.__u|=4)):_!=d&&(_==d-1?u--:_==d+1?u++:(_>d?u--:u++,l.__u|=4))):t.__k[i]=null;if(a)for(i=0;i<f;i++)(c=r[i])!=null&&!(2&c.__u)&&(c.__e==n&&(n=U(c)),Ke(c,c));return n}function ze(t,e,r,n){var s,i;if(typeof t.type=="function"){for(s=t.__k,i=0;s&&i<s.length;i++)s[i]&&(s[i].__=t,e=ze(s[i],e,r,n));return e}t.__e!=e&&(n&&(e&&t.type&&!e.parentNode&&(e=U(t)),r.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Be(t,e){return e=e||[],t==null||typeof t=="boolean"||(O(t)?t.some(function(r){Be(r,e)}):e.push(t)),e}function it(t,e,r,n){var s,i,l,c=t.key,d=t.type,_=e[r],f=_!=null&&(2&_.__u)==0;if(_===null&&c==null||f&&c==_.key&&d==_.type)return r;if(n>(f?1:0)){for(s=r-1,i=r+1;s>=0||i<e.length;)if((_=e[l=s>=0?s--:i++])!=null&&!(2&_.__u)&&c==_.key&&d==_.type)return l}return-1}function ye(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||tt.test(e)?r:r+"px"}function J(t,e,r,n,s){var i,l;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||ye(t.style,e,"");if(r)for(e in r)n&&r[e]==n[e]||ye(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(We,"$1")),l=e.toLowerCase(),e=l in t||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=r,r?n?r.u=n.u:(r.u=ce,t.addEventListener(e,i?oe:ie,i)):t.removeEventListener(e,i?oe:ie,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function be(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e.t==null)e.t=ce++;else if(e.t<r.u)return;return r(h.event?h.event(e):e)}}}function de(t,e,r,n,s,i,l,c,d,_){var f,a,u,p,y,w,x,g,m,$,S,L,q,N,I,v=e.type;if(e.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),i=[c=e.__e=r.__e]),(f=h.__b)&&f(e);e:if(typeof v=="function")try{if(g=e.props,m=v.prototype&&v.prototype.render,$=(f=v.contextType)&&n[f.__c],S=f?$?$.props.value:f.__:n,r.__c?x=(a=e.__c=r.__c).__=a.__E:(m?e.__c=a=new v(g,S):(e.__c=a=new Q(g,S),a.constructor=v,a.render=st),$&&$.sub(a),a.state||(a.state={}),a.__n=n,u=a.__d=!0,a.__h=[],a._sb=[]),m&&a.__s==null&&(a.__s=a.state),m&&v.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=P({},a.__s)),P(a.__s,v.getDerivedStateFromProps(g,a.__s))),p=a.props,y=a.state,a.__v=e,u)m&&v.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),m&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(m&&v.getDerivedStateFromProps==null&&g!==p&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(g,S),e.__v==r.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(g,a.__s,S)===!1){e.__v!=r.__v&&(a.props=g,a.state=a.__s,a.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(C){C&&(C.__=e)}),Z.push.apply(a.__h,a._sb),a._sb=[],a.__h.length&&l.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(g,a.__s,S),m&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(p,y,w)})}if(a.context=S,a.props=g,a.__P=t,a.__e=!1,L=h.__r,q=0,m)a.state=a.__s,a.__d=!1,L&&L(e),f=a.render(a.props,a.state,a.context),Z.push.apply(a.__h,a._sb),a._sb=[];else do a.__d=!1,L&&L(e),f=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++q<25);a.state=a.__s,a.getChildContext!=null&&(n=P(P({},n),a.getChildContext())),m&&!u&&a.getSnapshotBeforeUpdate!=null&&(w=a.getSnapshotBeforeUpdate(p,y)),N=f!=null&&f.type===A&&f.key==null?Je(f.props.children):f,c=Oe(t,O(N)?N:[N],e,r,n,s,i,l,c,d,_),a.base=e.__e,e.__u&=-161,a.__h.length&&l.push(a),x&&(a.__E=a.__=null)}catch(C){if(e.__v=null,d||i!=null)if(C.then){for(e.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;i[i.indexOf(c)]=null,e.__e=c}else{for(I=i.length;I--;)_e(i[I]);ae(e)}else e.__e=r.__e,e.__k=r.__k,C.then||ae(e);h.__e(C,e,r)}else i==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):c=e.__e=ot(r.__e,e,r,n,s,i,l,d,_);return(f=h.diffed)&&f(e),128&e.__u?void 0:c}function ae(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(ae))}function qe(t,e,r){for(var n=0;n<r.length;n++)ue(r[n],r[++n],r[++n]);h.__c&&h.__c(e,t),t.some(function(s){try{t=s.__h,s.__h=[],t.some(function(i){i.call(s)})}catch(i){h.__e(i,s.__v)}})}function Je(t){return typeof t!="object"||t==null||t.__b>0?t:O(t)?t.map(Je):P({},t)}function ot(t,e,r,n,s,i,l,c,d){var _,f,a,u,p,y,w,x=r.props||X,g=e.props,m=e.type;if(m=="svg"?s="http://www.w3.org/2000/svg":m=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(_=0;_<i.length;_++)if((p=i[_])&&"setAttribute"in p==!!m&&(m?p.localName==m:p.nodeType==3)){t=p,i[_]=null;break}}if(t==null){if(m==null)return document.createTextNode(g);t=document.createElementNS(s,m,g.is&&g),c&&(h.__m&&h.__m(e,i),c=!1),i=null}if(m==null)x===g||c&&t.data==g||(t.data=g);else{if(i=i&&F.call(t.childNodes),!c&&i!=null)for(x={},_=0;_<t.attributes.length;_++)x[(p=t.attributes[_]).name]=p.value;for(_ in x)p=x[_],_=="dangerouslySetInnerHTML"?a=p:_=="children"||_ in g||_=="value"&&"defaultValue"in g||_=="checked"&&"defaultChecked"in g||J(t,_,null,p,s);for(_ in g)p=g[_],_=="children"?u=p:_=="dangerouslySetInnerHTML"?f=p:_=="value"?y=p:_=="checked"?w=p:c&&typeof p!="function"||x[_]===p||J(t,_,p,x[_],s);if(f)c||a&&(f.__html==a.__html||f.__html==t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(a&&(t.innerHTML=""),Oe(e.type=="template"?t.content:t,O(u)?u:[u],e,r,n,m=="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,l,i?i[0]:r.__k&&U(r,0),c,d),i!=null)for(_=i.length;_--;)_e(i[_]);c||(_="value",m=="progress"&&y==null?t.removeAttribute("value"):y!=null&&(y!==t[_]||m=="progress"&&!y||m=="option"&&y!=x[_])&&J(t,_,y,x[_],s),_="checked",w!=null&&w!=t[_]&&J(t,_,w,x[_],s))}return t}function ue(t,e,r){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(s){h.__e(s,r)}}function Ke(t,e,r){var n,s;if(h.unmount&&h.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||ue(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){h.__e(i,e)}n.base=n.__P=null}if(n=t.__k)for(s=0;s<n.length;s++)n[s]&&Ke(n[s],e,r||typeof t.type!="function");r||_e(t.__e),t.__c=t.__=t.__e=void 0}function st(t,e,r){return this.constructor(t,r)}function at(t,e,r){var n,s,i,l;e==document&&(e=document.documentElement),h.__&&h.__(t,e),s=(n=!1)?null:e.__k,i=[],l=[],de(e,t=e.__k=M(A,null,[t]),s||X,X,e.namespaceURI,s?null:e.firstChild?F.call(e.childNodes):null,i,s?s.__e:e.firstChild,n,l),qe(i,t,l)}function xe(t,e,r){var n,s,i,l,c=P({},t.props);for(i in t.type&&t.type.defaultProps&&(l=t.type.defaultProps),e)i=="key"?n=e[i]:i=="ref"?s=e[i]:c[i]=e[i]===void 0&&l!=null?l[i]:e[i];return arguments.length>2&&(c.children=arguments.length>3?F.call(arguments,2):r),j(t.type,c,n||t.key,s||t.ref,null)}function pe(t){function e(r){var n,s;return this.getChildContext||(n=new Set,(s={})[e.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(i){this.props.value!=i.value&&n.forEach(function(l){l.__e=!0,se(l)})},this.sub=function(i){n.add(i);var l=i.componentWillUnmount;i.componentWillUnmount=function(){n&&n.delete(i),l&&l.call(i)}}),r.children}return e.__c="__cC"+je++,e.__=t,e.Provider=e.__l=(e.Consumer=function(r,n){return r.children(n)}).contextType=e,e}F=Z.slice,h={__e:function(t,e,r,n){for(var s,i,l;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(t)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,n||{}),l=s.__d),l)return s.__E=s}catch(c){t=c}throw t}},Ee=0,Q.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=P({},this.state),typeof t=="function"&&(t=t(P({},r),this.props)),t&&P(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),se(this))},Q.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),se(this))},Q.prototype.render=A,T=[],Ue=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ie=function(t,e){return t.__v.__b-e.__v.__b},V.__r=0,We=/(PointerCapture)$|Capture$/i,ce=0,ie=be(!1),oe=be(!0),je=0;var lt=0;function o(t,e,r,n,s,i){e||(e={});var l,c,d=e;if("ref"in d)for(c in d={},e)c=="ref"?l=e[c]:d[c]=e[c];var _={type:t,props:d,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--lt,__i:-1,__u:0,__source:s,__self:i};if(typeof t=="function"&&(l=t.defaultProps))for(c in l)d[c]===void 0&&(d[c]=l[c]);return h.vnode&&h.vnode(_),_}var H,b,re,ke,ee=0,Ge=[],k=h,we=k.__b,$e=k.__r,Se=k.diffed,Ce=k.__c,De=k.unmount,Pe=k.__;function z(t,e){k.__h&&k.__h(b,t,ee||e),ee=0;var r=b.__H||(b.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function Te(t){return ee=1,fe(Ye,t)}function fe(t,e,r){var n=z(H++,2);if(n.t=t,!n.__c&&(n.__=[Ye(void 0,e),function(c){var d=n.__N?n.__N[0]:n.__[0],_=n.t(d,c);d!==_&&(n.__N=[_,n.__[1]],n.__c.setState({}))}],n.__c=b,!b.__f)){var s=function(c,d,_){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(u){return u.__c});if(f.every(function(u){return!u.__N}))return!i||i.call(this,c,d,_);var a=n.__c.props!==c;return f.some(function(u){if(u.__N){var p=u.__[0];u.__=u.__N,u.__N=void 0,p!==u.__[0]&&(a=!0)}}),i&&i.call(this,c,d,_)||a};b.__f=!0;var i=b.shouldComponentUpdate,l=b.componentWillUpdate;b.componentWillUpdate=function(c,d,_){if(this.__e){var f=i;i=void 0,s(c,d,_),i=f}l&&l.call(this,c,d,_)},b.shouldComponentUpdate=s}return n.__N||n.__}function ct(t,e){var r=z(H++,3);!k.__s&&ge(r.__H,e)&&(r.__=t,r.u=e,b.__H.__h.push(r))}function Qe(t,e){var r=z(H++,4);!k.__s&&ge(r.__H,e)&&(r.__=t,r.u=e,b.__h.push(r))}function D(t){return ee=5,he(function(){return{current:t}},[])}function he(t,e){var r=z(H++,7);return ge(r.__H,e)&&(r.__=t(),r.__H=e,r.__h=t),r.__}function me(t){var e=b.context[t.__c],r=z(H++,9);return r.c=t,e?(r.__==null&&(r.__=!0,e.sub(b)),e.props.value):t.__}function _t(){for(var t;t=Ge.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(Y),e.__h.some(le),e.__h=[]}catch(r){e.__h=[],k.__e(r,t.__v)}}}k.__b=function(t){b=null,we&&we(t)},k.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Pe&&Pe(t,e)},k.__r=function(t){$e&&$e(t),H=0;var e=(b=t.__c).__H;e&&(re===b?(e.__h=[],b.__h=[],e.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.some(Y),e.__h.some(le),e.__h=[],H=0)),re=b},k.diffed=function(t){Se&&Se(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ge.push(e)!==1&&ke===k.requestAnimationFrame||((ke=k.requestAnimationFrame)||dt)(_t)),e.__H.__.some(function(r){r.u&&(r.__H=r.u),r.u=void 0})),re=b=null},k.__c=function(t,e){e.some(function(r){try{r.__h.some(Y),r.__h=r.__h.filter(function(n){return!n.__||le(n)})}catch(n){e.some(function(s){s.__h&&(s.__h=[])}),e=[],k.__e(n,r.__v)}}),Ce&&Ce(t,e)},k.unmount=function(t){De&&De(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.some(function(n){try{Y(n)}catch(s){e=s}}),r.__H=void 0,e&&k.__e(e,r.__v))};var Re=typeof requestAnimationFrame=="function";function dt(t){var e,r=function(){clearTimeout(n),Re&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,35);Re&&(e=requestAnimationFrame(r))}function Y(t){var e=b,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),b=e}function le(t){var e=b;t.__c=t.__(),b=e}function ge(t,e){return!t||t.length!==e.length||e.some(function(r,n){return r!==t[n]})}function Ye(t,e){return typeof e=="function"?e(t):e}let E,W;function ut(t){return!W||(typeof W=="string"?t.startsWith(W):W.test(t))}function pt(t,e){let r="";if(E=void 0,e&&e.type==="click"){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button!==0)return t;const n=e.composedPath().find(i=>i.nodeName=="A"&&i.href),s=n&&n.getAttribute("href");if(!n||n.origin!=location.origin||/^#/.test(s)||!/^(_?self)?$/i.test(n.target)||!ut(s)||n.download)return t;E=!0,e.preventDefault(),r=n.href.replace(location.origin,"")}else e&&e.url?(E=!e.replace,r=e.url):r=location.pathname+location.search;return E===!0?history.pushState(null,"",r):E===!1&&history.replaceState(null,"",r),r}const ft=(t,e,r={})=>{t=t.split("/").filter(Boolean),e=(e||"").split("/").filter(Boolean),r.params||(r.params={});for(let n=0,s,i;n<Math.max(t.length,e.length);n++){let[,l,c,d]=(e[n]||"").match(/^(:?)(.*?)([+*?]?)$/);if(s=t[n],!(!l&&c==s)){if(!l&&s&&d=="*"){r.rest="/"+t.slice(n).map(decodeURIComponent).join("/");break}if(!l||!s&&d!="?"&&d!="*")return;if(i=d=="+"||d=="*",i?s=t.slice(n).map(decodeURIComponent).join("/")||void 0:s&&(s=decodeURIComponent(s)),r.params[c]=s,c in r||(r[c]=s),i)break}}return r};function B(t){const[e,r]=fe(pt,t.url||location.pathname+location.search);t.scope&&(W=t.scope);const n=E===!0,s=he(()=>{const i=new URL(e,location.origin),l=i.pathname.replace(/\/+$/g,"")||"/";return{url:e,path:l,query:Object.fromEntries(i.searchParams),route:(c,d)=>r({url:c,replace:d}),wasPush:n}},[e]);return Qe(()=>(addEventListener("click",r),addEventListener("popstate",r),()=>{removeEventListener("click",r),removeEventListener("popstate",r)}),[]),M(B.ctx.Provider,{value:s},t.children)}const ht=Promise.resolve();function Xe(t){const[e,r]=fe(v=>v+1,0),{url:n,query:s,wasPush:i,path:l}=mt();if(!n)throw new Error("preact-iso's <Router> must be used within a <LocationProvider>, see: https://github.com/preactjs/preact-iso#locationprovider");const{rest:c=l,params:d={}}=me(Le),_=D(!1),f=D(l),a=D(0),u=D(),p=D(),y=D(),w=D(!1),x=D();x.current=!1;let g,m,$;Be(t.children).some(v=>{if(ft(c,v.props.path,$={...v.props,path:c,query:s,params:Object.assign({},d),rest:""}))return g=xe(v,$);v.props.default&&(m=xe(v,$))});let S=g||m;const L=u.current&&u.current.__u&K&&u.current.__u&G,q=u.current&&u.current.__h,N=he(()=>{p.current=u.current,u.current=M(Le.Provider,{value:$},S);const v=p.current&&p.current.props.children;return!v||!S||S.type!==v.type||S.props.component!==v.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),a.current++,!0):!1},[n,JSON.stringify($)]);L?(u.current.__u|=K,u.current.__u|=G):q&&(u.current.__h=!0);const I=p.current;return p.current=null,this.__c=(v,C)=>{x.current=!0,p.current=I,t.onLoadStart&&t.onLoadStart(n),_.current=!0;let et=a.current;v.then(()=>{et===a.current&&(p.current=null,u.current&&(C.__h&&(u.current.__h=C.__h),C.__u&G&&(u.current.__u|=G),C.__u&K&&(u.current.__u|=K)),ht.then(r))})},Qe(()=>{const v=this.__v&&this.__v.__e;if(x.current){!w.current&&!y.current&&(y.current=v);return}!w.current&&y.current&&(y.current!==v&&y.current.remove(),y.current=null),w.current=!0,f.current!==l&&(i&&scrollTo(0,0),t.onRouteChange&&t.onRouteChange(n),f.current=l),t.onLoadEnd&&_.current&&t.onLoadEnd(n),_.current=!1},[l,i,e]),N?[M(ne,{r:u}),M(ne,{r:p})]:M(ne,{r:u})}const K=32,G=128,ne=({r:t})=>t.current;Xe.Provider=B;B.ctx=pe({});const Le=pe({}),mt=()=>me(B.ctx),Me=h.__b;h.__b=t=>{t.type&&t.type._forwarded&&t.ref&&(t.props.ref=t.ref,t.ref=null),Me&&Me(t)};const He=h.__e;h.__e=(t,e,r)=>{if(t&&t.then){let n=e;for(;n=n.__;)if(n.__c&&n.__c.__c)return e.__e==null&&(e.__c.__z=[r.__e],e.__e=r.__e,e.__k=r.__k),e.__k||(e.__k=[]),n.__c.__c(t,e)}He&&He(t,e,r)};const gt=7777,Ze={meta:{version:"1.0"},project:{name:"",repo:"",created_at:""},tasks:[],ci:{status:"unknown",last_run:"",workflow_url:""},nudges:[],commits:[],reviews:[],init_commit:""},Ve=pe({state:Ze,connected:!1});function vt({children:t}){const[e,r]=Te(Ze),[n,s]=Te(!1),i=D(0),l=D(null),c=D(null);return ct(()=>{let d=!1;const _=async()=>{try{const a=await fetch("/api/state");if(!a.ok)return;const u=await a.json();d||r(u)}catch{}},f=()=>{if(d)return;const a=new WebSocket(`ws://localhost:${gt}/ws`);l.current=a,a.onopen=()=>{i.current=0,d||s(!0)},a.onmessage=u=>{try{const p=JSON.parse(u.data);d||r(p)}catch{}},a.onerror=()=>{d||s(!1)},a.onclose=()=>{d||(s(!1),!(i.current>=5)&&(i.current+=1,c.current=window.setTimeout(f,2e3)))}};return _(),f(),()=>{d=!0,s(!1),c.current&&window.clearTimeout(c.current),l.current&&l.current.close()}},[]),M(Ve.Provider,{value:{state:e,connected:n}},t)}function R(){return me(Ve)}const yt=[{href:"/",label:"Issues"},{href:"/ci",label:"CI"},{href:"/nudges",label:"Nudges"},{href:"/timetrack",label:"Time"},{href:"/commits",label:"Commits"},{href:"/reviews",label:"Reviews"},{href:"/settings",label:"Settings"}];function bt(){const{connected:t,state:e}=R(),r=typeof window<"u"?window.location.pathname:"/";return o("aside",{style:{width:"280px",background:"linear-gradient(180deg, rgba(9, 31, 66, 0.96), rgba(11, 127, 171, 0.88))",color:"#f9f3eb",borderRadius:"28px",padding:"28px 22px",boxShadow:"0 24px 60px rgba(11, 31, 66, 0.24)",border:"1px solid rgba(255,255,255,0.08)",display:"flex",flexDirection:"column",gap:"22px"},children:[o("div",{children:[o("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px"},children:[o("span",{style:{width:"10px",height:"10px",borderRadius:"999px",background:t?"#6de4a7":"#ff846f",boxShadow:t?"0 0 16px rgba(109,228,167,0.8)":"0 0 16px rgba(255,132,111,0.7)"}}),o("span",{style:{fontSize:"0.82rem",letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(249,243,235,0.68)"},children:t?"Live sync":"Disconnected"})]}),o("h1",{style:{margin:0,fontSize:"2.2rem",fontFamily:'"Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif',letterSpacing:"-0.04em"},children:"DevDive"}),o("p",{style:{margin:"10px 0 0",lineHeight:1.6,color:"rgba(249,243,235,0.74)"},children:e.project.name||"AI project control room"})]}),o("nav",{style:{display:"grid",gap:"10px"},children:yt.map(n=>{const s=r===n.href;return o("a",{href:n.href,style:{textDecoration:"none",padding:"12px 14px",borderRadius:"16px",fontWeight:600,color:s?"#11203a":"#f9f3eb",background:s?"#f9f3eb":"rgba(255,255,255,0.08)",border:s?"1px solid rgba(255,255,255,0.34)":"1px solid transparent"},children:n.label},n.href)})}),o("div",{style:{marginTop:"auto",padding:"16px",borderRadius:"18px",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.12)"},children:[o("div",{style:{fontSize:"0.78rem",textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(249,243,235,0.65)"},children:"Repo"}),o("div",{style:{marginTop:"8px",lineHeight:1.5},children:e.project.repo||"owner/repo-name"})]})]})}const Ae={open:{background:"#dde1e8",color:"#3f4756"},in_progress:{background:"#d8ebff",color:"#155e9a"},done:{background:"#dff5e7",color:"#1e7c49"},passing:{background:"#dff5e7",color:"#1e7c49"},failing:{background:"#ffd9d4",color:"#9b3429"},pending:{background:"#fff1c9",color:"#8c6200"},unknown:{background:"#dde1e8",color:"#3f4756"},critical:{background:"#ffd9d4",color:"#9b3429"},warning:{background:"#fff1c9",color:"#8c6200"},info:{background:"#dde1e8",color:"#3f4756"}};function te({status:t}){const e=t||"unknown",r=Ae[e]||Ae.unknown;return o("span",{style:{display:"inline-flex",alignItems:"center",padding:"6px 10px",borderRadius:"999px",background:r.background,color:r.color,fontSize:"0.78rem",fontWeight:700,textTransform:"capitalize",whiteSpace:"nowrap"},children:e.replaceAll("_"," ")})}function Ne(){const{state:t}=R(),e=t.tasks.reduce((n,s)=>n+Number(s.estimate_hours||0),0),r=t.tasks.filter(n=>n.status==="done").length;return o("section",{class:"page",children:[o("h2",{class:"page-title",children:"Issue Board"}),o("p",{class:"page-subtitle",children:"Planned work, current status, and the design notes that each task is meant to protect."}),o("div",{class:"stat-grid",children:[o("div",{class:"stat-card",children:[o("p",{class:"stat-label",children:"Total Estimate"}),o("p",{class:"stat-value",children:[e.toFixed(1),"h"]})]}),o("div",{class:"stat-card",children:[o("p",{class:"stat-label",children:"Completion"}),o("p",{class:"stat-value",children:[r,"/",t.tasks.length]})]})]}),t.tasks.length===0?o("div",{class:"empty-state",children:"No tasks yet. Run devdive init to get started."}):o("div",{class:"table-wrap",children:o("table",{children:[o("thead",{children:o("tr",{children:[o("th",{children:"Title"}),o("th",{children:"Status"}),o("th",{children:"Estimate"}),o("th",{children:"Design Notes"}),o("th",{children:"Issue Link"})]})}),o("tbody",{children:t.tasks.map(n=>o("tr",{children:[o("td",{children:n.title}),o("td",{children:o(te,{status:n.status})}),o("td",{children:[Number(n.estimate_hours||0).toFixed(1),"h"]}),o("td",{children:n.design_notes}),o("td",{children:n.issue_url?o("a",{href:n.issue_url,target:"_blank",rel:"noreferrer",children:["Open issue ","->"]}):"Pending"})]},`${n.id}-${n.title}`))})]})})]})}function xt(t){if(!t)return"No runs yet";const e=Date.now()-new Date(t).getTime(),r=Math.floor(e/6e4);if(r<1)return"Just now";if(r<60)return`${r} minute${r===1?"":"s"} ago`;const n=Math.floor(r/60);if(n<24)return`${n} hour${n===1?"":"s"} ago`;const s=Math.floor(n/24);return`${s} day${s===1?"":"s"} ago`}function kt(){const{state:t}=R();return o("section",{class:"page",children:[o("h2",{class:"page-title",children:"Continuous Integration"}),o("p",{class:"page-subtitle",children:"Latest workflow health from GitHub Actions, surfaced directly inside the dashboard."}),o("div",{class:"card",style:{display:"grid",gap:"16px",maxWidth:"420px"},children:[o("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[o(te,{status:t.ci.status}),o("strong",{style:{fontSize:"1.1rem"},children:t.ci.status.replaceAll("_"," ")})]}),t.ci.status==="unknown"?o("div",{style:{color:"var(--muted)"},children:"No CI runs detected yet."}):o(A,{children:[o("div",{children:["Last run: ",xt(t.ci.last_run)]}),t.ci.workflow_url?o("a",{href:t.ci.workflow_url,target:"_blank",rel:"noreferrer",children:["View workflow run ","->"]}):null]})]})]})}function wt(t){if(!t)return"Unknown time";const e=Date.now()-new Date(t).getTime(),r=Math.floor(e/6e4);if(r<1)return"Just now";if(r<60)return`${r} minute${r===1?"":"s"} ago`;const n=Math.floor(r/60);if(n<24)return`${n} hour${n===1?"":"s"} ago`;const s=Math.floor(n/24);return`${s} day${s===1?"":"s"} ago`}function $t(){const{state:t}=R(),e=[...t.nudges].reverse();return o("section",{class:"page",children:[o("h2",{class:"page-title",children:"AI Nudges"}),o("p",{class:"page-subtitle",children:"Short prompts from the planner when CI breaks, drift appears, or work starts slipping."}),e.length===0?o("div",{class:"empty-state",children:"No nudges yet. DevDive will suggest improvements as you work."}):o("div",{class:"list-stack",children:e.map(r=>o("article",{class:"card",children:[o("div",{style:{fontSize:"1.05rem",lineHeight:1.6},children:r.message}),o("div",{style:{marginTop:"12px",color:"var(--muted)"},children:wt(r.created_at)})]},`${r.created_at}-${r.message}`))})]})}function St(){const{state:t}=R(),e=t.tasks.reduce((i,l)=>i+Number(l.estimate_hours||0),0),r=t.tasks.filter(i=>i.status==="done").reduce((i,l)=>i+Number(l.estimate_hours||0),0),n=Math.max(e-r,0),s=e===0?0:Math.round(r/e*100);return o("section",{class:"page",children:[o("h2",{class:"page-title",children:"Time Track"}),o("p",{class:"page-subtitle",children:"A simple burndown readout from the plan estimates and the task statuses DevDive keeps in sync."}),t.tasks.length===0?o("div",{class:"empty-state",children:"No tasks yet."}):o(A,{children:[o("div",{class:"stat-grid",children:[o("div",{class:"stat-card",children:[o("p",{class:"stat-label",children:"Estimated"}),o("p",{class:"stat-value",children:[e.toFixed(1),"h"]})]}),o("div",{class:"stat-card",children:[o("p",{class:"stat-label",children:"Completed"}),o("p",{class:"stat-value",children:[r.toFixed(1),"h"]})]}),o("div",{class:"stat-card",children:[o("p",{class:"stat-label",children:"Remaining"}),o("p",{class:"stat-value",children:[n.toFixed(1),"h"]})]})]}),o("div",{class:"card",style:{marginBottom:"24px"},children:[o("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"12px"},children:[o("strong",{children:"Burndown Progress"}),o("span",{children:[s,"%"]})]}),o("div",{class:"progress-track",children:o("div",{class:"progress-fill",style:{width:`${s}%`}})})]}),o("div",{class:"table-wrap",children:o("table",{children:[o("thead",{children:o("tr",{children:[o("th",{children:"Title"}),o("th",{children:"Estimate"}),o("th",{children:"Status"})]})}),o("tbody",{children:t.tasks.map(i=>o("tr",{children:[o("td",{children:i.title}),o("td",{children:[Number(i.estimate_hours||0).toFixed(1),"h"]}),o("td",{children:o(te,{status:i.status})})]},`${i.id}-${i.title}`))})]})})]})]})}function Ct(t){if(!t)return"Unknown time";const e=Date.now()-new Date(t).getTime(),r=Math.floor(e/6e4);if(r<1)return"Just now";if(r<60)return`${r} minute${r===1?"":"s"} ago`;const n=Math.floor(r/60);if(n<24)return`${n} hour${n===1?"":"s"} ago`;const s=Math.floor(n/24);return`${s} day${s===1?"":"s"} ago`}function Dt(){const{state:t}=R(),e=[...t.commits].reverse();return o("section",{class:"page",children:[o("h2",{class:"page-title",children:"Commit Analysis"}),o("p",{class:"page-subtitle",children:"Semantic commit summaries from the LLM instead of keyword-based issue closing."}),e.length===0?o("div",{class:"empty-state",children:"No commits analysed yet. DevDive analyses your commits as you push."}):o("div",{class:"list-stack",children:e.map(r=>o("article",{class:"card",children:[o("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"},children:[o("strong",{class:"mono",children:(r.commit_hash||"").slice(0,7)||"unknown"}),o("span",{style:{color:"var(--muted)"},children:Ct(r.analysed_at)})]}),o("div",{style:{marginTop:"10px",fontSize:"1.03rem",lineHeight:1.6},children:r.summary}),o("div",{class:"pill-row",children:[(r.tasks_updated||[]).map(n=>o("span",{style:{padding:"6px 10px",borderRadius:"999px",background:"#dff5e7",color:"#1e7c49",fontWeight:700,fontSize:"0.78rem"},children:["closed #",n]},`closed-${r.commit_hash}-${n}`)),(r.tasks_progressed||[]).map(n=>o("span",{style:{padding:"6px 10px",borderRadius:"999px",background:"#d8ebff",color:"#155e9a",fontWeight:700,fontSize:"0.78rem"},children:["progressed #",n]},`progress-${r.commit_hash}-${n}`))]})]},`${r.commit_hash}-${r.analysed_at}`))})]})}function Pt(t){if(!t)return"Unknown time";const e=Date.now()-new Date(t).getTime(),r=Math.floor(e/6e4);if(r<1)return"Just now";if(r<60)return`${r} minute${r===1?"":"s"} ago`;const n=Math.floor(r/60);if(n<24)return`${n} hour${n===1?"":"s"} ago`;const s=Math.floor(n/24);return`${s} day${s===1?"":"s"} ago`}function Tt(){const{state:t}=R(),e=[...t.reviews].reverse(),r=e[0];return o("section",{class:"page",children:[o("h2",{class:"page-title",children:"Design Reviews"}),o("p",{class:"page-subtitle",children:"Architectural drift checks against the original design notes attached to each planned task."}),r&&r.findings.length===0?o("div",{class:"banner",children:"No drift detected in latest review."}):null,e.length===0?o("div",{class:"empty-state",children:"No design reviews yet. DevDive reviews your architecture every 10 commits."}):o("div",{class:"list-stack",children:e.map(n=>o("article",{class:"card",children:[o("div",{style:{marginBottom:"12px",color:"var(--muted)"},children:["Reviewed ",Pt(n.reviewed_at)]}),n.findings.length===0?o("div",{style:{color:"var(--muted)"},children:"No findings for this review."}):o("div",{class:"list-stack",children:n.findings.map((s,i)=>o("div",{style:{padding:"14px",borderRadius:"18px",background:"rgba(17, 32, 58, 0.04)",border:"1px solid rgba(17, 32, 58, 0.08)"},children:[o("div",{style:{display:"flex",justifyContent:"space-between",gap:"10px",flexWrap:"wrap"},children:[o("code",{class:"mono",children:s.file}),o(te,{status:s.severity})]}),o("div",{style:{marginTop:"10px",lineHeight:1.6},children:s.finding})]},`${s.file}-${s.detected_at}-${i}`))})]},n.reviewed_at))})]})}function Rt(t){return t?new Date(t).toLocaleString():"Unknown"}function Lt(){var e;const{state:t}=R();return o("section",{class:"page",children:[o("h2",{class:"page-title",children:"Settings"}),o("p",{class:"page-subtitle",children:"Read-only project metadata sourced from the live `devdive.json` state."}),o("div",{class:"list-stack",children:[o("div",{class:"card",children:[o("div",{class:"stat-label",children:"Project Name"}),o("div",{children:t.project.name||"Unknown"})]}),o("div",{class:"card",children:[o("div",{class:"stat-label",children:"Repo"}),o("div",{children:t.project.repo||"Unknown"})]}),o("div",{class:"card",children:[o("div",{class:"stat-label",children:"Created"}),o("div",{children:Rt(t.project.created_at)})]}),o("div",{class:"card",children:[o("div",{class:"stat-label",children:"Schema Version"}),o("div",{children:((e=t.meta)==null?void 0:e.version)||"1.0"})]}),o("div",{class:"card",children:[o("div",{class:"stat-label",children:"Init Commit"}),o("div",{class:"mono",children:t.init_commit||"Unknown"})]}),o("div",{class:"card",children:[o("div",{class:"stat-label",children:"Rollback"}),o("div",{children:["To roll back the dashboard to a previous state, run: ",o("code",{class:"mono",children:"devdive rollback --sha <commit-sha>"})]})]}),o("div",{class:"card",children:[o("div",{class:"stat-label",children:"Configuration"}),o("div",{children:"To change settings, edit your .env file and restart DevDive."})]})]})]})}function Mt(){return o(A,{children:[o("style",{children:`
        :root {
          --ink: #11203a;
          --muted: #5c6780;
          --panel: rgba(255, 252, 246, 0.86);
          --panel-strong: #fffef9;
          --line: rgba(17, 32, 58, 0.12);
          --accent: #0b7fab;
          --accent-warm: #d56a3a;
          --shadow: 0 20px 60px rgba(17, 32, 58, 0.14);
          font-family: "Avenir Next", "Trebuchet MS", sans-serif;
          color: var(--ink);
          background:
            radial-gradient(circle at top left, rgba(213, 106, 58, 0.18), transparent 30%),
            linear-gradient(135deg, #f2eadf 0%, #dbe7f1 45%, #f7f5ef 100%);
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          min-height: 100vh;
          color: var(--ink);
          background: transparent;
        }

        a {
          color: inherit;
        }

        .app-shell {
          min-height: 100vh;
          display: flex;
          gap: 24px;
          padding: 20px;
        }

        .content-shell {
          flex: 1;
          display: flex;
          min-width: 0;
        }

        .page {
          width: 100%;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 28px;
          box-shadow: var(--shadow);
          padding: 32px;
          backdrop-filter: blur(18px);
        }

        .page-title {
          margin: 0 0 8px;
          font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .page-subtitle {
          margin: 0 0 24px;
          color: var(--muted);
          max-width: 62ch;
          line-height: 1.6;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card,
        .card {
          background: var(--panel-strong);
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 18px 20px;
        }

        .stat-label {
          margin: 0 0 8px;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .stat-value {
          margin: 0;
          font-size: 1.9rem;
          font-weight: 700;
        }

        .empty-state {
          min-height: 280px;
          display: grid;
          place-items: center;
          text-align: center;
          color: var(--muted);
          border: 1px dashed rgba(17, 32, 58, 0.18);
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.45);
          padding: 24px;
        }

        .table-wrap {
          overflow-x: auto;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: var(--panel-strong);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 14px 16px;
          text-align: left;
          vertical-align: top;
          border-bottom: 1px solid var(--line);
        }

        th {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted);
        }

        tr:last-child td {
          border-bottom: 0;
        }

        .mono {
          font-family: "SFMono-Regular", "Menlo", "Monaco", monospace;
        }

        .list-stack {
          display: grid;
          gap: 16px;
        }

        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .banner {
          background: rgba(30, 137, 78, 0.14);
          border: 1px solid rgba(30, 137, 78, 0.26);
          color: #1e653f;
          border-radius: 18px;
          padding: 14px 16px;
          margin-bottom: 18px;
        }

        .progress-track {
          width: 100%;
          height: 16px;
          border-radius: 999px;
          background: rgba(17, 32, 58, 0.1);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--accent), var(--accent-warm));
        }

        @media (max-width: 900px) {
          .app-shell {
            flex-direction: column;
            padding: 14px;
          }

          .page {
            padding: 22px;
            border-radius: 24px;
          }
        }
      `}),o(vt,{children:o(B,{children:o("div",{class:"app-shell",children:[o(bt,{}),o("main",{class:"content-shell",children:o(Xe,{children:[o(Ne,{path:"/"}),o(kt,{path:"/ci"}),o($t,{path:"/nudges"}),o(St,{path:"/timetrack"}),o(Dt,{path:"/commits"}),o(Tt,{path:"/reviews"}),o(Lt,{path:"/settings"}),o(Ne,{default:!0})]})})]})})})]})}at(o(Mt,{}),document.getElementById("app"));

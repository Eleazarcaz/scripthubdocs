/*! For license information please see ece76bd1.ccb7dd7b.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{209:function(e,t,a){"use strict";a.r(t);a(51);var n=a(0),r=a.n(n),c=a(222),l=a.n(c),o=a(227),i=a(224),s=a(223),u=a(225),d=a(135),m=a.n(d);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var f=[{title:r.a.createElement(r.a.Fragment,null,"Comunidad"),imageUrl:"img/undraw_hubbie.svg",description:r.a.createElement(r.a.Fragment,null,"Se form\xf3 con la visi\xf3n de intercambiar opiniones e ideas con el fin de mantener un ambiente agradable en el que todos puedan participar en discusiones de inter\xe9s personal.")},{title:r.a.createElement(r.a.Fragment,null,"Siempre reinvent\xe1ndonos"),imageUrl:"img/undraw_reinv.svg",description:r.a.createElement(r.a.Fragment,null,"Actualizamos constantemente nuestro contenido. Trabajamos arduamente para brindar el mejor contenido de toda la web.")},{title:r.a.createElement(r.a.Fragment,null,"C\xf3digo abierto"),imageUrl:"img/undraw_opensource.svg",description:r.a.createElement(r.a.Fragment,null,"Todos nuestros proyectos son de c\xf3digo abierto y pueden ser encontrados en nuestro GitHub.")}];function v(e){var t=e.imageUrl,a=e.title,n=e.description,c=Object(u.a)(t);return r.a.createElement("div",{className:l()("col col--4",m.a.feature)},c&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:m.a.featureImage,src:c,alt:a})),r.a.createElement("h3",null,a),r.a.createElement("p",null,n),r.a.createElement("br",null))}t.default=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(o.a,{title:"Script Hub | "+t.title,description:"Gu\xedas de programaci\xf3n"},r.a.createElement("header",{className:l()("hero hero--primary",m.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:m.a.buttons},r.a.createElement(i.a,{className:l()("button button--outline button--secondary button--lg",m.a.getStarted),to:Object(u.a)("docs/indice")},"Empezar")))),r.a.createElement("main",null,f&&f.length&&r.a.createElement("section",{className:m.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},f.map((function(e,t){return r.a.createElement(v,h({key:t},e))})))))))}},222:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},223:function(e,t,a){"use strict";var n=a(0),r=a(54);t.a=function(){return Object(n.useContext)(r.a)}},224:function(e,t,a){"use strict";a(51);var n=a(0),r=a.n(n),c=a(35);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,i=e.href,s=a||i,u=o.test(s),d=!1,m="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!m&&u&&window.docusaurus.prefetch(s),function(){m&&t&&t.disconnect()}}),[s,m,u]),s&&u?r.a.createElement(c.b,l({},e,{onMouseEnter:function(){d||(window.docusaurus.preload(s),d=!0)},innerRef:function(e){var a,n;m&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):r.a.createElement("a",l({},e,{href:s}))}},225:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(233);var n=a(223);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},226:function(e,t,a){"use strict";t.a=function(){return null}},227:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(53),l=a(223),o=a(225),i=(a(51),a(24),a(19),a(20),a(52),a(224)),s=a(226),u=a(231),d=a.n(u),m=a(222),h=a.n(m),f=a(125),v=a.n(f);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var g=function(){return r.a.createElement("span",{className:h()(v.a.toggle,v.a.moon)})},b=function(){return r.a.createElement("span",{className:h()(v.a.toggle,v.a.sun)})},E=function(e){return r.a.createElement(d.a,p({icons:{checked:r.a.createElement(g,null),unchecked:r.a.createElement(b,null)}},e))},k=function(){var e=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return n.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]},y=a(126),_=a.n(y);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e){var t=e.to,a=e.href,n=e.label,c=(e.position,function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["to","href","label","position"])),l=Object(o.a)(t);return r.a.createElement(i.a,w({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:l},c),n)}var N=function(){var e=Object(l.a)(),t=Object(n.useState)(!1),a=t[0],u=t[1],d=Object(n.useState)(!1),m=d[0],f=d[1],v=k(),p=v[0],g=v[1],b=e.siteConfig,y=void 0===b?{}:b,N=y.baseUrl,j=y.themeConfig,C=void 0===j?{}:j,x=C.navbar,S=void 0===x?{}:x,T=C.disableDarkMode,M=void 0!==T&&T,F=S.title,P=S.logo,B=void 0===P?{}:P,I=S.links,X=void 0===I?[]:I,L=Object(n.useCallback)((function(){u(!0)}),[u]),D=Object(n.useCallback)((function(){u(!1)}),[u]),U=Object(n.useCallback)((function(e){return g(e.target.checked?"dark":"")}),[g]),A=Object(o.a)(B.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en","data-theme":p})),r.a.createElement("nav",{className:h()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:L,onKeyDown:L},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,{className:"navbar__brand",to:N},null!=B&&r.a.createElement("img",{className:"navbar__logo",src:A,alt:B.alt}),null!=F&&r.a.createElement("strong",{className:m?_.a.hideLogoText:""},F)),X.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(O,w({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},X.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(O,w({},e,{key:t}))})),!M&&r.a.createElement(E,{className:_.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===p,onChange:U}),r.a.createElement(s.a,{handleSearchBarToggle:f,isSearchBarExpanded:m}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){u(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,{className:"navbar__brand",onClick:D,to:N},null!=B&&r.a.createElement("img",{className:"navbar__logo",src:A,alt:B.alt}),null!=F&&r.a.createElement("strong",null,F)),!M&&a&&r.a.createElement(E,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===p,onChange:U})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},X.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(O,w({className:"menu__link"},e,{onClick:D})))}))))))))},j=a(127),C=a.n(j);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e){var t=e.to,a=e.href,n=e.label,c=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["to","href","label"]),l=Object(o.a)(t);return r.a.createElement(i.a,x({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},c),n)}var T=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var M=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,i=n.links,s=void 0===i?[]:i,u=n.logo,d=void 0===u?{}:u,m=Object(o.a)(d.src);return a?r.a.createElement("footer",{className:h()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(S,e))}))):null)}))),(d||c)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:C.a.footerLogoLink},r.a.createElement(T,{alt:d.alt,url:m})):r.a.createElement(T,{alt:d.alt,url:m})),c))):null};a(128);t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:a,tagline:n,title:i,themeConfig:{image:s},url:u}=t,{children:d,title:m,noFooter:h,description:f,image:v,keywords:p,permalink:g}=e,b=m||`${i} \u22d9 ${n}`,E=v||s,k=u+Object(o.a)(E),y=Object(o.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("meta",{name:"theme-color",content:"#F7671E"}),r.a.createElement("meta",{charset:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),b&&r.a.createElement("title",null,b),b&&r.a.createElement("meta",{property:"og:title",content:b}),a&&r.a.createElement("link",{rel:"shortcut icon",href:y}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),p&&p.length&&r.a.createElement("meta",{name:"keywords",content:p.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:k}),E&&r.a.createElement("meta",{property:"twitter:image",content:k}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:` Imagen ${b}`}),g&&r.a.createElement("meta",{property:"og:url",content:u+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(N,null),r.a.createElement("div",{className:"main-wrapper"},d),!h&&r.a.createElement(M,null))}},229:function(e,t,a){var n=a(73),r=a(25);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},230:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},231:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=m(c),o=m(a(222)),i=m(a(9)),s=m(a(234)),u=m(a(235)),d=a(236);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},233:function(e,t,a){"use strict";var n=a(13),r=a(34),c=a(229),l="".startsWith;n(n.P+n.F*a(230)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return l?l.call(t,n,a):t.slice(a,a+n.length)===n}})},234:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},235:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},236:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(227),c=a(135),o=a.n(c),i=a(222),m=a.n(i),s=a(225),u=a(298),g=a(303),h=a(302),b=a(300),p=a(279),d=a(272);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const v=Object(u.a)(e=>({fab:{margin:e.spacing(2),width:"50%",height:"50%"},absolute:{position:"absolute",bottom:e.spacing(2),right:e.spacing(3)},bigAvatar:{width:"100%",height:"100%"}})),E=[{title:n.a.createElement(n.a.Fragment,null,"Laauuu"),imageUrl:"https://avatars2.githubusercontent.com/u/33169908",info:"Miembro del departamento general.",gitUser:"https://github.com/Laauuu",twUser:"https://twitter.com/ScriptHubTeam"},{title:n.a.createElement(n.a.Fragment,null,"Devsaider"),imageUrl:"https://avatars0.githubusercontent.com/u/14142484",info:"Miembro del departamento general.",gitUser:"https://github.com/MrDevsaider",twUser:"https://twitter.com/nzk_devsaider"},{title:n.a.createElement(n.a.Fragment,null,"Monspeet"),imageUrl:"https://avatars3.githubusercontent.com/u/36456999",info:"Miembro del departamento general.",gitUser:"https://github.com/MagicNeko15",twUser:"https://twitter.com/NTB_Bloodbath"},{title:n.a.createElement(n.a.Fragment,null,"Tati"),imageUrl:"https://avatars0.githubusercontent.com/u/45135760",info:"Representante del departamento t\xe9cnico.",gitUser:"https://github.com/tati1206",twUser:"https://twitter.com/ScriptHubTeam"},{title:n.a.createElement(n.a.Fragment,null,"Zhyntox"),imageUrl:"https://avatars1.githubusercontent.com/u/39054467",info:"Representante del departamento comunitario.",gitUser:"https://github.com/Asynfur",twUser:"https://twitter.com/ScriptHubTeam"},{title:n.a.createElement(n.a.Fragment,null,"GameBoy"),imageUrl:"https://avatars2.githubusercontent.com/u/19270998",info:"Miembro del departamento general.",gitUser:"https://github.com/estebanDT30",twUser:"https://twitter.com/GameBoy0665"},{title:n.a.createElement(n.a.Fragment,null,"Mon"),imageUrl:"https://avatars1.githubusercontent.com/u/54691517",info:"Miembro del departamento comunitario.",gitUser:"https://github.com/wwmon",twUser:"https://twitter.com/sadwhynot"},{title:n.a.createElement(n.a.Fragment,null,"Gab"),imageUrl:"https://avatars3.githubusercontent.com/u/58276181",info:"Miembro del departamento de moderaci\xf3n.",gitUser:"https://github.com/gragasllenger",twUser:"https://twitter.com/gg_ilenger"}];function _({imageUrl:e,title:t,info:a,gitUser:r,twUser:l}){const c=Object(s.a)(e),i=v();return n.a.createElement("div",{className:m()("col col--4",o.a.feature)},c&&n.a.createElement("div",{className:"text--center"},n.a.createElement(h.a,{title:a,placement:"top"},n.a.createElement(g.a,{color:"primary",className:i.fab},n.a.createElement(b.a,{alt:"Script Hub Team",src:c,className:i.bigAvatar})))),n.a.createElement("h2",{align:"center"},t),n.a.createElement("div",{className:o.a.icons,align:"center"},n.a.createElement(d.b.Provider,{value:{size:"1.8em",color:"black"}},n.a.createElement("a",{href:r,className:o.a.socialIcon},n.a.createElement(p.a,null)),n.a.createElement("a",{href:l,className:o.a.socialIcon},n.a.createElement(p.b,null)))))}t.default=function(){return n.a.createElement(l.a,{title:"Equipo",description:"Conoce al equipo de Script Hub"},n.a.createElement("main",null,E&&E.length&&n.a.createElement("section",{className:o.a.features},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},E.map((e,t)=>n.a.createElement(_,f({key:t},e))))))))}},227:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(53),c=a(223),o=a(225),i=(a(51),a(24),a(19),a(20),a(52),a(224)),m=a(226),s=a(231),u=a.n(s),g=a(222),h=a.n(g),b=a(125),p=a.n(b);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var f=function(){return n.a.createElement("span",{className:h()(p.a.toggle,p.a.moon)})},v=function(){return n.a.createElement("span",{className:h()(p.a.toggle,p.a.sun)})},E=function(e){return n.a.createElement(u.a,d({icons:{checked:n.a.createElement(f,null),unchecked:n.a.createElement(v,null)}},e))},_=function(){var e=r.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return r.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,r.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]},k=a(126),w=a.n(k);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function y(e){var t=e.to,a=e.href,r=e.label,l=(e.position,function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["to","href","label","position"])),c=Object(o.a)(t);return n.a.createElement(i.a,N({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:c},l),r)}var O=function(){var e=Object(c.a)(),t=Object(r.useState)(!1),a=t[0],s=t[1],u=Object(r.useState)(!1),g=u[0],b=u[1],p=_(),d=p[0],f=p[1],v=e.siteConfig,k=void 0===v?{}:v,O=k.baseUrl,U=k.themeConfig,j=void 0===U?{}:U,C=j.navbar,M=void 0===C?{}:C,S=j.disableDarkMode,x=void 0!==S&&S,F=M.title,T=M.logo,I=void 0===T?{}:T,L=M.links,B=void 0===L?[]:L,D=Object(r.useCallback)((function(){s(!0)}),[s]),A=Object(r.useCallback)((function(){s(!1)}),[s]),H=Object(r.useCallback)((function(e){return f(e.target.checked?"dark":"")}),[f]),P=Object(o.a)(I.src);return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,n.a.createElement("html",{lang:"en","data-theme":d})),n.a.createElement("nav",{className:h()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},n.a.createElement("div",{className:"navbar__inner"},n.a.createElement("div",{className:"navbar__items"},n.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),n.a.createElement(i.a,{className:"navbar__brand",to:O},null!=I&&n.a.createElement("img",{className:"navbar__logo",src:P,alt:I.alt}),null!=F&&n.a.createElement("strong",{className:g?w.a.hideLogoText:""},F)),B.filter((function(e){return"right"!==e.position})).map((function(e,t){return n.a.createElement(y,N({},e,{key:t}))}))),n.a.createElement("div",{className:"navbar__items navbar__items--right"},B.filter((function(e){return"right"===e.position})).map((function(e,t){return n.a.createElement(y,N({},e,{key:t}))})),!x&&n.a.createElement(E,{className:w.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===d,onChange:H}),n.a.createElement(m.a,{handleSearchBarToggle:b,isSearchBarExpanded:g}))),n.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){s(!1)}}),n.a.createElement("div",{className:"navbar-sidebar"},n.a.createElement("div",{className:"navbar-sidebar__brand"},n.a.createElement(i.a,{className:"navbar__brand",onClick:A,to:O},null!=I&&n.a.createElement("img",{className:"navbar__logo",src:P,alt:I.alt}),null!=F&&n.a.createElement("strong",null,F)),!x&&a&&n.a.createElement(E,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===d,onChange:H})),n.a.createElement("div",{className:"navbar-sidebar__items"},n.a.createElement("div",{className:"menu"},n.a.createElement("ul",{className:"menu__list"},B.map((function(e,t){return n.a.createElement("li",{className:"menu__list-item",key:t},n.a.createElement(y,N({className:"menu__link"},e,{onClick:A})))}))))))))},U=a(127),j=a.n(U);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function M(e){var t=e.to,a=e.href,r=e.label,l=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["to","href","label"]),c=Object(o.a)(t);return n.a.createElement(i.a,C({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},l),r)}var S=function(e){var t=e.url,a=e.alt;return n.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var x=function(){var e=Object(c.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},l=r.copyright,i=r.links,m=void 0===i?[]:i,s=r.logo,u=void 0===s?{}:s,g=Object(o.a)(u.src);return a?n.a.createElement("footer",{className:h()("footer",{"footer--dark":"dark"===a.style})},n.a.createElement("div",{className:"container"},m&&m.length>0&&n.a.createElement("div",{className:"row footer__links"},m.map((function(e,t){return n.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(M,e))}))):null)}))),(u||l)&&n.a.createElement("div",{className:"text--center"},u&&u.src&&n.a.createElement("div",{className:"margin-bottom--sm"},u.href?n.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:j.a.footerLogoLink},n.a.createElement(S,{alt:u.alt,url:g})):n.a.createElement(S,{alt:u.alt,url:g})),l))):null};a(128);t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,tagline:r,title:i,themeConfig:{image:m},url:s}=t,{children:u,title:g,noFooter:h,description:b,image:p,keywords:d,permalink:f}=e,v=g||`${i} \u22d9 ${r}`,E=p||m,_=s+Object(o.a)(E),k=Object(o.a)(a);return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,n.a.createElement("meta",{name:"theme-color",content:"#F7671E"}),n.a.createElement("meta",{charset:"utf-8"}),n.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),v&&n.a.createElement("title",null,v),v&&n.a.createElement("meta",{property:"og:title",content:v}),a&&n.a.createElement("link",{rel:"shortcut icon",href:k}),b&&n.a.createElement("meta",{name:"description",content:b}),b&&n.a.createElement("meta",{property:"og:description",content:b}),d&&d.length&&n.a.createElement("meta",{name:"keywords",content:d.join(",")}),E&&n.a.createElement("meta",{property:"og:image",content:_}),E&&n.a.createElement("meta",{property:"twitter:image",content:_}),E&&n.a.createElement("meta",{name:"twitter:image:alt",content:` Imagen ${v}`}),f&&n.a.createElement("meta",{property:"og:url",content:s+f}),n.a.createElement("meta",{name:"twitter:card",content:"summary"})),n.a.createElement(O,null),n.a.createElement("div",{className:"main-wrapper"},u),!h&&n.a.createElement(x,null))}}}]);
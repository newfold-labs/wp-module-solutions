(()=>{var e,t={556:(e,t,n)=>{e.exports=n(694)()},694:(e,t,n)=>{"use strict";var l=n(925);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,r){if(r!==l){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},737:(e,t,n)=>{"use strict";const l=window.React,a=window.wp.domReady;var o=n.n(a);const r=window.wp.element;var s=n(556),i=n.n(s);const u={isRtl:!1},c=(0,r.createContext)(u),d=({children:e,context:t={},...n})=>(0,r.createElement)(c.Provider,{value:{...u,...t}},(0,r.createElement)("div",{className:"nfd-root",...n},e));d.propTypes={children:i().node.isRequired,context:i().shape({isRtl:i().bool})};const m=d;var p=n(942),f=n.n(p);const g=(0,r.forwardRef)((({as:e="div",children:t,className:n="",...l},a)=>(0,r.createElement)(e,{...l,className:f()("nfd-page",n),ref:a},t)));g.propTypes={as:s.PropTypes.element,children:s.PropTypes.node.isRequired,className:s.PropTypes.string};const v=g,h=({includePremium:e=!0,includeEntitlements:t=!0,sortByPlan:n=!1})=>{let l=t?NewfoldSolutions.entitlements:[];return e&&(l=[...l,...NewfoldSolutions.premium.map((e=>(e.premium=!0,e)))]),n&&(l=function(e){const t={WP_SOLUTION_COMMERCE:[{id:"bb65fce0-24b6-4714-8d5d-3a693f428df4",position:2}]};let n=w().sku;return t[n]&&t[n].forEach((t=>{const n=e.findIndex((e=>e.id===t.id));if(-1!==n){const[l]=e.splice(n,1);e.splice(t.position,0,l)}})),e}(l)),l},w=()=>{let e={name:"Solutions",sku:""},t=NewfoldSolutions?.solution;const n=NewfoldSolutions?.solutions.find((e=>e?.sku===t));return n&&(e.sku=n.sku,e.name=n.name),e},y={size:{1:"nfd-title--1",2:"nfd-title--2",3:"nfd-title--3",4:"nfd-title--4",5:"nfd-title--5"}},b=(0,r.forwardRef)((({children:e,as:t,size:n,className:l,...a},o)=>(0,r.createElement)(t,{ref:o,className:f()("nfd-title",y.size[n||t[1]],l),...a},e))),E={children:i().node.isRequired,as:i().elementType,size:i().oneOf(Object.keys(y.size)),className:i().string};b.propTypes=E,b.defaultProps={as:"h1",size:void 0,className:""};const _=e=>(0,r.createElement)(b,{...e});_.propTypes=E,_.defaultProps=b.defaultProps,_.displayName="Title";const N=b,k=window.wp.url,P=({label:e,icon:t=null,rounded:n=!1,className:a="",...o})=>{const r=[a,"nfd-solutions-badge",{"nfd-solutions-badge--with-icon":!!t,"nfd-solutions-badge--rounded":n}];return(0,l.createElement)("span",{className:f()(r),...o},t&&(0,l.createElement)(t,null),e)},O=window.wp.i18n;function S({title:e,titleId:t,...n},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{fillRule:"evenodd",d:"M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z",clipRule:"evenodd"}))}const T=l.forwardRef(S),x=()=>(0,l.createElement)(P,{label:(0,O.__)("PREMIUM","wp-module-solutions"),rounded:!0,className:"nfd-mb-2 nfd-solutions-badge--premium"}),R=({name:e,description:t="",premium:n=!1,displayAsPremiun:a=!1,icon:o=null,plsSlug:r,plsProvider:s,isActive:i,isBlock:u=!1,ctbId:c,ctbHref:d,ctaUrl:m,ctaLabel:p,download:g})=>{const v=["plugin-card","nfd-plugin-card","plugin-card-"+(0,k.cleanForSlug)(e),{"nfd-plugin-card-premium":n&&a,"nfd-plugin-card--icon":o}],h=["button",{"nfd-plugin-card-premium-button":n&&a}];return(0,l.createElement)("div",{className:f()(v)},(0,l.createElement)("div",{className:"plugin-card-top"},(0,l.createElement)("div",{className:"name column-name"},(0,l.createElement)(N,{as:"h2"},!!n&&!!a&&(0,l.createElement)("div",{className:"nfd-tools-card-badges nfd-flex nfd-gap-1"},!!n&&(0,l.createElement)(x,null)),(0,l.createElement)("div",{className:"nfd-tools-plugin-card-title"},(0,l.createElement)("span",null,e),!!n&&!!a&&(0,l.createElement)("span",{className:"nfd-tools-plugin-card-premium-icon"},(0,l.createElement)(T,null))),!!o&&(0,l.createElement)("div",{className:"nfd-plugin-card-thumbnail plugin-icon"},(0,l.createElement)("img",{alt:e,className:"nfd-plugin-icon",src:o})))),(0,l.createElement)("div",{className:"action-links"},(0,l.createElement)("ul",{className:"plugin-action-buttons"},(0,l.createElement)("li",null,(0,l.createElement)("a",{className:f()(h),"data-is-active":!!i||null,"data-ctb-id":c,"data-nfd-installer-plugin-activate":u||c?null:"true","data-nfd-installer-plugin-name":u||i||c?null:e,"data-nfd-installer-pls-slug":u||i||c?null:r,"data-nfd-installer-pls-provider":u||i||c?null:s,"data-nfd-installer-download-url":u||i||c?null:g,href:u?"#":c?d:(w=m,"string"==typeof w||w instanceof String?window.NewfoldRuntime&&window.NewfoldRuntime.siteUrl?w.replace("{siteUrl}",window.NewfoldRuntime.siteUrl):w.replace("{siteUrl}",""):w),target:u?null:c?"_blank":null},n&&a?(0,O.__)("Get it","wp-module-solutions"):p," ")))),(0,l.createElement)("div",{className:"desc column-description nfd-tools-plugin-card-description"},!!t&&(0,l.createElement)("p",null,t))));var w},I=({title:e,children:t})=>(0,l.createElement)("div",{className:"nfd-app-section nfd-flex nfd-flex-col nfd-gap-y-4 nfd-mb-8"},e&&(0,l.createElement)(N,null,e),t);function A({title:e,titleId:t,...n},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z",clipRule:"evenodd"}))}const C=l.forwardRef(A),z=window.lodash,U={variant:{default:"",primary:"nfd-text-primary-500",white:"nfd-text-white"},size:{3:"nfd-w-3 nfd-h-3",4:"nfd-w-4 nfd-h-4",8:"nfd-w-8 nfd-h-8"}},F=(0,r.forwardRef)((({variant:e,size:t,className:n},l)=>{const a=((e=null)=>(0,r.useMemo)((()=>{const t={role:"img","aria-hidden":"true"};return null!==e&&(t.focusable=e?"true":"false"),t}),[e]))();return(0,r.createElement)("svg",{ref:l,xmlns:"http://www.w3.org/2000/svg/",fill:"none",viewBox:"0 0 24 24",className:f()("nfd-animate-spin",U.variant[e],U.size[t],n),...a},(0,r.createElement)("circle",{className:"nfd-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.createElement)("path",{className:"nfd-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))})),L={variant:i().oneOf((0,z.keys)(U.variant)),size:i().oneOf((0,z.keys)(U.size)),className:i().string};F.propTypes=L,F.defaultProps={variant:"default",size:"4",className:""};const B=e=>(0,r.createElement)(F,{...e});B.propTypes=L,B.defaultProps=F.defaultProps,B.displayName="Spinner";const M=F,j={variant:{primary:"nfd-button--primary",secondary:"nfd-button--secondary",error:"nfd-button--error",upsell:"nfd-button--upsell"},size:{default:"",small:"nfd-button--small",large:"nfd-button--large"}},D=(0,r.forwardRef)((({children:e,as:t,type:n,variant:l,size:a,isLoading:o,disabled:s,className:i,...u},c)=>(0,r.createElement)(t,{type:n||"button"===t&&"button"||void 0,disabled:s,ref:c,className:f()("nfd-button",j.variant[l],j.size[a],o&&"nfd-cursor-wait",s&&"nfd-button--disabled",i),...u},o&&(0,r.createElement)(M,{size:"small"===a?"3":"4",className:"nfd-mr-2"}),e))),H={children:i().node.isRequired,as:i().elementType,type:i().oneOf(["button","submit","reset"]),variant:i().oneOf((0,z.keys)(j.variant)),size:i().oneOf((0,z.keys)(j.size)),isLoading:i().bool,disabled:i().bool,className:i().string};D.propTypes=H,D.defaultProps={as:"button",type:void 0,variant:"primary",size:"default",isLoading:!1,disabled:!1,className:""};const W=D,V=e=>(0,r.createElement)(D,{...e});V.propTypes=H,V.defaultProps=D.defaultProps,V.displayName="Button";const q=({className:e="",children:t,title:n,secondaryTitle:a,...o})=>{const r=[e,"nfd-solutions-upgrade-banner"];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",{className:"nfd-solutions-upgrade-banner__overlay"}),(0,l.createElement)("div",{className:f()(r),...o},(0,l.createElement)("span",{className:"nfd-solutions-upgrade-banner__lock-icon"},(0,l.createElement)(C,null)),(0,l.createElement)(N,{as:"h2",className:"nfd-solutions-upgrade-banner__title"},n||(0,O.__)("Upgrade to unlock all features","wp-module-solutions")),(0,l.createElement)(N,{as:"h4",className:"nfd-solutions-upgrade-banner__title--secondary"},a||(0,O.__)("Advanced Solutions to build any kind of site, store or blog","wp-module-solutions")),(0,l.createElement)("span",{className:"nfd-solutions-upgrade-banner__content"},t),(0,l.createElement)(W,{as:"a",className:"nfd-solutions-upgrade-banner__button","data-ctb-id":"5dc83bdd-9274-4557-a6d7-0b2adbc3919f",href:"https://www.bluehost.com/my-account/hosting/details#click-to-buy-WP_SOLUTION_FAMILY",size:"large"},(0,O.__)("Discover Now","wp-module-solutions"))))},Z=({plan:e})=>{const t=h({includePremium:!1}),n=h({includeEntitlements:!1}),a=(0,O.__)("Premium tools available in your Creator Solution","wp-module-solutions"),o=(0,O.__)("Upgrade to save & unlock 30 advanced tools","wp-module-solutions");return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(I,{title:a},(0,O.__)("Discover the complete list of advanced features provided by your hosting provider Bluehost, designed to deliver unmatched value and elevate your online experience.","wp-module-solutions"),(0,l.createElement)("a",{href:"https://www.bluehost.com/my-account/account-center?utm_source=wp-admin%2Fadmin.php%3Fpage%3Dsolutions&utm_medium=bluehost_plugin",target:"_blank",rel:"noreferrer"},(0,O.__)("Learn more about our Solutions","wp-module-solutions"))),!!t.length&&(0,l.createElement)("div",{className:"nfd-plugins-card-list"},(0,l.createElement)("div",{id:"the-list"},t.map((e=>(0,l.createElement)(R,{name:e?.name,category:e.category,description:e.description,icon:e?.image?.primaryImage,premium:e?.premium,popular:e?.popular,key:e?.name,isActive:e?.isActive,plsProvider:e?.plsProviderName,plsSlug:e?.plsSlug,ctbId:e?.ctbId,ctbHref:e?.ctbHref,ctaUrl:e?.cta?.url,ctaLabel:e?.cta?.text,download:e?.download}))))),(0,l.createElement)(I,{title:o},(0,l.createElement)("span",null,(0,O.__)("Supercharge your online store with powerful tools designed to boost sales, streamline payments, manage inventory, and enhance customer experience.","wp-module-solutions")),(0,l.createElement)("span",null,(0,l.createElement)("strong",null," ",(0,O.__)("No matter what you sell or how you run your store, this is the Ultimate e-commerce toolkit — packed with everything you need at an unbeatable price!","wp-module-solutions")," "),(0,l.createElement)("a",{href:"https://www.bluehost.com/my-account/account-center?utm_source=wp-admin%2Fadmin.php%3Fpage%3Dsolutions&utm_medium=bluehost_plugin",target:"_blank",rel:"noreferrer"},(0,O.__)("Learn more about our Solutions","wp-module-solutions")))),!!n.length&&(0,l.createElement)("div",{className:"nfd-plugins-card-list"},(0,l.createElement)(q,{secondaryTitle:(0,O.__)("The #1 Bundle of Commerce Tools","wp-module-solutions")},(0,l.createElement)("p",null,(0,O.__)("A solution designed to help shop owners to boost their online sales with a massive bundle \nof premium tools (value $3,500)","wp-module-solutions"))),(0,l.createElement)("div",{id:"the-list"},n.map((e=>(0,l.createElement)(R,{name:e?.name,category:e.category,description:e.description,icon:e?.image?.primaryImage,premium:e?.premium,popular:e?.popular,key:e?.name,displayAsPremiun:!0,isBlock:!0}))))))},$=({plan:e})=>{const t=h({includePremium:!1}),n=h({includeEntitlements:!1}),a=(0,O.__)("Premium tools available in your Services Solution","wp-module-solutions"),o=(0,O.__)("Upgrade to save & unlock more advanced tools","wp-module-solutions");return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(I,{title:a},(0,O.__)("Discover the complete list of advanced features provided by your hosting provider Bluehost, designed to deliver unmatched value and elevate your online experience.","wp-module-solutions"),(0,l.createElement)("a",{href:"https://www.bluehost.com/my-account/account-center?utm_source=wp-admin%2Fadmin.php%3Fpage%3Dsolutions&utm_medium=bluehost_plugin",target:"_blank",rel:"noreferrer"},(0,O.__)("Learn more about our Solutions","wp-module-solutions"))),!!t.length&&(0,l.createElement)("div",{className:"nfd-plugins-card-list"},(0,l.createElement)("div",{id:"the-list"},t.map((e=>(0,l.createElement)(R,{name:e?.name,category:e.category,description:e.description,icon:e?.image?.primaryImage,premium:e?.premium,popular:e?.popular,key:e?.name,isActive:e?.isActive,plsProvider:e?.plsProviderName,plsSlug:e?.plsSlug,ctbId:e?.ctbId,ctbHref:e?.ctbHref,ctaUrl:e?.cta?.url,ctaLabel:e?.cta?.text,download:e?.download}))))),(0,l.createElement)(I,{title:o},(0,l.createElement)("span",null,(0,O.__)("Supercharge your online store with powerful tools designed to boost sales, streamline payments, manage inventory, and enhance customer experience.","wp-module-solutions")),(0,l.createElement)("span",null,(0,l.createElement)("strong",null," ",(0,O.__)("No matter what you sell or how you run your store, this is the Ultimate e-commerce toolkit — packed with everything you need at an unbeatable price!","wp-module-solutions")," "),(0,l.createElement)("a",{href:"https://www.bluehost.com/my-account/account-center?utm_source=wp-admin%2Fadmin.php%3Fpage%3Dsolutions&utm_medium=bluehost_plugin",target:"_blank",rel:"noreferrer"},(0,O.__)("Learn more about our Solutions","wp-module-solutions")))),!!n.length&&(0,l.createElement)("div",{className:"nfd-plugins-card-list"},(0,l.createElement)(q,{secondaryTitle:(0,O.__)("The #1 Bundle of Commerce Tools","wp-module-solutions")},(0,l.createElement)("p",null,(0,O.__)("A solution designed to help shop owners to boost their online sales with a massive bundle \nof premium tools (value $3,500)","wp-module-solutions"))),(0,l.createElement)("div",{id:"the-list"},n.map((e=>(0,l.createElement)(R,{name:e?.name,category:e.category,description:e.description,icon:e?.image?.primaryImage,premium:e?.premium,popular:e?.popular,key:e?.name,displayAsPremiun:!0,isBlock:!0}))))))},Y=({plan:e})=>{const t=h({sortByPlan:!0}),n=(0,O.__)("Premium tools available in your Commerce Solution","wp-module-solutions");return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(I,{title:n},(0,O.__)("Supercharge your online store with powerful tools designed to boost sales, streamline payments, manage inventory, and enhance customer experience.","wp-module-solutions")),!!t.length&&(0,l.createElement)("div",{className:"nfd-plugins-card-list"},(0,l.createElement)("div",{id:"the-list"},t.map((e=>(0,l.createElement)(R,{name:e?.name,category:e.category,description:e.description,icon:e?.image?.primaryImage,premium:e?.premium,displayAsPremiun:!0,popular:e?.popular,key:e?.name,isActive:e?.isActive,plsProvider:e?.plsProviderName,plsSlug:e?.plsSlug,download:e?.download,ctbId:e?.ctbId,ctbHref:e?.ctbHref,ctaUrl:e?.cta?.url,ctaLabel:e?.cta?.text}))))))},G=({plan:e})=>{const t=h({}),n=(0,O.__)("Premium tools available in our Solutions Bundles","wp-module-solutions");return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(I,{title:n},(0,O.__)("Discover the complete list of advanced features provided by your hosting provider Bluehost, designed to deliver unmatched value and elevate your online experience.","wp-module-solutions"),(0,l.createElement)("a",{href:"https://www.bluehost.com/my-account/account-center?utm_source=wp-admin%2Fadmin.php%3Fpage%3Dsolutions&utm_medium=bluehost_plugin",target:"_blank",rel:"noreferrer"},(0,O.__)("Learn more about our Solutions","wp-module-solutions"))),!!t.length&&(0,l.createElement)("div",{className:"nfd-plugins-card-list"},(0,l.createElement)(q,{secondaryTitle:(0,O.__)("The #1 Bundle of Commerce Tools","wp-module-solutions")},(0,l.createElement)("p",null,(0,O.__)("A solution designed to help shop owners to boost their online sales with a massive bundle \nof premium tools (value $3,500)","wp-module-solutions"))),(0,l.createElement)("div",{id:"the-list"},t.slice(0,6).map((e=>(0,l.createElement)(R,{name:e?.name,category:e.category,description:e.description,icon:e?.image?.primaryImage,premium:e?.premium,popular:e?.popular,key:e?.name,displayAsPremiun:!0,isBlock:!0}))))))},J=({plan:e})=>(0,l.createElement)(l.Fragment,null,!!e&&"WP_SOLUTION_CREATOR"===e.sku&&(0,l.createElement)(Z,{plan:e}),!!e&&"WP_SOLUTION_SERVICE"===e.sku&&(0,l.createElement)($,{plan:e}),!!e&&"WP_SOLUTION_COMMERCE"===e.sku&&(0,l.createElement)(Y,{plan:e}),!e||!!e&&""===e.sku&&(0,l.createElement)(G,{plan:e})),K=()=>{const e=w();return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(m,null,(0,l.createElement)(v,{className:"nfd-my-solutions-app-container"},(0,l.createElement)(J,{plan:e}))))};o()((()=>{const e=document.getElementById("nfd-add-new-app");null!==e&&void 0!==r.createRoot&&(0,r.createRoot)(e).render((0,l.createElement)(K,null))}))},925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},942:(e,t)=>{var n;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=r(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)l.call(e,n)&&e[n]&&(t=r(t,n));return t}function r(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},n={};function l(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,n,a,o)=>{if(!n){var r=1/0;for(c=0;c<e.length;c++){for(var[n,a,o]=e[c],s=!0,i=0;i<n.length;i++)(!1&o||r>=o)&&Object.keys(l.O).every((e=>l.O[e](n[i])))?n.splice(i--,1):(s=!1,o<r&&(r=o));if(s){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={942:0,283:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[r,s,i]=n,u=0;if(r.some((t=>0!==e[t]))){for(a in s)l.o(s,a)&&(l.m[a]=s[a]);if(i)var c=i(l)}for(t&&t(n);u<r.length;u++)o=r[u],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(c)},n=globalThis.webpackChunk_newfold_labs_wp_module_solutions=globalThis.webpackChunk_newfold_labs_wp_module_solutions||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=l.O(void 0,[283],(()=>l(737)));a=l.O(a)})();
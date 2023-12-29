"use strict";(self.webpackChunkds_blog=self.webpackChunkds_blog||[]).push([[7918],{4247:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ee});var a=n(959),r=n(4041),l=n(6179);const o=a.createContext(null);function c({children:e,content:t}){const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return a.createElement(o.Provider,{value:n},e)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=s();var l;return a.createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:null!==(l=n.image)&&void 0!==l?l:t.image})}var m=n(5341),d=n(347),u=n(2736),b=n(7228);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){p(e,t,n[t])}))}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function v(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(b.Z,g(f({},t),{subLabel:a.createElement(u.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(b.Z,g(f({},n),{subLabel:a.createElement(u.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function E(){const{metadata:e}=s();return a.createElement(v,{previous:e.previous,next:e.next})}var h=n(4025),y=n(9951),O=n(518),w=n(7978),j=n(3591),N=n(6496);const P={unreleased:function({siteTitle:e,versionMetadata:t}){return a.createElement(u.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return a.createElement(u.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function _(e){const t=P[e.versionMetadata.banner];return a.createElement(t,e)}function k({versionLabel:e,to:t,onClick:n}){return a.createElement(u.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:a.createElement("b",null,a.createElement(y.Z,{to:t,onClick:n},a.createElement(u.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function Z({className:e,versionMetadata:t}){const{siteConfig:{title:n}}=(0,h.Z)(),{pluginId:r}=(0,O.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,j.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,O.Jo)(r),s=null!=o?o:(i=c).docs.find((e=>e.id===i.mainDocId));var i;return a.createElement("div",{className:(0,m.Z)(e,w.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(_,{siteTitle:n,versionMetadata:t})),a.createElement("div",{className:"margin-top--md"},a.createElement(k,{versionLabel:c.label,to:s.path,onClick:()=>l(c.name)})))}function C({className:e}){const t=(0,N.E)();return t.banner?a.createElement(Z,{className:e,versionMetadata:t}):null}function L({className:e}){const t=(0,N.E)();return t.badge?a.createElement("span",{className:(0,m.Z)(e,w.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(u.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}function T({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return a.createElement(u.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function U({lastUpdatedBy:e}){return a.createElement(u.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,e)}}," by {user}")}function S({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:n}){return a.createElement("span",{className:w.k.common.lastUpdated},a.createElement(u.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?a.createElement(T,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:n?a.createElement(U,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}var x=n(578),D=n(5804);const B={lastUpdated:"lastUpdated_IKrr"};function A(e){return a.createElement("div",{className:(0,m.Z)(w.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(D.Z,e)))}function I({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:n,formattedLastUpdatedAt:r}){return a.createElement("div",{className:(0,m.Z)(w.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},e&&a.createElement(x.Z,{editUrl:e})),a.createElement("div",{className:(0,m.Z)("col",B.lastUpdated)},(t||n)&&a.createElement(S,{lastUpdatedAt:t,formattedLastUpdatedAt:r,lastUpdatedBy:n})))}function M(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l,tags:o}=e,c=o.length>0,i=!!(t||n||l);return c||i?a.createElement("footer",{className:(0,m.Z)(w.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(A,{tags:o}),i&&a.createElement(I,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var H=n(6012),V=n(2464);const F={tocCollapsibleButton:"tocCollapsibleButton_M7qD",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_QFrm"};function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function G(e){var{collapsed:t}=e,n=z(e,["collapsed"]);return a.createElement("button",R(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){q(e,t,n[t])}))}return e}({type:"button"},n),{className:(0,m.Z)("clean-btn",F.tocCollapsibleButton,!t&&F.tocCollapsibleButtonExpanded,n.className)}),a.createElement(u.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const Q={tocCollapsible:"tocCollapsible_Zbrp",tocCollapsibleContent:"tocCollapsibleContent_vQBQ",tocCollapsibleExpanded:"tocCollapsibleExpanded_gBtL"};function W({toc:e,className:t,minHeadingLevel:n,maxHeadingLevel:r}){const{collapsed:l,toggleCollapsed:o}=(0,H.u)({initialState:!0});return a.createElement("div",{className:(0,m.Z)(Q.tocCollapsible,!l&&Q.tocCollapsibleExpanded,t)},a.createElement(G,{collapsed:l,onClick:o}),a.createElement(H.z,{lazy:!0,className:Q.tocCollapsibleContent,collapsed:l},a.createElement(V.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:r})))}const $={tocMobile:"tocMobile_nQvy"};function J(){const{toc:e,frontMatter:t}=s();return a.createElement(W,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(w.k.docs.docTocMobile,$.tocMobile)})}var Y=n(2699);function K(){const{toc:e,frontMatter:t}=s();return a.createElement(Y.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:w.k.docs.docTocDesktop})}var X=n(4178),ee=n(3236);function te({children:e}){const t=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,m.Z)(w.k.docs.docMarkdown,"markdown")},t&&a.createElement("header",null,a.createElement(X.Z,{as:"h1"},t)),a.createElement(ee.Z,null,e))}var ne=n(6624),ae=n(8006),re=n(9114);function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e){return a.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){le(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ce={breadcrumbHomeIcon:"breadcrumbHomeIcon_ojLv"};function se(){const e=(0,re.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(y.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(oe,{className:ce.breadcrumbHomeIcon})))}const ie={breadcrumbsContainer:"breadcrumbsContainer_AGki"};function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function ue({children:e,href:t,isLast:n}){const r="breadcrumbs__link";return n?a.createElement("span",{className:r,itemProp:"name"},e):t?a.createElement(y.Z,{className:r,href:t,itemProp:"item"},a.createElement("span",{itemProp:"name"},e)):a.createElement("span",{className:r},e)}function be({children:e,active:t,index:n,addMicrodata:r}){return a.createElement("li",de(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){me(e,t,n[t])}))}return e}({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"}),{className:(0,m.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})}),e,a.createElement("meta",{itemProp:"position",content:String(n+1)}))}function pe(){const e=(0,ne.s1)(),t=(0,ae.Ns)();return e?a.createElement("nav",{className:(0,m.Z)(w.k.docs.docBreadcrumbs,ie.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(se,null),e.map(((t,n)=>{const r=n===e.length-1,l="category"===t.type&&t.linkUnlisted?void 0:t.href;return a.createElement(be,{key:n,active:r,index:n,addMicrodata:!!l},a.createElement(ue,{href:l,isLast:r},t.label))})))):null}var fe=n(1939);const ge={docItemContainer:"docItemContainer_BZmq",docItemCol:"docItemCol_aLOT"};function ve({children:e}){const t=function(){const{frontMatter:e,toc:t}=s(),n=(0,d.i)(),r=e.hide_table_of_contents,l=!r&&t.length>0;return{hidden:r,mobile:l?a.createElement(J,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(K,null)}}(),{metadata:{unlisted:n}}=s();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",!t.hidden&&ge.docItemCol)},n&&a.createElement(fe.Z,null),a.createElement(C,null),a.createElement("div",{className:ge.docItemContainer},a.createElement("article",null,a.createElement(pe,null),a.createElement(L,null),t.mobile,a.createElement(te,null,e),a.createElement(M,null)),a.createElement(E,null))),t.desktop&&a.createElement("div",{className:"col col--3"},t.desktop))}function Ee(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(i,null),a.createElement(ve,null,a.createElement(n,null))))}},578:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(959),r=n(2736),l=n(7978),o=n(9951),c=n(5341);const s={iconEdit:"iconEdit_yW4C"};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e){var{className:t}=e,n=m(e,["className"]);return a.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(s.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u({editUrl:e}){return a.createElement(o.Z,{to:e,className:l.k.common.editThisPage},a.createElement(d,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7228:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(959),r=n(5341),l=n(9951);function o(e){const{permalink:t,title:n,subLabel:o,isNext:c}=e;return a.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},9760:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(959),r=n(5341),l=n(9951);const o={tag:"tag_WDNc",tagRegular:"tagRegular_BUcO",tagWithCount:"tagWithCount__YlE"};function c({permalink:e,label:t,count:n}){return a.createElement(l.Z,{href:e,className:(0,r.Z)(o.tag,n?o.tagWithCount:o.tagRegular)},t,n&&a.createElement("span",null,n))}},5804:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(959),r=n(5341),l=n(2736),o=n(9760);const c={tags:"tags_uYXq",tag:"tag_yqNw"};function s({tags:e}){return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(c.tags,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>a.createElement("li",{key:t,className:c.tag},a.createElement(o.Z,{label:e,permalink:t}))))))}},8931:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(1396),r=n(5301),l=n(3446),o=n(959);const c={root:"root_TFid",color:"color_c5nl"};var s=n(5341);const i="root_SmJj",m="name_Qr96",d="shades_vZEF",u="shade_tGhu",b="color_t_w9",p="info_EacV",f="colorCode_qqP9",g="infoRGB_wI14";var v=n(9951);const E={grid:"grid_ywne",section:"section_IlLm",card:"card_eF6A",imageContainer:"imageContainer_qYw4",image:"image_iZ6r"};function h({item:e,basePath:t}){return o.createElement(v.Z,{className:E.card,to:`./components/${e.component}`,key:e.component},o.createElement("div",{className:E.imageContainer},o.createElement("img",{src:`${t}/${e.component}.svg`,alt:"",className:E.image})),o.createElement("div",null,e.name))}var y=n(1799);var O=n(4254);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const j=(N=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){w(e,t,n[t])}))}return e}({},a.Z,O),P=null!=(P={Tabs:r.Z,TabItem:l.Z,color:function({color:e,colorCode:t,children:n}){return o.createElement("div",{className:c.root},o.createElement("div",{className:c.color,style:{backgroundColor:e}}),o.createElement("div",{className:c.content},t?o.createElement("code",null,e):n))},ColorPalette:function({name:e,shades:t,desc:n,rgb:a}){let r=Object.keys(t);return n&&r.sort(((e,t)=>+t-+e)),o.createElement("div",{className:i},o.createElement("div",{className:m},e),o.createElement("div",{className:d},r.map((e=>{const n=t[e];return o.createElement("div",{key:e,className:u},o.createElement("div",{className:b,style:{backgroundColor:n}}),o.createElement("div",{className:(0,s.Z)(p,a&&g)},o.createElement("div",null,e),o.createElement("div",{className:f},n)))}))))},ComponentsGrid:function({items:e,basePath:t="/"}){return e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0)),o.createElement("div",{className:E.section},o.createElement("div",{className:E.grid},e.map((e=>o.createElement(h,{key:e.component,item:e,basePath:t})))))},CardSection:function({id:e,title:t,children:n,description:a,className:r,hasSubSections:l=!1,HeadingTag:c="h3"}){return o.createElement("div",{className:(0,s.Z)("homepage-section",l&&"has-sub-sections",r)},t&&o.createElement(c,{id:null!=e?e:(0,y.o)(t)},t),a&&o.createElement("p",{className:"section-description"},a),o.createElement("div",{className:"section-content"},n))},Card:function({id:e,icon:t,title:n,description:a,to:r,tag:l}){return o.createElement(v.Z,{to:r,className:"homepage-card"},t&&o.createElement("div",{className:"icon"},t),o.createElement("div",{className:"card-content"},o.createElement("div",{className:"title",id:e&&(0,y.o)(n)},n),a&&o.createElement("div",{className:"description"},a)),l&&o.createElement("div",{className:"tag absolute right-0 top-0 h-16 w-16"},o.createElement("span",{className:"absolute right-[-28px] top-[-2px] w-[80px] rotate-45 transform bg-gray-600 py-1 text-center font-semibold text-white",style:{backgroundColor:l.color},title:l.description},l.label)))}})?P:{},Object.getOwnPropertyDescriptors?Object.defineProperties(N,Object.getOwnPropertyDescriptors(P)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(P)).forEach((function(e){Object.defineProperty(N,e,Object.getOwnPropertyDescriptor(P,e))})),N);var N,P}}]);
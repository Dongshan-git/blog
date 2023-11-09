"use strict";(self.webpackChunkds_blog=self.webpackChunkds_blog||[]).push([[3506],{8572:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(959),a=n(5924),l=n(7544),o=n(2985),i=n(768),c=n(8239),s=n(8903),m=n(711);function u(e){const{pathname:t}=(0,s.TH)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const g={sidebar:"sidebar_QmrN",sidebarItemTitle:"sidebarItemTitle_KTpQ",sidebarItemList:"sidebarItemList_Fyb8",sidebarItem:"sidebarItem_D7zE",sidebarItemLink:"sidebarItemLink_Mfrm",sidebarItemLinkActive:"sidebarItemLinkActive_JSik"};function d({sidebar:e}){const t=u(e.items);return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,a.Z)(g.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,a.Z)(g.sidebarItemTitle,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,a.Z)(g.sidebarItemList,"clean-list")},t.map((e=>r.createElement("li",{key:e.permalink,className:g.sidebarItem},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive},e.title)))))))}var p=n(356);function b({sidebar:e}){const t=u(e.items);return r.createElement("ul",{className:"menu__list"},t.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return r.createElement(p.Zo,{component:b,props:e})}function h({sidebar:e}){const t=(0,o.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(f,{sidebar:e}):r.createElement(d,{sidebar:e}):null}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function v(e){const{sidebar:t,toc:n,children:o}=e,i=E(e,["sidebar","toc","children"]),c=t&&t.items.length>0;return r.createElement(l.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(h,{sidebar:t}),r.createElement("main",{className:(0,a.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"https://schema.org/Blog"},o),n&&r.createElement("div",{className:"col col--2"},n))))}},6506:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(959),a=n(5924),l=n(9050),o=n(6332);function i({children:e,className:t}){const{frontMatter:n,assets:a,metadata:{description:i}}=(0,l.C)(),{withBaseUrl:c}=(0,o.C)();var s;const m=null!==(s=a.image)&&void 0!==s?s:n.image;var u;const g=null!==(u=n.keywords)&&void 0!==u?u:[];return r.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting"},i&&r.createElement("meta",{itemProp:"description",content:i}),m&&r.createElement("link",{itemProp:"image",href:c(m,{absolute:!0})}),g.length>0&&r.createElement("meta",{itemProp:"keywords",content:g.join(",")}),e)}var c=n(768);const s={title:"title_LtxA"};function m({className:e}){const{metadata:t,isBlogPostPage:n}=(0,l.C)(),{permalink:o,title:i}=t,m=n?"h1":"h2";return r.createElement(m,{className:(0,a.Z)(s.title,e),itemProp:"headline"},n?i:r.createElement(c.Z,{itemProp:"url",to:o},i))}var u=n(8239),g=n(7123);const d={container:"container_xzjx"};function p({readingTime:e}){const t=function(){const{selectMessage:e}=(0,g.c)();return t=>{const n=Math.ceil(t);return e(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return r.createElement(r.Fragment,null,t(e))}function b({date:e,formattedDate:t}){return r.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function f(){return r.createElement(r.Fragment,null," \xb7 ")}function h({className:e}){const{metadata:t}=(0,l.C)(),{date:n,formattedDate:o,readingTime:i}=t;return r.createElement("div",{className:(0,a.Z)(d.container,"margin-vert--md",e)},r.createElement(b,{date:n,formattedDate:o}),void 0!==i&&r.createElement(r.Fragment,null,r.createElement(f,null),r.createElement(p,{readingTime:i})))}function E(e){return e.href?r.createElement(c.Z,e):r.createElement(r.Fragment,null,e.children)}function v({author:e,className:t}){const{name:n,title:l,url:o,imageURL:i,email:c}=e,s=o||c&&`mailto:${c}`||void 0;return r.createElement("div",{className:(0,a.Z)("avatar margin-bottom--sm",t)},i&&r.createElement(E,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:n,itemProp:"image"})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(E,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const y={authorCol:"authorCol_wwDk",imageOnlyAuthorRow:"imageOnlyAuthorRow_A1rm",imageOnlyAuthorCol:"imageOnlyAuthorCol_PcgR"};function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){P(e,t,n[t])}))}return e}function k(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function N({className:e}){const{metadata:{authors:t},assets:n}=(0,l.C)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));return r.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",o?y.imageOnlyAuthorRow:"row",e)},t.map(((e,t)=>{var l;return r.createElement("div",{className:(0,a.Z)(!o&&"col col--6",o?y.imageOnlyAuthorCol:y.authorCol),key:t},r.createElement(v,{author:k(O({},e),{imageURL:null!==(l=n.authorsImageUrls[t])&&void 0!==l?l:e.imageURL})}))})))}function _(){return r.createElement("header",null,r.createElement(m,null),r.createElement(h,null),r.createElement(N,null))}var w=n(185),Z=n(5360);function j({children:e,className:t}){const{isBlogPostPage:n}=(0,l.C)();return r.createElement("div",{id:n?w.blogPostContainerID:void 0,className:(0,a.Z)("markdown",t),itemProp:"articleBody"},r.createElement(Z.Z,null,e))}var T=n(7770),C=n(4268);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function F(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t}=e,n=x(e,["blogPostTitle"]);return r.createElement(c.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){I(e,t,n[t])}))}return e}({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),r.createElement(F,null))}const S={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_BTaF"};function B(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:n,title:o,editUrl:i,hasTruncateMarker:c}=e,s=!t&&c,m=n.length>0;return m||s||i?r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",t&&S.blogPostFooterDetailsFull)},m&&r.createElement("div",{className:(0,a.Z)("col",{"col--9":s})},r.createElement(C.Z,{tags:n})),t&&i&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(T.Z,{editUrl:i})),s&&r.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":m})},r.createElement(L,{blogPostTitle:o,to:e.permalink}))):null}function D({children:e,className:t}){const n=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return r.createElement(i,{className:(0,a.Z)(n,t)},r.createElement(_,null),r.createElement(j,null,e),r.createElement(B,null))}},7770:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(959),a=n(8239),l=n(9768),o=n(768),i=n(5924);const c={iconEdit:"iconEdit_xfje"};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function u(e){var{className:t}=e,n=m(e,["className"]);return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c.iconEdit,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function g({editUrl:e}){return r.createElement(o.Z,{to:e,className:l.k.common.editThisPage},r.createElement(u,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},4457:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(959),a=n(5924),l=n(768);function o(e){const{permalink:t,title:n,subLabel:o,isNext:i}=e;return r.createElement(l.Z,{className:(0,a.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},n))}},9674:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(959),a=n(5924),l=n(768);const o={tag:"tag_xC9w",tagRegular:"tagRegular_kvf9",tagWithCount:"tagWithCount_RHBx"};function i({permalink:e,label:t,count:n}){return r.createElement(l.Z,{href:e,className:(0,a.Z)(o.tag,n?o.tagWithCount:o.tagRegular)},t,n&&r.createElement("span",null,n))}},4268:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(959),a=n(5924),l=n(8239),o=n(9674);const i={tags:"tags_doJK",tag:"tag_X_ei"};function c({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(i.tags,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:i.tag},r.createElement(o.Z,{label:e,permalink:t}))))))}},9050:(e,t,n)=>{n.d(t,{C:()=>i,n:()=>o});var r=n(959),a=n(6056);const l=r.createContext(null);function o({children:e,content:t,isBlogPostPage:n=!1}){const a=function({content:e,isBlogPostPage:t}){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:n});return r.createElement(l.Provider,{value:a},e)}function i(){const e=(0,r.useContext)(l);if(null===e)throw new a.i6("BlogPostProvider");return e}},7123:(e,t,n)=>{n.d(t,{c:()=>s});var r=n(959),a=n(2799);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function s(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}}}]);
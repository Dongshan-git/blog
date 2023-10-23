"use strict";(self.webpackChunkds_blog=self.webpackChunkds_blog||[]).push([[6103],{441:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(959),a=n(5924),o=n(3411),c=n(7452),l=n(9577),i=n(8561),s=n(284),m=n(7197),p=n(494);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function g(e){const{nextItem:t,prevItem:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&r.createElement(p.Z,b(u({},n),{subLabel:r.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&r.createElement(p.Z,b(u({},t),{subLabel:r.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,l.C)(),{title:n,description:a,date:c,tags:i,authors:s,frontMatter:m}=t,{keywords:p}=m;var d;const u=null!==(d=e.image)&&void 0!==d?d:m.image;return r.createElement(o.d,{title:n,description:a,keywords:p,image:u},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:c}),s.some((e=>e.url))&&r.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&r.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var v=n(1712);function y({sidebar:e,children:t}){const{metadata:n,toc:a}=(0,l.C)(),{nextItem:o,prevItem:c,frontMatter:m}=n,{hide_table_of_contents:p,toc_min_heading_level:d,toc_max_heading_level:u}=m;return r.createElement(i.Z,{sidebar:e,toc:!p&&a.length>0?r.createElement(v.Z,{toc:a,minHeadingLevel:d,maxHeadingLevel:u}):void 0},r.createElement(s.Z,null,t),(o||c)&&r.createElement(g,{nextItem:o,prevItem:c}))}function E(e){const t=e.content;return r.createElement(l.n,{content:e.content,isBlogPostPage:!0},r.createElement(o.FG,{className:(0,a.Z)(c.k.wrapper.blogPages,c.k.page.blogPostPage)},r.createElement(f,null),r.createElement(y,{sidebar:e.sidebar},r.createElement(t,null))))}},4743:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(4447),a=n(3430),o=n(3996),c=n(959);const l={root:"root_TFid",color:"color_c5nl"};var i=n(5341);const s="root_SmJj",m="name_Qr96",p="shades_vZEF",d="shade_tGhu",u="color_t_w9",b="info_EacV",g="colorCode_qqP9",f="infoRGB_wI14";var v=n(3471);const y={grid:"grid_ywne",section:"section_IlLm",card:"card_eF6A",imageContainer:"imageContainer_qYw4",image:"image_iZ6r"};function E({item:e,basePath:t}){return c.createElement(v.Z,{className:y.card,to:`./components/${e.component}`,key:e.component},c.createElement("div",{className:y.imageContainer},c.createElement("img",{src:`${t}/${e.component}.svg`,alt:"",className:y.image})),c.createElement("div",null,e.name))}var O=n(1799);var h=n(6024);function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w=(j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){P(e,t,n[t])}))}return e}({},r.Z,h),N=null!=(N={Tabs:a.Z,TabItem:o.Z,color:function({color:e,colorCode:t,children:n}){return c.createElement("div",{className:l.root},c.createElement("div",{className:l.color,style:{backgroundColor:e}}),c.createElement("div",{className:l.content},t?c.createElement("code",null,e):n))},ColorPalette:function({name:e,shades:t,desc:n,rgb:r}){let a=Object.keys(t);return n&&a.sort(((e,t)=>+t-+e)),c.createElement("div",{className:s},c.createElement("div",{className:m},e),c.createElement("div",{className:p},a.map((e=>{const n=t[e];return c.createElement("div",{key:e,className:d},c.createElement("div",{className:u,style:{backgroundColor:n}}),c.createElement("div",{className:(0,i.Z)(b,r&&f)},c.createElement("div",null,e),c.createElement("div",{className:g},n)))}))))},ComponentsGrid:function({items:e,basePath:t="/"}){return e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0)),c.createElement("div",{className:y.section},c.createElement("div",{className:y.grid},e.map((e=>c.createElement(E,{key:e.component,item:e,basePath:t})))))},CardSection:function({id:e,title:t,children:n,description:r,className:a,hasSubSections:o=!1,HeadingTag:l="h3"}){return c.createElement("div",{className:(0,i.Z)("homepage-section",o&&"has-sub-sections",a)},t&&c.createElement(l,{id:null!=e?e:(0,O.o)(t)},t),r&&c.createElement("p",{className:"section-description"},r),c.createElement("div",{className:"section-content"},n))},Card:function({id:e,icon:t,title:n,description:r,to:a,tag:o}){return c.createElement(v.Z,{to:a,className:"homepage-card"},t&&c.createElement("div",{className:"icon"},t),c.createElement("div",{className:"card-content"},c.createElement("div",{className:"title",id:e&&(0,O.o)(n)},n),r&&c.createElement("div",{className:"description"},r)),o&&c.createElement("div",{className:"tag absolute right-0 top-0 h-16 w-16"},c.createElement("span",{className:"absolute right-[-28px] top-[-2px] w-[80px] rotate-45 transform bg-gray-600 py-1 text-center font-semibold text-white",style:{backgroundColor:o.color},title:o.description},o.label)))}})?N:{},Object.getOwnPropertyDescriptors?Object.defineProperties(j,Object.getOwnPropertyDescriptors(N)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(N)).forEach((function(e){Object.defineProperty(j,e,Object.getOwnPropertyDescriptor(N,e))})),j);var j,N}}]);
"use strict";(self.webpackChunkds_blog=self.webpackChunkds_blog||[]).push([[8610],{1416:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(959),r=n(2736),l=n(7228);function c(e){const{metadata:t}=e,{previousPage:n,nextPage:c}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(l.Z,{permalink:n,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),c&&a.createElement(l.Z,{permalink:c,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},2490:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(959),r=n(9649),l=n(1203);function c({items:e,component:t=l.Z}){return a.createElement(a.Fragment,null,e.map((({content:e})=>a.createElement(r.n,{key:e.metadata.permalink,content:e},a.createElement(t,null,a.createElement(e,null))))))}},2290:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(959),r=n(5341),l=n(2736),c=n(8236),o=n(4041),s=n(7978),i=n(9951),m=n(4245),d=n(1416),u=n(5552),g=n(2490),p=n(1939),b=n(4178);function E(e){const t=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h({tag:e}){const t=E(e);return a.createElement(a.Fragment,null,a.createElement(o.d,{title:t}),a.createElement(u.Z,{tag:"blog_tags_posts"}))}function f({tag:e,items:t,sidebar:n,listMetadata:r}){const c=E(e);return a.createElement(m.Z,{sidebar:n},e.unlisted&&a.createElement(p.Z,null),a.createElement("header",{className:"margin-bottom--xl"},a.createElement(b.Z,{as:"h1"},c),a.createElement(i.Z,{href:e.allTagsPath},a.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement(g.Z,{items:t}),a.createElement(d.Z,{metadata:r}))}function v(e){return a.createElement(o.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage)},a.createElement(h,e),a.createElement(f,e))}},1939:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(959),r=n(5341),l=n(2736),c=n(6258);function o(){return a.createElement(l.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title"},"Unlisted page")}function s(){return a.createElement(l.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message"},"This page is unlisted. Search engines will not index it, and only users having a direct link can access it.")}function i(){return a.createElement(c.Z,null,a.createElement("meta",{name:"robots",content:"noindex, nofollow"}))}var m=n(7978),d=n(5227);function u({className:e}){return a.createElement(d.Z,{type:"caution",title:a.createElement(o,null),className:(0,r.Z)(e,m.k.common.unlistedBanner)},a.createElement(s,null))}function g(e){return a.createElement(a.Fragment,null,a.createElement(i,null),a.createElement(u,e))}},8931:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(1396),r=n(5301),l=n(3446),c=n(959);const o={root:"root_TFid",color:"color_c5nl"};var s=n(5341);const i="root_SmJj",m="name_Qr96",d="shades_vZEF",u="shade_tGhu",g="color_t_w9",p="info_EacV",b="colorCode_qqP9",E="infoRGB_wI14";var h=n(9951);const f={grid:"grid_ywne",section:"section_IlLm",card:"card_eF6A",imageContainer:"imageContainer_qYw4",image:"image_iZ6r"};function v({item:e,basePath:t}){return c.createElement(h.Z,{className:f.card,to:`./components/${e.component}`,key:e.component},c.createElement("div",{className:f.imageContainer},c.createElement("img",{src:`${t}/${e.component}.svg`,alt:"",className:f.image})),c.createElement("div",null,e.name))}var N=n(1799);var y=n(4254);function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w=(O=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){Z(e,t,n[t])}))}return e}({},a.Z,y),P=null!=(P={Tabs:r.Z,TabItem:l.Z,color:function({color:e,colorCode:t,children:n}){return c.createElement("div",{className:o.root},c.createElement("div",{className:o.color,style:{backgroundColor:e}}),c.createElement("div",{className:o.content},t?c.createElement("code",null,e):n))},ColorPalette:function({name:e,shades:t,desc:n,rgb:a}){let r=Object.keys(t);return n&&r.sort(((e,t)=>+t-+e)),c.createElement("div",{className:i},c.createElement("div",{className:m},e),c.createElement("div",{className:d},r.map((e=>{const n=t[e];return c.createElement("div",{key:e,className:u},c.createElement("div",{className:g,style:{backgroundColor:n}}),c.createElement("div",{className:(0,s.Z)(p,a&&E)},c.createElement("div",null,e),c.createElement("div",{className:b},n)))}))))},ComponentsGrid:function({items:e,basePath:t="/"}){return e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0)),c.createElement("div",{className:f.section},c.createElement("div",{className:f.grid},e.map((e=>c.createElement(v,{key:e.component,item:e,basePath:t})))))},CardSection:function({id:e,title:t,children:n,description:a,className:r,hasSubSections:l=!1,HeadingTag:o="h3"}){return c.createElement("div",{className:(0,s.Z)("homepage-section",l&&"has-sub-sections",r)},t&&c.createElement(o,{id:null!=e?e:(0,N.o)(t)},t),a&&c.createElement("p",{className:"section-description"},a),c.createElement("div",{className:"section-content"},n))},Card:function({id:e,icon:t,title:n,description:a,to:r,tag:l}){return c.createElement(h.Z,{to:r,className:"homepage-card"},t&&c.createElement("div",{className:"icon"},t),c.createElement("div",{className:"card-content"},c.createElement("div",{className:"title",id:e&&(0,N.o)(n)},n),a&&c.createElement("div",{className:"description"},a)),l&&c.createElement("div",{className:"tag absolute right-0 top-0 h-16 w-16"},c.createElement("span",{className:"absolute right-[-28px] top-[-2px] w-[80px] rotate-45 transform bg-gray-600 py-1 text-center font-semibold text-white",style:{backgroundColor:l.color},title:l.description},l.label)))}})?P:{},Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(P)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(P)).forEach((function(e){Object.defineProperty(O,e,Object.getOwnPropertyDescriptor(P,e))})),O);var O,P}}]);
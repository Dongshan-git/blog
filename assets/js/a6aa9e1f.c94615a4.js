"use strict";(self.webpackChunkds_blog=self.webpackChunkds_blog||[]).push([[3089],{1121:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(959),r=a(5341),c=a(4025),o=a(4041),l=a(7978),i=a(4245),s=a(1416),m=a(5552),d=a(2490);function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,c.Z)(),{blogDescription:r,blogTitle:l,permalink:i}=t,s="/"===i?a:l;return n.createElement(n.Fragment,null,n.createElement(o.d,{title:s,description:r}),n.createElement(m.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:r}=e;return n.createElement(i.Z,{sidebar:r},n.createElement(d.Z,{items:a}),n.createElement(s.Z,{metadata:t}))}function u(e){return n.createElement(o.FG,{className:(0,r.Z)(l.k.wrapper.blogPages,l.k.page.blogListPage)},n.createElement(p,e),n.createElement(g,e))}},1416:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(959),r=a(2736),c=a(7228);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(c.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(c.Z,{permalink:o,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},2490:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(959),r=a(9649),c=a(1203);function o({items:e,component:t=c.Z}){return n.createElement(n.Fragment,null,e.map((({content:e})=>n.createElement(r.n,{key:e.metadata.permalink,content:e},n.createElement(t,null,n.createElement(e,null))))))}},8931:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(1396),r=a(5301),c=a(3446),o=a(959);const l={root:"root_TFid",color:"color_c5nl"};var i=a(5341);const s="root_SmJj",m="name_Qr96",d="shades_vZEF",p="shade_tGhu",g="color_t_w9",u="info_EacV",b="colorCode_qqP9",E="infoRGB_wI14";var v=a(9951);const f={grid:"grid_ywne",section:"section_IlLm",card:"card_eF6A",imageContainer:"imageContainer_qYw4",image:"image_iZ6r"};function h({item:e,basePath:t}){return o.createElement(v.Z,{className:f.card,to:`./components/${e.component}`,key:e.component},o.createElement("div",{className:f.imageContainer},o.createElement("img",{src:`${t}/${e.component}.svg`,alt:"",className:f.image})),o.createElement("div",null,e.name))}var y=a(1799);var N=a(4254);function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const w=(Z=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){O(e,t,a[t])}))}return e}({},n.Z,N),P=null!=(P={Tabs:r.Z,TabItem:c.Z,color:function({color:e,colorCode:t,children:a}){return o.createElement("div",{className:l.root},o.createElement("div",{className:l.color,style:{backgroundColor:e}}),o.createElement("div",{className:l.content},t?o.createElement("code",null,e):a))},ColorPalette:function({name:e,shades:t,desc:a,rgb:n}){let r=Object.keys(t);return a&&r.sort(((e,t)=>+t-+e)),o.createElement("div",{className:s},o.createElement("div",{className:m},e),o.createElement("div",{className:d},r.map((e=>{const a=t[e];return o.createElement("div",{key:e,className:p},o.createElement("div",{className:g,style:{backgroundColor:a}}),o.createElement("div",{className:(0,i.Z)(u,n&&E)},o.createElement("div",null,e),o.createElement("div",{className:b},a)))}))))},ComponentsGrid:function({items:e,basePath:t="/"}){return e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0)),o.createElement("div",{className:f.section},o.createElement("div",{className:f.grid},e.map((e=>o.createElement(h,{key:e.component,item:e,basePath:t})))))},CardSection:function({id:e,title:t,children:a,description:n,className:r,hasSubSections:c=!1,HeadingTag:l="h3"}){return o.createElement("div",{className:(0,i.Z)("homepage-section",c&&"has-sub-sections",r)},t&&o.createElement(l,{id:null!=e?e:(0,y.o)(t)},t),n&&o.createElement("p",{className:"section-description"},n),o.createElement("div",{className:"section-content"},a))},Card:function({id:e,icon:t,title:a,description:n,to:r,tag:c}){return o.createElement(v.Z,{to:r,className:"homepage-card"},t&&o.createElement("div",{className:"icon"},t),o.createElement("div",{className:"card-content"},o.createElement("div",{className:"title",id:e&&(0,y.o)(a)},a),n&&o.createElement("div",{className:"description"},n)),c&&o.createElement("div",{className:"tag absolute right-0 top-0 h-16 w-16"},o.createElement("span",{className:"absolute right-[-28px] top-[-2px] w-[80px] rotate-45 transform bg-gray-600 py-1 text-center font-semibold text-white",style:{backgroundColor:c.color},title:c.description},c.label)))}})?P:{},Object.getOwnPropertyDescriptors?Object.defineProperties(Z,Object.getOwnPropertyDescriptors(P)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(P)).forEach((function(e){Object.defineProperty(Z,e,Object.getOwnPropertyDescriptor(P,e))})),Z);var Z,P}}]);
"use strict";(self.webpackChunkds_blog=self.webpackChunkds_blog||[]).push([[4013],{8572:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(959),n=a(5924),l=a(7544),s=a(2985),i=a(768),c=a(8239),m=a(8903),o=a(711);function u(e){const{pathname:t}=(0,m.TH)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,o.Mg)(e.permalink,t))}(e,t)))),[e,t])}const b={sidebar:"sidebar_QmrN",sidebarItemTitle:"sidebarItemTitle_KTpQ",sidebarItemList:"sidebarItemList_Fyb8",sidebarItem:"sidebarItem_D7zE",sidebarItemLink:"sidebarItemLink_Mfrm",sidebarItemLinkActive:"sidebarItemLinkActive_JSik"};function d({sidebar:e}){const t=u(e.items);return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,n.Z)(b.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(b.sidebarItemTitle,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,n.Z)(b.sidebarItemList,"clean-list")},t.map((e=>r.createElement("li",{key:e.permalink,className:b.sidebarItem},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:b.sidebarItemLink,activeClassName:b.sidebarItemLinkActive},e.title)))))))}var g=a(356);function p({sidebar:e}){const t=u(e.items);return r.createElement("ul",{className:"menu__list"},t.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function E(e){return r.createElement(g.Zo,{component:p,props:e})}function f({sidebar:e}){const t=(0,s.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(E,{sidebar:e}):r.createElement(d,{sidebar:e}):null}function v(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function k(e){const{sidebar:t,toc:a,children:s}=e,i=v(e,["sidebar","toc","children"]),c=t&&t.items.length>0;return r.createElement(l.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(f,{sidebar:t}),r.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"https://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},8377:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(959),n=a(5924),l=a(2843),s=a(8986),i=a(9768),c=a(8572),m=a(2382),o=a(1484),u=a(548);function b({tags:e,sidebar:t}){const a=(0,l.M)();return r.createElement(s.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogTagsListPage)},r.createElement(s.d,{title:a}),r.createElement(o.Z,{tag:"blog_tags_list"}),r.createElement(c.Z,{sidebar:t},r.createElement(u.Z,{as:"h1"},a),r.createElement(m.Z,{tags:e})))}},9674:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(959),n=a(5924),l=a(768);const s={tag:"tag_xC9w",tagRegular:"tagRegular_kvf9",tagWithCount:"tagWithCount_RHBx"};function i({permalink:e,label:t,count:a}){return r.createElement(l.Z,{href:e,className:(0,n.Z)(s.tag,a?s.tagWithCount:s.tagRegular)},t,a&&r.createElement("span",null,a))}},2382:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(959),n=a(2843),l=a(9674),s=a(548);const i={tag:"tag_IeSx"};function c({letterEntry:e}){return r.createElement("article",null,r.createElement(s.Z,{as:"h2",id:e.letter},e.letter),r.createElement("ul",{className:"padding--none"},e.tags.map((e=>r.createElement("li",{key:e.permalink,className:i.tag},r.createElement(l.Z,e))))),r.createElement("hr",null))}function m({tags:e}){const t=(0,n.P)(e);return r.createElement("section",{className:"margin-vert--lg"},t.map((e=>r.createElement(c,{key:e.letter,letterEntry:e}))))}},2843:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>l});var r=a(8239);const n=()=>(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(e){const t={};return Object.values(e).forEach((e=>{var a,r;const n=function(e){return e[0].toUpperCase()}(e.label);var l;null!==(l=(a=t)[r=n])&&void 0!==l||(a[r]=[]),t[n].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}}}]);
"use strict";(self.webpackChunkds_blog=self.webpackChunkds_blog||[]).push([[9514],{2628:(e,t,n)=>{n.d(t,{Z:()=>S});var c=n(959),o=n(8903),r=n(5341),i=n(182),a=n(2457),l=n(5252),s=n(643),u=n(3106),d=n(870);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p=(0,c.forwardRef)(((e,t)=>{var{defaultValue:n="",values:o=[],children:i,className:a}=e,p=b(e,["defaultValue","values","children","className"]);return c.createElement(l.fC,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},c=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),c.forEach((function(t){m(e,t,n[t])}))}return e}({defaultValue:n,ref:t},p),c.createElement(l.xz,{"aria-label":"Select Section",className:(0,r.Z)("sections-menu-trigger",a)},c.createElement(l.B4,null),c.createElement(l.JO,null,c.createElement(s.Z,{className:"sections-menu-scrollButton"}))),c.createElement(l.VY,{className:(0,r.Z)("sections-menu-content",a)},c.createElement(l.u_,{className:"sections-menu-scrollButton"},c.createElement(u.Z,null)),c.createElement(l.l_,null,c.createElement(l.ZA,null,o.map((({docId:e,name:t,icon:n,disabled:o=!1})=>c.createElement(l.ck,{value:e,key:e,className:(0,r.Z)("sections-menu-item"),disabled:o},c.createElement(l.eT,null,c.createElement("div",{className:"item-text"},n&&c.createElement(n,null),c.createElement("span",null,t))),c.createElement(l.wU,{className:"flex items-center"},c.createElement(d.Z,{className:"item-indicator"}))))),i)),c.createElement(l.$G,{className:"sections-menu-scrollButton"},c.createElement(s.Z,null))))})),f=p;var I=n(1348),g=n(4053);const v=[{name:"React",docId:"react",icon:g.ReactIcon,section:"web-prebuilt"},{name:"JavaScript",docId:"javascript",icon:g.JSIcon,section:"web-prebuilt"},{name:"Javascript",docId:"plugin-sdk",icon:g.JSIcon,section:"plugin-sdk"},{name:"Web Components",docId:"ui-kit",icon:g.HTMLIcon,section:"web-ui-kit"},{name:"React UI Kit",docId:"react-ui-kit",icon:g.ReactIcon,section:"web-ui-kit"},{name:"Angular UI Kit",docId:"angular-ui-kit",icon:g.AngularIcon,section:"web-ui-kit"},{name:"JavaScript",docId:"web-core",icon:g.JSIcon,section:"web-core-sdk"},{name:"React",docId:"react-web-core",icon:g.ReactIcon,section:"web-core-sdk"},{name:"Android Core",docId:"android-core",icon:g.AndroidIcon,section:"mobile-core"},{name:"iOS Core",docId:"ios-core",icon:g.AppleIcon,section:"mobile-core"},{name:"Flutter Core",docId:"flutter-core",icon:g.FlutterIcon,section:"mobile-core"},{name:"React Native Core",docId:"rn-core",icon:g.ReactIcon,section:"mobile-core"},{name:"Android",docId:"android",icon:g.AndroidIcon,section:"mobile-ui-kit"},{name:"iOS",docId:"ios",icon:g.AppleIcon,section:"mobile-ui-kit"},{name:"Flutter",docId:"flutter",icon:g.FlutterIcon,section:"mobile-ui-kit"},{name:"React Native",docId:"react-native",icon:g.ReactIcon,section:"mobile-ui-kit"}],y=[[{name:"UI Kit",section:"web-prebuilt",className:"deprecated-badge"}],[{name:"UI Kit",section:"web-ui-kit",description:"Use our pre-built UI components as a base to build on top of."},{name:"Core SDK",section:"web-core-sdk",description:"Build your own UI from scratch, use our low level APIs."}],[{name:"UI Kit",section:"mobile-ui-kit",description:"Use our pre-built mobile UI Kit SDK, ready to go"},{name:"Core SDK",section:"mobile-core",description:"Build your own UI from scratch, use our low level APIs."}],[{name:"Plugin SDK for Web",section:"plugin-sdk",description:"Build real-time collaborative apps using Dyte."}]];function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},c=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),c.forEach((function(t){E(e,t,n[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}const k={container:"container_lWWc",sectionsMenu:"sectionsMenu_eet_",multiSectionContainer:"multiSectionContainer_bYm7",section:"section_olD1",sectionActive:"sectionActive_D9yk",label:"label_WInT",description:"description_C5q3",row:"row_KvCx"};function h(e){return"/"===e.slice(-1)?e.slice(0,-1):e}function S(){const e=(0,o.k6)(),t=function(){var e;const t=(0,I.Z)().plugin.id,n=null===(e=v.find((e=>e.docId===t)))||void 0===e?void 0:e.section;if(n){for(const e of y)if(e.some((e=>e.section===n)))return{docId:t,currentSection:n,groups:e.map((e=>O(w({},e),{docs:v.filter((t=>t.section===e.section))})))};return{docId:t,currentSection:n,sections:v.filter((e=>e.section===n))}}return{docId:t}}(),{docId:n,currentSection:l,sections:s,groups:u}=t,d=(0,a.ZP)()["docusaurus-plugin-content-docs"];if(!s&&!u)return null;const m=t=>{if(t!==n){const{pathname:n,hash:c}=e.location,o=`/${t}/`+n.split("/").slice(2).join("/"),r=d[t].versions[0].docs;if(r.find((e=>e.path===o))){const t=o+(c&&c.length>0?"#"+c:"");e.push(h(t))}else{const t=r[0].path;e.push(h(t))}}};return s?c.createElement("div",{className:k.container},c.createElement(f,{defaultValue:n,values:s,onValueChange:m,triggerClassName:k.sectionsMenu}),c.createElement(i.Z,{docsPluginId:n,dropdownItemsBefore:[],dropdownItemsAfter:[]})):c.createElement("div",{className:(0,r.Z)("sidebar-menu",k.multiSectionContainer)},u.map((e=>{const{name:t,docs:o,description:a,className:s}=e,u=l===e.section,d=()=>m(o[0].docId);return c.createElement("div",{className:(0,r.Z)(k.section,u&&k.sectionActive),onClick:d,onKeyDown:e=>{"Space"!==e.code&&"Enter"!=e.code||d()},tabIndex:0,key:e.name},c.createElement("div",{className:(0,r.Z)(k.label,s)},t),c.createElement("div",null,u?c.createElement("div",{className:k.row},c.createElement(f,{defaultValue:u?n:o[0].id,values:o,onValueChange:m,triggerClassName:k.sectionsMenu}),c.createElement(i.Z,{docsPluginId:n,dropdownItemsBefore:[],dropdownItemsAfter:[]})):c.createElement("p",{className:k.description},a)))})))}},6749:(e,t,n)=>{n.d(t,{Z:()=>f});var c=n(959),o=n(5341),r=n(1207),i=n(2270),a=n(6443),l=n(2198);const s="sidebar_mhZE",u="sidebarWithHideableNavbar__6UL",d="sidebarHidden__LRd",m="sidebarLogo_F_0z";var b=n(2628);function p({path:e,sidebar:t,onCollapse:n,isHidden:p}){const{navbar:{hideOnScroll:f},docs:{sidebar:{hideable:I}}}=(0,r.L)();return c.createElement("div",{className:(0,o.Z)(s,f&&u,p&&d)},f&&c.createElement(i.Z,{tabIndex:-1,className:m}),c.createElement(b.Z,null),c.createElement(l.Z,{path:e,sidebar:t}),I&&c.createElement(a.Z,{onClick:n}))}const f=c.memo(p)},431:(e,t,n)=>{n.d(t,{Z:()=>m});var c=n(959),o=n(5341),r=n(3992),i=n(722),a=n(2691),l=n(9531),s=n(2628);const u=({sidebar:e,path:t})=>{const n=(0,a.e)();return c.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},c.createElement(s.Z,null),c.createElement(l.Z,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function d(e){return c.createElement(i.Zo,{component:u,props:e})}const m=c.memo(d)}}]);
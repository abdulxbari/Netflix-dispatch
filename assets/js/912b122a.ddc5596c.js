"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1097],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(4137));const o={},a="Plugins",s={unversionedId:"administration/plugins/index",id:"administration/plugins/index",title:"Plugins",description:"Before being able to configure and use the plugins, refer to the CLI documentation about installing plugins.",source:"@site/docs/administration/plugins/index.mdx",sourceDirName:"administration/plugins",slug:"/administration/plugins/",permalink:"/dispatch/docs/administration/plugins/",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/plugins/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Terms",permalink:"/dispatch/docs/administration/knowledge/term"},next:{title:"Configuring Atlassian Confluence",permalink:"/dispatch/docs/administration/plugins/configuring-atlassian-confluence"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"Before being able to configure and use the plugins, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/dispatch/docs/administration/cli#plugins"},"CLI")," documentation about installing plugins."),(0,r.kt)("p",null,"Much of Dispatch's functionality comes from its plugins. The current Dispatch web UI is limited to enabling and disabling plugins on a per-project basis. To make modifications to how plugins behave or are configured, changes must be deployed via the server configuration file. See the ",(0,r.kt)("a",{parentName:"p",href:"/dispatch/docs/administration/server"},"server")," configuration documentation for more information."),(0,r.kt)("p",null,"By default, no plugins are ",(0,r.kt)("em",{parentName:"p"},"required")," to create an incident. As you enable plugins, they will be additive to the incident process (e.g., creating slack channels, google docs, etc.)"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7138).Z,width:"492",height:"626"}))),(0,r.kt)("p",null,"Looking to add your own functionality to Dispatch via plugins? See the ",(0,r.kt)("a",{parentName:"p",href:"/dispatch/docs/contributing/plugins/"},"contributing")," documentation."))}d.isMDXComponent=!0},7138:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/admin-ui-incident-plugins-583f6c7406f9cc4e8994ccaf7885f9ab.png"}}]);
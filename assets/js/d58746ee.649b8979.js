"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8791],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,w=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(w,a(a({ref:t},p),{},{components:n})):o.createElement(w,a({ref:t},p))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(4137));const i={},a="Workflows",s={unversionedId:"administration/incident/workflow",id:"administration/incident/workflow",title:"Workflows",description:"Workflows allow you to extend Dispatch, invoking your response automation. Dispatch does not currently include the ability to author workflows directly. Instead, the workflow functionality allows for existing workflows to be invoked from Dispatch. We rely on external workflow orchestration tools to execute those workflows, with Dispatch keeping track of resulting artifacts and workflow status.",source:"@site/docs/administration/incident/workflow.mdx",sourceDirName:"administration/incident",slug:"/administration/incident/workflow",permalink:"/dispatch/docs/administration/incident/workflow",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/incident/workflow.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Notification",permalink:"/dispatch/docs/administration/incident/notification"},next:{title:"Installation",permalink:"/dispatch/docs/administration/installation"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"workflows"},"Workflows"),(0,r.kt)("p",null,"Workflows allow you to extend Dispatch, invoking your response automation. Dispatch does not currently include the ability to author workflows directly. Instead, the workflow functionality allows for existing workflows to be invoked from Dispatch. We rely on external workflow orchestration tools to execute those workflows, with Dispatch keeping track of resulting artifacts and workflow status."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3464).Z,width:"492",height:"768"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name:")," The name you wish to present to the user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," The description presented to the user when the workflow is viewed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resource Id:")," The ",(0,r.kt)("em",{parentName:"p"},"external")," resource id used by Dispatch to associate the workflow with an external system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Plugin:")," The plugin to use to resolve and execute this workflow. NOTE: This plugin must be enabled and installed before being associated with a workflow."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enabled:"),' By default, users can\'t invoke workflows. Activate the "Enabled" setting to allow the use of the workflow.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Workflow Parameters:")," Allows for custom parameters (strings only) to be presented to and set by the user. These are passed to the underlying workflow."))}d.isMDXComponent=!0},3464:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/admin-ui-incident-workflows-c4f309d9c885feebd2261ba79ac76d1e.png"}}]);
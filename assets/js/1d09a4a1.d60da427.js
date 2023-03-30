"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6282],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const i={description:"Overview of the Dispatch projects."},a="Projects",c={unversionedId:"administration/project",id:"administration/project",title:"Projects",description:"Overview of the Dispatch projects.",source:"@site/docs/administration/project.mdx",sourceDirName:"administration",slug:"/administration/project",permalink:"/dispatch/docs/administration/project",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/project.mdx",tags:[],version:"current",frontMatter:{description:"Overview of the Dispatch projects."},sidebar:"adminSidebar",previous:{title:"Configuring Zoom",permalink:"/dispatch/docs/administration/plugins/configuring-zoom"},next:{title:"Security",permalink:"/dispatch/docs/administration/security"}},s={},p=[{value:"When should I create a new project vs using an existing one?",id:"when-should-i-create-a-new-project-vs-using-an-existing-one",level:3}],l={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"projects"},"Projects"),(0,o.kt)("p",null,"Every case or incident within Dispatch is tied to a project. The project configuration determines how cases or incidents are created and managed. This allows multiple teams to use Dispatch in different ways."),(0,o.kt)("p",null,"From having their own case or incident types and priorities to providing the team with a view of their metrics."),(0,o.kt)("h3",{id:"when-should-i-create-a-new-project-vs-using-an-existing-one"},"When should I create a new project vs using an existing one?"),(0,o.kt)("p",null,"Generally, you would create a new project when the teams involved have very little overlap when handling cases or incidents."),(0,o.kt)("p",null,"For example, you might create a ",(0,o.kt)("inlineCode",{parentName:"p"},"security")," project for the handling of all security-related cases or incidents and a ",(0,o.kt)("inlineCode",{parentName:"p"},"reliability")," project for all outage-related incidents."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:r(5001).Z,width:"738",height:"1004"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Name:")," A name for your project."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description:")," A description for your project."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Color:")," A color for your project, so you can visually differentiate it from other projects."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Annual Employee Cost:")," An annual average cost per employee."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Business Year Hours:")," Number of working hours in a year. Used to calculate hourly rate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Owner Email:")," The email account of the project owner."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Owner Conversation:")," The conversation of the project owner (e.g. Slack channel)."))}d.isMDXComponent=!0},5001:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/admin-ui-project-0f1c9bc0131f7389901c536a1dc188c2.png"}}]);
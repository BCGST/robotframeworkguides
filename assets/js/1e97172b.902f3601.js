"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Project Structure",title:"Project Structure"},l=void 0,i={unversionedId:"examples/project_structure",id:"examples/project_structure",title:"Project Structure",description:"Root Folder",source:"@site/docs/examples/project_structure.mdx",sourceDirName:"examples",slug:"/examples/project_structure",permalink:"/docs/examples/project_structure",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/examples/project_structure.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Project Structure",title:"Project Structure"},sidebar:"tutorialSidebar",previous:{title:"MFA Login",permalink:"/docs/examples/mfa_login"},next:{title:"Restful Booker",permalink:"/docs/examples/restfulbooker"}},s={},p=[{value:"Root Folder",id:"root-folder",level:2},{value:"Test Cases",id:"test-cases",level:2},{value:"Resources",id:"resources",level:2},{value:"Reports &amp; Logs",id:"reports--logs",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"root-folder"},"Root Folder"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requirements.txt")," - Python dependencies or"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pyproject.toml")," - Python dependencies"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Readme.md")," - Project description"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".gitignore")," - Lists files and folders to be ignored by git")),(0,o.kt)("h2",{id:"test-cases"},"Test Cases"),(0,o.kt)("p",null,"Test cases are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," folder.",(0,o.kt)("br",{parentName:"p"}),"\n","Depending on the project, the test cases can be organized in multiple ",(0,o.kt)("inlineCode",{parentName:"p"},".robot")," files and subfolders."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tests/")," - Test cases",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"search.robot")," - Test case for searching"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"login.robot")," - Test case for logging in"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"checkout/")," - Folder containing Test cases for checkout",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"checkout_basic.robot")," - Test cases for standard checkout"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"checkout_premium.robot")," - Test cases for premium checkout"))),(0,o.kt)("li",{parentName:"ul"},"...")))),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Reusable keywords are stored in ",(0,o.kt)("inlineCode",{parentName:"p"},".resource")," files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," folder.",(0,o.kt)("br",{parentName:"p"}),"\n","Also ",(0,o.kt)("inlineCode",{parentName:"p"},"Python")," keywords in ",(0,o.kt)("inlineCode",{parentName:"p"},".py")," files can be stored there."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resources/")," - Reusable keywords",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"common.robot")," - General Keywords (e.g. Login/Logout, Navigation, ...) are stored here"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"search.robot")," - Keywords for searching are stored here"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"utils.py")," - Python helper keywords are stored here"),(0,o.kt)("li",{parentName:"ul"},"...")))),(0,o.kt)("h2",{id:"reports--logs"},"Reports & Logs"))}u.isMDXComponent=!0}}]);
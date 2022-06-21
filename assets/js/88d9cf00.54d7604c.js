"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[612],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return b}});var i=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return i.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},f=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),b=a,m=f["".concat(s,".").concat(b)]||f[b]||c[b]||n;return t?i.createElement(m,o(o({ref:r},p),{},{components:t})):i.createElement(m,o({ref:r},p))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<n;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},446:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=t(7462),a=t(3366),n=(t(7294),t(3905)),o=["components"],l={sidebar_position:0,sidebar_label:"How to find the right library",title:"How to find the right library"},s="What technology does your Application under Test use?",u={unversionedId:"different_libraries/how_to_find_library",id:"different_libraries/how_to_find_library",title:"How to find the right library",description:"That's the main question, when searching for a library to steer your application.",source:"@site/docs/different_libraries/how_to_find_library.md",sourceDirName:"different_libraries",slug:"/different_libraries/how_to_find_library",permalink:"/robotframeworkguides/different_libraries/how_to_find_library",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/different_libraries/how_to_find_library.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"How to find the right library",title:"How to find the right library"},sidebar:"tutorialSidebar",previous:{title:"I'm looking for RPA",permalink:"/robotframeworkguides/getting_started/rpa"},next:{title:"Libraries for UI Tests",permalink:"/robotframeworkguides/different_libraries/ui"}},p={},c=[{value:"Desktop Applications",id:"desktop-applications",level:2},{value:"Does if offer a User Interface ?",id:"does-if-offer-a-user-interface-",level:3},{value:"General Windows Desktop UI Libraries",id:"general-windows-desktop-ui-libraries",level:4},{value:"Java Specific UI Libraries",id:"java-specific-ui-libraries",level:4}],f={toc:c};function b(e){var r=e.components,t=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-technology-does-your-application-under-test-use"},"What technology does your Application under Test use?"),(0,n.kt)("p",null,"That's the main question, when searching for a library to steer your application.",(0,n.kt)("br",{parentName:"p"}),"\n","Sure, there are libraries out there, which use image and text recognition to find controls and interact with them.",(0,n.kt)("br",{parentName:"p"}),"\n","But nothing beats a library which can steer your application natively via it's exposed interfaces."),(0,n.kt)("h2",{id:"desktop-applications"},"Desktop Applications"),(0,n.kt)("h3",{id:"does-if-offer-a-user-interface-"},"Does if offer a User Interface ?"),(0,n.kt)("p",null,"Automation via the User Interface is a common approach, even though it can be very unstable, slow and heavy on the maintenance.",(0,n.kt)("br",{parentName:"p"}),"\n","But if your Application offers a User Interface, there is also the possibility to automate it via that User Interface.",(0,n.kt)("br",{parentName:"p"}),"\n","That's where the used technology becomes important."),(0,n.kt)("h4",{id:"general-windows-desktop-ui-libraries"},"General Windows Desktop UI Libraries"),(0,n.kt)("p",null,"There are libraries out there for general windows desktop automation or image based automation."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/GDATASoftwareAG/robotframework-flaui"},"FlaUI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rainmanwy/robotframework-SikuliLibrary"},"Sikuli Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Omenia/robotframework-whitelibrary"},"White Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rpaframework.org/"},"RPA Framework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eficode/robotframework-imagehorizonlibrary"},"ImageHorizon Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Accruent/robotframework-zoomba"},"Zoomba Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nokia/robotframework-autoitlibrary"},"AutoIT Library"))),(0,n.kt)("p",null,"But if you know that it's wiritten in Java - check out some SWING or SWT Libraries!"),(0,n.kt)("h4",{id:"java-specific-ui-libraries"},"Java Specific UI Libraries"),(0,n.kt)("p",null,"Some Libraries to steer the User Interface of your Java Application"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/robotframework/remoteswinglibrary"},"RemoteSwing Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/robotframework/SwingLibrary/wiki"},"Swing Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lcarbonn/robotframework-eclipselibrary"},"Eclipse Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rpaframework.org/libraries/javaaccessbridge/index.html"},"RPA Framework JavaAccessBridge"))))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[513],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},b="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=m(a),u=n,d=b["".concat(o,".").concat(u)]||b[u]||c[u]||i;return a?r.createElement(d,l(l({ref:t},p),{},{components:a})):r.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[b]="string"==typeof e?e:n,l[1]=s;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7407:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_label:"Variables",title:"Variables"},l=void 0,s={unversionedId:"variables",id:"variables",title:"Variables",description:"This page summarizes the most important information about variables in Robot Framework.",source:"@site/docs/variables.mdx",sourceDirName:".",slug:"/variables",permalink:"/docs/variables",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/variables.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Variables",title:"Variables"},sidebar:"tutorialSidebar",previous:{title:"Reporting Test Results",permalink:"/docs/reporting_alternatives"}},o={},m=[{value:"*** Variables *** Section",id:"-variables--section",level:2},{value:"Set Variables in Test Cases and Keywords",id:"set-variables-in-test-cases-and-keywords",level:2},{value:"When to use $ and @ and &amp; and %?",id:"when-to-use--and--and--and-",level:2}],p={toc:m};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page summarizes the most important information about variables in Robot Framework.",(0,n.kt)("br",{parentName:"p"}),"\n","For more information, please refer to the official ",(0,n.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variables"},"Robot Framework User Guide"),"."),(0,n.kt)("h2",{id:"-variables--section"},"*","*","*"," Variables ","*","*","*"," Section"),(0,n.kt)("p",null,"Variables which are defined in the ","*","*","*"," Variables ","*","*","*"," section are available in all test cases and keywords in the same file.",(0,n.kt)("br",{parentName:"p"}),"\n","Variables defined in the ","*","*","*"," Variables ","*","*","*"," section are ",(0,n.kt)("strong",{parentName:"p"},"suite")," variables.",(0,n.kt)("br",{parentName:"p"}),"\n","If a ",(0,n.kt)("inlineCode",{parentName:"p"},".resource")," or a ",(0,n.kt)("inlineCode",{parentName:"p"},".robot")," file with a ","*","*","*"," Variables ","*","*","*"," section is imported into a test suite, the variables there also become ",(0,n.kt)("strong",{parentName:"p"},"suite")," variables."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Variables ***\n${my_var}     my_value\n@{my_list}    Apple    Banana    Orange\n&{my_dict}    name=my_value1    password=my_value2\n\n*** Test Cases ***\nTest Case 1\n    Log    ${my_var}\n    Log    ${my_list}\n    Log    ${my_dict}\n    FOR    ${item}    IN    @{my_list}\n        Log    ${item}\n    END\n    Log    ${my_dict}[name]\n    Log    ${my_dict}[password]\n    FOR   ${key}    ${value}    IN    &{my_dict}\n        Log Many    ${key}    ${value}\n    END\n    My Keyword\n\n*** Keywords ***\nMy Keyword\n    Log Many    ${my_var}    ${my_list}    ${my_dict}    \n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Let me run it"),(0,n.kt)("iframe",{src:"https://robotframework.org/embed/?code-gh-url=https://github.com/MarketSquare/robotframeworkguides/tree/main/code-examples/standard_library/variables_section",width:"100%",height:"600"})),(0,n.kt)("h2",{id:"set-variables-in-test-cases-and-keywords"},"Set Variables in Test Cases and Keywords"),(0,n.kt)("p",null,"Besides the ","*","*","*"," Variables ","*","*","*"," section, variables can also be set dynamically in test cases and keywords.\nVariables are set by the return value of a keyword.\nThere are some Keywords which set variables values explicitly, like"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Set%20Variable"},"Set Variable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Set%20Test%20Variable"},"Set Test Variable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Set%20Suite%20Variable"},"Set Suite Variable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Set%20Global%20Variable"},"Set Global Variable"))),(0,n.kt)("p",null,"They can be used to either ",(0,n.kt)("strong",{parentName:"p"},"set a value")," of a variable or ",(0,n.kt)("strong",{parentName:"p"},"change the scope")," of a variable."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Test Cases ***\n\nTest Case 1\n    ${my_local_var}    Set Variable    Hello World\n    Log    ${my_local_var}    # Pass: Logs the value of the variable\n    Set Suite Variable    ${my_suite_var}    I'm a suite variable\n    Set Global Variable    ${my_global_var}    I'm a global variable\n\nTest Case 2\n    Log    ${my_local_var}    # Fails: Variable only exists in the scope of Test Case 1\n    Log    ${my_suite_var}    # Pass: Variable exists for the scope of the whole suite\n    Log    ${my_global_var}   # Pass: Variable exists for the scope of the whole test run\n\nTest Case 3\n    My Keyword\n    Log    ${my_keyword_var}    # Fails: Variable only exists in the scope of My Keyword\n    Log    ${my_test_var}    # Pass: Variable  exists in the scope of the test case\n\n*** Keywords ***\nMy Keyword\n    ${my_keyword_var}    Set Variable    Hello Keyword\n    Log    ${my_keyword_var}    # Pass: Logs the value of the variable\n    Set Test Variable    ${my_test_var}    I'm a test case variable   \n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Let me run it"),(0,n.kt)("iframe",{src:"https://robotframework.org/embed/?code-gh-url=https://github.com/MarketSquare/robotframeworkguides/tree/main/code-examples/standard_library/variable_scopes",width:"100%",height:"600"})),(0,n.kt)("h2",{id:"when-to-use--and--and--and-"},"When to use $ and @ and & and %?"),(0,n.kt)("p",null,"Variable Names consist of "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a variable type identifier (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"$"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"@"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"&"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"%"),")"),(0,n.kt)("li",{parentName:"ul"},"curly braces ",(0,n.kt)("inlineCode",{parentName:"li"},"{}")),(0,n.kt)("li",{parentName:"ul"},"a variable name (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"my_var"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"my_list"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"my_dict"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"my_var2"),")")),(0,n.kt)("p",null,"The variable type identifier is used to define the type of the variable."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$")," is used for scalar variables."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@")," is used for list variables."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"&")," is used for dictionary variables."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"%")," is used for environment variables.")),(0,n.kt)("p",null,"What is the difference between a scalar variable, a list variable and a dictionary?",(0,n.kt)("br",{parentName:"p"}),"\n","A scalar variable can only contain ",(0,n.kt)("strong",{parentName:"p"},"one value"),".",(0,n.kt)("br",{parentName:"p"}),"\n","A list variable can contain ",(0,n.kt)("strong",{parentName:"p"},"multiple values"),".",(0,n.kt)("br",{parentName:"p"}),"\n","A dictionary variable can contain ",(0,n.kt)("strong",{parentName:"p"},"multiple key-value pairs"),"."),(0,n.kt)("p",null,"But why can we access a list variable ",(0,n.kt)("inlineCode",{parentName:"p"},"my_list")," with the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"${my_list}")," and also with the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"@{my_list}"),"?"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"${my_list}")," accesses the whole list object ",(0,n.kt)("inlineCode",{parentName:"p"},"my_list"),". It is a container and holds all the items of the list.\nYou can use it to access the whole list variable ",(0,n.kt)("inlineCode",{parentName:"p"},"my_list")," or to access a specific item of the list with the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"${my_list}[index]"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@{my_list}")," accesses the items of the list variable ",(0,n.kt)("inlineCode",{parentName:"p"},"my_list"),". It is like the list variable ",(0,n.kt)("inlineCode",{parentName:"p"},"my_list")," is unpacked and all the items are available as individual variables."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-robotframework"},"*** Variables ***\n@{my_list}    Apple    Banana    Orange\n\n*** Test Cases ***\nTest Case 1\n    Log    ${my_list}   # Pass: Logs the whole list object\n    Log Many    @{my_list}   # Pass: Logs the items of the list object\n    Log Many    ${my_list}   # Pass: Logs the whole list object\n    Log List    ${my_list}   # Pass: Logs the whole list object\n    Log    ${my_list}[0]    # Pass: Logs the first item of the list object\n    Log    @{my_list}[0]    # Fail: @{my_list} is not a list object and does not have an index\n    Log    @{my_list}       # Fail: The second argument of the Log keyword `level` only allows the values `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR`, `NONE`.\n                            # The value `Banana` for the argument `level` is not allowed.\n    Log    ${my_list}[0]    ${my_list}[1]   ${my_list}[2]   # Fail: Same as above    \n    FOR    ${item}    IN    @{my_list}  # Pass: Iterates over the items of the list object\n        Log    ${item}                  # Pass: Logs the items of the list object   \n    END\n")),(0,n.kt)("p",null,"Whenever you want to access the container of a list variable, you have to use the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"${my_list}"),".",(0,n.kt)("br",{parentName:"p"}),"\n","When you want to break down the list variable into its items, you have to use the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"@{my_list}"),"."),(0,n.kt)("p",null,"It's like a beer crate with bottles inside.",(0,n.kt)("br",{parentName:"p"}),"\n","With the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"${beer_crate}")," you can access the whole beer crate.",(0,n.kt)("br",{parentName:"p"}),"\n","With the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"@{beer_crate}")," you get the bottles.",(0,n.kt)("br",{parentName:"p"}),"\n","With the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"${beer_crate}[index]")," you get a specific bottle inside the crate."))}b.isMDXComponent=!0}}]);
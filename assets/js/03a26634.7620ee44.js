"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[273],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,f=d["".concat(i,".").concat(c)]||d[c]||m[c]||s;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4581:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],l={},i="Parsing Results",u={unversionedId:"parsing_results",id:"parsing_results",title:"Parsing Results",description:"Robot Framework can create different output files after a test run.",source:"@site/docs/parsing_results.md",sourceDirName:".",slug:"/parsing_results",permalink:"/robotframeworkguides/parsing_results",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/parsing_results.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dealing with flaky tests",permalink:"/robotframeworkguides/flaky_tests"},next:{title:"Releasing your own Library",permalink:"/robotframeworkguides/releasing_your_own_libraries"}},p={},m=[{value:"Reading results using the RF API",id:"reading-results-using-the-rf-api",level:2},{value:"Getting result statistics",id:"getting-result-statistics",level:2},{value:"Robot Framework Report",id:"robot-framework-report",level:3},{value:"More information",id:"more-information",level:3}],d={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"parsing-results"},"Parsing Results"),(0,s.kt)("p",null,"Robot Framework can create different output files after a test run.  "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"output.xml")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"log.html")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"report.html")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"xunit.xml"))),(0,s.kt)("p",null,"Sometimes you want to parse your test results, e.g. because you want to transfer them to a different system (like a test management tool).",(0,s.kt)("br",{parentName:"p"}),"\n","Don't try to parse the .xml files using some python xml module.",(0,s.kt)("br",{parentName:"p"}),"\n","Instead, use the Robot Framework API which allows you to get details about the executed tests, keywords, their data and the results much easier.",(0,s.kt)("br",{parentName:"p"}),"\n","You can find the documentation for the results model ",(0,s.kt)("a",{parentName:"p",href:"https://robot-framework.readthedocs.io/en/stable/autodoc/robot.result.html?highlight=Resultvisitor#"},"here"),".\nEspecially the ",(0,s.kt)("a",{parentName:"p",href:"https://robot-framework.readthedocs.io/en/stable/autodoc/robot.result.html?highlight=Resultvisitor%20#module-robot.result.visitor"},"ResultVisitor")," will allow you to access and modify your results at different points in time, e.g. when "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"a test suite starts/ends"),(0,s.kt)("li",{parentName:"ul"},"a test case starts/ends"),(0,s.kt)("li",{parentName:"ul"},"a keyword starts/ends"),(0,s.kt)("li",{parentName:"ul"},"...  ")),(0,s.kt)("p",null,"Check the ",(0,s.kt)("a",{parentName:"p",href:"https://robot-framework.readthedocs.io/en/stable/autodoc/robot.result.html?highlight=Resultvisitor%20#module-robot.result.visitor"},"documentation")," for more possible entry points.",(0,s.kt)("br",{parentName:"p"}),"\n","While visiting the results, you will have full access to the Robot Framework ",(0,s.kt)("a",{parentName:"p",href:"https://robot-framework.readthedocs.io/en/stable/autodoc/robot.model.html#module-robot.model"},"Model")," and its objects.\nYou can easily read the status of a test or keyword, read its arguments or the elapsed execution time. Basically all data which is written into the ",(0,s.kt)("inlineCode",{parentName:"p"},"output.xml")," can be accessed via the model.  "),(0,s.kt)("h2",{id:"reading-results-using-the-rf-api"},"Reading results using the RF API"),(0,s.kt)("p",null,"Example which reads the execution time per test and sets the test status to failed,  in case the execution took longer than a defined value ",(0,s.kt)("inlineCode",{parentName:"p"},"max_seconds"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ExecutionTimeChecker.py"),"  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nfrom robot.api import ExecutionResult, ResultVisitor\n\n\nclass ExecutionTimeChecker(ResultVisitor):\n\n    def __init__(self, max_seconds):\n        self.max_milliseconds = max_seconds * 1000\n\n    def visit_test(self, test):\n        if test.status == 'PASS' and test.elapsedtime > self.max_milliseconds:\n            test.status = 'FAIL'\n            test.message = 'Test execution took too long.'\n\n\ndef check_tests(seconds, inpath, outpath=None):\n    result = ExecutionResult(inpath)\n    result.visit(ExecutionTimeChecker(float(seconds)))\n    result.save(outpath)\n\n\nif __name__ == '__main__':\n    try:\n        check_tests(*sys.argv[1:])\n    except TypeError:\n        print(__doc__)\n")),(0,s.kt)("p",null,"You can run the script from the terminal as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"python ExecutionTimeChecker.py 10 output.xml checked_output.xml\n")),(0,s.kt)("h2",{id:"getting-result-statistics"},"Getting result statistics"),(0,s.kt)("p",null,"Simple example to read number of passed and failed tests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from robot.api import ExecutionResult\nresult = ExecutionResult(\'output.xml\')\nstats = result.statistics\nprint(f"Number of Failed Tests: {stats.failed}")\nprint(f"Total number of Tests: {stats.passed}")\n')),(0,s.kt)("p",null,"You can also create a table in a markdown file ",(0,s.kt)("inlineCode",{parentName:"p"},"report.md"),"with the results."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from robot.api import ExecutionResult, ResultVisitor\nimport sys\n\nclass MyResultVisitor(ResultVisitor):\n    def __init__(self, markdown_file=\'report.md\'):\n        self.failed_tests = []\n        self.passed_tests = []\n        self.markdown_file = markdown_file\n\n    def visit_test(self, test):\n        if test.status == \'FAIL\':\n            self.failed_tests.append(test.name)\n        elif test.status == \'PASS\':\n            self.passed_tests.append(test.name)\n\n    def end_result(self, result):\n        # Create a new markdown file\n        with open(self.markdown_file, "w") as f:\n            f.write("# Robot Framework Report\\n")\n            f.write("|Test|Status|\\n")\n            f.write("|---|---|\\n")\n            for test in self.passed_tests:\n                f.write(f"|{test}|PASS|\\n")\n            for test in self.failed_tests:\n                f.write(f"|{test}|FAIL|\\n")\n                \nif __name__ == \'__main__\':\n    try:\n        output_file = sys.argv[1]\n    except IndexError:\n        output_file = "output.xml"\n    try:\n        markdown_file = sys.argv[2]\n    except IndexError:\n        markdown_file = "report.md"\n    result = ExecutionResult(output_file)\n    result.visit(MyResultVisitor())\n')),(0,s.kt)("p",null,"That's how the result will look like:"),(0,s.kt)("h3",{id:"robot-framework-report"},"Robot Framework Report"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Test"),(0,s.kt)("th",{parentName:"tr",align:null},"Status"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"My First Test Case"),(0,s.kt)("td",{parentName:"tr",align:null},"PASS")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"My Second Test Case As Keyword"),(0,s.kt)("td",{parentName:"tr",align:null},"PASS")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Some Other Test Case"),(0,s.kt)("td",{parentName:"tr",align:null},"PASS")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"A Failed Test Case"),(0,s.kt)("td",{parentName:"tr",align:null},"FAIL")))),(0,s.kt)("h3",{id:"more-information"},"More information"),(0,s.kt)("p",null,"Check the ",(0,s.kt)("a",{parentName:"p",href:"https://robot-framework.readthedocs.io/en/stable/autodoc/robot.result.html?highlight=Resultvisitor%20#module-robot.result.visitor"},"documentation")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5925],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6268:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"contribution",title:"Contribution Guide",description:"Contribution Guide",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},s=void 0,u={unversionedId:"community/contribution",id:"community/contribution",title:"Contribution Guide",description:"Contribution Guide",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/community/01-contribution.md",sourceDirName:"community",slug:"/community/contribution",permalink:"/en/docs/community/contribution",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/community/01-contribution.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"contribution",title:"Contribution Guide",description:"Contribution Guide",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u5f00\u6e90\u793e\u533a",permalink:"/en/docs/category/\u5f00\u6e90\u793e\u533a"},next:{title:"Documentation Guide",permalink:"/en/docs/community/documentation"}},c={},p=[{value:"Reportings Bug or Fixing Bugs",id:"reportings-bug-or-fixing-bugs",level:2},{value:"Adding new features",id:"adding-new-features",level:2},{value:"How to submit code",id:"how-to-submit-code",level:2},{value:"Conventional Commits",id:"conventional-commits",level:2},{value:"type",id:"type",level:3},{value:"Main",id:"main",level:4},{value:"Other",id:"other",level:4},{value:"scope",id:"scope",level:3},{value:"description",id:"description",level:3},{value:"body",id:"body",level:3},{value:"footer",id:"footer",level:3},{value:"examples",id:"examples",level:3},{value:"Only commit message",id:"only-commit-message",level:4},{value:"Attention",id:"attention",level:4},{value:"Full commit message",id:"full-commit-message",level:4},{value:"Release",id:"release",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The kratos community wants to be helped by a wide range of developers, so you'd like to take a few minutes to read this guide before you mention the problem or pull request."),(0,i.kt)("h2",{id:"reportings-bug-or-fixing-bugs"},"Reportings Bug or Fixing Bugs"),(0,i.kt)("p",null,"We use github issues to manage issues. If you want to submit , first make sure you've searched for existing issues, pull requests and read our ",(0,i.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/intro/faq"},"FAQ"),"."),(0,i.kt)("p",null,"When submitting a bug report, use the issue template we provide to clearly describe the problems encountered and how to reproduce, and if convenient it is best to provide a minimal reproduce repository."),(0,i.kt)("h2",{id:"adding-new-features"},"Adding new features"),(0,i.kt)("p",null,"In order to accurately distinguish whether the needs put forward by users are the needs or reasonable needs of most users, solicit opinions from the community through the proposal process, and the proposals adopted by the community will be realized as new feature.\nIn order to make the proposal process as simple as possible, the process includes three stages: proposal, feature and PR, in which proposal, feature is issue and PR is the specific function implementation.\nIn order to facilitate the community to correctly understand the requirements of the proposal, the proposal issue needs to describe the functional requirements and relevant references or literature in detail.\nWhen most community users agree with this proposal, they will create a feature issue associated with the proposal issue.\nThe feature issue needs to describe the implementation method and function demonstration in detail as a reference for the final function implementation.\nAfter the function is implemented, a merge request will be initiated to associate the proposal issue and feature issue.\nAfter the merge is completed, Close all issues."),(0,i.kt)("h2",{id:"how-to-submit-code"},"How to submit code"),(0,i.kt)("p",null,"If you've never submitted code on github, follow these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, please fork items to your github account"),(0,i.kt)("li",{parentName:"ul"},"Then create a new feature branch based on the main branch and name it features such as feature-log "),(0,i.kt)("li",{parentName:"ul"},"Write code"),(0,i.kt)("li",{parentName:"ul"},"Submit code to the far end branch"),(0,i.kt)("li",{parentName:"ul"},"Submit a PR request in github"),(0,i.kt)("li",{parentName:"ul"},"Wait for review and merge to the main branch")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note That when you submit a PR request, you first ensure that the code uses the correct coding specifications and that there are complete test cases, and that the information in the submission of the PR is best associated with the relevant issue to ease the workload of the auditor.")),(0,i.kt)("h2",{id:"conventional-commits"},"Conventional Commits"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"More: ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"Conventional Commits"))),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"There are the following types of commit:"),(0,i.kt)("h4",{id:"main"},"Main"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fix"),": A bug fix"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feat"),": A new feature"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deps"),": Changes external dependencies"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"break"),": Changes has break change")),(0,i.kt)("h4",{id:"other"},"Other"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"docs"),": Documentation only changes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (white-space, formatting, etc)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"test"),": Adding missing tests or correcting existing tests"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chore")," Daily work, examples, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ci"),": Changes to our CI configuration files and scripts")),(0,i.kt)("h3",{id:"scope"},"scope"),(0,i.kt)("p",null,"The following is the list of supported scopes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"transport"),(0,i.kt)("li",{parentName:"ul"},"examples"),(0,i.kt)("li",{parentName:"ul"},"middleware"),(0,i.kt)("li",{parentName:"ul"},"config"),(0,i.kt)("li",{parentName:"ul"},"cmd"),(0,i.kt)("li",{parentName:"ul"},"etc.")),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"The description contains a succinct description of the change"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),(0,i.kt)("li",{parentName:"ul"},"don't capitalize the first letter"),(0,i.kt)("li",{parentName:"ul"},"no dot (.) at the end")),(0,i.kt)("h3",{id:"body"},"body"),(0,i.kt)("p",null,"The body should include the motivation for the change and contrast this with previous behavior."),(0,i.kt)("h3",{id:"footer"},"footer"),(0,i.kt)("p",null,"The footer should contain any information about ",(0,i.kt)("strong",{parentName:"p"},"Breaking Changes")," and is also the place to reference GitHub issues that this commit Closes."),(0,i.kt)("h3",{id:"examples"},"examples"),(0,i.kt)("h4",{id:"only-commit-message"},"Only commit message"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fix: The log debug level should be -1  \n")),(0,i.kt)("h4",{id:"attention"},"Attention"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"refactor!(transport/http): replacement underlying implementation\n")),(0,i.kt)("h4",{id:"full-commit-message"},"Full commit message"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fix(log): [BREAKING-CHANGE] unable to meet the requirement of log Library\n\nExplain the reason, purpose, realization method, etc.\n\nClose #777\nDoc change on doc/#111\nBREAKING CHANGE:\n  Breaks log.info api, log.log should be used instead\n")),(0,i.kt)("h2",{id:"release"},"Release"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"kratos changelog dev")," to generate a change log during."),(0,i.kt)("p",null,"The following is the list of supported types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Breaking Change"),(0,i.kt)("li",{parentName:"ul"},"Dependencies"),(0,i.kt)("li",{parentName:"ul"},"Bug Fixes"),(0,i.kt)("li",{parentName:"ul"},"Others")))}d.isMDXComponent=!0}}]);
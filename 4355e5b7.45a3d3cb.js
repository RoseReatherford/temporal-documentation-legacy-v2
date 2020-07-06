(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(7),a=(n(0),n(357)),i={id:"use-cases-cicd",title:"CI/CD",sidebar_label:"CI/CD"},c={id:"use-cases-cicd",isDocsHomePage:!1,title:"CI/CD",description:"Implementing CI/CD pipelines and deployment of applications to containers or virtual or physical machines is a non-trivial process.",source:"@site/docs/use-cases-cicd.md",permalink:"/docs/next/use-cases-cicd",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/use-cases-cicd.md",version:"next",sidebar_label:"CI/CD",sidebar:"docs",previous:{title:"Infrastructure Provisioning",permalink:"/docs/next/use-cases-provisioning"},next:{title:"Operational Management",permalink:"/docs/next/use-cases-operational-management"},latestVersionMainDocPermalink:"/docs/overview"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Implementing CI/CD pipelines and deployment of applications to containers or virtual or physical machines is a non-trivial process.\nIts business logic has to deal with complex requirements around rolling upgrades, canary deployments, and rollbacks.\nTemporal is a perfect platform for building a deployment solution because it provides all the necessary guarantees and abstractions\nallowing developers to focus on the business logic."),Object(a.b)("p",null,"Example production systems:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Uber internal deployment infrastructure"),Object(a.b)("li",{parentName:"ul"},"Update push to IoT devices")))}p.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(f,c({ref:t},l,{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
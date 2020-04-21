(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{163:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(1),o=t(6),a=(t(0),t(183)),i={id:"go-workers",title:"Worker Service"},c={id:"go-workers",title:"Worker Service",description:"A worker or *worker service* is a service that hosts the workflow and activity implementations. The worker polls the *Temporal service* for tasks, performs those tasks, and communicates task execution results back to the *Temporal service*. Worker services are developed, deployed, and operated by Temporal customers.",source:"@site/docs/go-workers.md",permalink:"/docs/go-workers",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/go-workers.md",sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/go-quick-start"},next:{title:"Creating Workflows",permalink:"/docs/go-create-workflows"}},l=[],s={rightToc:l};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A worker or ",Object(a.b)("em",{parentName:"p"},"worker service")," is a service that hosts the workflow and activity implementations. The worker polls the ",Object(a.b)("em",{parentName:"p"},"Temporal service")," for tasks, performs those tasks, and communicates task execution results back to the ",Object(a.b)("em",{parentName:"p"},"Temporal service"),". Worker services are developed, deployed, and operated by Temporal customers."),Object(a.b)("p",null,"You can run a Temporal worker in a new or an existing service. Use the framework APIs to start the Temporal worker and link in all activity and workflow implementations that you require the service to execute."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "os"\n    "os/signal"\n\n    "github.com/uber-go/tally"\n    "go.uber.org/zap"\n\n    "go.temporal.io/temporal/client"\n    "go.temporal.io/temporal/worker"\n    "go.temporal.io/temporal/workflow"\n)\n\nvar (\n    Tasklist  = "samples_tl"\n)\n\nfunc main() {\n    logger, err := zap.NewDevelopment()\n    if err != nil {\n        panic(err)\n    }\n\n    // The client and worker are heavyweight objects that should be created once per process.\n    serviceClient, err := client.NewClient(client.Options{\n        HostPort: client.DefaultHostPort,\n    })\n    if err != nil {\n        logger.Fatal("Unable to create client", zap.Error(err))\n    }\n    defer func() { _ = serviceClient.CloseConnection() }()\n\n    worker := worker.New(serviceClient, Tasklist, worker.Options{\n        Logger: logger,\n    })\n\n    worker.RegisterWorkflow(MyWorkflow)\n    worker.RegisterActivity(MyActivity)\n\n    err = worker.Start()\n    if err != nil {\n        logger.Fatal("Unable to start worker", zap.Error(err))\n    }\n    defer worker.Stop()\n\n    // The workers are supposed to be long running process that should not exit.\n    waitCtrlC()\n}\n\nfunc waitCtrlC() {\n    ch := make(chan os.Signal, 1)\n    signal.Notify(ch, os.Interrupt)\n    <-ch\n}\n\nfunc MyWorkflow(context workflow.Context) error {\n    return nil\n}\n\nfunc MyActivity() error {\n    return nil\n}\n')))}p.isMDXComponent=!0},183:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return w}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},u=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=n,w=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return t?o.a.createElement(w,c({ref:r},s,{components:t})):o.a.createElement(w,c({ref:r},s))}));function w(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);
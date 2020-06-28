(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(0),n(347)),i={id:"go-queries",title:"Queries"},c={id:"version-0.26.0/go-queries",title:"Queries",description:"If a workflow execution has been stuck at a state for longer than an expected period of time, you",source:"@site/versioned_docs/version-0.26.0/go-queries.md",permalink:"/docs/go-queries",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.26.0/go-queries.md",version:"0.26.0",sidebar:"version-0.26.0/docs",previous:{title:"SideEffect",permalink:"/docs/go-side-effect"},next:{title:"Asynchronous Activity Completion",permalink:"/docs/go-activity-async-completion"}},l=[{value:"Consistent Query",id:"consistent-query",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If a workflow execution has been stuck at a state for longer than an expected period of time, you\nmight want to query the current call stack. You can use the Temporal CLI to perform this query. For\nexample:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"tctl --namespace samples-namespace workflow query -w my_workflow_id -r my_run_id -qt __stack_trace")),Object(a.b)("p",null,"This command uses ",Object(a.b)("inlineCode",{parentName:"p"},"__stack_trace"),", which is a built-in query type supported by the Temporal client\nlibrary. You can add custom query types to handle queries such as querying the current state of a\nworkflow, or querying how many activities the workflow has completed. To do this, you need to set\nup a query handler using ",Object(a.b)("inlineCode",{parentName:"p"},"workflow.SetQueryHandler"),"."),Object(a.b)("p",null,"The handler must be a function that returns two values:\n1. A serializable result\n2. An error"),Object(a.b)("p",null,"The handler function can receive any number of input parameters, but all input parameters must be\nserializable. The following sample code sets up a query handler that handles the query type of\n",Object(a.b)("inlineCode",{parentName:"p"},"current_state"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'func MyWorkflow(ctx workflow.Context, input string) error {\n  currentState := "started" // This could be any serializable struct.\n  err := workflow.SetQueryHandler(ctx, "current_state", func() (string, error) {\n    return currentState, nil\n  })\n  if err != nil {\n    currentState = "failed to register query handler"\n    return err\n  }\n  // Your normal workflow code begins here, and you update the currentState as the code makes progress.\n  currentState = "waiting timer"\n  err = NewTimer(ctx, time.Hour).Get(ctx, nil)\n  if err != nil {\n    currentState = "timer failed"\n    return err\n  }\n\n  currentState = "waiting activity"\n  ctx = WithActivityOptions(ctx, myActivityOptions)\n  err = ExecuteActivity(ctx, MyActivity, "my_input").Get(ctx, nil)\n  if err != nil {\n    currentState = "activity failed"\n    return err\n  }\n  currentState = "done"\n  return nil\n}\n')),Object(a.b)("p",null,"You can now query ",Object(a.b)("inlineCode",{parentName:"p"},"current_state")," by using the CLI:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"tctl --namespace samples-namespace workflow query -w my_workflow_id -r my_run_id -qt current_state")),Object(a.b)("p",null,"You can also issue a query from code using the ",Object(a.b)("inlineCode",{parentName:"p"},"QueryWorkflow()")," API on a Temporal client object."),Object(a.b)("h2",{id:"consistent-query"},"Consistent Query"),Object(a.b)("p",null,"Query has two consistency levels, eventual and strong. Consider if you were to signal a workflow and then\nimmediately query the workflow:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"tctl --namespace samples-namespace workflow signal -w my_workflow_id -r my_run_id -n signal_name -if ./input.json")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"tctl --namespace samples-namespace workflow query -w my_workflow_id -r my_run_id -qt current_state")),Object(a.b)("p",null,"In this example if signal were to change workflow state, query may or may not see that state update reflected\nin the query result. This is what it means for query to be eventually consistent."),Object(a.b)("p",null,"Query has another consistency level called strong consistency. A strongly consistent query is guaranteed\nto be based on workflow state which includes all events that came before the query was issued. An event\nis considered to have come before a query if the call creating the external event returned success before\nthe query was issued. External events which are created while the query is outstanding may or may not\nbe reflected in the workflow state the query result is based on."),Object(a.b)("p",null,"In order to run consistent query through the cli do the following:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"tctl --namespace samples-namespace workflow query -w my_workflow_id -r my_run_id -qt current_state --qcl strong")),Object(a.b)("p",null,"In order to run a query using the go client do the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"resp, err := client.QueryWorkflowWithOptions(ctx, &client.QueryWorkflowWithOptionsRequest{\n        WorkflowId:            workflowId,\n        RunId:                 runId,\n        QueryType:             queryType,\n        QueryConsistencyLevel: shared.QueryConsistencyLevelStrong.Ptr(),\n})\n")),Object(a.b)("p",null,"When using strongly consistent query you should expect higher latency than eventually consistent query."))}s.isMDXComponent=!0},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||y[d]||a;return n?o.a.createElement(b,c({ref:t},u,{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
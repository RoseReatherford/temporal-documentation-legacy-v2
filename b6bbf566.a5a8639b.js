(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{277:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var i=a(1),n=a(6),o=(a(0),a(347)),r={id:"learn-glossary",title:"Glossary"},s={id:"version-0.23.1/learn-glossary",title:"Glossary",description:"This glossary contains terms that are used with the Temporal product.",source:"@site/versioned_docs/version-0.23.1/learn-glossary.md",permalink:"/docs/0.23.1/learn-glossary",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.23.1/learn-glossary.md",version:"0.23.1",sidebar:"version-0.23.1/docs",previous:{title:"Big Data and ML",permalink:"/docs/0.23.1/use-cases-big-ml"},next:{title:"Fault-Oblivious Stateful Workflow Code",permalink:"/docs/0.23.1/learn-workflows"}},c=[{value:"Activity",id:"activity",children:[]},{value:"Activity Task",id:"activity-task",children:[]},{value:"Activity Task List",id:"activity-task-list",children:[]},{value:"Activity Worker",id:"activity-worker",children:[]},{value:"Archival",id:"archival",children:[]},{value:"CLI",id:"cli",children:[]},{value:"Client Stub",id:"client-stub",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Decision Task",id:"decision-task",children:[]},{value:"Decision Task List",id:"decision-task-list",children:[]},{value:"Event",id:"event",children:[]},{value:"Event History",id:"event-history",children:[]},{value:"Local Activity",id:"local-activity",children:[]},{value:"Namespace",id:"namespace",children:[]},{value:"Query",id:"query",children:[]},{value:"Run Id",id:"run-id",children:[]},{value:"Signal",id:"signal",children:[]},{value:"Task",id:"task",children:[]},{value:"Task List",id:"task-list",children:[]},{value:"Task Token",id:"task-token",children:[]},{value:"Worker",id:"worker",children:[]},{value:"Workflow",id:"workflow",children:[]},{value:"Workflow Execution",id:"workflow-execution",children:[]},{value:"Workflow Id",id:"workflow-id",children:[]},{value:"Workflow Task",id:"workflow-task",children:[]},{value:"Workflow Worker",id:"workflow-worker",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This glossary contains terms that are used with the Temporal product."),Object(o.b)("h3",{id:"activity"},"Activity"),Object(o.b)("p",null,"A business-level function that implements your application logic such as calling\na service or transcoding a media file. An activity usually implements a single\nwell-defined action; it can be short or long running. An activity can be implemented\nas a synchronous method or fully asynchronously involving multiple processes.\nAn activity can be retried indefinitely according to the provided exponential retry policy.\nIf for any reason an activity is not completed within the specified timeout, an error is reported to the workflow and the workflow decides how to handle it. There is no limit on potential activity\nduration."),Object(o.b)("h3",{id:"activity-task"},"Activity Task"),Object(o.b)("p",null,"A task that contains an activity invocation information that is delivered to an ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#activity-worker"}),"activity worker")," through and an  ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#activity-task-list"}),"activity task list"),". An activity worker upon receiving activity task executes a correponding ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#activity"}),"activity")),Object(o.b)("h3",{id:"activity-task-list"},"Activity Task List"),Object(o.b)("p",null,"Task list that is used to deliver ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#activity-task"}),"activity tasks")," to ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#activity-worker"}),"activity workers")),Object(o.b)("h3",{id:"activity-worker"},"Activity Worker"),Object(o.b)("p",null,"An object that is executed in the client application and receives ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#activity-task"}),"activity tasks")," from an  ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#activity-task-list"}),"activity task list")," it is subscribed to. Once task is received it invokes a correspondent activity."),Object(o.b)("h3",{id:"archival"},"Archival"),Object(o.b)("p",null,"Archival is a feature that automatically moves ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#event-history"}),"histories")," from persistence to a blobstore after\nthe workflow retention period. The purpose of archival is to be able to keep histories as long as needed\nwhile not overwhelming the persistence store. There are two reasons you may want\nto keep the histories after the retention period has passed:\n1. ",Object(o.b)("strong",{parentName:"p"},"Compliance:")," For legal reasons, histories may need to be stored for a long period of time.\n2. ",Object(o.b)("strong",{parentName:"p"},"Debugging:")," Old histories can still be accessed for debugging."),Object(o.b)("h3",{id:"cli"},"CLI"),Object(o.b)("p",null,"Temporal command-line interface."),Object(o.b)("h3",{id:"client-stub"},"Client Stub"),Object(o.b)("p",null,"A client-side proxy used to make remote invocations to an entity that it\nrepresents. For example, to start a workflow, a stub object that represents\nthis workflow is created through a special API. Then this stub is used to start,\nquery, or signal the corresponding workflow."),Object(o.b)("p",null,"The Go client doesn't use this."),Object(o.b)("h3",{id:"decision"},"Decision"),Object(o.b)("p",null,"Any action taken by the workflow durable function is called a decision. For example:\nscheduling an activity, canceling a child workflow, or starting a timer. A ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#decision-task"}),"decision task")," contains an optional list of decisions. Every decision is recorded in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#event-history"}),"event history")," as an ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#event"}),"event"),"."),Object(o.b)("h3",{id:"decision-task"},"Decision Task"),Object(o.b)("p",null,"Every time a new external event that might affect a workflow state is recorded, a decision task that contains it is added to a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#decision-task-list"}),"decision-task-list")," and then picked up by a workflow worker. After the new event is handled, the decision task is completed with a list of ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#decision"}),"decisions"),".\nNote that handling of a decision task is usually very fast and is not related to duration\nof operations that the workflow invokes."),Object(o.b)("h3",{id:"decision-task-list"},"Decision Task List"),Object(o.b)("p",null,"Task list that is used to deliver ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#decision-task"}),"decision tasks")," to ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#workflow-worker"}),"workflow workers")),Object(o.b)("h3",{id:"event"},"Event"),Object(o.b)("p",null,"An indivisible operation performed by your application. For example,\nactivity_task_started, task_failed, or timer_canceled. Events are recorded in the event history."),Object(o.b)("h3",{id:"event-history"},"Event History"),Object(o.b)("p",null,"An append log of events for your application. History is durably persisted\nby the Temporal service, enabling seamless recovery of your application state\nfrom crashes or failures. It also serves as an audit log for debugging."),Object(o.b)("h3",{id:"local-activity"},"Local Activity"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/learn-activities#local-activities"}),"local activity")," is an activity that is invoked directly in the same process by a workflow code. It consumes much less resources than a normal activity, but imposes a lot of limitations like low duration and lack of rate limiting."),Object(o.b)("h3",{id:"namespace"},"Namespace"),Object(o.b)("p",null,"Temporal is backed by a multi tenant service. The unit of isolation is called a ",Object(o.b)("strong",{parentName:"p"},"namespace"),". Each namespace acts as a namespace for task list names as well as workflow Ids. For example, when a workflow is started, it is started in a\nspecific namespace. Temporal guarantees a unique workflow Id within a namespace, and\nsupports running workflow executions to use the same workflow Id if they are in\ndifferent namespaces. Various configuration options like retention period or archival destination are configured per namespace as well through a special CRUD API or through the Temporal CLI. In the multi-cluster deployment, namespace is a unit of fail-over. Each namespace can only be active on a single Temporal cluster at a time. However, different namespaces can be active in different clusters and can fail-over independently."),Object(o.b)("h3",{id:"query"},"Query"),Object(o.b)("p",null,"A synchronous (from the caller's point of view) operation that is used to\nreport a workflow state. Note that a query is inherently read only and cannot\naffect a workflow state."),Object(o.b)("h3",{id:"run-id"},"Run Id"),Object(o.b)("p",null,"A UUID that a Temporal service assigns to each workflow run. If allowed by\na configured policy, you might be able to re-execute a workflow, after it has\nclosed or failed, with the same ",Object(o.b)("em",{parentName:"p"},"Workflow Id"),". Each such re-execution is called\na run. ",Object(o.b)("em",{parentName:"p"},"Run Id")," is used to uniquely identify a run even if it shares a ",Object(o.b)("em",{parentName:"p"},"Workflow Id"),"\nwith others."),Object(o.b)("h3",{id:"signal"},"Signal"),Object(o.b)("p",null,"An external asynchronous request to a workflow. It can be used to deliver\nnotifications or updates to a running workflow at any point in its existence."),Object(o.b)("h3",{id:"task"},"Task"),Object(o.b)("p",null,"The context needed to execute a specific activity or workflow state transition.\nThere are two types of tasks: an ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#activity-task"}),"Activity task")," and a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#decision-task"}),"Decision task"),"\n(aka workflow task). Note that a single activity execution corresponds to a single activity task,\nwhile a workflow execution employs multiple decision tasks."),Object(o.b)("h3",{id:"task-list"},"Task List"),Object(o.b)("p",null,"Common name for ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#activity-task-list"}),"activity task lists")," and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#decision-task-list"}),"decision task lists")),Object(o.b)("h3",{id:"task-token"},"Task Token"),Object(o.b)("p",null,"A unique correlation Id for a Temporal activity. Activity completion calls take either task token\nor Namespace, WorkflowId, ActivityId arguments."),Object(o.b)("h3",{id:"worker"},"Worker"),Object(o.b)("p",null,"Also known as a ",Object(o.b)("em",{parentName:"p"},"worker service"),". A service that hosts the workflow and\nactivity implementations. The worker polls the Temporal service for tasks, performs\nthose tasks, and communicates task execution results back to the Temporal service.\nWorker services are developed, deployed, and operated by Temporal customers."),Object(o.b)("h3",{id:"workflow"},"Workflow"),Object(o.b)("p",null,"A fault-oblivious stateful function that orchestrates activities. A ",Object(o.b)("em",{parentName:"p"},"Workflow")," has full control over\nwhich activities are executed, and in which order. A ",Object(o.b)("em",{parentName:"p"},"Workflow")," must not affect\nthe external world directly, only through activities. What makes workflow code\na ",Object(o.b)("em",{parentName:"p"},"Workflow")," is that its state is preserved by Temporal. Therefore any failure\nof a worker process that hosts the workflow code does not affect the workflow\nexecution. The ",Object(o.b)("em",{parentName:"p"},"Workflow")," continues as if these failures did not happen. At the\nsame time, activities can fail any moment for any reason. Because workflow code\nis fully fault-oblivious, it is guaranteed to get notifications about activity\nfailures or timeouts and act accordingly. There is no limit on potential workflow\nduration."),Object(o.b)("h3",{id:"workflow-execution"},"Workflow Execution"),Object(o.b)("p",null,"An instance of a ",Object(o.b)("em",{parentName:"p"},"Workflow"),". The instance can be in the process of executing\nor it could have already completed execution."),Object(o.b)("h3",{id:"workflow-id"},"Workflow Id"),Object(o.b)("p",null,"A unique identifier for a ",Object(o.b)("em",{parentName:"p"},"Workflow Execution"),". Temporal guarantees the\nuniqueness of an Id within a namespace. An attempt to start a ",Object(o.b)("em",{parentName:"p"},"Workflow")," with a\nduplicate Id results in an ",Object(o.b)("strong",{parentName:"p"},"already started")," error."),Object(o.b)("h3",{id:"workflow-task"},"Workflow Task"),Object(o.b)("p",null,"Synonym of the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#decision-task"}),"Decision Task"),"."),Object(o.b)("h3",{id:"workflow-worker"},"Workflow Worker"),Object(o.b)("p",null,"An object that is executed in the client application and receives ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#decision-task"}),"decision tasks")," from an  ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#decision-task-list"}),"decision task list")," it is subscribed to. Once task is received it is handled by a correponding workflow."))}d.isMDXComponent=!0},347:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,h=p["".concat(r,".").concat(u)]||p[u]||b[u]||o;return a?n.a.createElement(h,s({ref:t},l,{components:a})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
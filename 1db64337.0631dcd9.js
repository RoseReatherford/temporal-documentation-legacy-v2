(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{115:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return d}));var o=t(1),r=t(6),n=(t(0),t(183)),i=t(195),s=t.n(i),l={id:"overview",title:"Overview",sidebar_label:"Overview",description:"This guide will help you build your own resilient applications using Temporal Workflow as Code\u2122"},p={id:"overview",title:"Overview",description:"This guide will help you build your own resilient applications using Temporal Workflow as Code\u2122",source:"@site/docs/overview.md",permalink:"/docs/overview",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/overview.md",sidebar_label:"Overview",sidebar:"docs",next:{title:"MIT License",permalink:"/docs/license"}},c=[],b={rightToc:c};function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"A large number of use cases span beyond a single request-reply, require tracking\nof a complex state, respond to asynchronous events, and communicate to external unreliable dependencies.\nThe usual approach to building such applications is a hodgepodge of stateless services,\ndatabases, cron jobs, and queuing systems. This negatively impacts the developer productivity as most of the code is\ndedicated to plumbing, obscuring the actual business logic behind a myriad of low-level details. Such systems frequently have availability problems as it is hard to keep all the components healthy."),Object(n.b)("p",null,"The Temporal solution is a ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/learn-workflows"}),Object(n.b)("em",{parentName:"a"},"fault-oblivious stateful")," programming model")," that obscures most of the complexities of building scalable distributed applications. In essence, Temporal provides a durable virtual memory that is not\nlinked to a specific process, and preserves the full application state, including function stacks, with local variables across all sorts of host and software failures.\nThis allows you to write code using the full power of a programming language while Temporal takes care of durability, availability, and scalability of the application."),Object(n.b)("p",null,"Temporal consists of a programming framework (or client library) and a managed service (or backend).\nThe framework enables developers to author and coordinate tasks in familiar languages\n(",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-go-sdk/"}),"Go")," and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-java-sdk"}),"Java"),"\nare supported today with some projects in ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/firdaus/cadence-python"}),"Python")," and\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/nforgeio/neonKUBE/tree/master/Lib/Neon.Cadence"}),"C#"),"\nvia a ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/nforgeio/neonKUBE/tree/master/Go/src/github.com/loopieio/cadence-proxy"}),"proxy"),"\nin development)."),Object(n.b)("p",null,"The framework enables developers to author fault-oblivious code in familiar languages.\n(",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-go-sdk/"}),"Go")," and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-java-sdk"}),"Java"),"\nare in production. ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/firdaus/cadence-python"}),"Python")," and\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/nforgeio/neonKUBE/tree/master/Lib/Neon.Cadence"}),"C#")," are under development)."),Object(n.b)("p",null,"The backend service is stateless and relies on a persistent store. Currently, Cassandra and MySQL stores\nare supported. An adapter to any other database that provides multi-row single shard transactions\ncan be added. There are different service deployment models. At Uber, our team operates multitenant clusters\nthat are shared by hundreds of applications."),Object(n.b)("p",null,"Watch Maxim's talk from the Uber Open Summit for an introduction to the Temporal programming model and value proposition."),Object(n.b)(s.a,{url:"https://www.youtube.com/watch?v=llmsBGKOuWI",mdxType:"ReactPlayer"}),Object(n.b)("p",null,"The GitHub repo for the Temporal server is ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal"}),"temporalio/temporal"),". The docker\nimage for the Temporal server is available on Docker Hub at\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/r/temporalio/server"}),"temporalio/server"),"."))}d.isMDXComponent=!0}}]);
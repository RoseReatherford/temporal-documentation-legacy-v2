(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{227:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var r=a(1),n=a(6),l=(a(0),a(347)),o={id:"learn-workflow-filtering",title:"Filtering Workflows"},i={id:"learn-workflow-filtering",title:"Filtering Workflows",description:"Temporal supports creating workflows with customized key-value pairs, updating the information within the workflow code, and then listing/searching workflows with a SQL-like query. For example, you can create workflows with keys `city` and `age`, then search all workflows with `city = seattle and age > 22`.",source:"@site/docs/learn-workflow-filtering.md",permalink:"/docs/next/learn-workflow-filtering",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/docs/learn-workflow-filtering.md",version:"next",sidebar:"docs",previous:{title:"Cross-DC Replication",permalink:"/docs/next/learn-cross-dc-replication"},next:{title:"Command Line Interface",permalink:"/docs/next/learn-cli"}},c=[{value:"Memo vs Search Attributes",id:"memo-vs-search-attributes",children:[]},{value:"Search Attributes (Go Client Usage)",id:"search-attributes-go-client-usage",children:[{value:"Allow Listing Search Attributes",id:"allow-listing-search-attributes",children:[]},{value:"Value Types",id:"value-types",children:[]},{value:"Limit",id:"limit",children:[]},{value:"Upsert Search Attributes in Workflow",id:"upsert-search-attributes-in-workflow",children:[]},{value:"ContinueAsNew and Cron",id:"continueasnew-and-cron",children:[]}]},{value:"Query Capabilities",id:"query-capabilities",children:[{value:"Supported Operators",id:"supported-operators",children:[]},{value:"Default Attributes",id:"default-attributes",children:[]},{value:"General Notes About Queries",id:"general-notes-about-queries",children:[]}]},{value:"Tools Support",id:"tools-support",children:[{value:"CLI",id:"cli",children:[]},{value:"Web UI Support",id:"web-ui-support",children:[]}]},{value:"Local Testing",id:"local-testing",children:[]}],b={rightToc:c};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Temporal supports creating workflows with customized key-value pairs, updating the information within the workflow code, and then listing/searching workflows with a SQL-like query. For example, you can create workflows with keys ",Object(l.b)("inlineCode",{parentName:"p"},"city")," and ",Object(l.b)("inlineCode",{parentName:"p"},"age"),", then search all workflows with ",Object(l.b)("inlineCode",{parentName:"p"},"city = seattle and age > 22"),"."),Object(l.b)("p",null,"Also note that normal workflow properties like start time and workflow type can be queried as well. For example, the following query could be specified when ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/learn-cli#list-closed-or-open-workflow-executions"}),"listing workflows from the CLI")," or using the list APIs (",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/client#Client"}),"Go"),", ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.6.0/com/uber/cadence/WorkflowService.Iface.html#ListWorkflowExecutions-com.uber.cadence.ListWorkflowExecutionsRequest-"}),"Java"),"):"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),'WorkflowType = "main.Workflow" and Status != 0 and (StartTime > "2019-06-07T16:46:34-08:00" or CloseTime > "2019-06-07T16:46:34-08:00" order by StartTime desc)\n')),Object(l.b)("h2",{id:"memo-vs-search-attributes"},"Memo vs Search Attributes"),Object(l.b)("p",null,"Temporal offers two methods for creating workflows with key-value pairs: memo and search attributes. Memo can only be provided on workflow start. Also, memo data are not indexed, and are therefore not searchable. Memo data are visible when listing workflows using the list APIs. Search attributes data are indexed so you can search workflows by querying on these attributes. However, search attributes require the use of Elasticsearch."),Object(l.b)("p",null,"Memo and search attributes are available in the Go client in ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#StartWorkflowOptions"}),"StartWorkflowOptions"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"type StartWorkflowOptions struct {\n    // ...\n\n    // Memo - Optional non-indexed info that will be shown in list workflow.\n    Memo map[string]interface{}\n\n    // SearchAttributes - Optional indexed info that can be used in query of List/Scan/Count workflow APIs (only\n    // supported when Temporal server is using Elasticsearch). The key and value type must be registered on Temporal server side.\n    // Use GetSearchAttributes API to get valid key and corresponding value type.\n    SearchAttributes map[string]interface{}\n}\n")),Object(l.b)("p",null,"In the Java client, the ",Object(l.b)("em",{parentName:"p"},"WorkflowOptions.Builder")," has similar methods for ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.6.0/com/uber/cadence/client/WorkflowOptions.Builder.html#setMemo-java.util.Map-"}),"memo")," and ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.6.0/com/uber/cadence/client/WorkflowOptions.Builder.html#setSearchAttributes-java.util.Map-"}),"search attributes"),"."),Object(l.b)("p",null,"Some important distinctions between memo and search attributes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Memo can support all data types because it is not indexed. Search attributes only support basic data types (including String, Int, Float, Bool, Datetime) because it is indexed by Elasticsearch."),Object(l.b)("li",{parentName:"ul"},"Memo does not restrict on key names. Search attributes require that keys are allowlisted before using them because Elasticsearch has a limit on indexed keys."),Object(l.b)("li",{parentName:"ul"},"Memo doesn't require Temporal clusters to depend on Elasticsearch while search attributes only works with Elasticsearch.")),Object(l.b)("h2",{id:"search-attributes-go-client-usage"},"Search Attributes (Go Client Usage)"),Object(l.b)("p",null,"When using the Temporal Go client, provide key-value pairs as SearchAttributes in ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#StartWorkflowOptions"}),"StartWorkflowOptions"),"."),Object(l.b)("p",null,"SearchAttributes is ",Object(l.b)("inlineCode",{parentName:"p"},"map[string]interface{}")," where the keys need to be allowlisted so that Temporal knows the attribute key name and value type. The value provided in the map must be the same type as registered."),Object(l.b)("h3",{id:"allow-listing-search-attributes"},"Allow Listing Search Attributes"),Object(l.b)("p",null,"Start by querying the list of search attributes using the CLI:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ tctl --namespace samples-namespace cl get-search-attr\n+---------------------+------------+\n|         KEY         | VALUE TYPE |\n+---------------------+------------+\n| Status              | INT        |\n| CloseTime           | INT        |\n| CustomBoolField     | DOUBLE     |\n| CustomDatetimeField | DATETIME   |\n| CustomNamespace     | KEYWORD    |\n| CustomDoubleField   | BOOL       |\n| CustomIntField      | INT        |\n| CustomKeywordField  | KEYWORD    |\n| CustomStringField   | STRING     |\n| NamespaceId         | KEYWORD    |\n| ExecutionTime       | INT        |\n| HistoryLength       | INT        |\n| RunId               | KEYWORD    |\n| StartTime           | INT        |\n| WorkflowId          | KEYWORD    |\n| WorkflowType        | KEYWORD    |\n+---------------------+------------+\n")),Object(l.b)("p",null,"Use the admin CLI to add a new search attribute:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tctl --namespace samples-namespace adm cl asa --search_attr_key NewKey --search_attr_type 1\n")),Object(l.b)("p",null,"The numbers for the attribute types map as follows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"0 = String"),Object(l.b)("li",{parentName:"ul"},"1 = Keyword"),Object(l.b)("li",{parentName:"ul"},"2 = Int"),Object(l.b)("li",{parentName:"ul"},"3 = Double"),Object(l.b)("li",{parentName:"ul"},"4 = Bool"),Object(l.b)("li",{parentName:"ul"},"5 = DateTime")),Object(l.b)("h4",{id:"keyword-vs-string"},"Keyword vs String"),Object(l.b)("p",null,"Note that ",Object(l.b)("strong",{parentName:"p"},"Keyword")," and ",Object(l.b)("strong",{parentName:"p"},"String")," are concepts taken from Elasticsearch. Each word in a ",Object(l.b)("strong",{parentName:"p"},"String")," is considered a searchable keyword. For a UUID, that can be problematic as Elasticsearch will index each portion of the UUID separately. To have the whole string considered as a searchable keyword, use the ",Object(l.b)("strong",{parentName:"p"},"Keyword")," type."),Object(l.b)("p",null,'For example, key RunId with value "2dd29ab7-2dd8-4668-83e0-89cae261cfb1"'),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"as a ",Object(l.b)("strong",{parentName:"li"},"Keyword"),' will only be matched by RunId = "2dd29ab7-2dd8-4668-83e0-89cae261cfb1" (or in the future with ',Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/uber/cadence/issues/1137"}),"regular expressions"),")"),Object(l.b)("li",{parentName:"ul"},"as a ",Object(l.b)("strong",{parentName:"li"},"String"),' will be matched by RunId = "2dd8", which may cause unwanted matches')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," String type can not be used in Order By query."),Object(l.b)("p",null,"There are some pre-allowlisted search attributes that are handy for testing:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CustomKeywordField"),Object(l.b)("li",{parentName:"ul"},"CustomIntField"),Object(l.b)("li",{parentName:"ul"},"CustomDoubleField"),Object(l.b)("li",{parentName:"ul"},"CustomBoolField"),Object(l.b)("li",{parentName:"ul"},"CustomDatetimeField"),Object(l.b)("li",{parentName:"ul"},"CustomStringField")),Object(l.b)("p",null,"Their types are indicated in their names."),Object(l.b)("h3",{id:"value-types"},"Value Types"),Object(l.b)("p",null,"Here are the Search Attribute value types and their correspondent Golang types:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Keyword = string"),Object(l.b)("li",{parentName:"ul"},"Int = int64"),Object(l.b)("li",{parentName:"ul"},"Double = float64"),Object(l.b)("li",{parentName:"ul"},"Bool = bool"),Object(l.b)("li",{parentName:"ul"},"Datetime = time.Time"),Object(l.b)("li",{parentName:"ul"},"String = string")),Object(l.b)("h3",{id:"limit"},"Limit"),Object(l.b)("p",null,"We recommend limiting the number of Elasticsearch indexes by enforcing limits on the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Number of keys: 100 per workflow"),Object(l.b)("li",{parentName:"ul"},"Size of value: 2kb per value"),Object(l.b)("li",{parentName:"ul"},"Total size of key and values: 40kb per workflow")),Object(l.b)("p",null,"Temporal reserves keys like NamespaceId, WorkflowId, and RunId. These can only be used in list queries. The values are not updatable."),Object(l.b)("h3",{id:"upsert-search-attributes-in-workflow"},"Upsert Search Attributes in Workflow"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/workflow#UpsertSearchAttributes"}),"UpsertSearchAttributes")," is used to add or update search attributes from within the workflow code."),Object(l.b)("p",null,"Go samples for search attributes can be found at ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-go-samples/tree/master/searchattributes"}),"github.com/temporalio/temporal-go-samples"),"."),Object(l.b)("p",null,"UpsertSearchAttributes will merge attributes to the existing map in the workflow. Consider this example workflow code:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'func MyWorkflow(ctx workflow.Context, input string) error {\n\n    attr1 := map[string]interface{}{\n        "CustomIntField": 1,\n        "CustomBoolField": true,\n    }\n    workflow.UpsertSearchAttributes(ctx, attr1)\n\n    attr2 := map[string]interface{}{\n        "CustomIntField": 2,\n        "CustomKeywordField": "seattle",\n    }\n    workflow.UpsertSearchAttributes(ctx, attr2)\n}\n')),Object(l.b)("p",null,"After the second call to UpsertSearchAttributes, the map will contain:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'map[string]interface{}{\n    "CustomIntField": 2,\n    "CustomBoolField": true,\n    "CustomKeywordField": "seattle",\n}\n')),Object(l.b)("p",null,"There is no support for removing a field. To achieve a similar effect, set the field to a sentinel value. For example, to remove \u201cCustomKeywordField\u201d, update it to \u201cimpossibleVal\u201d. Then searching ",Object(l.b)("inlineCode",{parentName:"p"},"CustomKeywordField != \u2018impossibleVal\u2019"),' will match workflows with CustomKeywordField not equal to "impossibleVal", which ',Object(l.b)("strong",{parentName:"p"},"includes")," workflows without the CustomKeywordField set."),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"workflow.GetInfo")," to get current search attributes."),Object(l.b)("h3",{id:"continueasnew-and-cron"},"ContinueAsNew and Cron"),Object(l.b)("p",null,"When performing a ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/go-continue-as-new"}),"ContinueAsNew")," or using ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/go-distributed-cron"}),"Cron"),", search attributes (and memo) will be carried over to the new run by default."),Object(l.b)("h2",{id:"query-capabilities"},"Query Capabilities"),Object(l.b)("p",null,"Query workflows by using a SQL-like where clause when ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/learn-cli#list-closed-or-open-workflow-executions"}),"listing workflows from the CLI")," or using the list APIs (",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/client#Client"}),"Go"),", ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://static.javadoc.io/com.uber.cadence/cadence-client/2.6.0/com/uber/cadence/WorkflowService.Iface.html#ListWorkflowExecutions-com.uber.cadence.ListWorkflowExecutionsRequest-"}),"Java"),")."),Object(l.b)("p",null,"Note that you will only see workflows from one namespace when querying."),Object(l.b)("h3",{id:"supported-operators"},"Supported Operators"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"AND, OR, ()"),Object(l.b)("li",{parentName:"ul"},"=, !=, >, >=, <, <="),Object(l.b)("li",{parentName:"ul"},"IN"),Object(l.b)("li",{parentName:"ul"},"BETWEEN ... AND"),Object(l.b)("li",{parentName:"ul"},"ORDER BY")),Object(l.b)("h3",{id:"default-attributes"},"Default Attributes"),Object(l.b)("p",null,"These can be found by using the CLI get-search-attr command or the GetSearchAttributes API. The names and types are as follows:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"KEY"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"VALUE TYPE"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Status"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CloseTime"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CustomBoolField"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DOUBLE")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CustomDatetimeField"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"DATETIME")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CustomNamespace"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"KEYWORD")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CustomDoubleField"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BOOL")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CustomIntField"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CustomKeywordField"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"KEYWORD")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CustomStringField"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"STRING")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NamespaceId"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"KEYWORD")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ExecutionTime"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"HistoryLength"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"RunId"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"KEYWORD")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"StartTime"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"WorkflowId"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"KEYWORD")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"WorkflowType"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"KEYWORD")))),Object(l.b)("p",null,"There are some special considerations for these attributes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Status, CloseTime, NamespaceId, ExecutionTime, HistoryLength, RunId, StartTime, WorkflowId, WorkflowType are reserved by Temporal and are read-only"),Object(l.b)("li",{parentName:"ul"},"Status is a mapping of int to state:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"0 = unknown"),Object(l.b)("li",{parentName:"ul"},"1 = running"),Object(l.b)("li",{parentName:"ul"},"2 = completed"),Object(l.b)("li",{parentName:"ul"},"3 = failed"),Object(l.b)("li",{parentName:"ul"},"4 = canceled"),Object(l.b)("li",{parentName:"ul"},"5 = terminated"),Object(l.b)("li",{parentName:"ul"},"6 = continuedasnew"),Object(l.b)("li",{parentName:"ul"},"7 = timedout"))),Object(l.b)("li",{parentName:"ul"},'StartTime, CloseTime and ExecutionTime are stored as INT, but support queries using both EpochTime in nanoseconds, and string in RFC3339 format (ex. "2006-01-02T15:04:05+07:00")'),Object(l.b)("li",{parentName:"ul"},"CloseTime, HistoryLength are only present in closed workflow"),Object(l.b)("li",{parentName:"ul"},"ExecutionTime is for Retry/Cron user to query a workflow that will run in the future")),Object(l.b)("p",null,"To list only open workflows, add ",Object(l.b)("inlineCode",{parentName:"p"},"CloseTime = missing")," to the end of the query."),Object(l.b)("p",null,"If you use retry or the cron feature to query workflows that will start execution in a certain time range, you can add predicates on ExecutionTime. For example: ",Object(l.b)("inlineCode",{parentName:"p"},"ExecutionTime > 2019-01-01T10:00:00-07:00"),". Note that if predicates on ExecutionTime are included, only cron or a workflow that needs to retry will be returned."),Object(l.b)("h3",{id:"general-notes-about-queries"},"General Notes About Queries"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Pagesize default is 1000, and cannot be larger than 10k"),Object(l.b)("li",{parentName:"ul"},"Range query on Temporal timestamp (StartTime, CloseTime, ExecutionTime) cannot be larger than 9223372036854775807 (maxInt64 - 1001)"),Object(l.b)("li",{parentName:"ul"},"Query by time range will have 1ms resolution"),Object(l.b)("li",{parentName:"ul"},"Query column names are case sensitive"),Object(l.b)("li",{parentName:"ul"},"ListWorkflow may take longer when retrieving a large number of workflows (10M+)"),Object(l.b)("li",{parentName:"ul"},"To retrieve a large number of workflows without caring about order, use the ScanWorkflow API"),Object(l.b)("li",{parentName:"ul"},"To efficiently count the number of workflows, use the CountWorkflow API")),Object(l.b)("h2",{id:"tools-support"},"Tools Support"),Object(l.b)("h3",{id:"cli"},"CLI"),Object(l.b)("p",null,"Support for search attributes is available as of version 0.6.0 of the Temporal server. You can also use the CLI from the latest ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/temporalio/tctl"}),"CLI Docker image")," (supported on 0.6.4 or later)."),Object(l.b)("h4",{id:"start-workflow-with-search-attributes"},"Start Workflow with Search Attributes"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tctl --ns samples-namespace workflow start --tq helloWorldGroup --wt main.Workflow --et 60 --dt 10 -i '\"vancexu\"' -search_attr_key 'CustomIntField | CustomKeywordField | CustomStringField |  CustomBoolField | CustomDatetimeField' -search_attr_value '5 | keyword1 | vancexu test | true | 2019-06-07T16:16:36-08:00'\n")),Object(l.b)("h4",{id:"search-workflows-with-list-api"},"Search Workflows with List API"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'tctl --ns samples-namespace wf list -q \'(CustomKeywordField = "keyword1" and CustomIntField >= 5) or CustomKeywordField = "keyword2"\' -psa\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'tctl --ns samples-namespace wf list -q \'CustomKeywordField in ("keyword2", "keyword1") and CustomIntField >= 5 and CloseTime between "2018-06-07T16:16:36-08:00" and "2019-06-07T16:46:34-08:00" order by CustomDatetimeField desc\' -psa\n')),Object(l.b)("p",null,"To list only open workflows, add ",Object(l.b)("inlineCode",{parentName:"p"},"CloseTime = missing")," to the end of the query."),Object(l.b)("p",null,"Note that queries can support more than one type of filter:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'tctl --ns samples-namespace wf list -q \'WorkflowType = "main.Workflow" and (WorkflowId = "1645a588-4772-4dab-b276-5f9db108b3a8" or RunId = "be66519b-5f09-40cd-b2e8-20e4106244dc")\'\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'tctl --ns samples-namespace wf list -q \'WorkflowType = "main.Workflow" StartTime > "2019-06-07T16:46:34-08:00" and CloseTime = missing\'\n')),Object(l.b)("h3",{id:"web-ui-support"},"Web UI Support"),Object(l.b)("p",null,"Queries are supported in ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/temporalio/temporal-web"}),"Temporal Web"),' as of release 0.20.0. Use the "Basic/Advanced" button to switch to "Advanced" mode and type the query in the search box.'),Object(l.b)("h2",{id:"local-testing"},"Local Testing"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Increase Docker memory to higher than 6GB. Navigate to Docker -> Preferences -> Advanced -> Memory"),Object(l.b)("li",{parentName:"ol"},"Get the Temporal Docker compose file. Run ",Object(l.b)("inlineCode",{parentName:"li"},"curl -L https://github.com/temporalio/temporal/releases/download/v0.26.0/docker.tar.gz | tar -xz --strip-components 1 docker/docker-compose-es.yml")),Object(l.b)("li",{parentName:"ol"},"Start Temporal Docker (which contains Apache Kafka, Apache Zookeeper, and Elasticsearch) using ",Object(l.b)("inlineCode",{parentName:"li"},"docker-compose -f docker-compose-es.yml up")),Object(l.b)("li",{parentName:"ol"},"From the Docker output log, make sure Elasticsearch and Temporal started correctly. If you encounter an insufficient disk space error, try ",Object(l.b)("inlineCode",{parentName:"li"},"docker system prune -a --volumes")),Object(l.b)("li",{parentName:"ol"},"Register a local namespace and start using it. ",Object(l.b)("inlineCode",{parentName:"li"},"tctl --ns samples-namespace n re")),Object(l.b)("li",{parentName:"ol"},"Allow list search attributes. ",Object(l.b)("inlineCode",{parentName:"li"},"tctl --ns namespace adm cl asa --search_attr_key NewKey --search_attr_type 1"))),Object(l.b)("p",null,"Note: starting a workflow with search attributes but without Elasticsearch will succeed as normal, but will not be searchable and will not be shown in list results."))}s.isMDXComponent=!0},347:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return a?n.a.createElement(d,i({ref:t},b,{components:a})):n.a.createElement(d,i({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<l;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
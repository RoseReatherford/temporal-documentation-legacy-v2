(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(6),i=(n(0),n(347)),a={id:"go-workflow-testing",title:"Testing"},s={id:"version-0.26.0/go-workflow-testing",title:"Testing",description:"The Temporal Go client library provides a test framework to facilitate testing workflow implementations.",source:"@site/versioned_docs/version-0.26.0/go-workflow-testing.md",permalink:"/docs/go-workflow-testing",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.26.0/go-workflow-testing.md",version:"0.26.0",sidebar:"version-0.26.0/docs",previous:{title:"Asynchronous Activity Completion",permalink:"/docs/go-activity-async-completion"},next:{title:"Versioning",permalink:"/docs/go-versioning"}},l=[{value:"Setup",id:"setup",children:[]},{value:"A Simple Test",id:"a-simple-test",children:[]},{value:"Activity mocking and overriding",id:"activity-mocking-and-overriding",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Temporal Go client library provides a test framework to facilitate testing workflow implementations.\nThe framework is suited for implementing unit tests as well as functional tests of the workflow logic."),Object(i.b)("p",null,"The following code implements unit tests for the ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleWorkflow")," sample:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'package sample\n\nimport (\n        "errors"\n        "testing"\n\n        "github.com/stretchr/testify/mock"\n        "github.com/stretchr/testify/suite"\n\n        "go.temporal.io/temporal/activity"\n        "go.temporal.io/temporal/testsuite"\n)\n\ntype UnitTestSuite struct {\n        suite.Suite\n        testsuite.WorkflowTestSuite\n\n        env *testsuite.TestWorkflowEnvironment\n}\n\nfunc (s *UnitTestSuite) SetupTest() {\n        s.env = s.NewTestWorkflowEnvironment()\n}\n\nfunc (s *UnitTestSuite) AfterTest(suiteName, testName string) {\n        s.env.AssertExpectations(s.T())\n}\n\nfunc (s *UnitTestSuite) Test_SimpleWorkflow_Success() {\n        s.env.ExecuteWorkflow(SimpleWorkflow, "test_success")\n\n        s.True(s.env.IsWorkflowCompleted())\n        s.NoError(s.env.GetWorkflowError())\n}\n\nfunc (s *UnitTestSuite) Test_SimpleWorkflow_ActivityParamCorrect() {\n        s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(\n          func(ctx context.Context, value string) (string, error) {\n                s.Equal("test_success", value)\n                return value, nil\n        })\n        s.env.ExecuteWorkflow(SimpleWorkflow, "test_success")\n\n        s.True(s.env.IsWorkflowCompleted())\n        s.NoError(s.env.GetWorkflowError())\n}\n\nfunc (s *UnitTestSuite) Test_SimpleWorkflow_ActivityFails() {\n        s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(\n          "", errors.New("SimpleActivityFailure"))\n        s.env.ExecuteWorkflow(SimpleWorkflow, "test_failure")\n\n        s.True(s.env.IsWorkflowCompleted())\n\n        s.NotNil(s.env.GetWorkflowError())\n        _, ok := s.env.GetWorkflowError().(*cadence.GenericError)\n        s.True(ok)\n        s.Equal("SimpleActivityFailure", s.env.GetWorkflowError().Error())\n}\n\nfunc TestUnitTestSuite(t *testing.T) {\n        suite.Run(t, new(UnitTestSuite))\n}\n')),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,'To run unit tests, we first define a "test suite" struct that absorbs both the\nbasic suite functionality from ',Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://pkg.go.dev/github.com/stretchr/testify/suite"}),"testify"),"\nvia ",Object(i.b)("inlineCode",{parentName:"p"},"suite.Suite")," and the suite functionality from the Temporal test framework via\n",Object(i.b)("inlineCode",{parentName:"p"},"testsuite.WorkflowTestSuite"),". Because every test in this test suite will test our workflow, we\nadd a property to our struct to hold an instance of the test environment. This allows us to initialize\nthe test environment in a setup method. For testing workflows, we use a ",Object(i.b)("inlineCode",{parentName:"p"},"testsuite.TestWorkflowEnvironment"),"."),Object(i.b)("p",null,"Next, we implement a ",Object(i.b)("inlineCode",{parentName:"p"},"SetupTest")," method to setup a new test environment before each test. Doing so\nensures that each test runs in its own isolated sandbox. We also implement an ",Object(i.b)("inlineCode",{parentName:"p"},"AfterTest")," function\nwhere we assert that all mocks we set up were indeed called by invoking ",Object(i.b)("inlineCode",{parentName:"p"},"s.env.AssertExpectations(s.T())"),"."),Object(i.b)("p",null,'Finally, we create a regular test function recognized by "go test" and pass the struct to ',Object(i.b)("inlineCode",{parentName:"p"},"suite.Run"),"."),Object(i.b)("h2",{id:"a-simple-test"},"A Simple Test"),Object(i.b)("p",null,"The most simple test case we can write is to have the test environment execute the workflow and then\nevaluate the results."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'func (s *UnitTestSuite) Test_SimpleWorkflow_Success() {\n        s.env.ExecuteWorkflow(SimpleWorkflow, "test_success")\n\n        s.True(s.env.IsWorkflowCompleted())\n        s.NoError(s.env.GetWorkflowError())\n}\n')),Object(i.b)("p",null,"Calling ",Object(i.b)("inlineCode",{parentName:"p"},"s.env.ExecuteWorkflow(...)")," executes the workflow logic and any invoked activities inside the\ntest process. The first parameter of ",Object(i.b)("inlineCode",{parentName:"p"},"s.env.ExecuteWorkflow(...)")," contains the workflow functions,\nand any subsequent parameters contain values for custom input parameters declared by the workflow\nfunction."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that unless the activity invocations are mocked or activity implementation\nreplaced (see ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"#activity-mocking-and-overriding"}),"Activity mocking and overriding"),"), the test environment\nwill execute the actual activity code including any calls to outside services.")),Object(i.b)("p",null,"After executing the workflow in the above example, we assert that the workflow ran through completion\nvia the call to ",Object(i.b)("inlineCode",{parentName:"p"},"s.env.IsWorkflowComplete()"),". We also assert that no errors were returned by asserting\non the return value of ",Object(i.b)("inlineCode",{parentName:"p"},"s.env.GetWorkflowError()"),". If our workflow returned a value, we could have\nretrieved that value via a call to ",Object(i.b)("inlineCode",{parentName:"p"},"s.env.GetWorkflowResult(&value)")," and had additional asserts on that\nvalue."),Object(i.b)("h2",{id:"activity-mocking-and-overriding"},"Activity mocking and overriding"),Object(i.b)("p",null,"When running unit tests on workflows, we want to test the workflow logic in isolation. Additionally,\nwe want to inject activity errors during our test runs. The test framework provides two mechanisms\nthat support these scenarios: activity mocking and activity overriding. Both of these mechanisms allow\nyou to change the behavior of activities invoked by your workflow without the need to modify the actual\nworkflow code."),Object(i.b)("p",null,'Let\'s take a look at a test that simulates a test that fails via the "activity mocking" mechanism.'),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'func (s *UnitTestSuite) Test_SimpleWorkflow_ActivityFails() {\n        s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(\n          "", errors.New("SimpleActivityFailure"))\n        s.env.ExecuteWorkflow(SimpleWorkflow, "test_failure")\n\n        s.True(s.env.IsWorkflowCompleted())\n\n        s.NotNil(s.env.GetWorkflowError())\n        _, ok := s.env.GetWorkflowError().(*cadence.GenericError)\n        s.True(ok)\n        s.Equal("SimpleActivityFailure", s.env.GetWorkflowError().Error())\n}\n')),Object(i.b)("p",null,"This test simulates the execution of the activity ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleActivity")," that is invoked by our workflow\n",Object(i.b)("inlineCode",{parentName:"p"},"SimpleWorkflow")," returning an error. We accomplish this by setting up a mock on the test environment\nfor the ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleActivity")," that returns an error."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(\n  "", errors.New("SimpleActivityFailure"))\n')),Object(i.b)("p",null,"With the mock set up we can now execute the workflow via the s.env.ExecuteWorkflow(...) method and\nassert that the workflow completed successfully and returned the expected error."),Object(i.b)("p",null,"Simply mocking the execution to return a desired value or error is a pretty powerful mechanism to\nisolate workflow logic. However, sometimes we want to replace the activity with an alternate implementation\nto support a more complex test scenario. Let's assume we want to validate that the activity gets called\nwith the correct parameters."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),'func (s *UnitTestSuite) Test_SimpleWorkflow_ActivityParamCorrect() {\n        s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(\n          func(ctx context.Context, value string) (string, error) {\n                s.Equal("test_success", value)\n                return value, nil\n        })\n        s.env.ExecuteWorkflow(SimpleWorkflow, "test_success")\n\n        s.True(s.env.IsWorkflowCompleted())\n        s.NoError(s.env.GetWorkflowError())\n}\n')),Object(i.b)("p",null,"In this example, we provide a function implementation as the parameter to ",Object(i.b)("inlineCode",{parentName:"p"},"Return"),". This allows us to\nprovide an alternate implementation for the activity ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleActivity"),". The framework will execute this\nfunction whenever the activity is invoked and pass on the return value from the function as the result\nof the activity invocation. Additionally, the framework will validate that the signature of the \u201cmock\u201d\nfunction matches the signature of the original activity function."),Object(i.b)("p",null,"Since this can be an entire function, there is no limitation as to what we can do here. In this\nexample, we assert that the \u201cvalue\u201d param has the same content as the value param we passed to the workflow."))}u.isMDXComponent=!0},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,v=p["".concat(a,".").concat(f)]||p[f]||m[f]||i;return n?r.a.createElement(v,s({ref:t},c,{components:n})):r.a.createElement(v,s({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
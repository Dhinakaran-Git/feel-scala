"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[9549],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7462),a=t(7294),l=t(6010),i=t(2466),o=t(6775),s=t(1980),u=t(7392),c=t(12);function p(e){return function(e){var n;return(null==(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[s,u]=g({queryString:t,groupId:r}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),v=(()=>{const e=s??p;return f({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var v=t(2389);const b="tabList__CuJ",y="tabItem_LNqP";function h(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=u[t].value;r!==o&&(p(n),s(r))},f=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:f,onClick:d},i,{className:(0,l.Z)("tabs__item",y,null==i?void 0:i.className,{"tabs__item--active":o===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function E(e){const n=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b)},a.createElement(h,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function w(e){const n=(0,v.Z)();return a.createElement(E,(0,r.Z)({key:String(n)},e))}},4541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),l=t(4866),i=t(5162);const o={id:"bootstrapping",title:"Bootstrapping"},s=void 0,u={unversionedId:"reference/developer-guide/bootstrapping",id:"version-1.17/reference/developer-guide/bootstrapping",title:"Bootstrapping",description:"The FEEL engine can be integrated in two different ways",source:"@site/versioned_docs/version-1.17/reference/developer-guide/bootstrapping.md",sourceDirName:"reference/developer-guide",slug:"/reference/developer-guide/bootstrapping",permalink:"/feel-scala/docs/reference/developer-guide/bootstrapping",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.17/reference/developer-guide/bootstrapping.md",tags:[],version:"1.17",frontMatter:{id:"bootstrapping",title:"Bootstrapping"},sidebar:"Reference",previous:{title:"Introduction",permalink:"/feel-scala/docs/reference/developer-guide/developer-guide-introduction"},next:{title:"Function Provider SPI",permalink:"/feel-scala/docs/reference/developer-guide/function-provider-spi"}},c={},p=[{value:"The dependency",id:"the-dependency",level:3},{value:"Use as a library",id:"use-as-a-library",level:3},{value:"Use as script engine",id:"use-as-script-engine",level:3}],d={toc:p};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The FEEL engine can be integrated in two different ways"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"as a library by calling the engine API"),(0,a.kt)("li",{parentName:"ul"},"as a script engine by using the Java's script engine API")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Have a look at the ",(0,a.kt)("a",{parentName:"p",href:"/feel-scala/docs/playground/"},"FEEL Playground")," for trying out FEEL expressions quickly in\ndevelopment.")),(0,a.kt)("h3",{id:"the-dependency"},"The dependency"),(0,a.kt)("p",null,"Add the engine as dependency to your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.camunda.feel</groupId>\n  <artifactId>feel-engine</artifactId>\n  <version>${VERSION}</version>\n</dependency>\n")),(0,a.kt)("p",null,"Or, download the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/camunda/feel-scala/releases"},"JAR file")," ",(0,a.kt)("em",{parentName:"p"},"(feel-engine-${VERSION}-complete.jar)")," and copy it into your application."),(0,a.kt)("h3",{id:"use-as-a-library"},"Use as a library"),(0,a.kt)("p",null,"The FEEL engine provides APIs to parse and evaluate expressions and unary-tests."),(0,a.kt)(l.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"scala",mdxType:"TabItem"},(0,a.kt)("p",null,"Create a new instance of the class ",(0,a.kt)("inlineCode",{parentName:"p"},"FeelEngine"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'object MyProgram {\n  \n  val engine = new FeelEngine\n  \n  def feel(expression: String, context: Map[String, Any]) {\n    \n    val result: Either[Failure, Boolean] = engine.evalUnaryTests(expression, context)\n    // or    \n    val result: Either[Failure, Any] = engine.evalExpression(expression, context)\n  \n    // handle result\n    result\n        .right.map(value => println(s"result is: $value"))\n        .left.map(failure => println(s"failure: $failure"))\n  }  \n}\n')),(0,a.kt)("p",null,"Use the constructor arguments to configure the engine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"new FeelEngine(configuration = Configuration(externalFunctionsEnabled = true))\n"))),(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("p",null,"Use the builder to create a new instance of the class ",(0,a.kt)("inlineCode",{parentName:"p"},"FeelEngine"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},' public class MyProgram {\n\n    public static void main(String[] args) {\n\n        final FeelEngine engine = new FeelEngine.Builder()\n            .valueMapper(SpiServiceLoader.loadValueMapper())\n            .functionProvider(SpiServiceLoader.loadFunctionProvider())\n            .build();\n\n        final Map<String, Object> variables = Map.of("x", 21);\n        final Either<FeelEngine.Failure, Object> result = engine.evalExpression(expression, variables);\n\n        if (result.isRight()) {\n            final Object value = result.right().get();\n            System.out.println("result is " + value);\n        } else {\n            final FeelEngine.Failure failure = result.left().get();\n            throw new RuntimeException(failure.message());\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Use the builder to configure the engine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"new FeelEngine.Builder().enableExternalFunctions(true).build()\n")))),(0,a.kt)("admonition",{title:"Security",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"External functions are disabled by default. They would allow calling arbitrary\ncode or accessing sensitive data. It is recommended to use the\n",(0,a.kt)("a",{parentName:"p",href:"/feel-scala/docs/reference/developer-guide/function-provider-spi"},"FunctionProvider API")," instead.")),(0,a.kt)("h3",{id:"use-as-script-engine"},"Use as script engine"),(0,a.kt)("p",null,"Calling the FEEL engine via Java's script engine\nAPI (",(0,a.kt)("a",{parentName:"p",href:"https://www.jcp.org/en/jsr/detail?id=223"},"JSR 223"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'object MyProgram {\n\n  val scriptEngineManager = new ScriptEngineManager\n \n  def feel(script: String, context: ScriptContext) {\n  \n    val scriptEngine: FeelScriptEngine = scriptEngineManager.getEngineByName("feel")\n    \n    val result: Object = scriptEngine.eval(script, context)\n    // ...\n  }\n\n}\n')),(0,a.kt)("p",null,"The engine is registered under the following names:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http://www.omg.org/spec/FEEL/20140401")," (FEEL namespace)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feel-scala"))),(0,a.kt)("p",null,"To evaluate a unary-tests expression, use one of the following names:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feel-unary-tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"feel-scala-unary-tests"))))}f.isMDXComponent=!0}}]);
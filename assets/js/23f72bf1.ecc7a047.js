"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[1650],{5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),l=n(7294),r=n(6010),o=n(2466),s=n(6775),u=n(1980),i=n(7392),c=n(12);function p(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,i]=g({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=u??p;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,r]),tabValues:r}}var h=n(2389);const v="tabList__CuJ",b="tabItem_LNqP";function E(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==s&&(p(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",v)},l.createElement(E,(0,a.Z)({},e,t)),l.createElement(y,(0,a.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return l.createElement(x,(0,a.Z)({key:String(t)},e))}},4863:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),l=n(7294),r=n(5671),o=n(3746);const s=e=>{let{children:t,onChange:n,language:s}=e;const u=(0,l.useRef)(null),[i,c]=(0,l.useState)(t),p=(0,l.useCallback)((e=>{const t=e.slice(0,-1);c(t),n(t)}),[]);return(0,r.Y)(u,p,{indentation:2}),l.createElement(o.ZP,(0,a.Z)({},o.lG,{code:i,language:s}),(e=>{let{className:t,style:n,tokens:a,getTokenProps:r}=e;return l.createElement("pre",{className:t,style:n,ref:u},a.map(((e,t)=>l.createElement(l.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>l.createElement("span",r({token:e,key:t})))),"\n"))))}))}},478:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(9669),r=n.n(l);const o=e=>{let{}=e;const[t,n]=a.useState("?");return(0,a.useEffect)((()=>{r().get("https://feel.upgradingdave.com/api/v1/version",{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(console.log(null==e?void 0:e.data),null!=e&&null!=(t=e.data)&&t.feelEngineVersion){const t=e.data.feelEngineVersion;n(t)}}))}),[]),a.createElement("code",null,t)}},4294:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(9669),r=n.n(l),o=n(4863),s=n(9286),u=n(2389);const i=e=>{let{defaultExpression:t,feelContext:n,metadata:l,onResultCallback:i,onErrorCallback:c}=e;const p=function(){let e={};if((0,u.Z)()){const t=window.location.search,n=new URLSearchParams(t);n.has("expression")&&(e.expression=N(n.get("expression"))),n.has("context")&&(e.context=N(n.get("context")))}return e}();let d=p.context??n;d&&(d=JSON.stringify(JSON.parse(d),null,2));const[m,g]=a.useState(p.expression??t),[f,h]=a.useState(d),[v,b]=a.useState("<click 'Evaluate' to see the result of the expression>"),[E,y]=a.useState(null),[x,k]=a.useState(null),w=/^.+(?<line>\d+):(?<position>\d+).+$/gm,S=/^.+at position (?<position>\d+)$/gm;function Z(e,t){b(null),y(e),k(t),c&&c(e)}function C(e){return btoa(e)}function N(e){return atob(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(o.Z,{onChange:g,language:"js"},m),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(o.Z,{onChange:h,language:"json"},f)),a.createElement("button",{onClick:function(){try{b("<evaluating the expression...>"),k(null);!function(e){r().post("https://feel.upgradingdave.com/api/v1/feel/evaluate",{expression:m,context:e,metadata:{...l}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,l=w.exec(t);Z({message:t,line:null==l||null==(n=l.groups)?void 0:n.line,position:null==l||null==(a=l.groups)?void 0:a.position},e.data.warnings)}else!function(e){y(null);const t=JSON.stringify(e.result);b(t),e.warnings.length>=1&&k(e.warnings);i&&i(t)}(e.data)}))}(n&&0!==f.trim().length?JSON.parse(f):{})}catch(t){var e;const n=S.exec(t.message);Z({message:`failed to parse context: ${t.message}`,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("button",{onClick:function(){navigator.clipboard.writeText(function(){const e=window.location.href.split("?")[0],t=window.location.search,n=new URLSearchParams(t);return n.set("expression",C(m)),f&&n.set("context",C(f)),n.set("expression-type","expression"),e+"?"+n}())},className:"button button--secondary button--lg",title:"Copy an URL to the clipboard for sharing the expression",style:{"margin-left":"10px"}},"Share"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(s.Z,{title:(()=>{const e=null!=E&&E.line?` on line ${E.line}`:"",t=null!=E&&E.position?` at position ${E.position}`:"";return E&&`Error${e}${t}`})(),language:"json"},v||(null==E?void 0:E.message)),a.createElement("br",null),a.createElement("h2",null,"Warnings"),a.createElement(s.Z,null,(null==x?void 0:x.map(((e,t)=>a.createElement("li",{key:t},"[",e.type,"] ",e.message))))||"<none>"))}},4725:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(9669),r=n.n(l),o=n(4863),s=n(9286),u=n(2389);const i=e=>{let{defaultExpression:t,feelInputValue:n,feelContext:l,metadata:i,onResultCallback:c,onErrorCallback:p}=e;const d=function(){let e={};if((0,u.Z)()){const t=window.location.search,n=new URLSearchParams(t);n.has("expression")&&(e.expression=L(n.get("expression"))),n.has("context")&&(e.context=L(n.get("context"))),n.has("input-value")&&(e.inputValue=L(n.get("input-value")))}return e}();let m=d.context??l;m&&(m=JSON.stringify(JSON.parse(m),null,2));const[g,f]=a.useState(d.expression??t),[h,v]=a.useState(d.inputValue??n),[b,E]=a.useState(m),[y,x]=a.useState("<click 'Evaluate' to see the result of the expression>"),[k,w]=a.useState(null),[S,Z]=a.useState(null),C=/^.+(?<line>\d+):(?<position>\d+).+$/gm,N=/^.+at position (?<position>\d+)$/gm;function T(e,t){x(null),w(e),Z(t),p&&p(e)}function V(e){return btoa(e)}function L(e){return atob(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(o.Z,{onChange:f,language:"js"},g),a.createElement("h2",null,"Input value"),a.createElement(o.Z,{onChange:v,language:"json"},h),l&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(o.Z,{onChange:E,language:"json"},b)),a.createElement("button",{onClick:function(){try{x("<evaluating the expression...>"),Z(null);const e=l&&0!==b.trim().length?JSON.parse(b):{};!function(e,t){r().post("https://feel.upgradingdave.com/api/v1/feel-unary-tests/evaluate",{expression:g,inputValue:t,context:e,metadata:{...i}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,l=C.exec(t);T({message:t,line:null==l||null==(n=l.groups)?void 0:n.line,position:null==l||null==(a=l.groups)?void 0:a.position},e.data.warnings)}else!function(e){w(null);const t=JSON.stringify(e.result);x(t),e.warnings.length>=1&&Z(e.warnings);c&&c(t)}(e.data)}))}(e,n&&0!==h.trim().length?JSON.parse(h):null)}catch(t){var e;const n=N.exec(t.message);T({message:`failed to parse context: ${t.message}`,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("button",{onClick:function(){navigator.clipboard.writeText(function(){const e=window.location.href.split("?")[0],t=window.location.search,n=new URLSearchParams(t);return n.set("expression",V(g)),b&&n.set("context",V(b)),h&&n.set("input-value",V(h)),n.set("expression-type","unary-tests"),e+"?"+n}())},className:"button button--secondary button--lg",title:"Copy an URL to the clipboard for sharing the expression",style:{"margin-left":"10px"}},"Share"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(s.Z,{title:(()=>{const e=null!=k&&k.line?` on line ${k.line}`:"",t=null!=k&&k.position?` at position ${k.position}`:"";return k&&`Error${e}${t}`})(),language:"json"},y||(null==k?void 0:k.message)),a.createElement("br",null),a.createElement("h2",null,"Warnings"),a.createElement(s.Z,null,(null==S?void 0:S.map(((e,t)=>a.createElement("li",{key:t},"[",e.type,"] ",e.message))))||"<none>"))}},854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>h});var a=n(7462),l=(n(7294),n(3905)),r=n(4294),o=n(4725),s=n(478),u=n(6518),i=n.n(u),c=n(4866),p=n(5162);const d={id:"playground",title:"FEEL Playground (online)"},m="FEEL Playground",g={unversionedId:"playground/playground",id:"version-1.17/playground/playground",title:"FEEL Playground (online)",description:"Use the interactive editor below to evaluate",source:"@site/versioned_docs/version-1.17/playground/playground.mdx",sourceDirName:"playground",slug:"/playground/",permalink:"/feel-scala/docs/playground/",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.17/playground/playground.mdx",tags:[],version:"1.17",frontMatter:{id:"playground",title:"FEEL Playground (online)"},sidebar:"Playground",next:{title:"FEEL REPL (local)",permalink:"/feel-scala/docs/playground/repl"}},f={},h=[{value:"About",id:"about",level:2}],v={toc:h};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"feel-playground"},"FEEL Playground"),(0,l.kt)("p",null,"Use the interactive editor below to evaluate\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.camunda.io/docs/components/modeler/feel/language-guide/feel-expressions-introduction/"},"FEEL expressions"),"."),(0,l.kt)(c.Z,{queryString:"expression-type",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"expression",label:"Expression",default:!0,mdxType:"TabItem"},(0,l.kt)(r.Z,{defaultExpression:i()`
      3 + x`,feelContext:'{"x": 5}',metadata:{page:"tutorial-playground"},mdxType:"LiveFeel"})),(0,l.kt)(p.Z,{value:"unary-tests",label:"Unary-tests",mdxType:"TabItem"},(0,l.kt)(o.Z,{defaultExpression:i()`
      < x`,feelInputValue:"3",feelContext:'{"x": 5}',metadata:{page:"tutorial-playground"},mdxType:"LiveFeelUnaryTests"}))),(0,l.kt)("h2",{id:"about"},"About"),(0,l.kt)("p",null,"The playground uses the FEEL engine in the version ",(0,l.kt)(s.Z,{mdxType:"FeelPlaygroundVersion"}),"."),(0,l.kt)("p",null,"If the playground is broken, please report the failure\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/camunda-community-hub/feel-scala-playground/issues"},"here"),"."))}b.isMDXComponent=!0}}]);
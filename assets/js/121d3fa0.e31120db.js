"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[6972],{478:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(7294),a=n(9669),o=n.n(a);const r=e=>{let{}=e;const[t,n]=l.useState("?");return(0,l.useEffect)((()=>{o().get("http://34.160.251.253/api/v1/version",{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(console.log(null==e?void 0:e.data),null!=e&&null!=(t=e.data)&&t.feelEngineVersion){const t=e.data.feelEngineVersion;n(t)}}))}),[]),l.createElement("code",null,t)}},5478:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(7294),a=n(9669),o=n.n(a),r=n(7462),s=n(5671),u=n(3746);const i=e=>{let{children:t,onChange:n,language:a}=e;const o=(0,l.useRef)(null),[i,c]=(0,l.useState)(t),d=(0,l.useCallback)((e=>{const t=e.slice(0,-1);c(t),n(t)}),[]);return(0,s.Y)(o,d,{indentation:2}),l.createElement(u.ZP,(0,r.Z)({},u.lG,{code:i,language:a}),(e=>{let{className:t,style:n,tokens:a,getTokenProps:r}=e;return l.createElement("pre",{className:t,style:n,ref:o},a.map(((e,t)=>l.createElement(l.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>l.createElement("span",r({token:e,key:t})))),"\n"))))}))};var c=n(9537);const d=e=>{let{defaultExpression:t,feelContext:n,metadata:a,onResultCallback:r,onErrorCallback:s}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[u,d]=l.useState(t),[p,g]=l.useState(n),[m,f]=l.useState("<click 'Evaluate' to see the result of the expression>"),[y,E]=l.useState(null),h=/^.+(?<line>\d+):(?<position>\d+).+$/gm,v=/^.+at position (?<position>\d+)$/gm;function k(e){f(null),E(e),s&&s(e)}return l.createElement("div",null,l.createElement("h2",null,"Expression"),l.createElement(i,{onChange:d,language:"js"},u),n&&l.createElement("div",null,l.createElement("h2",null,"Context"),l.createElement("i",null,"A JSON document that is used to resolve ",l.createElement("strong",null,"variables")," ","in the expression."),l.createElement(i,{onChange:g,language:"json"},p)),l.createElement("button",{onClick:function(){try{f("<evaluating the expression...>");!function(e){o().post("http://34.160.251.253/api/v1/feel/evaluate",{expression:u,context:e,metadata:{...a}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,l;const t=e.data.error,a=h.exec(t);k({message:t,line:null==a||null==(n=a.groups)?void 0:n.line,position:null==a||null==(l=a.groups)?void 0:l.position})}else!function(e){E(null),f(e),r&&r(e)}(JSON.stringify(e.data.result))}))}(n?JSON.parse(p):{})}catch(t){var e;const n=v.exec(t.message);k({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),l.createElement("br",null),l.createElement("br",null),l.createElement("h2",null,"Result"),l.createElement(c.Z,{title:(()=>{const e=null!=y&&y.line?" on line "+y.line:"",t=null!=y&&y.position?" at position "+y.position:"";return y&&"Error"+e+t})(),language:"json"},m||(null==y?void 0:y.message)))}},5168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>E,frontMatter:()=>d,metadata:()=>g,toc:()=>f});var l,a=n(7462),o=n(1880),r=(n(7294),n(3905)),s=n(5478),u=n(478),i=n(6518),c=n.n(i);const d={id:"playground",title:"FEEL Playground (online)"},p="FEEL Playground",g={unversionedId:"playground/playground",id:"playground/playground",title:"FEEL Playground (online)",description:"Use the interactive editor below to evaluate",source:"@site/docs/playground/playground.mdx",sourceDirName:"playground",slug:"/playground/",permalink:"/feel-scala/docs/next/playground/",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/docs/playground/playground.mdx",tags:[],version:"current",frontMatter:{id:"playground",title:"FEEL Playground (online)"},sidebar:"Playground",next:{title:"FEEL REPL (local)",permalink:"/feel-scala/docs/next/playground/repl"}},m={},f=[{value:"About",id:"about",level:2}],y={toc:f};function E(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feel-playground"},"FEEL Playground"),(0,r.kt)("p",null,"Use the interactive editor below to evaluate\n",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-expressions-introduction"},"FEEL expressions"),"."),(0,r.kt)(s.Z,{defaultExpression:c()(l||(l=(0,o.Z)(["\n      3 + x"]))),feelContext:'{"x": 5}',metadata:{page:"tutorial-playground"},mdxType:"LiveFeel"}),(0,r.kt)("h2",{id:"about"},"About"),(0,r.kt)("admonition",{title:"Work in progress",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The playground is under construction. \ud83d\udea7 Stay tuned for updates!")),(0,r.kt)("p",null,"The playground uses the FEEL engine in the version ",(0,r.kt)(u.Z,{mdxType:"FeelPlaygroundVersion"}),"."),(0,r.kt)("p",null,"If the playground is broken, please report the failure\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/camunda-community-hub/feel-scala-playground/issues"},"here"),"."))}E.isMDXComponent=!0}}]);
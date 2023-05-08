"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[5497],{4863:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7462),a=n(7294),o=n(5671),s=n(3746);const i=e=>{let{children:t,onChange:n,language:i}=e;const r=(0,a.useRef)(null),[u,c]=(0,a.useState)(t),d=(0,a.useCallback)((e=>{const t=e.slice(0,-1);c(t),n(t)}),[]);return(0,o.Y)(r,d,{indentation:2}),a.createElement(s.ZP,(0,l.Z)({},s.lG,{code:u,language:i}),(e=>{let{className:t,style:n,tokens:l,getTokenProps:o}=e;return a.createElement("pre",{className:t,style:n,ref:r},l.map(((e,t)=>a.createElement(a.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>a.createElement("span",o({token:e,key:t})))),"\n"))))}))}},4294:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(7294),a=n(9669),o=n.n(a),s=n(4863),i=n(9537);const r=e=>{let{defaultExpression:t,feelContext:n,metadata:a,onResultCallback:r,onErrorCallback:u}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[c,d]=l.useState(t),[m,p]=l.useState(n),[g,h]=l.useState("<click 'Evaluate' to see the result of the expression>"),[f,k]=l.useState(null),v=/^.+(?<line>\d+):(?<position>\d+).+$/gm,y=/^.+at position (?<position>\d+)$/gm;function E(e){h(null),k(e),u&&u(e)}return l.createElement("div",null,l.createElement("h2",null,"Expression"),l.createElement(s.Z,{onChange:d,language:"js"},c),n&&l.createElement("div",null,l.createElement("h2",null,"Context"),l.createElement("i",null,"A JSON document that is used to resolve ",l.createElement("strong",null,"variables")," ","in the expression."),l.createElement(s.Z,{onChange:p,language:"json"},m)),l.createElement("button",{onClick:function(){try{h("<evaluating the expression...>");!function(e){o().post("https://34.160.251.253/api/v1/feel/evaluate",{expression:c,context:e,metadata:{...a}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,l;const t=e.data.error,a=v.exec(t);E({message:t,line:null==a||null==(n=a.groups)?void 0:n.line,position:null==a||null==(l=a.groups)?void 0:l.position})}else!function(e){k(null),h(e),r&&r(e)}(JSON.stringify(e.data.result))}))}(n?JSON.parse(m):{})}catch(t){var e;const n=y.exec(t.message);E({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),l.createElement("br",null),l.createElement("br",null),l.createElement("h2",null,"Result"),l.createElement(i.Z,{title:(()=>{const e=null!=f&&f.line?" on line "+f.line:"",t=null!=f&&f.position?" at position "+f.position:"";return f&&"Error"+e+t})(),language:"json"},g||(null==f?void 0:f.message)))}},2024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var l,a=n(7462),o=n(1880),s=(n(7294),n(3905)),i=n(4294),r=n(6518),u=n.n(r);const c={id:"tutorial-1-3",title:"1.3 Numeric functions"},d=void 0,m={unversionedId:"tutorial/tutorial-1-3",id:"version-1.15/tutorial/tutorial-1-3",title:"1.3 Numeric functions",description:"Zee is now entering France and during the battle with Hydra lost the Boots of Hermes. It is",source:"@site/versioned_docs/version-1.15/tutorial/tutorial-1-3.mdx",sourceDirName:"tutorial",slug:"/tutorial/tutorial-1-3",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-1-3",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.15/tutorial/tutorial-1-3.mdx",tags:[],version:"1.15",frontMatter:{id:"tutorial-1-3",title:"1.3 Numeric functions"},sidebar:"version-1.15/Tutorial",previous:{title:"1.2 More numeric expressions",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-1-2"},next:{title:"2.1 String expressions",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-2-1"}},p={},g=[],h={toc:g};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Zee is now entering France \ud83c\uddeb\ud83c\uddf7 and during the battle with Hydra lost the Boots of Hermes. It is\n7:00 AM and our friend has to continue by foot. \ud83d\udeb6\u200d\u2642\ufe0f The goal is to walk to Lyon which is\n729.1 kms distance."),(0,s.kt)("p",null,"Considering average walking speed is 5 km/h how many days would Zee need to walk without taking many\nrest?, and at what time would Zee reach Lyon?"),(0,s.kt)("p",null,"First determine the number of days using expressions were already used ",(0,s.kt)("inlineCode",{parentName:"p"},"distance / speed"),".\nIn this case: ",(0,s.kt)("inlineCode",{parentName:"p"},"729.1 / 5 = 145 hrs"),". To determine arrival time, we can leverage modular clock\n(24 hours) arithmetics using the function ",(0,s.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/builtin-functions/feel-built-in-functions-numeric#modulo"},"modulo()"),"."),(0,s.kt)(i.Z,{defaultExpression:u()(l||(l=(0,o.Z)(["\n    // use a 24 hour clock\n    hours + startingHour"]))),feelContext:'{"startingHour": 7, "hours": 145, "modulus": 24}',metadata:{page:"tutorial-1-2"},mdxType:"LiveFeel"}),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Solution"),(0,s.kt)("div",null,(0,s.kt)("div",null,"Zee would take 6 days to arrive and would be there at 8:00 AM."),(0,s.kt)("br",null),(0,s.kt)("pre",{title:"Expression"},"modulo((hours + startingHour), modulus)"))))}f.isMDXComponent=!0}}]);
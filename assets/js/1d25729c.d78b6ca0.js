"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[9740],{4863:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7462),l=n(7294),o=n(5671),s=n(3746);const r=e=>{let{children:t,onChange:n,language:r}=e;const i=(0,l.useRef)(null),[u,c]=(0,l.useState)(t),p=(0,l.useCallback)((e=>{const t=e.slice(0,-1);c(t),n(t)}),[]);return(0,o.Y)(i,p,{indentation:2}),l.createElement(s.ZP,(0,a.Z)({},s.lG,{code:u,language:r}),(e=>{let{className:t,style:n,tokens:a,getTokenProps:o}=e;return l.createElement("pre",{className:t,style:n,ref:i},a.map(((e,t)=>l.createElement(l.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>l.createElement("span",o({token:e,key:t})))),"\n"))))}))}},4294:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),l=n(9669),o=n.n(l),s=n(4863),r=n(9286),i=n(2389);const u=e=>{let{defaultExpression:t,feelContext:n,metadata:l,onResultCallback:u,onErrorCallback:c}=e;const p=function(){let e={};if((0,i.Z)()){const t=window.location.search,n=new URLSearchParams(t);n.has("expression")&&(e.expression=T(n.get("expression"))),n.has("context")&&(e.context=T(n.get("context")))}return e}();let d=p.context??n;d&&(d=JSON.stringify(JSON.parse(d),null,2));const[m,g]=a.useState(p.expression??t),[h,f]=a.useState(d),[k,v]=a.useState("<click 'Evaluate' to see the result of the expression>"),[x,y]=a.useState(null),[b,E]=a.useState(null),C=/^.+(?<line>\d+):(?<position>\d+).+$/gm,w=/^.+at position (?<position>\d+)$/gm;function S(e,t){v(null),y(e),E(t),c&&c(e)}function Z(e){return btoa(e)}function T(e){return atob(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(s.Z,{onChange:g,language:"js"},m),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(s.Z,{onChange:f,language:"json"},h)),a.createElement("button",{onClick:function(){try{v("<evaluating the expression...>"),E(null);!function(e){o().post("https://feel.upgradingdave.com/api/v1/feel/evaluate",{expression:m,context:e,metadata:{...l}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,l=C.exec(t);S({message:t,line:null==l||null==(n=l.groups)?void 0:n.line,position:null==l||null==(a=l.groups)?void 0:a.position},e.data.warnings)}else!function(e){y(null);const t=JSON.stringify(e.result);v(t),e.warnings.length>=1&&E(e.warnings);u&&u(t)}(e.data)}))}(n&&0!==h.trim().length?JSON.parse(h):{})}catch(t){var e;const n=w.exec(t.message);S({message:`failed to parse context: ${t.message}`,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("button",{onClick:function(){navigator.clipboard.writeText(function(){const e=window.location.href.split("?")[0],t=window.location.search,n=new URLSearchParams(t);return n.set("expression",Z(m)),h&&n.set("context",Z(h)),n.set("expression-type","expression"),e+"?"+n}())},className:"button button--secondary button--lg",title:"Copy an URL to the clipboard for sharing the expression",style:{"margin-left":"10px"}},"Share"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(r.Z,{title:(()=>{const e=null!=x&&x.line?` on line ${x.line}`:"",t=null!=x&&x.position?` at position ${x.position}`:"";return x&&`Error${e}${t}`})(),language:"json"},k||(null==x?void 0:x.message)),a.createElement("br",null),a.createElement("h2",null,"Warnings"),a.createElement(r.Z,null,(null==b?void 0:b.map(((e,t)=>a.createElement("li",{key:t},"[",e.type,"] ",e.message))))||"<none>"))}},9440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),l=(n(7294),n(3905)),o=n(4294),s=n(6518),r=n.n(s);const i={id:"tutorial-3-2",title:"3.2 Temporal functions"},u=void 0,c={unversionedId:"tutorial/tutorial-3-2",id:"version-1.15/tutorial/tutorial-3-2",title:"3.2 Temporal functions",description:"Since Zee has 11 days to reach the CamundaCon, Zee decides to stay a bit longer in Cologne. For",source:"@site/versioned_docs/version-1.15/tutorial/tutorial-3-2.mdx",sourceDirName:"tutorial",slug:"/tutorial/tutorial-3-2",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-3-2",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.15/tutorial/tutorial-3-2.mdx",tags:[],version:"1.15",frontMatter:{id:"tutorial-3-2",title:"3.2 Temporal functions"},sidebar:"version-1.15/Tutorial",previous:{title:"3.1 Temporal expressions",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-3-1"},next:{title:"4.1 Final Stop: Lists expressions",permalink:"/feel-scala/docs/1.15/tutorial/tutorial-4-1"}},p={},d=[],m={toc:d};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Since Zee has 11 days to reach the CamundaCon, Zee decides to stay a bit longer in Cologne. \ud83c\udde9\ud83c\uddea For\nthe last trip, Zee wants to take a train \ud83d\ude85 to Berlin."),(0,l.kt)("p",null,"On the train schedule, there is a special train that leaves Cologne on each Monday morning. Zee\nlooks at the calendar but is unsure about the current weekday."),(0,l.kt)("p",null,"Can you help him? Use\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.camunda.io/docs/components/modeler/feel/builtin-functions/feel-built-in-functions-temporal"},"temporal functions")," to resolve the\ncurrent weekday."),(0,l.kt)(o.Z,{defaultExpression:r()`
    // use a function to get the weekday of the current date
    date(targetDate)`,feelContext:'{"targetDate": "2022-10-05", "remainingTime": "P11D"}',metadata:{page:"tutorial-3-2"},mdxType:"LiveFeel"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Solution"),(0,l.kt)("div",null,(0,l.kt)("div",null,"It is Saturday. Zee can stay the weekend in Cologne."),(0,l.kt)("br",null),(0,l.kt)("pre",{title:"Expression"},"day of week(date(targetDate) - duration(remainingTime))"))))}g.isMDXComponent=!0}}]);
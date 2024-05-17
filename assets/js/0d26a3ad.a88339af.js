"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[884],{4863:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),l=n(7294),r=n(5671),o=n(3746);const s=e=>{let{children:t,onChange:n,language:s}=e;const i=(0,l.useRef)(null),[c,u]=(0,l.useState)(t),p=(0,l.useCallback)((e=>{const t=e.slice(0,-1);u(t),n(t)}),[]);return(0,r.Y)(i,p,{indentation:2}),l.createElement(o.ZP,(0,a.Z)({},o.lG,{code:c,language:s}),(e=>{let{className:t,style:n,tokens:a,getTokenProps:r}=e;return l.createElement("pre",{className:t,style:n,ref:i},a.map(((e,t)=>l.createElement(l.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>l.createElement("span",r({token:e,key:t})))),"\n"))))}))}},4294:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(9669),r=n.n(l),o=n(4863),s=n(9286),i=n(2389);const c=e=>{let{defaultExpression:t,feelContext:n,metadata:l,onResultCallback:c,onErrorCallback:u}=e;const p=function(){let e={};if((0,i.Z)()){const t=window.location.search,n=new URLSearchParams(t);n.has("expression")&&(e.expression=N(n.get("expression"))),n.has("context")&&(e.context=N(n.get("context")))}return e}();let d=p.context??n;d&&(d=JSON.stringify(JSON.parse(d),null,2));const[h,m]=a.useState(p.expression??t),[g,f]=a.useState(d),[x,k]=a.useState("<click 'Evaluate' to see the result of the expression>"),[v,b]=a.useState(null),[w,y]=a.useState(null),E=/^.+(?<line>\d+):(?<position>\d+).+$/gm,C=/^.+at position (?<position>\d+)$/gm;function Z(e,t){k(null),b(e),y(t),u&&u(e)}function S(e){return btoa(e)}function N(e){return atob(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(o.Z,{onChange:m,language:"js"},h),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(o.Z,{onChange:f,language:"json"},g)),a.createElement("button",{onClick:function(){try{k("<evaluating the expression...>"),y(null);!function(e){r().post("https://feel.upgradingdave.com/api/v1/feel/evaluate",{expression:h,context:e,metadata:{...l}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,l=E.exec(t);Z({message:t,line:null==l||null==(n=l.groups)?void 0:n.line,position:null==l||null==(a=l.groups)?void 0:a.position},e.data.warnings)}else!function(e){b(null);const t=JSON.stringify(e.result);k(t),e.warnings.length>=1&&y(e.warnings);c&&c(t)}(e.data)}))}(n&&0!==g.trim().length?JSON.parse(g):{})}catch(t){var e;const n=C.exec(t.message);Z({message:`failed to parse context: ${t.message}`,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("button",{onClick:function(){navigator.clipboard.writeText(function(){const e=window.location.href.split("?")[0],t=window.location.search,n=new URLSearchParams(t);return n.set("expression",S(h)),g&&n.set("context",S(g)),n.set("expression-type","expression"),e+"?"+n}())},className:"button button--secondary button--lg",title:"Copy an URL to the clipboard for sharing the expression",style:{"margin-left":"10px"}},"Share"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(s.Z,{title:(()=>{const e=null!=v&&v.line?` on line ${v.line}`:"",t=null!=v&&v.position?` at position ${v.position}`:"";return v&&`Error${e}${t}`})(),language:"json"},x||(null==v?void 0:v.message)),a.createElement("br",null),a.createElement("h2",null,"Warnings"),a.createElement(s.Z,null,(null==w?void 0:w.map(((e,t)=>a.createElement("li",{key:t},"[",e.type,"] ",e.message))))||"<none>"))}},175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(7462),l=(n(7294),n(3905)),r=n(4294),o=n(6518),s=n.n(o);const i={id:"chapter-2",title:"Chapter 2"},c=void 0,u={unversionedId:"learn/challenge/chapter-2",id:"learn/challenge/chapter-2",title:"Chapter 2",description:"Once Zee arrived to Pamplona, a mystical creature appearedsnake: The Hydra was a",source:"@site/docs/learn/challenge/chapter-2.mdx",sourceDirName:"learn/challenge",slug:"/learn/challenge/chapter-2",permalink:"/feel-scala/docs/next/learn/challenge/chapter-2",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/docs/learn/challenge/chapter-2.mdx",tags:[],version:"current",frontMatter:{id:"chapter-2",title:"Chapter 2"},sidebar:"Learn",previous:{title:"Chapter 1",permalink:"/feel-scala/docs/next/learn/challenge/chapter-1"},next:{title:"Chapter 3",permalink:"/feel-scala/docs/next/learn/challenge/chapter-3"}},p={},d=[],h={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Once Zee arrived to Pamplona, a mystical creature appeared: Lerna's Hydra. \ud83d\udc0d The Hydra was a\none-headed monster that when it's head was cut off, 2 more heads would grew in its place."),(0,l.kt)("p",null,"Zee reached for a sword \ud83d\udde1\ufe0f and cut off the head of the beast. As a result 2 more\nappeared. \ud83d\ude31 Zee cut both heads off again, which doubled to 4. How many heads would the beast\nhave after cutting them for 5 times?"),(0,l.kt)("p",null,"We could try to represent this in a multiplication like this: ",(0,l.kt)("inlineCode",{parentName:"p"},"2*2*2*2*2"),", but we can leverage\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.camunda.io/docs/components/modeler/feel/language-guide/feel-numeric-expressions#exponentiation"},"exponentiation")," and\nrepresent it like the following expression:"),(0,l.kt)(r.Z,{defaultExpression:s()`
    // use exponentiation to represent the multiplications
    2*2*2*2*2`,feelContext:'{"base": 2, "exponent": 5}',metadata:{page:"challenge-2"},mdxType:"LiveFeel"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Solution"),(0,l.kt)("div",null,(0,l.kt)("div",null,"By the 5th time, there were 32 heads and no apparent way out, thankfully the heads started fighting with each other and Zee was able to escape."),(0,l.kt)("br",null),(0,l.kt)("pre",{title:"Expression"},"base ** exponent"))))}m.isMDXComponent=!0}}]);
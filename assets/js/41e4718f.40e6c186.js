"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[941],{4863:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(7462),a=n(7294),r=n(5671),s=n(3746);const o=e=>{let{children:t,onChange:n,language:o}=e;const i=(0,a.useRef)(null),[c,u]=(0,a.useState)(t),p=(0,a.useCallback)((e=>{const t=e.slice(0,-1);u(t),n(t)}),[]);return(0,r.Y)(i,p,{indentation:2}),a.createElement(s.ZP,(0,l.Z)({},s.lG,{code:c,language:o}),(e=>{let{className:t,style:n,tokens:l,getTokenProps:r}=e;return a.createElement("pre",{className:t,style:n,ref:i},l.map(((e,t)=>a.createElement(a.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>a.createElement("span",r({token:e,key:t})))),"\n"))))}))}},6238:(e,t,n)=>{n.d(t,{Z:()=>p});var l=n(7294);const a=n.p+"assets/images/envelope-f87a5f40af8a589b3ce20a1d6d1461e7.png",r={position:"relative",textAlign:"left",color:"black"},s={position:"absolute",top:"10px",left:"16px"},o={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"};class i extends l.Component{constructor(e){super(e)}render(){return l.createElement("div",{style:r},l.createElement("img",{src:a}),l.createElement("div",{style:s},"Zee",l.createElement("br",null),"Camunda Services GmbH",l.createElement("br",null),"Zossener Str. 55",l.createElement("br",null),"10961 Berlin",l.createElement("br",null),"Germany"),l.createElement("div",{style:o},this.props.addressName,l.createElement("br",null),"Camunda Inc.",l.createElement("br",null),"INDUSTRY Denver",l.createElement("br",null),"3001 Brighton Blvd, Suite 450",l.createElement("br",null),"Denver, CO 80216",l.createElement("br",null),"USA"))}}const c=i;var u=n(4294);const p=e=>{let{defaultExpression:t,feelContext:n,metadata:a}=e;const r="< Fill in the name here >",[s,o]=l.useState(r);return l.createElement("div",null,l.createElement(u.Z,{defaultExpression:t,feelContext:n,metadata:a,onResultCallback:e=>o(e.replaceAll('"',"")),onErrorCallback:e=>o(r)}),l.createElement(c,{addressName:s}))}},4294:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7294),a=n(9669),r=n.n(a),s=n(4863),o=n(9537);const i=e=>{let{defaultExpression:t,feelContext:n,metadata:a,onResultCallback:i,onErrorCallback:c}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[u,p]=l.useState(t),[m,d]=l.useState(n),[h,f]=l.useState("<click 'Evaluate' to see the result of the expression>"),[g,E]=l.useState(null),v=/^.+(?<line>\d+):(?<position>\d+).+$/gm,k=/^.+at position (?<position>\d+)$/gm;function x(e){f(null),E(e),c&&c(e)}return l.createElement("div",null,l.createElement("h2",null,"Expression"),l.createElement(s.Z,{onChange:p,language:"js"},u),n&&l.createElement("div",null,l.createElement("h2",null,"Context"),l.createElement("i",null,"A JSON document that is used to resolve ",l.createElement("strong",null,"variables")," ","in the expression."),l.createElement(s.Z,{onChange:d,language:"json"},m)),l.createElement("button",{onClick:function(){try{f("<evaluating the expression...>");!function(e){r().post("https://34.160.251.253/api/v1/feel/evaluate",{expression:u,context:e,metadata:{...a}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,l;const t=e.data.error,a=v.exec(t);x({message:t,line:null==a||null==(n=a.groups)?void 0:n.line,position:null==a||null==(l=a.groups)?void 0:l.position})}else!function(e){E(null),f(e),i&&i(e)}(JSON.stringify(e.data.result))}))}(n?JSON.parse(m):{})}catch(t){var e;const n=k.exec(t.message);x({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),l.createElement("br",null),l.createElement("br",null),l.createElement("h2",null,"Result"),l.createElement(o.Z,{title:(()=>{const e=null!=g&&g.line?" on line "+g.line:"",t=null!=g&&g.position?" at position "+g.position:"";return g&&"Error"+e+t})(),language:"json"},h||(null==g?void 0:g.message)))}},577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>h});var l,a=n(7462),r=n(1880),s=(n(7294),n(3905)),o=n(6518),i=n.n(o),c=(n(4294),n(6238));const u={id:"chapter-4",title:"Chapter 4"},p=void 0,m={unversionedId:"learn/challenge/chapter-4",id:"learn/challenge/chapter-4",title:"Chapter 4",description:"Before he continues on his quest, Zee promised to keep in touch with friends back home and send them",source:"@site/docs/learn/challenge/chapter-4.mdx",sourceDirName:"learn/challenge",slug:"/learn/challenge/chapter-4",permalink:"/feel-scala/docs/next/learn/challenge/chapter-4",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/docs/learn/challenge/chapter-4.mdx",tags:[],version:"current",frontMatter:{id:"chapter-4",title:"Chapter 4"},sidebar:"Learn",previous:{title:"Chapter 3",permalink:"/feel-scala/docs/next/learn/challenge/chapter-3"},next:{title:"Chapter 5",permalink:"/feel-scala/docs/next/learn/challenge/chapter-5"}},d={},h=[],f={toc:h};function g(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Before he continues on his quest, Zee promised to keep in touch with friends back home and send them\neach a letter. \ud83d\udce8"),(0,s.kt)("p",null,"Luckily, FEEL ",(0,s.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-string-expressions"},"string expressions")," are\nhere to Help and save time. Use an expression to fill the name on the envelope that contains the\nfirst and the last name."),(0,s.kt)(c.Z,{defaultExpression:i()(l||(l=(0,r.Z)(["\n      // concatenate the first and the last name\n      firstName"]))),feelContext:'{"firstName":"?", "lastName":"?"}',metadata:{page:"challenge-4"},mdxType:"EnvelopeAddress"}),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Solution"),(0,s.kt)("div",null,(0,s.kt)("div",null,"Zee labels the envelopes and send them out."),(0,s.kt)("br",null),(0,s.kt)("pre",{title:"Expression"},'firstName + " " + lastName'))))}g.isMDXComponent=!0}}]);
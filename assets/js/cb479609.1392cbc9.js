"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[9472],{4863:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(7462),a=n(7294),r=n(5671),s=n(3746);const o=e=>{let{children:t,onChange:n,language:o}=e;const i=(0,a.useRef)(null),[c,u]=(0,a.useState)(t),p=(0,a.useCallback)((e=>{const t=e.slice(0,-1);u(t),n(t)}),[]);return(0,r.Y)(i,p,{indentation:2}),a.createElement(s.ZP,(0,l.Z)({},s.lG,{code:c,language:o}),(e=>{let{className:t,style:n,tokens:l,getTokenProps:r}=e;return a.createElement("pre",{className:t,style:n,ref:i},l.map(((e,t)=>a.createElement(a.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>a.createElement("span",r({token:e,key:t})))),"\n"))))}))}},6238:(e,t,n)=>{n.d(t,{Z:()=>p});var l=n(7294);const a=n.p+"assets/images/envelope-f87a5f40af8a589b3ce20a1d6d1461e7.png",r={position:"relative",textAlign:"left",color:"black"},s={position:"absolute",top:"10px",left:"16px"},o={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"};class i extends l.Component{constructor(e){super(e)}render(){return l.createElement("div",{style:r},l.createElement("img",{src:a}),l.createElement("div",{style:s},"Zee",l.createElement("br",null),"Camunda Services GmbH",l.createElement("br",null),"Zossener Str. 55",l.createElement("br",null),"10961 Berlin",l.createElement("br",null),"Germany"),l.createElement("div",{style:o},this.props.addressName,l.createElement("br",null),"Camunda Inc.",l.createElement("br",null),"INDUSTRY Denver",l.createElement("br",null),"3001 Brighton Blvd, Suite 450",l.createElement("br",null),"Denver, CO 80216",l.createElement("br",null),"USA"))}}const c=i;var u=n(4294);const p=e=>{let{defaultExpression:t,feelContext:n,metadata:a}=e;const r="< Fill in the name here >",[s,o]=l.useState(r);return l.createElement("div",null,l.createElement(u.Z,{defaultExpression:t,feelContext:n,metadata:a,onResultCallback:e=>o(e.replaceAll('"',"")),onErrorCallback:e=>o(r)}),l.createElement(c,{addressName:s}))}},4294:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(7294),a=n(9669),r=n.n(a),s=n(4863),o=n(9286),i=n(2389);const c=e=>{let{defaultExpression:t,feelContext:n,metadata:a,onResultCallback:c,onErrorCallback:u}=e;const p=function(){let e={};if((0,i.Z)()){const t=window.location.search,n=new URLSearchParams(t);n.has("expression")&&(e.expression=w(n.get("expression"))),n.has("context")&&(e.context=w(n.get("context")))}return e}();let m=p.context??n;m&&(m=JSON.stringify(JSON.parse(m),null,2));const[d,h]=l.useState(p.expression??t),[g,f]=l.useState(m),[E,v]=l.useState("<click 'Evaluate' to see the result of the expression>"),[x,b]=l.useState(null),[k,C]=l.useState(null),y=/^.+(?<line>\d+):(?<position>\d+).+$/gm,S=/^.+at position (?<position>\d+)$/gm;function N(e,t){v(null),b(e),C(t),u&&u(e)}function Z(e){return btoa(e)}function w(e){return atob(e)}return l.createElement("div",null,l.createElement("h2",null,"Expression"),l.createElement(s.Z,{onChange:h,language:"js"},d),n&&l.createElement("div",null,l.createElement("h2",null,"Context"),l.createElement("i",null,"A JSON document that is used to resolve ",l.createElement("strong",null,"variables")," ","in the expression."),l.createElement(s.Z,{onChange:f,language:"json"},g)),l.createElement("button",{onClick:function(){try{v("<evaluating the expression...>"),C(null);!function(e){r().post("https://feel.upgradingdave.com/api/v1/feel/evaluate",{expression:d,context:e,metadata:{...a}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,l;const t=e.data.error,a=y.exec(t);N({message:t,line:null==a||null==(n=a.groups)?void 0:n.line,position:null==a||null==(l=a.groups)?void 0:l.position},e.data.warnings)}else!function(e){b(null);const t=JSON.stringify(e.result);v(t),e.warnings.length>=1&&C(e.warnings);c&&c(t)}(e.data)}))}(n&&0!==g.trim().length?JSON.parse(g):{})}catch(t){var e;const n=S.exec(t.message);N({message:`failed to parse context: ${t.message}`,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),l.createElement("button",{onClick:function(){navigator.clipboard.writeText(function(){const e=window.location.href.split("?")[0],t=window.location.search,n=new URLSearchParams(t);return n.set("expression",Z(d)),g&&n.set("context",Z(g)),n.set("expression-type","expression"),e+"?"+n}())},className:"button button--secondary button--lg",title:"Copy an URL to the clipboard for sharing the expression",style:{"margin-left":"10px"}},"Share"),l.createElement("br",null),l.createElement("br",null),l.createElement("h2",null,"Result"),l.createElement(o.Z,{title:(()=>{const e=null!=x&&x.line?` on line ${x.line}`:"",t=null!=x&&x.position?` at position ${x.position}`:"";return x&&`Error${e}${t}`})(),language:"json"},E||(null==x?void 0:x.message)),l.createElement("br",null),l.createElement("h2",null,"Warnings"),l.createElement(o.Z,null,(null==k?void 0:k.map(((e,t)=>l.createElement("li",{key:t},"[",e.type,"] ",e.message))))||"<none>"))}},5336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var l=n(7462),a=(n(7294),n(3905)),r=n(6518),s=n.n(r),o=(n(4294),n(6238));const i={id:"chapter-4",title:"Chapter 4"},c=void 0,u={unversionedId:"learn/challenge/chapter-4",id:"version-1.17/learn/challenge/chapter-4",title:"Chapter 4",description:"Before he continues on his quest, Zee promised to keep in touch with friends back home and send them",source:"@site/versioned_docs/version-1.17/learn/challenge/chapter-4.mdx",sourceDirName:"learn/challenge",slug:"/learn/challenge/chapter-4",permalink:"/feel-scala/docs/learn/challenge/chapter-4",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.17/learn/challenge/chapter-4.mdx",tags:[],version:"1.17",frontMatter:{id:"chapter-4",title:"Chapter 4"},sidebar:"Learn",previous:{title:"Chapter 3",permalink:"/feel-scala/docs/learn/challenge/chapter-3"},next:{title:"Chapter 5",permalink:"/feel-scala/docs/learn/challenge/chapter-5"}},p={},m=[],d={toc:m};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before he continues on his quest, Zee promised to keep in touch with friends back home and send them\neach a letter. \ud83d\udce8"),(0,a.kt)("p",null,"Luckily, FEEL ",(0,a.kt)("a",{parentName:"p",href:"https://docs.camunda.io/docs/components/modeler/feel/language-guide/feel-string-expressions/"},"string expressions")," are\nhere to Help and save time. Use an expression to fill the name on the envelope that contains the\nfirst and the last name."),(0,a.kt)(o.Z,{defaultExpression:s()`
      // concatenate the first and the last name
      firstName`,feelContext:'{"firstName":"?", "lastName":"?"}',metadata:{page:"challenge-4"},mdxType:"EnvelopeAddress"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Solution"),(0,a.kt)("div",null,(0,a.kt)("div",null,"Zee labels the envelopes and send them out."),(0,a.kt)("br",null),(0,a.kt)("pre",{title:"Expression"},'firstName + " " + lastName'))))}h.isMDXComponent=!0}}]);
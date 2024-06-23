"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[6500],{6436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(5893),s=n(1151),a=n(3361);const o={title:"rekalogika/rekapager"},c=void 0,i={id:"rekapager/index",title:"rekalogika/rekapager",description:"Rekapager is a pagination library for PHP.",source:"@site/docs/rekapager/index.md",sourceDirName:"rekapager",slug:"/rekapager/",permalink:"/rekapager/",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/rekapager/index.md",tags:[],version:"current",frontMatter:{title:"rekalogika/rekapager"},sidebar:"docs",previous:{title:"Usage",permalink:"/reconstitutor/usage"},next:{title:"Introduction",permalink:"/rekapager/intro"}},l={},u=[{value:"Sections",id:"sections",level:2}];function d(e){const t={h2:"h2",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Rekapager is a pagination library for PHP."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Pager",src:n(19).Z+"",width:"414",height:"40"})}),"\n",(0,r.jsx)(t.h2,{id:"sections",children:"Sections"}),"\n",(0,r.jsx)(a.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3361:(e,t,n)=>{n.d(t,{Z:()=>H});var r=n(7294),s=n(6905),a=n(3438),o=n(3692),c=n(2263);const i=["zero","one","two","few","many","other"];function l(e){return i.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,c.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),a=n.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(n,t,e)}}var f=n(3919),h=n(5999),p=n(2503);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var A=n(5893);function M(e){let{href:t,children:n}=e;return(0,A.jsx)(o.Z,{href:t,className:(0,s.Z)("card padding--lg",x.cardContainer),children:n})}function g(e){let{href:t,icon:n,title:r,description:a}=e;return(0,A.jsxs)(M,{href:t,children:[(0,A.jsxs)(p.Z,{as:"h2",className:(0,s.Z)("text--truncate",x.cardTitle),title:r,children:[n," ",r]}),a&&(0,A.jsx)("p",{className:(0,s.Z)("text--truncate",x.cardDescription),title:a,children:a})]})}function j(e){let{item:t}=e;const n=(0,a.LM)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,h.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,A.jsx)(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function D(e){let{item:t}=e;const n=(0,f.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return(0,A.jsx)(g,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return(0,A.jsx)(D,{item:t});case"category":return(0,A.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function P(e){let{className:t}=e;const n=(0,a.jA)();return(0,A.jsx)(H,{items:n.items,className:t})}function H(e){const{items:t,className:n}=e;if(!t)return(0,A.jsx)(P,{...e});const r=(0,a.MN)(t);return(0,A.jsx)("section",{className:(0,s.Z)("row",n),children:r.map(((e,t)=>(0,A.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,A.jsx)(k,{item:e})},t)))})}},19:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(7294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[2980],{479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(5893),i=n(1151),c=n(3361);const s={title:"Implementations"},o=void 0,l={id:"collections/implementations/index",title:"Implementations",description:"Summary",source:"@site/docs/collections/02-implementations/index.md",sourceDirName:"collections/02-implementations",slug:"/collections/implementations/",permalink:"/collections/implementations/",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/collections/02-implementations/index.md",tags:[],version:"current",frontMatter:{title:"Implementations"},sidebar:"docs",previous:{title:"Interfaces",permalink:"/collections/interfaces"},next:{title:"Collection Decorators",permalink:"/collections/implementations/decorators"}},a={},d=[{value:"Summary",id:"summary",level:2},{value:"Sections",id:"sections",level:2}];function u(e){const t={code:"code",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Underlying object"}),(0,r.jsx)(t.th,{children:"Full flavor"}),(0,r.jsx)(t.th,{children:"Minimal flavor"}),(0,r.jsx)(t.th,{children:"Extra-Minimal flavor"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Collection"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"RecollectionDecorator"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"MinimalRecollectionDecorator"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"Collection"})," + ",(0,r.jsx)(t.code,{children:"Criteria"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CriteriaRecollection"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"MinimalCriteriaRecollection"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ManagerRegistry"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"AbstractRepository"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"AbstractMinimalRepository"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"QueryBuilder"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"QueryRecollection"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"QueryPageable"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"sections",children:"Sections"}),"\n",(0,r.jsx)(c.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3361:(e,t,n)=>{n.d(t,{Z:()=>M});var r=n(7294),i=n(512),c=n(3438),s=n(3692),o=n(2263);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function h(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),c=n.pluralForms.indexOf(i);return r[Math.min(c,r.length-1)]}(n,t,e)}}var m=n(3919),x=n(5999),j=n(2503);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var f=n(5893);function g(e){let{href:t,children:n}=e;return(0,f.jsx)(s.Z,{href:t,className:(0,i.Z)("card padding--lg",p.cardContainer),children:n})}function y(e){let{href:t,icon:n,title:r,description:c}=e;return(0,f.jsxs)(g,{href:t,children:[(0,f.jsxs)(j.Z,{as:"h2",className:(0,i.Z)("text--truncate",p.cardTitle),title:r,children:[n," ",r]}),c&&(0,f.jsx)("p",{className:(0,i.Z)("text--truncate",p.cardDescription),title:c,children:c})]})}function b(e){let{item:t}=e;const n=(0,c.LM)(t),r=function(){const{selectMessage:e}=h();return t=>e(t,(0,x.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,f.jsx)(y,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function k(e){let{item:t}=e;const n=(0,m.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return(0,f.jsx)(y,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,f.jsx)(k,{item:t});case"category":return(0,f.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function C(e){let{className:t}=e;const n=(0,c.jA)();return(0,f.jsx)(M,{items:n.items,className:t})}function M(e){const{items:t,className:n}=e;if(!t)return(0,f.jsx)(C,{...e});const r=(0,c.MN)(t);return(0,f.jsx)("section",{className:(0,i.Z)("row",n),children:r.map(((e,t)=>(0,f.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,f.jsx)(v,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(7294);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[5118],{4260:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=o(5893),r=o(1151),c=o(3361);const i={title:"rekalogika/doctrine-collections-decorator"},s=void 0,l={id:"doctrine-collections-decorator/index",title:"rekalogika/doctrine-collections-decorator",description:"Lets you easily create decorator classes to modify the behaviors of Doctrine",source:"@site/docs/doctrine-collections-decorator/index.md",sourceDirName:"doctrine-collections-decorator",slug:"/doctrine-collections-decorator/",permalink:"/doctrine-collections-decorator/",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/doctrine-collections-decorator/index.md",tags:[],version:"current",frontMatter:{title:"rekalogika/doctrine-collections-decorator"},sidebar:"docs",previous:{title:"rekalogika/direct-property-access",permalink:"/direct-property-access/"},next:{title:"Introduction & Installation",permalink:"/doctrine-collections-decorator/intro"}},a={},d=[{value:"Sections",id:"sections",level:2}];function u(e){const t={h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Lets you easily create decorator classes to modify the behaviors of Doctrine\nCollection objects, including the collection objects used by Doctrine ORM in\nyour entities."}),"\n",(0,n.jsx)(t.h2,{id:"sections",children:"Sections"}),"\n",(0,n.jsx)(c.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3361:(e,t,o)=>{o.d(t,{Z:()=>C});var n=o(7294),r=o(6905),c=o(3438),i=o(3692),s=o(2263);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,s.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,o)=>function(e,t,o){const n=e.split("|");if(1===n.length)return n[0];n.length>o.pluralForms.length&&console.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=o.select(t),c=o.pluralForms.indexOf(r);return n[Math.min(c,n.length-1)]}(o,t,e)}}var h=o(3919),p=o(5999),f=o(2503);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=o(5893);function k(e){let{href:t,children:o}=e;return(0,x.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",g.cardContainer),children:o})}function j(e){let{href:t,icon:o,title:n,description:c}=e;return(0,x.jsxs)(k,{href:t,children:[(0,x.jsxs)(f.Z,{as:"h2",className:(0,r.Z)("text--truncate",g.cardTitle),title:n,children:[o," ",n]}),c&&(0,x.jsx)("p",{className:(0,r.Z)("text--truncate",g.cardDescription),title:c,children:c})]})}function y(e){let{item:t}=e;const o=(0,c.LM)(t),n=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return o?(0,x.jsx)(j,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function b(e){let{item:t}=e;const o=(0,h.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.xz)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:o,title:t.label,description:t.description??n?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(b,{item:t});case"category":return(0,x.jsx)(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const o=(0,c.jA)();return(0,x.jsx)(C,{items:o.items,className:t})}function C(e){const{items:t,className:o}=e;if(!t)return(0,x.jsx)(w,{...e});const n=(0,c.MN)(t);return(0,x.jsx)("section",{className:(0,r.Z)("row",o),children:n.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(v,{item:e})},t)))})}},1151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>i});var n=o(7294);const r={},c=n.createContext(r);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);
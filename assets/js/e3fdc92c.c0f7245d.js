"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[17],{391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(5893),i=n(1151),o=n(3361);const s={title:"rekalogika/file"},l=void 0,c={id:"file/index",title:"rekalogika/file",description:"High-level file abstraction library built on top of Flysystem. It lets you work",source:"@site/docs/file/index.md",sourceDirName:"file",slug:"/file/",permalink:"/file/",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file/index.md",tags:[],version:"current",frontMatter:{title:"rekalogika/file"},sidebar:"docs",previous:{title:"Tips",permalink:"/domain-event/tips"},next:{title:"Introduction",permalink:"/file/intro"}},a={},u=[{value:"Sections",id:"sections",level:2}];function d(e){const t={h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"High-level file abstraction library built on top of Flysystem. It lets you work\nwith file objects in an object-oriented manner. A file object represents a file\nin a Flysystem filesystem. It can be a local file or a file in a cloud storage,\nthe library lets you work with them in the same way."}),"\n",(0,r.jsx)(t.h2,{id:"sections",children:"Sections"}),"\n",(0,r.jsx)(o.Z,{})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3361:(e,t,n)=>{n.d(t,{Z:()=>F});var r=n(7294),i=n(6905),o=n(3438),s=n(3692),l=n(2263);const c=["zero","one","two","few","many","other"];function a(e){return c.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function f(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),o=n.pluralForms.indexOf(i);return r[Math.min(o,r.length-1)]}(n,t,e)}}var m=n(3919),h=n(5999),p=n(2503);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(5893);function k(e){let{href:t,children:n}=e;return(0,x.jsx)(s.Z,{href:t,className:(0,i.Z)("card padding--lg",g.cardContainer),children:n})}function y(e){let{href:t,icon:n,title:r,description:o}=e;return(0,x.jsxs)(k,{href:t,children:[(0,x.jsxs)(p.Z,{as:"h2",className:(0,i.Z)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),o&&(0,x.jsx)("p",{className:(0,i.Z)("text--truncate",g.cardDescription),title:o,children:o})]})}function j(e){let{item:t}=e;const n=(0,o.LM)(t),r=function(){const{selectMessage:e}=f();return t=>e(t,(0,h.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(y,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function b(e){let{item:t}=e;const n=(0,m.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return(0,x.jsx)(y,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function w(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(b,{item:t});case"category":return(0,x.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,o.jA)();return(0,x.jsx)(F,{items:n.items,className:t})}function F(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(v,{...e});const r=(0,o.MN)(t);return(0,x.jsx)("section",{className:(0,i.Z)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(w,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var r=n(7294);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
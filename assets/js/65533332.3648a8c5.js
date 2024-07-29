"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[39],{6881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(5893),s=r(1151),a=r(3361);const o={title:"Adapters"},i=void 0,c={id:"rekapager/adapters/index",title:"Adapters",description:"Adapters abstract the differences between the different types of data sources.",source:"@site/docs/rekapager/02-adapters/index.md",sourceDirName:"rekapager/02-adapters",slug:"/rekapager/adapters/",permalink:"/rekapager/adapters/",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/rekapager/02-adapters/index.md",tags:[],version:"current",frontMatter:{title:"Adapters"},sidebar:"docs",previous:{title:"Installation and Usage",permalink:"/rekapager/usage"},next:{title:"Doctrine ORM QueryBuilder",permalink:"/rekapager/adapters/doctrine-orm-querybuilder"}},l={},d=[{value:"Sections",id:"sections",level:2}];function u(e){const t={code:"code",h2:"h2",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Adapters abstract the differences between the different types of data sources.\nAn adapter is coupled to a ",(0,n.jsx)(t.code,{children:"PageableInterface"})," instance, which consolidates the\ncommon behaviors of the different types of data sources for providing pagination\nfunctionality."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Pageable",src:r(4350).Z+"#light",width:"983",height:"651"}),"\n",(0,n.jsx)(t.img,{alt:"Pageable",src:r(9362).Z+"#dark",width:"983",height:"651"})]}),"\n",(0,n.jsx)(t.h2,{id:"sections",children:"Sections"}),"\n",(0,n.jsx)(a.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3361:(e,t,r)=>{r.d(t,{Z:()=>Z});var n=r(7294),s=r(512),a=r(3438),o=r(3692),i=r(2263);const c=["zero","one","two","few","many","other"];function l(e){return c.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function p(){const e=u();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),a=r.pluralForms.indexOf(s);return n[Math.min(a,n.length-1)]}(r,t,e)}}var f=r(3919),m=r(5999),h=r(2503);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=r(5893);function k(e){let{href:t,children:r}=e;return(0,x.jsx)(o.Z,{href:t,className:(0,s.Z)("card padding--lg",g.cardContainer),children:r})}function j(e){let{href:t,icon:r,title:n,description:a}=e;return(0,x.jsxs)(k,{href:t,children:[(0,x.jsxs)(h.Z,{as:"h2",className:(0,s.Z)("text--truncate",g.cardTitle),title:n,children:[r," ",n]}),a&&(0,x.jsx)("p",{className:(0,s.Z)("text--truncate",g.cardDescription),title:a,children:a})]})}function b(e){let{item:t}=e;const r=(0,a.LM)(t),n=function(){const{selectMessage:e}=p();return t=>e(t,(0,m.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,x.jsx)(j,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function v(e){let{item:t}=e;const r=(0,f.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,a.xz)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function w(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(v,{item:t});case"category":return(0,x.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.jA)();return(0,x.jsx)(Z,{items:r.items,className:t})}function Z(e){const{items:t,className:r}=e;if(!t)return(0,x.jsx)(y,{...e});const n=(0,a.MN)(t);return(0,x.jsx)("section",{className:(0,s.Z)("row",r),children:n.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(w,{item:e})},t)))})}},9362:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adapter.dark-80acb4cc84e42f5cf57a6fc6ba895f0c.svg"},4350:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adapter.light-884c1fa14856cabc167eaae322f9c6d2.svg"},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var n=r(7294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
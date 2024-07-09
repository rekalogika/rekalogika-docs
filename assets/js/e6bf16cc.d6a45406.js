"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[7862],{17:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(5893),o=n(1151),s=n(3361);const i={title:"rekalogika/reconstitutor"},c=void 0,l={id:"reconstitutor/index",title:"rekalogika/reconstitutor",description:"This library provides a thin layer that sits above Doctrine events to help you",source:"@site/docs/reconstitutor/index.md",sourceDirName:"reconstitutor",slug:"/reconstitutor/",permalink:"/reconstitutor/",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/reconstitutor/index.md",tags:[],version:"current",frontMatter:{title:"rekalogika/reconstitutor"},sidebar:"docs",previous:{title:"rekalogika/psr-16-simple-cache-bundle",permalink:"/psr-16-simple-cache-bundle/"},next:{title:"Introduction & Installation",permalink:"/reconstitutor/intro"}},a={},u=[{value:"Sections",id:"sections",level:2}];function d(e){const t={h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This library provides a thin layer that sits above Doctrine events to help you\nreconstitute/hydrate your entities. It lets you augment Doctrine's hydration\nwith your logic in a concise and expressive class."}),"\n",(0,r.jsx)(t.h2,{id:"sections",children:"Sections"}),"\n",(0,r.jsx)(s.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3361:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7294),o=n(512),s=n(3438),i=n(3692),c=n(2263);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,c.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var h=n(3919),p=n(5999),f=n(2503);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(5893);function k(e){let{href:t,children:n}=e;return(0,x.jsx)(i.Z,{href:t,className:(0,o.Z)("card padding--lg",g.cardContainer),children:n})}function y(e){let{href:t,icon:n,title:r,description:s}=e;return(0,x.jsxs)(k,{href:t,children:[(0,x.jsxs)(f.Z,{as:"h2",className:(0,o.Z)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),s&&(0,x.jsx)("p",{className:(0,o.Z)("text--truncate",g.cardDescription),title:s,children:s})]})}function j(e){let{item:t}=e;const n=(0,s.LM)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(y,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function v(e){let{item:t}=e;const n=(0,h.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return(0,x.jsx)(y,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(v,{item:t});case"category":return(0,x.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const n=(0,s.jA)();return(0,x.jsx)(N,{items:n.items,className:t})}function N(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(w,{...e});const r=(0,s.MN)(t);return(0,x.jsx)("section",{className:(0,o.Z)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(b,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
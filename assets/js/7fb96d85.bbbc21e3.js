"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[4512],{733:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"doctrine-collections-decorator/cookbook/index","title":"Cookbook","description":"The following are some of the use cases of decorating Doctrine collections.","source":"@site/docs/doctrine-collections-decorator/cookbook/index.md","sourceDirName":"doctrine-collections-decorator/cookbook","slug":"/doctrine-collections-decorator/cookbook/","permalink":"/doctrine-collections-decorator/cookbook/","draft":false,"unlisted":false,"editUrl":"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/doctrine-collections-decorator/cookbook/index.md","tags":[],"version":"current","frontMatter":{"title":"Cookbook"},"sidebar":"docs","previous":{"title":"Class Diagram","permalink":"/doctrine-collections-decorator/class-diagram"},"next":{"title":"Type Safety","permalink":"/doctrine-collections-decorator/cookbook/type-safety"}}');var r=o(4848),c=o(8453),s=o(5871);const i={title:"Cookbook"},l=void 0,a={},d=[{value:"Use Cases",id:"use-cases",level:2}];function u(e){const t={h2:"h2",p:"p",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The following are some of the use cases of decorating Doctrine collections."}),"\n",(0,r.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsx)(s.A,{})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5871:(e,t,o)=>{o.d(t,{A:()=>v});var n=o(6540),r=o(4164),c=o(6972),s=o(8774),i=o(4586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,o)=>function(e,t,o){const n=e.split("|");if(1===n.length)return n[0];n.length>o.pluralForms.length&&console.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=o.select(t),c=o.pluralForms.indexOf(r);return n[Math.min(c,n.length-1)]}(o,t,e)}}var f=o(6654),h=o(1312),p=o(1107);const k={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=o(4848);function x(e){let{href:t,children:o}=e;return(0,g.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",k.cardContainer),children:o})}function b(e){let{href:t,icon:o,title:n,description:c}=e;return(0,g.jsxs)(x,{href:t,children:[(0,g.jsxs)(p.A,{as:"h2",className:(0,r.A)("text--truncate",k.cardTitle),title:n,children:[o," ",n]}),c&&(0,g.jsx)("p",{className:(0,r.A)("text--truncate",k.cardDescription),title:c,children:c})]})}function j(e){let{item:t}=e;const o=(0,c.Nr)(t),n=function(){const{selectMessage:e}=m();return t=>e(t,(0,h.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return o?(0,g.jsx)(b,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function C(e){let{item:t}=e;const o=(0,f.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.cC)(t.docId??void 0);return(0,g.jsx)(b,{href:t.href,icon:o,title:t.label,description:t.description??n?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(C,{item:t});case"category":return(0,g.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const o=(0,c.$S)();return(0,g.jsx)(v,{items:o.items,className:t})}function v(e){const{items:t,className:o}=e;if(!t)return(0,g.jsx)(w,{...e});const n=(0,c.d1)(t);return(0,g.jsx)("section",{className:(0,r.A)("row",o),children:n.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(y,{item:e})},t)))})}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var n=o(6540);const r={},c=n.createContext(r);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);
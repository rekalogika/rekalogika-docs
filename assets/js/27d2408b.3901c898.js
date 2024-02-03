"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[3349],{9152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=n(5893),r=n(1151),o=n(2991);const c={title:"rekalogika/domain-event"},s=void 0,a={id:"domain-event/index",title:"rekalogika/domain-event",description:"A domain event pattern",source:"@site/docs/domain-event/index.md",sourceDirName:"domain-event",slug:"/domain-event/",permalink:"/domain-event/",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/domain-event/index.md",tags:[],version:"current",frontMatter:{title:"rekalogika/domain-event"},sidebar:"docs",previous:{title:"Lazy Chained Matching",permalink:"/doctrine-collections-decorator/cookbook/lazy-chained-matching"},next:{title:"Introduction & Installation",permalink:"/domain-event/intro"}},d={},l=[{value:"Sections",id:"sections",level:2}];function m(e){const t={a:"a",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation",children:"domain event pattern"}),"\nimplementation for Symfony & Doctrine."]}),"\n",(0,i.jsx)(t.h2,{id:"sections",children:"Sections"}),"\n",(0,i.jsx)(o.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>v});n(7294);var i=n(6905),r=n(3438),o=n(3692),c=n(3919),s=n(5999),a=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function m(e){let{href:t,children:n}=e;return(0,l.jsx)(o.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:r,description:o}=e;return(0,l.jsxs)(m,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),o&&(0,l.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,l.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return(0,l.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.jA)();return(0,l.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const o=(0,r.MN)(t);return(0,l.jsx)("section",{className:(0,i.Z)("row",n),children:o.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var i=n(7294);const r={},o=i.createContext(r);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
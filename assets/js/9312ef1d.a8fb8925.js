"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[9120],{8379:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(5893),a=t(1151);const s={title:"Architecture"},o=void 0,i={id:"mapper/architecture",title:"Architecture",description:"This chapter describes the architecture of the library.",source:"@site/docs/mapper/11-architecture.md",sourceDirName:"mapper",slug:"/mapper/architecture",permalink:"/mapper/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/mapper/11-architecture.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"Mapping to Abstract Classes and Interfaces",permalink:"/mapper/inheritance"},next:{title:"Creating a Custom Transformer",permalink:"/mapper/creating-transformer"}},c={},p=[{value:"Transformers",id:"transformers",level:3},{value:"Main Transformer",id:"main-transformer",level:3},{value:"Transformer Registry",id:"transformer-registry",level:3},{value:"Mapping Table Factory",id:"mapping-table-factory",level:3},{value:"Mapper",id:"mapper",level:3},{value:"Mapper Factory",id:"mapper-factory",level:3},{value:"Object Cache",id:"object-cache",level:3},{value:"Symfony Property Info",id:"symfony-property-info",level:3},{value:"Symfony Property Access",id:"symfony-property-access",level:3}];function h(e){const r={code:"code",h3:"h3",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This chapter describes the architecture of the library."}),"\n",(0,n.jsx)(r.h3,{id:"transformers",children:"Transformers"}),"\n",(0,n.jsx)(r.p,{children:"Transforms a source variable to the target variable. A transformer class\nprovides the list of the supported source to target mappings, as well as\nthe logic for transforming the source to the target."}),"\n",(0,n.jsx)(r.h3,{id:"main-transformer",children:"Main Transformer"}),"\n",(0,n.jsx)(r.p,{children:"The main transformer is the entry point of the library. It is responsible\nfor finding the transformer that supports the source to target mapping,\nand transforming the source to the target using that transformer."}),"\n",(0,n.jsx)(r.h3,{id:"transformer-registry",children:"Transformer Registry"}),"\n",(0,n.jsx)(r.p,{children:"A registry of the transformers. It is used by the main transformer to find\nthe matching transformer for the specific source and target types."}),"\n",(0,n.jsx)(r.h3,{id:"mapping-table-factory",children:"Mapping Table Factory"}),"\n",(0,n.jsx)(r.p,{children:"Creates the mapping table from the list of the transformers."}),"\n",(0,n.jsx)(r.p,{children:"The mapping table is a list of the supported source to target type, mapped to\nthe transformer suitable for the task. It is used by the main transformer to\nfind the correct transformer for transforming the source to the target type."}),"\n",(0,n.jsx)(r.h3,{id:"mapper",children:"Mapper"}),"\n",(0,n.jsx)(r.p,{children:"A fa\xe7ade for the main transformer. A user-facing interface that is used directly\nby the caller. It provides a convenient, typed interface, for the caller, and\nforwards the call to the main transformer."}),"\n",(0,n.jsx)(r.h3,{id:"mapper-factory",children:"Mapper Factory"}),"\n",(0,n.jsx)(r.p,{children:"Creates the mapper service. Only used in non-framework usage."}),"\n",(0,n.jsx)(r.h3,{id:"object-cache",children:"Object Cache"}),"\n",(0,n.jsx)(r.p,{children:"A mapping job has an object cache that is used to store the objects that have\nbeen mapped. This is used to handle circular references."}),"\n",(0,n.jsx)(r.h3,{id:"symfony-property-info",children:"Symfony Property Info"}),"\n",(0,n.jsxs)(r.p,{children:["The library uses the Symfony Property Info component to list the properties of\nthe source and target variables, and to query their types. This library uses\nthe ",(0,n.jsx)(r.code,{children:"Type"})," objects returned by the Symfony Property Info component as the\nmeans of describing the types of the source and target variables."]}),"\n",(0,n.jsx)(r.h3,{id:"symfony-property-access",children:"Symfony Property Access"}),"\n",(0,n.jsx)(r.p,{children:"The library uses the Symfony Property Access component to read from and write to\nthe source and target variables."})]})}function l(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>o});var n=t(7294);const a={},s=n.createContext(a);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
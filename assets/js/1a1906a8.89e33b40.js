"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[7906],{6338:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"analytics/internals/todo","title":"Current To-do List","description":"Bugs","source":"@site/docs/analytics/99-internals/03-todo.md","sourceDirName":"analytics/99-internals","slug":"/analytics/internals/todo","permalink":"/analytics/internals/todo","draft":false,"unlisted":false,"editUrl":"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/analytics/99-internals/03-todo.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Current To-do List"},"sidebar":"docs","previous":{"title":"Refresh Mechanism","permalink":"/analytics/internals/refresh"},"next":{"title":"rekalogika/api-lite","permalink":"/api-lite/"}}');var t=i(4848),r=i(8453);const l={title:"Current To-do List"},o=void 0,a={},c=[{value:"Bugs",id:"bugs",level:2},{value:"Missing Features",id:"missing-features",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Refactors",id:"refactors",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"bugs",children:"Bugs"}),"\n",(0,t.jsx)(n.p,{children:"Currently none."}),"\n",(0,t.jsx)(n.h2,{id:"missing-features",children:"Missing Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Metadata caching"}),"\n",(0,t.jsx)(n.li,{children:"Support for MS SQL Server"}),"\n",(0,t.jsxs)(n.li,{children:["Configurable event timing (",(0,t.jsx)(n.code,{children:"RefreshClassPropertiesResolver"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Allow customized generation of dirty flag (see ",(0,t.jsx)(n.code,{children:"DirtyFlagGenerator"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["It should be possible for ",(0,t.jsx)(n.code,{children:"DirtyFlagGenerator"})," to generate dirty partition\nsignals for non-",(0,t.jsx)(n.code,{children:"IDENTITY"})," entities, bypassing 'new entity' phase."]}),"\n",(0,t.jsx)(n.li,{children:"Hyperloglog"}),"\n",(0,t.jsx)(n.li,{children:"Binning value resolver"}),"\n",(0,t.jsxs)(n.li,{children:["Measure using getter (example: ",(0,t.jsx)(n.code,{children:"getAverage()"})," that gets its value from\n",(0,t.jsx)(n.code,{children:"$this->sum / $this->count"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Subtotals"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Postgres ",(0,t.jsx)(n.code,{children:"GROUP BY"})," maximum grouping set limit of 4096, can be circumvented by\nusing multiple queries."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"refactors",children:"Refactors"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Spin off pivot table to its own package."}),"\n",(0,t.jsx)(n.li,{children:"Exception refactoring"}),"\n",(0,t.jsxs)(n.li,{children:["Use parameters for ",(0,t.jsx)(n.code,{children:"QueryBuilder"})," (see ",(0,t.jsx)(n.code,{children:"DoctrineQueryTest"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Use native query for queries."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
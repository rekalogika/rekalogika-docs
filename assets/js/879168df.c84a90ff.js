"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[6010],{9514:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"analytics/housekeeping","title":"Housekeeping","description":"Maintaining a summary table involves ensuring that the data in the summary table","source":"@site/docs/analytics/03-housekeeping.md","sourceDirName":"analytics","slug":"/analytics/housekeeping","permalink":"/analytics/housekeeping","draft":false,"unlisted":false,"editUrl":"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/analytics/03-housekeeping.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Housekeeping"},"sidebar":"docs","previous":{"title":"Measures","permalink":"/analytics/summary-entity/measures"},"next":{"title":"Queries","permalink":"/analytics/query"}}');var i=t(4848),r=t(8453);const a={title:"Housekeeping"},o=void 0,l={},h=[{value:"Refreshing Manually from the Command Line",id:"refreshing-manually-from-the-command-line",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Maintaining a summary table involves ensuring that the data in the summary table\nis up-to-date with the source table."}),"\n",(0,i.jsx)(n.h2,{id:"refreshing-manually-from-the-command-line",children:"Refreshing Manually from the Command Line"}),"\n",(0,i.jsx)(n.p,{children:"You can refresh the summary table manually from the command line. Usually you\nwould do this once after the summary table is created."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"php bin/console rekalogika:analytics:refresh 'App\\Entity\\SomeSummary' \\\n    [start key [end key]]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Optional arguments:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"start key"})," is the start key for the range of entities to refresh. This is the\npartitioning key as described in the\n",(0,i.jsx)(n.a,{href:"summary-entity/partitioning",children:"partitioning"})," documentation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"end key"})," is the end key that marks the end of the range of entities to\nrefresh."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Optional options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--resume=<resume ID>"}),". If you interrupt the refresh process using\n",(0,i.jsx)("kbd",{children:"Ctrl"}),"-",(0,i.jsx)("kbd",{children:"C"}),", it will tell you the resume ID. You can use this\noption to resume the refresh process from where it left off. Note that you\nneed to make sure the rest of the arguments and options are the same as when\nyou started the refresh process, otherwise the resume won't work."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--batch-size=<batch size>"}),". The number of partitions to refresh in a single\nroll up query. The default is 1. Increasing this may speed up or slow down the\nrefresh process."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
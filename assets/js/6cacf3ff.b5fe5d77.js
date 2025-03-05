"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[8583],{8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var n=t(6540);const r={},l=n.createContext(r);function o(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(l.Provider,{value:i},e.children)}},9124:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>s});const n=JSON.parse('{"id":"file/derivation","title":"Derivation","description":"This chapter describes the concept of file derivation and the pipe & filter","source":"@site/docs/file/06-derivation.md","sourceDirName":"file","slug":"/file/derivation","permalink":"/file/derivation","draft":false,"unlisted":false,"editUrl":"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file/06-derivation.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Derivation"},"sidebar":"docs","previous":{"title":"Metadata","permalink":"/file/metadata"},"next":{"title":"Lazy-Loading Proxy","permalink":"/file/proxy"}}');var r=t(4848),l=t(8453);const o={title:"Derivation"},a=void 0,d={},s=[{value:"Derivation",id:"derivation",level:2},{value:"Low-Level Implementation",id:"low-level-implementation",level:2},{value:"Pipes &amp; Filters Pattern",id:"pipes--filters-pattern",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["This chapter describes the concept of file derivation and the pipe & filter\npattern applied to ",(0,r.jsx)(i.code,{children:"FileInterface"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"derivation",children:"Derivation"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"FileInterface"})," supports what we call 'derivation'. A file can have one or more\nderivations of itself. For example, an image file can have a thumbnail, medium,\nand large derivation. A derived file can also be derived further. For example, a\nthumbnail can be in the original aspect ratio, or square-cropped."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"FileInterface"})," provides the method ",(0,r.jsx)(i.code,{children:"getDerivation()"})," that returns a\n",(0,r.jsx)(i.code,{children:"FilePointer"})," to the derived file. Our ",(0,r.jsx)(i.code,{children:"File"})," objects ensure that a derivation\ncannot be made if the file is in the local filesystem, or in an ad-hoc\nfilesystem, to avoid cluttering the local filesystem with unwanted files."]}),"\n",(0,r.jsx)(i.h2,{id:"low-level-implementation",children:"Low-Level Implementation"}),"\n",(0,r.jsx)(i.p,{children:"At the low level, a derivation is created simply by appending the derivation ID\nto the original file's key. For example, if the original file's key is:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"entity/ffa87ef3fc5388bc8b666e2cec17d27cc493d0c1/image/e5/80/72/6d/31337\n"})}),"\n",(0,r.jsx)(i.p,{children:"then, with the derivation ID '100px', the derived file's key becomes:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"entity/ffa87ef3fc5388bc8b666e2cec17d27cc493d0c1/image/e5/80/72/6d/31337.d/100px\n"})}),"\n",(0,r.jsx)(i.p,{children:"Deleting the original file will also result in the deletion of all of its\nderivations."}),"\n",(0,r.jsx)(i.p,{children:"Derivation can be nested. Suppose the derived file above will be derived further\nwith the derivation ID of 'square', then the derived file's key becomes:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"entity/ffa87ef3fc5388bc8b666e2cec17d27cc493d0c1/image/e5/80/72/6d/31337.d/100px.d/square\n"})}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsx)(i.p,{children:"Because each derivation step requires a round trip to the storage backend, it is\nnot recommended to nest derivations too deep."})}),"\n",(0,r.jsx)(i.h2,{id:"pipes--filters-pattern",children:"Pipes & Filters Pattern"}),"\n",(0,r.jsx)(i.p,{children:"Derivation can be used as the building block of filters. A filter is a service\nthat performs opportunistic creation and caching of a derived file from a source\nfile."}),"\n",(0,r.jsxs)(i.p,{children:["A filter can be applied to a ",(0,r.jsx)(i.code,{children:"FileInterface"})," and does the following:"]}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Obtain the original file."}),"\n",(0,r.jsx)(i.li,{children:"Determine the derivation ID from the parameters provided by the caller. For\nexample, if the caller wants to get a square thumbnail of an image, the\nfilter can use the derivation ID like 'thumbnail-square'."}),"\n",(0,r.jsxs)(i.li,{children:["Call ",(0,r.jsx)(i.code,{children:"FileInterface::getDerivation()"})," to get a pointer to the derived file."]}),"\n",(0,r.jsxs)(i.li,{children:["Call ",(0,r.jsx)(i.code,{children:"FileRepository::get()"})," to get the derived file.","\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"If the derived file does not exist, produce the derived file, and write to\nthe pointer."}),"\n",(0,r.jsx)(i.li,{children:"If the derived file exists and is newer than the original file, return it."}),"\n",(0,r.jsx)(i.li,{children:"If the derived file exists and is older than the original file, produce\nthe derived file, then overwrite the old derived file."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"The caller can then use the filter to create a modified version of the original\nfile without having to worry about the details."}),"\n",(0,r.jsxs)(i.p,{children:["We provide the package\n",(0,r.jsx)(i.a,{href:"../file-bundle/advanced/creating-filters",children:(0,r.jsx)(i.code,{children:"rekalogika/file-derivation"})})," to\nstreamline the creation of filters within the Symfony framework."]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);
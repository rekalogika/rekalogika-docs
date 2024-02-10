"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[1498],{9082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=t(5893),r=t(1151);const a={title:"Mapping Between Object and Array"},i=void 0,c={id:"mapper/object-array",title:"Mapping Between Object and Array",description:"Mapper does not do the mapping of (non-array-like) objects to arrays (and vice",source:"@site/docs/mapper/05-object-array.md",sourceDirName:"mapper",slug:"/mapper/object-array",permalink:"/mapper/object-array",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/mapper/05-object-array.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Mapping Between Object and Array"},sidebar:"docs",previous:{title:"Mapping Arrays & Array-Like Objects",permalink:"/mapper/collection"},next:{title:"Manual Mapping using an Object Mapper",permalink:"/mapper/object-mapper"}},s={},p=[{value:"Providing Context to Symfony Normalizer and Denormalizer",id:"providing-context-to-symfony-normalizer-and-denormalizer",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Mapper does not do the mapping of (non-array-like) objects to arrays (and vice\nversa) on its own. It delegates the task to the normalizer and denormalizer\ncomponents of Symfony Serializer. Therefore, if you map an object to an array,\nor the other way around, it will respect the configuration of Symfony\nSerializer."}),"\n",(0,o.jsx)(n.h2,{id:"providing-context-to-symfony-normalizer-and-denormalizer",children:"Providing Context to Symfony Normalizer and Denormalizer"}),"\n",(0,o.jsxs)(n.p,{children:["If you need to provide context to Symfony normalizer and denormalizer, you can\nadd ",(0,o.jsx)(n.code,{children:"NormalizerContext"})," and/or ",(0,o.jsx)(n.code,{children:"DenormalizerContext"})," object to the context.\nThis is useful for providing serialization groups, among other things."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"$normalizationContext = new NormalizerContext([\n    'groups' => ['groupa', 'groupc'],\n]);\n\n$context = Context::create($normalizationContext);\n\n$dto = $this->mapper->map($object, Dto::class, $context);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then, if the mapper encounters the situation where it needs to transform an\nobject to an array, it will pass the context you provided to the Symfony\nnormalizer."})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(7294);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);
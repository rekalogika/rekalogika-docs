"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[4558],{8619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(5893),a=n(1151);const o={title:"Mandatory File"},l=void 0,r={id:"file-bundle/mandatory-file",title:"Mandatory File",description:"This chapter explains the situation where a file is mandatory to the entity.",source:"@site/docs/file-bundle/10-mandatory-file.md",sourceDirName:"file-bundle",slug:"/file-bundle/mandatory-file",permalink:"/file-bundle/mandatory-file",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file-bundle/10-mandatory-file.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Mandatory File"},sidebar:"docs",previous:{title:"Translation",permalink:"/file-bundle/translation"},next:{title:"Lazy-Loading Files",permalink:"/file-bundle/lazy-loading"}},s={},d=[{value:"Making a File Mandatory in an Entity",id:"making-a-file-mandatory-in-an-entity",level:2},{value:"If The File That is Supposed to be Present is not Present...",id:"if-the-file-that-is-supposed-to-be-present-is-not-present",level:2},{value:"Mandatory File and Lazy-Loading Proxy",id:"mandatory-file-and-lazy-loading-proxy",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This chapter explains the situation where a file is mandatory to the entity."}),"\n",(0,i.jsx)(t.h2,{id:"making-a-file-mandatory-in-an-entity",children:"Making a File Mandatory in an Entity"}),"\n",(0,i.jsxs)(t.p,{children:["To make a file mandatory in an entity, you simply need to type-hint the file\nproperty with ",(0,i.jsx)(t.code,{children:"FileInterface"})," instead of ",(0,i.jsx)(t.code,{children:"?FileInterface"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:"use Rekalogika\\Contracts\\File\\FileInterface;\nuse Rekalogika\\File\\Association\\Attribute\\WithFileAssociation;\nuse Rekalogika\\File\\Association\\Attribute\\AsFileAssociation;\n\n#[WithFileAssociation]\nclass Product\n{\n    #[AsFileAssociation]\n    // highlight-next-line\n    private FileInterface $image;\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["By doing so, the framework will consider that the property has to be filled with\na ",(0,i.jsx)(t.code,{children:"FileInterface"})," object, one way or another."]}),"\n",(0,i.jsx)(t.h2,{id:"if-the-file-that-is-supposed-to-be-present-is-not-present",children:"If The File That is Supposed to be Present is not Present..."}),"\n",(0,i.jsxs)(t.p,{children:["If the property is mandatory, but the actual file does not exist in the storage\nbackend, the framework will substitute it with a ",(0,i.jsx)(t.code,{children:"MissingFile"})," object. The\nsituation is considered an error and will be logged as such. The administrator\nor the developer is expected to fix the problem."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"MissingFile"})," object is an implementation of the ",(0,i.jsx)(t.a,{href:"https://martinfowler.com/eaaCatalog/specialCase.html",children:"null object\npattern"}),". It appears to\nyour application like a normal file, and should not cause a fatal error; unless\nyou are trying to operate on it that would cause a permanent effect, like saving\nit to an entity."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"MissingFile"})," is also an ",(0,i.jsx)(t.code,{children:"Exception"}),", but is not thrown by the framework. You\ncan treat it as a regular exception, including getting the stack trace from it."]}),"\n",(0,i.jsxs)(t.p,{children:["For more information about ",(0,i.jsx)(t.code,{children:"NullFile"})," in the framework, read the chapter\n",(0,i.jsx)(t.a,{href:"../file/null-file",children:"Null File"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"mandatory-file-and-lazy-loading-proxy",children:"Mandatory File and Lazy-Loading Proxy"}),"\n",(0,i.jsxs)(t.p,{children:["If you are using a lazy-loading proxy, the property will always be filled by an\ninstance of ",(0,i.jsx)(t.code,{children:"FileInterface"}),". However, the framework does not check if the file\nexists in the storage backend until you first try to access the file. If you\nwant a mandatory file, you have to do it yourself:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:"use Rekalogika\\Contracts\\File\\FileInterface;\nuse Rekalogika\\Contracts\\File\\FileProxy;\nuse Rekalogika\\Domain\\File\\Null\\NullFile;\nuse Rekalogika\\File\\Association\\Attribute\\AsFileAssociation;\n\n#[WithFileAssociation]\nclass Product\n{\n    #[AsFileAssociation(fetch: 'LAZY')]\n    private FileInterface $image;\n\n    public function getImage(): FileInterface\n    {\n        return FileProxy::getFile($this->image) ?? new NullFile;\n    }\n}\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"Protip",type:"tip",children:(0,i.jsx)(t.p,{children:"You might want to make sure other methods in the entity don't use the property\ndirectly but use the getter instead."})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var i=n(7294);const a={},o=i.createContext(a);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
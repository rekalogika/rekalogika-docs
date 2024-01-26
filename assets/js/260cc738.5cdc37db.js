"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[3804],{9281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(5893),r=t(1151);const s={title:"Mapping Arrays & Array-Like Objects"},i=void 0,a={id:"mapper/collection",title:"Mapping Arrays & Array-Like Objects",description:"This chapter describes how to map arrays and array-like objects.",source:"@site/docs/mapper/02-collection.md",sourceDirName:"mapper",slug:"/mapper/collection",permalink:"/mapper/collection",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/mapper/02-collection.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Mapping Arrays & Array-Like Objects"},sidebar:"docs",previous:{title:"Basic Usage",permalink:"/mapper/usage"},next:{title:"Mapping to Abstract Classes and Interfaces",permalink:"/mapper/inheritance"}},c={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Mapping to <code>Traversable</code>",id:"mapping-to-traversable",level:2}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This chapter describes how to map arrays and array-like objects."}),"\n",(0,o.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,o.jsx)(n.p,{children:"Suppose you have these entities:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"use Doctrine\\Common\\Collections\\ArrayCollection;\nuse Doctrine\\Common\\Collections\\Collection;\n\nclass Post\n{\n    /**\n     * @var Collection<int,Comment>\n     */\n    private Collection $comments;\n\n    public function __construct()\n    {\n        $this->comments = new ArrayCollection();\n    }\n\n    /**\n     * @return Collection<int,Comment>\n     */\n    public function getComments(): Collection\n    {\n        return $this->comments;\n    }\n}\n\nclass Comment\n{\n    private string $text;\n\n    public function __construct(string $text)\n    {\n        $this->text = $text;\n    }\n\n    public function getText(): string\n    {\n        return $this->text;\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To map those entities to the corresponding DTOs, you can simply create the DTOs\nlike the following. Notice the type-hint of the ",(0,o.jsx)(n.code,{children:"$comments"})," property:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"class PostDto\n{\n    /**\n     * @var ?array<int,CommentDto>\n     */\n    public ?array $comments = null;\n}\n\nclass CommentDto\n{\n    public string $text;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then, you can map between the two objects:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"/** @var MapperInterface $mapper */\n\n$postDto = $mapper->map($post, PostDto::class);\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Without the type-hint, the mapper will copy the source objects to the target\narray as-is."})}),"\n",(0,o.jsx)(n.p,{children:"Supported types of the target side:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Normal array"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"ArrayAccess"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"ArrayObject"})}),"\n",(0,o.jsxs)(n.li,{children:["Doctrine ",(0,o.jsx)(n.code,{children:"Collection"})]}),"\n",(0,o.jsxs)(n.li,{children:["Doctrine ",(0,o.jsx)(n.code,{children:"ArrayCollection"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The source side must be an array or a ",(0,o.jsx)(n.code,{children:"Traversable"})," object, i.e. anything that\nyou can ",(0,o.jsx)(n.code,{children:"foreach()"})," over."]}),"\n",(0,o.jsxs)(n.h2,{id:"mapping-to-traversable",children:["Mapping to ",(0,o.jsx)(n.code,{children:"Traversable"})]}),"\n",(0,o.jsxs)(n.p,{children:["You also have the option to map to a ",(0,o.jsx)(n.code,{children:"Traversable"})," object. If the target\nproperty is type-hinted with ",(0,o.jsx)(n.code,{children:"Traversable"}),", the mapper will map to a ",(0,o.jsx)(n.code,{children:"Generator"}),"\nobject."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"class PostDto\n{\n    /**\n     * @var ?\\Traversable<int,CommentDto>\n     */\n    public ?\\Traversable $comments = null;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This way, you are getting lazy-loading if the source supports lazy loading (like\nDoctrine ",(0,o.jsx)(n.code,{children:"PersistentCollection"}),"), the source will not be hydrated unless the\nconsumer uses the mapped property on the target side. This might be useful like\nif you are using the DTOs in a view, where you don't always need to use the\nproperty."]}),"\n",(0,o.jsxs)(n.p,{children:["Furthermore, you are also getting stream mapping using ",(0,o.jsx)(n.code,{children:"Generator"}),", which can\nsave a lot of memory if your source is large."]}),"\n",(0,o.jsxs)(n.p,{children:["If the source is an array or an object that implements ",(0,o.jsx)(n.code,{children:"Countable"}),", you will\nalso get a ",(0,o.jsx)(n.code,{children:"Countable"})," target, i.e. you can ",(0,o.jsx)(n.code,{children:"count()"})," or ",(0,o.jsx)(n.code,{children:"->count()"})," it. In\naddition, if your source is an extra-lazy Doctrine Collection, the consumer will\nbe able to ",(0,o.jsx)(n.code,{children:"count()"})," the target without causing a full hydration of the source."]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(7294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[8853],{7996:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var t=n(5893),r=n(1151);const c={title:"Creating a Decorator Class"},i=void 0,s={id:"doctrine-collections-decorator/creating",title:"Creating a Decorator Class",description:"This chapter will show you how to use this library.",source:"@site/docs/doctrine-collections-decorator/01-creating.md",sourceDirName:"doctrine-collections-decorator",slug:"/doctrine-collections-decorator/creating",permalink:"/doctrine-collections-decorator/creating",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/doctrine-collections-decorator/01-creating.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Creating a Decorator Class"},sidebar:"docs",previous:{title:"Introduction & Installation",permalink:"/doctrine-collections-decorator/intro"},next:{title:"Decorator Classes and Traits",permalink:"/doctrine-collections-decorator/classes"}},a={},l=[{value:"Creating a Decorator Class",id:"creating-a-decorator-class",level:2},{value:"Using it in an Entity",id:"using-it-in-an-entity",level:2}];function d(e){const o={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"This chapter will show you how to use this library."}),"\n",(0,t.jsx)(o.h2,{id:"creating-a-decorator-class",children:"Creating a Decorator Class"}),"\n",(0,t.jsxs)(o.p,{children:["The simplest way to create a decorator class is to extend ",(0,t.jsx)(o.code,{children:"CollectionDecorator"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",children:"use Rekalogika\\Collections\\Decorator\\Decorator\\CollectionDecorator;\n\n/**\n * @extends CollectionDecorator<array-key,Book>\n */\nclass BookCollection extends CollectionDecorator\n{\n    // ...\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Then add your methods to override the existing one. In your methods, you can\naccess the wrapped collection object by calling ",(0,t.jsx)(o.code,{children:"$this->getWrapped()"}),"."]}),"\n",(0,t.jsx)(o.admonition,{title:"Protip",type:"tip",children:(0,t.jsxs)(o.p,{children:["If you want the caller to use the ",(0,t.jsx)(o.code,{children:"matching()"})," method of the wrapped collection,\nyou can use the ",(0,t.jsx)(o.code,{children:"SelectableCollectionDecorator"})," class instead."]})}),"\n",(0,t.jsx)(o.h2,{id:"using-it-in-an-entity",children:"Using it in an Entity"}),"\n",(0,t.jsx)(o.p,{children:"To use it, simply wrap the collection in the constructor."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",children:"use Doctrine\\Common\\Collections\\ArrayCollection;\nuse Doctrine\\Common\\Collections\\Collection;\n\nclass BookShelf\n{\n    /**\n     * @var Collection<array-key,Book>\n     */\n    private Collection $books;\n\n    public function __construct()\n    {\n        $this->books = new ArrayCollection();\n    }\n\n    public function getBooks(): BookCollection\n    {\n        // highlight-next-line\n        return new BookCollection($this->books);\n    }\n}\n"})})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>s,a:()=>i});var t=n(7294);const r={},c=t.createContext(r);function i(e){const o=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:o},e.children)}}}]);
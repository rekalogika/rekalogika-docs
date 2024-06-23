"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[12],{1477:(e,c,l)=>{l.r(c),l.d(c,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>a});var o=l(5893),r=l(1151);const t={title:"Decorator Classes and Traits"},n=void 0,s={id:"doctrine-collections-decorator/classes",title:"Decorator Classes and Traits",description:"This chapter will describe all the available classes and traits in this package.",source:"@site/docs/doctrine-collections-decorator/02-classes.md",sourceDirName:"doctrine-collections-decorator",slug:"/doctrine-collections-decorator/classes",permalink:"/doctrine-collections-decorator/classes",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/doctrine-collections-decorator/02-classes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Decorator Classes and Traits"},sidebar:"docs",previous:{title:"Creating a Decorator Class",permalink:"/doctrine-collections-decorator/creating"},next:{title:"Class Diagram",permalink:"/doctrine-collections-decorator/class-diagram"}},i={},a=[{value:"Ready-to-use Decorator Classes",id:"ready-to-use-decorator-classes",level:2},{value:"Decorator Classes",id:"decorator-classes",level:2},{value:"Abstract Decorator Classes",id:"abstract-decorator-classes",level:2},{value:"Decorator Traits",id:"decorator-traits",level:2},{value:"Convenience Trait",id:"convenience-trait",level:2}];function d(e){const c={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.p,{children:"This chapter will describe all the available classes and traits in this package."}),"\n",(0,o.jsx)(c.h2,{id:"ready-to-use-decorator-classes",children:"Ready-to-use Decorator Classes"}),"\n",(0,o.jsx)(c.p,{children:"The package ships with ready-to-use decorator classes for common use cases:"}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsxs)(c.li,{children:[(0,o.jsx)(c.code,{children:"ExtraLazyCollection"}),": ",(0,o.jsx)(c.a,{href:"cookbook/extra-lazy-load-prevention",children:"Prevent collection loading"})," in extra-lazy associations."]}),"\n",(0,o.jsxs)(c.li,{children:[(0,o.jsx)(c.code,{children:"LazyMatchingCollection"}),": ",(0,o.jsx)(c.a,{href:"cookbook/lazy-chained-matching",children:"Chained matching"}),"\noptimization, if you need to call ",(0,o.jsx)(c.code,{children:"matching()"})," on the result of another\n",(0,o.jsx)(c.code,{children:"matching()"}),"."]}),"\n"]}),"\n",(0,o.jsx)(c.h2,{id:"decorator-classes",children:"Decorator Classes"}),"\n",(0,o.jsx)(c.p,{children:"All of our classes come in four flavors:"}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsxs)(c.li,{children:["Those that implement ",(0,o.jsx)(c.code,{children:"Collection"})]}),"\n",(0,o.jsxs)(c.li,{children:["Those that implement ",(0,o.jsx)(c.code,{children:"ReadableCollection"})]}),"\n",(0,o.jsxs)(c.li,{children:["Those that implement ",(0,o.jsx)(c.code,{children:"Collection"})," and ",(0,o.jsx)(c.code,{children:"Selectable"})]}),"\n",(0,o.jsxs)(c.li,{children:["Those that implement ",(0,o.jsx)(c.code,{children:"ReadableCollection"})," and ",(0,o.jsx)(c.code,{children:"Selectable"})]}),"\n"]}),"\n",(0,o.jsx)(c.p,{children:"Most people probably want to extend one of the high-level decorator classes.\nThese will simply forward all method calls to the wrapped collection."}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"CollectionDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"ReadableCollectionDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"SelectableCollectionDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"SelectableReadableCollectionDecorator"})}),"\n"]}),"\n",(0,o.jsx)(c.p,{children:"Also available the 'reject' decorator classes, which will throw an exception\nwhen any of the methods is called:"}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"CollectionRejectDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"ReadableCollectionRejectDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"SelectableCollectionRejectDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"SelectableReadableCollectionRejectDecorator"})}),"\n"]}),"\n",(0,o.jsx)(c.h2,{id:"abstract-decorator-classes",children:"Abstract Decorator Classes"}),"\n",(0,o.jsxs)(c.p,{children:["Also available are abstract classes for ",(0,o.jsx)(c.code,{children:"Collection"})," and ",(0,o.jsx)(c.code,{children:"ReadableCollection"}),",\nwith and without ",(0,o.jsx)(c.code,{children:"Selectable"}),", if you prefer a slightly low-level approach:"]}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"AbstractCollectionDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"AbstractReadableCollectionDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"AbstractSelectableCollectionDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"AbstractSelectableReadableCollectionDecorator"})}),"\n"]}),"\n",(0,o.jsx)(c.p,{children:"And the 'reject' flavors:"}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"AbstractCollectionRejectDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"AbstractReadableCollectionRejectDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"AbstractSelectableCollectionRejectDecorator"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"AbstractSelectableReadableCollectionRejectDecorator"})}),"\n"]}),"\n",(0,o.jsx)(c.h2,{id:"decorator-traits",children:"Decorator Traits"}),"\n",(0,o.jsx)(c.p,{children:"There are traits for each of the involved interfaces:"}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"ArrayAccessDecoratorTrait"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"IteratorAggregateDecoratorTrait"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"CountableDecoratorTrait"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"ReadableCollectionDecoratorTrait"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"CollectionDecoratorTrait"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"SelectableDecoratorTrait"})}),"\n"]}),"\n",(0,o.jsxs)(c.p,{children:["And the 'reject' traits that will throw ",(0,o.jsx)(c.code,{children:"BadMethodCallException"})," when any of the\nmethods is called."]}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"ArrayAccessRejectDecoratorTrait"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"IteratorAggregateRejectDecoratorTrait"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"CountableRejectDecoratorTrait"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"ReadableCollectionRejectDecoratorTrait"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"CollectionRejectDecoratorTrait"})}),"\n",(0,o.jsx)(c.li,{children:(0,o.jsx)(c.code,{children:"SelectableRejectDecoratorTrait"})}),"\n"]}),"\n",(0,o.jsxs)(c.p,{children:["All traits require the method ",(0,o.jsx)(c.code,{children:"getWrapped()"})," which returns the wrapped\ncollection."]}),"\n",(0,o.jsx)(c.h2,{id:"convenience-trait",children:"Convenience Trait"}),"\n",(0,o.jsxs)(c.p,{children:["There is one convenience trait ",(0,o.jsx)(c.code,{children:"ArrayAccessDecoratorDxTrait"})," which forwards\n",(0,o.jsx)(c.code,{children:"ArrayAccess"})," methods not to the wrapped collection, but to other methods of the\ndecorator."]}),"\n",(0,o.jsxs)(c.p,{children:["The idea is that you only need to override ",(0,o.jsx)(c.code,{children:"containsKey()"}),", ",(0,o.jsx)(c.code,{children:"get()"}),", ",(0,o.jsx)(c.code,{children:"set()"}),",\nand ",(0,o.jsx)(c.code,{children:"remove()"}),"; and the methods ",(0,o.jsx)(c.code,{children:"offsetExists()"}),", ",(0,o.jsx)(c.code,{children:"offsetGet()"}),", ",(0,o.jsx)(c.code,{children:"offsetSet()"}),",\nand ",(0,o.jsx)(c.code,{children:"offsetUnset()"})," will forward calls to the aforementioned methods."]})]})}function h(e={}){const{wrapper:c}={...(0,r.a)(),...e.components};return c?(0,o.jsx)(c,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,c,l)=>{l.d(c,{Z:()=>s,a:()=>n});var o=l(7294);const r={},t=o.createContext(r);function n(e){const c=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function s(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(t.Provider,{value:c},e.children)}}}]);
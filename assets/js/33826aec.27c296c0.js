"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[2406],{5645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=n(5893),i=n(1151);const r={title:"Pagination"},c=void 0,a={id:"api-lite/pagination",title:"Pagination",description:"The mapCollection() method automates the task of handling collection results,",source:"@site/docs/api-lite/06-pagination.md",sourceDirName:"api-lite",slug:"/api-lite/pagination",permalink:"/api-lite/pagination",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/api-lite/06-pagination.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Pagination"},sidebar:"docs",previous:{title:"Mapping",permalink:"/api-lite/mapping"},next:{title:"Filtering",permalink:"/api-lite/filtering"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Supported Collection Objects",id:"supported-collection-objects",level:2},{value:"Supporting Other Collection Objects",id:"supporting-other-collection-objects",level:2},{value:"Use Case: Doctrine Repository",id:"use-case-doctrine-repository",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"mapCollection()"})," method automates the task of handling collection results,\nincluding pagination."]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["Common usage pattern in a state provider for a ",(0,o.jsx)(t.code,{children:"GetCollection"})," endpoint:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"use ApiPlatform\\Metadata\\Operation;\nuse Rekalogika\\ApiLite\\State\\AbstractProvider;\n\n/**\n * @extends AbstractProvider<SomeObjectDto>\n */\nclass CollectionProvider extends AbstractProvider\n{\n    // ...\n\n    public function provide(\n        Operation $operation,\n        array $uriVariables = [],\n        array $context = []\n    ): object|array|null {\n        // get the $collectionObject here\n\n        // highlight-start\n        return $this->mapCollection(\n            collection: $collectionObject,\n            target: SomeObjectDto::class,\n            operation: $operation,\n            context: $context\n        );\n        // highlight-end\n    }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The highlighted code takes the ",(0,o.jsx)(t.code,{children:"$collectionObject"}),", pages it according to the\npaging parameters provided by API Platform, maps each item in the collection to\nthe ",(0,o.jsx)(t.code,{children:"SomeObjectDto"})," class, and returns the results in a ",(0,o.jsx)(t.code,{children:"PaginatorInterface"}),"\nobject that API Platform expects."]}),"\n",(0,o.jsx)(t.h2,{id:"supported-collection-objects",children:"Supported Collection Objects"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"mapCollection()"})," method supports the following collection object types:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Doctrine ",(0,o.jsx)(t.code,{children:"Collection"})," and ",(0,o.jsx)(t.code,{children:"ReadableCollection"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Doctrine ",(0,o.jsx)(t.code,{children:"Selectable"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Doctrine ORM ",(0,o.jsx)(t.code,{children:"Query"})," and ",(0,o.jsx)(t.code,{children:"QueryBuilder"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Pagerfanta's ",(0,o.jsx)(t.code,{children:"PagerfantaInterface"})," and ",(0,o.jsx)(t.code,{children:"PagerfantaAdapterInterface"})]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"supporting-other-collection-objects",children:"Supporting Other Collection Objects"}),"\n",(0,o.jsxs)(t.p,{children:["If you need to support other collection object types, you can create a class\nimplementing ",(0,o.jsx)(t.code,{children:"PaginatorApplierInterface"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"use-case-doctrine-repository",children:"Use Case: Doctrine Repository"}),"\n",(0,o.jsxs)(t.p,{children:["Doctrine repositories implement ",(0,o.jsx)(t.code,{children:"Selectable"}),", so you can conveniently do the\nfollowing in the state provider, and avoid the need to create queries:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"use ApiPlatform\\Metadata\\Operation;\nuse Rekalogika\\ApiLite\\State\\AbstractProvider;\n\n/**\n * @extends AbstractProvider<SomeObjectDto>\n */\nclass CollectionProvider extends AbstractProvider\n{\n    public function __construct(\n        private SomeObjectRepository $someObjectRepository\n    ) {\n    }\n\n    public function provide(\n        Operation $operation,\n        array $uriVariables = [],\n        array $context = []\n    ): object|array|null {\n        return $this->mapCollection(\n            collection: $this->someObjectRepository,\n            target: SomeObjectDto::class,\n            operation: $operation,\n            context: $context\n        );\n    }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To get a default sorting, you can override the ",(0,o.jsx)(t.code,{children:"matching()"})," method in the\nrepository like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"use Doctrine\\Common\\Collections\\Criteria;\n\nclass SomeObjectRepository extends EntityRepository implements Selectable\n{\n    public function matching(Criteria $criteria): Collection\n    {\n        if (count($criteria->orderings()) === 0) {\n            $criteria->orderBy(['createdAt' => 'DESC']);\n        }\n\n        return parent::matching($criteria);\n    }\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var o=n(7294);const i={},r=o.createContext(i);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
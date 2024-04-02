"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[1564],{7723:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(5893),t=r(1151);const i={title:"Adapters"},o=void 0,l={id:"rekapager/adapters",title:"Adapters",description:"An adapter provides a common interface for different types of underlying data.",source:"@site/docs/rekapager/02-adapters.md",sourceDirName:"rekapager",slug:"/rekapager/adapters",permalink:"/rekapager/adapters",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/rekapager/02-adapters.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Adapters"},sidebar:"docs",previous:{title:"Installation",permalink:"/rekapager/installation"},next:{title:"Pageables and Pages",permalink:"/rekapager/pageable-page"}},s={},d=[{value:"Doctrine ORM <code>QueryBuilder</code> Adapter",id:"doctrine-orm-querybuilder-adapter",level:2},{value:"Doctrine Collections <code>Selectable</code> Adapter",id:"doctrine-collections-selectable-adapter",level:2},{value:"Doctrine Collections <code>Collection</code> Adapter",id:"doctrine-collections-collection-adapter",level:2},{value:"Pagerfanta Adapter Adapter",id:"pagerfanta-adapter-adapter",level:2}];function c(e){const a={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["An adapter provides a common interface for different types of underlying data.\nThere are two types of adapter interfaces: ",(0,n.jsx)(a.code,{children:"OffsetPaginationAdapterInterface"}),"\nand ",(0,n.jsx)(a.code,{children:"KeysetPaginationAdapterInterface"}),". An adapter implementation can implement\none or both of these interfaces."]}),"\n",(0,n.jsxs)(a.h2,{id:"doctrine-orm-querybuilder-adapter",children:["Doctrine ORM ",(0,n.jsx)(a.code,{children:"QueryBuilder"})," Adapter"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"composer require rekalogika/rekapager-doctrine-orm-adapter\n"})}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"QueryBuilderAdapter"})," supports keyset pagination. The class requires a\n",(0,n.jsx)(a.code,{children:"QueryBuilder"})," instance with the following conditions:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["It must have a sort order. Be sure to call ",(0,n.jsx)(a.code,{children:"orderBy()"})," or ",(0,n.jsx)(a.code,{children:"addOrderBy()"})," on\nthe query builder before passing it to the adapter."]}),"\n",(0,n.jsxs)(a.li,{children:["If a field in a sort order uses non-scalar type, you need to provide a type\nmapping. The adapter will use it in the ",(0,n.jsx)(a.code,{children:"setParameter()"})," method of the\n",(0,n.jsx)(a.code,{children:"QueryBuilder"}),". See the example below."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-php",children:"use Doctrine\\DBAL\\Types\\Types;\nuse Doctrine\\ORM\\EntityRepository;\nuse Rekalogika\\Rekapager\\Doctrine\\ORM\\QueryBuilderAdapter;\nuse Rekalogika\\Rekapager\\Keyset\\KeysetPageable;\n\n/** @var EntityRepository $postRepository */\n$queryBuilder = $postRepository\n    ->createQueryBuilder('p')\n    ->where('p.group = :group')\n    ->setParameter('group', $group)\n    ->addOrderBy('p.date', 'DESC') // a date field that accepts DateTime\n    ->addOrderBy('p.title', 'ASC')\n    ->addOrderBy('p.id', 'ASC');\n\n// highlight-start\n$adapter = new QueryBuilderAdapter(\n    queryBuilder: $queryBuilder,\n    typeMapping: [\n        'p.date' => Types::DATE_MUTABLE // the type of the date field\n    ]\n);\n// highlight-end\n\n// QueryBuilderAdapter only supports Keyset pagination\n$pageable = new KeysetPageable($adapter);\n"})}),"\n",(0,n.jsxs)(a.h2,{id:"doctrine-collections-selectable-adapter",children:["Doctrine Collections ",(0,n.jsx)(a.code,{children:"Selectable"})," Adapter"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"composer require rekalogika/rekapager-doctrine-collections-adapter\n"})}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"SelectableAdapter"})," supports both keyset and offset pagination. The class\nrequires a ",(0,n.jsx)(a.code,{children:"Selectable"})," instance. Usually, it is a Doctrine ",(0,n.jsx)(a.code,{children:"Collection"})," used in\nentities, or a Doctrine repository."]}),"\n",(0,n.jsxs)(a.p,{children:["The class needs to work with a ",(0,n.jsx)(a.code,{children:"Criteria"})," object, but if the caller omits it,\nthe adapter will create an empty ",(0,n.jsx)(a.code,{children:"Criteria"})," object. If the ",(0,n.jsx)(a.code,{children:"Criteria"})," does not\nhave a sort order, the adapter will sort the collection using the field ",(0,n.jsx)(a.code,{children:"id"}),". If\nthe object does not have an ",(0,n.jsx)(a.code,{children:"id"})," field, Doctrine will throw an exception."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-php",children:"use Doctrine\\Common\\Collections\\Criteria;\nuse Doctrine\\ORM\\EntityRepository;\nuse Rekalogika\\Rekapager\\Doctrine\\Collections\\SelectableAdapter;\nuse Rekalogika\\Rekapager\\Keyset\\KeysetPageable;\nuse Rekalogika\\Rekapager\\Offset\\OffsetPageable;\n\n/** @var EntityRepository $postRepository */\n\n$selectable = $postRepository; // a Doctrine repository is also a Selectable\n// or\n$selectable = $user->getComments(); // a Doctrine Collection in an entity\n\n$criteria = Criteria::create()\n    ->where(Criteria::expr()->eq('group', $group))\n    ->orderBy([\n        'date' => Order::Descending,\n        'title' => Order::Ascending,\n        'id' => Order::Ascending\n    ]);\n\n// highlight-next-line\n$adapter = new SelectableAdapter($selectable, $criteria);\n\n$pageable = new KeysetPageable($adapter);\n// or\n$pageable = new OffsetPageable($adapter);\n"})}),"\n",(0,n.jsxs)(a.h2,{id:"doctrine-collections-collection-adapter",children:["Doctrine Collections ",(0,n.jsx)(a.code,{children:"Collection"})," Adapter"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"composer require rekalogika/rekapager-doctrine-collections-adapter\n"})}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"CollectionAdapter"})," supports only offset pagination. The class works with a\nDoctrine ",(0,n.jsx)(a.code,{children:"ReadableCollection"})," (also ",(0,n.jsx)(a.code,{children:"Collection"}),") instance."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-php",children:"use Doctrine\\Common\\Collections\\Collection;\nuse Rekalogika\\Rekapager\\Doctrine\\Collections\\CollectionAdapter;\nuse Rekalogika\\Rekapager\\Offset\\OffsetPageable;\n\n/** @var Collection $collection */\n$collection = $user->getComments(); // a Doctrine Collection in an entity\n\n// highlight-next-line\n$adapter = new CollectionAdapter($collection);\n\n$pageable = new OffsetPageable($adapter);\n"})}),"\n",(0,n.jsx)(a.h2,{id:"pagerfanta-adapter-adapter",children:"Pagerfanta Adapter Adapter"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"composer require rekalogika/rekapager-pagerfanta-adapter\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Allows leveraging any of the existing Pagerfanta adapters. The\n",(0,n.jsx)(a.code,{children:"PagerfantaAdapterAdapter"})," supports only offset pagination. The adapter takes a\nPagerfanta's ",(0,n.jsx)(a.code,{children:"AdapterInterface"})," instance as its argument."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-php",children:"use Pagerfanta\\Doctrine\\Collections\\SelectableAdapter;\nuse Rekalogika\\Rekapager\\Offset\\OffsetPageable;\nuse Rekalogika\\Rekapager\\Pagerfanta\\PagerfantaAdapterAdapter;\n\n$criteria = Criteria::create()\n        ->where(Criteria::expr()->eq('group', $group));\n\n$pagerfantaAdapter = new SelectableAdapter($user->getPosts(), $criteria);\n// highlight-next-line\n$adapter = new PagerfantaAdapterAdapter($pagerfantaAdapter);\n\n$pageable = new OffsetPageable($adapter);\n"})}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["If you already have a ",(0,n.jsx)(a.code,{children:"Pagerfanta"})," instance, you can use ",(0,n.jsx)(a.code,{children:"PagerfantaPageable"}),"\ninstead."]})})]})}function p(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,a,r)=>{r.d(a,{Z:()=>l,a:()=>o});var n=r(7294);const t={},i=n.createContext(t);function o(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);
"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[6317],{2288:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=n(5893),c=n(1151);const i={title:"Record Precounting"},r=void 0,l={id:"doctrine-collections-decorator/cookbook/record-precounting",title:"Record Precounting",description:"Database servers can be [slow in counting",source:"@site/docs/doctrine-collections-decorator/cookbook/12-record-precounting.md",sourceDirName:"doctrine-collections-decorator/cookbook",slug:"/doctrine-collections-decorator/cookbook/record-precounting",permalink:"/doctrine-collections-decorator/cookbook/record-precounting",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/doctrine-collections-decorator/cookbook/12-record-precounting.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Record Precounting"},sidebar:"docs",previous:{title:"Type Safety",permalink:"/doctrine-collections-decorator/cookbook/type-safety"},next:{title:"Selectable Abstraction",permalink:"/doctrine-collections-decorator/cookbook/selectable-abstraction"}},s={},a=[{value:"The Decorator Class",id:"the-decorator-class",level:2},{value:"Usage in the <code>one-to-many</code> Side",id:"usage-in-the-one-to-many-side",level:2},{value:"The Caller Side",id:"the-caller-side",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["Database servers can be ",(0,t.jsx)(o.a,{href:"https://wiki.postgresql.org/wiki/Slow_Counting",children:"slow in counting\nrecords"}),", especially when your\nentity has a million related entities. Doing ",(0,t.jsx)(o.code,{children:"$collection->count()"})," or\n",(0,t.jsx)(o.code,{children:"count($collection)"})," will be slow because it will do a ",(0,t.jsx)(o.code,{children:"COUNT()"})," query behind\nthe scenes."]}),"\n",(0,t.jsxs)(o.p,{children:["One way to optimize this is to do a precounting and store the count in a\nseparate column. This way, you can get the count of related entities without\nhaving to do a very expensive ",(0,t.jsx)(o.code,{children:"COUNT()"})," query every single time."]}),"\n",(0,t.jsx)(o.p,{children:"However, it would also mean you need to change the way you get the count. To\nsolve this problem, you can decorate the collection object to fetch the count\nfrom the field storing the pre-counted value."}),"\n",(0,t.jsx)(o.h2,{id:"the-decorator-class",children:"The Decorator Class"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",children:"use Doctrine\\Common\\Collections\\Collection;\nuse Rekalogika\\Collections\\Decorator\\Decorator\\CollectionDecorator;\n\n/**\n * @extends CollectionDecorator<array-key,Book>\n */\nclass BookCollection extends CollectionDecorator\n{\n    /**\n     * @param Collection<array-key,Book> $collection\n     */\n    public function __construct(\n        Collection $collection,\n        // highlight-next-line\n        private int &$count   // pass by reference\n    ) {\n        parent::__construct($collection);\n    }\n\n    // highlight-start\n    #[\\Override]\n    public function count(): int\n    {\n        return $this->count();\n    }\n    // highlight-end\n\n    /**\n     * Calculates the count and stores it in the `$count` property.\n     */\n    // highlight-start\n    public function preCount(): void\n    {\n        $this->count = $this->getWrapped()->count();\n    }\n    // highlight-end\n}\n"})}),"\n",(0,t.jsxs)(o.h2,{id:"usage-in-the-one-to-many-side",children:["Usage in the ",(0,t.jsx)(o.code,{children:"one-to-many"})," Side"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",children:"use Doctrine\\Common\\Collections\\ArrayCollection;\nuse Doctrine\\Common\\Collections\\Collection;\nuse Doctrine\\ORM\\Mapping as ORM;\n\n#[ORM\\Entity()]\nclass BookShelf\n{\n    /**\n     * @var Collection<array-key,Book>\n     */\n    #[ORM\\OneToMany(targetEntity: Book::class)]\n    private Collection $books;\n\n    // highlight-start\n    #[ORM\\Column()]\n    private int $booksCount = 0;\n    // highlight-end\n\n    public function __construct()\n    {\n        $this->books = new ArrayCollection();\n    }\n\n    public function getBooks(): BookCollection\n    {\n        // highlight-next-line\n        return new BookCollection($this->books, $this->booksCount);\n    }\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"the-caller-side",children:"The Caller Side"}),"\n",(0,t.jsx)(o.p,{children:"To get the count, you can do it the same way as before. But instead of asking\nthe database to do that, this time it will give you the value from the\npre-counted result instantly:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",children:"$count = $bookShelf->getBooks()->count();\n// or:\n$count = count($bookShelf->getBooks());\n"})}),"\n",(0,t.jsx)(o.p,{children:"When it is time to refresh the pre-counted value, you can do this:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",children:"/** @var EntityManagerInterface $entityManager */\n\n$bookShelf->getBooks()->preCount();\n$entityManager->flush();\n"})})]})}function h(e={}){const{wrapper:o}={...(0,c.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>r});var t=n(7294);const c={},i=t.createContext(c);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(g,c(c({ref:t},u),{},{components:n})):o.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={title:"Record Precounting"},c=void 0,a={unversionedId:"doctrine-collections-decorator/cookbook/record-precounting",id:"doctrine-collections-decorator/cookbook/record-precounting",title:"Record Precounting",description:"Database servers can be [slow in counting",source:"@site/docs/doctrine-collections-decorator/cookbook/12-record-precounting.md",sourceDirName:"doctrine-collections-decorator/cookbook",slug:"/doctrine-collections-decorator/cookbook/record-precounting",permalink:"/doctrine-collections-decorator/cookbook/record-precounting",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/doctrine-collections-decorator/cookbook/12-record-precounting.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Record Precounting"},sidebar:"docs",previous:{title:"Type Safety",permalink:"/doctrine-collections-decorator/cookbook/type-safety"},next:{title:"Selectable Abstraction",permalink:"/doctrine-collections-decorator/cookbook/selectable-abstraction"}},l={},s=[{value:"The Decorator Class",id:"the-decorator-class",level:2},{value:"Usage in the <code>one-to-many</code> Side",id:"usage-in-the-one-to-many-side",level:2},{value:"The Caller Side",id:"the-caller-side",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Database servers can be ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.postgresql.org/wiki/Slow_Counting"},"slow in counting\nrecords"),", especially when your\nentity has a million related entities. Doing ",(0,r.kt)("inlineCode",{parentName:"p"},"$collection->count()")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"count($collection)")," will be slow because it will do a ",(0,r.kt)("inlineCode",{parentName:"p"},"COUNT()")," query behind\nthe scenes."),(0,r.kt)("p",null,"One way to optimize this is to do a precounting and store the count in a\nseparate column. This way, you can get the count of related entities without\nhaving to do a very expensive ",(0,r.kt)("inlineCode",{parentName:"p"},"COUNT()")," query every single time."),(0,r.kt)("p",null,"However, it would also mean you need to change the way you get the count. To\nsolve this problem, you can decorate the collection object to fetch the count\nfrom the field storing the pre-counted value."),(0,r.kt)("h2",{id:"the-decorator-class"},"The Decorator Class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\Common\\Collections\\Collection;\nuse Rekalogika\\Collections\\Decorator\\Decorator\\CollectionDecorator;\n\n/**\n * @extends CollectionDecorator<array-key,Book>\n */\nclass BookCollection extends CollectionDecorator\n{\n    /**\n     * @param Collection<array-key,Book> $collection\n     */\n    public function __construct(\n        Collection $collection,\n        // highlight-next-line\n        private int &$count   // pass by reference\n    ) {\n        parent::__construct($collection);\n    }\n\n    // highlight-start\n    #[\\Override]\n    public function count(): int\n    {\n        return $this->count();\n    }\n    // highlight-end\n\n    /**\n     * Calculates the count and stores it in the `$count` property.\n     */\n    // highlight-start\n    public function preCount(): void\n    {\n        $this->count = $this->getWrapped()->count();\n    }\n    // highlight-end\n}\n")),(0,r.kt)("h2",{id:"usage-in-the-one-to-many-side"},"Usage in the ",(0,r.kt)("inlineCode",{parentName:"h2"},"one-to-many")," Side"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\Common\\Collections\\ArrayCollection;\nuse Doctrine\\Common\\Collections\\Collection;\nuse Doctrine\\ORM\\Mapping as ORM;\n\n#[ORM\\Entity()]\nclass BookShelf\n{\n    /**\n     * @var Collection<array-key,Book>\n     */\n    #[ORM\\OneToMany(targetEntity: Book::class)]\n    private Collection $books;\n\n    // highlight-start\n    #[ORM\\Column()]\n    private int $booksCount = 0;\n    // highlight-end\n\n    public function __construct()\n    {\n        $this->books = new ArrayCollection();\n    }\n\n    public function getBooks(): BookCollection\n    {\n        // highlight-next-line\n        return new BookCollection($this->books, $this->booksCount);\n    }\n}\n")),(0,r.kt)("h2",{id:"the-caller-side"},"The Caller Side"),(0,r.kt)("p",null,"To get the count, you can do it the same way as before. But instead of asking\nthe database to do that, this time it will give you the value from the\npre-counted result instantly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$count = $bookShelf->getBooks()->count();\n// or:\n$count = count($bookShelf->getBooks());\n")),(0,r.kt)("p",null,"When it is time to refresh the pre-counted value, you can do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/** @var EntityManagerInterface $entityManager */\n\n$bookShelf->getBooks()->preCount();\n$entityManager->flush();\n")))}d.isMDXComponent=!0}}]);
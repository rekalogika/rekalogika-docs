"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2491],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(o),y=r,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return o?n.createElement(f,c(c({ref:t},p),{},{components:o})):n.createElement(f,c({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,c=new Array(i);c[0]=y;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=o[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},8651:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const i={title:"Type Safety"},c=void 0,a={unversionedId:"doctrine-collections-decorator/cookbook/type-safety",id:"doctrine-collections-decorator/cookbook/type-safety",title:"Type Safety",description:"We can use collection decoration to ensure that the items in a collection are of",source:"@site/docs/doctrine-collections-decorator/cookbook/11-type-safety.md",sourceDirName:"doctrine-collections-decorator/cookbook",slug:"/doctrine-collections-decorator/cookbook/type-safety",permalink:"/doctrine-collections-decorator/cookbook/type-safety",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/doctrine-collections-decorator/cookbook/11-type-safety.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Type Safety"},sidebar:"docs",previous:{title:"Cookbook",permalink:"/doctrine-collections-decorator/cookbook/"},next:{title:"Record Precounting",permalink:"/doctrine-collections-decorator/cookbook/record-precounting"}},l={},s=[{value:"The Decorator Class",id:"the-decorator-class",level:2},{value:"Usage in the <code>one-to-many</code> Side",id:"usage-in-the-one-to-many-side",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We can use collection decoration to ensure that the items in a collection are of\na certain type."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We find this usage superfluous most of the time considering static analysis\ntools can do a pretty good job these days. But it is also one of the most common\nobjectives of people asking to have a custom Doctrine collection.")),(0,r.kt)("h2",{id:"the-decorator-class"},"The Decorator Class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\Common\\Collections\\Collection;\nuse Rekalogika\\Collections\\Decorator\\Decorator\\CollectionDecorator;\n\n/**\n * @extends CollectionDecorator<array-key,Book>\n */\nclass Books extends CollectionDecorator\n{\n    // highlight-start\n    private static function assert(mixed $book): Book\n    {\n        if (!$book instanceof Book) {\n            throw new \\InvalidArgumentException('Invalid input');\n        }\n\n        return $book;\n    }\n    // highlight-end\n\n    #[\\Override]\n    public function add(mixed $element): void\n    {\n        // highlight-next-line\n        $this->getWrapped()->add(self::assert($element));\n    }\n\n    #[\\Override]\n    public function set(string|int $key, mixed $value): void\n    {\n        // highlight-next-line\n        $this->getWrapped()->set($key, self::assert($value));\n    }\n}\n")),(0,r.kt)("h2",{id:"usage-in-the-one-to-many-side"},"Usage in the ",(0,r.kt)("inlineCode",{parentName:"h2"},"one-to-many")," Side"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\Common\\Collections\\ArrayCollection;\nuse Doctrine\\Common\\Collections\\Collection;\nuse Doctrine\\ORM\\Mapping as ORM;\n\n#[ORM\\Entity()]\nclass BookShelf\n{\n    /**\n     * @var Collection<array-key,Book>\n     */\n    #[ORM\\OneToMany(targetEntity: Book::class)]\n    private Collection $books;\n\n    public function __construct()\n    {\n        $this->books = new ArrayCollection();\n    }\n\n    public function getBooks(): Books\n    {\n        // highlight-next-line\n        return new Books($this->books);\n    }\n}\n")))}u.isMDXComponent=!0}}]);
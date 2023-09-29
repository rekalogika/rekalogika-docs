"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[823],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return t?i.createElement(g,r(r({ref:n},m),{},{components:t})):i.createElement(g,r({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));const o={title:"Implementing a Collection of Files"},r=void 0,l={unversionedId:"file-bundle/collection",id:"file-bundle/collection",title:"Implementing a Collection of Files",description:"This chapter describes how to implement a collection of files, or one-to-many",source:"@site/docs/file-bundle/13-collection.md",sourceDirName:"file-bundle",slug:"/file-bundle/collection",permalink:"/file-bundle/collection",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file-bundle/13-collection.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Implementing a Collection of Files"},sidebar:"docs",previous:{title:"Replicating Metadata in Entities",permalink:"/file-bundle/replicating-metadata-in-entities"},next:{title:"File Association Internal Details",permalink:"/file-bundle/entity-association-internal"}},c={},s=[{value:"Summary",id:"summary",level:2},{value:"The <code>many-to-one</code> Side",id:"the-many-to-one-side",level:2},{value:"The <code>one-to-many</code> Side",id:"the-one-to-many-side",level:2},{value:"Using The Relation",id:"using-the-relation",level:2}],m={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This chapter describes how to implement a collection of files, or one-to-many\nrelation between a Doctrine entity and several files."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This feature is only nominally tested.")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This is what we do to implement one-to-many relation between an entity and\nseveral files:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new entity that will represent a file. For convenience, we provide\n",(0,a.kt)("inlineCode",{parentName:"li"},"AbstractFile")," that your file entity can extend."),(0,a.kt)("li",{parentName:"ol"},"Create a one-to-many relation from an entity to the entity in #1.")),(0,a.kt)("admonition",{title:"Preparation",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You need to install the package ",(0,a.kt)("inlineCode",{parentName:"p"},"rekalogika/file-association-entity")," to use this\nfeature:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"composer require rekalogika/file-association-entity\n"))),(0,a.kt)("h2",{id:"the-many-to-one-side"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"many-to-one")," Side"),(0,a.kt)("p",null,"In the following example, we will be creating an entity ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," that will\nhave multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"Image"),"s."),(0,a.kt)("p",null,"Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"Image")," entity by extending ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractFile"),". The following are the\nrelevant parts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\ORM\\Mapping as ORM;\nuse Rekalogika\\Domain\\File\\Association\\Entity\\AbstractFile;\n\n#[ORM\\Entity]\nclass Image extends AbstractFile\n{\n    // ...\n\n    #[ORM\\ManyToOne(inversedBy: 'images')]\n    #[ORM\\JoinColumn(nullable: false)]\n    private ?Product $product = null;\n\n    public function getProduct(): ?Product\n    {\n        return $this->product;\n    }\n\n    public function setProduct(?Product $product): static\n    {\n        $this->product = $product;\n\n        return $this;\n    }\n\n    // ...\n}\n")),(0,a.kt)("h2",{id:"the-one-to-many-side"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"one-to-many")," Side"),(0,a.kt)("p",null,"The relevant parts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\Common\\Collections\\ArrayCollection;\nuse Doctrine\\Common\\Collections\\Collection;\nuse Doctrine\\ORM\\Mapping as ORM;\n\n#[ORM\\Entity]\nclass Product\n{\n    // ...\n\n    #[ORM\\OneToMany(mappedBy: 'product', targetEntity: Image::class, orphanRemoval: true)]\n    private Collection $images;\n\n    public function __construct()\n    {\n        $this->images = new ArrayCollection();\n    }\n\n    /**\n     * @return Collection<int, Image>\n     */\n    public function getImages(): Collection\n    {\n        return $this->images;\n    }\n\n    public function addImage(Image $image): static\n    {\n        if (!$this->images->contains($image)) {\n            $this->images->add($image);\n            $image->setProduct($this);\n        }\n\n        return $this;\n    }\n\n    public function removeImage(Image $image): static\n    {\n        if ($this->images->removeElement($image)) {\n            // set the owning side to null (unless already changed)\n            if ($image->getProduct() === $this) {\n                $image->setProduct(null);\n            }\n        }\n\n        return $this;\n    }\n\n    // ...\n}\n")),(0,a.kt)("p",null,"Optionally, for convenience, you can also modify the adder ",(0,a.kt)("inlineCode",{parentName:"p"},"addImage")," above so\nthat it also accepts an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"FileInterface"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\FileInterface;\n\nclass Product\n{\n    // ...\n\n    public function addImage(Image|FileInterface $image): static\n    {\n        if (!$image instanceof Image) {\n            $image = new Image($image);\n        }\n\n        if (!$this->images->contains($image)) {\n            $this->images->add($image);\n            $image->setProduct($this);\n        }\n\n        return $this;\n    }\n\n    // ...\n}\n")),(0,a.kt)("h2",{id:"using-the-relation"},"Using The Relation"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractEntity")," implements ",(0,a.kt)("inlineCode",{parentName:"p"},"FileInterface"),". Therefore, with the example\nabove, you can treat the ",(0,a.kt)("inlineCode",{parentName:"p"},"Image")," entity as a file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\File\\File;\n\n$product = new Product();\n$image1 = new File('product_image_1.jpg');\n$image2 = new File('product_image_2.jpg');\n$image3 = new File('product_image_3.jpg');\n\n$product\n    ->addImage($image1)\n    ->addImage($image2)\n    ->addImage($image3);\n\nforeach ($product->getImages() as $image) {\n    $name = $image->getName(); // product_image_1.jpg, etc.\n    $description = $image->getType()->getDescription(); // \"JPEG image\", etc.\n}\n")))}u.isMDXComponent=!0}}]);
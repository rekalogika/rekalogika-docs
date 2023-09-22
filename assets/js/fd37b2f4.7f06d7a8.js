"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={title:"Associating Files with Doctrine Entities"},o=void 0,l={unversionedId:"file-bundle/doctrine-entity",id:"file-bundle/doctrine-entity",title:"Associating Files with Doctrine Entities",description:"This chapter describes how to create a file property in a Doctrine entity that",source:"@site/docs/file-bundle/03-doctrine-entity.md",sourceDirName:"file-bundle",slug:"/file-bundle/doctrine-entity",permalink:"/file-bundle/doctrine-entity",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file-bundle/03-doctrine-entity.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Associating Files with Doctrine Entities"},sidebar:"docs",previous:{title:"Installation & Configuration",permalink:"/file-bundle/installation"},next:{title:"Symfony Integration",permalink:"/file-bundle/symfony"}},s={},c=[{value:"Creating a File Property in an Entity",id:"creating-a-file-property-in-an-entity",level:2},{value:"If Your Entity Does Not Use <code>getId()</code>",id:"if-your-entity-does-not-use-getid",level:2},{value:"If it is simply a different method name",id:"if-it-is-simply-a-different-method-name",level:3},{value:"If it is more complicated than that",id:"if-it-is-more-complicated-than-that",level:3},{value:"Working With Entities &amp; Files",id:"working-with-entities--files",level:2},{value:"Creating an entity, associating it with a file, &amp; persisting it",id:"creating-an-entity-associating-it-with-a-file--persisting-it",level:3},{value:"Replacing an associated file",id:"replacing-an-associated-file",level:3},{value:"Updating the metadata of an associated file",id:"updating-the-metadata-of-an-associated-file",level:3},{value:"Removing an associated file",id:"removing-an-associated-file",level:3},{value:"Removing the entity will also remove the associated file",id:"removing-the-entity-will-also-remove-the-associated-file",level:3},{value:"Symfony Integration (or How To Upload Files)",id:"symfony-integration-or-how-to-upload-files",level:2},{value:"(alternative) Entity Setup Using Interface",id:"alternative-entity-setup-using-interface",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This chapter describes how to create a file property in a Doctrine entity that\nyou can use to associate a file to an entity, including to store the result of a\nfile upload."),(0,a.kt)("admonition",{title:"Preparation",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To enable this feature, you need to install the package\n",(0,a.kt)("inlineCode",{parentName:"p"},"rekalogika/file-association"),":"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"composer require rekalogika/file-association\n"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This package is tightly integrated with Symfony & Doctrine. Anyone who wishes to\ntry integrating this package manually or with another framework should read\n",(0,a.kt)("a",{parentName:"p",href:"./entity-association-internal"},"Entity Association Internal Details"),".")),(0,a.kt)("h2",{id:"creating-a-file-property-in-an-entity"},"Creating a File Property in an Entity"),(0,a.kt)("p",null,"To create a file property in an entity, you need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a property that accept a ",(0,a.kt)("inlineCode",{parentName:"li"},"FileInterface"),"."),(0,a.kt)("li",{parentName:"ol"},"Add the attribute ",(0,a.kt)("inlineCode",{parentName:"li"},"#[WithFileAssociation]")," to the entity class."),(0,a.kt)("li",{parentName:"ol"},"Add the attribute ",(0,a.kt)("inlineCode",{parentName:"li"},"#[AsFileAssociation]")," to the property.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\FileInterface;\nuse Rekalogika\\File\\Association\\Attribute\\WithFileAssociation;\nuse Rekalogika\\File\\Association\\Attribute\\AsFileAssociation;\nuse Rekalogika\\File\\File;\n\n#[WithFileAssociation]\nclass Product\n{\n    /**\n     * The file property must accept a FileInterface\n     */\n    #[AsFileAssociation]\n    private ?FileInterface $image = null;\n\n    /**\n     * The framework needs the ID of the entity. By default, it will call getId()\n     * of the object to get the ID. If your entity doesn't use getId(), read\n     * the next section.\n     */\n    public function getId(): string\n    {\n        return $this->id;\n    }\n\n    //\n    // The rest of this class is inconsequential to the framework\n    //\n\n    /**\n     * This framework reads and writes directly to the properties, even if\n     * private. Therefore, you are free to have your own business logic in the\n     * getters and setters.\n     */\n    public function getImage(): FileInterface\n    {\n        if (date('m-d') == '04-01') { // if today is april 1st\n            return new File('shock-image.jpg'); // april fools!\n        }\n\n        return $this->image;\n    }\n\n    public function setImage(?FileInterface $image): self\n    {\n        if ($this->status == 'published') {\n            throw new \\Exception(\"Cannot change a published product's image\");\n        }\n\n        $this->image = $image;\n\n        return $this;\n    }\n}\n")),(0,a.kt)("h2",{id:"if-your-entity-does-not-use-getid"},"If Your Entity Does Not Use ",(0,a.kt)("inlineCode",{parentName:"h2"},"getId()")),(0,a.kt)("p",null,"Then you need to tell the framework how to get the ID of your entity. You need\nto create a class that implements ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectIdResolverInterface"),"."),(0,a.kt)("admonition",{title:"Protip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can have multiple implementations of ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectIdResolverInterface")," in your\napplication. The framework will use the first one that returns a value.")),(0,a.kt)("h3",{id:"if-it-is-simply-a-different-method-name"},"If it is simply a different method name"),(0,a.kt)("p",null,"If your entity simply uses a different method name, you can reuse the default\nimplementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectIdResolverInterface"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=config/services.yaml",title:"config/services.yaml"},"services:\n    app.object_id_resolver:\n        class: 'Rekalogika\\File\\Association\\ObjectIdResolver\\DefaultObjectIdResolver'\n        args:\n            - 'getIdentifier' # put the method name here\n        tags:\n            - { name: 'rekalogika.file.association.object_id_resolver' }\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"DefaultObjectIdResolver")," can handle return types of ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", and\n",(0,a.kt)("inlineCode",{parentName:"p"},"Stringable"),".")),(0,a.kt)("h3",{id:"if-it-is-more-complicated-than-that"},"If it is more complicated than that"),(0,a.kt)("p",null,"Then you need to create your own implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectIdResolverInterface"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\Association\\ObjectIdResolverInterface;\n\nclass MyObjectIdResolver implements ObjectIdResolverInterface\n{\n    public function getObjectId(object $object): string\n    {\n        // your implementation here\n    }\n}\n")),(0,a.kt)("p",null,"If you are using autoconfiguration, then it is all set. If not, you need to\nregister your class in the service container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=config/services.yaml",title:"config/services.yaml"},"services:\n    App\\MyObjectIdResolver:\n        tags:\n            - { name: 'rekalogika.file.association.object_id_resolver' }\n")),(0,a.kt)("h2",{id:"working-with-entities--files"},"Working With Entities & Files"),(0,a.kt)("p",null,"You can work with the entities and associated files as usual, and they will work\nthe way you expect them to work."),(0,a.kt)("h3",{id:"creating-an-entity-associating-it-with-a-file--persisting-it"},"Creating an entity, associating it with a file, & persisting it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\ORM\\EntityManagerInterface;\nuse Rekalogika\\File\\File;\n\n/** @var EntityManagerInterface $entityManager */\n\n$product = new Product();\n$image = new File('/tmp/image.png');\n$product->setImage($image);\n\n$entityManager->persist($product);\n$entityManager->flush();\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The framework will copy the file to the storage location, and leave the original\nfile alone. It is the responsibility of the caller to delete the original if it\nwishes to do so."),(0,a.kt)("p",{parentName:"admonition"},"If the file arrived from a file upload, PHP will delete the file automatically\nwhen the request ends.")),(0,a.kt)("h3",{id:"replacing-an-associated-file"},"Replacing an associated file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\ORM\\EntityManagerInterface;\nuse Rekalogika\\File\\File;\n\n/** @var EntityManagerInterface $entityManager */\n/** @var Product $product */\n\n$newImage = new File('/tmp/newImage.png')\n$product->setImage($newImage);\n$entityManager->flush();\n")),(0,a.kt)("h3",{id:"updating-the-metadata-of-an-associated-file"},"Updating the metadata of an associated file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\ORM\\EntityManagerInterface;\n\n/** @var Product $product */\n\n$product->getImage()?->setName('newImage.png');\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Files are not Doctrine entities. File modifications are carried out\nimmediately, independent of Doctrine's ",(0,a.kt)("inlineCode",{parentName:"p"},"flush()"),".")),(0,a.kt)("h3",{id:"removing-an-associated-file"},"Removing an associated file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\ORM\\EntityManagerInterface;\n\n/** @var EntityManagerInterface $entityManager */\n/** @var Product $product */\n\n$product->setImage(null);\n$entityManager->flush();\n")),(0,a.kt)("h3",{id:"removing-the-entity-will-also-remove-the-associated-file"},"Removing the entity will also remove the associated file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\ORM\\EntityManagerInterface;\n\n/** @var EntityManagerInterface $entityManager */\n/** @var Product $product */\n\n$entityManager->remove($product);\n$entityManager->flush();\n")),(0,a.kt)("h2",{id:"symfony-integration-or-how-to-upload-files"},"Symfony Integration (or How To Upload Files)"),(0,a.kt)("p",null,"For integrations with various Symfony Components, including HttpFoundation,\nForm, and Validator, please read the chapter ",(0,a.kt)("a",{parentName:"p",href:"symfony"},"Symfony Integration"),"."),(0,a.kt)("h2",{id:"alternative-entity-setup-using-interface"},"(alternative) Entity Setup Using Interface"),(0,a.kt)("p",null,"As an alternative to using attributes to mark the file property above, you can\nalso have your entity implement ",(0,a.kt)("inlineCode",{parentName:"p"},"FileAssociationInterface"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\FileInterface;\nuse Rekalogika\\Contracts\\File\\Association\\FileAssociationInterface;\n\nclass Product implements FileAssociationInterface\n{\n    /**\n     * The file properties must accept FileInterface\n     */\n    private ?FileInterface $image = null;\n\n    /**\n     * This method gives the list of properties of this class that will\n     * be managed by this framework. In this case it tells us that the\n     * property 'image' is a file property we need to manage.\n     */\n    public static function getFileAssociationPropertyList(): array\n    {\n        return ['image'];\n    }\n\n    /**\n     * The framework needs the ID of the entity. By default, it will call getId()\n     * of the object to get the ID.\n     */\n    public function getId(): string\n    {\n        return $this->id;\n    }\n\n    //\n    // The rest of this class is inconsequential to the framework\n    //\n\n    /**\n     * This framework reads and writes directly to the properties, even if\n     * private. Therefore, you are free to have your own business logic in the\n     * getters and setters.\n     */\n    public function getImage(): FileInterface\n    {\n        if (date('m-d') == '04-01') { // if today is april 1st\n            return new File('shock-image.jpg'); // april fools!\n        }\n\n        return $this->image;\n    }\n\n    public function setImage(?FileInterface $image): self\n    {\n        if ($this->status == 'published') {\n            throw new \\Exception(\"Cannot change a published product's image\");\n        }\n\n        $this->image = $image;\n\n        return $this;\n    }\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We recommend using attributes instead of implementing the interface. But\ncurrently using attributes can be less performant than using the interface.")))}u.isMDXComponent=!0}}]);
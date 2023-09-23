"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[748],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(a),f=i,h=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1773:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const l={title:"Metadata"},r=void 0,o={unversionedId:"file/metadata",id:"file/metadata",title:"Metadata",description:"This chapter describes how file metadata is handled by this library.",source:"@site/docs/file/05-metadata.md",sourceDirName:"file",slug:"/file/metadata",permalink:"/file/metadata",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file/05-metadata.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Metadata"},sidebar:"docs",previous:{title:"Adapters",permalink:"/file/adapters"},next:{title:"Derivation",permalink:"/file/derivation"}},s={},d=[{value:"Primary Metadata",id:"primary-metadata",level:2},{value:"Metadata Objects",id:"metadata-objects",level:2},{value:"Getting Metadata Objects",id:"getting-metadata-objects",level:2},{value:"Setting Metadata",id:"setting-metadata",level:2},{value:"Low-Level Metadata Handling",id:"low-level-metadata-handling",level:2}],c={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This chapter describes how file metadata is handled by this library."),(0,i.kt)("h2",{id:"primary-metadata"},"Primary Metadata"),(0,i.kt)("p",null,"Firstly, ",(0,i.kt)("inlineCode",{parentName:"p"},"FileInterface")," has several methods that returns or sets what can be\nconsidered metadata of the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\FileInterface;\n\n/** @var FileInterface $file */\n\n// Returns the file's name\n$name = (string) $file->getName();\n\n// Returns the file's MIME type\n$mime = (string) $file->getType();\n\n// Returns the file's size in bytes\n$size = $file->getSize();\n\n// Returns the file's last modified time\n$lastModified = $file->getLastModified();\n")),(0,i.kt)("h2",{id:"metadata-objects"},"Metadata Objects"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"FileInterface")," can also have several metadata objects associated with it. A\nmetadata object is an object that represents a specific type of metadata of the\nfile."),(0,i.kt)("p",null,"These are the metadata objects that are currently implemented:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RawMetadataInterface"),": Represents the raw metadata object. It is a simple\nkey-value object. The value can be a string, integer, boolean or null."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FileMetadataInterface"),": Represents the metadata that every file has: name,\ntype, size and last modified time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HttpMetadataInterface"),": Represents metadata used in HTTP responses. It is\nused when streaming the file to the client over HTTP."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ImageMetadataInterface"),": Contains metadata specific to images, including\nimage dimension and orientation.")),(0,i.kt)("h2",{id:"getting-metadata-objects"},"Getting Metadata Objects"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FileInterface")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"get()")," method that returns an associated object of\nthe file. The caller can use this method to get a specific metadata object of a\nfile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\FileInterface;\n\n/** @var FileInterface $file */\n\n// Returns the FileMetadataInterface object\n$fileMetadata = $file->get(FileMetadataInterface::class);\n\n// Returns the ImageMetadataInterface object\n$imageMetadata = $file->get(ImageMetadataInterface::class);\n\n// Getting image related metadata\n$width = $file->get(ImageMetadataInterface::class)->getWidth();\n$height = $file->get(ImageMetadataInterface::class)->getHeight();\n")),(0,i.kt)("p",null,"You can also use string aliases instead of FQCNs. This is useful when specifying\nFQCNs is inconvenient, like in Twig templates:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-twig"},'<img src="{{ image_file|temporary_url }}"\n   width="{{ image_file.get(\'imageMetadata\').width }}"\n   height="{{ image_file.get(\'imageMetadata\').height }}">\n')),(0,i.kt)("h2",{id:"setting-metadata"},"Setting Metadata"),(0,i.kt)("p",null,"Metadata objects can provide methods that can be used to set the metadata value.\nFor example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"FileMetadataInterface")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"setName()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"setType()"),", the\n",(0,i.kt)("inlineCode",{parentName:"p"},"HttpMetadataInterface")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"setDisposition()"),", etc. After setting the metadata\nusing these methods, the caller must call ",(0,i.kt)("inlineCode",{parentName:"p"},"flush()")," to persist the changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\FileInterface;\nuse Rekalogika\\Contracts\\File\\Metadata\\HttpMetadataInterface;\n\n/** @var FileInterface $file */\n\n// Each of the following will be flush automatically individually, and will\n// require two roundtrips to the storage backend\n$file->setType('image/jpeg');\n$file->setName('foo.jpg');\n\n// The following needs an explicit flush(). It will only require one roundtrip\n// to the storage backend.\n$file->get(FileMetadataInterface::class)?->setType('image/jpeg'); \n$file->get(FileMetadataInterface::class)?->setName('foo.jpg'); \n$file->flush();\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Local files don't persist metadata. Changes in the metadata are only valid for\nthe duration of the request. However, if the file is copied or moved to a\nnon-local filesystem, the metadata will be copied and persisted by the\ndestination file.")),(0,i.kt)("h2",{id:"low-level-metadata-handling"},"Low-Level Metadata Handling"),(0,i.kt)("p",null,"In a non local filesystem, the library stores a file's metadata in a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sidecar_file"},"sidecar\nfile")," in the JSON format. If the\nfile key is ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/bar.txt"),", the metadata file key will be\n",(0,i.kt)("inlineCode",{parentName:"p"},"foo/bar.txt.metadata"),"."),(0,i.kt)("p",null,"Rationale:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports all filesystem."),(0,i.kt)("li",{parentName:"ul"},"Uniform way of handling metadata with all filesystem."),(0,i.kt)("li",{parentName:"ul"},"Simpler administration. i.e. when copying between different filesystems."),(0,i.kt)("li",{parentName:"ul"},"Implements coarse-grained ",(0,i.kt)("a",{parentName:"li",href:"https://martinfowler.com/eaaCatalog/remoteFacade.html"},"remote fa\xe7ade pattern")," to improve performance with remote filesystems.")),(0,i.kt)("p",null,"With the local filesystem, the library provides the same interface as above, but\ndoes not save the metadata to a sidecar file. Instead, the metadata is\ndetermined from the file and stored in an in-memory cache. Any changes to the\nmetadata are not persisted and only valid in the current request, but will be\nconsidered if the caller copies or moves the file to a non-local filesystem."),(0,i.kt)("p",null,"The caller is expected to treat files in the local filesystem as transient\nobjects, and expected to copy or move the files to a non-local filesystem if\nthey wish to store the file."))}p.isMDXComponent=!0}}]);
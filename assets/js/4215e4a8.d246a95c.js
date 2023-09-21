"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=i,d=c["".concat(s,".").concat(m)]||c[m]||f[m]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={title:"Introduction"},o=void 0,l={unversionedId:"file/intro",id:"file/intro",title:"Introduction",description:"High-level file abstraction library built on top of Flysystem. It lets you work",source:"@site/docs/file/00-intro.md",sourceDirName:"file",slug:"/file/intro",permalink:"/file/intro",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/docs/file/00-intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"rekalogika/file",permalink:"/file/"},next:{title:"Installation & Configuration",permalink:"/file/installation"}},s={},u=[{value:"Features",id:"features",level:2},{value:"General Features",id:"general-features",level:3},{value:"Entity Association Features",id:"entity-association-features",level:3},{value:"Interoperability Features",id:"interoperability-features",level:3},{value:"License",id:"license",level:2},{value:"Contributing",id:"contributing",level:2}],p={toc:u},c="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"High-level file abstraction library built on top of Flysystem. It lets you work\nwith file objects in an object-oriented way. A file object represents a file in\na Flysystem filesystem. It can be a local file or a file in a cloud storage, the\nlibrary lets you work with them in the same way."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("h3",{id:"general-features"},"General Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rich, high-level abstraction of files built on top of Flysystem."),(0,i.kt)("li",{parentName:"ul"},"Abstractions for file name and media type (MIME type)."),(0,i.kt)("li",{parentName:"ul"},"Caches and stores metadata in a sidecar file. Uniform metadata support across\nall filesystems."),(0,i.kt)("li",{parentName:"ul"},"Uses the repository pattern for files."),(0,i.kt)("li",{parentName:"ul"},"Remote fa\xe7ade pattern in accessing metadata, improves performance with remote\nfilesystems. Two metadata queries require only one round trip."),(0,i.kt)("li",{parentName:"ul"},"Rich metadata support."),(0,i.kt)("li",{parentName:"ul"},"Separated contracts and implementation. Useful for enforcing architectural\nboundaries. Your domain models doesn't have to depend on the framework.")),(0,i.kt)("h3",{id:"entity-association-features"},"Entity Association Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requires only a single property in the entity for each associated file."),(0,i.kt)("li",{parentName:"ul"},"File properties are file properties. It is not necessary to store any of the\nfile's properties in the entity associated with the file."),(0,i.kt)("li",{parentName:"ul"},"DX improvement, less micro-management of entity-file relations."),(0,i.kt)("li",{parentName:"ul"},"Reads and writes directly into the file properties, even if private. You are\nfree to have business logic in the getters and setters."),(0,i.kt)("li",{parentName:"ul"},"Doesn't require you to update another property of the entity (",(0,i.kt)("inlineCode",{parentName:"li"},"lastUpdated"),")\njust to make sure the correct Doctrine events will be fired.")),(0,i.kt)("h3",{id:"interoperability-features"},"Interoperability Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adapters for Symfony HttpFoundation, Form, and Validator."),(0,i.kt)("li",{parentName:"ul"},"Adapter for OneupUploaderBundle.")),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"MIT"),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"This framework consists of multiple repositories splitted from a monorepo. Be\nsure to submit issues and pull request to the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rekalogika/file-src"},"rekalogika/file-src")," monorepo."))}f.isMDXComponent=!0}}]);
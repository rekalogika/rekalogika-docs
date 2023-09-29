"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={title:"Object ID Resolver"},a=void 0,l={unversionedId:"file-bundle/object-id-resolver",id:"file-bundle/object-id-resolver",title:"Object ID Resolver",description:"An object ID resolver takes an object and returns its ID. The framework uses an",source:"@site/docs/file-bundle/23-object-id-resolver.md",sourceDirName:"file-bundle",slug:"/file-bundle/object-id-resolver",permalink:"/file-bundle/object-id-resolver",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file-bundle/23-object-id-resolver.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"Object ID Resolver"},sidebar:"docs",previous:{title:"Creating Filters",permalink:"/file-bundle/creating-filters"},next:{title:"Marking Entities using Interface",permalink:"/file-bundle/file-association-interface"}},s={},c=[{value:"If Your Entity Simply Uses a Different Method",id:"if-your-entity-simply-uses-a-different-method",level:2},{value:"If It Is More Complicated Than That",id:"if-it-is-more-complicated-than-that",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An object ID resolver takes an object and returns its ID. The framework uses an\nobject ID resolver as one of the parameters used to determine where to store the\nfile."),(0,o.kt)("p",null,"The default object ID resolver assumes that the ID of your entity is returned by\nthe method ",(0,o.kt)("inlineCode",{parentName:"p"},"getId()"),". If your entity uses a different mechanism, you need to\ncreate your own implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectIdResolverInterface"),"."),(0,o.kt)("admonition",{title:"Protip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can have multiple implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectIdResolverInterface")," in your\napplication. The framework will use the first one that returns a value.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you have a custom implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectIdResolverInterface"),", the default\nimplementation is still active but has a lower priority than your custom\nimplementation.")),(0,o.kt)("h2",{id:"if-your-entity-simply-uses-a-different-method"},"If Your Entity Simply Uses a Different Method"),(0,o.kt)("p",null,"If your entity simply uses a different method name, you can reuse the default\nimplementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectIdResolverInterface"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=config/services.yaml",title:"config/services.yaml"},"services:\n    app.object_id_resolver:\n        class: 'Rekalogika\\File\\Association\\ObjectIdResolver\\DefaultObjectIdResolver'\n        args:\n            - 'getIdentifier' # put the method name here\n        tags:\n            - { name: 'rekalogika.file.association.object_id_resolver' }\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"DefaultObjectIdResolver")," can handle return types of ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),", and\n",(0,o.kt)("inlineCode",{parentName:"p"},"Stringable"),".")),(0,o.kt)("h2",{id:"if-it-is-more-complicated-than-that"},"If It Is More Complicated Than That"),(0,o.kt)("p",null,"Then you need to create your own implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectIdResolverInterface"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\Association\\ObjectIdResolverInterface;\n\nclass MyObjectIdResolver implements ObjectIdResolverInterface\n{\n    public function getObjectId(object $object): string\n    {\n        // your implementation here\n    }\n}\n")),(0,o.kt)("p",null,"If you are using autoconfiguration, then it is all set. If not, you need to\nregister your class in the service container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=config/services.yaml",title:"config/services.yaml"},"services:\n    App\\MyObjectIdResolver:\n        tags:\n            - { name: 'rekalogika.file.association.object_id_resolver' }\n")))}m.isMDXComponent=!0}}]);
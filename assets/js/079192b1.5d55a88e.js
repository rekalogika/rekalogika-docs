"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=r,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={title:"Marking Entities using Interface"},o=void 0,s={unversionedId:"file-bundle/file-association-interface",id:"file-bundle/file-association-interface",title:"Marking Entities using Interface",description:"As an alternative to using attributes to mark your entities, you can also have",source:"@site/docs/file-bundle/24-file-association-interface.md",sourceDirName:"file-bundle",slug:"/file-bundle/file-association-interface",permalink:"/file-bundle/file-association-interface",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file-bundle/24-file-association-interface.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"Marking Entities using Interface"},sidebar:"docs",previous:{title:"Creating an Object ID Resolver",permalink:"/file-bundle/object-id-resolver"},next:{title:"rekalogika/psr-16-simple-cache-bundle",permalink:"/psr-16-simple-cache-bundle/"}},l={},c=[],u={toc:c},f="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As an alternative to using attributes to mark your entities, you can also have\nyour entities implement ",(0,r.kt)("inlineCode",{parentName:"p"},"FileAssociationInterface"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using attributes instead of implementing the interface as\ndescribed in ",(0,r.kt)("a",{parentName:"p",href:"/file-bundle/doctrine-entity"},"Associating Files with Doctrine Entities"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\FileInterface;\nuse Rekalogika\\Contracts\\File\\Association\\FileAssociationInterface;\n\nclass Product implements FileAssociationInterface\n{\n    /**\n     * The file properties must accept FileInterface\n     */\n    private ?FileInterface $image = null;\n\n    /**\n     * This method gives the list of properties of this class that will\n     * be managed by this framework. In this case it tells us that the\n     * property 'image' is a file property we need to manage.\n     */\n    public static function getFileAssociationPropertyList(): array\n    {\n        return ['image'];\n    }\n\n    /**\n     * The framework needs the ID of the entity. By default, it will call getId()\n     * of the object to get the ID.\n     */\n    public function getId(): string\n    {\n        return $this->id;\n    }\n\n    //\n    // The rest of this class is inconsequential to the framework\n    //\n\n    /**\n     * This framework reads and writes directly to the properties, even if\n     * private. Therefore, you are free to have your own business logic in the\n     * getters and setters.\n     */\n    public function getImage(): FileInterface\n    {\n        if (date('m-d') == '04-01') { // if today is april 1st\n            return new File('shock-image.jpg'); // april fools!\n        }\n\n        return $this->image;\n    }\n\n    public function setImage(?FileInterface $image): self\n    {\n        if ($this->status == 'published') {\n            throw new \\Exception(\"Cannot change a published product's image\");\n        }\n\n        $this->image = $image;\n\n        return $this;\n    }\n}\n")))}p.isMDXComponent=!0}}]);
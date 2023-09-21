"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(r),u=n,d=f["".concat(s,".").concat(u)]||f[u]||m[u]||a;return r?i.createElement(d,l(l({ref:t},c),{},{components:r})):i.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={title:"Filtering"},l=void 0,o={unversionedId:"file/filtering",id:"file/filtering",title:"Filtering",description:"In this framework, 'filtering' is the opportunistic creation & caching of",source:"@site/docs/file/10-filtering.md",sourceDirName:"file",slug:"/file/filtering",permalink:"/file/filtering",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/docs/file/10-filtering.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Filtering"},sidebar:"docs",previous:{title:"Lazy-Loading Files",permalink:"/file/lazy-loading"},next:{title:"Metadata",permalink:"/file/metadata"}},s={},p=[{value:"<code>ImageResizer</code>",id:"imageresizer",level:2},{value:"PHP Usage",id:"php-usage",level:3},{value:"Twig Usage",id:"twig-usage",level:3}],c={toc:p},f="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this framework, 'filtering' is the opportunistic creation & caching of\nderived files from a source file. If a filter is applied to a ",(0,n.kt)("inlineCode",{parentName:"p"},"FileInterface"),",\none of these things happens:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If the derived file does not exist, process the source and create the\nderived file, then save it."),(0,n.kt)("li",{parentName:"ol"},"If the derived file exists and newer than the source file, return the\nalready made derived file."),(0,n.kt)("li",{parentName:"ol"},"If the derived file exists and older than the source file, then it is stale,\nthe filter will create a derivation out of the source file, then overwrite\nthe old derived file.")),(0,n.kt)("p",null,"Currently, there is only one filter available, ",(0,n.kt)("inlineCode",{parentName:"p"},"ImageResizer"),"."),(0,n.kt)("h2",{id:"imageresizer"},(0,n.kt)("inlineCode",{parentName:"h2"},"ImageResizer")),(0,n.kt)("admonition",{title:"Preparation",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You need to install the package ",(0,n.kt)("inlineCode",{parentName:"p"},"rekalogika/file-image")," to use this feature:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composer require rekalogika/file-image\n"))),(0,n.kt)("h3",{id:"php-usage"},"PHP Usage"),(0,n.kt)("p",null,"In PHP files, you need to inject the ",(0,n.kt)("inlineCode",{parentName:"p"},"ImageResizer")," class to your service\nor controller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\File\\Image\\ImageResizer;\nuse Rekalogika\\Contracts\\File\\FileInterface;\n\n/** @var ImageResizer $imageResizer */\n/** @var FileInterface $image */\n\n$resizedImage = $imageResizer\n    ->take($image)\n    ->resize(100, ImageResizer::ASPECRATIO_SQUARE)\n    ->getResult();\n")),(0,n.kt)("p",null,"The first time it is called, the filter will create a 100-pixel-square-cropped\nimage from the original image. The second time it is called, the filter will\nreturn the already created derived image."),(0,n.kt)("p",null,"If the original image is updated, the filter will create a new derived image and\noverwrite the old one."),(0,n.kt)("h3",{id:"twig-usage"},"Twig Usage"),(0,n.kt)("p",null,"In Twig templates, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"image_resize")," filter. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-twig"},"<img src=\"{{ image_file|image_resize(100, 'square')|temporary_url }}\" />\n")),(0,n.kt)("p",null,"The example above will give us a temporary URL to a square-cropped image with a\nmaximum width or height of 100 pixels out of the original image\n",(0,n.kt)("inlineCode",{parentName:"p"},"image_file"),"."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[529],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(i),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return i?r.createElement(m,l(l({ref:t},c),{},{components:i})):r.createElement(m,l({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<a;p++)l[p]=i[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},1707:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=i(7462),n=(i(7294),i(3905));const a={title:"Filtering"},l=void 0,o={unversionedId:"file-bundle/filtering",id:"file-bundle/filtering",title:"Filtering",description:"In this framework, 'filtering' is the opportunistic creation & caching of",source:"@site/docs/file-bundle/06-filtering.md",sourceDirName:"file-bundle",slug:"/file-bundle/filtering",permalink:"/file-bundle/filtering",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file-bundle/06-filtering.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Filtering"},sidebar:"docs",previous:{title:"Serving Files",permalink:"/file-bundle/serving-files"},next:{title:"File Association Internal Details",permalink:"/file-bundle/entity-association-internal"}},s={},p=[{value:"<code>ImageResizer</code>",id:"imageresizer",level:2},{value:"PHP Usage",id:"php-usage",level:3},{value:"Twig Usage",id:"twig-usage",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this framework, 'filtering' is the opportunistic creation & caching of\nderived files from a source file. If a filter is applied to a ",(0,n.kt)("inlineCode",{parentName:"p"},"FileInterface"),",\none of these things happens:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If the derived file does not exist, process the source and create the\nderived file, then save it."),(0,n.kt)("li",{parentName:"ol"},"If the derived file exists and newer than the source file, return the\nalready made derived file."),(0,n.kt)("li",{parentName:"ol"},"If the derived file exists and older than the source file, then it is stale,\nthe filter will create a derivation out of the source file, then overwrite\nthe old derived file.")),(0,n.kt)("p",null,"Currently, there is only one filter available, ",(0,n.kt)("inlineCode",{parentName:"p"},"ImageResizer"),"."),(0,n.kt)("h2",{id:"imageresizer"},(0,n.kt)("inlineCode",{parentName:"h2"},"ImageResizer")),(0,n.kt)("admonition",{title:"Preparation",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You need to install the package ",(0,n.kt)("inlineCode",{parentName:"p"},"rekalogika/file-image")," to use this feature:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composer require rekalogika/file-image\n"))),(0,n.kt)("h3",{id:"php-usage"},"PHP Usage"),(0,n.kt)("p",null,"In PHP files, you need to inject the ",(0,n.kt)("inlineCode",{parentName:"p"},"ImageResizer")," class to your service\nor controller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\File\\Image\\ImageResizer;\nuse Rekalogika\\Contracts\\File\\FileInterface;\n\n/** @var ImageResizer $imageResizer */\n/** @var FileInterface $image */\n\n$resizedImage = $imageResizer\n    ->take($image)\n    ->resize(100, ImageResizer::ASPECRATIO_SQUARE)\n    ->getResult();\n")),(0,n.kt)("p",null,"The first time it is called, the filter will create a 100-pixel-square-cropped\nimage from the original image. The second time it is called, the filter will\nreturn the already created derived image."),(0,n.kt)("p",null,"If the original image is updated, the filter will create a new derived image and\noverwrite the old one."),(0,n.kt)("h3",{id:"twig-usage"},"Twig Usage"),(0,n.kt)("p",null,"In Twig templates, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"image_resize")," filter. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-twig"},"<img src=\"{{ image_file|image_resize(100, 'square')|temporary_url }}\" />\n")),(0,n.kt)("p",null,"The example above will give us a temporary URL to a square-cropped image with a\nmaximum width or height of 100 pixels from the original image\n",(0,n.kt)("inlineCode",{parentName:"p"},"image_file"),"."))}d.isMDXComponent=!0}}]);
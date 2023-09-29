"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||f[m]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"Translation"},i=void 0,o={unversionedId:"file-bundle/translation",id:"file-bundle/translation",title:"Translation",description:"This chapter explains localization support in the framework.",source:"@site/docs/file-bundle/07-translation.md",sourceDirName:"file-bundle",slug:"/file-bundle/translation",permalink:"/file-bundle/translation",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file-bundle/07-translation.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Translation"},sidebar:"docs",previous:{title:"Filtering",permalink:"/file-bundle/filtering"},next:{title:"Lazy-Loading Files",permalink:"/file-bundle/lazy-loading"}},s={},p=[{value:"Translatable Strings",id:"translatable-strings",level:2},{value:"Translation",id:"translation",level:2},{value:"Using the Framework Without Translation",id:"using-the-framework-without-translation",level:2},{value:"Translating to Your Language",id:"translating-to-your-language",level:2}],u={toc:p},c="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter explains localization support in the framework."),(0,r.kt)("h2",{id:"translatable-strings"},"Translatable Strings"),(0,r.kt)("p",null,"Currently the framework supports localization in a few places:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"File names. For displaying 'Untitled' in the UI if the file name is null."),(0,r.kt)("li",{parentName:"ul"},"File type description. For displaying 'Unknown file type' if the file type is\nnot recognized.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\FileInterface;\n\n/** @var FileInterface $file */\n\n$name = $file->getName(); // this is translatable\n$baseFileName = $file->getName()->getBase(); // also translatable\n$fullFileName = $file->getName()->getFull(); // translatable, too\n$typeDescription = $file->getType()->getDescription(); // translatable as well\n")),(0,r.kt)("h2",{id:"translation"},"Translation"),(0,r.kt)("p",null,"The framework uses Symfony's translation contracts. To translate strings, you\nneed to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"TranslatorInterface")," service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\FileInterface; \nuse Symfony\\Contracts\\Translation\\TranslatorInterface;\n\n/** @var FileInterface $file */\n/** @var TranslatorInterface $translator */\n\n$fileName = $file->getName();\n$translatedFileName = $fileName->trans($translator);\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"File names are not translated. Only 'Untitled' and 'Unknown file type' are\ntranslated.")),(0,r.kt)("p",null,"In Twig:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-twig"},"{# 'file' is an instance of FileInterface #}\n\nThe file name is {{ file.name|trans }}\n")),(0,r.kt)("h2",{id:"using-the-framework-without-translation"},"Using the Framework Without Translation"),(0,r.kt)("p",null,"All the translatable strings also implement ",(0,r.kt)("inlineCode",{parentName:"p"},"Stringable"),". Therefore, if your\napplication does not use translations, you can simply cast to string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\File\\FileInterface;\n\n/** @var FileInterface $file */\n\n$fileNameInString = (string) $file->getName();\n")),(0,r.kt)("h2",{id:"translating-to-your-language"},"Translating to Your Language"),(0,r.kt)("p",null,"To add translations to your language, submit a pull request to the repository\nhere:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/rekalogika/file-src/tree/main/packages/file-bundle/translations"},"github.com/rekalogika/file-src/tree/main/packages/file-bundle/translations")),(0,r.kt)("p",null,"Use the English XLIFF as a template."))}f.isMDXComponent=!0}}]);
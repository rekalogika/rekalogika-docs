"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Miscellaneous"},o=void 0,s={unversionedId:"domain-event/misc",id:"domain-event/misc",title:"Miscellaneous",description:"Best Practices",source:"@site/docs/domain-event/02-misc.md",sourceDirName:"domain-event",slug:"/domain-event/misc",permalink:"/domain-event/misc",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/docs/domain-event/02-misc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Miscellaneous"},sidebar:"docs",previous:{title:"Basic Usage",permalink:"/domain-event/basic-usage"},next:{title:"rekalogika/file",permalink:"/file/"}},l={},c=[{value:"Best Practices",id:"best-practices",level:2},{value:"Caveats",id:"caveats",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("p",null,"This explains our best practices that others might find useful, but not strictly\nrequired."),(0,a.kt)("p",null,"Use UUIDs as identifiers & have the entities generate one for themselves on\ninstantiation. That means new entities already have an ID before ",(0,a.kt)("inlineCode",{parentName:"p"},"flush()")," and\nyou can store just the ID in our domain event objects, not the entire object. It\nwill make the event usable in all cases. It will also result in better logistics\nas you can easily pass the events anywhere without alteration."),(0,a.kt)("p",null,"Use pre-flush events to make alterations to your domain that will be\n",(0,a.kt)("inlineCode",{parentName:"p"},"flush()"),"-ed together along with the other changes."),(0,a.kt)("p",null,"Use post-flush for things that should occur only if the change is successful,\nlike notifications, etc."),(0,a.kt)("h2",{id:"caveats"},"Caveats"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Currently only supports ",(0,a.kt)("inlineCode",{parentName:"li"},"EntityManager"),". Support for other ",(0,a.kt)("inlineCode",{parentName:"li"},"ObjectManager"),"s\nis planned."),(0,a.kt)("li",{parentName:"ul"},"It is not aware of explicit transactions yet. You should dispatch the events\nmanually if you are using an explicit transaction as described above. In the\nfuture, we have plans to dispatch post-flush events after the outermost\n",(0,a.kt)("inlineCode",{parentName:"li"},"commit()"),", and dispatch pre-flush events before every ",(0,a.kt)("inlineCode",{parentName:"li"},"commit()"),"."),(0,a.kt)("li",{parentName:"ul"},"It is an inconvenience that Symfony Event Dispatcher does not currently\nsupport event inheritance. We cannot have a single listener for an entire\nclass of domain events, and for example, use it to implement the outbox\npattern. We plan to fix this in the future.")))}m.isMDXComponent=!0}}]);
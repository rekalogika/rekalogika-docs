"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[5042],{3119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(5893),r=n(1151);const o={title:"Rationale, or Why Create Another Mapper?"},i=void 0,s={id:"mapper/rationale",title:"Rationale, or Why Create Another Mapper?",description:"TLDR:",source:"@site/docs/mapper/22-rationale.md",sourceDirName:"mapper",slug:"/mapper/rationale",permalink:"/mapper/rationale",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/mapper/22-rationale.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"Rationale, or Why Create Another Mapper?"},sidebar:"docs",previous:{title:"Debugging the Mapper",permalink:"/mapper/debugging"},next:{title:"rekalogika/psr-16-simple-cache-bundle",permalink:"/psr-16-simple-cache-bundle/"}},p={},l=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"TLDR:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Needs to respect class constraints."}),"\n",(0,a.jsx)(t.li,{children:"Automatic mapping based on type information in the classes."}),"\n",(0,a.jsx)(t.li,{children:"Option to have a custom mapping logic."}),"\n",(0,a.jsx)(t.li,{children:"The custom mapping logic needs to have easy access to the main mapper."}),"\n",(0,a.jsx)(t.li,{children:"Helpful error messages."}),"\n",(0,a.jsx)(t.li,{children:"Easy to extend."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"The situation described there is valid at the time of writing, at the start of\n2024. The situation may have changed since then."})}),"\n",(0,a.jsx)(t.p,{children:"We developed a project that during its planning phase we determined that it\nwould be beneficial to integrate an automapper into the architecture. We looked\naround and found some potential automappers, and decided to go ahead with the\nplanned architecture."}),"\n",(0,a.jsxs)(t.p,{children:["We first tried\n",(0,a.jsx)(t.a,{href:"https://github.com/mark-gerarts/automapper-plus",children:"AutoMapper-Plus"})," and the first\nstumbling block is that it reads and writes directly to properties, including\nprivate properties, which is unacceptable to our purposes. For example, we store\nmonetary values as integers in the object, and convert them from and to ",(0,a.jsx)(t.code,{children:"Money"}),"\nobjects in the getter and setter. Using this mapper, it would get us the raw\nintegers, not the ",(0,a.jsx)(t.code,{children:"Money"})," objects. We feel it violates the principles of\nencapsulation, ",(0,a.jsx)(t.strong,{children:"we need a mapper that respects class constraints"}),". However,\nthis was not a blocker as it has the option to use a custom property accessor,\nand it was possible to resolve this issue by creating an adapter that uses\nSymfony PropertyAccess component."]}),"\n",(0,a.jsxs)(t.p,{children:["AutoMapper-Plus can automatically create mapping pairs on-the-fly. But it is\nlimited to simple mapping that does not involve conversion or nested objects. We\nneeded to create a mapping for every non-trivial pair, despite the type\ninformation is already there in the involved classes. If would be nice if the\nmapper ",(0,a.jsx)(t.strong,{children:"can recognize the type information and maps the variables\nautomatically"}),", at least most of the time."]}),"\n",(0,a.jsxs)(t.p,{children:["Sometimes, it is necessary to have a custom logic in the mapping, and the mapper\nneeds to accommodate that. With AutoMapper-Plus, it is possible to create a\ncustom mapper, but it is not immediately obvious from the interface how to\naccess the main mapper. It would be nice if we can easily ",(0,a.jsx)(t.strong,{children:"delegate mapping\ntasks to the main mapper"})," when we need to."]}),"\n",(0,a.jsxs)(t.p,{children:["Next, we tried ",(0,a.jsx)(t.a,{href:"https://github.com/jolicode/automapper",children:"Jolicode Automapper"}),",\nformerly known as ",(0,a.jsx)(t.a,{href:"https://github.com/janephp/automapper",children:"Jane Automapper"}),". It\nbehaved as expected, there were no big surprises, and there was very little to\ncomplain about its behavior. It is very fast as it compiles its mapping code to\nPHP files. The problem was error handling. When an error occurred in the\ncompiled mappers, it was usually a ",(0,a.jsx)(t.code,{children:"TypeError"})," that was difficult to debug, and\neven more difficult to resolve the problem. Addressing the problem requires the\nskill of working with AST. We found that the problems were usually deployment\nerrors (usually forgetting to clear the cache), some edge cases (easy to work\naround), or bugs in the mapper. It was rare to get an error, but when it\nhappened, it was difficult and time-consuming to resolve. We did contribute some\nfixes back to the project."]}),"\n",(0,a.jsxs)(t.p,{children:["We have come to the realization that automatic mapping has these inherent risks,\nand when that happens, the mapper should ",(0,a.jsx)(t.strong,{children:"give us a clear error message"}),",\nincluding in which mapping pairs the error occurred."]}),"\n",(0,a.jsx)(t.p,{children:"The second problem was that the mapper was difficult to extend. Adding a new\ntransformer requires the knowledge of working with AST, and there was no option\nto do a mapping using plain old PHP code that you write yourself, except for\nsome limited usage. We hit a brick wall when a new requirement surfaced that\nrequires the mapper to target an abstract class, a feature that was not\nsupported by the mapper. We figured it would be easier for us to spend a week\ncreating our own mapper from scratch using our experiences with the other\nmappers. Note: it now supports manual mapping using plain PHP."}),"\n",(0,a.jsx)(t.p,{children:"Other mappers that were considered:"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/SymfonyCasts/micro-mapper/",children:"MicroMapper"})," is a mapper that\nrequires you to write the mapping code yourself. It is all manual work, but\nstill working within the mapping framework, and should be suitable for our\npurpose, as long as we are willing to write the mapping code ourselves. It also\neasily lets us delegate the mapping of child properties to the main mapper."]}),"\n",(0,a.jsx)(t.p,{children:"We feel the MicroMapper model is not that much more work compared to creating a\ncustom mapping configuration in other mappers, especially with AI code\ngeneration. We only tried MicroMapper briefly; however, we were way past of\ncontemplating whether to do the mapping manually. If MicroMapper were available\nat the time we started the project, it would be our first choice."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/symfony/symfony/pull/51741",children:"Pull request for a future Symfony Mapper"}),".\nIn the form that I saw it, it was too simplistic, and does not provide any\nextension points. But it is currently the only open pull request about mapper\nin Symfony, so it is something to look forward to in the future."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(7294);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[9478],{6514:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(5893),i=t(1151);const s={title:"Manual Control"},o=void 0,r={id:"domain-event/manual-control",title:"Manual Control",description:"To manually manage domain events, you can use",source:"@site/docs/domain-event/06-manual-control.md",sourceDirName:"domain-event",slug:"/domain-event/manual-control",permalink:"/domain-event/manual-control",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/domain-event/06-manual-control.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Manual Control"},sidebar:"docs",previous:{title:"Transactions",permalink:"/domain-event/transaction"},next:{title:"Dispatch Events",permalink:"/domain-event/dispatch-events"}},c={},l=[{value:"Manual Dispatching",id:"manual-dispatching",level:2},{value:"Clearing the Events",id:"clearing-the-events",level:2},{value:"Getting the Events From the Queue and Dispatching Them Elsewhere",id:"getting-the-events-from-the-queue-and-dispatching-them-elsewhere",level:2},{value:"Multiple Entity Managers",id:"multiple-entity-managers",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["To manually manage domain events, you can use\n",(0,a.jsx)(n.code,{children:"DomainEventAwareEntityManagerInterface"})," in place of the regular\n",(0,a.jsx)(n.code,{children:"EntityManagerInterface"}),". It adds several methods to the Entity Manager that you\ncan use to manage domain event dispatching."]}),"\n",(0,a.jsx)(n.h2,{id:"manual-dispatching",children:"Manual Dispatching"}),"\n",(0,a.jsxs)(n.p,{children:["You can disable automatic dispatching on ",(0,a.jsx)(n.code,{children:"flush()"})," by calling\n",(0,a.jsx)(n.code,{children:"setAutoDispatchDomainEvents(false)"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\DomainEvent\\DomainEventAwareEntityManagerInterface;\n\n/** @var DomainEventAwareEntityManagerInterface $entityManager */\n\n$entityManager->setAutoDispatchDomainEvents(false);\n\n// ...\n\n$entityManager->dispatchPreFlushDomainEvents();\n$entityManager->flush();\n$entityManager->dispatchPostFlushDomainEvents();\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Immediate dispatching is dispatched outside ",(0,a.jsx)(n.code,{children:"DomainEventAwareEntityManager"}),", and\ntherefore unaffected by ",(0,a.jsx)(n.code,{children:"setAutoDispatchDomainEvents()"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"clearing-the-events",children:"Clearing the Events"}),"\n",(0,a.jsxs)(n.p,{children:["If the domain event queues are not empty at the end of the request,\n",(0,a.jsx)(n.code,{children:"DomainEventEntityManager"})," will throw ",(0,a.jsx)(n.code,{children:"UndispatchedEventsException"}),". To prevent\nthat from happening, if you disable auto-dispatch, you need to make sure that\nyou dispatch both pre-flush and post-flush events as above. Alternatively, you\ncan clear the events if you don't want them dispatched:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\DomainEvent\\DomainEventAwareEntityManagerInterface;\n\n/** @var DomainEventAwareEntityManagerInterface $entityManager */\n\n$entityManager->setAutoDispatchDomainEvents(false);\n\n// ...\n\n$entityManager->flush();\n$entityManager->clearDomainEvents();\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["In the event of an uncaught error, the framework will automatically\nclear undispatched events using the ",(0,a.jsx)(n.code,{children:"kernel.exception"})," and ",(0,a.jsx)(n.code,{children:"console.error"}),"\nevents, so in such cases, you don't have to handle that manually. But if you\ncatch an exception that previously caused pending events not to be dispatched,\nyou need to manually clear the events."]})}),"\n",(0,a.jsx)(n.h2,{id:"getting-the-events-from-the-queue-and-dispatching-them-elsewhere",children:"Getting the Events From the Queue and Dispatching Them Elsewhere"}),"\n",(0,a.jsxs)(n.p,{children:["You can get the undispatched events in the queue by calling ",(0,a.jsx)(n.code,{children:"popDomainEvents()"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\DomainEvent\\DomainEventAwareEntityManagerInterface;\n\n/** @var DomainEventAwareEntityManagerInterface $entityManager */\n\n$events = $entityManager->popDomainEvents();\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["As it suggests, ",(0,a.jsx)(n.code,{children:"popDomainEvents()"})," also removes the events from the queue."]})}),"\n",(0,a.jsx)(n.p,{children:"Then, you can dispatch them in another place, for example, in another process,\nor at the end of a batch process."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\DomainEvent\\DomainEventAwareEntityManagerInterface;\n\n/** @var DomainEventAwareEntityManagerInterface $entityManager */\n\n// highlight-next-line\n$entityManager->recordDomainEvent($events);\n\n$entityManager->dispatchPreFlushDomainEvents();\n$entityManager->flush();\n$entityManager->dispatchPostFlushDomainEvents();\n"})}),"\n",(0,a.jsx)(n.h2,{id:"multiple-entity-managers",children:"Multiple Entity Managers"}),"\n",(0,a.jsxs)(n.p,{children:["When working with multiple entity managers, usually the ",(0,a.jsx)(n.code,{children:"ManagerRegistry"})," is\nused to get the correct entity manager. This method still works with domain\nevents without any change."]}),"\n",(0,a.jsxs)(n.p,{children:["However, if you need the domain-event-specific methods, you can use\n",(0,a.jsx)(n.code,{children:"DomainEventAwareManagerRegistry"})," in place of ",(0,a.jsx)(n.code,{children:"ManagerRegistry"}),". It adds several\nmethods to the registry that you can use to manage domain event dispatching:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"getDomainEventAwareManager()"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"getDomainEventAwareManagers()"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"getDomainEventAwareManagerForClass()"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["These are basically the same as their counterparts in ",(0,a.jsx)(n.code,{children:"ManagerRegistry"}),", only\nreturn ",(0,a.jsx)(n.code,{children:"DomainEventAwareObjectManager"})," instead of ",(0,a.jsx)(n.code,{children:"ObjectManager"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(7294);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
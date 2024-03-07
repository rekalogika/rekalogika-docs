"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[790],{225:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var i=t(5893),s=t(1151);const a={title:"Dispatch Events"},o=void 0,d={id:"domain-event/dispatch-events",title:"Dispatch Events",description:"When a domain event is dispatched, another event is dispatched. The event wraps",source:"@site/docs/domain-event/05-dispatch-events.md",sourceDirName:"domain-event",slug:"/domain-event/dispatch-events",permalink:"/domain-event/dispatch-events",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/domain-event/05-dispatch-events.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Dispatch Events"},sidebar:"docs",previous:{title:"Manual Control",permalink:"/domain-event/manual-control"},next:{title:"Testing",permalink:"/domain-event/testing"}},c={},h=[{value:"List of the Dispatch Events",id:"list-of-the-dispatch-events",level:2},{value:"Listening to the Dispatch Events",id:"listening-to-the-dispatch-events",level:2},{value:"Purpose",id:"purpose",level:2}];function r(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"When a domain event is dispatched, another event is dispatched. The event wraps\nthe original domain event, allowing you to listen to all domain events in a\nsingle listener."}),"\n",(0,i.jsx)(n.p,{children:"These events are dispatched using the default Symfony event dispatcher."}),"\n",(0,i.jsx)(n.h2,{id:"list-of-the-dispatch-events",children:"List of the Dispatch Events"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DomainEventImmediateDispatchEvent"}),": dispatched immediately after the domain\nevent is recorded."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DomainEventPreFlushDispatchEvent"}),": dispatched before the ",(0,i.jsx)(n.code,{children:"flush()"})," is called."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DomainEventPostFlushDispatchEvent"}),": dispatched after the ",(0,i.jsx)(n.code,{children:"flush()"})," is called."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DomainEventPreFlushDispatchEvent"})," and ",(0,i.jsx)(n.code,{children:"DomainEventPostFlushDispatchEvent"})," also\nincludes the ",(0,i.jsx)(n.code,{children:"ObjectManager"})," (",(0,i.jsx)(n.code,{children:"EntityManager"}),") instance that manages the object\nthat emitted the domain event."]})}),"\n",(0,i.jsx)(n.h2,{id:"listening-to-the-dispatch-events",children:"Listening to the Dispatch Events"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"use Symfony\\Component\\EventDispatcher\\Attribute\\AsEventListener;\n\n#[AsEventListener]\nclass PreFlushDispatchEventListener\n{\n    public function __invoke(DomainEventPreFlushDispatchEvent $event) {\n        // log the $event, publish the $event on an event bus, etc\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,i.jsx)(n.p,{children:"This mechanism is created to allow you to build on top of the domain events. For\nexample, you can record the events for audit trails, or publish the events on an\nevent bus."})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var i=t(7294);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
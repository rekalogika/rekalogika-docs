"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[4604],{6042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(5893),i=t(1151);const o={title:"Equatable Domain Events"},s=void 0,c={id:"domain-event/equatable",title:"Equatable Domain Events",description:"A domain event can optionally implement EquatableDomainEventInterface which",source:"@site/docs/domain-event/02-equatable.md",sourceDirName:"domain-event",slug:"/domain-event/equatable",permalink:"/domain-event/equatable",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/domain-event/02-equatable.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Equatable Domain Events"},sidebar:"docs",previous:{title:"Basic Usage",permalink:"/domain-event/basic-usage"},next:{title:"Transactions",permalink:"/domain-event/transaction"}},r={},d=[];function l(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["A domain event can optionally implement ",(0,a.jsx)(n.code,{children:"EquatableDomainEventInterface"})," which\nrequires the method ",(0,a.jsx)(n.code,{children:"getSignature()"}),". Two objects with the same signature will\nbe considered identical and won't be dispatched twice."]}),"\n",(0,a.jsxs)(n.p,{children:["This is useful if your entity is working with a million of related objects. By\nimplementing ",(0,a.jsx)(n.code,{children:"EquatableDomainEventInterface"}),", you can have your ",(0,a.jsx)(n.code,{children:"ObjectChanged"}),"\nevent dispatched only once and occupy only a single spot in the memory,\ninstead of a million times."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\Contracts\\DomainEvent\\EquatableDomainEventInterface;\n\nclass PostCommentAdded implements EquatableDomainEventInterface\n{\n    public function __construct(private string $postId)\n    {\n    }\n\n    public function getSignature(): string\n    {\n        return sha1(serialize($this));\n    }\n}\n\nuse Rekalogika\\Contracts\\DomainEvent\\DomainEventEmitterInterface;\nuse Rekalogika\\Contracts\\DomainEvent\\DomainEventEmitterTrait;\n\nclass Post implements DomainEventEmitterInterface\n{\n    use DomainEventEmitterTrait;\n\n    // ...\n\n    public function addComment(string $comment): Comment\n    {\n        // ...\n\n        // the PostCommentAdded event will only get dispatched once despite of\n        // addComment being called multiple times.\n        $this->recordEvent(new PostCommentAdded($this->id));\n    }\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Equatable domain events only apply to pre-flush and post-flush events. Immediate\ndomain events are dispatched immediately, and there is no chance for the\nequatable check to take place."})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var a=t(7294);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
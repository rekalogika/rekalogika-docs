"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[522],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>v});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,v=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return t?i.createElement(v,r(r({ref:n},m),{},{components:t})):i.createElement(v,r({ref:n},m))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const o={title:"Basic Usage"},r=void 0,s={unversionedId:"domain-event/basic-usage",id:"domain-event/basic-usage",title:"Basic Usage",description:"Creating Domain Events",source:"@site/docs/domain-event/01-basic-usage.md",sourceDirName:"domain-event",slug:"/domain-event/basic-usage",permalink:"/domain-event/basic-usage",draft:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/domain-event/01-basic-usage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Basic Usage"},sidebar:"docs",previous:{title:"Introduction & Installation",permalink:"/domain-event/intro"},next:{title:"Manual Control",permalink:"/domain-event/manual-control"}},l={},c=[{value:"Creating Domain Events",id:"creating-domain-events",level:2},{value:"Recording Events",id:"recording-events",level:2},{value:"Listening to Events",id:"listening-to-events",level:2},{value:"Equatable Domain Events",id:"equatable-domain-events",level:2}],m={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-domain-events"},"Creating Domain Events"),(0,a.kt)("p",null,"Domain events are plain old PHP objects that you create to represent a specific\nevent happening in your domain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// our event superclass for the Post object\n\nabstract class AbstractPostEvent\n{\n    public function __construct(private string $id)\n    {\n    }\n\n    public function getId(): string\n    {\n        return $this->id;\n    }\n}\n\n// our concrete events\n\nfinal class PostCreated extends AbstractPostEvent\n{\n}\n\nfinal class PostChanged extends AbstractPostEvent\n{\n}\n\nfinal class PostRemoved extends AbstractPostEvent\n{\n}\n")),(0,a.kt)("h2",{id:"recording-events"},"Recording Events"),(0,a.kt)("p",null,"Your emitters (entities) must implement ",(0,a.kt)("inlineCode",{parentName:"p"},"DomainEventEmitterInterface"),".\nThere is a ",(0,a.kt)("inlineCode",{parentName:"p"},"DomainEventEmitterTrait")," to help you with that. To record events,\nyou can use the method ",(0,a.kt)("inlineCode",{parentName:"p"},"recordEvents()")," defined in the trait."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Doctrine\\Common\\Collections\\ArrayCollection;\nuse Doctrine\\Common\\Collections\\Collection;\nuse Rekalogika\\Contracts\\DomainEvent\\DomainEventEmitterInterface;\nuse Rekalogika\\Contracts\\DomainEvent\\DomainEventEmitterTrait;\nuse Symfony\\Component\\Uid\\UuidV7;\n\nclass Post implements DomainEventEmitterInterface\n{\n    use DomainEventEmitterTrait;\n\n    private string $id;\n    private string $title;\n    /** @var Collection<int,Comment> */\n    private Collection $comments;\n\n    public function __construct(string $title)\n    {\n        $this->id = new UuidV7();\n        $this->title = $title;\n        $this->comments = new ArrayCollection();\n\n        // highlight-next-line\n        $this->recordEvent(new PostCreated($this->id));\n    }\n\n    // __remove() is our special method that gets triggered when the entity is\n    // going to be removed from the persistence layer\n    public function __remove()\n    {\n        // highlight-next-line\n        $this->recordEvent(new PostRemoved($this->id));\n    }\n\n    public function setTitle(string $title): void\n    {\n        $this->title = $title;\n\n        // highlight-next-line\n        $this->recordEvent(new PostChanged($this->id));\n    }\n}\n")),(0,a.kt)("h2",{id:"listening-to-events"},"Listening to Events"),(0,a.kt)("p",null,"To listen to the events, you can use the usual Symfony way of listening to\nevents. The framework will collect events from persisted entities, and dispatch\nthem at the end of the ",(0,a.kt)("inlineCode",{parentName:"p"},"flush()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\EventDispatcher\\Attribute\\AsEventListener;\n\n#[AsEventListener]\nclass PostEventListener\n{\n    // this method will be invoked after a new Post is persist()-ed & flush()-ed\n    public function __invoke(PostCreated $event) {\n        $postId = $event->getId();\n        // ...\n    }\n}\n")),(0,a.kt)("p",null,"Alternatively, you can use different attributes to choose a different\ndispatching strategy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\DomainEvent\\Attribute\\AsImmediateDomainEventListener;\nuse Rekalogika\\Contracts\\DomainEvent\\Attribute\\AsPostFlushDomainEventListener;\nuse Rekalogika\\Contracts\\DomainEvent\\Attribute\\AsPreFlushDomainEventListener;\n\nclass PostEventListener\n{\n    #[AsImmediateDomainEventListener]\n    public function immediate(PostCreated $event) {\n        // this will run immediately after the entity records the event\n    }\n\n    #[AsPreFlushDomainEventListener]\n    public function preFlush(PostCreated $event) {\n        // this will run when you flush() the new post. before the actual\n        // flush()\n    }\n\n    #[AsPostFlushDomainEventListener]\n    public function postFlush(PostCreated $event) {\n        // this will run when you flush() the new post. after the actual\n        // flush()\n    }\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AsEventListener")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AsPostFlushDomainEventListener")," currently have\nidentical behavior, but they utilize different event dispatchers. We plan to\nhave a different event dispatcher behavior with\n",(0,a.kt)("inlineCode",{parentName:"li"},"AsPostFlushDomainEventListener")," while keeping ",(0,a.kt)("inlineCode",{parentName:"li"},"AsEventListener")," standard."),(0,a.kt)("li",{parentName:"ul"},"Doing a ",(0,a.kt)("inlineCode",{parentName:"li"},"flush()")," inside a pre-flush listener is not allowed and will result\nin a ",(0,a.kt)("inlineCode",{parentName:"li"},"FlushNotAllowedException"),"."))),(0,a.kt)("h2",{id:"equatable-domain-events"},"Equatable Domain Events"),(0,a.kt)("p",null,"A domain event can optionally implement ",(0,a.kt)("inlineCode",{parentName:"p"},"EquatableDomainEventInterface")," which\nrequires the method ",(0,a.kt)("inlineCode",{parentName:"p"},"getSignature()"),". Two objects with the same signature will\nbe considered identical by ",(0,a.kt)("inlineCode",{parentName:"p"},"DomainEventManager")," and won't be dispatched twice."),(0,a.kt)("p",null,"This is useful if your entity is working with a million of related objects. By\nimplementing ",(0,a.kt)("inlineCode",{parentName:"p"},"EquatableDomainEventInterface"),", you can have your ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectChanged"),"\nevent dispatched only once, and occupies only a single spot in the memory,\ninstead of a million times."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Rekalogika\\Contracts\\DomainEvent\\EquatableDomainEventInterface;\n\nclass PostCommentAdded implements EquatableDomainEventInterface\n{\n    public function __construct(private string $postId)\n    {\n    }\n\n    public function getSignature(): string\n    {\n        return sha1(serialize($this));\n    }\n}\n\nuse Rekalogika\\Contracts\\DomainEvent\\DomainEventEmitterInterface;\nuse Rekalogika\\Contracts\\DomainEvent\\DomainEventEmitterTrait;\n\nclass Post implements DomainEventEmitterInterface\n{\n    use DomainEventEmitterTrait;\n\n    // ...\n\n    public function addComment(string $comment): Comment\n    {\n        // ...\n\n        // the PostCommentAdded event will only get dispatched once despite of\n        // addComment being called multiple times.\n        $this->recordEvent(new PostCommentAdded($this->id));\n    }\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Equatable domain events only applies to pre-flush and post-flush events.\nImmediate domain events are dispatched immediately, and there is no chance for\nthe equatable check to take place.")))}d.isMDXComponent=!0}}]);
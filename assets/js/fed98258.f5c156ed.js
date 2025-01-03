"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[756],{2605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"domain-event/outbox-setup","title":"Outbox Installation & Configuration","description":"To use the transactional outbox pattern to publish your events on the event bus,","source":"@site/docs/domain-event/01-outbox-setup.md","sourceDirName":"domain-event","slug":"/domain-event/outbox-setup","permalink":"/domain-event/outbox-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/domain-event/01-outbox-setup.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Outbox Installation & Configuration"},"sidebar":"docs","previous":{"title":"Introduction & Installation","permalink":"/domain-event/intro"},"next":{"title":"Basic Usage","permalink":"/domain-event/basic-usage"}}');var o=t(4848),r=t(8453),s=t(1470),i=t(9365);const l={title:"Outbox Installation & Configuration"},u=void 0,c={},d=[{value:"Installation",id:"installation",level:2},{value:"Symfony Messenger Configuration",id:"symfony-messenger-configuration",level:2},{value:"Make Sure the Default <code>messenger.yaml</code> Has an Explicit Bus Configuration",id:"make-sure-the-default-messengeryaml-has-an-explicit-bus-configuration",level:2},{value:"Configure Your Domain Events Routing",id:"configure-your-domain-events-routing",level:2},{value:"Bundle Configuration",id:"bundle-configuration",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"To use the transactional outbox pattern to publish your events on the event bus,\nthere are additional steps you need to take."}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["These steps are optional, and only necessary if you want to use the\n",(0,o.jsx)(n.code,{children:"AsPublishedDomainEventListener"})," strategy."]})}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["Make sure Composer is installed globally, as explained in the\n",(0,o.jsx)(n.a,{href:"https://getcomposer.org/doc/00-intro.md",children:"installation chapter"}),"\nof the Composer documentation."]}),"\n",(0,o.jsxs)(s.A,{children:[(0,o.jsxs)(i.A,{value:"flex",label:"With Symfony Flex",children:[(0,o.jsx)(n.p,{children:"Open a command console, enter your project directory and execute:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"composer require rekalogika/domain-event-outbox\n"})})]}),(0,o.jsxs)(i.A,{value:"noflex",label:"Without Symfony Flex",children:[(0,o.jsx)(n.p,{children:"Step 1: Download the Bundle"}),(0,o.jsx)(n.p,{children:"Open a command console, enter your project directory, and execute the\nfollowing command to download the latest stable version of this bundle:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"composer require rekalogika/domain-event-outbox\n"})}),(0,o.jsx)(n.p,{children:"Step 2: Enable the Bundle"}),(0,o.jsxs)(n.p,{children:["Then, enable the bundle by adding it to the list of registered bundles\nin the ",(0,o.jsx)(n.code,{children:"config/bundles.php"})," file of your project:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",metastring:'title="config/bundles.php"',children:"return [\n    // ...\n    Rekalogika\\DomainEvent\\Outbox\\RekalogikaDomainEventOutboxBundle::class => ['all' => true],\n];\n"})})]})]}),"\n",(0,o.jsx)(n.h2,{id:"symfony-messenger-configuration",children:"Symfony Messenger Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["The package requires a Symfony Messenger bus named\n",(0,o.jsx)(n.code,{children:"rekalogika.domain_event.bus"}),". You can accomplish that by creating the\nconfiguration file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config/packages/rekalogika_domain_event_outbox.yaml"',children:"framework:\n    messenger:\n        buses:\n            rekalogika.domain_event.bus:\n                default_middleware:\n                    allow_no_handlers: true\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"make-sure-the-default-messengeryaml-has-an-explicit-bus-configuration",children:["Make Sure the Default ",(0,o.jsx)(n.code,{children:"messenger.yaml"})," Has an Explicit Bus Configuration"]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["The default Symfony Messenger configuration does not define ",(0,o.jsx)(n.code,{children:"buses"})," and\n",(0,o.jsx)(n.code,{children:"default_bus"}),". You need to make sure they are present in your configuration\nfile. Otherwise, our bus configuration above will silently become the default\nbus."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config/packages/messenger.yaml"',children:"# default messenger.yaml with explicit default bus\n\nframework:\n    messenger:\n        failure_transport: failed\n\n        transports:\n            # https://symfony.com/doc/current/messenger.html#transport-configuration\n            async:\n                dsn: '%env(MESSENGER_TRANSPORT_DSN)%'\n                options:\n                    use_notify: true\n                    check_delayed_interval: 60000\n                retry_strategy:\n                    max_retries: 3\n                    multiplier: 2\n            failed: 'doctrine://default?queue_name=failed'\n            # sync: 'sync://'\n\n        # highlight-start\n        ### You need to add this\n        ### START\n        default_bus: messenger.bus.default\n\n        buses:\n            messenger.bus.default: null\n        ### END\n        # highlight-end\n\n        routing:\n            Symfony\\Component\\Mailer\\Messenger\\SendEmailMessage: async\n            Symfony\\Component\\Notifier\\Message\\ChatMessage: async\n            Symfony\\Component\\Notifier\\Message\\SmsMessage: async\n\n            # Route your messages to the transports\n            # 'App\\Message\\YourMessage': async\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configure-your-domain-events-routing",children:"Configure Your Domain Events Routing"}),"\n",(0,o.jsx)(n.p,{children:"With this package, your domain events become the message classes of the Symfony\nMessenger. And like other Symfony Messenger messages, you may need to configure\nthe routing for your domain events. You can do that like the following."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config/packages/messenger.yaml"',children:"framework:\n    messenger:\n        # ...\n        routing:\n            # ...\n            'Rekalogika\\DomainEvent\\Outbox\\Message\\MessageRelayStartMessage': async\n            'App\\DomainEvent\\*': async\n"})}),"\n",(0,o.jsx)(n.h2,{id:"bundle-configuration",children:"Bundle Configuration"}),"\n",(0,o.jsx)(n.p,{children:"The bundle defines the following configuration option:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config/packages/rekalogika_domain_event_outbox.yaml"',children:"rekalogika_domain_event_outbox:\n    # The name of database table used to store the outgoing messages\n    outbox_table: rekalogika_event_outbox\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(4164);const o={tabItem:"tabItem_Ymn6"};var r=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(6540),o=t(4164),r=t(3104),s=t(6347),i=t(205),l=t(7485),u=t(1682),c=t(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=m(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=g({queryString:t,groupId:o}),[f,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,c.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),b=(()=>{const e=u??f;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),p(e)}),[d,p,r]),tabValues:r}}var p=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),o=i[t].value;o!==a&&(u(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...r,className:(0,o.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,y.jsx)(x,{...n,...e}),(0,y.jsx)(v,{...n,...e})]})}function j(e){const n=(0,p.A)();return(0,y.jsx)(k,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(6540);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
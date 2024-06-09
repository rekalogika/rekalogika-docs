"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[1669],{3704:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(5893),t=n(1151),l=n(4866),s=n(5162);const o={title:"rekalogika/temporary-url-bundle"},i=void 0,c={id:"temporary-url-bundle/index",title:"rekalogika/temporary-url-bundle",description:"Symfony bundle for creating temporary URLs to your resources. You provide the",source:"@site/docs/temporary-url-bundle/index.md",sourceDirName:"temporary-url-bundle",slug:"/temporary-url-bundle/",permalink:"/temporary-url-bundle/",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/temporary-url-bundle/index.md",tags:[],version:"current",frontMatter:{title:"rekalogika/temporary-url-bundle"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/rekapager/troubleshooting"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Creating a Resource Class",id:"creating-a-resource-class",level:2},{value:"Creating a Resource Server",id:"creating-a-resource-server",level:2},{value:"Generating a Temporary URL",id:"generating-a-temporary-url",level:2},{value:"In Twig Templates",id:"in-twig-templates",level:2},{value:"Dealing With Unserializable Resources",id:"dealing-with-unserializable-resources",level:2},{value:"License",id:"license",level:2},{value:"Contributing",id:"contributing",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Symfony bundle for creating temporary URLs to your resources. You provide the\nresource in a plain PHP object, and a service to turn it into a HTTP response.\nThe framework handles the rest."}),"\n",(0,a.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(r.p,{children:["Make sure Composer is installed globally, as explained in the\n",(0,a.jsx)(r.a,{href:"https://getcomposer.org/doc/00-intro.md",children:"installation chapter"}),"\nof the Composer documentation."]}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(s.Z,{value:"flex",label:"With Symfony Flex",children:[(0,a.jsx)(r.p,{children:"Open a command console, enter your project directory, and execute:"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"composer config extra.symfony.allow-contrib true\ncomposer require rekalogika/temporary-url-bundle\n"})})]}),(0,a.jsxs)(s.Z,{value:"noflex",label:"Without Symfony Flex",children:[(0,a.jsx)(r.p,{children:"Step 1: Download the Bundle"}),(0,a.jsx)(r.p,{children:"Open a command console, enter your project directory, and execute the\nfollowing command to download the latest stable version of this bundle:"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"composer require rekalogika/temporary-url-bundle\n"})}),(0,a.jsx)(r.p,{children:"Step 2: Enable the Bundle"}),(0,a.jsxs)(r.p,{children:["Then, enable the bundle by adding it to the list of registered bundles\nin the ",(0,a.jsx)(r.code,{children:"config/bundles.php"})," file of your project:"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-php",metastring:'title="config/bundles.php"',children:"return [\n    // ...\n    Rekalogika\\TemporaryUrl\\RekalogikaTemporaryUrlBundle::class => ['all' => true],\n];\n"})}),(0,a.jsx)(r.p,{children:"Step 3: Configure the route"}),(0,a.jsxs)(r.p,{children:["Add the route in ",(0,a.jsx)(r.code,{children:"config/routes/rekalogika_temporary_url.yaml"}),"."]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",metastring:'title="config/routes/rekalogika_temporary_url.yaml"',children:"rekalogika_temporary_url:\n    resource: '@RekalogikaTemporaryUrlBundle/config/routes.xml'\n    prefix: /_temporary\n"})}),(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsx)(r.p,{children:"You may change the prefix if you like."})}),(0,a.jsx)(r.p,{children:"Step 4: Add the Stimulus controller in the configuration"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",metastring:'title="assets/controllers.json"',children:'{\n    "controllers": {\n        "@rekalogika/temporary-url-bundle": {\n            "autoexpire": {\n                "enabled": true,\n                "fetch": "eager",\n                "autoimport": []\n            }\n        }\n    }\n}\n'})})]})]}),"\n",(0,a.jsx)(r.p,{children:"If you're using WebpackEncore, install your assets and restart Encore (not\nneeded if you're using AssetMapper):"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn install --force\nyarn watch\n"})})}),(0,a.jsx)(s.Z,{value:"npm",label:"NPM",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm install --force\nnpm run watch\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"creating-a-resource-class",children:"Creating a Resource Class"}),"\n",(0,a.jsx)(r.p,{children:"Create a class that describes your resource. There is no particular requirement\nfor this class, except that it must be serializable."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-php",children:"class MyData\n{\n    public function __construct(private string $name)\n    {\n    }\n\n    public function getName(): string\n    {\n        return $this->name;\n    }\n}\n"})}),"\n",(0,a.jsx)(r.admonition,{title:"Protip",type:"tip",children:(0,a.jsx)(r.p,{children:"You can reuse your existing event, message, DTO, value objects, or\nother similar classes for this purpose."})}),"\n",(0,a.jsx)(r.h2,{id:"creating-a-resource-server",children:"Creating a Resource Server"}),"\n",(0,a.jsxs)(r.p,{children:["Then create a server class or method that transforms the resource into an HTTP\nresponse. Use the ",(0,a.jsx)(r.code,{children:"AsTemporaryUrlServer"})," attribute to mark the method as a\ntemporary URL server. If the attribute is attached to the class, then the method\nis assumed to be ",(0,a.jsx)(r.code,{children:"__invoke()"}),". The method must accept the resource as its first\nargument, and return a ",(0,a.jsx)(r.code,{children:"Response"})," object."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-php",children:"use Rekalogika\\TemporaryUrl\\Attribute\\AsTemporaryUrlServer;\nuse Symfony\\Component\\HttpFoundation\\Response;\n\nclass MyDataServer\n{\n    #[AsTemporaryUrlServer]\n    public function respond(MyData $data): Response\n    {\n        return new Response('My name is ' . $data->getName());\n    }\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"generating-a-temporary-url",children:"Generating a Temporary URL"}),"\n",(0,a.jsxs)(r.p,{children:["To generate a temporary URL, use the ",(0,a.jsx)(r.code,{children:"TemporaryUrlGeneratorInterface"})," service."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-php",children:"use Rekalogika\\TemporaryUrl\\TemporaryUrlGeneratorInterface;\n\n/** @var TemporaryUrlGeneratorInterface $temporaryUrlGenerator */\n\n$resource = new MyData('123');\n$url = $temporaryUrlGenerator->generateUrl($resource);\n"})}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"TemporaryUrlGeneratorInterface::generateUrl()"})," offers additional options:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"$ttl"})," (",(0,a.jsx)(r.code,{children:"int"})," or ",(0,a.jsx)(r.code,{children:"DateInterval"}),"): The time-to-live of the URL. Defaults to 30\nminutes."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"$pinSession"})," (",(0,a.jsx)(r.code,{children:"bool"}),"): Whether to pin the URL to the session. Pinned URLs can\nonly be accessed by the same user that generated them. Defaults to ",(0,a.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"$referenceType"}),"  (",(0,a.jsx)(r.code,{children:"int"}),"): The type of reference to be generated (one of the\n",(0,a.jsx)(r.code,{children:"UrlGeneratorInterface::ABSOLUTE_*"})," constants). Defaults to\n",(0,a.jsx)(r.code,{children:"UrlGeneratorInterface::ABSOLUTE_PATH"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"in-twig-templates",children:"In Twig Templates"}),"\n",(0,a.jsxs)(r.p,{children:["In a Twig template, you can use the filter ",(0,a.jsx)(r.code,{children:"temporary_url"})," to generate a\ntemporary URL. Use the function ",(0,a.jsx)(r.code,{children:"temporary_url_autoexpire"})," on links to make them\nunclickable after the URL expires."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-twig",children:'{# my_data here is a resource object #}\n<a href="{{ my_data|temporary_url }}" {{ temporary_url_autoexpire() }}>\n    Click here to download my data\n</a>\n'})}),"\n",(0,a.jsxs)(r.p,{children:["The filter accepts the same options as the ",(0,a.jsx)(r.code,{children:"generateUrl()"})," method above."]}),"\n",(0,a.jsx)(r.h2,{id:"dealing-with-unserializable-resources",children:"Dealing With Unserializable Resources"}),"\n",(0,a.jsx)(r.p,{children:"If your resource is not serializable, you can create a resource transformer\nmethod that converts your resource into an intermediate serializable object."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-php",children:"use Rekalogika\\TemporaryUrl\\Attribute\\AsTemporaryUrlResourceTransformer;\nuse Rekalogika\\TemporaryUrl\\Attribute\\AsTemporaryUrlServer;\nuse Symfony\\Component\\HttpFoundation\\Response;\n\nclass MyDataServer\n{\n    /**\n     * This method transforms the resource into a serializable object.\n     */\n    #[AsTemporaryUrlResourceTransformer]\n    public function transform(MyUnserializableData $data): MySerializableData\n    {\n        return new MySerializableData($data);\n    }\n\n   ./**\n      * This uses the transformed data and send it to the client.\n      */\n    #[AsTemporaryUrlServer]\n    public function respond(MySerializableData $data): Response\n    {\n        return new Response('My name is ' . $data->getName());\n    }\n}\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Using the above example, you will be able to generate a temporary URL to\n",(0,a.jsx)(r.code,{children:"MyUnserializableData"}),". The framework will automatically transform\n",(0,a.jsx)(r.code,{children:"MyUnserializableData"})," to ",(0,a.jsx)(r.code,{children:"MySerializableData"})," behind the scenes."]}),"\n",(0,a.jsx)(r.h2,{id:"license",children:"License"}),"\n",(0,a.jsx)(r.p,{children:"MIT"}),"\n",(0,a.jsx)(r.h2,{id:"contributing",children:"Contributing"}),"\n",(0,a.jsxs)(r.p,{children:["Issues and pull requests should be filed in the GitHub repository\n",(0,a.jsx)(r.a,{href:"https://github.com/rekalogika/temporary-url-bundle",children:"rekalogika/temporary-url-bundle"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,r,n)=>{n.d(r,{Z:()=>s});n(7294);var a=n(6905);const t={tabItem:"tabItem_Ymn6"};var l=n(5893);function s(e){let{children:r,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,s),hidden:n,children:r})}},4866:(e,r,n)=>{n.d(r,{Z:()=>k});var a=n(7294),t=n(6905),l=n(2466),s=n(6550),o=n(469),i=n(1980),c=n(7392),u=n(812);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:a,default:t}}=e;return{value:r,label:n,attributes:a,default:t}}))}(n);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const t=(0,s.k6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(t.location.search);r.set(l,e),t.replace({...t.location,search:r.toString()})}),[l,t])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,l=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:l}))),[c,d]=m({queryString:n,groupId:t}),[b,g]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,l]=(0,u.Nk)(n);return[t,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),f=(()=>{const e=c??b;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(5893);function x(e){let{className:r,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const r=e.currentTarget,n=i.indexOf(r),t=o[n].value;t!==a&&(c(r),s(t))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,t.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":a===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function v(e){const r=b(e);return(0,y.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,y.jsx)(x,{...r,...e}),(0,y.jsx)(j,{...r,...e})]})}function k(e){const r=(0,g.Z)();return(0,y.jsx)(v,{...e,children:d(e.children)},String(r))}},1151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>s});var a=n(7294);const t={},l=a.createContext(t);function s(e){const r=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[2035],{5537:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(6540),r=n(4164),a=n(5627),s=n(6347),i=n(372),u=n(604),l=n(1861),c=n(8749);function p(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[s,u]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[l,p]=b({queryString:n,groupId:r}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),k=(()=>{const e=l??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{k&&u(k)}),[k]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),p(e),m(e)}),[p,m,a]),tabValues:a}}var m=n(9136);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function A(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==o&&(l(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>{u.push(e)},onKeyDown:p,onClick:c,...a,className:(0,r.A)("tabs__item",k.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",k.tabList),children:[(0,v.jsx)(A,{...t,...e}),(0,v.jsx)(g,{...t,...e})]})}function x(e){const t=(0,m.A)();return(0,v.jsx)(y,{...e,children:p(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(6540);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}},8843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>u,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"api-lite/basic-endpoints/post-without-input","title":"POST Endpoint for an Action Without Input","description":"","source":"@site/docs/api-lite/52-basic-endpoints/56-post-without-input.md","sourceDirName":"api-lite/52-basic-endpoints","slug":"/api-lite/basic-endpoints/post-without-input","permalink":"/api-lite/basic-endpoints/post-without-input","draft":false,"unlisted":false,"editUrl":"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/api-lite/52-basic-endpoints/56-post-without-input.md","tags":[],"version":"current","sidebarPosition":56,"frontMatter":{"title":"POST Endpoint for an Action Without Input"},"sidebar":"docs","previous":{"title":"DELETE Endpoint","permalink":"/api-lite/basic-endpoints/delete"},"next":{"title":"Use Cases: Subresource","permalink":"/api-lite/subresource/"}}');var r=n(4848),a=n(8453),s=n(5537),i=n(9329);const u={title:"POST Endpoint for an Action Without Input"},l=void 0,c={},p=[];function d(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(s.A,{queryString:"tab",groupId:"api",children:[(0,r.jsx)(i.A,{value:"apiresource",label:"API Resource",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:'title="src/ApiResource/Admin/BookDto.php"',children:"use ApiPlatform\\Metadata\\ApiResource;\nuse ApiPlatform\\Metadata\\Patch;\nuse ApiPlatform\\OpenApi\\Model\\Operation;\nuse ApiPlatform\\OpenApi\\Model\\RequestBody;\nuse App\\ApiInput\\BookInputDto;\nuse App\\ApiState\\Admin\\Book\\BookCheckProcessor;\n\n#[ApiResource(\n    shortName: 'Admin/Book',\n    routePrefix: '/admin',\n    operations: [\n        // ...\n        new Post(\n            uriTemplate: '/books/{id}/check',\n            processor: BookCheckProcessor::class,\n            input: false,\n            openapi: new Operation(\n                summary: 'Check the book\\'s condition',\n                description: 'Tells us that the book condition has been checked.',\n            )\n        ),\n        // ...\n    ]\n)]\nclass BookDto\n{\n    // ...\n}\n"})})}),(0,r.jsx)(i.A,{value:"stateprocessor",label:"State Processor",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:'title="src/ApiState/Admin/Book/BookCheckProcessor.php"',children:"namespace App\\ApiState\\Admin\\Book;\n\nuse ApiPlatform\\Metadata\\Operation;\nuse App\\ApiResource\\Admin\\BookDto;\nuse App\\Repository\\BookRepository;\nuse Doctrine\\ORM\\EntityManagerInterface;\nuse Rekalogika\\ApiLite\\Exception\\NotFoundException;\nuse Rekalogika\\ApiLite\\State\\AbstractProcessor;\n\n/**\n * @extends AbstractProcessor<void,BookDto>\n */\nclass BookCheckProcessor extends AbstractProcessor\n{\n    public function __construct(\n        private EntityManagerInterface $entityManager,\n        private BookRepository $bookRepository\n    ) {\n    }\n\n    public function process(\n        mixed $data,\n        Operation $operation,\n        array $uriVariables = [],\n        array $context = []\n    ) {\n        // Gets the book from the database\n        $book = $this->bookRepository\n            ->find($uriVariables['id'] ?? null)\n            ?? throw new NotFoundException('Book not found');\n\n        // Check for authorization\n        $this->denyAccessUnlessGranted('check', $book);\n\n        // Execute the action\n        $book->check();\n\n        // Flush any changes to the database\n        $this->entityManager->flush();\n\n        // Map the Book to the output DTO, and return it.\n        return $this->map($book, BookDto::class);\n    }\n}\n"})})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var o=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:n,children:t})}}}]);
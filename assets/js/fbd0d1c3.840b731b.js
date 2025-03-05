"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[4868],{3591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"api-lite/basic-endpoints/post-create","title":"POST Endpoint for Entity Creation","description":"","source":"@site/docs/api-lite/52-basic-endpoints/53-post-create.md","sourceDirName":"api-lite/52-basic-endpoints","slug":"/api-lite/basic-endpoints/post-create","permalink":"/api-lite/basic-endpoints/post-create","draft":false,"unlisted":false,"editUrl":"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/api-lite/52-basic-endpoints/53-post-create.md","tags":[],"version":"current","sidebarPosition":53,"frontMatter":{"title":"POST Endpoint for Entity Creation"},"sidebar":"docs","previous":{"title":"GET Endpoint","permalink":"/api-lite/basic-endpoints/get"},"next":{"title":"PATCH and PUT Endpoint for Entity Update","permalink":"/api-lite/basic-endpoints/patch-put-update"}}');var a=n(4848),o=n(8453),s=n(5537),i=n(9329);const u={title:"POST Endpoint for Entity Creation"},l=void 0,c={},p=[];function d(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(s.A,{queryString:"tab",groupId:"api",children:[(0,a.jsx)(i.A,{value:"apiresource",label:"API Resource",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",metastring:'title="src/ApiResource/Admin/BookDto.php"',children:"use ApiPlatform\\Metadata\\ApiResource;\nuse ApiPlatform\\Metadata\\Post;\nuse ApiPlatform\\Metadata\\Put;\nuse App\\ApiInput\\BookInputDto;\nuse App\\ApiState\\Admin\\Book\\BookCreateProcessor;\n\n#[ApiResource(\n    shortName: 'Admin/Book',\n    routePrefix: '/admin',\n    operations: [\n        // ...\n        new Post(\n            uriTemplate: '/books',\n            input: BookInputDto::class,\n            processor: BookCreateProcessor::class\n        ),\n        // ...\n    ]\n)]\nclass BookDto\n{\n    // ...\n}\n"})})}),(0,a.jsx)(i.A,{value:"inputdto",label:"Input DTO",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",metastring:'title="src/ApiInput/BookInputDto.php"',children:"namespace App\\ApiInput;\n\nclass BookInputDto\n{\n    public string $title;\n    public string $description;\n}\n"})})}),(0,a.jsx)(i.A,{value:"stateprocessor",label:"State Processor",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",metastring:'title="src/ApiState/Book/BookCreateProcessor.php"',children:"use ApiPlatform\\Metadata\\Operation;\nuse Doctrine\\ORM\\EntityManagerInterface;\nuse App\\ApiInput\\BookInputDto;\nuse App\\ApiResource\\BookDto;\nuse App\\Entity\\Book;\nuse App\\Repository\\BookRepository;\nuse Rekalogika\\ApiLite\\State\\AbstractProcessor;\n\n/**\n * @extends AbstractProcessor<BookInputDto,BookDto>\n */\nclass BookCreateProcessor extends AbstractProcessor\n{\n    public function __construct(\n        private EntityManagerInterface $entityManager,\n        private BookRepository $bookRepository\n    ) {\n    }\n\n    public function process(\n        mixed $data,\n        Operation $operation,\n        array $uriVariables = [],\n        array $context = []\n    ) {\n        // Check for authorization\n        $this->denyAccessUnlessGranted('add', $this->bookRepository);\n\n        // Map the input DTO to the Book entity. In more complex scenarios,\n        // using the mapper can be impractical, and you need to do it according\n        // to the requirement of your domain logic.\n        $book = $this->map($data, Book::class);\n\n        // Persist the entity and flush the changes\n        $this->entityManager->persist($book);\n        $this->entityManager->flush();\n\n        // Map the resulting Book to the output DTO, and return it.\n        return $this->map($book, BookDto::class);\n    }\n}\n\n"})})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5537:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(6540),a=n(4164),o=n(5627),s=n(6347),i=n(372),u=n(604),l=n(1861),c=n(8749);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,p]=b({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=l??f;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&u(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),p(e),m(e)}),[p,m,o]),tabValues:o}}var m=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==r&&(l(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{u.push(e)},onKeyDown:p,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function A(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=f(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,k.jsx)(v,{...t,...e}),(0,k.jsx)(A,{...t,...e})]})}function x(e){const t=(0,m.A)();return(0,k.jsx)(y,{...e,children:p(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}},9329:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}}}]);
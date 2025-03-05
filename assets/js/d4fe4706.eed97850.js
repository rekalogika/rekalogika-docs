"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[7457],{1197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api-lite/basic-endpoints/get","title":"GET Endpoint","description":"","source":"@site/docs/api-lite/52-basic-endpoints/52-get.md","sourceDirName":"api-lite/52-basic-endpoints","slug":"/api-lite/basic-endpoints/get","permalink":"/api-lite/basic-endpoints/get","draft":false,"unlisted":false,"editUrl":"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/api-lite/52-basic-endpoints/52-get.md","tags":[],"version":"current","sidebarPosition":52,"frontMatter":{"title":"GET Endpoint"},"sidebar":"docs","previous":{"title":"GET Collection Endpoint","permalink":"/api-lite/basic-endpoints/get-collection"},"next":{"title":"POST Endpoint for Entity Creation","permalink":"/api-lite/basic-endpoints/post-create"}}');var a=n(4848),o=n(8453),i=n(5537),s=n(9329);const l={title:"GET Endpoint"},u=void 0,c={},d=[];function p(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(i.A,{queryString:"tab",groupId:"api",children:[(0,a.jsx)(s.A,{value:"apiresource",label:"API Resource",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",metastring:'title="src/ApiResource/Admin/BookDto.php"',children:"namespace App\\ApiResource\\Admin;\n\nuse App\\ApiState\\Admin\\Book\\BookProvider;\nuse ApiPlatform\\Metadata\\ApiResource;\nuse ApiPlatform\\Metadata\\Get;\n\n#[ApiResource(\n    shortName: 'Admin/Book',\n    routePrefix: '/admin',\n    operations: [\n        // ...\n        new Get(\n            uriTemplate: '/books/{id}',\n            provider: BookProvider::class,\n        ),\n        // ...\n    ]\n)]\nclass BookDto\n{\n    // ...\n}\n"})})}),(0,a.jsx)(s.A,{value:"stateprovider",label:"State Provider",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",metastring:'title="src/ApiState/Admin/Book/BookProvider.php"',children:"namespace App\\ApiState\\Admin\\Book;\n\nuse ApiPlatform\\Metadata\\Operation;\nuse App\\ApiResource\\Admin\\BookDto;\nuse App\\Repository\\BookRepository;\nuse Rekalogika\\ApiLite\\Exception\\NotFoundException;\nuse Rekalogika\\ApiLite\\State\\AbstractProvider;\n\n/**\n * @extends AbstractProvider<BookDto>\n */\nclass BookProvider extends AbstractProvider\n{\n    public function __construct(\n        private BookRepository $bookRepository\n    ) {\n    }\n\n    public function provide(\n        Operation $operation,\n        array $uriVariables = [],\n        array $context = []\n    ): object|array|null {\n        // Get the book from the database\n        $book = $this->bookRepository\n            ->find($uriVariables['id'] ?? null)\n            ?? throw new NotFoundException('Book not found');\n\n        // Check for authorization\n        $this->denyAccessUnlessGranted('view', $book);\n\n        // Map the Book to the output DTO, and return it.\n        return $this->map($book, BookDto::class);\n    }\n}\n"})})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5537:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(6540),a=n(4164),o=n(5627),i=n(6347),s=n(372),l=n(604),u=n(1861),c=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:n,groupId:a}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=u??f;return b({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(4848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function A(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=f(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,k.jsx)(g,{...t,...e}),(0,k.jsx)(A,{...t,...e})]})}function x(e){const t=(0,h.A)();return(0,k.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(6540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}},9329:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}}}]);
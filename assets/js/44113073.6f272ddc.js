"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[8026],{7195:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(4848),a=t(8453),s=t(1470),u=t(9365);const i={title:"Referencing a Subresource"},o=void 0,l={id:"api-lite/subresource/referencing-subresource",title:"Referencing a Subresource",description:"Using the IRI of the resource",source:"@site/docs/api-lite/53-subresource/64-referencing-subresource.md",sourceDirName:"api-lite/53-subresource",slug:"/api-lite/subresource/referencing-subresource",permalink:"/api-lite/subresource/referencing-subresource",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/api-lite/53-subresource/64-referencing-subresource.md",tags:[],version:"current",sidebarPosition:64,frontMatter:{title:"Referencing a Subresource"},sidebar:"docs",previous:{title:"GET Endpoint for a Subresource",permalink:"/api-lite/subresource/get-subresource"},next:{title:"rekalogika/collections",permalink:"/collections/"}},c={},d=[{value:"Using the IRI of the resource",id:"using-the-iri-of-the-resource",level:2},{value:"Embed the resource",id:"embed-the-resource",level:2}];function p(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"using-the-iri-of-the-resource",children:"Using the IRI of the resource"}),"\n",(0,n.jsxs)(r.p,{children:["By default, API Platform will use IRIs to refer to a resource. But, if you want this style, we recommend setting it explicitly using\n",(0,n.jsx)(r.code,{children:"#[ApiProperty(readableLink: false)]"}),"."]}),"\n",(0,n.jsxs)(s.A,{queryString:"tab",groupId:"subresource",children:[(0,n.jsx)(u.A,{value:"output",label:"Output",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n    "@context": "/contexts/User/Review",\n    "@id": "/user/reviews/018de474-1a23-7494-85f9-e92fb962d2a8",\n    "@type": "User/Review",\n    "id": "018de474-1a23-7494-85f9-e92fb962d2a8",\n    "body": "Occaecati voluptate sed sed suscipit. Voluptas expedita quis molestias quam modi deleniti earum. Voluptas dolorem pariatur iusto quis. Rerum in quisquam nisi neque.",\n    "rating": 5,\n    // highlight-next-line\n    "book": "/user/books/018de474-1a2a-7975-87bb-5944ee8ee95f"\n}\n'})})}),(0,n.jsx)(u.A,{value:"apiresource",label:"API Resource",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-php",metastring:'title="src/ApiResource/User/BookDto.php"',children:"namespace App\\ApiResource\\User;\n\nuse ApiPlatform\\Metadata\\ApiProperty;\nuse ApiPlatform\\Metadata\\ApiResource;\n\n#[ApiResource(\n    // ...\n)]\nclass ReviewDto\n{\n    public ?Uuid $id = null;\n    public ?string $body = null;\n\n    /**\n     * @var int<1,5>|null\n     */\n    public ?int $rating = null;\n\n    // highlight-next-line\n    #[ApiProperty(readableLink: false)]\n    public ?BookDto $book = null;\n}\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"embed-the-resource",children:"Embed the resource"}),"\n",(0,n.jsxs)(s.A,{queryString:"tab",groupId:"subresource",children:[(0,n.jsx)(u.A,{value:"output",label:"Output",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n    "@context": "/contexts/User/Review",\n    "@id": "/user/reviewsWithEmbeddedResource/018de474-1a23-7494-85f9-e92fb962d2a8",\n    "@type": "User/Review",\n    "id": "018de474-1a23-7494-85f9-e92fb962d2a8",\n    "body": "Occaecati voluptate sed sed suscipit. Voluptas expedita quis molestias quam modi deleniti earum. Voluptas dolorem pariatur iusto quis. Rerum in quisquam nisi neque.",\n    "rating": 5,\n    // highlight-start\n    "book": {\n        "@id": "/user/books/018de474-1a2a-7975-87bb-5944ee8ee95f",\n        "@type": "User/Book",\n        "id": "018de474-1a2a-7975-87bb-5944ee8ee95f",\n        "title": "Saepe enim sint culpa fuga.",\n        "description": "Ad cupiditate asperiores quas quis non facere nam. Fugit praesentium natus aut error perspiciatis quo. Iusto dolores quaerat quibusdam qui praesentium.",\n        "reviews": "/user/books/018de474-1a2a-7975-87bb-5944ee8ee95f/reviews"\n    }\n    // highlight-end\n}\n'})})}),(0,n.jsx)(u.A,{value:"apiresource",label:"API Resource",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-php",metastring:'title="src/ApiResource/User/BookDto.php"',children:"namespace App\\ApiResource\\User;\n\nuse ApiPlatform\\Metadata\\ApiProperty;\nuse ApiPlatform\\Metadata\\ApiResource;\n\n#[ApiResource(\n    // ...\n)]\nclass ReviewDto\n{\n    public ?Uuid $id = null;\n    public ?string $body = null;\n\n    /**\n     * @var int<1,5>|null\n     */\n    public ?int $rating = null;\n\n    // highlight-next-line\n    #[ApiProperty(readableLink: true)]\n    public ?BookDto $book = null;\n}\n"})})})]})]})}function b(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9365:(e,r,t)=>{t.d(r,{A:()=>u});t(6540);var n=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function u(e){let{children:r,hidden:t,className:u}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,u),hidden:t,children:r})}},1470:(e,r,t)=>{t.d(r,{A:()=>A});var n=t(6540),a=t(4164),s=t(3104),u=t(6347),i=t(205),o=t(7485),l=t(1682),c=t(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,l.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function b(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const a=(0,u.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=p(e),[u,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[l,d]=h({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=l??f;return b({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function x(e){let{className:r,block:t,selectedValue:n,selectValue:u,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),c=e=>{const r=e.currentTarget,t=o.indexOf(r),a=i[t].value;a!==n&&(l(r),u(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function k(e){let{lazy:r,children:t,selectedValue:s}=e;const u=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=u.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:u.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...r,...e}),(0,v.jsx)(k,{...r,...e})]})}function A(e){const r=(0,m.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(r))}},8453:(e,r,t)=>{t.d(r,{R:()=>u,x:()=>i});var n=t(6540);const a={},s=n.createContext(a);function u(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
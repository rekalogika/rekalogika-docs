"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[2932],{3958:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>u,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"api-lite/subresource/get-subresource","title":"GET Endpoint for a Subresource","description":"","source":"@site/docs/api-lite/53-subresource/63-get-subresource.md","sourceDirName":"api-lite/53-subresource","slug":"/api-lite/subresource/get-subresource","permalink":"/api-lite/subresource/get-subresource","draft":false,"unlisted":false,"editUrl":"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/api-lite/53-subresource/63-get-subresource.md","tags":[],"version":"current","sidebarPosition":63,"frontMatter":{"title":"GET Endpoint for a Subresource"},"sidebar":"docs","previous":{"title":"Referencing a Collection of Subresources","permalink":"/api-lite/subresource/referencing-collection-subresource"},"next":{"title":"Referencing a Subresource","permalink":"/api-lite/subresource/referencing-subresource"}}');var o=r(4848),a=r(8453),s=r(5537),i=r(9329);const u={title:"GET Endpoint for a Subresource"},l=void 0,c={},d=[];function p(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(s.A,{queryString:"tab",groupId:"api",children:[(0,o.jsx)(i.A,{value:"apiresource",label:"API Resource",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",metastring:'title="src/ApiResource/User/ReviewDto.php"',children:"namespace App\\ApiResource\\User;\n\nuse ApiPlatform\\Metadata\\ApiResource;\nuse ApiPlatform\\Metadata\\GetCollection;\nuse ApiPlatform\\Metadata\\Link;\nuse App\\ApiState\\User\\Review\\BookReviewCollectionProvider;\nuse App\\ApiState\\User\\Review\\BookReviewProvider;\n\n#[ApiResource(\n    shortName: 'User/Review',\n    routePrefix: '/user',\n    operations: [\n        // ...\n        new Get(\n            uriTemplate: '/books/{bookId}/reviews/{id}',\n            provider: BookReviewProvider::class,\n            uriVariables: [\n                'bookId' => new Link(\n                    fromClass: BookDto::class,\n                )\n            ],\n        ),\n        // ...\n    ]\n)]\nclass ReviewDto\n{\n    // ...\n}\n"})})}),(0,o.jsx)(i.A,{value:"stateprovider",label:"State Provider",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",metastring:'title="src/ApiState/User/Review/BookReviewProvider.php"',children:"namespace App\\ApiState\\User\\Review;\n\nuse ApiPlatform\\Metadata\\Operation;\nuse App\\ApiResource\\User\\ReviewDto;\nuse App\\Repository\\BookRepository;\nuse Rekalogika\\ApiLite\\Exception\\NotFoundException;\nuse Rekalogika\\ApiLite\\State\\AbstractProvider;\nuse Symfony\\Component\\Uid\\Uuid;\n\n/**\n * @extends AbstractProvider<ReviewDto>\n */\nclass BookReviewProvider extends AbstractProvider\n{\n    public function __construct(\n        private BookRepository $bookRepository\n    ) {\n    }\n\n    public function provide(\n        Operation $operation,\n        array $uriVariables = [],\n        array $context = []\n    ): object|array|null {\n        // Gets the book from the database\n        $book = $this->bookRepository\n            ->find($uriVariables['bookId'] ?? null)\n            ?? throw new NotFoundException('Book not found');\n\n        // Gets the review ID from the URI variables\n        $reviewId = $uriVariables['id']\n            ?? throw new NotFoundException('Review not found');\n\n        // Check the type of the review ID because the next step demands that\n        // the ID is in UUID format. You don't need this check if you are using\n        // a plain integer or string ID.\n        if (!$reviewId instanceof Uuid) {\n            throw new \\InvalidArgumentException('Invalid reviewId');\n        }\n\n        // Get the review from the book's collection of reviews, using the\n        // review ID.\n        $review = $book->getReviews()->get($reviewId->toBinary())\n            ?? throw new NotFoundException('Review not found');\n\n        // Check for authorization\n        $this->denyAccessUnlessGranted('view', $review);\n\n        // Map the Review to the output DTO, and return it.\n        return $this->map($review, ReviewDto::class);\n    }\n}\n"})})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},5537:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(6540),o=r(4164),a=r(5627),s=r(6347),i=r(372),u=r(604),l=r(1861),c=r(8749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const o=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=p(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,d]=f({queryString:r,groupId:o}),[v,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Dv)(r);return[o,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),m=(()=>{const e=l??v;return b({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{m&&u(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),h(e)}),[d,h,a]),tabValues:a}}var h=r(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=r(4848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),o=i[r].value;o!==n&&(l(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{u.push(e)},onKeyDown:d,onClick:c,...a,className:(0,o.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function A(e){const t=v(e);return(0,w.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,w.jsx)(g,{...t,...e}),(0,w.jsx)(k,{...t,...e})]})}function y(e){const t=(0,h.A)();return(0,w.jsx)(A,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(6540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}},9329:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(4164);const o={tabItem:"tabItem_Ymn6"};var a=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,s),hidden:r,children:t})}}}]);
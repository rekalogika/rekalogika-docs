"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[7425],{2443:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=t(5893),s=t(1151),a=t(4866),o=t(5162);const c={title:"rekalogika/direct-property-access"},l=void 0,i={id:"direct-property-access/index",title:"rekalogika/direct-property-access",description:"Implementation of Symfony's PropertyAccessorInterface that reads and writes",source:"@site/docs/direct-property-access/index.md",sourceDirName:"direct-property-access",slug:"/direct-property-access/",permalink:"/direct-property-access/",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/direct-property-access/index.md",tags:[],version:"current",frontMatter:{title:"rekalogika/direct-property-access"},sidebar:"docs",next:{title:"rekalogika/doctrine-collections-decorator",permalink:"/doctrine-collections-decorator/"}},u={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Caveats",id:"caveats",level:2},{value:"Credits",id:"credits",level:2},{value:"License",id:"license",level:2},{value:"Contributing",id:"contributing",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Implementation of Symfony's ",(0,n.jsx)(r.code,{children:"PropertyAccessorInterface"})," that reads and writes\ndirectly to the object's properties, bypassing getters and setters."]}),"\n",(0,n.jsx)(r.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-php",children:"use Rekalogika\\DirectPropertyAccess\\DirectPropertyAccessor;\n\nclass Person\n{\n    private string $name = 'Jane';\n}\n\n$propertyAccessor = new DirectPropertyAccessor();\n\n$name = $propertyAccessor->getValue($person, 'name'); // Jane\n$propertyAccessor->setValue($person, 'name', 'John');\n"})}),"\n",(0,n.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(r.p,{children:["Make sure Composer is installed globally, as explained in the\n",(0,n.jsx)(r.a,{href:"https://getcomposer.org/doc/00-intro.md",children:"installation chapter"}),"\nof the Composer documentation."]}),"\n",(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(o.Z,{value:"flex",label:"With Symfony Flex",children:[(0,n.jsx)(r.p,{children:"Open a command console, enter your project directory, and execute:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"composer require rekalogika/direct-property-access\n"})})]}),(0,n.jsxs)(o.Z,{value:"noflex",label:"Without Symfony Flex",children:[(0,n.jsx)(r.p,{children:"Step 1: Download the Bundle"}),(0,n.jsx)(r.p,{children:"Open a command console, enter your project directory, and execute the\nfollowing command to download the latest stable version of this bundle:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"composer require rekalogika/direct-property-access\n"})}),(0,n.jsx)(r.p,{children:"Step 2: Enable the Bundle"}),(0,n.jsxs)(r.p,{children:["Then, enable the bundle by adding it to the list of registered bundles\nin the ",(0,n.jsx)(r.code,{children:"config/bundles.php"})," file of your project:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-php",metastring:"title=config/bundles.php",children:"return [\n    // ...\n    Rekalogika\\DirectPropertyAccess\\RekalogikaDirectPropertyAccessBundle::class => ['all' => true],\n];\n"})})]}),(0,n.jsxs)(o.Z,{value:"nonsymfony",label:"Non-Symfony Projects",children:[(0,n.jsx)(r.p,{children:"Open a command console, enter your project directory, and execute:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"composer require rekalogika/direct-property-access\n"})})]})]}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(r.p,{children:["In Symfony projects, you can autowire ",(0,n.jsx)(r.code,{children:"DirectPropertyAccessor"}),". In other\nprojects, you can simply instantiate it."]}),"\n",(0,n.jsxs)(r.p,{children:["Read ",(0,n.jsx)(r.a,{href:"https://symfony.com/doc/current/components/property_access.html",children:"Symfony's PropertyAccess\ndocumentation"}),"\nfor more information on how to use it. The difference is that\n",(0,n.jsx)(r.code,{children:"DirectPropertyAccessor"})," does not call any of the object's methods, but reads\nand writes directly to the object's properties, even if they are private."]}),"\n",(0,n.jsx)(r.h2,{id:"caveats",children:"Caveats"}),"\n",(0,n.jsx)(r.p,{children:"Currently does not support arrays and paths beyond one level deep."}),"\n",(0,n.jsx)(r.h2,{id:"credits",children:"Credits"}),"\n",(0,n.jsx)(r.p,{children:"This project took inspiration from the following projects."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/symfony/property-access",children:"Symfony Property Access"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/kwn/reflection-property-access",children:"kwn/reflection-property-access"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/nelmio/alice/blob/master/src/PropertyAccess/ReflectionPropertyAccessor.php",children:"nelmio/alice"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"license",children:"License"}),"\n",(0,n.jsx)(r.p,{children:"MIT"}),"\n",(0,n.jsx)(r.h2,{id:"contributing",children:"Contributing"}),"\n",(0,n.jsxs)(r.p,{children:["Issues and pull requests should be filed in the GitHub repository\n",(0,n.jsx)(r.a,{href:"https://github.com/rekalogika/direct-property-access",children:"rekalogika/direct-property-access"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5162:(e,r,t)=>{t.d(r,{Z:()=>o});t(7294);var n=t(6010);const s={tabItem:"tabItem_Ymn6"};var a=t(5893);function o(e){let{children:r,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,o),hidden:t,children:r})}},4866:(e,r,t)=>{t.d(r,{Z:()=>k});var n=t(7294),s=t(6010),a=t(2466),o=t(6550),c=t(469),l=t(1980),i=t(7392),u=t(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,i.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const s=(0,o.k6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l._X)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[i,d]=m({queryString:t,groupId:s}),[f,y]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,u.Nk)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=i??f;return h({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),y(e)}),[d,y,a]),tabValues:a}}var y=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function x(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.o5)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),s=c[t].value;s!==n&&(i(r),o(s))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:c.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=f(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...r}),(0,g.jsx)(j,{...e,...r})]})}function k(e){const r=(0,y.Z)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(r))}},1151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>o});var n=t(7294);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);
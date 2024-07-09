"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[2873],{2001:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var t=i(5893),o=i(1151);const l={title:"Collection Decorators"},c=void 0,r={id:"collections/implementations/decorators",title:"Collection Decorators",description:"Classes that decorate any Doctrine Collection object and transform it into a",source:"@site/docs/collections/02-implementations/01-decorators.md",sourceDirName:"collections/02-implementations",slug:"/collections/implementations/decorators",permalink:"/collections/implementations/decorators",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/collections/02-implementations/01-decorators.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Collection Decorators"},sidebar:"docs",previous:{title:"Implementations",permalink:"/collections/implementations/"},next:{title:"Query-Backed Collection",permalink:"/collections/implementations/query-collection"}},a={},s=[{value:"Installation",id:"installation",level:2},{value:"<code>RecollectionDecorator</code> Usage Example",id:"recollectiondecorator-usage-example",level:2},{value:"<code>CriteriaRecollection</code> Usage Example",id:"criteriarecollection-usage-example",level:2},{value:"The Minimal Flavors",id:"the-minimal-flavors",level:2},{value:"Instance Caching",id:"instance-caching",level:2},{value:"Extending Decorators",id:"extending-decorators",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Classes that decorate any Doctrine ",(0,t.jsx)(n.code,{children:"Collection"})," object and transform it into a\n",(0,t.jsx)(n.code,{children:"Recollection"})," object."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"composer require rekalogika/collections-domain\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"recollectiondecorator-usage-example",children:[(0,t.jsx)(n.code,{children:"RecollectionDecorator"})," Usage Example"]}),"\n",(0,t.jsx)(n.p,{children:"If you have this in your entity:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use Doctrine\\Common\\Collections\\Collection;\n\nclass Country\n{\n    /**\n     * @var Collection<int,Citizen>\n     */\n    private Collection $citizen;\n\n    /**\n     * @return Collection<int,Citizen>\n     */\n    public function getCitizens(): Collection\n    {\n        return $this->citizen;\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can change it to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use Doctrine\\Common\\Collections\\Collection;\nuse Rekalogika\\Contracts\\Collections\\Recollection;\nuse Rekalogika\\Domain\\Collections\\RecollectionDecorator;\n\nclass Country\n{\n    /**\n     * @var Collection<int,Citizen>\n     */\n    private Collection $citizen;\n\n    /**\n     // highlight-next-line\n     * @return Recollection<int,Citizen>\n     */\n    // highlight-next-line\n    public function getCitizens(): Recollection\n    {\n        // highlight-start\n        return RecollectionDecorator::create(\n            collection: $this->citizen,\n            indexBy: 'id'\n        );\n        // highlight-end\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"criteriarecollection-usage-example",children:[(0,t.jsx)(n.code,{children:"CriteriaRecollection"})," Usage Example"]}),"\n",(0,t.jsx)(n.p,{children:"If you have this in your entity:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use Doctrine\\Common\\Collections\\Criteria;\nuse Doctrine\\Common\\Collections\\ReadableCollection;\n\nclass Country\n{\n    /**\n     * @return ReadableCollection<int,Citizen>\n     */\n    public function getWorkingAgeCitizens(): ReadableCollection\n    {\n        $criteria = Criteria::create()\n            ->where(Criteria::expr()->gte('age', 15))\n            ->andWhere(Criteria::expr()->lte('age', 64));\n\n        return $this->citizen->matching($criteria);\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can change it to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\Domain\\Collections\\CriteriaRecollection;\nuse Rekalogika\\Contracts\\Collections\\ReadableRecollection;\n\nclass Country\n{\n    /**\n     // highlight-next-line\n     * @return ReadableRecollection<int,Citizen>\n     */\n     // highlight-next-line\n    public function getWorkingAgeCitizens(): ReadableRecollection\n    {\n        $criteria = Criteria::create()\n            ->where(Criteria::expr()->gte('age', 15))\n            ->andWhere(Criteria::expr()->lte('age', 64));\n\n        // highlight-start\n        return CriteriaRecollection::create(\n            collection: $this->citizen,\n            criteria: $criteria,\n            indexBy: 'id',\n            instanceId: __METHOD__\n        );\n        // highlight-end\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"the-minimal-flavors",children:"The Minimal Flavors"}),"\n",(0,t.jsx)(n.p,{children:"If you want to use the minimal version of the decorators, you can substitute:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Recollection"})," with ",(0,t.jsx)(n.code,{children:"MinimalRecollection"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ReadableRecollection"})," with ",(0,t.jsx)(n.code,{children:"MinimalReadableRecollection"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RecollectionDecorator"})," with ",(0,t.jsx)(n.code,{children:"MinimalRecollectionDecorator"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CriteriaRecollection"})," with ",(0,t.jsx)(n.code,{children:"MinimalCriteriaRecollection"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"instance-caching",children:"Instance Caching"}),"\n",(0,t.jsx)(n.p,{children:"The decorator classes cache their instances. If you try to instantiate the\ndecorator the second time with the same arguments, it will return the same\ninstance. Therefore, you don't need to implement the caching yourself."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CriteriaRecollection"}),", ",(0,t.jsx)(n.code,{children:"MinimalCriteriaRecollection"})," and ",(0,t.jsx)(n.code,{children:"CriteriaPageable"})," may\nneed the ",(0,t.jsx)(n.code,{children:"$instanceId"})," argument to distinguish between different instances. If\nomitted, the classes will use the serialization of the criteria as the instance\nID, which might be unreliable if the criteria has a reference to an entity."]}),"\n",(0,t.jsx)(n.h2,{id:"extending-decorators",children:"Extending Decorators"}),"\n",(0,t.jsx)(n.p,{children:"TBD"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var t=i(7294);const o={},l=t.createContext(o);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
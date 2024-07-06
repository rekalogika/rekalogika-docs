"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[6436],{1418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var o=t(5893),i=t(1151);const l={title:"Slow Counting"},c=void 0,r={id:"collections/behaviors/counting",title:"Slow Counting",description:"Problem",source:"@site/docs/collections/03-behaviors/03-counting.md",sourceDirName:"collections/03-behaviors",slug:"/collections/behaviors/counting",permalink:"/collections/behaviors/counting",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/collections/03-behaviors/03-counting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Slow Counting"},sidebar:"docs",previous:{title:"Iterating Large Collections",permalink:"/collections/behaviors/iterator"},next:{title:"Selectable Abstraction Leak",permalink:"/collections/behaviors/selectable-leak"}},a={},s=[{value:"Problem",id:"problem",level:2},{value:"Default Behavior of Our Classes",id:"default-behavior-of-our-classes",level:2},{value:"What to Do After the Threshold is Reached",id:"what-to-do-after-the-threshold-is-reached",level:2},{value:"Change the Counting Strategy",id:"change-the-counting-strategy",level:3},{value:"Switch to the Corresponding Minimal Class",id:"switch-to-the-corresponding-minimal-class",level:3},{value:"Changing the Counting Strategy",id:"changing-the-counting-strategy",level:2},{value:"Available Counting Strategies",id:"available-counting-strategies",level:2},{value:"Precounting Strategy",id:"precounting-strategy",level:2},{value:"Pagination is Possible Without the Total Count",id:"pagination-is-possible-without-the-total-count",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"problem",children:"Problem"}),"\n",(0,o.jsxs)(n.p,{children:["If the number of records is large, the database might ",(0,o.jsx)(n.a,{href:"https://wiki.postgresql.org/wiki/Slow_Counting",children:"struggle in counting the\nrecords"}),". Consequently, calling\n",(0,o.jsx)(n.code,{children:"count($collection)"})," or ",(0,o.jsx)(n.code,{children:"$collection->count()"})," or ",(0,o.jsx)(n.code,{children:"collection|length"})," on a large,\nextra-lazy Doctrine ",(0,o.jsx)(n.code,{children:"Collection"})," can be very slow because it becomes a ",(0,o.jsx)(n.code,{children:"COUNT()"}),"\nquery behind the scenes."]}),"\n",(0,o.jsx)(n.h2,{id:"default-behavior-of-our-classes",children:"Default Behavior of Our Classes"}),"\n",(0,o.jsxs)(n.p,{children:["Our classes offers plugable counting strategy. The default counting strategy is\n",(0,o.jsx)(n.code,{children:"ConditionalDelegatedCountStrategy"}),". It delegates the count to the underlying\ncollection, with these caveats:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If the result count is more than 5000, it will give a deprecation warning."}),"\n",(0,o.jsx)(n.li,{children:"If the result count is more than 50000, it will throw an exception."}),"\n",(0,o.jsx)(n.li,{children:"If the count duration is more than 2 seconds, it will give a deprecation\nwarning."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The threshold can be changed in ",(0,o.jsx)(n.code,{children:"Configuration"})," globally, or by providing the\narguments in the constructor of the strategy."]}),"\n",(0,o.jsx)(n.h2,{id:"what-to-do-after-the-threshold-is-reached",children:"What to Do After the Threshold is Reached"}),"\n",(0,o.jsx)(n.h3,{id:"change-the-counting-strategy",children:"Change the Counting Strategy"}),"\n",(0,o.jsxs)(n.p,{children:["All of our classes provide pluggable strategy for handling the ",(0,o.jsx)(n.code,{children:"count()"}),"\noperation. You can change how the count is calculated by switching the strategy,\nor use your own counting strategy."]}),"\n",(0,o.jsx)(n.h3,{id:"switch-to-the-corresponding-minimal-class",children:"Switch to the Corresponding Minimal Class"}),"\n",(0,o.jsx)(n.p,{children:"As an alternative to switching the counting strategy, you also have the option\nto switch to the minimal version of the class if you don't really need the count\noperation."}),"\n",(0,o.jsxs)(n.p,{children:["Our minimal classes do not implement ",(0,o.jsx)(n.code,{children:"Countable"}),". So, you can run static\nanalysis to easily find out the parts of your code that still call the ",(0,o.jsx)(n.code,{children:"count()"}),"\non your collection, and clean them up."]}),"\n",(0,o.jsx)(n.h2,{id:"changing-the-counting-strategy",children:"Changing the Counting Strategy"}),"\n",(0,o.jsxs)(n.p,{children:["To change the counting strategy, provide the strategy in the ",(0,o.jsx)(n.code,{children:"$count"})," argument\nwhen creating the collection. Example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\Contracts\\Collections\\Recollection;\nuse Rekalogika\\Domain\\Collections\\Common\\Count\\ZeroCountStrategy;\nuse Rekalogika\\Domain\\Collections\\RecollectionDecorator;\n\nclass Country\n{\n    /**\n     * @var Collection<int,Citizen>\n     */\n    private Collection $citizen;\n\n    private int $citizenCount = 0;\n\n    /**\n     * @return Recollection<int,Citizen>\n     */\n    public function getCitizens(): Recollection\n    {\n        return RecollectionDecorator::create(\n            collection: $this->citizen,\n            indexBy: 'id',\n            // highlight-next-line\n            count: new ZeroCountStrategy()\n        );\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"available-counting-strategies",children:"Available Counting Strategies"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ConditionalDelegatedCountStrategy"}),": The default, delegates the count to the\nunderlying collection with exceptions described above."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"DelegatedCountStrategy"}),": Delegates the count to the underlying collection\nwithout any checks."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"DisabledCountStrategy"}),": Disables the count operation. Throws an exception if\nthe count is called."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"PrecountingStrategy"}),": Saves and restores the count to another property. See the\nsection below for more information."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ZeroCountStrategy"}),": Always returns 0 as the count."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can create your own counting strategy by implementing the interface\n",(0,o.jsx)(n.code,{children:"CountStrategy"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"precounting-strategy",children:"Precounting Strategy"}),"\n",(0,o.jsxs)(n.p,{children:["Precounting strategy stores the precounted value in a separate property. If the\n",(0,o.jsx)(n.code,{children:"count()"})," is called, it will return the precounted value. If the\n",(0,o.jsx)(n.code,{children:"refreshCount()"})," is called, it will recalculate the count from the underlying\ncollection and store it in the property."]}),"\n",(0,o.jsx)(n.p,{children:"Usage example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\Contracts\\Collections\\Recollection;\nuse Rekalogika\\Domain\\Collections\\Common\\Count\\PrecountingStrategy;\nuse Rekalogika\\Domain\\Collections\\RecollectionDecorator;\n\nclass Country\n{\n    /**\n     * @var Collection<int,Citizen>\n     */\n    private Collection $citizen;\n\n    private int $citizenCount = 0;\n\n    /**\n     * @return Recollection<int,Citizen>\n     */\n    public function getCitizens(): Recollection\n    {\n        return RecollectionDecorator::create(\n            collection: $this->citizen,\n            indexBy: 'id',\n            // highlight-next-line\n            count: new PrecountingStrategy($this->citizenCount)\n        );\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The caller can count the records like the following, and it will use the number\nstored in ",(0,o.jsx)(n.code,{children:"$citizenCount"})," as the result:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"/** @var Country $country */\n\n$count = $country->getCitizens()->count();\n// or\n$count =count($country->getCitizens());\n"})}),"\n",(0,o.jsx)(n.p,{children:"When it is necessary to refresh the pre-counted value, you can do this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"use Doctrine\\ORM\\EntityManagerInterface;\n\n/** @var EntityManagerInterface $entityManager */\n\n$country->getCitizens()->refreshCount();\n$entityManager->flush();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"pagination-is-possible-without-the-total-count",children:"Pagination is Possible Without the Total Count"}),"\n",(0,o.jsxs)(n.p,{children:["All of our classes implement ",(0,o.jsx)(n.code,{children:"PageableInterface"})," from our\n",(0,o.jsx)(n.code,{children:"rekalogika/rekapager-contracts"})," package. This allows you to paginate the\ncollection for user interface or API output. Unlike traditional pagination, our\n",(0,o.jsx)(n.code,{children:"PageableInterface"})," does not need the count to perform pagination, and therefore\nremains performant even with huge collections."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var o=t(7294);const i={},l=o.createContext(i);function c(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);
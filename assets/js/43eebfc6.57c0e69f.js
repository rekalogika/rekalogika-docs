"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[9660],{618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(5893),a=t(1151);const r={title:"Batch Processing"},s=void 0,o={id:"rekapager/batch-processing",title:"Batch Processing",description:"Any PageableInterface objects can be used to iterate its underlying data page",source:"@site/docs/rekapager/07-batch-processing.md",sourceDirName:"rekapager",slug:"/rekapager/batch-processing",permalink:"/rekapager/batch-processing",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/rekapager/07-batch-processing.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Batch Processing"},sidebar:"docs",previous:{title:"API Platform Integration",permalink:"/rekapager/api-platform"},next:{title:"Integrating Rekapager into a Framework",permalink:"/rekapager/integrating"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Batch Processing",id:"batch-processing",level:2},{value:"Always Use Keyset Pagination",id:"always-use-keyset-pagination",level:2},{value:"Comparison to <code>Query::toIterable()</code>",id:"comparison-to-querytoiterable",level:2},{value:"Suspending and Resuming Batch Processing",id:"suspending-and-resuming-batch-processing",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Any ",(0,i.jsx)(n.code,{children:"PageableInterface"})," objects can be used to iterate its underlying data page\nby page. Rather than loading the entire data set into memory, you can process\nthe data in multiple batches (a.k.a pages, chunks, slices)."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["When using the library only for batch processing, you only need to ",(0,i.jsx)(n.a,{href:"adapters",children:"install the\nadapters"})," you need. Framework integration is not required."]}),"\n",(0,i.jsx)(n.h2,{id:"batch-processing",children:"Batch Processing"}),"\n",(0,i.jsx)(n.p,{children:"To iterate over a large amount of data, you can use the following pattern:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"use Doctrine\\ORM\\EntityManagerInterface;\nuse Rekalogika\\Rekapager\\PageableInterface;\n\n/** @var PageableInterface $pageable */\n/** @var EntityManagerInterface $entityManager */\n\nforeach ($pageable->withItemsPerPage(1000)->getPages() as $page) {\n    foreach ($page as $item) {\n        // Do something with the item\n    }\n\n    // Do something after each page here\n    // With Doctrine, you'd usually want to flush() and clear() here\n    $entityManager->flush(); // if required\n    $entitymanager->clear();\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"always-use-keyset-pagination",children:"Always Use Keyset Pagination"}),"\n",(0,i.jsx)(n.p,{children:"While it is possible to use traditional offset pagination, you should always use\nkeyset pagination for batch processing:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"With offset pagination you risk missing items, or processing the same items\nmultiple times, if the underlying data changes while you are processing it."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Offset pagination will become slower and slower as you go further away from\nthe first page."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"comparison-to-querytoiterable",children:["Comparison to ",(0,i.jsx)(n.code,{children:"Query::toIterable()"})]}),"\n",(0,i.jsxs)(n.p,{children:["Doctrine's documentation ",(0,i.jsxs)(n.a,{href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/batch-processing.html#iterating-results",children:["recommends using\n",(0,i.jsx)(n.code,{children:"Query::toIterable()"})]}),"\nto iterate over large result sets. This, however, has several drawbacks:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Contrary to what one might expect, ",(0,i.jsx)(n.code,{children:"toIterable()"})," actually runs the query only\nonce, then loads the entire result into memory, which can be problematic for\nlarge result sets. It only saves us memory in the hydration phase, in the\nsense that it does not hydrate the result into entities all at once."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Even when you don't care about memory usage, queries with large results will be\nmuch slower to execute. The application must wait for the query to finish, and\ndepending on the application, it may affect interactivity and user experience."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"toIterable()"})," may not trigger the ",(0,i.jsxs)(n.a,{href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/events.html#postload",children:[(0,i.jsx)(n.code,{children:"postLoad"})," event\nhandlers"]}),".\nTherefore, your entities might not behave the same way as when you load them\nnormally."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"PageableInterface"})," for batch processing should solve these issues."]}),"\n",(0,i.jsx)(n.h2,{id:"suspending-and-resuming-batch-processing",children:"Suspending and Resuming Batch Processing"}),"\n",(0,i.jsx)(n.p,{children:"Sometimes you might need to suspend and resume batch processing. For example,\nyou might need to stop the process to perform some maintenance, to perform the\nprocessing only during off-peak hours, or to continue in the event of a failure."}),"\n",(0,i.jsxs)(n.p,{children:["The strategy is to save the last page's identifier, and then use it as the input\nfor ",(0,i.jsx)(n.code,{children:"getPages()"})," when you resume the process. Here is an example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:'use Doctrine\\ORM\\EntityManagerInterface;\nuse Rekalogika\\Rekapager\\PageableInterface;\n\n/**\n * Runs the batch for the specified duration. Will continue from the last\n * in the next run.\n */\nclass Batch\n{\n    public function __construct(\n        private EntityManagerInterface $entityManager,\n        private PageableInterface $pageable,\n        private string $identifierFile,\n        private int $maxDurationInSeconds,\n    ) {\n    }\n\n    public function batchProcess(): void\n    {\n        $startTime = time();\n    \n        $start = $this->loadIdentifier();\n        $pageable = $this->pageable->withItemsPerPage(1000);\n    \n        foreach ($pageable->getPages($start) as $page) {\n            $this->saveIdentifier($page->getIdentifier());\n    \n            if (time() - $startTime > $this->maxDurationInSeconds) {\n                return;\n            }\n    \n            foreach ($page as $item) {\n                // Do something with the item\n            }\n    \n            // Do something after each page here\n            $this->entityManager->flush(); // if required\n            $this->entitymanager->clear();\n        }\n\n        echo "all done. don\'t rerun again.";\n        $this->removeIdentifier();\n    }\n\n    private function saveIdentifier(object $identifier): void\n    {\n        file_put_contents($this->identifierFile, serialize($identifier));\n    }\n    \n    private function loadIdentifier(): ?object\n    {\n        if (!file_exists($this->identifierFile)) {\n            return null;\n        }\n    \n        return unserialize(file_get_contents($this->identifierFile));\n    }\n\n    private function removeIdentifier(): void\n    {\n        if (file_exists($this->identifierFile)) {\n            unlink($this->identifierFile);\n        }\n    }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(7294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
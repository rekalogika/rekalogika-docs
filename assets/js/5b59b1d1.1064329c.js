"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[3023],{6682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(5893),o=t(1151);const a={title:"Simple Batch Command"},i=void 0,s={id:"rekapager/batch-processing/batch-command",title:"Simple Batch Command",description:"Create a console command for processing batch jobs.",source:"@site/docs/rekapager/06-batch-processing/02-batch-command.md",sourceDirName:"rekapager/06-batch-processing",slug:"/rekapager/batch-processing/batch-command",permalink:"/rekapager/batch-processing/batch-command",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/rekapager/06-batch-processing/02-batch-command.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Simple Batch Command"},sidebar:"docs",previous:{title:"Using Pageable for Batch Processing",permalink:"/rekapager/batch-processing/pageable"},next:{title:"Keyset Seek Method",permalink:"/rekapager/seek-method"}},c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Features",id:"features",level:2},{value:"Quick Start",id:"quick-start",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Create a console command for processing batch jobs."}),"\n",(0,r.jsx)(n.p,{children:"In most cases, we will create a console command to run our batch jobs. So, it\nmakes sense to make this process as streamlined as possible, with as many common\nfeatures built-in as possible."}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.p,{children:["This feature uses Symfony Console. Therefore, you need the ",(0,r.jsx)(n.a,{href:"../framework-integration/symfony",children:"Symfony integration"}),"\nor ",(0,r.jsx)(n.a,{href:"../framework-integration/api-platform",children:"API Platform integration"}),", or both."]}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Easy to create. You provide the ",(0,r.jsx)(n.code,{children:"PageableInterface"})," object, and the logic to\nprocess each item. The framework takes care of the rest."]}),"\n",(0,r.jsx)(n.li,{children:"Informative UI. You get time elapsed and memory usage on each page, as well as\nstatistics every 15 seconds."}),"\n",(0,r.jsxs)(n.li,{children:["Resumable. The UI provides the information about page identifiers on every\nopportunity, and you can use the ",(0,r.jsx)(n.code,{children:"--resume"})," or ",(0,r.jsx)(n.code,{children:"-r"})," option to resume the\nprocess from the specified page identifier."]}),"\n",(0,r.jsxs)(n.li,{children:["Override the page size (the number of items on each batch) using the\n",(0,r.jsx)(n.code,{children:"--page-size"})," or ",(0,r.jsx)(n.code,{children:"-p"})," command line option."]}),"\n",(0,r.jsxs)(n.li,{children:["Progress file. Specify the progress file using the ",(0,r.jsx)(n.code,{children:"--progress-file"})," or ",(0,r.jsx)(n.code,{children:"-f"}),"\ncommand line option. The command will store the last page identifier to this\nfile. The next invocation of the command will resume from this page."]}),"\n",(0,r.jsxs)(n.li,{children:["Time limit. Runs the batch up to the duration specified using the\n",(0,r.jsx)(n.code,{children:"--time-limit"})," or ",(0,r.jsx)(n.code,{children:"-t"})," command line option."]}),"\n",(0,r.jsxs)(n.li,{children:["Signal handling. The command listens to the ",(0,r.jsx)(n.code,{children:"SIGINT"})," signal (Ctrl+C) and\n",(0,r.jsx)(n.code,{children:"SIGTERM"}),". It will finish the current page before exiting, so your job will\nhave a consistent state."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsx)(n.p,{children:"Creating a console command for processing batch jobs is as easy as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"use Doctrine\\ORM\\EntityManagerInterface;\nuse Doctrine\\Common\\Collections\\Criteria;\nuse Doctrine\\Common\\Collections\\Order;\nuse Rekalogika\\Contracts\\Rekapager\\PageableInterface;\nuse Rekalogika\\Rekapager\\Batch\\Event\\AfterPageEvent;\nuse Rekalogika\\Rekapager\\Batch\\Event\\ItemEvent;\nuse Rekalogika\\Rekapager\\Doctrine\\Collections\\SelectableAdapter;\nuse Rekalogika\\Rekapager\\Keyset\\KeysetPageable;\nuse Rekalogika\\Rekapager\\Symfony\\Batch\\SimpleBatchCommand;\nuse Symfony\\Component\\Console\\Attribute\\AsCommand;\nuse Symfony\\Component\\Console\\Input\\InputInterface;\nuse Symfony\\Component\\Console\\Output\\OutputInterface;\n\n/**\n * @extends SimpleBatchCommand<int,Post>\n */\n#[AsCommand(\n    name: 'app:postbatch',\n    description: 'Simple batch command for processing the Post entities'\n)]\nclass AppSimpleBatchCommand extends SimpleBatchCommand\n{\n    public function __construct(\n        private readonly PostRepository $postRepository,\n        private readonly EntityManagerInterface $entityManager,\n    ) {\n        parent::__construct();\n    }\n\n    #[\\Override]\n    protected function configure(): void\n    {\n        // set up the command arguments and options here, just like any other\n        // Symfony console command\n    }\n\n    #[\\Override]\n    protected function getPageable(): PageableInterface {\n        // procure a pageable object here, you can get the input arguments or\n        // options from $this->getInput()\n\n        $adapter = new SelectableAdapter(\n            selectable: $this->postRepository,\n            criteria: Criteria::create()->orderBy(['id' => Order::Ascending])\n        );\n\n        return new KeysetPageable($adapter);\n    }\n\n    #[\\Override]\n    public function processItem(ItemEvent $itemEvent): void\n    {\n        $item = $itemEvent->getItem();\n\n        // do something with $item here\n    }\n\n    #[\\Override]\n    public function afterPage(AfterPageEvent $event): void\n    {\n        // do something after each page here\n\n        $this->entityManager->flush(); // if required\n        $this->entityManager->clear();\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The complete list of the hooks you can override:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"beforeProcess()"})," - called before processing the first page."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"beforePage()"})," - called before processing each page."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"processItem()"})," - called for each item."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"afterPage()"})," - called after processing each page."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"afterProcess()"})," - called after processing the last page."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onInterrupt()"})," - called when the command is interrupted by the user, like when\nthe user presses Ctrl+C."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onTimeLimit()"})," - called when the time limit is reached."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
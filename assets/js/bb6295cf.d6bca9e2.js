"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[1652],{1761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(5893),a=t(1151);const o={title:"Usage"},i=void 0,s={id:"gotenberg-pdf-bundle/usage",title:"Usage",description:"This chapter describes how to use the bundle.",source:"@site/docs/gotenberg-pdf-bundle/02-usage.md",sourceDirName:"gotenberg-pdf-bundle",slug:"/gotenberg-pdf-bundle/usage",permalink:"/gotenberg-pdf-bundle/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/gotenberg-pdf-bundle/02-usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Usage"},sidebar:"docs",previous:{title:"Installation & Quick Start",permalink:"/gotenberg-pdf-bundle/installation"},next:{title:"rekalogika/psr-16-simple-cache-bundle",permalink:"/psr-16-simple-cache-bundle/"}},c={},l=[{value:"Specifying the URL to the Gotenberg Server",id:"specifying-the-url-to-the-gotenberg-server",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Paper Size",id:"paper-size",level:2},{value:"Page Layout",id:"page-layout",level:2},{value:"Header and Footer",id:"header-and-footer",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This chapter describes how to use the bundle."}),"\n",(0,r.jsx)(n.h2,{id:"specifying-the-url-to-the-gotenberg-server",children:"Specifying the URL to the Gotenberg Server"}),"\n",(0,r.jsxs)(n.p,{children:["The bundle uses the ",(0,r.jsx)(n.code,{children:"GOTENBERG_URL"})," environment variable to determine the URL to\nthe Gotenberg server. You can override it using the standard ",(0,r.jsx)(n.a,{href:"https://symfony.com/doc/current/configuration.html#configuration-based-on-environment-variables",children:"Symfony\nenvironment variable"})," mechanism."]}),"\n",(0,r.jsx)(n.h2,{id:"general-usage",children:"General Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Callers will interact with the ",(0,r.jsx)(n.code,{children:"PdfGeneratorInterface"})," to generate PDF files.\nThe ",(0,r.jsx)(n.code,{children:"PdfGeneratorInterface"})," is a high-level interface that abstracts away the\nimplementation details of the underlying PDF generator."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"namespace Rekalogika\\Contracts\\Print;\n\nuse Psr\\Http\\Message\\StreamInterface;\n\ninterface PdfGeneratorInterface\n{\n    public function generatePdfFromHtml(\n        string $htmlContent,\n        PaperInterface $paper,\n        PageLayoutInterface $pageLayout,\n        ?string $header = null,\n        ?string $footer = null,\n    ): StreamInterface;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To get an instance of ",(0,r.jsx)(n.code,{children:"PdfGeneratorInterface"}),", you can usually autowire it in\nyour controller or service:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"namespace App\\Controller;\n\nuse Rekalogika\\Contracts\\Print\\PdfGeneratorInterface;\n\nclass AppController\n{\n    public function index(PdfGeneratorInterface $pdfGenerator)\n    {\n        // ...\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"generatePdfFromHtml()"})," returns a PSR-7 ",(0,r.jsx)(n.code,{children:"StreamInterface"})," containing the\nresulting PDF file. To get the raw PHP resource, call ",(0,r.jsx)(n.code,{children:"detach()"})," on the result."]}),"\n",(0,r.jsx)(n.h2,{id:"paper-size",children:"Paper Size"}),"\n",(0,r.jsxs)(n.p,{children:["The method ",(0,r.jsx)(n.code,{children:"generatePdfFromHtml"})," requires a ",(0,r.jsx)(n.code,{children:"$paper"})," parameter containing a\n",(0,r.jsx)(n.code,{children:"PaperInterface"})," instance. It defines the paper size of the PDF output. You can\nuse the ",(0,r.jsx)(n.code,{children:"Paper"})," class to create a paper size:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\Print\\Paper;\n\n$a4Paper = Paper::A4(); // A4\n$letterPaper = Paper::Letter(); // Letter\n$customPaper = Paper::inMm(200, 300); // Custom paper size in mm\n$customPaperInInches = Paper::inInches(7, 10); // Custom paper size in inches\n"})}),"\n",(0,r.jsx)(n.p,{children:"There are many other paper sizes defined in the class."}),"\n",(0,r.jsx)(n.h2,{id:"page-layout",children:"Page Layout"}),"\n",(0,r.jsxs)(n.p,{children:["The method ",(0,r.jsx)(n.code,{children:"generatePdfFromHtml"})," requires a ",(0,r.jsx)(n.code,{children:"$pageLayout"})," parameter containing\na ",(0,r.jsx)(n.code,{children:"PageLayoutInterface"})," instance. It defines the orientation of the page and\nits margins. You can use the ",(0,r.jsx)(n.code,{children:"PageLayout"})," class to create a page layout:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\Print\\PageLayout;\nuse Rekalogika\\Contracts\\Print\\PageOrientation;\n\n// Portrait with 30mm margins\n$layout = PageLayout::inMm(PageOrientation::Portrait, 30);\n\n// Landscape with 2 inches of vertical margin and 1 inch of horizontal margin\n$layout = PageLayout::inInches(PageOrientation::Landscape, 2, 1);\n\n// Portrait with 10mm top margin, 20mm right margin, 30mm bottom margin, and\n// 40mm left margin\n$layout = PageLayout::inMm(PageOrientation::Portrait, 10, 20, 30, 40);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"header-and-footer",children:"Header and Footer"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"$header"})," and ",(0,r.jsx)(n.code,{children:"$footer"})," parameters of ",(0,r.jsx)(n.code,{children:"generatePdfFromHtml"})," are optional.\nYou can use them to specify the HTML content of the header and footer of the PDF\nfile. Read the ",(0,r.jsx)(n.a,{href:"https://gotenberg.dev/docs/routes#header--footer",children:"Header and\nFooter"})," chapter of the\nGotenberg documentation to learn more."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
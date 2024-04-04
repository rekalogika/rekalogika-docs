"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[8518],{9374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=t(5893),r=t(1151),i=t(4996),o=t(9965);const l={title:"Pager and Pager Items"},s=void 0,c={id:"rekapager/pager-pageritem",title:"Pager and Pager Items",description:"A PagerInterface represents navigation through a collection of items. A view",source:"@site/docs/rekapager/04-pager-pageritem.md",sourceDirName:"rekapager",slug:"/rekapager/pager-pageritem",permalink:"/rekapager/pager-pageritem",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/rekapager/04-pager-pageritem.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Pager and Pager Items"},sidebar:"docs",previous:{title:"Pageables and Pages",permalink:"/rekapager/pageable-page"},next:{title:"Batch Processing",permalink:"/rekapager/batch-processing"}},d={},h=[{value:"Transforming a Pageable into a Pager",id:"transforming-a-pageable-into-a-pager",level:2},{value:"Rendering the Pager",id:"rendering-the-pager",level:2},{value:"Infinite Scrolling",id:"infinite-scrolling",level:2},{value:"Default Options",id:"default-options",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.code,{children:"PagerInterface"})," represents navigation through a collection of items. A view\nlayer can use it to render a pagination control."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"This chapter is Symfony specific."})}),"\n",(0,a.jsxs)(n.p,{children:["A pager works at a higher level than a ",(0,a.jsx)(n.code,{children:"PageableInterface"}),". It needs to be able\nto determine the current page from the context of the request, and it needs to\nbe able to generate URLs for each page. Therefore, a factory should be used to\ninstantiate a pager, and the factory will be framework-specific."]}),"\n",(0,a.jsx)(n.p,{children:"A pager has many pager items. A pager item is an extended page object that\ncontains a URL."}),"\n","\n",(0,a.jsx)(o.Z,{alt:"File classes",sources:{light:(0,i.Z)("/diagrams/light/rekapager-pager.svg"),dark:(0,i.Z)("/diagrams/dark/rekapager-pager.svg")},width:"100%"}),"\n",(0,a.jsx)(n.h2,{id:"transforming-a-pageable-into-a-pager",children:"Transforming a Pageable into a Pager"}),"\n",(0,a.jsxs)(n.p,{children:["Before we can render a pagination control in the UI, we need to transform the\n",(0,a.jsx)(n.code,{children:"PageableInterface"})," into a ",(0,a.jsx)(n.code,{children:"PagerInterface"})," object. To do that, wire the\n",(0,a.jsx)(n.code,{children:"PagerFactoryInterface"})," service, and use the ",(0,a.jsx)(n.code,{children:"create()"})," method."]}),"\n",(0,a.jsx)(n.p,{children:"Example with a Symfony Controller:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\Rekapager\\Bundle\\Contracts\\PagerFactoryInterface;\nuse Rekalogika\\Rekapager\\Bundle\\PagerOptions;\nuse Symfony\\Component\\HttpFoundation\\Request;\nuse Symfony\\Component\\HttpFoundation\\Response;\nuse Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;\n\nclass MyController extends AbstractController\n{\n    public function index(\n        PagerFactoryInterface $pagerFactory,\n        Request $request\n    ): Response {\n        $pageable = ...; // Create a PageableInterface object\n\n        // highlight-start\n        $pager = $pagerFactory->createPager(\n            pageable: $pageable,\n            request: $request,\n            options: new PagerOptions(\n                proximity: 3,\n            )\n        );\n        // highlight-end\n\n        return $this->render('my_template.html.twig', [\n            'pager' => $pager,\n        ]);\n    }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Available options:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"pageParameterName"}),": The query string parameter name for the page number.\nThe default is ",(0,a.jsx)(n.code,{children:"page"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"proximity"}),": The number of pages to show before and after the current page.\nThe default is ",(0,a.jsx)(n.code,{children:"2"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"routeName"}),": The route name to generate the URL. The default is the current\nroute."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"routeParameters"}),": The route parameters. The default is the current route\nparameters."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"urlReferenceType"}),": The type of URL reference, see\n",(0,a.jsx)(n.code,{children:"UrlGeneratorInterface::generate()"})," for more information. The default is\n",(0,a.jsx)(n.code,{children:"UrlGeneratorInterface::ABSOLUTE_PATH"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"itemsPerPage"}),": The number of items per page. The default is ",(0,a.jsx)(n.code,{children:"50"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"pageLimit"}),": The maximum number of pages to show in the pagination control.\nThe default is the effective value in the pageable object."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"rendering-the-pager",children:"Rendering the Pager"}),"\n",(0,a.jsxs)(n.p,{children:["In Twig template, you can use the ",(0,a.jsx)(n.code,{children:"rekapager()"})," function to render the pager."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-handlebars",children:'{# Outputs the item from the current page #}\n\n<table class="table">\n    <thead>\n        <tr>\n            <th>ID</th>\n            <th>Title</th>\n            <th>Date</th>\n            <th>Content</th>\n        </tr>\n    </thead>\n\n    {# Optionally enables infinite scrolling #}\n    // highlight-next-line\n    <tbody {{ rekapager_infinite_scrolling_content() }}>\n        {% for post in pager.currentPage %}\n            <tr>\n                <td>{{ post.id }}</td>\n                <td>{{ post.title }}</td>\n                <td>{{ post.date|date(\'Y-m-d\') }}</td>\n                <td>{{ post.content }}</td>\n            </tr>\n        {% endfor %}\n    </tbody>\n</table>\n\n{# Render the pager #}\n\n// highlight-next-line\n{{ rekapager(pager, template="@RekalogikaRekapager/bootstrap5.html.twig") }}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Available options:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"template"}),": The template to use for rendering the pager. The default is\n",(0,a.jsx)(n.code,{children:"@RekalogikaRekapager/default.html.twig"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"proximity"}),": Override the number of pages to show before and after the current\npage."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"locale"}),": Override the current locale for translations."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"All options are optional."}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Wants to see the pager in your language? Feel free to ",(0,a.jsx)(n.a,{href:"https://github.com/rekalogika/rekapager/tree/main/packages/rekapager-bundle/translations",children:"submit your translation"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:"List of currently available templates:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"@RekalogikaRekapager/default.html.twig"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"@RekalogikaRekapager/bootstrap5.html.twig"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"infinite-scrolling",children:"Infinite Scrolling"}),"\n",(0,a.jsxs)(n.p,{children:["Because infinite scrolling is such a common feature in modern web applications,\nwe provide a helper function to enable it. To enable infinite scrolling, simply\nadd ",(0,a.jsx)(n.code,{children:"{{ rekapager_infinite_scrolling_content() }}"})," to the element that contains\nthe items."]}),"\n",(0,a.jsxs)(n.p,{children:["If the width of the page is less than 768px (equivalent to Bootstrap's ",(0,a.jsx)(n.code,{children:"xs"})," and\n",(0,a.jsx)(n.code,{children:"sm"})," breakpoints), infinite scrolling will be activated. It will find the\npagination element (",(0,a.jsx)(n.code,{children:".pagination"}),"), take note of the next page URL (from\n",(0,a.jsx)(n.code,{children:'[rel="next"]'}),"), and hide the pagination element."]}),"\n",(0,a.jsx)(n.p,{children:"When the user scrolls to the bottom of the page, it will fetch the next page,\nparse the document, get the new items, and appends them to the same element in\nthe current page."}),"\n",(0,a.jsx)(n.h2,{id:"default-options",children:"Default Options"}),"\n",(0,a.jsx)(n.p,{children:"The global defaults can be set in the bundle configuration file."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="config/packages/rekapager.yaml"',children:"rekalogika_rekapager:\n    default_template: '@RekalogikaRekapager/default.html.twig'\n    default_page_parameter_name: page\n    default_proximity: 2\n"})})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var a=t(7294);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);
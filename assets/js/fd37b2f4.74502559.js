"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[3814],{1724:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=t(5893),a=t(1151);const o={title:"Associating Files to Doctrine Entities"},s=void 0,r={id:"file-bundle/doctrine-entity",title:"Associating Files to Doctrine Entities",description:"This chapter describes how to create a file property in a Doctrine entity that",source:"@site/docs/file-bundle/03-doctrine-entity.md",sourceDirName:"file-bundle",slug:"/file-bundle/doctrine-entity",permalink:"/file-bundle/doctrine-entity",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file-bundle/03-doctrine-entity.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Associating Files to Doctrine Entities"},sidebar:"docs",previous:{title:"Installation & Configuration",permalink:"/file-bundle/installation"},next:{title:"Working With Entities & Files",permalink:"/file-bundle/working-with-entities"}},l={},c=[{value:"Creating a File Property in an Entity",id:"creating-a-file-property-in-an-entity",level:2},{value:"Mandatory File",id:"mandatory-file",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"This chapter describes how to create a file property in a Doctrine entity that\nyou can use to associate a file to an entity, including to store the result of a\nfile upload."}),"\n",(0,n.jsxs)(i.admonition,{title:"Preparation",type:"info",children:[(0,n.jsxs)(i.p,{children:["To enable this feature, you need to install the package\n",(0,n.jsx)(i.code,{children:"rekalogika/file-association"}),":"]}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"composer require rekalogika/file-association\n"})})]}),"\n",(0,n.jsx)(i.h2,{id:"creating-a-file-property-in-an-entity",children:"Creating a File Property in an Entity"}),"\n",(0,n.jsx)(i.p,{children:"To create a file property in an entity that will be managed by this framework,\nyou need to:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Create a property that accepts a ",(0,n.jsx)(i.code,{children:"FileInterface"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Add the attribute ",(0,n.jsx)(i.code,{children:"#[WithFileAssociation]"})," to the class."]}),"\n",(0,n.jsxs)(i.li,{children:["Add the attribute ",(0,n.jsx)(i.code,{children:"#[AsFileAssociation]"})," to the property."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",children:"use Rekalogika\\Contracts\\File\\FileInterface;\nuse Rekalogika\\File\\Association\\Attribute\\WithFileAssociation;\nuse Rekalogika\\File\\Association\\Attribute\\AsFileAssociation;\nuse Rekalogika\\File\\File;\n\n// highlight-next-line\n#[WithFileAssociation]\nclass Product\n{\n    /**\n     * The file property must accept a FileInterface\n     */\n    // highlight-start\n    #[AsFileAssociation]\n    private ?FileInterface $image = null;\n    // highlight-end\n\n    //\n    // The rest of this class is inconsequential to the framework\n    //\n\n    /**\n     * This framework reads and writes directly to the properties, even if\n     * private. Therefore, you are free to have your own business logic in the\n     * getters and setters.\n     */\n    public function getImage(): FileInterface\n    {\n        if (date('m-d') == '04-01') { // if today is april 1st\n            return new File('shock-image.jpg'); // april fools!\n        }\n\n        return $this->image;\n    }\n\n    public function setImage(?FileInterface $image): self\n    {\n        if ($this->status == 'published') {\n            throw new \\Exception(\"Cannot change a published product's image\");\n        }\n\n        $this->image = $image;\n\n        return $this;\n    }\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"mandatory-file",children:"Mandatory File"}),"\n",(0,n.jsxs)(i.p,{children:["If your business logic necessitates that the file is mandatory to an entity, you\ncan omit the ",(0,n.jsx)(i.code,{children:"?"})," in the property type hint:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",children:"use Rekalogika\\Contracts\\File\\FileInterface;\nuse Rekalogika\\File\\Association\\Attribute\\WithFileAssociation;\nuse Rekalogika\\File\\Association\\Attribute\\AsFileAssociation;\n\n#[WithFileAssociation]\nclass Product\n{\n    #[AsFileAssociation]\n    // highlight-start\n    private FileInterface $image;\n    // highlight-end\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Read more about mandatory files in the chapter ",(0,n.jsx)(i.a,{href:"mandatory-file",children:"Mandatory File"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>s});var n=t(7294);const a={},o=n.createContext(a);function s(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);
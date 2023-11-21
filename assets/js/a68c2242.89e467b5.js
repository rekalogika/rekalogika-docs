"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[9075],{6261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(5893),o=n(1151);const r={title:"File Association Internal Details"},s=void 0,a={id:"file-bundle/advanced/entity-association-internal",title:"File Association Internal Details",description:"Where The Files Are Stored",source:"@site/docs/file-bundle/advanced/21-entity-association-internal.md",sourceDirName:"file-bundle/advanced",slug:"/file-bundle/advanced/entity-association-internal",permalink:"/file-bundle/advanced/entity-association-internal",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/file-bundle/advanced/21-entity-association-internal.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"File Association Internal Details"},sidebar:"docs",previous:{title:"Streaming a ZIP File of Files",permalink:"/file-bundle/zip-streaming"},next:{title:"Creating Filters",permalink:"/file-bundle/advanced/creating-filters"}},l={},c=[{value:"Where The Files Are Stored",id:"where-the-files-are-stored",level:2},{value:"About File Names",id:"about-file-names",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Architecture",id:"architecture",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"where-the-files-are-stored",children:"Where The Files Are Stored"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"FileLocationResolverInterface"})," decides where to store the file. It takes the\nentity instance and the name of the property holding the file and outputs a\n",(0,i.jsx)(t.code,{children:"FilePointer"})," describing where the file in that property will be stored. The\ndefault implementation ",(0,i.jsx)(t.code,{children:"DefaultFileLocationResolver"})," stores files into the\nfilesystem with the identifier 'default' and the key similar to the following:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"entity/ffa87ef3fc5388bc8b666e2cec17d27cc493d0c1/image/e5/80/72/6d/31337\n\u2570----\u256f \u2570--------------------------------------\u256f \u2570---\u256f \u2570---------\u256f \u2570---\u256f\n  A                      B                        C        D        E\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A: Prefix, defaults to 'entity'."}),"\n",(0,i.jsx)(t.li,{children:"B: SHA-1 hash of the entity's fully-qualified class name."}),"\n",(0,i.jsx)(t.li,{children:"C: Property name."}),"\n",(0,i.jsx)(t.li,{children:"D: Hashed directories of the entity's ID. The ID is hashed using SHA-1, then\nsplit by 2 characters each. Then, the first four of them are taken to form\nthe directory structure."}),"\n",(0,i.jsx)(t.li,{children:"E: The entity ID."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This default should be sufficient in most cases, for all entities, and all\nfilesystems. It masks internal details (entity class names). It does not pile\ntoo many files in one directory (some filesystems struggle with a huge amount of\nfiles in a directory). The ordering is chosen to make it easier for manual\nadministration tasks."}),"\n",(0,i.jsxs)(t.p,{children:["To obtain the entity's ID, ",(0,i.jsx)(t.code,{children:"DefaultFileLocationResolver"})," calls\n",(0,i.jsx)(t.code,{children:"ObjectIdResolverInterface"}),". By default, it is ",(0,i.jsx)(t.code,{children:"DefaultObjectIdResolver"})," which\ncalls ",(0,i.jsx)(t.code,{children:"getId()"})," of the entity."]}),"\n",(0,i.jsxs)(t.p,{children:["To override this default behavior, you can create your own implementation of\neither ",(0,i.jsx)(t.code,{children:"FileLocationResolverInterface"})," or ",(0,i.jsx)(t.code,{children:"ObjectIdResolverInterface"}),". If you\nare using autoconfiguration, then you are good to go. Otherwise, you need to\ntag them in the service container:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"services:\n    App\\MyFileLocationResolver:\n        tags:\n            - { name: 'rekalogika.file.association.file_location_resolver' }\n    App\\MyObjectIdResolver:\n        tags:\n            - { name: 'rekalogika.file.association.object_id_resolver' }\n"})}),"\n",(0,i.jsx)(t.h2,{id:"about-file-names",children:"About File Names"}),"\n",(0,i.jsx)(t.p,{children:"Like modern key-value cloud storage services, this framework uses the concept of\n'keys', not 'paths'. The file name is not part of the key but is stored in the\nmetadata, along with other properties of the file. The original file name is\nnever taken into consideration when determining where to store the file."}),"\n",(0,i.jsx)(t.p,{children:"The metadata itself is stored in a sidecar file. Using the example above, the\nmetadata will be stored in this location:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"entity/ffa87ef3fc5388bc8b666e2cec17d27cc493d0c1/image/e5/80/72/6d/31337.metadata\n"})}),"\n",(0,i.jsx)(t.p,{children:"The caller can obtain the file name using the appropriate methods:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:"$imageFilename = $entity->getImage()?->getName();\n"})}),"\n",(0,i.jsx)(t.p,{children:"When possible, the framework should have copied the file name of the original\nfile to the destination metadata when the file was first associated with the\nentity."}),"\n",(0,i.jsx)(t.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsx)(t.p,{children:"The storage key of the file is deterministic. It is determined only by the\nobject's class name, the object's ID, and the name of the property containing the\nfile. As long as those don't change, the key will remain the same."}),"\n",(0,i.jsx)(t.p,{children:"When persisting an entity, the framework will calculate the destination storage\nkey of every applicable property of the entity, and compare it to the current\nfile residing on each property:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If both are the same, the framework leaves it alone."}),"\n",(0,i.jsx)(t.li,{children:"If they are different, the framework will copy the file from the entity to the\nstorage destination."}),"\n",(0,i.jsx)(t.li,{children:"If null, the framework will attempt to remove the file from the storage,\nirrespective of whether the file exists or not."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsxs)(t.p,{children:["In a nutshell: Doctrine Unit Of Work \u27a1\ufe0f Doctrine Events \u27a1\ufe0f\nrekalogika/reconstitutor \u27a1\ufe0f ",(0,i.jsx)(t.code,{children:"InterfaceReconstitutor"})," & ",(0,i.jsx)(t.code,{children:"AttributeReconstitutor"}),"\n\u27a1\ufe0f ",(0,i.jsx)(t.code,{children:"FileAssociationManager"})," \u27a1\ufe0f ",(0,i.jsx)(t.code,{children:"FileRepository"})," (from rekalogika/file)."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"InterfaceReconstitutor"})," & ",(0,i.jsx)(t.code,{children:"AttributeReconstitutor"})," are the entry points of this\npackage. They execute methods of ",(0,i.jsx)(t.code,{children:"FileAssociationManager"})," which works with the\nentities and ",(0,i.jsx)(t.code,{children:"FileRepository"})," to manage the association between the entities and\nfiles."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"InterfaceReconstitutor"})," & ",(0,i.jsx)(t.code,{children:"AttributeReconstitutor"})," are registered to the\nservice container so that they are called by our ",(0,i.jsx)(t.code,{children:"rekalogika/reconstitutor"})," when\nthe relevant events are being emitted by Doctrine. The service configuration is\ndone by the package ",(0,i.jsx)(t.code,{children:"rekalogika/file-bundle"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(7294);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
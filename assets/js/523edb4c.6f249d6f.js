"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[3372],{7915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(5893),o=t(1151);const r={title:"Repository"},s=void 0,a={id:"collections/implementations/repository",title:"Repository",description:"An implementation of the repository pattern. This is an alternative to",source:"@site/docs/collections/02-implementations/03-repository.md",sourceDirName:"collections/02-implementations",slug:"/collections/implementations/repository",permalink:"/collections/implementations/repository",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/collections/02-implementations/03-repository.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Repository"},sidebar:"docs",previous:{title:"Query-Backed Collection",permalink:"/collections/implementations/query-collection"},next:{title:"ArrayCollection",permalink:"/collections/implementations/array-collection"}},l={},c=[{value:"Why?",id:"why",level:2},{value:"Installation",id:"installation",level:2},{value:"Creating a Repository",id:"creating-a-repository",level:2},{value:"The Minimal Flavor",id:"the-minimal-flavor",level:2},{value:"Convenience Methods",id:"convenience-methods",level:2},{value:"Migrating from Doctrine&#39;s Repository",id:"migrating-from-doctrines-repository",level:2},{value:"Persisting an entity",id:"persisting-an-entity",level:3},{value:"Retrieving an entity",id:"retrieving-an-entity",level:3},{value:"Removing an entity",id:"removing-an-entity",level:3},{value:"Iterating All Entities",id:"iterating-all-entities",level:3},{value:"Coexisting with Doctrine&#39;s Standard Repository",id:"coexisting-with-doctrines-standard-repository",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["An implementation of the repository pattern. This is an alternative to\nDoctrine's standard ",(0,i.jsx)(n.code,{children:"EntityRepository"}),". Unlike Doctrine's, our repository\nimplements ",(0,i.jsx)(n.code,{children:"Collection"})," interface, so you can work with the repository like any\nother implementation of ",(0,i.jsx)(n.code,{children:"Collection"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"why",children:"Why?"}),"\n",(0,i.jsx)(n.p,{children:"Why not? A repository is essentially a collection of entities. It makes sense to\nimplement it as just another collection, having the same behavior as any other\ncollection."}),"\n",(0,i.jsxs)(n.p,{children:["Your ",(0,i.jsx)(n.code,{children:"CitizenRepository"})," will work practically the same way as\n",(0,i.jsx)(n.code,{children:"$country->getCitizens()"}),", except that the former contains all citizens, while\nthe latter contains citizens of a specific country."]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"composer require rekalogika/collections-orm\n"})}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-repository",children:"Creating a Repository"}),"\n",(0,i.jsx)(n.p,{children:"Repository interface:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\Contracts\\Collections\\Repository;\n\n/**\n * @extends Repository<int,Citizen>\n */\ninterface CitizenRepository extends Repository\n{\n    // you may wish to add custom methods here\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Repository implementation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"use Rekalogika\\Collections\\ORM\\AbstractRepository;\nuse Rekalogika\\Collections\\ORM\\Configuration\\RepositoryConfiguration;\n\n/**\n * @extends AbstractRepository<int,Citizen>\n */\nclass CitizenRepositoryImplementation extends AbstractRepository implements\n    CitizenRepository\n{\n    public function __construct(ManagerRegistry $managerRegistry)\n    {\n        parent::__construct(\n            managerRegistry: $managerRegistry,\n            class: Citizen::class,\n        );\n    }\n\n    // you may wish to add custom methods here\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Technically, it is not strictly required to create the interface for the\nrepository. You can just create the implementation class. Creating the interface\nis a common practice in domain-driven design (DDD). The interface belongs to the\ndomain layer, while the implementation belongs to the infrastructure layer.\nOther components of the application work with the interface, not the\nimplementation directly."})}),"\n",(0,i.jsx)(n.h2,{id:"the-minimal-flavor",children:"The Minimal Flavor"}),"\n",(0,i.jsx)(n.p,{children:"If you want to use the minimal version of the repository, you can substitute:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Repository"})," with ",(0,i.jsx)(n.code,{children:"MinimalRepository"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AbstractRepository"})," with ",(0,i.jsx)(n.code,{children:"AbstractMinimalRepository"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RepositoryConfiguration"})," with ",(0,i.jsx)(n.code,{children:"MinimalRepositoryConfiguration"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"convenience-methods",children:"Convenience Methods"}),"\n",(0,i.jsxs)(n.p,{children:["The base ",(0,i.jsx)(n.code,{children:"AbstractRepository"})," class provides convenience methods to be called by\nthe methods in the concrete repository implementation:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"getEntityManager()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createQueryBuilder()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"getDoctrineRepository()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createCriteriaRecollection()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createCriteriaPageable()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createQueryRecollection()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"createQueryPageable()"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"migrating-from-doctrines-repository",children:"Migrating from Doctrine's Repository"}),"\n",(0,i.jsx)(n.h3,{id:"persisting-an-entity",children:"Persisting an entity"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff-php",children:"  use Doctrine\\ORM\\EntityManagerInterface;\n  \n  /**\n   * @var EntityRepository $repository This is an implementation of the repository\n   * mentioned in this document.\n   */\n  \n  /** @var EntityManagerInterface $entityManager */\n  \n  $entity = new Entity();\n- $entityManager->persist($entity);\n+ $repository->add($entity);\n  $entityManager->flush();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"retrieving-an-entity",children:"Retrieving an entity"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff-php",children:"  use Doctrine\\ORM\\EntityManagerInterface;\n  use Doctrine\\ORM\\EntityRepository;\n  \n  /**\n   * @var EntityRepository $repository This is an implementation of the repository\n   * mentioned in this document.\n   */\n\n  /** @var EntityManagerInterface $entityManager */\n  /** @var EntityRepository<Entity> $doctrineRepository */\n\n- $entity = $entityManager->find(Entity::class, $id);\n- // or\n- $entity = $doctrineRepository->find($id);\n+ $entity = $repository->get($id);\n+ // alternative that throws an exception if the entity is not found:\n+ $entity = $repository->fetch($id);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"removing-an-entity",children:"Removing an entity"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff-php",children:"  use Doctrine\\ORM\\EntityManagerInterface;\n  \n  /**\n   * @var EntityRepository $repository This is an implementation of the repository\n   * mentioned in this document.\n   */\n  \n  /** @var EntityManagerInterface $entityManager */\n  /** @var Entity $entity */\n\n- $entityManager->remove($entity);\n+ $repository->removeElement($entity);\n  $entityManager->flush();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"iterating-all-entities",children:"Iterating All Entities"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff-php",children:"  use Doctrine\\ORM\\EntityManagerInterface;\n  use Doctrine\\ORM\\EntityRepository;\n  \n  /**\n   * @var EntityRepository $repository This is an implementation of the repository\n   * mentioned in this document.\n   */\n  \n  /** @var EntityManagerInterface $entityManager */\n  /** @var EntityRepository<Entity> $doctrineRepository */\n\n- $entities = $doctrineRepository->findAll();\n- foreach ($entities as $entity) {\n-    // do something\n- }\n+ // non-minimal flavor only:\n+ foreach ($repository as $entity) {\n+    // do something\n+ }\n+\n+ // all flavors, iterating in batches, should never trigger out-of-memory\n+ // situation:\n+ foreach ($repository->withItemsPerPage(1000)->getPages() as $page) {\n+    foreach ($page as $entity) {\n+        // do something\n+    }\n+    $entityManager->clear();\n+ }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"coexisting-with-doctrines-standard-repository",children:"Coexisting with Doctrine's Standard Repository"}),"\n",(0,i.jsx)(n.p,{children:"It should be technically possible to implement this repository in the same class\nas Doctrine's standard repository, but we don't have an implementation for that\nyet."}),"\n",(0,i.jsxs)(n.p,{children:["If you no longer use the default Doctrine's repository, you can safely remove\nthe 'repository' argument in your entity configuration, and remove Doctrine's\nrepository class to reduce confusion. The default Doctrine's repository is still\navailable by calling ",(0,i.jsx)(n.code,{children:"$entityManager->getRepository(Entity::class)"}),", it is just\nyou no longer have the option to add custom methods to it."]}),"\n",(0,i.jsx)(n.p,{children:"This implementation of repository sits above Doctrine's Entity Manager. The\nentity manager does not have the knowledge of the repository."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
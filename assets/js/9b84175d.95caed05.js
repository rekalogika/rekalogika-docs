"use strict";(self.webpackChunkrekalogika_docs=self.webpackChunkrekalogika_docs||[]).push([[4578],{4777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(5893),a=t(1151);const o={title:"Creating a Custom Transformer"},s=void 0,i={id:"mapper/creating-transformer",title:"Creating a Custom Transformer",description:"Extend the mapper by creating your own transformer.",source:"@site/docs/mapper/12-creating-transformer.md",sourceDirName:"mapper",slug:"/mapper/creating-transformer",permalink:"/mapper/creating-transformer",draft:!1,unlisted:!1,editUrl:"https://github.com/rekalogika/rekalogika-docs/edit/main/docs/mapper/12-creating-transformer.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Creating a Custom Transformer"},sidebar:"docs",previous:{title:"Mapping Table",permalink:"/mapper/mapping-table"},next:{title:"Overriding Transformer",permalink:"/mapper/overriding-transformer"}},p={},c=[{value:"Creating the Transformer",id:"creating-the-transformer",level:2},{value:"Registering the Transformer",id:"registering-the-transformer",level:2},{value:"Verifying",id:"verifying",level:2},{value:"Delegating Mapping to the Main Transformer",id:"delegating-mapping-to-the-main-transformer",level:2},{value:"Variant Target Matching",id:"variant-target-matching",level:2},{value:"Caching and Circular References Detection",id:"caching-and-circular-references-detection",level:2},{value:"Attribute Matching",id:"attribute-matching",level:2},{value:"Refusal to Transform",id:"refusal-to-transform",level:2},{value:"Property Path",id:"property-path",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Extend the mapper by creating your own transformer."}),"\n",(0,r.jsx)(n.h2,{id:"creating-the-transformer",children:"Creating the Transformer"}),"\n",(0,r.jsxs)(n.p,{children:["Suppose you are using the ",(0,r.jsx)(n.code,{children:"brick/money"})," library to represent a monetary value in\nyour application, and you need to map the ",(0,r.jsx)(n.code,{children:"Money"})," object to the following DTO:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="src/Dto/MoneyDto.php"',children:"namespace App\\Dto;\n\nclass MoneyDto\n{\n    public function __construct(\n        private string $amount,\n        private string $currency,\n    ) {\n    }\n\n    public function getAmount(): string\n    {\n        return $this->amount;\n    }\n\n    public function getCurrency(): string\n    {\n        return $this->currency;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can create the transformer as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="src/Mapper/MoneyToMoneyDtoTransformer.php"',children:"namespace App\\Mapper;\n\nuse Brick\\Money\\Money;\nuse Rekalogika\\Mapper\\Context\\Context;\nuse Rekalogika\\Mapper\\Contracts\\TransformerInterface;\nuse Rekalogika\\Mapper\\Contracts\\TypeMapping;\nuse Rekalogika\\Mapper\\Util\\TypeCheck;\nuse Rekalogika\\Mapper\\Util\\TypeFactory;\nuse Symfony\\Component\\PropertyInfo\\Type;\n\nclass MoneyToMoneyDtoTransformer implements TransformerInterface\n{\n    // This tells the library that this transformer supports the transformation\n    // from the Money object to the MoneyDto object, and vice versa.\n    //\n    // The TypeFactory methods are convenience methods for creating the\n    // PropertyInfo Type objects.\n\n    public function getSupportedTransformation(): iterable\n    {\n\n        yield new TypeMapping(\n            TypeFactory::objectOfClass(Money::class),\n            TypeFactory::objectOfClass(MoneyDto::class)\n        );\n\n        yield new TypeMapping(\n            TypeFactory::objectOfClass(MoneyDto::class),\n            TypeFactory::objectOfClass(Money::class)\n        );\n    }\n\n    // This method is called when the mapper is trying to transform Money to\n    // MoneyDto, and vice versa.\n    //\n    // The $source and $target parameters are the source and target objects,\n    // respectively. $target is usually null, unless there is already an\n    // existing value in the target object.\n    //\n    // $sourceType and $targetType are the types of the source and target, in\n    // the form of PropertyInfo Type object.\n    //\n    // The TypeCheck class is a convenience class for verifying the type\n    // specified by a Type object.\n\n    public function transform(\n        mixed $source,\n        mixed $target,\n        ?Type $sourceType,\n        ?Type $targetType,\n        Context $context\n    ): mixed {\n        if (\n            $source instanceof Money\n            && TypeCheck::isObjectOfType($targetType, MoneyDto::class)\n        ) {\n            return new MoneyDto(\n                amount: $source->getAmount()->__toString(),\n                currency: $source->getCurrency()->getCurrencyCode(),\n            );\n        }\n\n        if (\n            $source instanceof MoneyDto\n            && TypeCheck::isObjectOfType($targetType, Money::class)\n        ) {\n            return Money::of(\n                $source->getAmount(),\n                $source->getCurrency()\n            );\n        }\n\n        throw new InvalidArgumentException('Unsupported transformation');\n    }\n}\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"registering-the-transformer",children:"Registering the Transformer"}),"\n",(0,r.jsxs)(n.p,{children:["If you are not using autoconfiguration, you need to register the transformer\nand add the ",(0,r.jsx)(n.code,{children:"rekalogika.mapper.transformer"})," tag:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="config/services.yaml"',children:"services:\n    App\\Mapper\\MoneyToMoneyDtoTransformer:\n        tags:\n            - { name: rekalogika.mapper.transformer, priority: 0 }\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The default priority is ",(0,r.jsx)(n.code,{children:"0"}),". The higher the priority, the mapping supplied by\nthe transformer will be considered earlier."]})}),"\n",(0,r.jsxs)(n.p,{children:["If you are using autoconfiguration, you can use the ",(0,r.jsx)(n.code,{children:"#[AsTaggedItem]"})," attribute\nto set its priority."]}),"\n",(0,r.jsx)(n.h2,{id:"verifying",children:"Verifying"}),"\n",(0,r.jsxs)(n.p,{children:["To verify that the transformer is registered, you can use the ",(0,r.jsx)(n.code,{children:"debug:container"}),"\ncommand:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"php bin/console debug:container --tag=rekalogika.mapper.transformer\n"})}),"\n",(0,r.jsx)(n.p,{children:"Also, you can verify the existence of the transformer in the mapping table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"php bin/console rekalogika:mapper:mapping\n"})}),"\n",(0,r.jsx)(n.h2,{id:"delegating-mapping-to-the-main-transformer",children:"Delegating Mapping to the Main Transformer"}),"\n",(0,r.jsxs)(n.p,{children:["Your transformer does not need to do everything. You can delegate the mapping of\nproperties or other objects back to the main transformer. To accomplish this,\nyour transformer needs to implement ",(0,r.jsx)(n.code,{children:"MainTransformerAwareInterface"}),". We also\nprovide ",(0,r.jsx)(n.code,{children:"MainTransformerAwareTrait"})," to help you with that:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="src/Mapper/MyObjectToMyDtoTransformer.php"',children:"namespace App\\Mapper;\n\nuse Rekalogika\\Mapper\\Context\\Context;\nuse Rekalogika\\Mapper\\Contracts\\MainTransformerAwareInterface;\nuse Rekalogika\\Mapper\\Contracts\\MainTransformerInterface;\nuse Rekalogika\\Mapper\\Contracts\\TransformerInterface;\nuse Symfony\\Component\\PropertyInfo\\PropertyTypeExtractorInterface;\n\nclass MyObjectToMyDtoTransformer implements\n    TransformerInterface,\n    // highlight-next-line\n    MainTransformerAwareInterface\n{\n    // highlight-next-line\n    use MainTransformerAwareTrait;\n\n    public function __construct(\n        // highlight-start\n        // need this to identify target property types\n        private PropertyTypeExtractorInterface $propertyTypeExtractor,\n        // highlight-end\n    ){\n    }\n\n    public function transform(\n        mixed $source,\n        mixed $target,\n        ?Type $sourceType,\n        ?Type $targetType,\n        Context $context\n    ): mixed {\n        // ...\n\n        // highlight-start\n        // identify the target property types\n        $targetPropertyTypes = $this->propertyTypeExtractor\n            ->getTypes($target, 'someProperty');\n\n        // the delegation to the main transformer\n        $result = $this->getMainTransformer()->transform(\n            source: $source->getSomeProperty(),\n            target: null, // unless there is already an existing value in\n                          // the target object\n            targetTypes: $targetPropertyTypes,\n            context: $context\n        );\n\n        // saves the result to the target object\n        $target->someProperty = $result;\n        // highlight-end\n\n        // ...\n\n        return $target;\n    }\n\n    // ...\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"variant-target-matching",children:"Variant Target Matching"}),"\n",(0,r.jsxs)(n.p,{children:["By default, the target in the mapping is invariant. This means that the target\nmust be the same as the target specified in the mapping. For example, the\nmapping ",(0,r.jsx)(n.code,{children:"MoneyToMoneyDtoTransformer"})," above is invariant. It will only process\nthe source if the target is type-hinted ",(0,r.jsx)(n.code,{children:"MoneyDto"}),", but not any of its\nsubclasses."]}),"\n",(0,r.jsxs)(n.p,{children:["To get a variant matching, set the third parameter of ",(0,r.jsx)(n.code,{children:"TypeMapping"})," to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"use Brick\\Money\\Money;\nuse Rekalogika\\Mapper\\Contracts\\TransformerInterface;\nuse Rekalogika\\Mapper\\Contracts\\TypeMapping;\nuse Rekalogika\\Mapper\\Util\\TypeFactory;\n\nclass MoneyToMoneyDtoTransformer implements TransformerInterface\n{\n    // ...\n\n    public function getSupportedTransformation(): iterable\n    {\n\n        yield new TypeMapping(\n            TypeFactory::objectOfClass(Money::class),\n            TypeFactory::objectOfClass(MoneyDto::class),\n            // highlight-next-line\n            true\n        );\n    }\n\n    // ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above, if the target is type-hinted to a subclass of ",(0,r.jsx)(n.code,{children:"MoneyDto"}),",\nthe transformer will still be considered."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"The source is always variant."})}),"\n",(0,r.jsx)(n.h2,{id:"caching-and-circular-references-detection",children:"Caching and Circular References Detection"}),"\n",(0,r.jsx)(n.p,{children:"If you delegate the mapping of the property of your object, your transformer\nshould add the resulting object to the cache right after instantiation, but\nbefore mapping its properties. This is done to prevent infinite recursion when\nthere is a circular reference in the source object."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="src/Mapper/MyObjectToMyDtoTransformer.php"',children:"namespace App\\Mapper;\n\nuse Rekalogika\\Mapper\\Context\\Context;\nuse Rekalogika\\Mapper\\Contracts\\MainTransformerAwareInterface;\nuse Rekalogika\\Mapper\\Contracts\\MainTransformerInterface;\nuse Rekalogika\\Mapper\\Contracts\\TransformerInterface;\nuse Symfony\\Component\\PropertyInfo\\PropertyTypeExtractorInterface;\n\nclass MyObjectToMyDtoTransformer implements\n    TransformerInterface,\n{\n    public function transform(\n        mixed $source,\n        mixed $target,\n        ?Type $sourceType,\n        ?Type $targetType,\n        Context $context\n    ): mixed {\n        // ...\n\n        // instantiate the target object\n        $target = new MyDto();\n\n        // highlight-start\n        // add it to the cache\n        $context(ObjectCache::class)\n            ->saveTarget($source, $targetType, $target);\n        // highlight-end\n\n        // delegate the work of mapping the property to the main transformer\n        $target->property = $this->getMainTransformer()->transform(\n            source: $source->getProperty(),\n            target: $target->property,\n            targetTypes: $this->propertyTypeExtractor\n                ->getTypes($target, 'property');\n            context: $context\n        );\n\n        return $target;\n    }\n\n    // ...\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"attribute-matching",children:"Attribute Matching"}),"\n",(0,r.jsxs)(n.p,{children:["You can also match classes using attributes in your transformers, in addition\nto using class names. The prerequisite is that your attribute needs to implement\n",(0,r.jsx)(n.code,{children:"MapperAttributeInterface"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="src/Attribute/MyAttribute.php"',children:"use Rekalogika\\Mapper\\Attribute\\MapperAttributeInterface;\n\n#[\\Attribute(\\Attribute::TARGET_CLASS)]\nclass SomeAttribute implements MapperAttributeInterface\n{\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then you can use it as if it is the object's class name in your\n",(0,r.jsx)(n.code,{children:"getSupportedTransformation()"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="src/Mapper/MyObjectToMyDtoTransformer.php"',children:"use Rekalogika\\Mapper\\Context\\Context;\nuse Rekalogika\\Mapper\\Contracts\\TransformerInterface;\nuse Rekalogika\\Mapper\\Contracts\\TypeMapping;\nuse Rekalogika\\Mapper\\Util\\TypeCheck;\nuse Rekalogika\\Mapper\\Util\\TypeFactory;\nuse Symfony\\Component\\PropertyInfo\\Type;\n\nclass MyObjectToMyDtoTransformer implements TransformerInterface\n{\n    // ...\n\n    public function getSupportedTransformation(): iterable\n    {\n        yield new TypeMapping(\n            TypeFactory::objectOfClass(SomeAttribute::class),\n            TypeFactory::objectOfClass(SomeDto::class)\n        );\n    }\n\n    // ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When using attributes, the ",(0,r.jsx)(n.code,{children:"$sourceType"})," and ",(0,r.jsx)(n.code,{children:"$targetType"})," parameters in the\n",(0,r.jsx)(n.code,{children:"transform()"})," method will refer to the type of the attribute, not the object."]}),"\n",(0,r.jsx)(n.h2,{id:"refusal-to-transform",children:"Refusal to Transform"}),"\n",(0,r.jsxs)(n.p,{children:["If the transformer throws ",(0,r.jsx)(n.code,{children:"RefuseToHandleException"}),", the ",(0,r.jsx)(n.code,{children:"MainTransformer"})," will\npass the mapping to the next transformer in the priority chain."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="src/Mapper/MyObjectToMyDtoTransformer.php"',children:"namespace App\\Mapper;\n\nuse Rekalogika\\Mapper\\Context\\Context;\nuse Rekalogika\\Mapper\\Contracts\\TransformerInterface;\n\nclass MyObjectToMyDtoTransformer implements\n    TransformerInterface,\n{\n    public function transform(\n        mixed $source,\n        mixed $target,\n        ?Type $sourceType,\n        ?Type $targetType,\n        Context $context\n    ): mixed {\n        if ($source instanceof MyObject) {\n            // highlight-next-line\n            throw new RefuseToHandleException();\n        }\n\n        // ...\n\n    }\n\n    // ...\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"property-path",children:"Property Path"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MainInterface::transform()"})," has an optional ",(0,r.jsx)(n.code,{children:"$path"})," parameter. If your\ntransformer defers the mapping of a property to the main transformer, you should\npass the property name to this parameter. It will be used for tracing and for\ngenerating a meaningful exception message if the mapping fails."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="src/Mapper/MyObjectToMyDtoTransformer.php"',children:"namespace App\\Mapper;\n\nuse Rekalogika\\Mapper\\Context\\Context;\nuse Rekalogika\\Mapper\\Contracts\\TransformerInterface;\n\nclass MyObjectToMyDtoTransformer implements\n    TransformerInterface,\n{\n    public function transform(\n        mixed $source,\n        mixed $target,\n        ?Type $sourceType,\n        ?Type $targetType,\n        Context $context\n    ): mixed {\n        // ...\n\n        // delegate the work of mapping the property to the main transformer\n        $target->someProperty = $this->getMainTransformer()->transform(\n            source: $source->getProperty(),\n            target: $target->someProperty,\n            targetTypes: $this->propertyTypeExtractor\n                ->getTypes($target, 'someProperty');\n            context: $context,\n            // highlight-next-line\n            path: 'someProperty'\n        );\n\n        return $target;\n    }\n\n    // ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If your target object is an array-like object, you should use the ",(0,r.jsx)(n.code,{children:"[n]"}),"\nnotation:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",metastring:'title="src/Mapper/MyObjectToMyDtoTransformer.php"',children:"namespace App\\Mapper;\n\nuse Rekalogika\\Mapper\\Context\\Context;\nuse Rekalogika\\Mapper\\Contracts\\TransformerInterface;\n\nclass MyObjectToMyDtoTransformer implements\n    TransformerInterface,\n{\n    public function transform(\n        mixed $source,\n        mixed $target,\n        ?Type $sourceType,\n        ?Type $targetType,\n        Context $context\n    ): mixed {\n        // ...\n\n        // delegate the work of mapping the array key to the main transformer\n        $target[$key] = $this->getMainTransformer()->transform(\n            source: $source[$key],\n            target: $target[$key],\n            targetTypes: $targetTypes,\n            context: $context,\n            // highlight-next-line\n            path: sprintf('[%s]', $key)\n        );\n\n        return $target;\n    }\n\n    // ...\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(7294);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
[@entur-partner/products-models](../README.md) / [types/interfaces](../modules/types_interfaces.md) / GenericParameterAssignmentData

# Interface: GenericParameterAssignmentData

[types/interfaces](../modules/types_interfaces.md).GenericParameterAssignmentData

## Hierarchy

- [`BaseModelData`](types_interfaces.BaseModelData.md)

  ↳ **`GenericParameterAssignmentData`**

## Properties

### canIgnoreInOffering

• `Optional` **canIgnoreInOffering**: `boolean`

#### Defined in

src/types/interfaces.ts:482

___

### changed

• **changed**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[changed](types_interfaces.BaseModelData.md#changed)

#### Defined in

src/types/interfaces.ts:124

___

### chargingBasisType

• **chargingBasisType**: [`ChargingBasisType`](../enums/types_enums.ChargingBasisType.md)

#### Defined in

src/types/interfaces.ts:473

___

### codeSpace

• **codeSpace**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[codeSpace](types_interfaces.BaseModelData.md#codespace)

#### Defined in

src/types/interfaces.ts:121

___

### comparisonOperatorVariant

• `Optional` **comparisonOperatorVariant**: [`GpaComparisonOperatorVariant`](../enums/types_enums.GpaComparisonOperatorVariant.md)

#### Defined in

src/types/interfaces.ts:483

___

### created

• **created**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[created](types_interfaces.BaseModelData.md#created)

#### Defined in

src/types/interfaces.ts:123

___

### description

• **description**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[description](types_interfaces.BaseModelData.md#description)

#### Defined in

src/types/interfaces.ts:128

___

### fareStructureElementRef

• `Optional` **fareStructureElementRef**: [`default`](../classes/models_Reference.default.md)

#### Defined in

src/types/interfaces.ts:477

___

### id

• **id**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[id](types_interfaces.BaseModelData.md#id)

#### Defined in

src/types/interfaces.ts:119

___

### includes

• **includes**: [`default`](../classes/models_GenericParameterAssignment.default.md)[]

#### Defined in

src/types/interfaces.ts:470

___

### includesGroupingType

• **includesGroupingType**: [`LogicalOperator`](../enums/types_enums.LogicalOperator.md)

#### Defined in

src/types/interfaces.ts:471

___

### limitationGroupingType

• **limitationGroupingType**: [`LogicalOperator`](../enums/types_enums.LogicalOperator.md)

#### Defined in

src/types/interfaces.ts:465

___

### limitationType

• **limitationType**: `string`

#### Defined in

src/types/interfaces.ts:476

___

### limitations

• **limitations**: [`default`](../classes/models_Reference.default.md)[]

#### Defined in

src/types/interfaces.ts:464

___

### modification

• **modification**: [`Modification`](../enums/types_enums.Modification.md)

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[modification](types_interfaces.BaseModelData.md#modification)

#### Defined in

src/types/interfaces.ts:125

___

### name

• **name**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[name](types_interfaces.BaseModelData.md#name)

#### Defined in

src/types/interfaces.ts:127

___

### nameOfClass

• **nameOfClass**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[nameOfClass](types_interfaces.BaseModelData.md#nameofclass)

#### Defined in

src/types/interfaces.ts:122

___

### parentParameterAssignmentRef

• `Optional` **parentParameterAssignmentRef**: [`default`](../classes/models_Reference.default.md)

#### Defined in

src/types/interfaces.ts:472

___

### requiredElements

• `Optional` **requiredElements**: [`RequiredElement`](../enums/types_enums.RequiredElement.md)[]

#### Defined in

src/types/interfaces.ts:481

___

### requiredInContext

• `Optional` **requiredInContext**: [`RequiredInContext`](../enums/types_enums.RequiredInContext.md)

#### Defined in

src/types/interfaces.ts:479

___

### requiredType

• `Optional` **requiredType**: [`RequiredType`](../enums/types_enums.RequiredType.md)

#### Defined in

src/types/interfaces.ts:478

___

### state

• **state**: [`State`](../enums/types_enums.State.md)

#### Defined in

src/types/interfaces.ts:474

___

### status

• **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[status](types_interfaces.BaseModelData.md#status)

#### Defined in

src/types/interfaces.ts:126

___

### temporalValidityParameters

• **temporalValidityParameters**: [`default`](../classes/models_TemporalValidityParameter.default.md)[]

#### Defined in

src/types/interfaces.ts:469

___

### uses

• **uses**: [`GenericParameterAssignmentUsesType`](../modules/types_types.md#genericparameterassignmentusestype)

#### Defined in

src/types/interfaces.ts:475

___

### validityParameterAssignmentType

• **validityParameterAssignmentType**: [`ComparisonOperator`](../enums/types_enums.ComparisonOperator.md)

#### Defined in

src/types/interfaces.ts:468

___

### validityParameterGroupingType

• **validityParameterGroupingType**: [`LogicalOperatorWithNone`](../enums/types_enums.LogicalOperatorWithNone.md)

#### Defined in

src/types/interfaces.ts:467

___

### validityParameterSetSelectionType

• **validityParameterSetSelectionType**: [`SetOperator`](../enums/types_enums.SetOperator.md)

#### Defined in

src/types/interfaces.ts:480

___

### validityParameters

• **validityParameters**: [`default`](../classes/models_ScopingValidityParameter.default.md)[]

#### Defined in

src/types/interfaces.ts:466

___

### version

• **version**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[version](types_interfaces.BaseModelData.md#version)

#### Defined in

src/types/interfaces.ts:120

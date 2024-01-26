[@entur-partner/products-models](../README.md) / [types/interfaces](../modules/types_interfaces.md) / RefundingData

# Interface: RefundingData

[types/interfaces](../modules/types_interfaces.md).RefundingData

## Hierarchy

- [`BaseModelData`](types_interfaces.BaseModelData.md)

  ↳ **`RefundingData`**

## Properties

### allowed

• **allowed**: [`ResellType`](../enums/types_enums.ResellType.md)

#### Defined in

[src/types/interfaces.ts:559](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L559)

___

### canChangeClass

• **canChangeClass**: `boolean`

#### Defined in

[src/types/interfaces.ts:558](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L558)

___

### changed

• **changed**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[changed](types_interfaces.BaseModelData.md#changed)

#### Defined in

[src/types/interfaces.ts:124](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L124)

___

### codeSpace

• **codeSpace**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[codeSpace](types_interfaces.BaseModelData.md#codespace)

#### Defined in

[src/types/interfaces.ts:121](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L121)

___

### created

• **created**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[created](types_interfaces.BaseModelData.md#created)

#### Defined in

[src/types/interfaces.ts:123](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L123)

___

### description

• **description**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[description](types_interfaces.BaseModelData.md#description)

#### Defined in

[src/types/interfaces.ts:128](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L128)

___

### exchangeableFromAnyTime

• **exchangeableFromAnyTime**: `boolean`

#### Defined in

[src/types/interfaces.ts:565](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L565)

___

### exchangeableFromDuration

• **exchangeableFromDuration**: `string`

#### Defined in

[src/types/interfaces.ts:562](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L562)

___

### exchangeableUntilAnyTime

• **exchangeableUntilAnyTime**: `boolean`

#### Defined in

[src/types/interfaces.ts:566](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L566)

___

### exchangeableUntilDuration

• **exchangeableUntilDuration**: `string`

#### Defined in

[src/types/interfaces.ts:563](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L563)

___

### fareFrameRef

• **fareFrameRef**: [`default`](../classes/models_Reference.default.md)

#### Defined in

[src/types/interfaces.ts:554](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L554)

___

### fareTableRefs

• **fareTableRefs**: [`default`](../classes/models_Reference.default.md)[]

#### Defined in

[src/types/interfaces.ts:555](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L555)

___

### hasFee

• **hasFee**: `boolean`

#### Defined in

[src/types/interfaces.ts:561](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L561)

___

### id

• **id**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[id](types_interfaces.BaseModelData.md#id)

#### Defined in

[src/types/interfaces.ts:119](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L119)

___

### limitingRule

• **limitingRule**: [`default`](../classes/models_LimitingRule.default.md)

#### Defined in

[src/types/interfaces.ts:557](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L557)

___

### limitingRuleRef

• **limitingRuleRef**: [`default`](../classes/models_Reference.default.md)

#### Defined in

[src/types/interfaces.ts:556](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L556)

___

### modification

• **modification**: [`Modification`](../enums/types_enums.Modification.md)

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[modification](types_interfaces.BaseModelData.md#modification)

#### Defined in

[src/types/interfaces.ts:125](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L125)

___

### name

• **name**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[name](types_interfaces.BaseModelData.md#name)

#### Defined in

[src/types/interfaces.ts:127](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L127)

___

### nameOfClass

• **nameOfClass**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[nameOfClass](types_interfaces.BaseModelData.md#nameofclass)

#### Defined in

[src/types/interfaces.ts:122](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L122)

___

### onlyAtCertainDistributionPoints

• **onlyAtCertainDistributionPoints**: `boolean`

#### Defined in

[src/types/interfaces.ts:564](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L564)

___

### prices

• **prices**: [`default`](../classes/models_FarePrice.default.md)[]

#### Defined in

[src/types/interfaces.ts:552](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L552)

___

### refundBasis

• **refundBasis**: [`RefundBasis`](../enums/types_enums.RefundBasis.md)

#### Defined in

[src/types/interfaces.ts:567](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L567)

___

### refundType

• **refundType**: [`RefundType`](../enums/types_enums.RefundType.md)

#### Defined in

[src/types/interfaces.ts:551](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L551)

___

### resellWhen

• **resellWhen**: [`ResellWhen`](../enums/types_enums.ResellWhen.md)

#### Defined in

[src/types/interfaces.ts:553](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L553)

___

### status

• **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[status](types_interfaces.BaseModelData.md#status)

#### Defined in

[src/types/interfaces.ts:126](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L126)

___

### unusedTicketsOnly

• **unusedTicketsOnly**: `boolean`

#### Defined in

[src/types/interfaces.ts:560](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L560)

___

### version

• **version**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[version](types_interfaces.BaseModelData.md#version)

#### Defined in

[src/types/interfaces.ts:120](https://github.com/entur/products-models/blob/main/src/types/interfaces.ts#L120)

[@entur-partner/products-models](../README.md) / [types/interfaces](../modules/types_interfaces.md) / ExchangingData

# Interface: ExchangingData

[types/interfaces](../modules/types_interfaces.md).ExchangingData

## Hierarchy

- [`BaseModelData`](types_interfaces.BaseModelData.md)

  ↳ **`ExchangingData`**

## Properties

### allowed

• **allowed**: [`ExchangingAllowed`](../enums/types_enums.ExchangingAllowed.md)

#### Defined in

src/types/interfaces.ts:277

___

### canChangeClass

• `Optional` **canChangeClass**: `boolean`

#### Defined in

src/types/interfaces.ts:283

___

### changed

• **changed**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[changed](types_interfaces.BaseModelData.md#changed)

#### Defined in

src/types/interfaces.ts:124

___

### codeSpace

• **codeSpace**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[codeSpace](types_interfaces.BaseModelData.md#codespace)

#### Defined in

src/types/interfaces.ts:121

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

### exchangeableFromAnyTime

• `Optional` **exchangeableFromAnyTime**: `boolean`

#### Defined in

src/types/interfaces.ts:285

___

### exchangeableFromDuration

• `Optional` **exchangeableFromDuration**: `string`

#### Defined in

src/types/interfaces.ts:280

___

### exchangeableTo

• `Optional` **exchangeableTo**: [`ExchangeableTo`](../enums/types_enums.ExchangeableTo.md)

#### Defined in

src/types/interfaces.ts:290

___

### exchangeableUntilAnyTime

• `Optional` **exchangeableUntilAnyTime**: `boolean`

#### Defined in

src/types/interfaces.ts:286

___

### exchangeableUntilDuration

• `Optional` **exchangeableUntilDuration**: `string`

#### Defined in

src/types/interfaces.ts:281

___

### fareFrameRef

• **fareFrameRef**: [`default`](../classes/models_Reference.default.md)

#### Defined in

src/types/interfaces.ts:274

___

### fareTableRefs

• **fareTableRefs**: [`default`](../classes/models_Reference.default.md)[]

#### Defined in

src/types/interfaces.ts:275

___

### hasFee

• `Optional` **hasFee**: `boolean`

#### Defined in

src/types/interfaces.ts:279

___

### id

• **id**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[id](types_interfaces.BaseModelData.md#id)

#### Defined in

src/types/interfaces.ts:119

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

### numberOfExchangesAllowed

• `Optional` **numberOfExchangesAllowed**: `number`

#### Defined in

src/types/interfaces.ts:288

___

### onlyAtCertainDistributionPoints

• `Optional` **onlyAtCertainDistributionPoints**: `boolean`

#### Defined in

src/types/interfaces.ts:284

___

### prices

• **prices**: [`default`](../classes/models_FarePrice.default.md)[]

#### Defined in

src/types/interfaces.ts:276

___

### refundBasis

• `Optional` **refundBasis**: [`RefundBasis`](../enums/types_enums.RefundBasis.md)

#### Defined in

src/types/interfaces.ts:287

___

### resellWhen

• `Optional` **resellWhen**: [`ResellWhen`](../enums/types_enums.ResellWhen.md)

#### Defined in

src/types/interfaces.ts:282

___

### specifiedProducts

• `Optional` **specifiedProducts**: `string`[]

#### Defined in

src/types/interfaces.ts:291

___

### status

• **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[status](types_interfaces.BaseModelData.md#status)

#### Defined in

src/types/interfaces.ts:126

___

### toFareClass

• `Optional` **toFareClass**: [`FareClass`](../enums/types_enums.FareClass.md)

#### Defined in

src/types/interfaces.ts:289

___

### unusedTicketsOnly

• `Optional` **unusedTicketsOnly**: `boolean`

#### Defined in

src/types/interfaces.ts:278

___

### version

• **version**: `string`

#### Inherited from

[BaseModelData](types_interfaces.BaseModelData.md).[version](types_interfaces.BaseModelData.md#version)

#### Defined in

src/types/interfaces.ts:120

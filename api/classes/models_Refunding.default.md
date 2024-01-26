[@entur-partner/products-models](../README.md) / [models/Refunding](../modules/models_Refunding.md) / default

# Class: default

[models/Refunding](../modules/models_Refunding.md).default

## Hierarchy

- [`default`](models_BaseModel.default.md)

  ↳ **`default`**

## Constructors

### constructor

• **new default**(`data?`): [`default`](models_Refunding.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`RefundingData`](../interfaces/types_interfaces.RefundingData.md)\> |

#### Returns

[`default`](models_Refunding.default.md)

#### Overrides

[default](models_BaseModel.default.md).[constructor](models_BaseModel.default.md#constructor)

#### Defined in

src/models/Refunding.ts:36

## Properties

### allowed

• **allowed**: [`ResellType`](../enums/types_enums.ResellType.md)

#### Defined in

src/models/Refunding.ts:26

___

### canChangeClass

• `Optional` **canChangeClass**: `boolean`

#### Defined in

src/models/Refunding.ts:25

___

### changed

• **changed**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[changed](models_BaseModel.default.md#changed)

#### Defined in

src/models/BaseModel.ts:19

___

### codeSpace

• **codeSpace**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[codeSpace](models_BaseModel.default.md#codespace)

#### Defined in

src/models/BaseModel.ts:16

___

### created

• **created**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[created](models_BaseModel.default.md#created)

#### Defined in

src/models/BaseModel.ts:18

___

### description

• **description**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[default](models_BaseModel.default.md).[description](models_BaseModel.default.md#description)

#### Defined in

src/models/BaseModel.ts:23

___

### exchangeableFromAnyTime

• `Optional` **exchangeableFromAnyTime**: `boolean`

#### Defined in

src/models/Refunding.ts:32

___

### exchangeableFromDuration

• `Optional` **exchangeableFromDuration**: `string`

#### Defined in

src/models/Refunding.ts:29

___

### exchangeableUntilAnyTime

• `Optional` **exchangeableUntilAnyTime**: `boolean`

#### Defined in

src/models/Refunding.ts:33

___

### exchangeableUntilDuration

• `Optional` **exchangeableUntilDuration**: `string`

#### Defined in

src/models/Refunding.ts:30

___

### extraFields

• **extraFields**: `any`

#### Inherited from

[default](models_BaseModel.default.md).[extraFields](models_BaseModel.default.md#extrafields)

#### Defined in

src/models/BaseModel.ts:25

___

### fareFrameRef

• **fareFrameRef**: [`default`](models_Reference.default.md)

#### Defined in

src/models/Refunding.ts:21

___

### fareTableRefs

• **fareTableRefs**: [`default`](models_Reference.default.md)[]

#### Defined in

src/models/Refunding.ts:22

___

### hasFee

• `Optional` **hasFee**: `boolean`

#### Defined in

src/models/Refunding.ts:28

___

### id

• **id**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[id](models_BaseModel.default.md#id)

#### Defined in

src/models/BaseModel.ts:14

___

### limitingRule

• `Optional` **limitingRule**: [`default`](models_LimitingRule.default.md)

#### Defined in

src/models/Refunding.ts:24

___

### limitingRuleRef

• `Optional` **limitingRuleRef**: [`default`](models_Reference.default.md)

#### Defined in

src/models/Refunding.ts:23

___

### modification

• **modification**: [`Modification`](../enums/types_enums.Modification.md)

#### Inherited from

[default](models_BaseModel.default.md).[modification](models_BaseModel.default.md#modification)

#### Defined in

src/models/BaseModel.ts:20

___

### name

• **name**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[default](models_BaseModel.default.md).[name](models_BaseModel.default.md#name)

#### Defined in

src/models/BaseModel.ts:22

___

### nameOfClass

• **nameOfClass**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[nameOfClass](models_BaseModel.default.md#nameofclass)

#### Defined in

src/models/BaseModel.ts:17

___

### onlyAtCertainDistributionPoints

• `Optional` **onlyAtCertainDistributionPoints**: `boolean`

#### Defined in

src/models/Refunding.ts:31

___

### prices

• **prices**: [`default`](models_FarePrice.default.md)[]

#### Defined in

src/models/Refunding.ts:20

___

### refundBasis

• `Optional` **refundBasis**: [`RefundBasis`](../enums/types_enums.RefundBasis.md)

#### Defined in

src/models/Refunding.ts:34

___

### refundType

• `Optional` **refundType**: [`RefundType`](../enums/types_enums.RefundType.md)

#### Defined in

src/models/Refunding.ts:18

___

### resellWhen

• `Optional` **resellWhen**: [`ResellWhen`](../enums/types_enums.ResellWhen.md)

#### Defined in

src/models/Refunding.ts:19

___

### status

• **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Inherited from

[default](models_BaseModel.default.md).[status](models_BaseModel.default.md#status)

#### Defined in

src/models/BaseModel.ts:21

___

### unusedTicketsOnly

• `Optional` **unusedTicketsOnly**: `boolean`

#### Defined in

src/models/Refunding.ts:27

___

### version

• `Optional` **version**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[version](models_BaseModel.default.md#version)

#### Defined in

src/models/BaseModel.ts:15

## Methods

### toPayload

▸ **toPayload**(`fareFrame`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fareFrame` | [`default`](models_FareFrame.default.md) |

#### Returns

`any`

#### Overrides

[default](models_BaseModel.default.md).[toPayload](models_BaseModel.default.md#topayload)

#### Defined in

src/models/Refunding.ts:92

___

### toRef

▸ **toRef**(): [`default`](models_Reference.default.md)

#### Returns

[`default`](models_Reference.default.md)

#### Inherited from

[default](models_BaseModel.default.md).[toRef](models_BaseModel.default.md#toref)

#### Defined in

src/models/BaseModel.ts:147

___

### updateRef

▸ **updateRef**(`refProp`, `bucket`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `refProp` | keyof [`default`](models_Refunding.default.md) |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

`any`

#### Inherited from

[default](models_BaseModel.default.md).[updateRef](models_BaseModel.default.md#updateref)

#### Defined in

src/models/BaseModel.ts:160

___

### updateRefs

▸ **updateRefs**(`bucket`): [`default`](models_Refunding.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

[`default`](models_Refunding.default.md)

#### Inherited from

[default](models_BaseModel.default.md).[updateRefs](models_BaseModel.default.md#updaterefs)

#### Defined in

src/models/BaseModel.ts:156

___

### withChanges

▸ **withChanges**(`args`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `object` |

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withChanges](models_BaseModel.default.md#withchanges)

#### Defined in

src/models/BaseModel.ts:64

___

### withChangesToProperty

▸ **withChangesToProperty**(`property`, `args`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | keyof [`default`](models_Refunding.default.md) |
| `args` | `object` |

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withChangesToProperty](models_BaseModel.default.md#withchangestoproperty)

#### Defined in

src/models/BaseModel.ts:68

___

### withNewId

▸ **withNewId**(): `this`

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withNewId](models_BaseModel.default.md#withnewid)

#### Defined in

src/models/BaseModel.ts:134

___

### withNewIdAndVersion

▸ **withNewIdAndVersion**(`version`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withNewIdAndVersion](models_BaseModel.default.md#withnewidandversion)

#### Defined in

src/models/BaseModel.ts:140

___

### withTranslation

▸ **withTranslation**(`fieldName`, `lang`, `value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | keyof [`default`](models_Refunding.default.md) |
| `lang` | `string` |
| `value` | `string` |

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withTranslation](models_BaseModel.default.md#withtranslation)

#### Defined in

src/models/BaseModel.ts:80

___

### withTranslations

▸ **withTranslations**(`field`, `values`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | keyof [`default`](models_Refunding.default.md) |
| `values` | `Object` |

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withTranslations](models_BaseModel.default.md#withtranslations)

#### Defined in

src/models/BaseModel.ts:110

___

### withVersion

▸ **withVersion**(`newVersion`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newVersion` | `string` \| [`default`](models_Version.default.md) |

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withVersion](models_BaseModel.default.md#withversion)

#### Defined in

src/models/BaseModel.ts:128

___

### getNameOfClass

▸ **getNameOfClass**(): `string`

#### Returns

`string`

#### Defined in

src/models/Refunding.ts:88

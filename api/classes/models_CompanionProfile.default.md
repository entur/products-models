[@entur-partner/products-models](../README.md) / [models/CompanionProfile](../modules/models_CompanionProfile.md) / default

# Class: default

[models/CompanionProfile](../modules/models_CompanionProfile.md).default

## Hierarchy

- [`default`](models_BaseModel.default.md)

  ↳ **`default`**

## Constructors

### constructor

• **new default**(`data?`): [`default`](models_CompanionProfile.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`CompanionProfileData`](../interfaces/types_interfaces.CompanionProfileData.md)\> |

#### Returns

[`default`](models_CompanionProfile.default.md)

#### Overrides

[default](models_BaseModel.default.md).[constructor](models_BaseModel.default.md#constructor)

#### Defined in

src/models/CompanionProfile.ts:24

## Properties

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

### discountBasis

• `Optional` **discountBasis**: [`DiscountBasis`](../enums/types_enums.DiscountBasis.md)

#### Defined in

src/models/CompanionProfile.ts:16

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

src/models/CompanionProfile.ts:19

___

### fareTableRefs

• **fareTableRefs**: [`default`](models_Reference.default.md)[]

#### Defined in

src/models/CompanionProfile.ts:20

___

### generalGroupOfEntities

• `Optional` **generalGroupOfEntities**: [`default`](models_Reference.default.md)

#### Defined in

src/models/CompanionProfile.ts:21

___

### id

• **id**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[id](models_BaseModel.default.md#id)

#### Defined in

src/models/BaseModel.ts:14

___

### maximumNumberOfPersons

• `Optional` **maximumNumberOfPersons**: `number`

#### Defined in

src/models/CompanionProfile.ts:15

___

### minimumNumberOfPersons

• `Optional` **minimumNumberOfPersons**: `number`

#### Defined in

src/models/CompanionProfile.ts:14

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

### parentRef

• `Optional` **parentRef**: [`default`](models_Reference.default.md)

#### Defined in

src/models/CompanionProfile.ts:12

___

### priceType

• **priceType**: [`PriceType`](../enums/types_enums.PriceType.md)

#### Defined in

src/models/CompanionProfile.ts:18

___

### prices

• **prices**: [`default`](models_FarePrice.default.md)[]

#### Defined in

src/models/CompanionProfile.ts:17

___

### status

• **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Inherited from

[default](models_BaseModel.default.md).[status](models_BaseModel.default.md#status)

#### Defined in

src/models/BaseModel.ts:21

___

### ticketing

• `Optional` **ticketing**: [`TicketingType`](../enums/types_enums.TicketingType.md)

#### Defined in

src/models/CompanionProfile.ts:22

___

### userProfileId

• `Optional` **userProfileId**: `string`

#### Defined in

src/models/CompanionProfile.ts:13

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

src/models/CompanionProfile.ts:60

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
| `refProp` | keyof [`default`](models_CompanionProfile.default.md) |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

`any`

#### Inherited from

[default](models_BaseModel.default.md).[updateRef](models_BaseModel.default.md#updateref)

#### Defined in

src/models/BaseModel.ts:160

___

### updateRefs

▸ **updateRefs**(`bucket`): [`default`](models_CompanionProfile.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

[`default`](models_CompanionProfile.default.md)

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
| `property` | keyof [`default`](models_CompanionProfile.default.md) |
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
| `fieldName` | keyof [`default`](models_CompanionProfile.default.md) |
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
| `field` | keyof [`default`](models_CompanionProfile.default.md) |
| `values` | `Object` |

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withTranslations](models_BaseModel.default.md#withtranslations)

#### Defined in

src/models/BaseModel.ts:110

___

### withVersion

▸ **withVersion**(`version`): [`default`](models_CompanionProfile.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |

#### Returns

[`default`](models_CompanionProfile.default.md)

#### Overrides

[default](models_BaseModel.default.md).[withVersion](models_BaseModel.default.md#withversion)

#### Defined in

src/models/CompanionProfile.ts:50

___

### getNameOfClass

▸ **getNameOfClass**(): `string`

#### Returns

`string`

#### Defined in

src/models/CompanionProfile.ts:56

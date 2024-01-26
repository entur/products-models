[@entur-partner/products-models](../README.md) / [models/AvailabilityCondition](../modules/models_AvailabilityCondition.md) / default

# Class: default

[models/AvailabilityCondition](../modules/models_AvailabilityCondition.md).default

## Hierarchy

- [`default`](models_ValidityCondition.default.md)

  ↳ **`default`**

## Constructors

### constructor

• **new default**(`data?`): [`default`](models_AvailabilityCondition.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`AvailabilityConditionData`](../interfaces/types_interfaces.AvailabilityConditionData.md)\> |

#### Returns

[`default`](models_AvailabilityCondition.default.md)

#### Overrides

[default](models_ValidityCondition.default.md).[constructor](models_ValidityCondition.default.md#constructor)

#### Defined in

[src/models/AvailabilityCondition.ts:15](https://github.com/entur/products-models/blob/main/src/models/AvailabilityCondition.ts#L15)

## Properties

### changed

• **changed**: `string`

#### Inherited from

[default](models_ValidityCondition.default.md).[changed](models_ValidityCondition.default.md#changed)

#### Defined in

[src/models/BaseModel.ts:19](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L19)

___

### codeSpace

• **codeSpace**: `string`

#### Inherited from

[default](models_ValidityCondition.default.md).[codeSpace](models_ValidityCondition.default.md#codespace)

#### Defined in

[src/models/BaseModel.ts:16](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L16)

___

### created

• **created**: `string`

#### Inherited from

[default](models_ValidityCondition.default.md).[created](models_ValidityCondition.default.md#created)

#### Defined in

[src/models/BaseModel.ts:18](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L18)

___

### dayTypeRefs

• `Optional` **dayTypeRefs**: [`default`](models_Reference.default.md)[]

#### Defined in

[src/models/AvailabilityCondition.ts:10](https://github.com/entur/products-models/blob/main/src/models/AvailabilityCondition.ts#L10)

___

### description

• **description**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[default](models_ValidityCondition.default.md).[description](models_ValidityCondition.default.md#description)

#### Defined in

[src/models/BaseModel.ts:23](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L23)

___

### extraFields

• **extraFields**: `any`

#### Inherited from

[default](models_ValidityCondition.default.md).[extraFields](models_ValidityCondition.default.md#extrafields)

#### Defined in

[src/models/BaseModel.ts:25](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L25)

___

### fromDate

• **fromDate**: `string`

#### Overrides

[default](models_ValidityCondition.default.md).[fromDate](models_ValidityCondition.default.md#fromdate)

#### Defined in

[src/models/AvailabilityCondition.ts:12](https://github.com/entur/products-models/blob/main/src/models/AvailabilityCondition.ts#L12)

___

### id

• **id**: `string`

#### Inherited from

[default](models_ValidityCondition.default.md).[id](models_ValidityCondition.default.md#id)

#### Defined in

[src/models/BaseModel.ts:14](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L14)

___

### isAvailable

• **isAvailable**: `boolean`

#### Defined in

[src/models/AvailabilityCondition.ts:11](https://github.com/entur/products-models/blob/main/src/models/AvailabilityCondition.ts#L11)

___

### modification

• **modification**: [`Modification`](../enums/types_enums.Modification.md)

#### Inherited from

[default](models_ValidityCondition.default.md).[modification](models_ValidityCondition.default.md#modification)

#### Defined in

[src/models/BaseModel.ts:20](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L20)

___

### name

• **name**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[default](models_ValidityCondition.default.md).[name](models_ValidityCondition.default.md#name)

#### Defined in

[src/models/BaseModel.ts:22](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L22)

___

### nameOfClass

• **nameOfClass**: `string`

#### Inherited from

[default](models_ValidityCondition.default.md).[nameOfClass](models_ValidityCondition.default.md#nameofclass)

#### Defined in

[src/models/BaseModel.ts:17](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L17)

___

### status

• **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Inherited from

[default](models_ValidityCondition.default.md).[status](models_ValidityCondition.default.md#status)

#### Defined in

[src/models/BaseModel.ts:21](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L21)

___

### timebandRefs

• `Optional` **timebandRefs**: [`default`](models_Reference.default.md)[]

#### Defined in

[src/models/AvailabilityCondition.ts:14](https://github.com/entur/products-models/blob/main/src/models/AvailabilityCondition.ts#L14)

___

### toDate

• **toDate**: `string`

#### Overrides

[default](models_ValidityCondition.default.md).[toDate](models_ValidityCondition.default.md#todate)

#### Defined in

[src/models/AvailabilityCondition.ts:13](https://github.com/entur/products-models/blob/main/src/models/AvailabilityCondition.ts#L13)

___

### version

• `Optional` **version**: `string`

#### Inherited from

[default](models_ValidityCondition.default.md).[version](models_ValidityCondition.default.md#version)

#### Defined in

[src/models/BaseModel.ts:15](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L15)

## Methods

### toPayload

▸ **toPayload**(`fareFrame`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fareFrame` | [`default`](models_FareFrame.default.md) |

#### Returns

`any`

#### Inherited from

[default](models_ValidityCondition.default.md).[toPayload](models_ValidityCondition.default.md#topayload)

#### Defined in

[src/models/BaseModel.ts:174](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L174)

___

### toRef

▸ **toRef**(): [`default`](models_Reference.default.md)

#### Returns

[`default`](models_Reference.default.md)

#### Inherited from

[default](models_ValidityCondition.default.md).[toRef](models_ValidityCondition.default.md#toref)

#### Defined in

[src/models/BaseModel.ts:147](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L147)

___

### updateRef

▸ **updateRef**(`refProp`, `bucket`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `refProp` | keyof [`default`](models_AvailabilityCondition.default.md) |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

`any`

#### Inherited from

[default](models_ValidityCondition.default.md).[updateRef](models_ValidityCondition.default.md#updateref)

#### Defined in

[src/models/BaseModel.ts:160](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L160)

___

### updateRefs

▸ **updateRefs**(`bucket`): [`default`](models_AvailabilityCondition.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

[`default`](models_AvailabilityCondition.default.md)

#### Inherited from

[default](models_ValidityCondition.default.md).[updateRefs](models_ValidityCondition.default.md#updaterefs)

#### Defined in

[src/models/BaseModel.ts:156](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L156)

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

[default](models_ValidityCondition.default.md).[withChanges](models_ValidityCondition.default.md#withchanges)

#### Defined in

[src/models/BaseModel.ts:64](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L64)

___

### withChangesToProperty

▸ **withChangesToProperty**(`property`, `args`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | keyof [`default`](models_AvailabilityCondition.default.md) |
| `args` | `object` |

#### Returns

`this`

#### Inherited from

[default](models_ValidityCondition.default.md).[withChangesToProperty](models_ValidityCondition.default.md#withchangestoproperty)

#### Defined in

[src/models/BaseModel.ts:68](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L68)

___

### withNewId

▸ **withNewId**(): `this`

#### Returns

`this`

#### Inherited from

[default](models_ValidityCondition.default.md).[withNewId](models_ValidityCondition.default.md#withnewid)

#### Defined in

[src/models/BaseModel.ts:134](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L134)

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

[default](models_ValidityCondition.default.md).[withNewIdAndVersion](models_ValidityCondition.default.md#withnewidandversion)

#### Defined in

[src/models/BaseModel.ts:140](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L140)

___

### withTranslation

▸ **withTranslation**(`fieldName`, `lang`, `value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | keyof [`default`](models_AvailabilityCondition.default.md) |
| `lang` | `string` |
| `value` | `string` |

#### Returns

`this`

#### Inherited from

[default](models_ValidityCondition.default.md).[withTranslation](models_ValidityCondition.default.md#withtranslation)

#### Defined in

[src/models/BaseModel.ts:80](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L80)

___

### withTranslations

▸ **withTranslations**(`field`, `values`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | keyof [`default`](models_AvailabilityCondition.default.md) |
| `values` | `Object` |

#### Returns

`this`

#### Inherited from

[default](models_ValidityCondition.default.md).[withTranslations](models_ValidityCondition.default.md#withtranslations)

#### Defined in

[src/models/BaseModel.ts:110](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L110)

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

[default](models_ValidityCondition.default.md).[withVersion](models_ValidityCondition.default.md#withversion)

#### Defined in

[src/models/BaseModel.ts:128](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L128)

___

### getNameOfClass

▸ **getNameOfClass**(): `string`

#### Returns

`string`

#### Defined in

[src/models/AvailabilityCondition.ts:37](https://github.com/entur/products-models/blob/main/src/models/AvailabilityCondition.ts#L37)

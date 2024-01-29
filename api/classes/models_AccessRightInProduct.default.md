[@entur/products-models](../README.md) / [models/AccessRightInProduct](../modules/models_AccessRightInProduct.md) / default

# Class: default

[models/AccessRightInProduct](../modules/models_AccessRightInProduct.md).default

Represents an access right associated with a fare product.

## Hierarchy

- [`default`](models_BaseModel.default.md)

  ↳ **`default`**

## Constructors

### constructor

• **new default**(`data?`): [`default`](models_AccessRightInProduct.default.md)

Constructs an instance of AccessRightInProduct.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `Partial`\<[`AccessRightInProductData`](../interfaces/types_interfaces.AccessRightInProductData.md)\> | The data to initialize the instance. |

#### Returns

[`default`](models_AccessRightInProduct.default.md)

#### Overrides

[default](models_BaseModel.default.md).[constructor](models_BaseModel.default.md#constructor)

#### Defined in

[src/models/AccessRightInProduct.ts:55](https://github.com/entur/products-models/blob/main/src/models/AccessRightInProduct.ts#L55)

## Properties

### accessNumber

• `Optional` **accessNumber**: `number`

Access number associated with the access right.

#### Defined in

[src/models/AccessRightInProduct.ts:31](https://github.com/entur/products-models/blob/main/src/models/AccessRightInProduct.ts#L31)

___

### accessNumberIsLimited

• `Optional` **accessNumberIsLimited**: `boolean`

Flag indicating if the access number is limited.

#### Defined in

[src/models/AccessRightInProduct.ts:37](https://github.com/entur/products-models/blob/main/src/models/AccessRightInProduct.ts#L37)

___

### changed

• **changed**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[changed](models_BaseModel.default.md#changed)

#### Defined in

[src/models/BaseModel.ts:19](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L19)

___

### codeSpace

• **codeSpace**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[codeSpace](models_BaseModel.default.md#codespace)

#### Defined in

[src/models/BaseModel.ts:16](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L16)

___

### created

• **created**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[created](models_BaseModel.default.md#created)

#### Defined in

[src/models/BaseModel.ts:18](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L18)

___

### description

• **description**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[default](models_BaseModel.default.md).[description](models_BaseModel.default.md#description)

#### Defined in

[src/models/BaseModel.ts:23](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L23)

___

### extraFields

• **extraFields**: `any`

#### Inherited from

[default](models_BaseModel.default.md).[extraFields](models_BaseModel.default.md#extrafields)

#### Defined in

[src/models/BaseModel.ts:25](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L25)

___

### id

• **id**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[id](models_BaseModel.default.md#id)

#### Defined in

[src/models/BaseModel.ts:14](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L14)

___

### maximumAccess

• `Optional` **maximumAccess**: `number`

Maximum access number allowed.

#### Defined in

[src/models/AccessRightInProduct.ts:49](https://github.com/entur/products-models/blob/main/src/models/AccessRightInProduct.ts#L49)

___

### minimumAccess

• `Optional` **minimumAccess**: `number`

Minimum access number allowed.

#### Defined in

[src/models/AccessRightInProduct.ts:43](https://github.com/entur/products-models/blob/main/src/models/AccessRightInProduct.ts#L43)

___

### modification

• **modification**: [`Modification`](../enums/types_enums.Modification.md)

#### Inherited from

[default](models_BaseModel.default.md).[modification](models_BaseModel.default.md#modification)

#### Defined in

[src/models/BaseModel.ts:20](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L20)

___

### name

• **name**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[default](models_BaseModel.default.md).[name](models_BaseModel.default.md#name)

#### Defined in

[src/models/BaseModel.ts:22](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L22)

___

### nameOfClass

• **nameOfClass**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[nameOfClass](models_BaseModel.default.md#nameofclass)

#### Defined in

[src/models/BaseModel.ts:17](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L17)

___

### preassignedFareProductRef

• **preassignedFareProductRef**: [`default`](models_Reference.default.md)

Reference to the preassigned fare product.

#### Defined in

[src/models/AccessRightInProduct.ts:19](https://github.com/entur/products-models/blob/main/src/models/AccessRightInProduct.ts#L19)

___

### status

• **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Inherited from

[default](models_BaseModel.default.md).[status](models_BaseModel.default.md#status)

#### Defined in

[src/models/BaseModel.ts:21](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L21)

___

### validableElementRef

• **validableElementRef**: [`default`](models_Reference.default.md)

Reference to the validable element.

#### Defined in

[src/models/AccessRightInProduct.ts:25](https://github.com/entur/products-models/blob/main/src/models/AccessRightInProduct.ts#L25)

___

### version

• `Optional` **version**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[version](models_BaseModel.default.md#version)

#### Defined in

[src/models/BaseModel.ts:15](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L15)

## Methods

### toPayload

▸ **toPayload**(`fareFrame`): `object`

Converts the instance to a payload, with special handling for name and description.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fareFrame` | [`default`](models_FareFrame.default.md) | The fare frame associated with the access right. |

#### Returns

`object`

- The payload representing the instance.

#### Overrides

[default](models_BaseModel.default.md).[toPayload](models_BaseModel.default.md#topayload)

#### Defined in

[src/models/AccessRightInProduct.ts:112](https://github.com/entur/products-models/blob/main/src/models/AccessRightInProduct.ts#L112)

___

### toRef

▸ **toRef**(): [`default`](models_Reference.default.md)

#### Returns

[`default`](models_Reference.default.md)

#### Inherited from

[default](models_BaseModel.default.md).[toRef](models_BaseModel.default.md#toref)

#### Defined in

[src/models/BaseModel.ts:147](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L147)

___

### updateRef

▸ **updateRef**(`refProp`, `bucket`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `refProp` | keyof [`default`](models_AccessRightInProduct.default.md) |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

`any`

#### Inherited from

[default](models_BaseModel.default.md).[updateRef](models_BaseModel.default.md#updateref)

#### Defined in

[src/models/BaseModel.ts:160](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L160)

___

### updateRefs

▸ **updateRefs**(`bucket`): `this`

Updates references in the instance based on the bucket.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) | The bucket containing references. |

#### Returns

`this`

- The updated instance.

#### Overrides

[default](models_BaseModel.default.md).[updateRefs](models_BaseModel.default.md#updaterefs)

#### Defined in

[src/models/AccessRightInProduct.ts:97](https://github.com/entur/products-models/blob/main/src/models/AccessRightInProduct.ts#L97)

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

[src/models/BaseModel.ts:64](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L64)

___

### withChangesToProperty

▸ **withChangesToProperty**(`property`, `args`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | keyof [`default`](models_AccessRightInProduct.default.md) |
| `args` | `object` |

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withChangesToProperty](models_BaseModel.default.md#withchangestoproperty)

#### Defined in

[src/models/BaseModel.ts:68](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L68)

___

### withNewId

▸ **withNewId**(): `this`

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withNewId](models_BaseModel.default.md#withnewid)

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

[default](models_BaseModel.default.md).[withNewIdAndVersion](models_BaseModel.default.md#withnewidandversion)

#### Defined in

[src/models/BaseModel.ts:140](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L140)

___

### withTranslation

▸ **withTranslation**(`fieldName`, `lang`, `value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | keyof [`default`](models_AccessRightInProduct.default.md) |
| `lang` | `string` |
| `value` | `string` |

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withTranslation](models_BaseModel.default.md#withtranslation)

#### Defined in

[src/models/BaseModel.ts:80](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L80)

___

### withTranslations

▸ **withTranslations**(`field`, `values`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | keyof [`default`](models_AccessRightInProduct.default.md) |
| `values` | `Object` |

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withTranslations](models_BaseModel.default.md#withtranslations)

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

[default](models_BaseModel.default.md).[withVersion](models_BaseModel.default.md#withversion)

#### Defined in

[src/models/BaseModel.ts:128](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L128)

___

### getNameOfClass

▸ **getNameOfClass**(): `string`

Gets the name of the class.

#### Returns

`string`

- The name of the class.

**`Static`**

#### Defined in

[src/models/AccessRightInProduct.ts:88](https://github.com/entur/products-models/blob/main/src/models/AccessRightInProduct.ts#L88)

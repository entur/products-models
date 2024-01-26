[@entur-partner/products-models](../README.md) / [models/FareStructureElement](../modules/models_FareStructureElement.md) / default

# Class: default

[models/FareStructureElement](../modules/models_FareStructureElement.md).default

## Hierarchy

- [`default`](models_Dorito.default.md)

  ↳ **`default`**

## Constructors

### constructor

• **new default**(`data?`): [`default`](models_FareStructureElement.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`FareStructureElementData`](../interfaces/types_interfaces.FareStructureElementData.md)\> |

#### Returns

[`default`](models_FareStructureElement.default.md)

#### Overrides

[default](models_Dorito.default.md).[constructor](models_Dorito.default.md#constructor)

#### Defined in

src/models/FareStructureElement.ts:20

## Properties

### accessRightParameterAssignmentRefs

• **accessRightParameterAssignmentRefs**: [`default`](models_Reference.default.md)[]

#### Inherited from

[default](models_Dorito.default.md).[accessRightParameterAssignmentRefs](models_Dorito.default.md#accessrightparameterassignmentrefs)

#### Defined in

src/models/Dorito.ts:14

___

### accessRightParameterAssignments

• **accessRightParameterAssignments**: [`default`](models_GenericParameterAssignment.default.md)[]

#### Inherited from

[default](models_Dorito.default.md).[accessRightParameterAssignments](models_Dorito.default.md#accessrightparameterassignments)

#### Defined in

src/models/Dorito.ts:15

___

### activeComparisonOperatorVariant

• **activeComparisonOperatorVariant**: [`GpaComparisonOperatorVariant`](../enums/types_enums.GpaComparisonOperatorVariant.md)

#### Inherited from

[default](models_Dorito.default.md).[activeComparisonOperatorVariant](models_Dorito.default.md#activecomparisonoperatorvariant)

#### Defined in

src/models/Dorito.ts:17

___

### changed

• **changed**: `string`

#### Inherited from

[default](models_Dorito.default.md).[changed](models_Dorito.default.md#changed)

#### Defined in

src/models/BaseModel.ts:19

___

### codeSpace

• **codeSpace**: `string`

#### Inherited from

[default](models_Dorito.default.md).[codeSpace](models_Dorito.default.md#codespace)

#### Defined in

src/models/BaseModel.ts:16

___

### created

• **created**: `string`

#### Inherited from

[default](models_Dorito.default.md).[created](models_Dorito.default.md#created)

#### Defined in

src/models/BaseModel.ts:18

___

### description

• **description**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[default](models_Dorito.default.md).[description](models_Dorito.default.md#description)

#### Defined in

src/models/BaseModel.ts:23

___

### extraFields

• **extraFields**: `any`

#### Inherited from

[default](models_Dorito.default.md).[extraFields](models_Dorito.default.md#extrafields)

#### Defined in

src/models/BaseModel.ts:25

___

### fareTableRefs

• **fareTableRefs**: [`default`](models_Reference.default.md)[]

#### Defined in

src/models/FareStructureElement.ts:18

___

### geographicalStructureFactorRefs

• **geographicalStructureFactorRefs**: [`default`](models_Reference.default.md)[]

#### Defined in

src/models/FareStructureElement.ts:16

___

### id

• **id**: `string`

#### Inherited from

[default](models_Dorito.default.md).[id](models_Dorito.default.md#id)

#### Defined in

src/models/BaseModel.ts:14

___

### modification

• **modification**: [`Modification`](../enums/types_enums.Modification.md)

#### Inherited from

[default](models_Dorito.default.md).[modification](models_Dorito.default.md#modification)

#### Defined in

src/models/BaseModel.ts:20

___

### name

• **name**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Inherited from

[default](models_Dorito.default.md).[name](models_Dorito.default.md#name)

#### Defined in

src/models/BaseModel.ts:22

___

### nameOfClass

• **nameOfClass**: `string`

#### Inherited from

[default](models_Dorito.default.md).[nameOfClass](models_Dorito.default.md#nameofclass)

#### Defined in

src/models/BaseModel.ts:17

___

### prices

• **prices**: [`default`](models_FarePrice.default.md)[]

#### Inherited from

[default](models_Dorito.default.md).[prices](models_Dorito.default.md#prices)

#### Defined in

src/models/Dorito.ts:16

___

### qualityStructureFactorRefs

• **qualityStructureFactorRefs**: [`default`](models_Reference.default.md)[]

#### Defined in

src/models/FareStructureElement.ts:15

___

### status

• **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Inherited from

[default](models_Dorito.default.md).[status](models_Dorito.default.md#status)

#### Defined in

src/models/BaseModel.ts:21

___

### tariffBasis

• `Optional` **tariffBasis**: [`TariffBasisFSE`](../enums/types_enums.TariffBasisFSE.md)

#### Defined in

src/models/FareStructureElement.ts:17

___

### version

• `Optional` **version**: `string`

#### Inherited from

[default](models_Dorito.default.md).[version](models_Dorito.default.md#version)

#### Defined in

src/models/BaseModel.ts:15

## Methods

### fareTableHasSomeVersionsWithUnequalDatesAndStatus

▸ **fareTableHasSomeVersionsWithUnequalDatesAndStatus**(`versions`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `versions` | `Object` |

#### Returns

`boolean`

#### Defined in

src/models/FareStructureElement.ts:62

___

### getFactorType

▸ **getFactorType**(): ``""`` \| ``"gsf"`` \| [`FARE_QUOTA`](../enums/types_enums.FactorTypes.md#fare_quota)

#### Returns

``""`` \| ``"gsf"`` \| [`FARE_QUOTA`](../enums/types_enums.FactorTypes.md#fare_quota)

#### Defined in

src/models/FareStructureElement.ts:36

___

### getFareTableRefsWithEqualDatesAndStatus

▸ **getFareTableRefsWithEqualDatesAndStatus**(`versions`): [`default`](models_Reference.default.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `versions` | `Object` |

#### Returns

[`default`](models_Reference.default.md)[]

#### Defined in

src/models/FareStructureElement.ts:46

___

### getStructureFactorRefsWithEqualDatesAndStatus

▸ **getStructureFactorRefsWithEqualDatesAndStatus**(`versions`): [`default`](models_Reference.default.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `versions` | `Object` |

#### Returns

[`default`](models_Reference.default.md)[]

#### Defined in

src/models/FareStructureElement.ts:54

___

### gsfHasSomeVersionWithEqualDatesAndStatus

▸ **gsfHasSomeVersionWithEqualDatesAndStatus**(`versions`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `versions` | `Object` |

#### Returns

`boolean`

#### Defined in

src/models/FareStructureElement.ts:71

___

### instanceHasSameDatesAndStatus

▸ **instanceHasSameDatesAndStatus**(`versions`, `reference`, `fpVersion?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `versions` | `Object` |
| `reference` | [`default`](models_Reference.default.md) |
| `fpVersion?` | `string` |

#### Returns

`boolean`

#### Defined in

src/models/FareStructureElement.ts:79

___

### removeAccessRightParametersNotNeeded

▸ **removeAccessRightParametersNotNeeded**(): `void`

TODO: Remove this code once the inconsistent naming of the "accessRightParameterAssignmentRefs" field has been fixed in the PoP API.

#### Returns

`void`

#### Inherited from

[default](models_Dorito.default.md).[removeAccessRightParametersNotNeeded](models_Dorito.default.md#removeaccessrightparametersnotneeded)

#### Defined in

src/models/Dorito.ts:35

___

### toPayload

▸ **toPayload**(`fareFrame`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fareFrame` | [`default`](models_FareFrame.default.md) |

#### Returns

`any`

#### Overrides

[default](models_Dorito.default.md).[toPayload](models_Dorito.default.md#topayload)

#### Defined in

src/models/FareStructureElement.ts:112

___

### toRef

▸ **toRef**(): [`default`](models_Reference.default.md)

#### Returns

[`default`](models_Reference.default.md)

#### Inherited from

[default](models_Dorito.default.md).[toRef](models_Dorito.default.md#toref)

#### Defined in

src/models/BaseModel.ts:147

___

### updateRef

▸ **updateRef**(`refProp`, `bucket`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `refProp` | keyof [`default`](models_FareStructureElement.default.md) |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

`any`

#### Inherited from

[default](models_Dorito.default.md).[updateRef](models_Dorito.default.md#updateref)

#### Defined in

src/models/BaseModel.ts:160

___

### updateRefs

▸ **updateRefs**(`bucket`): [`default`](models_FareStructureElement.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

[`default`](models_FareStructureElement.default.md)

#### Overrides

[default](models_Dorito.default.md).[updateRefs](models_Dorito.default.md#updaterefs)

#### Defined in

src/models/FareStructureElement.ts:96

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

[default](models_Dorito.default.md).[withChanges](models_Dorito.default.md#withchanges)

#### Defined in

src/models/BaseModel.ts:64

___

### withChangesToProperty

▸ **withChangesToProperty**(`property`, `args`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | keyof [`default`](models_FareStructureElement.default.md) |
| `args` | `object` |

#### Returns

`this`

#### Inherited from

[default](models_Dorito.default.md).[withChangesToProperty](models_Dorito.default.md#withchangestoproperty)

#### Defined in

src/models/BaseModel.ts:68

___

### withNewId

▸ **withNewId**(): `this`

#### Returns

`this`

#### Inherited from

[default](models_Dorito.default.md).[withNewId](models_Dorito.default.md#withnewid)

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

[default](models_Dorito.default.md).[withNewIdAndVersion](models_Dorito.default.md#withnewidandversion)

#### Defined in

src/models/BaseModel.ts:140

___

### withTranslation

▸ **withTranslation**(`fieldName`, `lang`, `value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | keyof [`default`](models_FareStructureElement.default.md) |
| `lang` | `string` |
| `value` | `string` |

#### Returns

`this`

#### Inherited from

[default](models_Dorito.default.md).[withTranslation](models_Dorito.default.md#withtranslation)

#### Defined in

src/models/BaseModel.ts:80

___

### withTranslations

▸ **withTranslations**(`field`, `values`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | keyof [`default`](models_FareStructureElement.default.md) |
| `values` | `Object` |

#### Returns

`this`

#### Inherited from

[default](models_Dorito.default.md).[withTranslations](models_Dorito.default.md#withtranslations)

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

[default](models_Dorito.default.md).[withVersion](models_Dorito.default.md#withversion)

#### Defined in

src/models/BaseModel.ts:128

___

### getNameOfClass

▸ **getNameOfClass**(): `string`

#### Returns

`string`

#### Defined in

src/models/FareStructureElement.ts:32

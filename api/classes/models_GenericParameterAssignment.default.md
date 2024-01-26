[@entur-partner/products-models](../README.md) / [models/GenericParameterAssignment](../modules/models_GenericParameterAssignment.md) / default

# Class: default

[models/GenericParameterAssignment](../modules/models_GenericParameterAssignment.md).default

## Hierarchy

- [`default`](models_BaseModel.default.md)

  ↳ **`default`**

## Constructors

### constructor

• **new default**(`data?`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`GenericParameterAssignmentData`](../interfaces/types_interfaces.GenericParameterAssignmentData.md)\> |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Overrides

[default](models_BaseModel.default.md).[constructor](models_BaseModel.default.md#constructor)

#### Defined in

src/models/GenericParameterAssignment.ts:52

## Properties

### canIgnoreInOffering

• `Optional` **canIgnoreInOffering**: `boolean`

#### Defined in

src/models/GenericParameterAssignment.ts:49

___

### changed

• **changed**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[changed](models_BaseModel.default.md#changed)

#### Defined in

src/models/BaseModel.ts:19

___

### chargingBasisType

• `Optional` **chargingBasisType**: [`ChargingBasisType`](../enums/types_enums.ChargingBasisType.md)

#### Defined in

src/models/GenericParameterAssignment.ts:40

___

### codeSpace

• **codeSpace**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[codeSpace](models_BaseModel.default.md#codespace)

#### Defined in

src/models/BaseModel.ts:16

___

### comparisonOperatorVariant

• **comparisonOperatorVariant**: [`GpaComparisonOperatorVariant`](../enums/types_enums.GpaComparisonOperatorVariant.md)

#### Defined in

src/models/GenericParameterAssignment.ts:50

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

### extraFields

• **extraFields**: `any`

#### Inherited from

[default](models_BaseModel.default.md).[extraFields](models_BaseModel.default.md#extrafields)

#### Defined in

src/models/BaseModel.ts:25

___

### fareStructureElementRef

• `Optional` **fareStructureElementRef**: [`default`](models_Reference.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:44

___

### id

• **id**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[id](models_BaseModel.default.md#id)

#### Defined in

src/models/BaseModel.ts:14

___

### includes

• **includes**: [`default`](models_GenericParameterAssignment.default.md)[]

#### Defined in

src/models/GenericParameterAssignment.ts:38

___

### includesGroupingType

• **includesGroupingType**: [`LogicalOperator`](../enums/types_enums.LogicalOperator.md)

#### Defined in

src/models/GenericParameterAssignment.ts:39

___

### limitationGroupingType

• `Optional` **limitationGroupingType**: [`LogicalOperator`](../enums/types_enums.LogicalOperator.md)

#### Defined in

src/models/GenericParameterAssignment.ts:33

___

### limitationType

• `Optional` **limitationType**: `string`

#### Defined in

src/models/GenericParameterAssignment.ts:43

___

### limitations

• **limitations**: [`default`](models_Reference.default.md)[]

#### Defined in

src/models/GenericParameterAssignment.ts:32

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

### requiredElements

• `Optional` **requiredElements**: [`RequiredElement`](../enums/types_enums.RequiredElement.md)[]

#### Defined in

src/models/GenericParameterAssignment.ts:48

___

### requiredInContext

• `Optional` **requiredInContext**: [`RequiredInContext`](../enums/types_enums.RequiredInContext.md)

#### Defined in

src/models/GenericParameterAssignment.ts:46

___

### requiredType

• `Optional` **requiredType**: [`RequiredType`](../enums/types_enums.RequiredType.md)

#### Defined in

src/models/GenericParameterAssignment.ts:45

___

### state

• `Optional` **state**: [`State`](../enums/types_enums.State.md)

#### Defined in

src/models/GenericParameterAssignment.ts:41

___

### status

• **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Inherited from

[default](models_BaseModel.default.md).[status](models_BaseModel.default.md#status)

#### Defined in

src/models/BaseModel.ts:21

___

### temporalValidityParameters

• **temporalValidityParameters**: [`default`](models_TemporalValidityParameter.default.md)[]

#### Defined in

src/models/GenericParameterAssignment.ts:37

___

### uses

• **uses**: [`GenericParameterAssignmentUsesType`](../modules/types_types.md#genericparameterassignmentusestype)

#### Defined in

src/models/GenericParameterAssignment.ts:42

___

### validityParameterAssignmentType

• **validityParameterAssignmentType**: [`ComparisonOperator`](../enums/types_enums.ComparisonOperator.md)

#### Defined in

src/models/GenericParameterAssignment.ts:36

___

### validityParameterGroupingType

• `Optional` **validityParameterGroupingType**: [`LogicalOperatorWithNone`](../enums/types_enums.LogicalOperatorWithNone.md)

#### Defined in

src/models/GenericParameterAssignment.ts:35

___

### validityParameterSetSelectionType

• `Optional` **validityParameterSetSelectionType**: [`SetOperator`](../enums/types_enums.SetOperator.md)

#### Defined in

src/models/GenericParameterAssignment.ts:47

___

### validityParameters

• **validityParameters**: [`default`](models_ScopingValidityParameter.default.md)[]

#### Defined in

src/models/GenericParameterAssignment.ts:34

___

### version

• `Optional` **version**: `string`

#### Inherited from

[default](models_BaseModel.default.md).[version](models_BaseModel.default.md#version)

#### Defined in

src/models/BaseModel.ts:15

## Methods

### addLimitationRef

▸ **addLimitationRef**(`ref`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`default`](models_Reference.default.md) |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:152

___

### addSubGpa

▸ **addSubGpa**(`subGpa`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subGpa` | [`default`](models_GenericParameterAssignment.default.md) |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:229

___

### addSubGpas

▸ **addSubGpas**(`subGpas`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subGpas` | [`default`](models_GenericParameterAssignment.default.md)[] |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:233

___

### addValidityParameter

▸ **addValidityParameter**(`validityParameter`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `validityParameter` | [`default`](models_ScopingValidityParameter.default.md) |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:167

___

### getUses

▸ **getUses**(`gpaData`): [`GenericParameterAssignmentUsesType`](../modules/types_types.md#genericparameterassignmentusestype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gpaData` | `Partial`\<[`GenericParameterAssignmentData`](../interfaces/types_interfaces.GenericParameterAssignmentData.md)\> |

#### Returns

[`GenericParameterAssignmentUsesType`](../modules/types_types.md#genericparameterassignmentusestype)

#### Defined in

src/models/GenericParameterAssignment.ts:298

___

### hasAnyUses

▸ **hasAnyUses**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/models/GenericParameterAssignment.ts:114

___

### hasAvailabilityCondition

▸ **hasAvailabilityCondition**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/models/GenericParameterAssignment.ts:128

___

### hasEditableTemporalValidityParameter

▸ **hasEditableTemporalValidityParameter**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/models/GenericParameterAssignment.ts:140

___

### hasValidBetween

▸ **hasValidBetween**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/models/GenericParameterAssignment.ts:118

___

### isContextOnly

▸ **isContextOnly**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

src/models/GenericParameterAssignment.ts:144

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/models/GenericParameterAssignment.ts:288

___

### removeLimitationRef

▸ **removeLimitationRef**(`ref`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | [`default`](models_Reference.default.md) |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:158

___

### removeSubGpa

▸ **removeSubGpa**(`subGpa`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subGpa` | [`default`](models_GenericParameterAssignment.default.md) |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:247

___

### removeValidityParameterById

▸ **removeValidityParameterById**(`validityParameterId`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `validityParameterId` | `string` |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:181

___

### swapSubGpas

▸ **swapSubGpas**(`fromIndex`, `toIndex`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromIndex` | `number` |
| `toIndex` | `number` |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:253

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

[default](models_BaseModel.default.md).[toPayload](models_BaseModel.default.md#topayload)

#### Defined in

src/models/GenericParameterAssignment.ts:375

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
| `refProp` | keyof [`default`](models_GenericParameterAssignment.default.md) |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

`any`

#### Inherited from

[default](models_BaseModel.default.md).[updateRef](models_BaseModel.default.md#updateref)

#### Defined in

src/models/BaseModel.ts:160

___

### updateRefs

▸ **updateRefs**(`bucket`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Overrides

[default](models_BaseModel.default.md).[updateRefs](models_BaseModel.default.md#updaterefs)

#### Defined in

src/models/GenericParameterAssignment.ts:278

___

### updateSubGpa

▸ **updateSubGpa**(`index`, `subGpa`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `subGpa` | [`default`](models_GenericParameterAssignment.default.md) |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:237

___

### updateValidityParameter

▸ **updateValidityParameter**(`validityParameter`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `validityParameter` | [`default`](models_ScopingValidityParameter.default.md) |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:173

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
| `property` | keyof [`default`](models_GenericParameterAssignment.default.md) |
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
| `fieldName` | keyof [`default`](models_GenericParameterAssignment.default.md) |
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
| `field` | keyof [`default`](models_GenericParameterAssignment.default.md) |
| `values` | `Object` |

#### Returns

`this`

#### Inherited from

[default](models_BaseModel.default.md).[withTranslations](models_BaseModel.default.md#withtranslations)

#### Defined in

src/models/BaseModel.ts:110

___

### withValidityParameterValues

▸ **withValidityParameterValues**(`type`, `values`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | keyof [`default`](models_ScopingValidityParameter.default.md) |
| `values` | `string`[] \| `string`[][] |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:189

___

### withValidityParameters

▸ **withValidityParameters**(`validityParameters`): [`default`](models_GenericParameterAssignment.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `validityParameters` | [`default`](models_ScopingValidityParameter.default.md)[] |

#### Returns

[`default`](models_GenericParameterAssignment.default.md)

#### Defined in

src/models/GenericParameterAssignment.ts:164

___

### withVersion

▸ **withVersion**(`version`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |

#### Returns

`this`

#### Overrides

[default](models_BaseModel.default.md).[withVersion](models_BaseModel.default.md#withversion)

#### Defined in

src/models/GenericParameterAssignment.ts:266

___

### getNameOfClass

▸ **getNameOfClass**(): `string`

#### Returns

`string`

#### Defined in

src/models/GenericParameterAssignment.ts:110

[@entur-partner/products-models](../README.md) / [models/BaseModel](../modules/models_BaseModel.md) / default

# Class: default

[models/BaseModel](../modules/models_BaseModel.md).default

## Hierarchy

- **`default`**

  ↳ [`default`](models_AccessRightInProduct.default.md)

  ↳ [`default`](models_Accommodation.default.md)

  ↳ [`default`](models_Cell.default.md)

  ↳ [`default`](models_ChargingMoment.default.md)

  ↳ [`default`](models_ChargingPolicy.default.md)

  ↳ [`default`](models_CompanionProfile.default.md)

  ↳ [`default`](models_DayType.default.md)

  ↳ [`default`](models_DistanceMatrixElement.default.md)

  ↳ [`default`](models_DistributionAssignment.default.md)

  ↳ [`default`](models_Dorito.default.md)

  ↳ [`default`](models_EntitlementGiven.default.md)

  ↳ [`default`](models_EntitlementProduct.default.md)

  ↳ [`default`](models_EntitlementRequired.default.md)

  ↳ [`default`](models_Exchanging.default.md)

  ↳ [`default`](models_FareFrame.default.md)

  ↳ [`default`](models_FarePointInPattern.default.md)

  ↳ [`default`](models_FarePrice.default.md)

  ↳ [`default`](models_FareQuotaFactor.default.md)

  ↳ [`default`](models_FareSection.default.md)

  ↳ [`default`](models_FareStructureElementInSequence.default.md)

  ↳ [`default`](models_FareTable.default.md)

  ↳ [`default`](models_FrequencyOfUse.default.md)

  ↳ [`default`](models_GeneralGroupOfEntities.default.md)

  ↳ [`default`](models_GenericParameterAssignment.default.md)

  ↳ [`default`](models_GeographicalInterval.default.md)

  ↳ [`default`](models_GeographicalStructureFactor.default.md)

  ↳ [`default`](models_GroupOfDistanceMatrixElements.default.md)

  ↳ [`default`](models_GroupTicket.default.md)

  ↳ [`default`](models_Interchanging.default.md)

  ↳ [`default`](models_JourneyPattern.default.md)

  ↳ [`default`](models_LimitingRule.default.md)

  ↳ [`default`](models_LuggageAllowance.default.md)

  ↳ [`default`](models_PenaltyPolicy.default.md)

  ↳ [`default`](models_ProductPriorityRule.default.md)

  ↳ [`default`](models_PurchaseWindow.default.md)

  ↳ [`default`](models_Refunding.default.md)

  ↳ [`default`](models_Replacing.default.md)

  ↳ [`default`](models_Reserving.default.md)

  ↳ [`default`](models_Reverting.default.md)

  ↳ [`default`](models_RoundTrip.default.md)

  ↳ [`default`](models_Rounding.default.md)

  ↳ [`default`](models_SalesPackageElement.default.md)

  ↳ [`default`](models_ScopingValidityParameter.default.md)

  ↳ [`default`](models_SecurityPolicy.default.md)

  ↳ [`default`](models_ServiceFacilitySet.default.md)

  ↳ [`default`](models_Tariff.default.md)

  ↳ [`default`](models_TemporalValidityParameter.default.md)

  ↳ [`default`](models_Timeband.default.md)

  ↳ [`default`](models_Transferability.default.md)

  ↳ [`default`](models_TypeOfFareProduct.default.md)

  ↳ [`default`](models_TypeOfResponsibilityRole.default.md)

  ↳ [`default`](models_TypeOfUsageParameter.default.md)

  ↳ [`default`](models_UsageValidityPeriod.default.md)

  ↳ [`default`](models_UserProfile.default.md)

  ↳ [`default`](models_UvpForNumberOfZones.default.md)

  ↳ [`default`](models_ValidityCondition.default.md)

## Constructors

### constructor

• **new default**(`data?`): [`default`](models_BaseModel.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`BaseModelData`](../interfaces/types_interfaces.BaseModelData.md)\> |

#### Returns

[`default`](models_BaseModel.default.md)

#### Defined in

[src/models/BaseModel.ts:27](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L27)

## Properties

### changed

• **changed**: `string`

#### Defined in

[src/models/BaseModel.ts:19](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L19)

___

### codeSpace

• **codeSpace**: `string`

#### Defined in

[src/models/BaseModel.ts:16](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L16)

___

### created

• **created**: `string`

#### Defined in

[src/models/BaseModel.ts:18](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L18)

___

### description

• **description**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Defined in

[src/models/BaseModel.ts:23](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L23)

___

### extraFields

• **extraFields**: `any`

#### Defined in

[src/models/BaseModel.ts:25](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[src/models/BaseModel.ts:14](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L14)

___

### modification

• **modification**: [`Modification`](../enums/types_enums.Modification.md)

#### Defined in

[src/models/BaseModel.ts:20](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L20)

___

### name

• **name**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Defined in

[src/models/BaseModel.ts:22](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L22)

___

### nameOfClass

• **nameOfClass**: `string`

#### Defined in

[src/models/BaseModel.ts:17](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L17)

___

### status

• **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Defined in

[src/models/BaseModel.ts:21](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L21)

___

### version

• `Optional` **version**: `string`

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

#### Defined in

[src/models/BaseModel.ts:174](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L174)

___

### toRef

▸ **toRef**(): [`default`](models_Reference.default.md)

#### Returns

[`default`](models_Reference.default.md)

#### Defined in

[src/models/BaseModel.ts:147](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L147)

___

### updateRef

▸ **updateRef**(`refProp`, `bucket`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `refProp` | keyof [`default`](models_BaseModel.default.md) |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

`any`

#### Defined in

[src/models/BaseModel.ts:160](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L160)

___

### updateRefs

▸ **updateRefs**(`bucket`): [`default`](models_BaseModel.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucket` | [`BucketStateType`](../modules/types_types.md#bucketstatetype) |

#### Returns

[`default`](models_BaseModel.default.md)

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

#### Defined in

[src/models/BaseModel.ts:64](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L64)

___

### withChangesToProperty

▸ **withChangesToProperty**(`property`, `args`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | keyof [`default`](models_BaseModel.default.md) |
| `args` | `object` |

#### Returns

`this`

#### Defined in

[src/models/BaseModel.ts:68](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L68)

___

### withNewId

▸ **withNewId**(): `this`

#### Returns

`this`

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

#### Defined in

[src/models/BaseModel.ts:140](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L140)

___

### withTranslation

▸ **withTranslation**(`fieldName`, `lang`, `value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | keyof [`default`](models_BaseModel.default.md) |
| `lang` | `string` |
| `value` | `string` |

#### Returns

`this`

#### Defined in

[src/models/BaseModel.ts:80](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L80)

___

### withTranslations

▸ **withTranslations**(`field`, `values`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | keyof [`default`](models_BaseModel.default.md) |
| `values` | `Object` |

#### Returns

`this`

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

#### Defined in

[src/models/BaseModel.ts:128](https://github.com/entur/products-models/blob/main/src/models/BaseModel.ts#L128)

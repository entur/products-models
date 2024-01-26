[@entur-partner/products-models](../README.md) / types/types

# Module: types/types

## Type Aliases

### BucketStateInstanceType

Ƭ **BucketStateInstanceType**: `Record`\<[`InstanceNetexId`](types_types.md#instancenetexid), `Record`\<[`VersionNetexId`](types_types.md#versionnetexid), [`default`](../classes/models_Thing.default.md)\<[`default`](../classes/models_BaseModel.default.md)\>\>\>

#### Defined in

[src/types/types.ts:14](https://github.com/entur/products-models/blob/main/src/types/types.ts#L14)

___

### BucketStateType

Ƭ **BucketStateType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `instances` | [`BucketStateInstanceType`](types_types.md#bucketstateinstancetype) |
| `metaData?` | [`default`](../classes/models_MetaData.default.md) |
| `versions` | [`BucketStateVersionType`](types_types.md#bucketstateversiontype) |

#### Defined in

[src/types/types.ts:22](https://github.com/entur/products-models/blob/main/src/types/types.ts#L22)

___

### BucketStateVersionType

Ƭ **BucketStateVersionType**: `Record`\<[`VersionNetexId`](types_types.md#versionnetexid), [`default`](../classes/models_Version.default.md)\>

#### Defined in

[src/types/types.ts:20](https://github.com/entur/products-models/blob/main/src/types/types.ts#L20)

___

### ErrorDetails

Ƭ **ErrorDetails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errorText?` | `string` |
| `name?` | `string` |

#### Defined in

[src/types/types.ts:73](https://github.com/entur/products-models/blob/main/src/types/types.ts#L73)

___

### GenericParameterAssignmentUsesType

Ƭ **GenericParameterAssignmentUsesType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `useAuthorities` | `boolean` |
| `useAvailabilityCondition` | `boolean` |
| `useContextTypeWithDatedServiceJourneyRef` | `boolean` |
| `useContextTypeWithDistanceMatrixElementRef` | `boolean` |
| `useContextTypeWithDynamicDistanceMatrixElement` | `boolean` |
| `useContextTypeWithScheduledStopPointRef` | `boolean` |
| `useContextTypeWithServiceJourneyRef` | `boolean` |
| `useDates` | `boolean` |
| `useDays` | `boolean` |
| `useDistributionChannels` | `boolean` |
| `useFareClass` | `boolean` |
| `useFareSection` | `boolean` |
| `useGroupOfLines` | `boolean` |
| `useGroupOfTariffZones` | `boolean` |
| `useLines` | `boolean` |
| `useOperators` | `boolean` |
| `useScheduledStopPointRef` | `boolean` |
| `useServiceFacilitySet` | `boolean` |
| `useTimes` | `boolean` |
| `useTransportSubmode` | `boolean` |
| `useValidBetween` | `boolean` |
| `useVehicleMode` | `boolean` |
| `useZones` | `boolean` |

#### Defined in

[src/types/types.ts:33](https://github.com/entur/products-models/blob/main/src/types/types.ts#L33)

___

### InfoLink

Ƭ **InfoLink**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `link` | `string` |
| `productPriorityRuleRef` | [`default`](../classes/models_Reference.default.md) |
| `typeOfInfoLink` | `string` |

#### Defined in

[src/types/types.ts:67](https://github.com/entur/products-models/blob/main/src/types/types.ts#L67)

___

### InstanceNetexId

Ƭ **InstanceNetexId**: `string`

#### Defined in

[src/types/types.ts:8](https://github.com/entur/products-models/blob/main/src/types/types.ts#L8)

___

### OrganisationReferences

Ƭ **OrganisationReferences**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `codeSpace` | `string` |
| `netexAuthorityId` | `string` |
| `netexId` | `string` |
| `networkId` | `string` |
| `registrarId` | `string` |

#### Defined in

[src/types/types.ts:59](https://github.com/entur/products-models/blob/main/src/types/types.ts#L59)

___

### TextInLanguage

Ƭ **TextInLanguage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `lang` | `string` |
| `value` | `string` |

#### Defined in

[src/types/types.ts:28](https://github.com/entur/products-models/blob/main/src/types/types.ts#L28)

___

### VersionNetexId

Ƭ **VersionNetexId**: `string`

#### Defined in

[src/types/types.ts:11](https://github.com/entur/products-models/blob/main/src/types/types.ts#L11)

[@entur-partner/products-models](../README.md) / [models/Version](../modules/models_Version.md) / default

# Class: default

[models/Version](../modules/models_Version.md).default

## Constructors

### constructor

• **new default**(`data`): [`default`](models_Version.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<[`VersionData`](../interfaces/types_interfaces.VersionData.md)\> |

#### Returns

[`default`](models_Version.default.md)

#### Defined in

src/models/Version.ts:30

## Properties

### changed

• **changed**: `string`

#### Defined in

src/models/Version.ts:22

___

### created

• **created**: `string`

#### Defined in

src/models/Version.ts:21

___

### description

• **description**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Defined in

src/models/Version.ts:23

___

### endDate

• `Optional` **endDate**: `string`

#### Defined in

src/models/Version.ts:27

___

### id

• **id**: `string`

#### Defined in

src/models/Version.ts:19

___

### modification

• **modification**: [`Modification`](../enums/types_enums.Modification.md)

#### Defined in

src/models/Version.ts:24

___

### nameOfClass

• **nameOfClass**: `string`

#### Defined in

src/models/Version.ts:20

___

### startDate

• `Optional` **startDate**: `string`

#### Defined in

src/models/Version.ts:26

___

### status

• `Optional` **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Defined in

src/models/Version.ts:25

___

### versionType

• **versionType**: [`VersionType`](../enums/types_enums.VersionType.md)

#### Defined in

src/models/Version.ts:28

## Methods

### publish

▸ **publish**(): [`default`](models_Version.default.md)

#### Returns

[`default`](models_Version.default.md)

#### Defined in

src/models/Version.ts:61

___

### toPayload

▸ **toPayload**(`fareFrame`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fareFrame` | [`default`](models_FareFrame.default.md) |

#### Returns

`any`

#### Defined in

src/models/Version.ts:97

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

src/models/Version.ts:57

___

### generateNewVersionId

▸ **generateNewVersionId**(`codeSpace?`, `prefix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `codeSpace?` | `string` |
| `prefix?` | `string` |

#### Returns

`string`

#### Defined in

src/models/Version.ts:69

___

### getNameOfClass

▸ **getNameOfClass**(): `string`

#### Returns

`string`

#### Defined in

src/models/Version.ts:53

___

### getPossibleNewStatusesForStatus

▸ **getPossibleNewStatusesForStatus**(`status`): [`VersionStatus`](../enums/types_enums.VersionStatus.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`VersionStatus`](../enums/types_enums.VersionStatus.md) |

#### Returns

[`VersionStatus`](../enums/types_enums.VersionStatus.md)[]

#### Defined in

src/models/Version.ts:81

___

### newVersion

▸ **newVersion**(`id?`): [`default`](models_Version.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` |

#### Returns

[`default`](models_Version.default.md)

#### Defined in

src/models/Version.ts:65

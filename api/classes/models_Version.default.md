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

[src/models/Version.ts:30](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L30)

## Properties

### changed

• **changed**: `string`

#### Defined in

[src/models/Version.ts:22](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L22)

___

### created

• **created**: `string`

#### Defined in

[src/models/Version.ts:21](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L21)

___

### description

• **description**: [`TextInLanguage`](../modules/types_types.md#textinlanguage)[]

#### Defined in

[src/models/Version.ts:23](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L23)

___

### endDate

• `Optional` **endDate**: `string`

#### Defined in

[src/models/Version.ts:27](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[src/models/Version.ts:19](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L19)

___

### modification

• **modification**: [`Modification`](../enums/types_enums.Modification.md)

#### Defined in

[src/models/Version.ts:24](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L24)

___

### nameOfClass

• **nameOfClass**: `string`

#### Defined in

[src/models/Version.ts:20](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L20)

___

### startDate

• `Optional` **startDate**: `string`

#### Defined in

[src/models/Version.ts:26](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L26)

___

### status

• `Optional` **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Defined in

[src/models/Version.ts:25](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L25)

___

### versionType

• **versionType**: [`VersionType`](../enums/types_enums.VersionType.md)

#### Defined in

[src/models/Version.ts:28](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L28)

## Methods

### publish

▸ **publish**(): [`default`](models_Version.default.md)

#### Returns

[`default`](models_Version.default.md)

#### Defined in

[src/models/Version.ts:61](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L61)

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

[src/models/Version.ts:97](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L97)

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

[src/models/Version.ts:57](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L57)

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

[src/models/Version.ts:69](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L69)

___

### getNameOfClass

▸ **getNameOfClass**(): `string`

#### Returns

`string`

#### Defined in

[src/models/Version.ts:53](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L53)

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

[src/models/Version.ts:81](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L81)

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

[src/models/Version.ts:65](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L65)

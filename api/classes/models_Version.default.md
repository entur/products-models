[@entur/products-models](../README.md) / [models/Version](../modules/models_Version.md) / default

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

[src/models/Version.ts:25](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L25)

## Properties

### changed

• **changed**: `string`

#### Defined in

[src/models/Version.ts:17](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L17)

___

### created

• **created**: `string`

#### Defined in

[src/models/Version.ts:16](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L16)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/models/Version.ts:18](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L18)

___

### endDate

• `Optional` **endDate**: `string`

#### Defined in

[src/models/Version.ts:22](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L22)

___

### id

• **id**: `string`

#### Defined in

[src/models/Version.ts:14](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L14)

___

### modification

• **modification**: [`Modification`](../enums/types_enums.Modification.md)

#### Defined in

[src/models/Version.ts:19](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L19)

___

### nameOfClass

• **nameOfClass**: `string`

#### Defined in

[src/models/Version.ts:15](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L15)

___

### startDate

• `Optional` **startDate**: `string`

#### Defined in

[src/models/Version.ts:21](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L21)

___

### status

• **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Defined in

[src/models/Version.ts:20](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L20)

___

### versionType

• **versionType**: [`VersionType`](../enums/types_enums.VersionType.md)

#### Defined in

[src/models/Version.ts:23](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L23)

## Methods

### publish

▸ **publish**(): [`default`](models_Version.default.md)

#### Returns

[`default`](models_Version.default.md)

#### Defined in

[src/models/Version.ts:56](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L56)

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

[src/models/Version.ts:92](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L92)

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

[src/models/Version.ts:52](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L52)

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

[src/models/Version.ts:64](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L64)

___

### getNameOfClass

▸ **getNameOfClass**(): `string`

#### Returns

`string`

#### Defined in

[src/models/Version.ts:48](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L48)

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

[src/models/Version.ts:76](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L76)

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

[src/models/Version.ts:60](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L60)

[@entur/products-models](../README.md) / [models/Version](../modules/models_Version.md) / default

# Class: default

[models/Version](../modules/models_Version.md).default

## Constructors

### constructor

• **new default**(`data`): [`default`](models_Version.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`\<`VersionData`\> |

#### Returns

[`default`](models_Version.default.md)

#### Defined in

[src/models/Version.ts:42](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L42)

## Properties

### changed

• **changed**: `string`

#### Defined in

[src/models/Version.ts:34](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L34)

___

### created

• **created**: `string`

#### Defined in

[src/models/Version.ts:33](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L33)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/models/Version.ts:35](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L35)

___

### endDate

• `Optional` **endDate**: `string`

#### Defined in

[src/models/Version.ts:39](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L39)

___

### id

• **id**: `string`

#### Defined in

[src/models/Version.ts:31](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L31)

___

### modification

• **modification**: [`Modification`](../enums/types_enums.Modification.md)

#### Defined in

[src/models/Version.ts:36](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L36)

___

### nameOfClass

• **nameOfClass**: `string`

#### Defined in

[src/models/Version.ts:32](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L32)

___

### startDate

• `Optional` **startDate**: `string`

#### Defined in

[src/models/Version.ts:38](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L38)

___

### status

• `Optional` **status**: [`VersionStatus`](../enums/types_enums.VersionStatus.md)

#### Defined in

[src/models/Version.ts:37](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L37)

___

### versionType

• **versionType**: [`VersionType`](../enums/types_enums.VersionType.md)

#### Defined in

[src/models/Version.ts:40](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L40)

## Methods

### publish

▸ **publish**(): [`default`](models_Version.default.md)

#### Returns

[`default`](models_Version.default.md)

#### Defined in

[src/models/Version.ts:73](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L73)

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

[src/models/Version.ts:109](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L109)

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

[src/models/Version.ts:69](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L69)

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

[src/models/Version.ts:81](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L81)

___

### getNameOfClass

▸ **getNameOfClass**(): `string`

#### Returns

`string`

#### Defined in

[src/models/Version.ts:65](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L65)

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

[src/models/Version.ts:93](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L93)

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

[src/models/Version.ts:77](https://github.com/entur/products-models/blob/main/src/models/Version.ts#L77)

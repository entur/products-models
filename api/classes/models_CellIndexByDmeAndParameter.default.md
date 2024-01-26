[@entur-partner/products-models](../README.md) / [models/CellIndexByDmeAndParameter](../modules/models_CellIndexByDmeAndParameter.md) / default

# Class: default

[models/CellIndexByDmeAndParameter](../modules/models_CellIndexByDmeAndParameter.md).default

## Constructors

### constructor

• **new default**(`cells`): [`default`](models_CellIndexByDmeAndParameter.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cells` | [`default`](models_Cell.default.md)[] |

#### Returns

[`default`](models_CellIndexByDmeAndParameter.default.md)

#### Defined in

[src/models/CellIndexByDmeAndParameter.ts:11](https://github.com/entur/products-models/blob/main/src/models/CellIndexByDmeAndParameter.ts#L11)

## Properties

### cellIndex

• **cellIndex**: `Map`\<`string`, [`default`](models_Cell.default.md)\>

#### Defined in

[src/models/CellIndexByDmeAndParameter.ts:9](https://github.com/entur/products-models/blob/main/src/models/CellIndexByDmeAndParameter.ts#L9)

___

### profileRefs

• **profileRefs**: `Set`\<`string`\>

#### Defined in

[src/models/CellIndexByDmeAndParameter.ts:10](https://github.com/entur/products-models/blob/main/src/models/CellIndexByDmeAndParameter.ts#L10)

## Methods

### getByProfileAndDme

▸ **getByProfileAndDme**(`profileId`, `dmeId`): [`default`](models_Cell.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `profileId` | `string` |
| `dmeId` | `string` |

#### Returns

[`default`](models_Cell.default.md)

#### Defined in

[src/models/CellIndexByDmeAndParameter.ts:38](https://github.com/entur/products-models/blob/main/src/models/CellIndexByDmeAndParameter.ts#L38)

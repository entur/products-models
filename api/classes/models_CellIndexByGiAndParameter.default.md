[@entur-partner/products-models](../README.md) / [models/CellIndexByGiAndParameter](../modules/models_CellIndexByGiAndParameter.md) / default

# Class: default

[models/CellIndexByGiAndParameter](../modules/models_CellIndexByGiAndParameter.md).default

## Constructors

### constructor

• **new default**(`cells`): [`default`](models_CellIndexByGiAndParameter.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cells` | [`default`](models_Cell.default.md)[] |

#### Returns

[`default`](models_CellIndexByGiAndParameter.default.md)

#### Defined in

[src/models/CellIndexByGiAndParameter.ts:11](https://github.com/entur/products-models/blob/main/src/models/CellIndexByGiAndParameter.ts#L11)

## Properties

### cellIndex

• **cellIndex**: `Map`\<`string`, [`default`](models_Cell.default.md)\>

#### Defined in

[src/models/CellIndexByGiAndParameter.ts:9](https://github.com/entur/products-models/blob/main/src/models/CellIndexByGiAndParameter.ts#L9)

___

### profileRefs

• **profileRefs**: `Set`\<`string`\>

#### Defined in

[src/models/CellIndexByGiAndParameter.ts:10](https://github.com/entur/products-models/blob/main/src/models/CellIndexByGiAndParameter.ts#L10)

## Methods

### getByProfileAndGi

▸ **getByProfileAndGi**(`profileId`, `giId`): [`default`](models_Cell.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `profileId` | `string` |
| `giId` | `string` |

#### Returns

[`default`](models_Cell.default.md)

#### Defined in

[src/models/CellIndexByGiAndParameter.ts:38](https://github.com/entur/products-models/blob/main/src/models/CellIndexByGiAndParameter.ts#L38)

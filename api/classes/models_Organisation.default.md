[@entur/products-models](../README.md) / [models/Organisation](../modules/models_Organisation.md) / default

# Class: default

[models/Organisation](../modules/models_Organisation.md).default

## Implements

- [`OrganisationInterface`](../interfaces/types_interfaces.OrganisationInterface.md)

## Constructors

### constructor

• **new default**(`data?`): [`default`](models_Organisation.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`OrganisationInterface`](../interfaces/types_interfaces.OrganisationInterface.md) \| `Record`\<`string`, `any`\> |

#### Returns

[`default`](models_Organisation.default.md)

#### Defined in

[src/models/Organisation.ts:18](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L18)

## Properties

### contact

• `Optional` **contact**: [`ContactInterface`](../interfaces/types_interfaces.ContactInterface.md)

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[contact](../interfaces/types_interfaces.OrganisationInterface.md#contact)

#### Defined in

[src/models/Organisation.ts:10](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L10)

___

### customerContact

• `Optional` **customerContact**: [`ContactInterface`](../interfaces/types_interfaces.ContactInterface.md)

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[customerContact](../interfaces/types_interfaces.OrganisationInterface.md#customercontact)

#### Defined in

[src/models/Organisation.ts:11](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L11)

___

### id

• **id**: `string`

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[id](../interfaces/types_interfaces.OrganisationInterface.md#id)

#### Defined in

[src/models/Organisation.ts:7](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L7)

___

### legalName

• **legalName**: `string`

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[legalName](../interfaces/types_interfaces.OrganisationInterface.md#legalname)

#### Defined in

[src/models/Organisation.ts:9](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L9)

___

### logo

• **logo**: `string`

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[logo](../interfaces/types_interfaces.OrganisationInterface.md#logo)

#### Defined in

[src/models/Organisation.ts:13](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L13)

___

### name

• **name**: `string`

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[name](../interfaces/types_interfaces.OrganisationInterface.md#name)

#### Defined in

[src/models/Organisation.ts:8](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L8)

___

### references

• **references**: [`OrganisationReferences`](../modules/types_types.md#organisationreferences)

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[references](../interfaces/types_interfaces.OrganisationInterface.md#references)

#### Defined in

[src/models/Organisation.ts:14](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L14)

___

### types

• **types**: `string`[]

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[types](../interfaces/types_interfaces.OrganisationInterface.md#types)

#### Defined in

[src/models/Organisation.ts:12](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L12)

___

### version

• **version**: `number`

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[version](../interfaces/types_interfaces.OrganisationInterface.md#version)

#### Defined in

[src/models/Organisation.ts:15](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L15)

## Methods

### getNetexId

▸ **getNetexId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/models/Organisation.ts:55](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L55)

___

### getNetworkId

▸ **getNetworkId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/models/Organisation.ts:44](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L44)

___

### getRegistrarId

▸ **getRegistrarId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/models/Organisation.ts:51](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L51)

___

### hasReference

▸ **hasReference**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/models/Organisation.ts:37](https://github.com/entur/products-models/blob/main/src/models/Organisation.ts#L37)

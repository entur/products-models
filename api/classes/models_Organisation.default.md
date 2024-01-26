[@entur-partner/products-models](../README.md) / [models/Organisation](../modules/models_Organisation.md) / default

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

src/models/Organisation.ts:18

## Properties

### contact

• `Optional` **contact**: [`ContactInterface`](../interfaces/types_interfaces.ContactInterface.md)

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[contact](../interfaces/types_interfaces.OrganisationInterface.md#contact)

#### Defined in

src/models/Organisation.ts:10

___

### customerContact

• `Optional` **customerContact**: [`ContactInterface`](../interfaces/types_interfaces.ContactInterface.md)

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[customerContact](../interfaces/types_interfaces.OrganisationInterface.md#customercontact)

#### Defined in

src/models/Organisation.ts:11

___

### id

• **id**: `string`

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[id](../interfaces/types_interfaces.OrganisationInterface.md#id)

#### Defined in

src/models/Organisation.ts:7

___

### legalName

• **legalName**: `string`

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[legalName](../interfaces/types_interfaces.OrganisationInterface.md#legalname)

#### Defined in

src/models/Organisation.ts:9

___

### logo

• **logo**: `string`

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[logo](../interfaces/types_interfaces.OrganisationInterface.md#logo)

#### Defined in

src/models/Organisation.ts:13

___

### name

• **name**: `string`

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[name](../interfaces/types_interfaces.OrganisationInterface.md#name)

#### Defined in

src/models/Organisation.ts:8

___

### references

• **references**: [`OrganisationReferences`](../modules/types_types.md#organisationreferences)

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[references](../interfaces/types_interfaces.OrganisationInterface.md#references)

#### Defined in

src/models/Organisation.ts:14

___

### types

• **types**: `string`[]

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[types](../interfaces/types_interfaces.OrganisationInterface.md#types)

#### Defined in

src/models/Organisation.ts:12

___

### version

• **version**: `number`

#### Implementation of

[OrganisationInterface](../interfaces/types_interfaces.OrganisationInterface.md).[version](../interfaces/types_interfaces.OrganisationInterface.md#version)

#### Defined in

src/models/Organisation.ts:15

## Methods

### getNetexId

▸ **getNetexId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

src/models/Organisation.ts:55

___

### getNetworkId

▸ **getNetworkId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

src/models/Organisation.ts:44

___

### getRegistrarId

▸ **getRegistrarId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

src/models/Organisation.ts:51

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

src/models/Organisation.ts:37

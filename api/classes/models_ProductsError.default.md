[@entur-partner/products-models](../README.md) / [models/ProductsError](../modules/models_ProductsError.md) / default

# Class: default

[models/ProductsError](../modules/models_ProductsError.md).default

## Hierarchy

- `Error`

  ↳ **`default`**

## Constructors

### constructor

• **new default**(`«destructured»`): [`default`](models_ProductsError.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ProductsErrorData`](../interfaces/types_interfaces.ProductsErrorData.md) |

#### Returns

[`default`](models_ProductsError.default.md)

#### Overrides

Error.constructor

#### Defined in

[src/models/ProductsError.ts:8](https://github.com/entur/products-models/blob/main/src/models/ProductsError.ts#L8)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### error

• **error**: `string`

#### Defined in

[src/models/ProductsError.ts:5](https://github.com/entur/products-models/blob/main/src/models/ProductsError.ts#L5)

___

### errorDescription

• `Optional` **errorDescription**: `string`

#### Defined in

[src/models/ProductsError.ts:6](https://github.com/entur/products-models/blob/main/src/models/ProductsError.ts#L6)

___

### errorDetails

• **errorDetails**: [`ErrorDetails`](../modules/types_types.md#errordetails)[]

#### Defined in

[src/models/ProductsError.ts:7](https://github.com/entur/products-models/blob/main/src/models/ProductsError.ts#L7)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1075

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21

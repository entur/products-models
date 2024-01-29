[@entur/products-models](../README.md) / utils/generate-id

# Module: utils/generate-id

## Functions

### createUuid

▸ **createUuid**(): `any`

Generates a UUID string with the first 8 characters.

#### Returns

`any`

- The generated UUID string.

**`Example`**

```ts
const shortUuid = createUuid();
console.log(shortUuid); // '3f7f1e4c'
```

#### Defined in

[src/utils/generate-id.ts:15](https://github.com/entur/products-models/blob/main/src/utils/generate-id.ts#L15)

___

### generateId

▸ **generateId**(`codeSpace`, `nameOfClass`): `string`

Generates a unique ID based on code space, class name, and a short UUID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `codeSpace` | `string` | The code space for the ID. |
| `nameOfClass` | `string` | The name of the class for the ID. |

#### Returns

`string`

- The generated unique ID.

**`Example`**

```ts
const codeSpace = 'app';
const className = 'User';
const uniqueId = generateId(codeSpace, className);
console.log(uniqueId); // 'app:User:3f7f1e4c'
```

#### Defined in

[src/utils/generate-id.ts:32](https://github.com/entur/products-models/blob/main/src/utils/generate-id.ts#L32)

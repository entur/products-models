[@entur/products-models](../README.md) / utils/index-key

# Module: utils/index-key

## Functions

### indexKey

▸ **indexKey**(`profileId?`, `giId?`): `string`

Generates an index key based on optional profile and GI (General Identifier) IDs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `profileId?` | `string` | The profile ID (optional). |
| `giId?` | `string` | The GI (General Identifier) ID (optional). |

#### Returns

`string`

- The generated index key.

**`Example`**

```ts
const keyWithProfileAndGi = indexKey('123', '456');
console.log(keyWithProfileAndGi); // '123-456'

const keyWithOnlyProfile = indexKey('789');
console.log(keyWithOnlyProfile); // '789-undefined'

const keyWithOnlyGi = indexKey(undefined, '789');
console.log(keyWithOnlyGi); // 'undefined-789'

const keyWithoutIds = indexKey();
console.log(keyWithoutIds); // 'undefined-undefined'
```

#### Defined in

[src/utils/index-key.ts:21](https://github.com/entur/products-models/blob/main/src/utils/index-key.ts#L21)

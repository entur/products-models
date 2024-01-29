[@entur/products-models](../README.md) / utils/code-space-from-netex-id

# Module: utils/code-space-from-netex-id

## Functions

### codeSpaceFromNetexId

▸ **codeSpaceFromNetexId**(`netexId`): `string`

Extracts the code space from a Netex ID. See [information: NeTEx](https://enturas.atlassian.net/wiki/spaces/PUBLIC/pages/728563782/General+information+NeTEx|General)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `netexId` | `string` | The Netex ID to extract the code space from. |

#### Returns

`string`

- The extracted code space.

**`Link`**

**`Example`**

```ts
const netexId = 'app:User:3f7f1e4c';
const codeSpace = codeSpaceFromNetexId(netexId);
console.log(codeSpace); // 'app'
```

#### Defined in

[src/utils/code-space-from-netex-id.ts:13](https://github.com/entur/products-models/blob/main/src/utils/code-space-from-netex-id.ts#L13)

[@entur-partner/products-models](../README.md) / utils/not-empty

# Module: utils/not-empty

## Functions

### notEmpty

▸ **notEmpty**(`arr`): `boolean`

Checks if an array is not empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | [`default`](../classes/models_Reference.default.md)[] \| [`default`](../classes/models_FareQuotaFactor.default.md)[] | The array to check for emptiness. |

#### Returns

`boolean`

- Returns `true` if the array is not empty, otherwise `false`.

**`Example`**

```ts
const fareFactors = [{ factor: 1.2 }, { factor: 1.5 }];
const isNotEmpty = notEmpty(fareFactors);
console.log(isNotEmpty); // true

const emptyArray: FareQuotaFactor[] = [];
const isEmpty = notEmpty(emptyArray);
console.log(isEmpty); // false
```

#### Defined in

src/utils/not-empty.ts:19

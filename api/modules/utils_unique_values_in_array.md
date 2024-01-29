[@entur/products-models](../README.md) / utils/unique-values-in-array

# Module: utils/unique-values-in-array

## Functions

### uniqueValuesInArray

▸ **uniqueValuesInArray**\<`T`\>(`values`): `T`[]

Returns an array containing unique values from the input array.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the array. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T`[] | The input array from which unique values are extracted. |

#### Returns

`T`[]

- An array containing only unique values from the input array.

**`Example`**

```ts
const inputArray = [1, 2, 3, 2, 4, 5, 1];
const uniqueValues = uniqueValuesInArray(inputArray);
console.log(uniqueValues); // [1, 2, 3, 4, 5]
```

#### Defined in

[src/utils/unique-values-in-array.ts:13](https://github.com/entur/products-models/blob/main/src/utils/unique-values-in-array.ts#L13)

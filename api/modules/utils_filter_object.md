[@entur/products-models](../README.md) / utils/filter-object

# Module: utils/filter-object

## Functions

### filterObject

▸ **filterObject**\<`T`\>(`obj`, `predicate`): `Partial`\<`T`\>

Filters an object based on a predicate function applied to its keys.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Object` | The type of the input object. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | The input object to filter. |
| `predicate` | (`key`: `string`) => `boolean` | The predicate function to filter keys. |

#### Returns

`Partial`\<`T`\>

- The filtered object with only the keys satisfying the predicate.

**`Example`**

```ts
const inputObject = { name: 'John', age: 25, city: 'New York' };
const filteredObject = filterObject(inputObject, (key) => key !== 'age');
console.log(filteredObject); // { name: 'John', city: 'New York' }
```

#### Defined in

[src/utils/filter-object.ts:14](https://github.com/entur/products-models/blob/main/src/utils/filter-object.ts#L14)

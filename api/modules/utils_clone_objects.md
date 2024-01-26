[@entur-partner/products-models](../README.md) / utils/clone-objects

# Module: utils/clone-objects

## Functions

### cloneObject

▸ **cloneObject**\<`T`\>(`object`, `extraFields?`): `T`

Creates a shallow clone of an object with optional extra fields.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the object to clone. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object to clone. |
| `extraFields?` | `object` | Additional fields to add to the cloned object. |

#### Returns

`T`

- The cloned object.

**`Example`**

```ts
const originalObject = { name: 'John', age: 25 };
const clonedObject = cloneObject(originalObject, { city: 'New York' });
console.log(clonedObject); // { name: 'John', age: 25, city: 'New York' }
```

#### Defined in

[src/utils/clone-objects.ts:14](https://github.com/entur/products-models/blob/main/src/utils/clone-objects.ts#L14)

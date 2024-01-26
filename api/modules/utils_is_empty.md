[@entur-partner/products-models](../README.md) / utils/is-empty

# Module: utils/is-empty

## Functions

### isEmpty

▸ **isEmpty**(`value`): `boolean`

Checks if a value is empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to check for emptiness. |

#### Returns

`boolean`

- Returns `true` if the value is empty, otherwise `false`.

**`Example`**

```ts
const nonEmptyString = 'Hello, World!';
const isNonEmpty = isEmpty(nonEmptyString);
console.log(isNonEmpty); // false

const emptyString = '';
const isEmptyString = isEmpty(emptyString);
console.log(isEmptyString); // true

const nonEmptyObject = { key: 'value' };
const isNonEmptyObject = isEmpty(nonEmptyObject);
console.log(isNonEmptyObject); // false

const emptyObject = {};
const isEmptyObject = isEmpty(emptyObject);
console.log(isEmptyObject); // true
```

#### Defined in

[src/utils/is-empty.ts:25](https://github.com/entur/products-models/blob/main/src/utils/is-empty.ts#L25)

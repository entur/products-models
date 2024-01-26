[@entur-partner/products-models](../README.md) / utils/get-thing-in-bucket-by-ref

# Module: utils/get-thing-in-bucket-by-ref

## Functions

### getThingInBucketByRef

▸ **getThingInBucketByRef**\<`T`\>(`bucket`, `reference`): `undefined` \| [`default`](../classes/models_Thing.default.md)\<`T`\>

Gets a Thing instance from the bucket based on a reference.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`default`](../classes/models_BaseModel.default.md) | The type of the BaseModel used by Thing. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bucket` | [`BucketStateType`](types_types.md#bucketstatetype) | The bucket containing instances. |
| `reference` | [`default`](../classes/models_Reference.default.md) | The reference to look up in the bucket. |

#### Returns

`undefined` \| [`default`](../classes/models_Thing.default.md)\<`T`\>

- The Thing instance if found, otherwise undefined.

**`Example`**

```ts
const bucketState = {
  instances: {
    '123': {
      '1.0': { id: '123', version: '1.0', name: 'ExampleThing' }
    }
  }
};

const reference = { ref: '123', version: '1.0' };
const thingInstance = getThingInBucketByRef<ExampleModel>(bucketState, reference);
console.log(thingInstance); // { id: '123', version: '1.0', name: 'ExampleThing' }
```

#### Defined in

[src/utils/get-thing-in-bucket-by-ref.ts:27](https://github.com/entur/products-models/blob/main/src/utils/get-thing-in-bucket-by-ref.ts#L27)

[@entur/products-models](../README.md) / utils/get-distribution-channel-ref-as-string

# Module: utils/get-distribution-channel-ref-as-string

## Functions

### getDistributionChannelRefAsString

▸ **getDistributionChannelRefAsString**(`distributionChannelRef?`): `undefined` \| `string`

Converts a distribution channel reference to a string as required by the pop API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distributionChannelRef?` | `string` \| [`default`](../classes/models_Reference.default.md) | The distribution channel reference. |

#### Returns

`undefined` \| `string`

- The converted string representation of the distribution channel reference.

**`Todo`**

This is an hack because the pop api requires an string when sending the request as post/put, but GET returns an object.

**`Example`**

```ts
const referenceObject = { ref: 'channel123', version: '1.0' };
const refAsString = getDistributionChannelRefAsString(referenceObject);
console.log(refAsString); // 'channel123'

const refAsStringDirect = getDistributionChannelRefAsString('directChannel');
console.log(refAsStringDirect); // 'directChannel'
```

#### Defined in

[src/utils/get-distribution-channel-ref-as-string.ts:18](https://github.com/entur/products-models/blob/main/src/utils/get-distribution-channel-ref-as-string.ts#L18)

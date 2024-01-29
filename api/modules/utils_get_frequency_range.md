[@entur/products-models](../README.md) / utils/get-frequency-range

# Module: utils/get-frequency-range

## Functions

### getFrequencyRange

▸ **getFrequencyRange**(`useType`, `maximalFrequency?`): \{ `maximalFrequency`: `number` = 1; `minimalFrequency`: `number` = 1 } \| \{ `maximalFrequency`: `undefined` \| `number` ; `minimalFrequency?`: `undefined` = 1 } \| \{ `maximalFrequency`: `undefined` ; `minimalFrequency?`: `undefined` = 1 }

Gets the frequency range based on the type of use and an optional maximal frequency.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `useType` | [`FrequencyOfUseType`](../enums/types_enums.FrequencyOfUseType.md) | The type of frequency of use. |
| `maximalFrequency?` | `number` | The optional maximal frequency. |

#### Returns

\{ `maximalFrequency`: `number` = 1; `minimalFrequency`: `number` = 1 } \| \{ `maximalFrequency`: `undefined` \| `number` ; `minimalFrequency?`: `undefined` = 1 } \| \{ `maximalFrequency`: `undefined` ; `minimalFrequency?`: `undefined` = 1 }

- The frequency range object.

**`Example`**

```ts
const singleUseFrequency = getFrequencyRange(FrequencyOfUseType.SINGLE);
console.log(singleUseFrequency); // { minimalFrequency: 1, maximalFrequency: 1 }

const limitedUseFrequency = getFrequencyRange(FrequencyOfUseType.LIMITED, 5);
console.log(limitedUseFrequency); // { maximalFrequency: 5 }
```

#### Defined in

[src/utils/get-frequency-range.ts:17](https://github.com/entur/products-models/blob/main/src/utils/get-frequency-range.ts#L17)

[@entur/products-models](../README.md) / utils/get-access-right-parameter-assignment-refs

# Module: utils/get-access-right-parameter-assignment-refs

## Functions

### getAccessRightParameterAssignmentRefs

▸ **getAccessRightParameterAssignmentRefs**(`data`): [`default`](../classes/models_Reference.default.md)[]

Gets access right parameter assignment references from the provided data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<[`DoritoData`](../interfaces/types_interfaces.DoritoData.md)\> | The data object containing parameter assignments or references. |

#### Returns

[`default`](../classes/models_Reference.default.md)[]

- An array of Reference objects representing access right parameter assignments.

**`Example`**

```ts
const dataWithAssignments = { parameterAssignments: [...], accessRightParameterAssignments: [...] };
const assignmentRefs = getAccessRightParameterAssignmentRefs(dataWithAssignments);
console.log(assignmentRefs); // [Reference1, Reference2, ...]
```

#### Defined in

[src/utils/get-access-right-parameter-assignment-refs.ts:16](https://github.com/entur/products-models/blob/main/src/utils/get-access-right-parameter-assignment-refs.ts#L16)

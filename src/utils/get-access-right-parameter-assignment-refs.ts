import GenericParameterAssignment from '../models/GenericParameterAssignment';
import Reference from '../models/Reference';
import { DoritoData } from '../types/interfaces';

/**
 * Gets access right parameter assignment references from the provided data.
 * @param {Partial<DoritoData>} data - The data object containing parameter assignments or references.
 * @returns {Reference[]} - An array of Reference objects representing access right parameter assignments.
 * @example
 * ```ts
 * const dataWithAssignments = { parameterAssignments: [...], accessRightParameterAssignments: [...] };
 * const assignmentRefs = getAccessRightParameterAssignmentRefs(dataWithAssignments);
 * console.log(assignmentRefs); // [Reference1, Reference2, ...]
 * ```
 */
export const getAccessRightParameterAssignmentRefs = (data: Partial<DoritoData>) => {
  let value: (GenericParameterAssignment | Reference)[] = [];

  if (data.parameterAssignments?.length) {
    value = data.parameterAssignments;
  } else if (data.accessRightParameterAssignmentRefs?.length) {
    value = data.accessRightParameterAssignmentRefs;
  } else if (data.parameterAssignmentRefs?.length) {
    value = data.parameterAssignmentRefs;
  } else if (data.accessRightParameterAssignments?.length) {
    value = data.accessRightParameterAssignments;
  }

  return value.map((arpa) => new Reference(arpa));
};

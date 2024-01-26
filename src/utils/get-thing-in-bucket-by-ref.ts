import BaseModel from '../models/BaseModel';
import Reference from '../models/Reference';
import Thing from '../models/Thing';
import { BucketStateType } from '../types/types';

/**
 * Gets a Thing instance from the bucket based on a reference.
 * @param {BucketStateType} bucket - The bucket containing instances.
 * @param {Reference} reference - The reference to look up in the bucket.
 * @template T - The type of the BaseModel used by Thing.
 * @returns {Thing<T> | undefined} - The Thing instance if found, otherwise undefined.
 * @example
 * ```ts
 * const bucketState = {
 *   instances: {
 *     '123': {
 *       '1.0': { id: '123', version: '1.0', name: 'ExampleThing' }
 *     }
 *   }
 * };
 *
 * const reference = { ref: '123', version: '1.0' };
 * const thingInstance = getThingInBucketByRef<ExampleModel>(bucketState, reference);
 * console.log(thingInstance); // { id: '123', version: '1.0', name: 'ExampleThing' }
 * ```
 */
export const getThingInBucketByRef = <T extends BaseModel>(
  bucket: BucketStateType,
  reference: Reference
) => {
  if (!bucket?.instances) {
    return undefined;
  }

  const { ref: id, version } = reference;
  const thing = bucket.instances[id]?.[version];

  return thing ? (thing as Thing<T>) : undefined;
};

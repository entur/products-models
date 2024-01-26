import Reference from '../models/Reference';

/**
 * Converts a distribution channel reference to a string as required by the pop API.
 * @param {Reference | string | undefined} distributionChannelRef - The distribution channel reference.
 * @returns {string | undefined} - The converted string representation of the distribution channel reference.
 * @todo This is an hack because the pop api requires an string when sending the request as post/put, but GET returns an object.
 * @example
 * ```ts
 * const referenceObject = { ref: 'channel123', version: '1.0' };
 * const refAsString = getDistributionChannelRefAsString(referenceObject);
 * console.log(refAsString); // 'channel123'
 *
 * const refAsStringDirect = getDistributionChannelRefAsString('directChannel');
 * console.log(refAsStringDirect); // 'directChannel'
 * ```
 */
export const getDistributionChannelRefAsString = (
  distributionChannelRef?: Reference | string
) => {
  if (typeof distributionChannelRef === 'string') {
    return distributionChannelRef;
  }

  return distributionChannelRef?.ref;
};

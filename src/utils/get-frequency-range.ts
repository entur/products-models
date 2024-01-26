import { FrequencyOfUseType } from '../types/enums';

/**
 * Gets the frequency range based on the type of use and an optional maximal frequency.
 * @param {FrequencyOfUseType} useType - The type of frequency of use.
 * @param {number} [maximalFrequency] - The optional maximal frequency.
 * @returns {{ minimalFrequency?: number, maximalFrequency?: number }} - The frequency range object.
 * @example
 * ```ts
 * const singleUseFrequency = getFrequencyRange(FrequencyOfUseType.SINGLE);
 * console.log(singleUseFrequency); // { minimalFrequency: 1, maximalFrequency: 1 }
 *
 * const limitedUseFrequency = getFrequencyRange(FrequencyOfUseType.LIMITED, 5);
 * console.log(limitedUseFrequency); // { maximalFrequency: 5 }
 * ```
 */
export const getFrequencyRange = (
  useType: FrequencyOfUseType,
  maximalFrequency?: number
) => {
  switch (useType) {
    case FrequencyOfUseType.SINGLE:
      return {
        minimalFrequency: 1,
        maximalFrequency: 1
      };
    case FrequencyOfUseType.TWICE_A_DAY:
      return {
        minimalFrequency: 2,
        maximalFrequency: 2
      };
    case FrequencyOfUseType.LIMITED:
      return { maximalFrequency };
    default:
      return {};
  }
};

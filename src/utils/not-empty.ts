import FareQuotaFactor from '../models/FareQuotaFactor';
import Reference from '../models/Reference';

/**
 * Checks if an array is not empty.
 * @param {(FareQuotaFactor[] | Reference[])} arr - The array to check for emptiness.
 * @returns {boolean} - Returns `true` if the array is not empty, otherwise `false`.
 * @example
 * ```ts
 * const fareFactors = [{ factor: 1.2 }, { factor: 1.5 }];
 * const isNotEmpty = notEmpty(fareFactors);
 * console.log(isNotEmpty); // true
 *
 * const emptyArray: FareQuotaFactor[] = [];
 * const isEmpty = notEmpty(emptyArray);
 * console.log(isEmpty); // false
 * ```
 */
export const notEmpty = (arr: FareQuotaFactor[] | Reference[]): boolean =>
  arr && arr.length > 0;

/**
 * Returns an array containing unique values from the input array.
 * @param {Array<T>} values - The input array from which unique values are extracted.
 * @template T - The type of elements in the array.
 * @returns {Array<T>} - An array containing only unique values from the input array.
 * @example
 * ```ts
 * const inputArray = [1, 2, 3, 2, 4, 5, 1];
 * const uniqueValues = uniqueValuesInArray(inputArray);
 * console.log(uniqueValues); // [1, 2, 3, 4, 5]
 * ```
 */
export const uniqueValuesInArray = <T>(values: Array<T>): Array<T> =>
  !values ? [] : Array.from(new Set(values));

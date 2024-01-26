/**
 * Filters an object based on a predicate function applied to its keys.
 * @param {T} obj - The input object to filter.
 * @param {(key: string) => boolean} predicate - The predicate function to filter keys.
 * @template T - The type of the input object.
 * @returns {Partial<T>} - The filtered object with only the keys satisfying the predicate.
 * @example
 * ```ts
 * const inputObject = { name: 'John', age: 25, city: 'New York' };
 * const filteredObject = filterObject(inputObject, (key) => key !== 'age');
 * console.log(filteredObject); // { name: 'John', city: 'New York' }
 * ```
 */
export const filterObject = <T extends { [k: string]: unknown }>(
  obj: T,
  predicate: (key: string) => boolean
): Partial<T> =>
    obj
      ? Object.keys(obj)
        .filter((k) => predicate(k))
        .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), {})
      : obj;

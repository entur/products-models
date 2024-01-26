/**
 * Checks if a value is empty.
 * @param {any} value - The value to check for emptiness.
 * @returns {boolean} - Returns `true` if the value is empty, otherwise `false`.
 * @example
 * ```ts
 * const nonEmptyString = 'Hello, World!';
 * const isNonEmpty = isEmpty(nonEmptyString);
 * console.log(isNonEmpty); // false
 *
 * const emptyString = '';
 * const isEmptyString = isEmpty(emptyString);
 * console.log(isEmptyString); // true
 *
 * const nonEmptyObject = { key: 'value' };
 * const isNonEmptyObject = isEmpty(nonEmptyObject);
 * console.log(isNonEmptyObject); // false
 *
 * const emptyObject = {};
 * const isEmptyObject = isEmpty(emptyObject);
 * console.log(isEmptyObject); // true
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEmpty = (value: any): boolean => {
  return (
    value == null || // From standard.js: Always use === - but obj == null is allowed to check null || undefined
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};

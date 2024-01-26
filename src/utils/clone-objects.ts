/**
 * Creates a shallow clone of an object with optional extra fields.
 * @param {T} object - The object to clone.
 * @param {object} [extraFields={}] - Additional fields to add to the cloned object.
 * @template T - The type of the object to clone.
 * @returns {T} - The cloned object.
 * @example
 * ```ts
 * const originalObject = { name: 'John', age: 25 };
 * const clonedObject = cloneObject(originalObject, { city: 'New York' });
 * console.log(clonedObject); // { name: 'John', age: 25, city: 'New York' }
 * ```
 */
export const cloneObject = <T>(object: T, extraFields: object = {}): T =>
  Object.assign(
    Object.create(Object.getPrototypeOf(object)),
    object,
    extraFields
  );

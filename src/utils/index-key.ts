/**
 * Generates an index key based on optional profile and GI (General Identifier) IDs.
 * @param {string | undefined} [profileId] - The profile ID (optional).
 * @param {string | undefined} [giId] - The GI (General Identifier) ID (optional).
 * @returns {string} - The generated index key.
 * @example
 * ```ts
 * const keyWithProfileAndGi = indexKey('123', '456');
 * console.log(keyWithProfileAndGi); // '123-456'
 *
 * const keyWithOnlyProfile = indexKey('789');
 * console.log(keyWithOnlyProfile); // '789-undefined'
 *
 * const keyWithOnlyGi = indexKey(undefined, '789');
 * console.log(keyWithOnlyGi); // 'undefined-789'
 *
 * const keyWithoutIds = indexKey();
 * console.log(keyWithoutIds); // 'undefined-undefined'
 * ```
 */
export const indexKey = (profileId?: string, giId?: string): string => `${profileId}-${giId}`;

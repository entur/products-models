/**
 * Extracts the code space from a Netex ID. See {@link https://enturas.atlassian.net/wiki/spaces/PUBLIC/pages/728563782/General+information+NeTEx|General information: NeTEx}
 * @param {string} netexId - The Netex ID to extract the code space from.
 * @returns {string} - The extracted code space.
 * @link
 * @example
 * ```ts
 * const netexId = 'app:User:3f7f1e4c';
 * const codeSpace = codeSpaceFromNetexId(netexId);
 * console.log(codeSpace); // 'app'
 * ```
 */
export const codeSpaceFromNetexId = (netexId: string): string =>
  netexId.split(':')[0];

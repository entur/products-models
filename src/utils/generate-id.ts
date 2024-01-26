import { v4 as uuid } from 'uuid';

type CodeSpace = string;
type NameOfClass = string;

/**
 * Generates a UUID string with the first 8 characters.
 * @returns {string} - The generated UUID string.
 * @example
 * ```ts
 * const shortUuid = createUuid();
 * console.log(shortUuid); // '3f7f1e4c'
 * ```
 */
export const createUuid = () => {
  return uuid().substr(0, 8);
};

/**
 * Generates a unique ID based on code space, class name, and a short UUID.
 * @param {CodeSpace} codeSpace - The code space for the ID.
 * @param {NameOfClass} nameOfClass - The name of the class for the ID.
 * @returns {string} - The generated unique ID.
 * @example
 * ```ts
 * const codeSpace = 'app';
 * const className = 'User';
 * const uniqueId = generateId(codeSpace, className);
 * console.log(uniqueId); // 'app:User:3f7f1e4c'
 * ```
 */
export const generateId = (codeSpace: CodeSpace, nameOfClass: NameOfClass) =>
  `${codeSpace}:${nameOfClass}:${createUuid()}`;

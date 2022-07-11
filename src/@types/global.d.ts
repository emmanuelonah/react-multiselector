/** *********************************************************************************
 * THIS FILE CONTAINS GLOBAL TYPE DEFINITIONS THAT ARE NOT SPECIFIC TO ANY MODULE,
 * BUT ARE REQUIRED BY THE WHOLE APPLICATION.
 */

export {};

declare global {
  /** *************************************************************************
   * @ValueOf IS A CUSTOM TYPE SIMILAR TO https://www.typescriptlang.org/
   * docs/handbook/2/keyof-types.html#handbook-content
   * @Description THE TYPE USES AN OBJECT VALUE, INTERFACE ATTR VALUE OR
   * TYPE ATTR VALUE TO FORM ITS TYPE DEFINITIONS.
   */

  export type ValueOf<T> = T[keyof T];
}

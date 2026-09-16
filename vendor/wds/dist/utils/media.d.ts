//#region src/utils/media.d.ts
/**
 * `respondDown` has the same function as `respondDown`, and works when it is smaller than the specified breakpoint.
 *
 * @example
 * // returns `@media screen and (max-width: 767px)`
 * respondTo('768px');
 */
declare const respondTo: (breakpoint: string) => string;
/**
 * `respondUp` has the same function as `respondUp`, and works when it is smaller than the specified breakpoint.
 *
 * @example
 * // returns `@media screen and (min-width: 768px)`
 * respondUp('768px');
 */
declare const respondMore: (breakpoint: string) => string;
/**
 * `respondTo` has the same function as `respondTo`, and works when it is smaller than the specified breakpoint.
 *
 * @example
 * // returns `@media screen and (max-width: 767px)`
 * respondDown('768px');
 */
declare const respondDown: (breakpoint: string) => string;
/**
 * `respondMore` has the same function as `respondMore`, and works when it is larger than the specified breakpoint.
 *
 * @example
 * // returns `@media screen and (min-width: 768px)`
 * respondDown('768px');
 */
declare const respondUp: (breakpoint: string) => string;
//#endregion
export { respondDown, respondMore, respondTo, respondUp };
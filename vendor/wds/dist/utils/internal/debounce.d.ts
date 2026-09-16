//#region src/utils/internal/debounce.d.ts
type Cancelable = {
  clear(): void;
};
declare const debounce: <T extends (...args: Array<any>) => any>(func: T, wait?: number) => T & Cancelable;
//#endregion
export { Cancelable, debounce };
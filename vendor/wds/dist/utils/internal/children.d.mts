//#region src/utils/internal/children.d.ts
declare const findComponentInChildren: <T extends object>(nodes: React.ReactNode, key: string) => Array<T>;
//#endregion
export { findComponentInChildren };
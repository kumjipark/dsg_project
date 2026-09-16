//#region src/components/image-base/helpers.d.ts
declare const loadImage: (src: string, abortSignal?: AbortSignal) => Promise<void>;
//#endregion
export { loadImage };
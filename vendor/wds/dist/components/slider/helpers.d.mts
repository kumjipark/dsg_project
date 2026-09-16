//#region src/components/slider/helpers.d.ts
declare const clamp: (value: number, [min, max]: [number, number]) => number;
declare const convertValueToPercentage: (value: number, min: number, max: number) => number;
declare const linearScale: (input: readonly [number, number], output: readonly [number, number]) => (value: number) => number;
declare const getClosestThumbIndex: (values: Array<number>, nextValue: number) => number;
//#endregion
export { clamp, convertValueToPercentage, getClosestThumbIndex, linearScale };
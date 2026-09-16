//#region src/components/modal/helpers.d.ts
declare const isTouchEvent: (value: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => value is TouchEvent | React.TouchEvent;
declare const calcOpacityRatio: (input: number, minPosition: number, maxPosition: number) => number;
declare const isMouseDownOnPeek: (e: React.MouseEvent | React.TouchEvent, peekHeight: number) => boolean;
//#endregion
export { calcOpacityRatio, isMouseDownOnPeek, isTouchEvent };
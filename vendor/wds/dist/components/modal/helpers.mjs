'use client';
//#region src/components/modal/helpers.tsx
const isTouchEvent = (value) => value.type.includes("touch");
const calcOpacityRatio = (input, minPosition, maxPosition) => {
	if (input <= minPosition) return 1;
	if (input >= maxPosition) return 0;
	return 1 - (input - minPosition) / (maxPosition - minPosition);
};
const isMouseDownOnPeek = (e, peekHeight) => {
	const { top } = e.currentTarget.getBoundingClientRect();
	const clientY = isTouchEvent(e) ? e.touches[0].clientY : e.clientY;
	return clientY >= top && clientY <= top + peekHeight;
};
//#endregion
export { calcOpacityRatio, isMouseDownOnPeek, isTouchEvent };

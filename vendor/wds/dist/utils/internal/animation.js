Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/utils/internal/animation.ts
const toPX = (value) => `${value}px`;
const calculateAnimationStyle = (targetElement, parentElement) => {
	const clientRect = targetElement.getBoundingClientRect();
	const parentClientRect = parentElement.getBoundingClientRect();
	return {
		left: toPX(clientRect.left - parentClientRect.left),
		right: toPX(parentClientRect.right - clientRect.right),
		width: toPX(clientRect.width),
		top: toPX(clientRect.top - parentClientRect.top),
		bottom: toPX(parentClientRect.bottom - clientRect.bottom),
		height: toPX(clientRect.height),
		borderRadius: window.getComputedStyle(targetElement).borderRadius
	};
};
//#endregion
exports.calculateAnimationStyle = calculateAnimationStyle;

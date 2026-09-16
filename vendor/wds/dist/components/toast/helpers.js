'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/components/toast/helpers.ts
const isCursorDevice = () => window.matchMedia("(pointer: fine)").matches;
const makeTransitionStyle = ({ open, height, disablePortal }) => {
	if (open && Boolean(height)) return {
		height,
		marginTop: disablePortal ? 0 : "10px",
		opacity: 1
	};
	else return {
		height: 0,
		margin: 0,
		opacity: 0
	};
};
//#endregion
exports.isCursorDevice = isCursorDevice;
exports.makeTransitionStyle = makeTransitionStyle;

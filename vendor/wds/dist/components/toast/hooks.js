'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_toast_helpers = require("./helpers.js");
let react = require("react");
//#region src/components/toast/hooks.ts
const useToastAnimation = ({ open, duration, onAnimationEnd, setOpen, disablePortal, component = "toast" }) => {
	const timeoutRef = (0, react.useRef)(void 0);
	const startTimeRef = (0, react.useRef)(void 0);
	const remainingTimeRef = (0, react.useRef)(void 0);
	const [height, setHeight] = (0, react.useState)(0);
	const ref = (0, react.useCallback)((el) => {
		if (el) {
			const handleUpdate = () => {
				const clientHeight = el.getBoundingClientRect().height;
				setHeight(clientHeight);
			};
			handleUpdate();
			new MutationObserver(handleUpdate).observe(el, {
				subtree: true,
				childList: true,
				characterData: true
			});
		}
	}, [setHeight]);
	const startTimer = (0, react.useCallback)((timeMs) => {
		if (timeMs !== Infinity) {
			startTimeRef.current = Date.now();
			remainingTimeRef.current = timeMs;
			timeoutRef.current = setTimeout(() => {
				setOpen(false);
			}, timeMs);
		}
	}, [setOpen]);
	const clearTimer = (0, react.useCallback)(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = void 0;
		}
	}, []);
	(0, react.useEffect)(() => {
		if (open) startTimer(typeof duration === "number" ? duration : 3e3);
		return clearTimer;
	}, [
		open,
		duration,
		startTimer,
		clearTimer
	]);
	const handleMouseEnter = () => {
		if (require_components_toast_helpers.isCursorDevice() && timeoutRef.current && startTimeRef.current && remainingTimeRef.current) {
			clearTimer();
			const elapsed = Date.now() - startTimeRef.current;
			remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed);
		}
	};
	const handleMouseLeave = () => {
		if (open && remainingTimeRef.current !== void 0) startTimer(remainingTimeRef.current);
	};
	const handleAnimationEnd = () => {
		if (open) {
			onAnimationEnd?.("show");
			return;
		}
		onAnimationEnd?.("hide");
	};
	return {
		ref,
		handleAnimationEnd,
		handleMouseEnter,
		handleMouseLeave,
		style: {
			[`--wds-${component}-animation-height`]: `${height}px`,
			[`--wds-${component}-animation-margin-top`]: disablePortal ? 0 : "10px"
		}
	};
};
//#endregion
exports.useToastAnimation = useToastAnimation;

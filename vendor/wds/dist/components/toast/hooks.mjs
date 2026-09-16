'use client';
import { isCursorDevice } from "./helpers.mjs";
import { useCallback, useEffect, useRef, useState } from "react";
//#region src/components/toast/hooks.ts
const useToastAnimation = ({ open, duration, onAnimationEnd, setOpen, disablePortal, component = "toast" }) => {
	const timeoutRef = useRef(void 0);
	const startTimeRef = useRef(void 0);
	const remainingTimeRef = useRef(void 0);
	const [height, setHeight] = useState(0);
	const ref = useCallback((el) => {
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
	const startTimer = useCallback((timeMs) => {
		if (timeMs !== Infinity) {
			startTimeRef.current = Date.now();
			remainingTimeRef.current = timeMs;
			timeoutRef.current = setTimeout(() => {
				setOpen(false);
			}, timeMs);
		}
	}, [setOpen]);
	const clearTimer = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = void 0;
		}
	}, []);
	useEffect(() => {
		if (open) startTimer(typeof duration === "number" ? duration : 3e3);
		return clearTimer;
	}, [
		open,
		duration,
		startTimer,
		clearTimer
	]);
	const handleMouseEnter = () => {
		if (isCursorDevice() && timeoutRef.current && startTimeRef.current && remainingTimeRef.current) {
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
export { useToastAnimation };

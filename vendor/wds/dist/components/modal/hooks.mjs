'use client';
import { getPreviousValue } from "../../utils/internal/responsive-props.mjs";
import { BOTTOM_SHEET_SHADOW, MODAL_NAME } from "./constants.mjs";
import { useModalContext } from "./contexts.mjs";
import { useMedia } from "../../hooks/internal/use-media.mjs";
import { calcOpacityRatio, isMouseDownOnPeek, isTouchEvent } from "./helpers.mjs";
import { useTheme } from "@wanteddev/wds-engine";
import { useEffect, useMemo, useRef } from "react";
//#region src/components/modal/hooks.ts
const useDraggable = ({ variant: givenVariant, peekHeight: givenPeekHeight, handle: givenHandle, xs, sm, md, lg, xl, target, dimmerRef }) => {
	const theme = useTheme();
	const breakpoint = useMemo(() => Object.keys(theme.breakpoint), [theme.breakpoint]);
	const variant = useMedia(breakpoint.map((v) => `(min-width: ${theme.breakpoint[v]})`), breakpoint.map((v) => getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "variant", givenVariant, v)), givenVariant);
	const handle = useMedia(breakpoint.map((v) => `(min-width: ${theme.breakpoint[v]})`), breakpoint.map((v) => getPreviousValue({
		xs,
		sm,
		md,
		lg,
		xl
	}, "handle", givenHandle, v)), givenHandle);
	const isEnabled = variant === "bottom" && Boolean(handle);
	const { setIsBottomSheet, ...context } = useModalContext(MODAL_NAME);
	const isDragging = useRef(false);
	const topNavigationHeight = useRef(0);
	const startedY = useRef(0);
	useEffect(() => {
		setIsBottomSheet(variant === "bottom");
	}, [variant, setIsBottomSheet]);
	const peekHeight = useRef(givenPeekHeight !== void 0 ? Math.max(givenPeekHeight, 20) : void 0);
	useEffect(() => {
		peekHeight.current = givenPeekHeight !== void 0 ? Math.max(givenPeekHeight, 20) : void 0;
	}, [givenPeekHeight]);
	const calcTopNavigationHeight = () => {
		const topNavigation = target?.querySelector("[wds-component=\"top-navigation\"]");
		const topNavigationToolbarHeight = target?.querySelector("[data-role=\"top-navigation-toolbar\"]")?.clientHeight ?? 0;
		topNavigationHeight.current = topNavigation ? topNavigation.clientHeight - topNavigationToolbarHeight : 20;
	};
	const handleVisibilityHidden = () => {
		if (!context.containerRef.current) return;
		context.setVisibility("hidden");
	};
	useEffect(() => {
		const container = context.containerRef.current;
		if (!isEnabled || !container) return;
		calcTopNavigationHeight();
		if (context.visibility === "hidden" && context.open) {
			container.style.removeProperty("transition");
			container.style.setProperty("--wds-modal-translate", `calc(100% - ${peekHeight.current ?? topNavigationHeight.current + 12}px)`);
			dimmerRef.current?.style.removeProperty("transition");
			dimmerRef.current?.style.removeProperty("opacity");
		} else if (!context.open) {
			container.style.removeProperty("transition");
			dimmerRef.current?.style.removeProperty("transition");
			dimmerRef.current?.style.removeProperty("opacity");
		}
	}, [
		isEnabled,
		context.visibility,
		context.open
	]);
	const onMouseDown = (e) => {
		const container = context.containerRef.current;
		if (!isEnabled || isDragging.current || !container) return;
		try {
			if (e.target.closest("[data-role=\"modal-container-grabber\"]") || isMouseDownOnPeek(e, peekHeight.current ?? topNavigationHeight.current + 12)) {
				calcTopNavigationHeight();
				startedY.current = isTouchEvent(e) ? e.touches[0].clientY : e.clientY;
				isDragging.current = true;
				context.containerRef.current?.style.setProperty("transition", "none");
				dimmerRef.current?.style.setProperty("transition", "none");
			}
		} catch (err) {
			isDragging.current = false;
		}
	};
	useEffect(() => {
		const onMouseMove = (e) => {
			const container = context.containerRef.current;
			if (!isDragging.current || !isEnabled || !container) return;
			e.preventDefault();
			const clientY = isTouchEvent(e) ? e.touches[0].clientY : e.clientY;
			const minPosition = window.innerHeight - container.clientHeight;
			const maxPosition = window.innerHeight - (peekHeight.current ?? topNavigationHeight.current + 12);
			const handleOpacityRatioStyle = (input) => {
				dimmerRef.current?.style.setProperty("opacity", calcOpacityRatio(input, minPosition, maxPosition).toFixed(2));
				if (calcOpacityRatio(input, minPosition, maxPosition) <= .25) container.style.setProperty("box-shadow", BOTTOM_SHEET_SHADOW);
				else container.style.removeProperty("box-shadow");
			};
			const diffY = clientY - startedY.current;
			if (diffY > 0) {
				if (context.visibility === "hidden") {
					const nextPosition = (peekHeight.current ?? topNavigationHeight.current + 12) - diffY;
					handleOpacityRatioStyle(window.innerHeight - nextPosition);
					return container.style.setProperty("--wds-modal-translate", `calc(100% - ${nextPosition}px)`);
				}
				const nextPosition = diffY;
				handleOpacityRatioStyle(minPosition + nextPosition);
				return container.style.setProperty("--wds-modal-translate", `calc(${nextPosition}px)`);
			}
			if (diffY < 0 && context.visibility === "hidden") {
				const nextPosition = Math.abs(diffY) + (peekHeight.current ?? topNavigationHeight.current + 12);
				if (minPosition >= window.innerHeight - nextPosition) {
					handleOpacityRatioStyle(minPosition);
					return container.style.setProperty("--wds-modal-translate", `0px`);
				}
				handleOpacityRatioStyle(window.innerHeight - nextPosition);
				return container.style.setProperty("--wds-modal-translate", `calc(100% - ${nextPosition}px)`);
			}
		};
		const onMouseUp = async (e) => {
			const container = context.containerRef.current;
			if (!isEnabled || !isDragging.current || !container) return;
			isDragging.current = false;
			e.stopPropagation();
			container.style.removeProperty("transition");
			dimmerRef.current?.style.removeProperty("transition");
			const totalHeight = window.innerHeight - startedY.current;
			const clientY = isTouchEvent(e) ? e.changedTouches[0].clientY : e.clientY;
			if (Math.abs(startedY.current - clientY) <= 10) {
				if (context.visibility === "hidden") {
					container.style.setProperty("--wds-modal-translate", `calc(100% - ${peekHeight.current ?? topNavigationHeight.current + 12}px)`);
					container.style.setProperty("box-shadow", BOTTOM_SHEET_SHADOW);
					dimmerRef.current?.style.setProperty("opacity", "0");
				} else {
					container.style.setProperty("--wds-modal-translate", "0px");
					container.style.removeProperty("box-shadow");
					dimmerRef.current?.style.setProperty("opacity", "1");
				}
				return;
			}
			if (window.innerHeight - clientY <= totalHeight / 1.25) {
				context.setVisibility("hidden");
				container.style.setProperty("--wds-modal-translate", `calc(100% - ${peekHeight.current ?? topNavigationHeight.current + 12}px)`);
				container.style.setProperty("box-shadow", BOTTOM_SHEET_SHADOW);
				dimmerRef.current?.style.setProperty("opacity", "0");
			} else {
				context.setVisibility("visible");
				container.style.setProperty("--wds-modal-translate", "0px");
				container.style.removeProperty("box-shadow");
				dimmerRef.current?.style.setProperty("opacity", "1");
			}
		};
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
		window.addEventListener("touchend", onMouseUp);
		window.addEventListener("touchmove", onMouseMove, { passive: false });
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
			window.removeEventListener("touchend", onMouseUp);
			window.removeEventListener("touchmove", onMouseMove);
		};
	}, [
		context,
		dimmerRef,
		theme,
		isEnabled
	]);
	return {
		isBottomSheetWithHandle: isEnabled,
		handleVisibilityHidden,
		onMouseDown,
		onTouchStart: onMouseDown
	};
};
//#endregion
export { useDraggable };

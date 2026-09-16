'use client';
import { isElementDisabled } from "../../utils/internal/element.mjs";
import { useTooltipGroupContext } from "./contexts.mjs";
import { useCallback, useEffect, useRef } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
//#region src/components/tooltip/hooks.ts
const useTooltip = ({ mode, open: originOpen, defaultOpen, onOpenChange, enterDelay, leaveDelay, disableCloseOnPointDown, disableOpenOnFocus, enableOpenOnFocusVisibleOnly }) => {
	const containerRef = useRef(null);
	const groupContext = useTooltipGroupContext();
	const openTimerRef = useRef(0);
	const closeTimerRef = useRef(0);
	const isMouseDownTriggered = useRef(false);
	const triggerRef = useRef(null);
	const [open = false, setOpen] = useControllableState({
		prop: originOpen,
		defaultProp: defaultOpen ?? false,
		onChange: (value) => {
			if (value) groupContext?.onOpen();
			else groupContext?.onClose();
			onOpenChange?.(value);
		}
	});
	const latestOpen = useRef(open);
	useEffect(() => {
		latestOpen.current = open;
	}, [open]);
	const handleOpen = useCallback((overrideDelay) => {
		if (mode === "hover") {
			window.clearTimeout(closeTimerRef.current);
			window.clearTimeout(openTimerRef.current);
			openTimerRef.current = window.setTimeout(() => {
				setOpen(true);
			}, overrideDelay ?? enterDelay);
		} else setOpen(false);
	}, [
		enterDelay,
		setOpen,
		mode
	]);
	const handleClose = useCallback((overrideDelay) => {
		if (mode === "hover") {
			window.clearTimeout(openTimerRef.current);
			window.clearTimeout(closeTimerRef.current);
			closeTimerRef.current = window.setTimeout(async () => {
				setOpen(false);
			}, overrideDelay ?? leaveDelay);
		} else setOpen(false);
	}, [
		leaveDelay,
		setOpen,
		mode
	]);
	useEffect(() => {
		const openTimer = openTimerRef.current;
		const closeTimer = closeTimerRef.current;
		return () => {
			window.clearTimeout(openTimer);
			window.clearTimeout(closeTimer);
		};
	}, []);
	const handleMouseOver = useCallback((e) => {
		if (e.type === "touchstart" || mode !== "hover") return;
		if (groupContext?.isOpenWithoutDelayRef.current) handleOpen(0);
		else handleOpen();
	}, [
		handleOpen,
		groupContext,
		mode
	]);
	const handleMouseLeave = useCallback((e) => {
		if (e.type === "touchstart" || mode !== "hover") return;
		if (groupContext?.isOpenWithoutDelayRef.current) handleClose(0);
		else handleClose();
	}, [
		handleClose,
		groupContext,
		mode
	]);
	const handleFocus = useCallback(() => {
		if (disableOpenOnFocus || mode !== "hover") return;
		if (!latestOpen.current && !isMouseDownTriggered.current && (enableOpenOnFocusVisibleOnly ? triggerRef.current?.matches(":focus-visible") : true)) handleOpen(0);
		isMouseDownTriggered.current = false;
	}, [
		handleOpen,
		mode,
		disableOpenOnFocus,
		enableOpenOnFocusVisibleOnly
	]);
	const handleBlur = useCallback(() => {
		if (mode === "hover") {
			if (latestOpen.current) handleClose(0);
		}
	}, [mode, handleClose]);
	const handleMouseDown = useCallback(() => {
		if (mode !== "hover" || disableCloseOnPointDown) return;
		isMouseDownTriggered.current = true;
		setOpen(false);
		window.clearTimeout(openTimerRef.current);
		window.clearTimeout(closeTimerRef.current);
	}, [
		mode,
		setOpen,
		disableCloseOnPointDown
	]);
	const handleDismiss = useCallback(() => {
		if (latestOpen.current) {
			setOpen(false);
			window.clearTimeout(openTimerRef.current);
			window.clearTimeout(closeTimerRef.current);
		}
	}, [setOpen]);
	return {
		triggerRef,
		containerRef,
		open,
		handleMouseOver,
		handleMouseLeave,
		handleFocus,
		handleBlur,
		handleMouseDown,
		handleClick: useCallback((e) => {
			if (latestOpen.current || mode !== "click" || isElementDisabled(e.currentTarget)) return;
			setOpen(!open);
		}, [
			setOpen,
			mode,
			open
		]),
		handleDismiss,
		handlePointerDownOutside: useCallback((e) => {
			if (e.currentTarget && triggerRef.current?.contains(e.currentTarget)) e.preventDefault();
		}, [])
	};
};
//#endregion
export { useTooltip };

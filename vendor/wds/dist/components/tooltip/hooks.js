'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_internal_element = require("../../utils/internal/element.js");
const require_components_tooltip_contexts = require("./contexts.js");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
//#region src/components/tooltip/hooks.ts
const useTooltip = ({ mode, open: originOpen, defaultOpen, onOpenChange, enterDelay, leaveDelay, disableCloseOnPointDown, disableOpenOnFocus, enableOpenOnFocusVisibleOnly }) => {
	const containerRef = (0, react.useRef)(null);
	const groupContext = require_components_tooltip_contexts.useTooltipGroupContext();
	const openTimerRef = (0, react.useRef)(0);
	const closeTimerRef = (0, react.useRef)(0);
	const isMouseDownTriggered = (0, react.useRef)(false);
	const triggerRef = (0, react.useRef)(null);
	const [open = false, setOpen] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: originOpen,
		defaultProp: defaultOpen ?? false,
		onChange: (value) => {
			if (value) groupContext?.onOpen();
			else groupContext?.onClose();
			onOpenChange?.(value);
		}
	});
	const latestOpen = (0, react.useRef)(open);
	(0, react.useEffect)(() => {
		latestOpen.current = open;
	}, [open]);
	const handleOpen = (0, react.useCallback)((overrideDelay) => {
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
	const handleClose = (0, react.useCallback)((overrideDelay) => {
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
	(0, react.useEffect)(() => {
		const openTimer = openTimerRef.current;
		const closeTimer = closeTimerRef.current;
		return () => {
			window.clearTimeout(openTimer);
			window.clearTimeout(closeTimer);
		};
	}, []);
	const handleMouseOver = (0, react.useCallback)((e) => {
		if (e.type === "touchstart" || mode !== "hover") return;
		if (groupContext?.isOpenWithoutDelayRef.current) handleOpen(0);
		else handleOpen();
	}, [
		handleOpen,
		groupContext,
		mode
	]);
	const handleMouseLeave = (0, react.useCallback)((e) => {
		if (e.type === "touchstart" || mode !== "hover") return;
		if (groupContext?.isOpenWithoutDelayRef.current) handleClose(0);
		else handleClose();
	}, [
		handleClose,
		groupContext,
		mode
	]);
	const handleFocus = (0, react.useCallback)(() => {
		if (disableOpenOnFocus || mode !== "hover") return;
		if (!latestOpen.current && !isMouseDownTriggered.current && (enableOpenOnFocusVisibleOnly ? triggerRef.current?.matches(":focus-visible") : true)) handleOpen(0);
		isMouseDownTriggered.current = false;
	}, [
		handleOpen,
		mode,
		disableOpenOnFocus,
		enableOpenOnFocusVisibleOnly
	]);
	const handleBlur = (0, react.useCallback)(() => {
		if (mode === "hover") {
			if (latestOpen.current) handleClose(0);
		}
	}, [mode, handleClose]);
	const handleMouseDown = (0, react.useCallback)(() => {
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
	const handleDismiss = (0, react.useCallback)(() => {
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
		handleClick: (0, react.useCallback)((e) => {
			if (latestOpen.current || mode !== "click" || require_utils_internal_element.isElementDisabled(e.currentTarget)) return;
			setOpen(!open);
		}, [
			setOpen,
			mode,
			open
		]),
		handleDismiss,
		handlePointerDownOutside: (0, react.useCallback)((e) => {
			if (e.currentTarget && triggerRef.current?.contains(e.currentTarget)) e.preventDefault();
		}, [])
	};
};
//#endregion
exports.useTooltip = useTooltip;

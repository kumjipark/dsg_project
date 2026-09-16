'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { hideOthers } from "../../utils/aria-hidden.mjs";
import { useAnimationPresence } from "../animation-presence/hooks.mjs";
import { MODAL_CLOSE_NAME, MODAL_CONTAINER_NAME, MODAL_DIMMER_NAME, MODAL_NAME, MODAL_NAVIGATION_BUTTON_NAME, MODAL_NAVIGATION_NAME, MODAL_TRIGGER_NAME } from "./constants.mjs";
import { ModalActionAreaProvider, ModalDimmerProvider, ModalNavigationProvider, ModalProvider, useModalContext, useModalDimmerContext, useModalNavigationContext } from "./contexts.mjs";
import { PortalOrFragment } from "../portal-or-fragment/index.mjs";
import { ScrollArea } from "../scroll-area/index.mjs";
import useResizeObserver from "../../hooks/internal/use-resize-observer.mjs";
import { DismissableLayer } from "../dismissable-layer/index.mjs";
import { FocusScope } from "../focus-scope/index.mjs";
import { RemoveScroll } from "../remove-scroll/index.mjs";
import react_use_size_default from "../../hooks/use-size.mjs";
import { TopNavigation, TopNavigationButton } from "../top-navigation/index.mjs";
import { modalContainerStyle, modalContainerWrapperStyle, modalContentItemStyle, modalContentStyle, modalDimmerStyle, modalGrabberStyle, modalNavigationStyle } from "./style.mjs";
import { useDraggable } from "./hooks.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useCallback, useEffect, useId, useRef, useState } from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { IconClose } from "@wanteddev/wds-icon";
import { composeEventHandlers } from "@radix-ui/primitive";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Slot } from "@radix-ui/react-slot";
import { jsx, jsxs } from "react/jsx-runtime";
import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { flushSync } from "react-dom";
//#region src/components/modal/index.tsx
const Modal = ({ children, open: openProp, defaultOpen, onOpenChange, onVisibilityChange }) => {
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	const containerRef = useRef(null);
	const [isBottomSheet, setIsBottomSheet] = useState(false);
	const [visibility, setVisibility] = useState("visible");
	const [innerContainer, setInnerContainer] = useState(null);
	const onVisibilityChangeCallback = useCallbackRef(onVisibilityChange);
	useEffect(() => {
		if (!isBottomSheet && open && visibility === "hidden") {
			setVisibility("visible");
			setOpen(false);
		}
	}, [
		isBottomSheet,
		open,
		visibility,
		setOpen,
		setVisibility
	]);
	useEffect(() => {
		if (!open) setVisibility("visible");
	}, [open]);
	return /* @__PURE__ */ jsx(ModalProvider, {
		isBottomSheet,
		setIsBottomSheet,
		visibility,
		setVisibility: useCallback((value) => {
			flushSync(() => {
				onVisibilityChangeCallback(value);
				setVisibility(value);
			});
			containerRef.current?.focus();
		}, [onVisibilityChangeCallback]),
		containerRef,
		innerContainer,
		setInnerContainer,
		containerId: useId(),
		titleId: useId(),
		headingId: useId(),
		summaryId: useId(),
		descriptionId: useId(),
		open,
		onOpenChange: setOpen,
		children
	});
};
Modal.displayName = MODAL_NAME;
const ModalTrigger = forwardRef((props, ref) => {
	const { containerId, open, onOpenChange } = useModalContext(MODAL_TRIGGER_NAME);
	return /* @__PURE__ */ jsx(Slot, {
		ref,
		"aria-controls": containerId,
		"aria-haspopup": "dialog",
		"aria-expanded": open,
		...props,
		onClick: composeEventHandlers(props.onClick, () => onOpenChange(true))
	});
});
ModalTrigger.displayName = MODAL_TRIGGER_NAME;
const ModalContainer = forwardRef(({ variant = "popup", size = "medium", resize = "hug", handle, xs, sm, md, lg, xl, children, container, disableOutsideClickClose = false, disableEscapeKeyDownClose = false, disableRemoveScroll = false, disablePortal = false, disableFocusScope = false, disableAriaHiddenOthers = false, forceMount = false, sticky = true, wrapperProps, peekHeight, dimmer = /* @__PURE__ */ jsx(ModalDimmer, {}), ...props }, ref) => {
	const { containerRef, open, onOpenChange, ...context } = useModalContext(MODAL_CONTAINER_NAME);
	const dimmerRef = useRef(null);
	const { isPresent, ref: wrapperRef } = useAnimationPresence(open || forceMount, {
		subtree: true,
		filter: (node) => {
			return node.isSameNode(dimmerRef.current) || node.isSameNode(containerRef.current);
		}
	});
	const composedRefs = useComposedRefs(wrapperProps?.ref, wrapperRef);
	const composedContainerRefs = useComposedRefs(containerRef, ref);
	const { isBottomSheetWithHandle, handleVisibilityHidden, ...dragProps } = useDraggable({
		peekHeight,
		variant,
		handle,
		xs,
		sm,
		md,
		lg,
		xl,
		target: context.innerContainer,
		dimmerRef
	});
	const topNavigationHeight = react_use_size_default(containerRef.current?.querySelector("[wds-component=\"top-navigation\"]") ?? null)?.height ?? 0;
	const actionAreaHeight = react_use_size_default(containerRef.current?.querySelector("[wds-component=\"action-area\"]") ?? null)?.height ?? 0;
	useEffect(() => {
		const content = containerRef.current;
		if (content && isPresent && !disableAriaHiddenOthers) {
			const undo = hideOthers(content);
			if (isBottomSheetWithHandle && context.visibility === "hidden") {
				undo();
				return;
			}
			return undo;
		}
	}, [
		isBottomSheetWithHandle,
		context.visibility,
		isPresent,
		disableAriaHiddenOthers
	]);
	if (!isPresent) return null;
	const grabberHeightGuard = isBottomSheetWithHandle ? 12 : 0;
	return /* @__PURE__ */ jsx(PortalOrFragment, {
		disablePortal,
		container,
		children: /* @__PURE__ */ jsxs(Box, {
			"data-visibility": isBottomSheetWithHandle ? context.visibility : void 0,
			...wrapperProps,
			ref: composedRefs,
			sx: [modalContainerWrapperStyle({
				variant,
				size,
				xs,
				sm,
				md,
				lg,
				xl
			}), wrapperProps?.sx],
			children: [/* @__PURE__ */ jsx(ModalDimmerProvider, {
				disableOutsideClickClose,
				isBottomSheetWithHandle,
				handleVisibilityHidden,
				dimmerRef,
				children: dimmer
			}), /* @__PURE__ */ jsx(FocusScope, {
				loop: open && context.visibility === "visible",
				trapped: open && context.visibility === "visible",
				disableFocusScope,
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: true,
					onPointerDownOutside: (e) => {
						const originalEvent = e.detail.originalEvent;
						const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
						if (originalEvent.button === 2 || ctrlLeftClick || disableOutsideClickClose) e.preventDefault();
					},
					onEscapeKeyDown: (e) => {
						if (disableEscapeKeyDownClose) e.preventDefault();
					},
					onFocusOutside: (e) => {
						if (disableOutsideClickClose || context.visibility === "hidden") e.preventDefault();
					},
					onDismiss: () => {
						if (!isBottomSheetWithHandle) onOpenChange(false);
						else handleVisibilityHidden();
					},
					ref: composedContainerRefs,
					children: /* @__PURE__ */ jsx(RemoveScroll, {
						enabled: open && context.visibility === "visible" && !disableRemoveScroll,
						as: Slot,
						allowPinchZoom: true,
						children: /* @__PURE__ */ jsx(Box, {
							role: "dialog",
							"aria-modal": open && context.visibility === "visible" && (!disableRemoveScroll || !disableFocusScope),
							id: context.containerId,
							"aria-describedby": `${context.descriptionId} ${context.summaryId}`,
							"aria-labelledby": `${context.titleId} ${context.headingId}`,
							...props,
							"wds-ignore-dismissable-layer": "true",
							"data-visibility": context.visibility,
							"data-status": open ? "open" : "close",
							sx: [modalContainerStyle({
								resize,
								variant,
								size,
								xs,
								sm,
								md,
								lg,
								xl
							}), props.sx],
							children: /* @__PURE__ */ jsx(ScrollArea, {
								"data-role": "modal-container-scroll-area",
								scrollbars: "vertical",
								viewportRef: context.setInnerContainer,
								sx: {
									display: "flex",
									flexGrow: "1"
								},
								viewportProps: {
									sx: {
										height: "initial",
										["& [data-radix-scroll-area-content]"]: {
											display: "flex",
											flexDirection: "column"
										}
									},
									style: {
										scrollPaddingTop: topNavigationHeight + grabberHeightGuard,
										scrollPaddingBottom: actionAreaHeight
									}
								},
								zIndex: 11,
								children: /* @__PURE__ */ jsxs(FlexBox, {
									flexDirection: "column",
									flex: "1",
									"data-role": "modal-container-wrapper",
									sx: {
										"--wds-modal-grabber-height-guard": `${grabberHeightGuard}px`,
										["&:has([data-role=\"modal-container-grabber\"])"]: { paddingTop: "var(--wds-modal-grabber-height-guard, 0px)" }
									},
									...dragProps,
									children: [isBottomSheetWithHandle && /* @__PURE__ */ jsx(FlexBox, {
										justifyContent: "center",
										sx: modalGrabberStyle,
										"data-role": "modal-container-grabber"
									}), /* @__PURE__ */ jsx(ModalScrollProvider, {
										sticky,
										children
									})]
								})
							})
						})
					})
				})
			})]
		})
	});
});
ModalContainer.displayName = MODAL_CONTAINER_NAME;
/**
* Use the form `<ModalContainer dimmer={<ModalDimmer />} />`.
* Only used to apply custom styles to the Dimmer.
*/
const ModalDimmer = forwardRef(({ as, ...props }, ref) => {
	const { open, visibility, onOpenChange } = useModalContext(MODAL_DIMMER_NAME);
	const { isBottomSheetWithHandle, dimmerRef, handleVisibilityHidden, disableOutsideClickClose } = useModalDimmerContext(MODAL_DIMMER_NAME);
	return /* @__PURE__ */ jsx(Box, {
		"data-role": "modal-dimmer",
		"data-status": open ? "open" : "close",
		"data-visibility": isBottomSheetWithHandle ? visibility : void 0,
		as: as || "div",
		...props,
		"wds-ignore-dismissable-layer": "true",
		ref: useComposedRefs(ref, dimmerRef),
		onPointerDown: composeEventHandlers(props.onPointerDown, (e) => {
			const target = e.target;
			if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
		}),
		onClick: composeEventHandlers(props.onClick, (e) => {
			if (disableOutsideClickClose) {
				e.preventDefault();
				return;
			}
			if (!isBottomSheetWithHandle) onOpenChange(false);
			else if (visibility === "visible") {
				e.preventDefault();
				handleVisibilityHidden();
			}
		}),
		sx: [modalDimmerStyle, props.sx]
	});
});
ModalDimmer.displayName = MODAL_DIMMER_NAME;
const ModalScrollProvider = ({ children, sticky }) => {
	const { innerContainer, ...context } = useModalContext("ModalContextProviders");
	const [navigationSticky, setNavigationSticky] = useState(false);
	const [actionAreaSticky, setActionAreaSticky] = useState(false);
	const handleResize = useCallback(() => {
		if (!innerContainer) return;
		setNavigationSticky(innerContainer.scrollTop > 0);
		setActionAreaSticky(innerContainer.scrollHeight - innerContainer.clientHeight > innerContainer.scrollTop);
	}, [innerContainer]);
	useResizeObserver(innerContainer?.firstElementChild, handleResize);
	useEffect(() => {
		const container = innerContainer;
		if (!container) return;
		const handleOnScroll = (e) => {
			const target = e.target;
			setNavigationSticky(target.scrollTop > 0);
			setActionAreaSticky(target.scrollHeight - target.clientHeight > target.scrollTop);
		};
		container.addEventListener("scroll", handleOnScroll);
		return () => container.removeEventListener("scroll", handleOnScroll);
	}, [innerContainer]);
	return /* @__PURE__ */ jsx(ModalNavigationProvider, {
		titleId: context.titleId,
		onOpenChange: context.onOpenChange,
		sticky: sticky && navigationSticky,
		children: /* @__PURE__ */ jsx(ModalActionAreaProvider, {
			sticky: sticky && actionAreaSticky,
			children
		})
	});
};
const ModalNavigation = forwardRef(({ leadingContent, trailingContent = /* @__PURE__ */ jsx(ModalClose, {}), variant, children, background, ...props }, ref) => {
	const { titleId, sticky } = useModalNavigationContext(MODAL_NAVIGATION_NAME);
	return /* @__PURE__ */ jsx(TopNavigation, {
		titleId,
		leadingContent,
		trailingContent,
		background: background ?? sticky,
		...props,
		variant: variant === "emphasized" ? void 0 : variant,
		sx: [modalNavigationStyle({ variant }), props.sx],
		ref,
		children: variant === "emphasized" && !children ? /* @__PURE__ */ jsx("span", {}) : children
	});
});
ModalNavigation.displayName = MODAL_NAVIGATION_NAME;
const ModalNavigationButton = forwardRef(({ as, ...props }, ref) => {
	return /* @__PURE__ */ jsx(TopNavigationButton, {
		...props,
		as: as || "button",
		ref
	});
});
ModalNavigationButton.displayName = MODAL_NAVIGATION_BUTTON_NAME;
const ModalClose = forwardRef(({ children, ...props }, ref) => {
	const { onOpenChange } = useModalNavigationContext(MODAL_CLOSE_NAME);
	return /* @__PURE__ */ jsx(TopNavigationButton, {
		"aria-label": "Close dialog",
		...props,
		onClick: composeEventHandlers(props.onClick, () => onOpenChange(false)),
		ref,
		children: children ?? /* @__PURE__ */ jsx(IconClose, {})
	});
});
ModalClose.displayName = MODAL_CLOSE_NAME;
const ModalContent = forwardRef(({ gap = "calc(var(--wds-modal-content-margin, 20px))", xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		sx: {
			height: "max-content",
			width: "100%",
			flex: "1"
		},
		children: /* @__PURE__ */ jsx(FlexBox, {
			ref,
			as: "div",
			"wds-component": "modal-content",
			flexDirection: "column",
			...props,
			sx: [modalContentStyle({
				gap,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx]
		})
	});
});
ModalContent.displayName = "ModalContent";
const ModalContentItem = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		ref,
		as: "div",
		gap: "12px",
		flexDirection: "column",
		...props,
		sx: [modalContentItemStyle, props.sx]
	});
});
ModalContentItem.displayName = "ModalContentItem";
const ModalHeading = forwardRef(({ as, variant = "heading2", weight = "bold", color = "semantic.label.normal", ...props }, ref) => {
	const context = useModalContext(MODAL_NAME);
	return /* @__PURE__ */ jsx(Typography, {
		ref,
		as: as || "h1",
		variant,
		weight,
		color,
		"data-role": "modal-heading",
		id: context.headingId,
		...props,
		sx: [{
			wordBreak: "keep-all",
			overflowWrap: "break-word"
		}, props.sx]
	});
});
ModalHeading.displayName = "ModalHeading";
const ModalSummary = forwardRef(({ as, variant = "body2", weight = "regular", color = "semantic.label.alternative", ...props }, ref) => {
	const context = useModalContext(MODAL_NAME);
	return /* @__PURE__ */ jsx(Typography, {
		ref,
		as: as || "p",
		variant,
		weight,
		color,
		"data-role": "modal-summary",
		id: context.summaryId,
		...props,
		sx: [{
			wordBreak: "keep-all",
			overflowWrap: "break-word"
		}, props.sx]
	});
});
ModalSummary.displayName = "ModalSummary";
const ModalDescription = forwardRef(({ as, variant = "body1-reading", weight = "regular", color = "semantic.label.normal", ...props }, ref) => {
	const context = useModalContext(MODAL_NAME);
	return /* @__PURE__ */ jsx(Typography, {
		ref,
		as: as || "p",
		variant,
		weight,
		color,
		"data-role": "modal-description",
		id: context.descriptionId,
		...props,
		sx: [{
			wordBreak: "keep-all",
			overflowWrap: "break-word"
		}, props.sx]
	});
});
ModalDescription.displayName = "ModalDescription";
//#endregion
export { Modal, ModalClose, ModalContainer, ModalContent, ModalContentItem, ModalDescription, ModalDimmer, ModalHeading, ModalNavigation, ModalNavigationButton, ModalSummary, ModalTrigger };

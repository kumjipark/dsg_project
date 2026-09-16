'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_animation_presence_hooks = require("../animation-presence/hooks.js");
const require_components_modal_constants = require("./constants.js");
const require_components_modal_contexts = require("./contexts.js");
const require_components_portal_or_fragment_index = require("../portal-or-fragment/index.js");
const require_components_scroll_area_index = require("../scroll-area/index.js");
const require_hooks_internal_use_resize_observer = require("../../hooks/internal/use-resize-observer.js");
const require_components_dismissable_layer_index = require("../dismissable-layer/index.js");
const require_components_focus_scope_index = require("../focus-scope/index.js");
const require_components_top_navigation_index = require("../top-navigation/index.js");
const require_components_modal_style = require("./style.js");
const require_components_modal_hooks = require("./hooks.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
let _radix_ui_react_use_callback_ref = require("@radix-ui/react-use-callback-ref");
let react_dom = require("react-dom");
let _radix_ui_react_use_size = require("@radix-ui/react-use-size");
let aria_hidden = require("aria-hidden");
let react_remove_scroll = require("react-remove-scroll");
//#region src/components/modal/index.tsx
const Modal = ({ children, open: openProp, defaultOpen, onOpenChange, onVisibilityChange }) => {
	const [open, setOpen] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	const containerRef = (0, react.useRef)(null);
	const [isBottomSheet, setIsBottomSheet] = (0, react.useState)(false);
	const [visibility, setVisibility] = (0, react.useState)("visible");
	const [innerContainer, setInnerContainer] = (0, react.useState)(null);
	const onVisibilityChangeCallback = (0, _radix_ui_react_use_callback_ref.useCallbackRef)(onVisibilityChange);
	(0, react.useEffect)(() => {
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
	(0, react.useEffect)(() => {
		if (!open) setVisibility("visible");
	}, [open]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_modal_contexts.ModalProvider, {
		isBottomSheet,
		setIsBottomSheet,
		visibility,
		setVisibility: (0, react.useCallback)((value) => {
			(0, react_dom.flushSync)(() => {
				onVisibilityChangeCallback(value);
				setVisibility(value);
			});
			containerRef.current?.focus();
		}, [onVisibilityChangeCallback]),
		containerRef,
		innerContainer,
		setInnerContainer,
		containerId: (0, react.useId)(),
		titleId: (0, react.useId)(),
		headingId: (0, react.useId)(),
		summaryId: (0, react.useId)(),
		descriptionId: (0, react.useId)(),
		open,
		onOpenChange: setOpen,
		children
	});
};
Modal.displayName = require_components_modal_constants.MODAL_NAME;
const ModalTrigger = (0, react.forwardRef)((props, ref) => {
	const { containerId, open, onOpenChange } = require_components_modal_contexts.useModalContext(require_components_modal_constants.MODAL_TRIGGER_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
		ref,
		"aria-controls": containerId,
		"aria-haspopup": "dialog",
		"aria-expanded": open,
		...props,
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => onOpenChange(true))
	});
});
ModalTrigger.displayName = require_components_modal_constants.MODAL_TRIGGER_NAME;
const ModalContainer = (0, react.forwardRef)(({ variant = "popup", size = "medium", resize = "hug", handle, xs, sm, md, lg, xl, children, container, disableOutsideClickClose = false, disableEscapeKeyDownClose = false, disableRemoveScroll = false, disablePortal = false, disableFocusScope = false, disableAriaHiddenOthers = false, forceMount = false, sticky = true, wrapperProps, peekHeight, dimmer = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModalDimmer, {}), ...props }, ref) => {
	const { containerRef, open, onOpenChange, ...context } = require_components_modal_contexts.useModalContext(require_components_modal_constants.MODAL_CONTAINER_NAME);
	const dimmerRef = (0, react.useRef)(null);
	const { isPresent, ref: wrapperRef } = require_components_animation_presence_hooks.useAnimationPresence(open || forceMount, {
		subtree: true,
		filter: (node) => {
			return node.isSameNode(dimmerRef.current) || node.isSameNode(containerRef.current);
		}
	});
	const composedRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(wrapperProps?.ref, wrapperRef);
	const composedContainerRefs = (0, _radix_ui_react_compose_refs.useComposedRefs)(containerRef, ref);
	const { isBottomSheetWithHandle, handleVisibilityHidden, ...dragProps } = require_components_modal_hooks.useDraggable({
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
	const topNavigationHeight = (0, _radix_ui_react_use_size.useSize)(containerRef.current?.querySelector("[wds-component=\"top-navigation\"]") ?? null)?.height ?? 0;
	const actionAreaHeight = (0, _radix_ui_react_use_size.useSize)(containerRef.current?.querySelector("[wds-component=\"action-area\"]") ?? null)?.height ?? 0;
	(0, react.useEffect)(() => {
		const content = containerRef.current;
		if (content && isPresent && !disableAriaHiddenOthers) {
			const undo = (0, aria_hidden.hideOthers)(content);
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
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_portal_or_fragment_index.PortalOrFragment, {
		disablePortal,
		container,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
			"data-visibility": isBottomSheetWithHandle ? context.visibility : void 0,
			...wrapperProps,
			ref: composedRefs,
			sx: [require_components_modal_style.modalContainerWrapperStyle({
				variant,
				size,
				xs,
				sm,
				md,
				lg,
				xl
			}), wrapperProps?.sx],
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_modal_contexts.ModalDimmerProvider, {
				disableOutsideClickClose,
				isBottomSheetWithHandle,
				handleVisibilityHidden,
				dimmerRef,
				children: dimmer
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_focus_scope_index.FocusScope, {
				loop: open && context.visibility === "visible",
				trapped: open && context.visibility === "visible",
				disableFocusScope,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_dismissable_layer_index.DismissableLayer, {
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
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_remove_scroll.RemoveScroll, {
						enabled: open && context.visibility === "visible" && !disableRemoveScroll,
						as: _radix_ui_react_slot.Slot,
						allowPinchZoom: true,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
							role: "dialog",
							"aria-modal": open && context.visibility === "visible" && (!disableRemoveScroll || !disableFocusScope),
							id: context.containerId,
							"aria-describedby": `${context.descriptionId} ${context.summaryId}`,
							"aria-labelledby": `${context.titleId} ${context.headingId}`,
							...props,
							"wds-ignore-dismissable-layer": "true",
							"data-visibility": context.visibility,
							"data-status": open ? "open" : "close",
							sx: [require_components_modal_style.modalContainerStyle({
								resize,
								variant,
								size,
								xs,
								sm,
								md,
								lg,
								xl
							}), props.sx],
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_scroll_area_index.ScrollArea, {
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
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
									flexDirection: "column",
									flex: "1",
									"data-role": "modal-container-wrapper",
									sx: {
										"--wds-modal-grabber-height-guard": `${grabberHeightGuard}px`,
										["&:has([data-role=\"modal-container-grabber\"])"]: { paddingTop: "var(--wds-modal-grabber-height-guard, 0px)" }
									},
									...dragProps,
									children: [isBottomSheetWithHandle && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
										justifyContent: "center",
										sx: require_components_modal_style.modalGrabberStyle,
										"data-role": "modal-container-grabber"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModalScrollProvider, {
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
ModalContainer.displayName = require_components_modal_constants.MODAL_CONTAINER_NAME;
/**
* Use the form `<ModalContainer dimmer={<ModalDimmer />} />`.
* Only used to apply custom styles to the Dimmer.
*/
const ModalDimmer = (0, react.forwardRef)(({ as, ...props }, ref) => {
	const { open, visibility, onOpenChange } = require_components_modal_contexts.useModalContext(require_components_modal_constants.MODAL_DIMMER_NAME);
	const { isBottomSheetWithHandle, dimmerRef, handleVisibilityHidden, disableOutsideClickClose } = require_components_modal_contexts.useModalDimmerContext(require_components_modal_constants.MODAL_DIMMER_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		"data-role": "modal-dimmer",
		"data-status": open ? "open" : "close",
		"data-visibility": isBottomSheetWithHandle ? visibility : void 0,
		as: as || "div",
		...props,
		"wds-ignore-dismissable-layer": "true",
		ref: (0, _radix_ui_react_compose_refs.useComposedRefs)(ref, dimmerRef),
		onPointerDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onPointerDown, (e) => {
			const target = e.target;
			if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
		}),
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (e) => {
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
		sx: [require_components_modal_style.modalDimmerStyle, props.sx]
	});
});
ModalDimmer.displayName = require_components_modal_constants.MODAL_DIMMER_NAME;
const ModalScrollProvider = ({ children, sticky }) => {
	const { innerContainer, ...context } = require_components_modal_contexts.useModalContext("ModalContextProviders");
	const [navigationSticky, setNavigationSticky] = (0, react.useState)(false);
	const [actionAreaSticky, setActionAreaSticky] = (0, react.useState)(false);
	const handleResize = (0, react.useCallback)(() => {
		if (!innerContainer) return;
		setNavigationSticky(innerContainer.scrollTop > 0);
		setActionAreaSticky(innerContainer.scrollHeight - innerContainer.clientHeight > innerContainer.scrollTop);
	}, [innerContainer]);
	require_hooks_internal_use_resize_observer.default(innerContainer?.firstElementChild, handleResize);
	(0, react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_modal_contexts.ModalNavigationProvider, {
		titleId: context.titleId,
		onOpenChange: context.onOpenChange,
		sticky: sticky && navigationSticky,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_modal_contexts.ModalActionAreaProvider, {
			sticky: sticky && actionAreaSticky,
			children
		})
	});
};
const ModalNavigation = (0, react.forwardRef)(({ leadingContent, trailingContent = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModalClose, {}), variant, children, background, ...props }, ref) => {
	const { titleId, sticky } = require_components_modal_contexts.useModalNavigationContext(require_components_modal_constants.MODAL_NAVIGATION_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_top_navigation_index.TopNavigation, {
		titleId,
		leadingContent,
		trailingContent,
		background: background ?? sticky,
		...props,
		variant: variant === "emphasized" ? void 0 : variant,
		sx: [require_components_modal_style.modalNavigationStyle({ variant }), props.sx],
		ref,
		children: variant === "emphasized" && !children ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {}) : children
	});
});
ModalNavigation.displayName = require_components_modal_constants.MODAL_NAVIGATION_NAME;
const ModalNavigationButton = (0, react.forwardRef)(({ as, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_top_navigation_index.TopNavigationButton, {
		...props,
		as: as || "button",
		ref
	});
});
ModalNavigationButton.displayName = require_components_modal_constants.MODAL_NAVIGATION_BUTTON_NAME;
const ModalClose = (0, react.forwardRef)(({ children, ...props }, ref) => {
	const { onOpenChange } = require_components_modal_contexts.useModalNavigationContext(require_components_modal_constants.MODAL_CLOSE_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_top_navigation_index.TopNavigationButton, {
		"aria-label": "Close dialog",
		...props,
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => onOpenChange(false)),
		ref,
		children: children ?? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconClose, {})
	});
});
ModalClose.displayName = require_components_modal_constants.MODAL_CLOSE_NAME;
const ModalContent = (0, react.forwardRef)(({ gap = "calc(var(--wds-modal-content-margin, 20px))", xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		sx: {
			height: "max-content",
			width: "100%",
			flex: "1"
		},
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			ref,
			as: "div",
			"wds-component": "modal-content",
			flexDirection: "column",
			...props,
			sx: [require_components_modal_style.modalContentStyle({
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
const ModalContentItem = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref,
		as: "div",
		gap: "12px",
		flexDirection: "column",
		...props,
		sx: [require_components_modal_style.modalContentItemStyle, props.sx]
	});
});
ModalContentItem.displayName = "ModalContentItem";
const ModalHeading = (0, react.forwardRef)(({ as, variant = "heading2", weight = "bold", color = "semantic.label.normal", ...props }, ref) => {
	const context = require_components_modal_contexts.useModalContext(require_components_modal_constants.MODAL_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
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
const ModalSummary = (0, react.forwardRef)(({ as, variant = "body2", weight = "regular", color = "semantic.label.alternative", ...props }, ref) => {
	const context = require_components_modal_contexts.useModalContext(require_components_modal_constants.MODAL_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
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
const ModalDescription = (0, react.forwardRef)(({ as, variant = "body1-reading", weight = "regular", color = "semantic.label.normal", ...props }, ref) => {
	const context = require_components_modal_contexts.useModalContext(require_components_modal_constants.MODAL_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
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
exports.Modal = Modal;
exports.ModalClose = ModalClose;
exports.ModalContainer = ModalContainer;
exports.ModalContent = ModalContent;
exports.ModalContentItem = ModalContentItem;
exports.ModalDescription = ModalDescription;
exports.ModalDimmer = ModalDimmer;
exports.ModalHeading = ModalHeading;
exports.ModalNavigation = ModalNavigation;
exports.ModalNavigationButton = ModalNavigationButton;
exports.ModalSummary = ModalSummary;
exports.ModalTrigger = ModalTrigger;

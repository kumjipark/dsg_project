'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_animation_presence_hooks = require("../animation-presence/hooks.js");
const require_components_text_button_index = require("../text-button/index.js");
const require_components_portal_or_fragment_index = require("../portal-or-fragment/index.js");
const require_components_dismissable_layer_index = require("../dismissable-layer/index.js");
const require_components_focus_scope_index = require("../focus-scope/index.js");
const require_components_alert_style = require("./style.js");
const require_components_alert_constants = require("./constants.js");
const require_components_alert_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
let aria_hidden = require("aria-hidden");
let react_remove_scroll = require("react-remove-scroll");
//#region src/components/alert/index.tsx
const Alert = ({ open: openProp, defaultOpen, onOpenChange, children }) => {
	const [open, setOpen] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_alert_contexts.AlertProvider, {
		open,
		setOpen,
		headingId: (0, react.useId)(),
		descriptionId: (0, react.useId)(),
		containerId: (0, react.useId)(),
		children
	});
};
Alert.displayName = require_components_alert_constants.ALERT_NAME;
/**
* Use the form `<Alert dimmer={<AlertDimmer />} />`.
* Only used to apply custom styles to the Dimmer.
*/
const AlertDimmer = (0, react.forwardRef)(({ as, ...props }, ref) => {
	const { disableOutsideClickClose, onDismiss, dimmerRef } = require_components_alert_contexts.useAlertContainerContext(require_components_alert_constants.ALERT_DIMMER_NAME);
	const { open, setOpen } = require_components_alert_contexts.useAlertContext(require_components_alert_constants.ALERT_DIMMER_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		ref: (0, _radix_ui_react_compose_refs.composeRefs)(ref, dimmerRef),
		as: as || "div",
		...props,
		"wds-ignore-dismissable-layer": "true",
		"data-role": "alert-dimmer",
		"data-status": open ? "open" : "close",
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (e) => {
			e.preventDefault();
			if (!disableOutsideClickClose) {
				setOpen(false);
				onDismiss?.();
			}
		}),
		onPointerDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onPointerDown, (e) => {
			const target = e.target;
			if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
		}),
		sx: [require_components_alert_style.alertDimmerStyle, props.sx]
	});
});
AlertDimmer.displayName = require_components_alert_constants.ALERT_DIMMER_NAME;
const AlertTrigger = (0, react.forwardRef)((props, ref) => {
	const { containerId, open, setOpen } = require_components_alert_contexts.useAlertContext(require_components_alert_constants.ALERT_TRIGGER_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
		ref,
		"aria-controls": containerId,
		"aria-haspopup": "dialog",
		"aria-expanded": open,
		...props,
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
			setOpen(true);
		})
	});
});
AlertTrigger.displayName = require_components_alert_constants.ALERT_TRIGGER_NAME;
const AlertContainer = (0, react.forwardRef)(({ disableOutsideClickClose = false, disableEscapeKeyDownClose, disableRemoveScroll = false, disableFocusScope = false, disableAriaHiddenOthers = false, disablePortal, container, onDismiss, forceMount = false, wrapperProps, dimmer = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AlertDimmer, {}), children, ...props }, forwardedRef) => {
	const { open, setOpen, headingId, descriptionId, containerId } = require_components_alert_contexts.useAlertContext(require_components_alert_constants.ALERT_CONTAINER_NAME);
	const dimmerRef = (0, react.useRef)(null);
	const containerRef = (0, react.useRef)(null);
	const composedRef = (0, _radix_ui_react_compose_refs.useComposedRefs)(containerRef, forwardedRef);
	const { isPresent, ref } = require_components_animation_presence_hooks.useAnimationPresence(open || forceMount, {
		subtree: true,
		filter: (node) => {
			return node.isSameNode(containerRef.current) || node.isSameNode(dimmerRef.current);
		}
	});
	(0, react.useEffect)(() => {
		const element = containerRef.current;
		if (element && isPresent && !disableAriaHiddenOthers) return (0, aria_hidden.hideOthers)(element);
	}, [isPresent, disableAriaHiddenOthers]);
	if (!isPresent) return null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_alert_contexts.AlertContainerProvider, {
		dimmerRef,
		disableOutsideClickClose,
		onDismiss,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_portal_or_fragment_index.PortalOrFragment, {
			container: disablePortal ? null : container,
			disablePortal,
			ref,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				...wrapperProps,
				sx: [require_components_alert_style.alertWrapperStyle, wrapperProps?.sx],
				"wds-ignore-dismissable-layer": "true",
				children: [dimmer, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_focus_scope_index.FocusScope, {
					loop: true,
					trapped: true,
					disableFocusScope,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_dismissable_layer_index.DismissableLayer, {
						onPointerDownOutside: (e) => {
							const originalEvent = e.detail.originalEvent;
							const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
							if (originalEvent.button === 2 || ctrlLeftClick || disableOutsideClickClose) e.preventDefault();
						},
						onFocusOutside: (e) => {
							if (disableOutsideClickClose) e.preventDefault();
						},
						onEscapeKeyDown: (e) => {
							if (disableEscapeKeyDownClose) e.preventDefault();
						},
						onDismiss: () => {
							onDismiss?.();
							setOpen(false);
						},
						role: "presentation",
						asChild: true,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_remove_scroll.RemoveScroll, {
							as: _radix_ui_react_slot.Slot,
							allowPinchZoom: true,
							enabled: !disableRemoveScroll,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
								ref: composedRef,
								role: "alertdialog",
								"aria-modal": !disableRemoveScroll || !disableFocusScope,
								"aria-describedby": descriptionId,
								"aria-labelledby": headingId,
								id: containerId,
								"data-status": open ? "open" : "close",
								...props,
								sx: [require_components_alert_style.alertContainerStyle, props.sx],
								children
							})
						})
					})
				})]
			})
		})
	});
});
AlertContainer.displayName = require_components_alert_constants.ALERT_CONTAINER_NAME;
const AlertContent = (0, react.forwardRef)(({ children, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref,
		flexDirection: "column",
		gap: "6px",
		...props,
		sx: [require_components_alert_style.alertContentStyle, props.sx],
		children
	});
});
AlertContent.displayName = require_components_alert_constants.ALERT_CONTENT_NAME;
const AlertHeading = (0, react.forwardRef)(({ children, ...props }, ref) => {
	const { headingId } = require_components_alert_contexts.useAlertContext(require_components_alert_constants.ALERT_HEADING_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		"wds-component": "alert-title",
		variant: "headline1",
		weight: "bold",
		color: "semantic.label.normal",
		ref,
		as: "h2",
		id: headingId,
		...props,
		children
	});
});
AlertHeading.displayName = require_components_alert_constants.ALERT_HEADING_NAME;
const AlertDescription = (0, react.forwardRef)(({ children, ...props }, ref) => {
	const { descriptionId } = require_components_alert_contexts.useAlertContext(require_components_alert_constants.ALERT_DESCRIPTION_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		variant: "body2",
		weight: "regular",
		color: "semantic.label.alternative",
		"wds-component": "alert-description",
		ref,
		as: "p",
		id: descriptionId,
		...props,
		sx: [{
			wordBreak: "keep-all",
			overflowWrap: "anywhere"
		}, props.sx],
		children
	});
});
AlertDescription.displayName = require_components_alert_constants.ALERT_DESCRIPTION_NAME;
const AlertActionArea = (0, react.forwardRef)(({ children, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		flexDirection: "row",
		alignItems: "center",
		"wds-component": "alert-action-area",
		justifyContent: "flex-end",
		gap: "24px",
		ref,
		...props,
		sx: [require_components_alert_style.alertActionStyle, props.sx],
		children
	});
});
AlertActionArea.displayName = require_components_alert_constants.ALERT_ACTION_AREA_NAME;
const AlertActionAreaButton = (0, react.forwardRef)(({ variant = "normal", ...props }, ref) => {
	const { setOpen } = require_components_alert_contexts.useAlertContext(require_components_alert_constants.ALERT_ACTION_AREA_BUTTON_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_index.TextButton, {
		size: "medium",
		color: variant === "normal" ? "primary" : "assistive",
		ref,
		...props,
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => {
			setOpen(false);
		}),
		sx: variant === "negative" ? [(theme) => ({
			color: (0, _wanteddev_wds_engine.getColorByToken)(theme, "semantic.status.negative"),
			["[wds-component=\"with-interaction\"]"]: { backgroundColor: (0, _wanteddev_wds_engine.getColorByToken)(theme, "semantic.status.negative") }
		}), props.sx] : props.sx
	});
});
AlertActionAreaButton.displayName = require_components_alert_constants.ALERT_ACTION_AREA_BUTTON_NAME;
//#endregion
exports.Alert = Alert;
exports.AlertActionArea = AlertActionArea;
exports.AlertActionAreaButton = AlertActionAreaButton;
exports.AlertContainer = AlertContainer;
exports.AlertContent = AlertContent;
exports.AlertDescription = AlertDescription;
exports.AlertDimmer = AlertDimmer;
exports.AlertHeading = AlertHeading;
exports.AlertTrigger = AlertTrigger;

'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_animation_presence_index = require("../animation-presence/index.js");
const require_components_portal_or_fragment_index = require("../portal-or-fragment/index.js");
const require_components_toast_hooks = require("./hooks.js");
const require_components_toast_style = require("./style.js");
const require_components_toast_constants = require("./constants.js");
const require_components_toast_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _radix_ui_primitive = require("@radix-ui/primitive");
let _radix_ui_react_slot = require("@radix-ui/react-slot");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/toast/index.tsx
const Toast = (0, react.forwardRef)(({ duration: durationProp = "short", variant = "normal", onAnimationEnd, defaultOpen, open: openProp, onOpenChange, children, container, disablePortal, disableAnimation, forceMount, as, ...props }, forwardedRef) => {
	const [open, setOpen] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		defaultProp: defaultOpen ?? false,
		prop: openProp,
		onChange: onOpenChange
	});
	const contentId = (0, react.useId)();
	const { ref, handleAnimationEnd, handleMouseEnter, handleMouseLeave, style } = require_components_toast_hooks.useToastAnimation({
		open,
		setOpen,
		duration: (0, react.useMemo)(() => {
			if (typeof durationProp === "number") return durationProp;
			switch (durationProp) {
				case "long": return 5e3;
				default: return 3e3;
			}
		}, [durationProp]),
		onAnimationEnd,
		disablePortal,
		component: "toast"
	});
	const ariaAttributes = (0, react.useMemo)(() => {
		if (variant === "negative") return {
			role: "alert",
			"aria-live": "assertive"
		};
		return {
			role: variant === "cautionary" ? "alert" : "status",
			"aria-live": "polite"
		};
	}, [variant]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_animation_presence_index.AnimationPresence, {
		present: open || forceMount,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_portal_or_fragment_index.PortalOrFragment, {
			disablePortal,
			container: container ?? globalThis?.document?.querySelector("#wds-region-manager-bottom"),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				"aria-atomic": true,
				...ariaAttributes,
				"aria-describedby": contentId,
				ref: forwardedRef,
				...props,
				as: as ?? "div",
				onMouseEnter: (0, _radix_ui_primitive.composeEventHandlers)(props.onMouseEnter, handleMouseEnter),
				onMouseLeave: (0, _radix_ui_primitive.composeEventHandlers)(props.onMouseLeave, handleMouseLeave),
				"data-status": open ? "open" : "close",
				onAnimationEnd: handleAnimationEnd,
				style: {
					...style,
					...props.style
				},
				sx: [require_components_toast_style.wrapperStyle({ disableAnimation }), props.sx],
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
					ref,
					sx: require_components_toast_style.toastStyle,
					"data-role": "toast",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
							role: "presentation",
							sx: require_components_toast_style.firstOverlayStyle
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
							role: "presentation",
							sx: require_components_toast_style.secondOverlayStyle
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_toast_contexts.ToastProvider, {
							contentId,
							variant,
							children
						})
					]
				})
			})
		})
	});
});
Toast.displayName = require_components_toast_constants.TOAST_NAME;
const ToastContainer = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		gap: "8px",
		alignItems: "center",
		ref,
		...props,
		sx: [{ ["& svg"]: { flexShrink: 0 } }, props.sx]
	});
});
ToastContainer.displayName = require_components_toast_constants.TOAST_CONTAINER_NAME;
const ToastIcon = (0, react.forwardRef)(({ children, ...props }, ref) => {
	const { variant } = require_components_toast_contexts.useToastContext(require_components_toast_constants.TOAST_ICON_NAME);
	const icon = children || require_components_toast_constants.toastIconComponent[variant];
	if (!icon) return null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_radix_ui_react_slot.Slot, {
		ref,
		...props,
		children: icon
	});
});
ToastIcon.displayName = require_components_toast_constants.TOAST_ICON_NAME;
const ToastContent = (0, react.forwardRef)((props, ref) => {
	const { contentId } = require_components_toast_contexts.useToastContext(require_components_toast_constants.TOAST_CONTENT_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		as: "p",
		color: "semantic.static.white",
		variant: "body2",
		weight: "bold",
		id: contentId,
		ref,
		...props,
		sx: [
			require_components_toast_style.messageStyle,
			require_components_toast_style.textStyle,
			props.sx
		]
	});
});
ToastContent.displayName = require_components_toast_constants.TOAST_CONTENT_NAME;
//#endregion
exports.Toast = Toast;
exports.ToastContainer = ToastContainer;
exports.ToastContent = ToastContent;
exports.ToastIcon = ToastIcon;

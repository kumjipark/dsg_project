'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_utils_typography = require("../../utils/typography.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_animation_presence_index = require("../animation-presence/index.js");
const require_components_text_button_index = require("../text-button/index.js");
const require_components_portal_or_fragment_index = require("../portal-or-fragment/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_components_toast_hooks = require("../toast/hooks.js");
const require_components_snackbar_constants = require("./constants.js");
const require_components_snackbar_contexts = require("./contexts.js");
const require_components_snackbar_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let _radix_ui_primitive = require("@radix-ui/primitive");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/snackbar/index.tsx
const Snackbar = (0, react.forwardRef)(({ duration: durationProp = "short", variant = "normal", onAnimationEnd, defaultOpen, open: openProp, onOpenChange, children, container, disablePortal, forceMount = false, disableAnimation, as, ...props }, forwardedRef) => {
	const [open, setOpen] = (0, _radix_ui_react_use_controllable_state.useControllableState)({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange
	});
	const headingId = (0, react.useId)();
	const descriptionId = (0, react.useId)();
	const { ref: containerRef, handleAnimationEnd, handleMouseEnter, handleMouseLeave, style } = require_components_toast_hooks.useToastAnimation({
		open,
		setOpen,
		duration: (0, react.useMemo)(() => {
			if (typeof durationProp === "number") return durationProp;
			switch (durationProp) {
				case "long": return 16e3;
				default: return 4e3;
			}
		}, [durationProp]),
		onAnimationEnd,
		disablePortal,
		component: "snackbar"
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_animation_presence_index.AnimationPresence, {
		present: open || forceMount,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_portal_or_fragment_index.PortalOrFragment, {
			disablePortal,
			container: container ?? globalThis?.document?.querySelector("#wds-region-manager-bottom"),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				"aria-atomic": true,
				role: "status",
				"aria-live": "polite",
				"aria-describedby": descriptionId,
				"aria-labelledby": headingId,
				...props,
				as: as ?? "div",
				ref: forwardedRef,
				onMouseEnter: (0, _radix_ui_primitive.composeEventHandlers)(props.onMouseEnter, handleMouseEnter),
				onMouseLeave: (0, _radix_ui_primitive.composeEventHandlers)(props.onMouseLeave, handleMouseLeave),
				onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)(props.onKeyDown, (e) => {
					if (e.key === "Escape") setOpen(false);
				}),
				"data-status": open ? "open" : "close",
				onAnimationEnd: handleAnimationEnd,
				style: {
					...style,
					...props.style
				},
				sx: [require_components_snackbar_style.wrapperStyle({ disableAnimation }), props.sx],
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
					ref: containerRef,
					sx: require_components_snackbar_style.snackbarStyle,
					"data-role": "snackbar",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
							role: "presentation",
							sx: require_components_snackbar_style.firstOverlayStyle
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
							role: "presentation",
							sx: require_components_snackbar_style.secondOverlayStyle
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
							gap: "12px",
							alignItems: "center",
							"data-role": "snackbar-container",
							sx: require_components_snackbar_style.fullWidthFlexBoxStyle,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_snackbar_contexts.SnackbarProvider, {
								headingId,
								descriptionId,
								variant,
								onOpenChange: setOpen,
								children
							})
						})
					]
				})
			})
		})
	});
});
Snackbar.displayName = require_components_snackbar_constants.SNACKBAR_NAME;
const SnackbarContent = (0, react.forwardRef)(({ extraContent, children, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		flex: "1 1 auto",
		gap: "8px",
		alignItems: "center",
		ref,
		...props,
		children: [extraContent, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			flexDirection: "column",
			sx: require_components_snackbar_style.messageStyle,
			"data-role": "snackbar-content-area",
			children
		})]
	});
});
SnackbarContent.displayName = require_components_snackbar_constants.SNACKBAR_CONTENT_NAME;
const SnackbarExtraContent = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref,
		flexShrink: 0,
		...props,
		sx: [{
			width: "fit-content",
			height: "fit-content"
		}, props.sx]
	});
});
SnackbarExtraContent.displayName = require_components_snackbar_constants.SNACKBAR_EXTRA_CONTENT_NAME;
const SnackbarHeading = (0, react.forwardRef)((props, ref) => {
	const { headingId } = require_components_snackbar_contexts.useSnackbarContext(require_components_snackbar_constants.SNACKBAR_HEADING_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		as: "p",
		id: headingId,
		ref,
		color: "semantic.static.white",
		variant: "body2",
		weight: "bold",
		...props,
		sx: [require_components_snackbar_style.textStyle, props.sx]
	});
});
SnackbarHeading.displayName = require_components_snackbar_constants.SNACKBAR_HEADING_NAME;
const SnackbarDescription = (0, react.forwardRef)((props, ref) => {
	const { descriptionId } = require_components_snackbar_contexts.useSnackbarContext(require_components_snackbar_constants.SNACKBAR_DESCRIPTION_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		as: "p",
		id: descriptionId,
		ref,
		color: "semantic.static.white",
		variant: "label2",
		weight: "regular",
		...props,
		sx: [
			require_components_snackbar_style.textStyle,
			require_utils_typography.ellipsisTypographyStyle(2),
			props.sx
		]
	});
});
SnackbarDescription.displayName = require_components_snackbar_constants.SNACKBAR_DESCRIPTION_NAME;
const SnackbarAction = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_index.TextButton, {
		ref,
		color: "assistive",
		size: "medium",
		...props,
		sx: [require_components_snackbar_style.snackbarActionStyle, props.sx]
	});
});
SnackbarAction.displayName = require_components_snackbar_constants.SNACKBAR_ACTION_NAME;
const SnackbarCloseButton = (0, react.forwardRef)(({ children, ...props }, ref) => {
	const { onOpenChange } = require_components_snackbar_contexts.useSnackbarContext(require_components_snackbar_constants.SNACKBAR_CLOSE_BUTTON_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
		ref,
		size: 20,
		color: "semantic.static.white",
		"aria-label": "Close snackbar",
		...props,
		onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, () => onOpenChange(false)),
		sx: [require_components_snackbar_style.snackbarCloseButtonStyle, props.sx],
		children: children ?? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconClose, { "aria-hidden": true })
	});
});
SnackbarCloseButton.displayName = require_components_snackbar_constants.SNACKBAR_CLOSE_BUTTON_NAME;
//#endregion
exports.Snackbar = Snackbar;
exports.SnackbarAction = SnackbarAction;
exports.SnackbarCloseButton = SnackbarCloseButton;
exports.SnackbarContent = SnackbarContent;
exports.SnackbarDescription = SnackbarDescription;
exports.SnackbarExtraContent = SnackbarExtraContent;
exports.SnackbarHeading = SnackbarHeading;

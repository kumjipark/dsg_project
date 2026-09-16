'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_button_index = require("../button/index.js");
const require_components_text_button_index = require("../text-button/index.js");
const require_components_modal_contexts = require("../modal/contexts.js");
const require_components_action_area_constants = require("./constants.js");
const require_components_action_area_contexts = require("./contexts.js");
const require_components_action_area_style = require("./style.js");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/action-area/index.tsx
const ActionArea = (0, react.forwardRef)(({ extra = false, extraContent, compactContent, variant = "strong", children, caption, background, divider = true, ...props }, ref) => {
	const modalOption = require_components_modal_contexts.useModalActionAreaContext();
	const modalSticky = modalOption !== void 0 ? modalOption.sticky : void 0;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_action_area_contexts.ActionAreaProvider, {
		variant,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			"wds-component": "action-area",
			ref,
			flexShrink: 0,
			flexDirection: "column",
			...props,
			sx: [require_components_action_area_style.actionAreaStyle({
				divider,
				extra,
				background: extra ? false : background ?? modalSticky
			}), props.sx],
			children: [
				extra && Boolean(extraContent) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					gap: "8px",
					flexDirection: "column",
					alignItems: "center",
					"data-role": "action-area-extra-content",
					sx: { marginBottom: "calc(4px + var(--wds-action-area-margin-y, 20px))" },
					children: extraContent
				}),
				Boolean(caption) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
					align: "center",
					variant: "label2",
					weight: "regular",
					"data-role": "action-area-caption",
					color: "semantic.label.alternative",
					sx: { marginBottom: "16px" },
					children: caption
				}),
				variant === "compact" && Boolean(compactContent) ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
					justifyContent: "space-between",
					alignItems: "center",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						flexDirection: "row",
						"data-role": "action-area-compact-content",
						children: compactContent
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						flexShrink: 0,
						gap: "12px",
						"data-role": "action-area-wrapper",
						children
					})]
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
					flexDirection: variant === "strong" ? "column" : "row",
					gap: variant === "strong" ? "8px" : "12px",
					"data-role": "action-area-wrapper",
					alignSelf: variant === "compact" ? "flex-end" : "initial",
					children
				})
			]
		})
	});
});
ActionArea.displayName = require_components_action_area_constants.ACTION_AREA_NAME;
const ActionAreaButton = (0, react.forwardRef)(({ variant = "main", textButtonColor, buttonVariant, buttonColor, ...props }, ref) => {
	const { variant: parentVariant } = require_components_action_area_contexts.useActionAreaContext(require_components_action_area_constants.ACTION_AREA_BUTTON_NAME);
	return {
		main: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_button_index.Button, {
			ref,
			variant: buttonVariant ?? (parentVariant === "cancel" ? "outlined" : "solid"),
			color: buttonColor ?? (parentVariant === "cancel" ? "assistive" : "primary"),
			size: "large",
			fullWidth: parentVariant === "strong" || parentVariant === "cancel",
			...props,
			sx: [require_components_action_area_style.actionButtonCancel({
				variant,
				parentVariant
			}), props.sx]
		}),
		alternative: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_button_index.Button, {
			ref,
			variant: buttonVariant ?? "outlined",
			size: "large",
			color: buttonColor ?? "primary",
			fullWidth: parentVariant === "strong",
			...props,
			sx: [require_components_action_area_style.actionButtonCancel({
				variant,
				parentVariant
			}), props.sx]
		}),
		sub: parentVariant === "strong" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_index.TextButton, {
			ref,
			color: textButtonColor ?? "assistive",
			size: "small",
			...props,
			sx: [{
				margin: "8px 0px",
				width: "fit-content",
				alignSelf: "center"
			}, props.sx]
		}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_button_index.Button, {
			ref,
			variant: buttonVariant ?? "outlined",
			color: buttonColor ?? "assistive",
			size: "large",
			...props,
			sx: [require_components_action_area_style.actionButtonCancel({
				variant,
				parentVariant
			}), props.sx]
		})
	}[variant];
});
ActionAreaButton.displayName = require_components_action_area_constants.ACTION_AREA_BUTTON_NAME;
//#endregion
exports.ActionArea = ActionArea;
exports.ActionAreaButton = ActionAreaButton;

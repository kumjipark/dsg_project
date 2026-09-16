'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_loading_index = require("../loading/index.js");
const require_components_button_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_primitive = require("@radix-ui/primitive");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/button/index.tsx
const Button = (0, react.forwardRef)(({ as, variant = "solid", disabled = false, disableInteraction = false, fullWidth = false, color = "primary", loading = false, iconOnly, leadingContent, trailingContent, size = "medium", disableLoadingPreventEvents, children, xs, sm, md, lg, xl, ...props }, ref) => {
	const id = (0, react.useId)();
	const getInteractionVariant = () => {
		switch (variant) {
			case "outlined": return "light";
			case "solid": return color === "primary" ? "strong" : "normal";
		}
	};
	const handlePreventEventsLoading = (e) => {
		if (loading && !disableLoadingPreventEvents) {
			e.preventDefault();
			e.stopPropagation();
		}
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		color: "semantic.label.normal",
		variant: getInteractionVariant(),
		disabled: disableInteraction || disabled,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
			as: as || "button",
			"aria-labelledby": iconOnly ? void 0 : id,
			ref,
			disabled,
			"aria-disabled": disabled,
			type: "button",
			...props,
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(handlePreventEventsLoading, props.onClick),
			onMouseDown: (0, _radix_ui_primitive.composeEventHandlers)(handlePreventEventsLoading, props.onMouseDown),
			onPointerDown: (0, _radix_ui_primitive.composeEventHandlers)(handlePreventEventsLoading, props.onPointerDown),
			onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)((e) => {
				if (e.key === "Enter" || e.key === " ") handlePreventEventsLoading(e);
			}, props.onKeyDown),
			sx: [require_components_button_style.buttonStyle({
				variant,
				iconOnly,
				loading,
				size,
				fullWidth,
				color,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			children: [loading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_loading_index.Loading, {
				"data-role": "button-loading",
				variant: "circular"
			}), iconOnly ? children : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				Boolean(leadingContent) && leadingContent,
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					id,
					children
				}),
				Boolean(trailingContent) && trailingContent
			] })]
		})
	});
});
Button.displayName = "Button";
//#endregion
exports.Button = Button;

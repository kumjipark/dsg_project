'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_text_button_contexts = require("./contexts.js");
const require_components_loading_index = require("../loading/index.js");
const require_components_text_button_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_primitive = require("@radix-ui/primitive");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/text-button/index.tsx
const TextButton = (0, react.forwardRef)(({ as, disabled = false, disableInteraction = false, color = "primary", leadingContent, trailingContent, size = "medium", children, loading = false, disableLoadingPreventEvents, xs, sm, md, lg, xl, ...props }, ref) => {
	const id = (0, react.useId)();
	const context = require_components_text_button_contexts.useTextButtonContext();
	const interactionColor = color === "primary" ? "semantic.primary.normal" : "semantic.label.normal";
	const overrideColor = (0, react.useMemo)(() => {
		return context?.[color];
	}, [context, color]);
	const handlePreventEventsLoading = (e) => {
		if (loading && !disableLoadingPreventEvents) {
			e.preventDefault();
			e.stopPropagation();
		}
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		color: interactionColor,
		disabled: disableInteraction || disabled,
		variant: color === "primary" ? "strong" : "light",
		scale: true,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
			as: as || "button",
			"wds-component": "text-button",
			"data-color": color,
			"aria-labelledby": id,
			ref,
			type: "button",
			disabled,
			"aria-disabled": disabled,
			...props,
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(handlePreventEventsLoading, props.onClick),
			onMouseDown: (0, _radix_ui_primitive.composeEventHandlers)(handlePreventEventsLoading, props.onMouseDown),
			onPointerDown: (0, _radix_ui_primitive.composeEventHandlers)(handlePreventEventsLoading, props.onPointerDown),
			onKeyDown: (0, _radix_ui_primitive.composeEventHandlers)((e) => {
				if (e.key === "Enter" || e.key === " ") handlePreventEventsLoading(e);
			}, props.onKeyDown),
			sx: [require_components_text_button_style.textButtonStyle({
				overrideColor,
				size,
				loading,
				color,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			children: [
				loading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_loading_index.Loading, {
					size: "1em",
					variant: "circular",
					"data-role": "text-button-loading"
				}),
				Boolean(leadingContent) && leadingContent,
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					id,
					children
				}),
				Boolean(trailingContent) && trailingContent
			]
		})
	});
});
TextButton.displayName = "TextButton";
//#endregion
exports.TextButton = TextButton;

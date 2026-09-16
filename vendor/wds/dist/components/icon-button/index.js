'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_icon_button_contexts = require("./contexts.js");
const require_components_icon_button_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/icon-button/index.tsx
const IconButton = (0, react.forwardRef)(({ as, disabled = false, disableInteraction = false, size, variant = "normal", interactionColor = "semantic.label.normal", alternative, color: originColor, children, xs, sm, md, lg, xl, ...props }, ref) => {
	const context = require_components_icon_button_contexts.useIconButtonContext();
	const color = (0, react.useMemo)(() => {
		if (originColor) return originColor;
		if (context?.[variant]) return context[variant];
		switch (variant) {
			case "solid": return "semantic.static.white";
			case "background": return;
			case "normal": return "semantic.label.normal";
			default: return "semantic.label.normal";
		}
	}, [
		context,
		originColor,
		variant
	]);
	const getInteractionSize = () => {
		switch (variant) {
			case "outlined":
			case "solid": return "100%";
			case "background": return "calc(100% + 8px)";
			case "normal": return "calc(100% + 16px)";
		}
	};
	const getInteractionVariant = () => {
		switch (variant) {
			case "normal":
			case "outlined": return "light";
			case "background": return alternative ? "normal" : "light";
			case "solid": return "strong";
		}
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		width: "auto",
		height: getInteractionSize(),
		color: interactionColor,
		disabled: disableInteraction || disabled,
		variant: getInteractionVariant(),
		scale: variant === "normal",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
			as: as || "button",
			ref,
			"wds-component": "icon-button",
			"data-variant": variant,
			disabled,
			type: "button",
			"aria-disabled": disabled,
			...props,
			sx: [require_components_icon_button_style.iconButtonStyle({
				variant,
				size,
				alternative,
				color,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			children: [variant === "background" && !alternative && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				as: "span",
				role: "presentation",
				"data-role": "icon-button-background-blend",
				sx: require_components_icon_button_style.backgroundBlendStyle
			}), children]
		})
	});
});
IconButton.displayName = "IconButton";
//#endregion
exports.IconButton = IconButton;

'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_chip_style = require("./style.js");
const require_components_chip_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/chip/index.tsx
const Chip = (0, react.forwardRef)(({ as, variant = "solid", disabled = false, disableInteraction = false, leadingContent, trailingContent, size = "medium", active: givenActive, children, xs, sm, md, lg, xl, ...props }, ref) => {
	const context = require_components_chip_contexts.useChipContext();
	const id = (0, react.useId)();
	const active = givenActive ?? props["aria-pressed"];
	const interactionColor = (0, react.useMemo)(() => {
		if (!active) return "semantic.label.normal";
		if (variant === "outlined") return "semantic.primary.normal";
		return "semantic.inverse.label";
	}, [active, variant]);
	const overrideColor = (0, react.useMemo)(() => {
		return context?.[variant];
	}, [context, variant]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		color: interactionColor,
		variant: active ? "normal" : "light",
		disabled: disableInteraction || disabled,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
			as: as || "button",
			"aria-labelledby": id,
			role: "button",
			type: "button",
			ref,
			disabled,
			"aria-disabled": disabled,
			"data-active": active,
			"aria-pressed": active,
			...props,
			sx: [require_components_chip_style.chipStyle({
				overrideColor,
				active,
				variant,
				size,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			children: [
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
Chip.displayName = "Chip";
//#endregion
exports.Chip = Chip;

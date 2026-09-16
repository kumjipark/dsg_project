'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_filter_button_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/filter-button/index.tsx
const FilterButton = (0, react.forwardRef)(({ as, variant = "solid", disabled = false, disableInteraction = false, expanded: originExpanded, size = "medium", activeLabel, active: givenActive, children, xs, sm, md, lg, xl, ...props }, ref) => {
	const id = (0, react.useId)();
	const active = givenActive ?? props["aria-pressed"];
	const expanded = originExpanded || props["aria-expanded"];
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		color: active && variant === "outlined" ? "semantic.primary.normal" : "semantic.label.normal",
		disabled: disableInteraction || disabled,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
			as: as || "button",
			"aria-labelledby": id,
			role: "button",
			type: "button",
			ref,
			disabled,
			"aria-disabled": disabled,
			"aria-pressed": active,
			"aria-expanded": expanded,
			...props,
			sx: [require_components_filter_button_style.filterButtonStyle({
				variant,
				size,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				"data-role": "chip-filter-wrapper",
				alignItems: "center",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					id,
					children
				}), activeLabel !== null && activeLabel !== void 0 && active && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					"data-role": "chip-filter-active-label",
					children: activeLabel
				})]
			}), expanded ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCaretUp, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCaretDown, {})]
		})
	});
});
FilterButton.displayName = "FilterButton";
//#endregion
exports.FilterButton = FilterButton;

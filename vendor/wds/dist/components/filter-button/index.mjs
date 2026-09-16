'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { WithInteraction } from "../with-interaction/index.mjs";
import { filterButtonStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useId } from "react";
import { IconCaretDown, IconCaretUp } from "@wanteddev/wds-icon";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/filter-button/index.tsx
const FilterButton = forwardRef(({ as, variant = "solid", disabled = false, disableInteraction = false, expanded: originExpanded, size = "medium", activeLabel, active: givenActive, children, xs, sm, md, lg, xl, ...props }, ref) => {
	const id = useId();
	const active = givenActive ?? props["aria-pressed"];
	const expanded = originExpanded || props["aria-expanded"];
	return /* @__PURE__ */ jsx(WithInteraction, {
		color: active && variant === "outlined" ? "semantic.primary.normal" : "semantic.label.normal",
		disabled: disableInteraction || disabled,
		children: /* @__PURE__ */ jsxs(Box, {
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
			sx: [filterButtonStyle({
				variant,
				size,
				xs,
				sm,
				md,
				lg,
				xl
			}), props.sx],
			children: [/* @__PURE__ */ jsxs(FlexBox, {
				"data-role": "chip-filter-wrapper",
				alignItems: "center",
				children: [/* @__PURE__ */ jsx("span", {
					id,
					children
				}), activeLabel !== null && activeLabel !== void 0 && active && /* @__PURE__ */ jsx("span", {
					"data-role": "chip-filter-active-label",
					children: activeLabel
				})]
			}), expanded ? /* @__PURE__ */ jsx(IconCaretUp, {}) : /* @__PURE__ */ jsx(IconCaretDown, {})]
		})
	});
});
FilterButton.displayName = "FilterButton";
//#endregion
export { FilterButton };

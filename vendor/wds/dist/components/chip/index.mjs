'use client';
import { WithInteraction } from "../with-interaction/index.mjs";
import { chipStyle } from "./style.mjs";
import { useChipContext } from "./contexts.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useId, useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/chip/index.tsx
const Chip = forwardRef(({ as, variant = "solid", disabled = false, disableInteraction = false, leadingContent, trailingContent, size = "medium", active: givenActive, children, xs, sm, md, lg, xl, ...props }, ref) => {
	const context = useChipContext();
	const id = useId();
	const active = givenActive ?? props["aria-pressed"];
	const interactionColor = useMemo(() => {
		if (!active) return "semantic.label.normal";
		if (variant === "outlined") return "semantic.primary.normal";
		return "semantic.inverse.label";
	}, [active, variant]);
	const overrideColor = useMemo(() => {
		return context?.[variant];
	}, [context, variant]);
	return /* @__PURE__ */ jsx(WithInteraction, {
		color: interactionColor,
		variant: active ? "normal" : "light",
		disabled: disableInteraction || disabled,
		children: /* @__PURE__ */ jsxs(Box, {
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
			sx: [chipStyle({
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
				/* @__PURE__ */ jsx("span", {
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
export { Chip };

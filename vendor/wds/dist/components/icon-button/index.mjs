'use client';
import { WithInteraction } from "../with-interaction/index.mjs";
import { useIconButtonContext } from "./contexts.mjs";
import { backgroundBlendStyle, iconButtonStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/icon-button/index.tsx
const IconButton = forwardRef(({ as, disabled = false, disableInteraction = false, size, variant = "normal", interactionColor = "semantic.label.normal", alternative, color: originColor, children, xs, sm, md, lg, xl, ...props }, ref) => {
	const context = useIconButtonContext();
	const color = useMemo(() => {
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
	return /* @__PURE__ */ jsx(WithInteraction, {
		width: "auto",
		height: getInteractionSize(),
		color: interactionColor,
		disabled: disableInteraction || disabled,
		variant: getInteractionVariant(),
		scale: variant === "normal",
		children: /* @__PURE__ */ jsxs(Box, {
			as: as || "button",
			ref,
			"wds-component": "icon-button",
			"data-variant": variant,
			disabled,
			type: "button",
			"aria-disabled": disabled,
			...props,
			sx: [iconButtonStyle({
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
			children: [variant === "background" && !alternative && /* @__PURE__ */ jsx(Box, {
				as: "span",
				role: "presentation",
				"data-role": "icon-button-background-blend",
				sx: backgroundBlendStyle
			}), children]
		})
	});
});
IconButton.displayName = "IconButton";
//#endregion
export { IconButton };

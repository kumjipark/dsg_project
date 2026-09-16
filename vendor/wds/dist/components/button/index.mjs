'use client';
import { WithInteraction } from "../with-interaction/index.mjs";
import { Loading } from "../loading/index.mjs";
import { buttonStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useId } from "react";
import { composeEventHandlers } from "@radix-ui/primitive";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/button/index.tsx
const Button = forwardRef(({ as, variant = "solid", disabled = false, disableInteraction = false, fullWidth = false, color = "primary", loading = false, iconOnly, leadingContent, trailingContent, size = "medium", disableLoadingPreventEvents, children, xs, sm, md, lg, xl, ...props }, ref) => {
	const id = useId();
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
	return /* @__PURE__ */ jsx(WithInteraction, {
		color: "semantic.label.normal",
		variant: getInteractionVariant(),
		disabled: disableInteraction || disabled,
		children: /* @__PURE__ */ jsxs(Box, {
			as: as || "button",
			"aria-labelledby": iconOnly ? void 0 : id,
			ref,
			disabled,
			"aria-disabled": disabled,
			type: "button",
			...props,
			onClick: composeEventHandlers(handlePreventEventsLoading, props.onClick),
			onMouseDown: composeEventHandlers(handlePreventEventsLoading, props.onMouseDown),
			onPointerDown: composeEventHandlers(handlePreventEventsLoading, props.onPointerDown),
			onKeyDown: composeEventHandlers((e) => {
				if (e.key === "Enter" || e.key === " ") handlePreventEventsLoading(e);
			}, props.onKeyDown),
			sx: [buttonStyle({
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
			children: [loading && /* @__PURE__ */ jsx(Loading, {
				"data-role": "button-loading",
				variant: "circular"
			}), iconOnly ? children : /* @__PURE__ */ jsxs(Fragment, { children: [
				Boolean(leadingContent) && leadingContent,
				/* @__PURE__ */ jsx("span", {
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
export { Button };

'use client';
import { WithInteraction } from "../with-interaction/index.mjs";
import { useTextButtonContext } from "./contexts.mjs";
import { Loading } from "../loading/index.mjs";
import { textButtonStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useId, useMemo } from "react";
import { composeEventHandlers } from "@radix-ui/primitive";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/text-button/index.tsx
const TextButton = forwardRef(({ as, disabled = false, disableInteraction = false, color = "primary", leadingContent, trailingContent, size = "medium", children, loading = false, disableLoadingPreventEvents, xs, sm, md, lg, xl, ...props }, ref) => {
	const id = useId();
	const context = useTextButtonContext();
	const interactionColor = color === "primary" ? "semantic.primary.normal" : "semantic.label.normal";
	const overrideColor = useMemo(() => {
		return context?.[color];
	}, [context, color]);
	const handlePreventEventsLoading = (e) => {
		if (loading && !disableLoadingPreventEvents) {
			e.preventDefault();
			e.stopPropagation();
		}
	};
	return /* @__PURE__ */ jsx(WithInteraction, {
		color: interactionColor,
		disabled: disableInteraction || disabled,
		variant: color === "primary" ? "strong" : "light",
		scale: true,
		children: /* @__PURE__ */ jsxs(Box, {
			as: as || "button",
			"wds-component": "text-button",
			"data-color": color,
			"aria-labelledby": id,
			ref,
			type: "button",
			disabled,
			"aria-disabled": disabled,
			...props,
			onClick: composeEventHandlers(handlePreventEventsLoading, props.onClick),
			onMouseDown: composeEventHandlers(handlePreventEventsLoading, props.onMouseDown),
			onPointerDown: composeEventHandlers(handlePreventEventsLoading, props.onPointerDown),
			onKeyDown: composeEventHandlers((e) => {
				if (e.key === "Enter" || e.key === " ") handlePreventEventsLoading(e);
			}, props.onKeyDown),
			sx: [textButtonStyle({
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
				loading && /* @__PURE__ */ jsx(Loading, {
					size: "1em",
					variant: "circular",
					"data-role": "text-button-loading"
				}),
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
TextButton.displayName = "TextButton";
//#endregion
export { TextButton };

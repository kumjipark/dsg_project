'use client';
import { contentBadgeStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/content-badge/index.tsx
const ContentBadge = forwardRef(({ variant = "solid", size = "xsmall", color = "accent", accentColor = "semantic.accent.foreground.cyan", neutralColor = "semantic.label.alternative", leadingContent, trailingContent, children, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(Box, {
		as: "span",
		ref,
		...props,
		sx: [contentBadgeStyle({
			variant,
			size,
			color,
			accentColor,
			neutralColor,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: [
			Boolean(leadingContent) && leadingContent,
			/* @__PURE__ */ jsx("span", { children }),
			Boolean(trailingContent) && trailingContent
		]
	});
});
ContentBadge.displayName = "ContentBadge";
//#endregion
export { ContentBadge };

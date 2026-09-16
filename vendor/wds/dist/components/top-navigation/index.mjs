'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { TextButtonProvider } from "../text-button/contexts.mjs";
import { TextButton } from "../text-button/index.mjs";
import { IconButton } from "../icon-button/index.mjs";
import { topNavigationButtonTextStyle, topNavigationFloatingBackgroundStyle, topNavigationLeftIconStyle, topNavigationRightIconStyle, topNavigationStyle, topNavigationTitleStyle, topNavigationWrapperStyle } from "./style.mjs";
import { TOP_NAVIGATION_ACTION_NAME, TOP_NAVIGATION_NAME } from "./constants.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/top-navigation/index.tsx
const TopNavigation = forwardRef(({ variant = "normal", leadingContent, trailingContent, toolbar, background = true, titleId, xs, sm, md, lg, xl, children, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(FlexBox, {
		"wds-component": "top-navigation",
		ref,
		flexDirection: "column",
		"data-background": background,
		...props,
		"data-variant": variant,
		sx: [topNavigationStyle({
			background,
			variant,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: [
			background && variant === "floating" && /* @__PURE__ */ jsxs(FlexBox, {
				"aria-hidden": true,
				"data-role": "top-navigation-floating-background",
				sx: topNavigationFloatingBackgroundStyle,
				children: [
					/* @__PURE__ */ jsx(Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					}),
					/* @__PURE__ */ jsx(Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					}),
					/* @__PURE__ */ jsx(Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					}),
					/* @__PURE__ */ jsx(Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					}),
					/* @__PURE__ */ jsx(Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					}),
					/* @__PURE__ */ jsx(Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					})
				]
			}),
			/* @__PURE__ */ jsxs(FlexBox, {
				"data-role": "top-navigation-wrapper",
				sx: topNavigationWrapperStyle(variant),
				children: [
					Boolean(leadingContent) && variant !== "display" && /* @__PURE__ */ jsx(FlexBox, {
						gap: "16px",
						alignItems: "center",
						sx: topNavigationLeftIconStyle(variant),
						"data-role": "top-navigation-leading-content-wrapper",
						children: leadingContent
					}),
					Boolean(children) && (variant === "search" ? /* @__PURE__ */ jsx(FlexBox, {
						"data-role": "navigation-field",
						sx: topNavigationTitleStyle(variant),
						id: titleId,
						children
					}) : /* @__PURE__ */ jsx(FlexBox, {
						alignItems: "center",
						sx: topNavigationTitleStyle(variant),
						"data-role": "navigation-title",
						children: /* @__PURE__ */ jsx(Typography, {
							as: "h2",
							id: titleId,
							variant: "headline2",
							weight: "bold",
							color: "semantic.label.strong",
							display: "block",
							sx: {
								margin: 0,
								border: "none"
							},
							children
						})
					})),
					Boolean(trailingContent) && /* @__PURE__ */ jsx(FlexBox, {
						gap: "16px",
						alignItems: "center",
						sx: topNavigationRightIconStyle(variant),
						"data-role": "top-navigation-trailing-content-wrapper",
						children: trailingContent
					})
				]
			}),
			toolbar && variant !== "floating" && /* @__PURE__ */ jsx(FlexBox, {
				sx: { width: "100%" },
				flexDirection: "column",
				"data-role": "top-navigation-toolbar",
				children: toolbar
			})
		]
	});
});
TopNavigation.displayName = TOP_NAVIGATION_NAME;
const TopNavigationButton = forwardRef(({ children, variant = "icon", color = "assistive", ...props }, ref) => {
	if (variant === "icon") return /* @__PURE__ */ jsx(IconButton, {
		variant: "normal",
		size: 24,
		...props,
		"wds-component": "top-navigation-button",
		ref,
		children
	});
	return /* @__PURE__ */ jsx(TextButtonProvider, {
		assistive: "semantic.label.normal",
		children: /* @__PURE__ */ jsx(TextButton, {
			color,
			size: "medium",
			...props,
			sx: [topNavigationButtonTextStyle, props.sx],
			"wds-component": "top-navigation-button",
			ref,
			children
		})
	});
});
TopNavigationButton.displayName = TOP_NAVIGATION_ACTION_NAME;
//#endregion
export { TopNavigation, TopNavigationButton };

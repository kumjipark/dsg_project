'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_text_button_contexts = require("../text-button/contexts.js");
const require_components_text_button_index = require("../text-button/index.js");
const require_components_icon_button_index = require("../icon-button/index.js");
const require_components_top_navigation_style = require("./style.js");
const require_components_top_navigation_constants = require("./constants.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/top-navigation/index.tsx
const TopNavigation = (0, react.forwardRef)(({ variant = "normal", leadingContent, trailingContent, toolbar, background = true, titleId, xs, sm, md, lg, xl, children, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		"wds-component": "top-navigation",
		ref,
		flexDirection: "column",
		"data-background": background,
		...props,
		"data-variant": variant,
		sx: [require_components_top_navigation_style.topNavigationStyle({
			background,
			variant,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: [
			background && variant === "floating" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				"aria-hidden": true,
				"data-role": "top-navigation-floating-background",
				sx: require_components_top_navigation_style.topNavigationFloatingBackgroundStyle,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
						"aria-hidden": true,
						"data-role": "top-navigation-floating-background-layer"
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
				"data-role": "top-navigation-wrapper",
				sx: require_components_top_navigation_style.topNavigationWrapperStyle(variant),
				children: [
					Boolean(leadingContent) && variant !== "display" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						gap: "16px",
						alignItems: "center",
						sx: require_components_top_navigation_style.topNavigationLeftIconStyle(variant),
						"data-role": "top-navigation-leading-content-wrapper",
						children: leadingContent
					}),
					Boolean(children) && (variant === "search" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						"data-role": "navigation-field",
						sx: require_components_top_navigation_style.topNavigationTitleStyle(variant),
						id: titleId,
						children
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						alignItems: "center",
						sx: require_components_top_navigation_style.topNavigationTitleStyle(variant),
						"data-role": "navigation-title",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
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
					Boolean(trailingContent) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
						gap: "16px",
						alignItems: "center",
						sx: require_components_top_navigation_style.topNavigationRightIconStyle(variant),
						"data-role": "top-navigation-trailing-content-wrapper",
						children: trailingContent
					})
				]
			}),
			toolbar && variant !== "floating" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				sx: { width: "100%" },
				flexDirection: "column",
				"data-role": "top-navigation-toolbar",
				children: toolbar
			})
		]
	});
});
TopNavigation.displayName = require_components_top_navigation_constants.TOP_NAVIGATION_NAME;
const TopNavigationButton = (0, react.forwardRef)(({ children, variant = "icon", color = "assistive", ...props }, ref) => {
	if (variant === "icon") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_icon_button_index.IconButton, {
		variant: "normal",
		size: 24,
		...props,
		"wds-component": "top-navigation-button",
		ref,
		children
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_contexts.TextButtonProvider, {
		assistive: "semantic.label.normal",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_text_button_index.TextButton, {
			color,
			size: "medium",
			...props,
			sx: [require_components_top_navigation_style.topNavigationButtonTextStyle, props.sx],
			"wds-component": "top-navigation-button",
			ref,
			children
		})
	});
});
TopNavigationButton.displayName = require_components_top_navigation_constants.TOP_NAVIGATION_ACTION_NAME;
//#endregion
exports.TopNavigation = TopNavigation;
exports.TopNavigationButton = TopNavigationButton;

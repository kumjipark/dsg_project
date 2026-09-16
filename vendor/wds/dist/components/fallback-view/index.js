'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_button_index = require("../button/index.js");
const require_components_fallback_view_constants = require("./constants.js");
const require_components_fallback_view_style = require("./style.js");
const require_components_fallback_view_contexts = require("./contexts.js");
const require_components_fallback_view_helpers = require("./helpers.js");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/fallback-view/index.tsx
const FallbackView = (0, react.forwardRef)(({ as, platform = "desktop", padding = "normal", width, children, xs, sm, md, lg, xl, sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_fallback_view_contexts.FallbackViewProvider, {
		platform,
		responsive: {
			xs,
			sm,
			md,
			lg,
			xl
		},
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			as: as || "div",
			ref,
			flexDirection: "column",
			alignItems: "center",
			sx: [require_components_fallback_view_style.fallbackViewStyle({
				platform,
				padding,
				width,
				xs,
				sm,
				md,
				lg,
				xl
			}), sx],
			...props,
			children
		})
	});
});
FallbackView.displayName = require_components_fallback_view_constants.FALLBACK_VIEW_NAME;
const FallbackViewImage = (0, react.forwardRef)((props, ref) => {
	const context = require_components_fallback_view_contexts.useFallbackViewContext(require_components_fallback_view_constants.FALLBACK_VIEW_IMAGE_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref,
		"wds-component": "fallback-view-image",
		justifyContent: "center",
		alignItems: "center",
		...props,
		sx: [require_components_fallback_view_style.fallbackViewImageStyle(context), props.sx]
	});
});
FallbackViewImage.displayName = require_components_fallback_view_constants.FALLBACK_VIEW_IMAGE_NAME;
const FallbackViewContent = (0, react.forwardRef)((props, ref) => {
	const context = require_components_fallback_view_contexts.useFallbackViewContext(require_components_fallback_view_constants.FALLBACK_VIEW_CONTENT_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref,
		"wds-component": "fallback-view-content",
		flexDirection: "column",
		alignItems: "center",
		gap: "24px",
		...props,
		sx: [require_components_fallback_view_style.fallbackViewContentStyle(context), props.sx]
	});
});
FallbackViewContent.displayName = require_components_fallback_view_constants.FALLBACK_VIEW_CONTENT_NAME;
const FallbackViewText = (0, react.forwardRef)(({ title, description, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		ref,
		flexDirection: "column",
		gap: "10px",
		...props,
		children: [title && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			"data-role": "fallback-view-text-title",
			children: title
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			"data-role": "fallback-view-text-description",
			children: description
		})]
	});
});
FallbackViewText.displayName = require_components_fallback_view_constants.FALLBACK_VIEW_TEXT_NAME;
const FallbackViewButton = (0, react.forwardRef)(({ as, ...props }, ref) => {
	const context = require_components_fallback_view_contexts.useFallbackViewContext(require_components_fallback_view_constants.FALLBACK_VIEW_BUTTON_NAME);
	const sizeProps = (0, react.useMemo)(() => require_components_fallback_view_helpers.getFallbackViewButtonSize(context, props), [context, props]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_button_index.Button, {
		as: as || "button",
		ref,
		"wds-component": "fallback-view-button",
		variant: "outlined",
		color: "assistive",
		...props,
		...sizeProps
	});
});
FallbackViewButton.displayName = require_components_fallback_view_constants.FALLBACK_VIEW_BUTTON_NAME;
//#endregion
exports.FallbackView = FallbackView;
exports.FallbackViewButton = FallbackViewButton;
exports.FallbackViewContent = FallbackViewContent;
exports.FallbackViewImage = FallbackViewImage;
exports.FallbackViewText = FallbackViewText;

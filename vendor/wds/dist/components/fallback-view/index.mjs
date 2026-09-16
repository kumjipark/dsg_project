'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Button } from "../button/index.mjs";
import { FALLBACK_VIEW_BUTTON_NAME, FALLBACK_VIEW_CONTENT_NAME, FALLBACK_VIEW_IMAGE_NAME, FALLBACK_VIEW_NAME, FALLBACK_VIEW_TEXT_NAME } from "./constants.mjs";
import { fallbackViewContentStyle, fallbackViewImageStyle, fallbackViewStyle } from "./style.mjs";
import { FallbackViewProvider, useFallbackViewContext } from "./contexts.mjs";
import { getFallbackViewButtonSize } from "./helpers.mjs";
import { forwardRef, useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/fallback-view/index.tsx
const FallbackView = forwardRef(({ as, platform = "desktop", padding = "normal", width, children, xs, sm, md, lg, xl, sx, ...props }, ref) => {
	return /* @__PURE__ */ jsx(FallbackViewProvider, {
		platform,
		responsive: {
			xs,
			sm,
			md,
			lg,
			xl
		},
		children: /* @__PURE__ */ jsx(FlexBox, {
			as: as || "div",
			ref,
			flexDirection: "column",
			alignItems: "center",
			sx: [fallbackViewStyle({
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
FallbackView.displayName = FALLBACK_VIEW_NAME;
const FallbackViewImage = forwardRef((props, ref) => {
	const context = useFallbackViewContext(FALLBACK_VIEW_IMAGE_NAME);
	return /* @__PURE__ */ jsx(FlexBox, {
		ref,
		"wds-component": "fallback-view-image",
		justifyContent: "center",
		alignItems: "center",
		...props,
		sx: [fallbackViewImageStyle(context), props.sx]
	});
});
FallbackViewImage.displayName = FALLBACK_VIEW_IMAGE_NAME;
const FallbackViewContent = forwardRef((props, ref) => {
	const context = useFallbackViewContext(FALLBACK_VIEW_CONTENT_NAME);
	return /* @__PURE__ */ jsx(FlexBox, {
		ref,
		"wds-component": "fallback-view-content",
		flexDirection: "column",
		alignItems: "center",
		gap: "24px",
		...props,
		sx: [fallbackViewContentStyle(context), props.sx]
	});
});
FallbackViewContent.displayName = FALLBACK_VIEW_CONTENT_NAME;
const FallbackViewText = forwardRef(({ title, description, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(FlexBox, {
		ref,
		flexDirection: "column",
		gap: "10px",
		...props,
		children: [title && /* @__PURE__ */ jsx("span", {
			"data-role": "fallback-view-text-title",
			children: title
		}), /* @__PURE__ */ jsx("span", {
			"data-role": "fallback-view-text-description",
			children: description
		})]
	});
});
FallbackViewText.displayName = FALLBACK_VIEW_TEXT_NAME;
const FallbackViewButton = forwardRef(({ as, ...props }, ref) => {
	const context = useFallbackViewContext(FALLBACK_VIEW_BUTTON_NAME);
	const sizeProps = useMemo(() => getFallbackViewButtonSize(context, props), [context, props]);
	return /* @__PURE__ */ jsx(Button, {
		as: as || "button",
		ref,
		"wds-component": "fallback-view-button",
		variant: "outlined",
		color: "assistive",
		...props,
		...sizeProps
	});
});
FallbackViewButton.displayName = FALLBACK_VIEW_BUTTON_NAME;
//#endregion
export { FallbackView, FallbackViewButton, FallbackViewContent, FallbackViewImage, FallbackViewText };

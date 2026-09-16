'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { WithInteraction } from "../with-interaction/index.mjs";
import { sectionHeaderNavigationButtonStyle, sectionHeaderNavigationStyle, sectionHeaderStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/section-header/index.tsx
const SectionHeader = forwardRef(({ size = "medium", platform = "desktop", headingContent, trailingContent, color, headingTag = "h2", children, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(FlexBox, {
		ref,
		...props,
		gap: "12px",
		sx: [sectionHeaderStyle({
			size,
			platform,
			color,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: [/* @__PURE__ */ jsxs(FlexBox, {
			"data-role": "section-header-content",
			gap: "12px",
			flex: "1 0 0",
			alignItems: "flex-end",
			children: [/* @__PURE__ */ jsx(Box, {
				as: headingTag,
				"data-role": "section-header-content-heading",
				children
			}), Boolean(headingContent) && /* @__PURE__ */ jsx(FlexBox, {
				"data-role": "section-header-heading-content",
				gap: "10px",
				alignItems: "center",
				children: headingContent
			})]
		}), Boolean(trailingContent) && /* @__PURE__ */ jsx(FlexBox, {
			"data-role": "section-header-trailing-content",
			gap: "20px",
			alignItems: "center",
			alignSelf: "end",
			children: trailingContent
		})]
	});
});
SectionHeader.displayName = "SectionHeader";
const SectionHeaderNavigation = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		alignItems: "center",
		justifyContent: "center",
		ref,
		...props,
		sx: [sectionHeaderNavigationStyle, props.sx]
	});
});
SectionHeaderNavigation.displayName = "SectionHeaderNavigation";
const SectionHeaderNavigationButton = forwardRef(({ as, disabled, disableInteraction, children, ...props }, ref) => {
	return /* @__PURE__ */ jsx(WithInteraction, {
		disabled: disabled || disableInteraction,
		children: /* @__PURE__ */ jsx(Box, {
			as: as ?? "button",
			disabled,
			"aria-disabled": disabled,
			ref,
			...props,
			sx: [sectionHeaderNavigationButtonStyle, props.sx],
			children
		})
	});
});
//#endregion
export { SectionHeader, SectionHeaderNavigation, SectionHeaderNavigationButton };

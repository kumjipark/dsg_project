'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_with_interaction_index = require("../with-interaction/index.js");
const require_components_section_header_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/section-header/index.tsx
const SectionHeader = (0, react.forwardRef)(({ size = "medium", platform = "desktop", headingContent, trailingContent, color, headingTag = "h2", children, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		ref,
		...props,
		gap: "12px",
		sx: [require_components_section_header_style.sectionHeaderStyle({
			size,
			platform,
			color,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			"data-role": "section-header-content",
			gap: "12px",
			flex: "1 0 0",
			alignItems: "flex-end",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				as: headingTag,
				"data-role": "section-header-content-heading",
				children
			}), Boolean(headingContent) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				"data-role": "section-header-heading-content",
				gap: "10px",
				alignItems: "center",
				children: headingContent
			})]
		}), Boolean(trailingContent) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			"data-role": "section-header-trailing-content",
			gap: "20px",
			alignItems: "center",
			alignSelf: "end",
			children: trailingContent
		})]
	});
});
SectionHeader.displayName = "SectionHeader";
const SectionHeaderNavigation = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		alignItems: "center",
		justifyContent: "center",
		ref,
		...props,
		sx: [require_components_section_header_style.sectionHeaderNavigationStyle, props.sx]
	});
});
SectionHeaderNavigation.displayName = "SectionHeaderNavigation";
const SectionHeaderNavigationButton = (0, react.forwardRef)(({ as, disabled, disableInteraction, children, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_with_interaction_index.WithInteraction, {
		disabled: disabled || disableInteraction,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: as ?? "button",
			disabled,
			"aria-disabled": disabled,
			ref,
			...props,
			sx: [require_components_section_header_style.sectionHeaderNavigationButtonStyle, props.sx],
			children
		})
	});
});
//#endregion
exports.SectionHeader = SectionHeader;
exports.SectionHeaderNavigation = SectionHeaderNavigation;
exports.SectionHeaderNavigationButton = SectionHeaderNavigationButton;

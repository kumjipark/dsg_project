'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_card_list_constants = require("./constants.js");
const require_components_card_list_style = require("./style.js");
let react = require("react");
let _radix_ui_primitive = require("@radix-ui/primitive");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/card-list/index.tsx
const CardList = (0, react.forwardRef)(({ platform = "desktop", width, leadingContent, trailingContent, xs, sm, md, lg, xl, sx, children, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		ref,
		alignItems: "center",
		...props,
		sx: [require_components_card_list_style.cardListStyle({
			platform,
			width,
			xs,
			sm,
			md,
			lg,
			xl
		}), sx],
		children: [
			Boolean(leadingContent) && leadingContent,
			children,
			Boolean(trailingContent) && trailingContent
		]
	});
});
CardList.displayName = require_components_card_list_constants.CARD_LIST_NAME;
const CardListContent = (0, react.forwardRef)(({ variant = "custom", sx, ...props }, ref) => {
	switch (variant) {
		case "checkbox":
		case "toggle-icon": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			ref,
			justifyContent: "center",
			alignItems: "center",
			...props,
			sx: [require_components_card_list_style.cardListContentStyle, sx],
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (e) => {
				e.preventDefault();
				e.stopPropagation();
			})
		});
		case "icon": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			ref,
			justifyContent: "center",
			alignItems: "center",
			...props,
			sx: (theme) => [
				require_components_card_list_style.cardListContentStyle,
				{ color: theme.semantic.label.assistive },
				sx
			]
		});
		case "custom": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			ref,
			...props,
			sx: [require_components_card_list_style.cardListContentStyle, sx]
		});
	}
});
CardListContent.displayName = require_components_card_list_constants.CARD_LIST_CONTENT_NAME;
const CardListSkeleton = (0, react.forwardRef)(({ platform = "desktop", width, hasLeadingContent, hasTrailingContent, xs, sm, md, lg, xl, sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref,
		alignItems: "center",
		...props,
		sx: [require_components_card_list_style.cardListSkeletonStyle({
			platform,
			hasLeadingContent,
			hasTrailingContent,
			width,
			xs,
			sm,
			md,
			lg,
			xl
		}), sx]
	});
});
CardListSkeleton.displayName = require_components_card_list_constants.CARD_LIST_SKELETON_NAME;
//#endregion
exports.CardList = CardList;
exports.CardListContent = CardListContent;
exports.CardListSkeleton = CardListSkeleton;

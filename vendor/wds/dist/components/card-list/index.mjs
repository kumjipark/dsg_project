'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { CARD_LIST_CONTENT_NAME, CARD_LIST_NAME, CARD_LIST_SKELETON_NAME } from "./constants.mjs";
import { cardListContentStyle, cardListSkeletonStyle, cardListStyle } from "./style.mjs";
import { forwardRef } from "react";
import { composeEventHandlers } from "@radix-ui/primitive";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/card-list/index.tsx
const CardList = forwardRef(({ platform = "desktop", width, leadingContent, trailingContent, xs, sm, md, lg, xl, sx, children, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(FlexBox, {
		ref,
		alignItems: "center",
		...props,
		sx: [cardListStyle({
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
CardList.displayName = CARD_LIST_NAME;
const CardListContent = forwardRef(({ variant = "custom", sx, ...props }, ref) => {
	switch (variant) {
		case "checkbox":
		case "toggle-icon": return /* @__PURE__ */ jsx(FlexBox, {
			ref,
			justifyContent: "center",
			alignItems: "center",
			...props,
			sx: [cardListContentStyle, sx],
			onClick: composeEventHandlers(props.onClick, (e) => {
				e.preventDefault();
				e.stopPropagation();
			})
		});
		case "icon": return /* @__PURE__ */ jsx(FlexBox, {
			ref,
			justifyContent: "center",
			alignItems: "center",
			...props,
			sx: (theme) => [
				cardListContentStyle,
				{ color: theme.semantic.label.assistive },
				sx
			]
		});
		case "custom": return /* @__PURE__ */ jsx(FlexBox, {
			ref,
			...props,
			sx: [cardListContentStyle, sx]
		});
	}
});
CardListContent.displayName = CARD_LIST_CONTENT_NAME;
const CardListSkeleton = forwardRef(({ platform = "desktop", width, hasLeadingContent, hasTrailingContent, xs, sm, md, lg, xl, sx, ...props }, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		ref,
		alignItems: "center",
		...props,
		sx: [cardListSkeletonStyle({
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
CardListSkeleton.displayName = CARD_LIST_SKELETON_NAME;
//#endregion
export { CardList, CardListContent, CardListSkeleton };

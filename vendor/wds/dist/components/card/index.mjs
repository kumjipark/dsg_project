'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { Skeleton } from "../skeleton/index.mjs";
import { Thumbnail, ThumbnailSkeleton } from "../thumbnail/index.mjs";
import { CARD_CAPTION_NAME, CARD_CAPTION_SKELETON_NAME, CARD_CONTENT_ITEM_NAME, CARD_CONTENT_ITEM_SKELETON_NAME, CARD_CONTENT_NAME, CARD_NAME, CARD_SKELETON_NAME, CARD_THUMBNAIL_CONTENT_NAME, CARD_THUMBNAIL_NAME, CARD_THUMBNAIL_SKELETON_NAME, CARD_TITLE_NAME, CARD_TITLE_SKELETON_NAME } from "./constants.mjs";
import { cardCaptionStyle, cardContentItemStyle, cardContentStyle, cardSkeletonStyle, cardStyle, cardThumbnailContentTextStyle, cardThumbnailContentToggleIconStyle, cardThumbnailContentWrapperStyle, cardThumbnailSkeletonStyle, cardThumbnailStyle, cardTitleSkeletonStyle, cardTitleStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useMemo } from "react";
import { composeEventHandlers } from "@radix-ui/primitive";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/card/index.tsx
const Card = forwardRef(({ platform = "desktop", width, xs, sm, md, lg, xl, sx, ...props }, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		ref,
		flexDirection: "column",
		...props,
		sx: [cardStyle({
			platform,
			width,
			xs,
			sm,
			md,
			lg,
			xl
		}), sx]
	});
});
Card.displayName = CARD_NAME;
const CardThumbnail = forwardRef(({ leadingContent, trailingContent, width, ratio, xs, sm, md, lg, xl, sx, style, className, ...props }, ref) => {
	const hasContent = Boolean(leadingContent) || Boolean(trailingContent);
	return /* @__PURE__ */ jsxs(Box, {
		ref,
		className,
		style,
		sx: [cardThumbnailStyle({
			ratio,
			xs,
			sm,
			md,
			lg,
			xl
		}), sx],
		children: [hasContent && /* @__PURE__ */ jsxs(FlexBox, {
			gap: "4px",
			"data-role": "card-thumbnail-content-wrapper",
			alignItems: "flex-start",
			justifyContent: "space-between",
			sx: cardThumbnailContentWrapperStyle,
			children: [/* @__PURE__ */ jsx(FlexBox, {
				"data-role": "card-thumbnail-leading-content-wrapper",
				children: leadingContent
			}), /* @__PURE__ */ jsx(FlexBox, {
				"data-role": "card-thumbnail-trailing-content-wrapper",
				children: trailingContent
			})]
		}), /* @__PURE__ */ jsx(Thumbnail, {
			width,
			radius: true,
			border: true,
			...props
		})]
	});
});
CardThumbnail.displayName = CARD_THUMBNAIL_NAME;
const CardThumbnailContent = forwardRef(({ variant = "custom", sx, ...props }, ref) => {
	switch (variant) {
		case "text": return /* @__PURE__ */ jsx(FlexBox, {
			ref,
			as: "span",
			flex: "1",
			"data-role": "card-thumbnail-content-text",
			...props,
			sx: [cardThumbnailContentTextStyle, sx]
		});
		case "toggle-icon": return /* @__PURE__ */ jsx(FlexBox, {
			ref,
			as: "span",
			"data-role": "card-thumbnail-content-toggle-icon",
			...props,
			onClick: composeEventHandlers(props.onClick, (e) => {
				e.preventDefault();
				e.stopPropagation();
			}),
			sx: [cardThumbnailContentToggleIconStyle, sx]
		});
		case "custom": return /* @__PURE__ */ jsx(FlexBox, {
			ref,
			as: "span",
			...props,
			sx
		});
	}
});
CardThumbnailContent.displayName = CARD_THUMBNAIL_CONTENT_NAME;
const CardContent = forwardRef(({ sx, ...props }, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		"wds-component": "card-content",
		ref,
		flexDirection: "column",
		flex: "1",
		gap: "2px",
		...props,
		sx: [cardContentStyle, sx]
	});
});
CardContent.displayName = CARD_CONTENT_NAME;
const CardContentItem = forwardRef(({ sx, position = "top", variant, ...props }, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		ref,
		"wds-component": "card-content-item",
		...props,
		sx: [cardContentItemStyle({
			position,
			variant
		}), sx]
	});
});
CardContentItem.displayName = CARD_CONTENT_ITEM_NAME;
const CardTitle = forwardRef(({ variant, weight, color, as, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Typography, {
		as: as ?? "p",
		ref,
		"wds-component": "card-title",
		...props,
		sx: [cardTitleStyle({
			variant,
			weight,
			color,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx]
	});
});
CardTitle.displayName = CARD_TITLE_NAME;
const CardCaption = forwardRef(({ variant, weight, color = "semantic.label.alternative", as, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Typography, {
		ref,
		as: as ?? "p",
		"wds-component": "card-caption",
		...props,
		sx: [cardCaptionStyle({
			variant,
			weight,
			color,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx]
	});
});
CardCaption.displayName = CARD_CAPTION_NAME;
const CardSkeleton = forwardRef(({ platform = "desktop", width, xs, sm, md, lg, xl, sx, ...props }, ref) => {
	return /* @__PURE__ */ jsx(FlexBox, {
		ref,
		flexDirection: "column",
		...props,
		sx: [cardSkeletonStyle({
			platform,
			width,
			xs,
			sm,
			md,
			lg,
			xl
		}), sx]
	});
});
CardSkeleton.displayName = CARD_SKELETON_NAME;
const CardThumbnailSkeleton = forwardRef(({ ratio, xl, lg, md, sm, xs, sx, ...props }, ref) => {
	return /* @__PURE__ */ jsx(ThumbnailSkeleton, {
		ref,
		radius: true,
		sx: [cardThumbnailSkeletonStyle({
			ratio,
			xs,
			sm,
			md,
			lg,
			xl
		}), sx],
		...props
	});
});
CardThumbnailSkeleton.displayName = CARD_THUMBNAIL_SKELETON_NAME;
const CardContentItemSkeleton = forwardRef(({ width = "48px", height = "20px", ...props }, ref) => {
	return /* @__PURE__ */ jsx(Skeleton, {
		ref,
		"wds-component": "card-content-item-skeleton",
		variant: "rectangle",
		radius: "3px",
		width,
		height,
		...props
	});
});
CardContentItemSkeleton.displayName = CARD_CONTENT_ITEM_SKELETON_NAME;
const CardTitleSkeleton = forwardRef(({ width, height, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Skeleton, {
		ref,
		"wds-component": "card-title-skeleton",
		...props,
		sx: [cardTitleSkeletonStyle({
			width,
			height,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx]
	});
});
CardTitleSkeleton.displayName = CARD_TITLE_SKELETON_NAME;
const CardCaptionSkeleton = forwardRef(({ type = "normal", width: originWidth, height = "18px", ...props }, ref) => {
	const width = useMemo(() => {
		if (originWidth !== void 0) return originWidth;
		switch (type) {
			case "normal": return "75%";
			case "sub": return "50%";
			case "extra": return "25%";
		}
	}, [type, originWidth]);
	return /* @__PURE__ */ jsx(Skeleton, {
		ref,
		"data-type": type,
		"wds-component": "card-caption-skeleton",
		width,
		height,
		...props
	});
});
CardCaptionSkeleton.displayName = CARD_CAPTION_SKELETON_NAME;
//#endregion
export { Card, CardCaption, CardCaptionSkeleton, CardContent, CardContentItem, CardContentItemSkeleton, CardSkeleton, CardThumbnail, CardThumbnailContent, CardThumbnailSkeleton, CardTitle, CardTitleSkeleton };

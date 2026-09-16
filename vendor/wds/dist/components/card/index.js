'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_skeleton_index = require("../skeleton/index.js");
const require_components_thumbnail_index = require("../thumbnail/index.js");
const require_components_card_constants = require("./constants.js");
const require_components_card_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_primitive = require("@radix-ui/primitive");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/card/index.tsx
const Card = (0, react.forwardRef)(({ platform = "desktop", width, xs, sm, md, lg, xl, sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref,
		flexDirection: "column",
		...props,
		sx: [require_components_card_style.cardStyle({
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
Card.displayName = require_components_card_constants.CARD_NAME;
const CardThumbnail = (0, react.forwardRef)(({ leadingContent, trailingContent, width, ratio, xs, sm, md, lg, xl, sx, style, className, ...props }, ref) => {
	const hasContent = Boolean(leadingContent) || Boolean(trailingContent);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
		ref,
		className,
		style,
		sx: [require_components_card_style.cardThumbnailStyle({
			ratio,
			xs,
			sm,
			md,
			lg,
			xl
		}), sx],
		children: [hasContent && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
			gap: "4px",
			"data-role": "card-thumbnail-content-wrapper",
			alignItems: "flex-start",
			justifyContent: "space-between",
			sx: require_components_card_style.cardThumbnailContentWrapperStyle,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				"data-role": "card-thumbnail-leading-content-wrapper",
				children: leadingContent
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				"data-role": "card-thumbnail-trailing-content-wrapper",
				children: trailingContent
			})]
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_thumbnail_index.Thumbnail, {
			width,
			radius: true,
			border: true,
			...props
		})]
	});
});
CardThumbnail.displayName = require_components_card_constants.CARD_THUMBNAIL_NAME;
const CardThumbnailContent = (0, react.forwardRef)(({ variant = "custom", sx, ...props }, ref) => {
	switch (variant) {
		case "text": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			ref,
			as: "span",
			flex: "1",
			"data-role": "card-thumbnail-content-text",
			...props,
			sx: [require_components_card_style.cardThumbnailContentTextStyle, sx]
		});
		case "toggle-icon": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			ref,
			as: "span",
			"data-role": "card-thumbnail-content-toggle-icon",
			...props,
			onClick: (0, _radix_ui_primitive.composeEventHandlers)(props.onClick, (e) => {
				e.preventDefault();
				e.stopPropagation();
			}),
			sx: [require_components_card_style.cardThumbnailContentToggleIconStyle, sx]
		});
		case "custom": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
			ref,
			as: "span",
			...props,
			sx
		});
	}
});
CardThumbnailContent.displayName = require_components_card_constants.CARD_THUMBNAIL_CONTENT_NAME;
const CardContent = (0, react.forwardRef)(({ sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		"wds-component": "card-content",
		ref,
		flexDirection: "column",
		flex: "1",
		gap: "2px",
		...props,
		sx: [require_components_card_style.cardContentStyle, sx]
	});
});
CardContent.displayName = require_components_card_constants.CARD_CONTENT_NAME;
const CardContentItem = (0, react.forwardRef)(({ sx, position = "top", variant, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref,
		"wds-component": "card-content-item",
		...props,
		sx: [require_components_card_style.cardContentItemStyle({
			position,
			variant
		}), sx]
	});
});
CardContentItem.displayName = require_components_card_constants.CARD_CONTENT_ITEM_NAME;
const CardTitle = (0, react.forwardRef)(({ variant, weight, color, as, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		as: as ?? "p",
		ref,
		"wds-component": "card-title",
		...props,
		sx: [require_components_card_style.cardTitleStyle({
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
CardTitle.displayName = require_components_card_constants.CARD_TITLE_NAME;
const CardCaption = (0, react.forwardRef)(({ variant, weight, color = "semantic.label.alternative", as, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		ref,
		as: as ?? "p",
		"wds-component": "card-caption",
		...props,
		sx: [require_components_card_style.cardCaptionStyle({
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
CardCaption.displayName = require_components_card_constants.CARD_CAPTION_NAME;
const CardSkeleton = (0, react.forwardRef)(({ platform = "desktop", width, xs, sm, md, lg, xl, sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		ref,
		flexDirection: "column",
		...props,
		sx: [require_components_card_style.cardSkeletonStyle({
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
CardSkeleton.displayName = require_components_card_constants.CARD_SKELETON_NAME;
const CardThumbnailSkeleton = (0, react.forwardRef)(({ ratio, xl, lg, md, sm, xs, sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_thumbnail_index.ThumbnailSkeleton, {
		ref,
		radius: true,
		sx: [require_components_card_style.cardThumbnailSkeletonStyle({
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
CardThumbnailSkeleton.displayName = require_components_card_constants.CARD_THUMBNAIL_SKELETON_NAME;
const CardContentItemSkeleton = (0, react.forwardRef)(({ width = "48px", height = "20px", ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_skeleton_index.Skeleton, {
		ref,
		"wds-component": "card-content-item-skeleton",
		variant: "rectangle",
		radius: "3px",
		width,
		height,
		...props
	});
});
CardContentItemSkeleton.displayName = require_components_card_constants.CARD_CONTENT_ITEM_SKELETON_NAME;
const CardTitleSkeleton = (0, react.forwardRef)(({ width, height, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_skeleton_index.Skeleton, {
		ref,
		"wds-component": "card-title-skeleton",
		...props,
		sx: [require_components_card_style.cardTitleSkeletonStyle({
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
CardTitleSkeleton.displayName = require_components_card_constants.CARD_TITLE_SKELETON_NAME;
const CardCaptionSkeleton = (0, react.forwardRef)(({ type = "normal", width: originWidth, height = "18px", ...props }, ref) => {
	const width = (0, react.useMemo)(() => {
		if (originWidth !== void 0) return originWidth;
		switch (type) {
			case "normal": return "75%";
			case "sub": return "50%";
			case "extra": return "25%";
		}
	}, [type, originWidth]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_skeleton_index.Skeleton, {
		ref,
		"data-type": type,
		"wds-component": "card-caption-skeleton",
		width,
		height,
		...props
	});
});
CardCaptionSkeleton.displayName = require_components_card_constants.CARD_CAPTION_SKELETON_NAME;
//#endregion
exports.Card = Card;
exports.CardCaption = CardCaption;
exports.CardCaptionSkeleton = CardCaptionSkeleton;
exports.CardContent = CardContent;
exports.CardContentItem = CardContentItem;
exports.CardContentItemSkeleton = CardContentItemSkeleton;
exports.CardSkeleton = CardSkeleton;
exports.CardThumbnail = CardThumbnail;
exports.CardThumbnailContent = CardThumbnailContent;
exports.CardThumbnailSkeleton = CardThumbnailSkeleton;
exports.CardTitle = CardTitle;
exports.CardTitleSkeleton = CardTitleSkeleton;

'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { ImageBase } from "../image-base/index.mjs";
import { Skeleton } from "../skeleton/index.mjs";
import { thumbnailStyle } from "./style.mjs";
import { THUMBNAIL_NAME, THUMBNAIL_SKELETON_NAME } from "./constants.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useEffect, useRef, useState } from "react";
import { IconImage } from "@wanteddev/wds-icon";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/thumbnail/index.tsx
const Thumbnail = forwardRef(({ ratio = "4:3", portrait = false, overlay, radius, border, className, style, children, width, sx, xs, sm, md, lg, xl, ...props }, ref) => {
	const [imageLoadingStatus, setImageLoadingStatus] = useState("idle");
	const prevSrc = useRef(props.src);
	useEffect(() => {
		if (prevSrc.current !== props.src) {
			prevSrc.current = props.src;
			setImageLoadingStatus("idle");
		}
	}, [props.src]);
	return imageLoadingStatus !== "error" && Boolean(props.src) ? /* @__PURE__ */ jsxs(FlexBox, {
		as: "figure",
		"wds-component": "thumbnail",
		className,
		style,
		"data-status": imageLoadingStatus,
		"aria-label": props.alt,
		sx: [thumbnailStyle({
			ratio,
			radius,
			border,
			width,
			portrait,
			xs,
			sm,
			md,
			lg,
			xl
		}), sx],
		children: [
			/* @__PURE__ */ jsx(ImageBase, {
				ref,
				"aria-hidden": true,
				...props,
				onLoad: () => {
					props.onLoad?.();
					setImageLoadingStatus("loaded");
				},
				onError: () => {
					props.onError?.();
					setImageLoadingStatus("error");
				}
			}),
			overlay && /* @__PURE__ */ jsx(Box, {
				"data-role": "thumbnail-overlay",
				children: overlay
			}),
			children
		]
	}) : /* @__PURE__ */ jsxs(FlexBox, {
		as: "figure",
		"wds-component": "thumbnail",
		className,
		style,
		"aria-label": props.alt,
		"data-status": imageLoadingStatus,
		alignItems: "center",
		justifyContent: "center",
		sx: [
			thumbnailStyle({
				ratio,
				radius,
				border,
				width,
				portrait,
				xs,
				sm,
				md,
				lg,
				xl
			}),
			{
				background: "#cccccc33",
				color: "#B2B2B233"
			},
			sx
		],
		children: [
			/* @__PURE__ */ jsx(IconImage, {
				"aria-hidden": true,
				sx: {
					width: "33.34%",
					height: "auto"
				}
			}),
			overlay && /* @__PURE__ */ jsx(Box, {
				"data-role": "thumbnail-overlay",
				children: overlay
			}),
			children
		]
	});
});
Thumbnail.displayName = THUMBNAIL_NAME;
const ThumbnailSkeleton = forwardRef(({ ratio, radius, border, portrait, width, xl, lg, md, sm, xs, sx, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Skeleton, {
		ref,
		"wds-component": "thumbnail-skeleton",
		as: "figure",
		variant: "rectangle",
		"aria-hidden": true,
		...props,
		sx: [thumbnailStyle({
			ratio,
			radius,
			border,
			portrait,
			width,
			xs,
			sm,
			md,
			lg,
			xl
		}), sx]
	});
});
ThumbnailSkeleton.displayName = THUMBNAIL_SKELETON_NAME;
//#endregion
export { Thumbnail, ThumbnailSkeleton };

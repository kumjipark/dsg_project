'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_image_base_index = require("../image-base/index.js");
const require_components_skeleton_index = require("../skeleton/index.js");
const require_components_thumbnail_style = require("./style.js");
const require_components_thumbnail_constants = require("./constants.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/thumbnail/index.tsx
const Thumbnail = (0, react.forwardRef)(({ ratio = "4:3", portrait = false, overlay, radius, border, className, style, children, width, sx, xs, sm, md, lg, xl, ...props }, ref) => {
	const [imageLoadingStatus, setImageLoadingStatus] = (0, react.useState)("idle");
	const prevSrc = (0, react.useRef)(props.src);
	(0, react.useEffect)(() => {
		if (prevSrc.current !== props.src) {
			prevSrc.current = props.src;
			setImageLoadingStatus("idle");
		}
	}, [props.src]);
	return imageLoadingStatus !== "error" && Boolean(props.src) ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		as: "figure",
		"wds-component": "thumbnail",
		className,
		style,
		"data-status": imageLoadingStatus,
		"aria-label": props.alt,
		sx: [require_components_thumbnail_style.thumbnailStyle({
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
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_image_base_index.ImageBase, {
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
			overlay && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				"data-role": "thumbnail-overlay",
				children: overlay
			}),
			children
		]
	}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		as: "figure",
		"wds-component": "thumbnail",
		className,
		style,
		"aria-label": props.alt,
		"data-status": imageLoadingStatus,
		alignItems: "center",
		justifyContent: "center",
		sx: [
			require_components_thumbnail_style.thumbnailStyle({
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
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconImage, {
				"aria-hidden": true,
				sx: {
					width: "33.34%",
					height: "auto"
				}
			}),
			overlay && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				"data-role": "thumbnail-overlay",
				children: overlay
			}),
			children
		]
	});
});
Thumbnail.displayName = require_components_thumbnail_constants.THUMBNAIL_NAME;
const ThumbnailSkeleton = (0, react.forwardRef)(({ ratio, radius, border, portrait, width, xl, lg, md, sm, xs, sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_skeleton_index.Skeleton, {
		ref,
		"wds-component": "thumbnail-skeleton",
		as: "figure",
		variant: "rectangle",
		"aria-hidden": true,
		...props,
		sx: [require_components_thumbnail_style.thumbnailStyle({
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
ThumbnailSkeleton.displayName = require_components_thumbnail_constants.THUMBNAIL_SKELETON_NAME;
//#endregion
exports.Thumbnail = Thumbnail;
exports.ThumbnailSkeleton = ThumbnailSkeleton;

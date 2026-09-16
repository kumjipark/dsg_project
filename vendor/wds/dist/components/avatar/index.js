'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_image_base_index = require("../image-base/index.js");
const require_components_avatar_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _wanteddev_wds_icon = require("@wanteddev/wds-icon");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/avatar/index.tsx
const Avatar = (0, react.forwardRef)(({ size = "small", variant = "person", className, style, sx, xs, sm, md, lg, xl, children, ...props }, ref) => {
	const getDefaultFallback = () => {
		switch (variant) {
			case "person": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconPersonFill, {});
			case "academy": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconGraduation, {});
			case "company": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_icon.IconCompany, {});
		}
	};
	const [imageLoadingStatus, setImageLoadingStatus] = (0, react.useState)("idle");
	const prevSrc = (0, react.useRef)(props.src);
	(0, react.useEffect)(() => {
		if (prevSrc.current !== props.src) {
			prevSrc.current = props.src;
			setImageLoadingStatus("idle");
		}
	}, [props.src]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
		ref,
		className,
		"wds-component": "avatar",
		sx: [require_components_avatar_style.avatarWrapperStyle({
			size,
			variant,
			xs,
			sm,
			md,
			lg,
			xl
		}), sx],
		"data-state": imageLoadingStatus,
		style,
		children: [imageLoadingStatus !== "error" && Boolean(props.src) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_image_base_index.ImageBase, {
			...props,
			onLoad: () => {
				props.onLoad?.();
				setImageLoadingStatus("loaded");
			},
			onError: () => {
				props.onError?.();
				setImageLoadingStatus("error");
			}
		}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			"data-role": "avatar-fallback",
			sx: require_components_avatar_style.fallbackWrapperStyle,
			children: getDefaultFallback()
		}), children]
	});
});
Avatar.displayName = "Avatar";
//#endregion
exports.Avatar = Avatar;

'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_skeleton_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/skeleton/index.tsx
const Skeleton = (0, react.forwardRef)(({ variant = "text", width, height, align = "left", color, opacity = "opacity.100", radius, animation = true, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		ref,
		...props,
		sx: [require_components_skeleton_style.skeletonStyle({
			radius,
			color,
			opacity,
			variant,
			width,
			align,
			height,
			animation,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {})
	});
});
Skeleton.displayName = "Skeleton";
//#endregion
exports.Skeleton = Skeleton;

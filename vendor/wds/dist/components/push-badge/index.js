'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_push_badge_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/push-badge/index.tsx
const PushBadge = (0, react.forwardRef)(({ variant = "dot", position = "top-right", children, size = "xsmall", count, invisible = false, offsetX, offsetY, xs, sm, md, lg, xl, ...props }, ref) => {
	const renderChild = {
		["dot"]: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: "svg",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 4 4",
			fill: "none",
			width: "1em",
			height: "1em",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
				cx: "2",
				cy: "2",
				r: "2",
				fill: "currentColor"
			})
		}),
		["number"]: count,
		["new"]: "N"
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		"data-role": "push-badge-wrapper",
		ref,
		...props,
		sx: [require_components_push_badge_style.pushBadgeWrapperStyle({
			variant,
			offsetX,
			offsetY,
			size,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: [children, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
			as: "span",
			"wds-component": "push-badge",
			"data-variant": variant,
			sx: require_components_push_badge_style.pushBadgeStyle({
				variant,
				invisible,
				position
			}),
			children: variant === "dot" ? renderChild[variant] : !invisible && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
				"data-role": "push-badge-text",
				variant: "caption2",
				weight: "bold",
				align: "center",
				children: renderChild[variant]
			})
		})]
	});
});
PushBadge.displayName = "PushBadge";
//#endregion
exports.PushBadge = PushBadge;

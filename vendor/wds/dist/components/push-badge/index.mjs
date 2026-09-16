'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { pushBadgeStyle, pushBadgeWrapperStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/push-badge/index.tsx
const PushBadge = forwardRef(({ variant = "dot", position = "top-right", children, size = "xsmall", count, invisible = false, offsetX, offsetY, xs, sm, md, lg, xl, ...props }, ref) => {
	const renderChild = {
		["dot"]: /* @__PURE__ */ jsx(Box, {
			as: "svg",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 4 4",
			fill: "none",
			width: "1em",
			height: "1em",
			children: /* @__PURE__ */ jsx("circle", {
				cx: "2",
				cy: "2",
				r: "2",
				fill: "currentColor"
			})
		}),
		["number"]: count,
		["new"]: "N"
	};
	return /* @__PURE__ */ jsxs(FlexBox, {
		"data-role": "push-badge-wrapper",
		ref,
		...props,
		sx: [pushBadgeWrapperStyle({
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
		children: [children, /* @__PURE__ */ jsx(Box, {
			as: "span",
			"wds-component": "push-badge",
			"data-variant": variant,
			sx: pushBadgeStyle({
				variant,
				invisible,
				position
			}),
			children: variant === "dot" ? renderChild[variant] : !invisible && /* @__PURE__ */ jsx(Typography, {
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
export { PushBadge };

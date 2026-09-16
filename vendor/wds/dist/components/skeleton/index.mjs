'use client';
import { skeletonStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/skeleton/index.tsx
const Skeleton = forwardRef(({ variant = "text", width, height, align = "left", color, opacity = "opacity.100", radius, animation = true, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		ref,
		...props,
		sx: [skeletonStyle({
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
		children: /* @__PURE__ */ jsx("span", {})
	});
});
Skeleton.displayName = "Skeleton";
//#endregion
export { Skeleton };

'use client';
import { dividerStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/divider/index.tsx
const Divider = forwardRef(({ size = "100%", thickness = "1px", vertical = false, color = "semantic.line.normal.normal", xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		as: "hr",
		ref,
		role: "separator",
		"aria-orientation": vertical ? "vertical" : "horizontal",
		...props,
		sx: [dividerStyle({
			thickness,
			xs,
			sm,
			md,
			lg,
			xl,
			vertical,
			color,
			size
		}), props.sx]
	});
});
Divider.displayName = "Divider";
//#endregion
export { Divider };

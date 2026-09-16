'use client';
import { Typography } from "../typography/index.mjs";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/label/index.tsx
const Label = forwardRef(({ display = "inline-block", required, children, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(Typography, {
		variant: "label1",
		weight: "bold",
		color: "semantic.label.neutral",
		as: "label",
		ref,
		display,
		...props,
		children: [children, required && /* @__PURE__ */ jsx(Typography, {
			variant: "label1",
			weight: "medium",
			display: "inline-block",
			sx: { marginLeft: "4px" },
			color: "semantic.status.negative",
			children: "*"
		})]
	});
});
Label.displayName = "Label";
//#endregion
export { Label };

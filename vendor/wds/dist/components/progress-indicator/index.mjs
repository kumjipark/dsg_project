'use client';
import { progressIndicatorStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/progress-indicator/index.tsx
const ProgressIndicator = forwardRef(({ percent = 0, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		"wds-component": "progress-indicator",
		role: "progressbar",
		"aria-valuemax": 100,
		"aria-valuemin": 0,
		"aria-valuenow": percent,
		"aria-valuetext": percent + "%",
		"aria-label": "Progress indicator",
		ref,
		...props,
		sx: [progressIndicatorStyle, props.sx],
		style: {
			...props.style,
			"--wds-progress-indicator-transform": `translateX(${-100 + percent}%)`
		}
	});
});
ProgressIndicator.displayName = "ProgressIndicator";
//#endregion
export { ProgressIndicator };

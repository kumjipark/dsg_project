'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_progress_indicator_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/progress-indicator/index.tsx
const ProgressIndicator = (0, react.forwardRef)(({ percent = 0, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		"wds-component": "progress-indicator",
		role: "progressbar",
		"aria-valuemax": 100,
		"aria-valuemin": 0,
		"aria-valuenow": percent,
		"aria-valuetext": percent + "%",
		"aria-label": "Progress indicator",
		ref,
		...props,
		sx: [require_components_progress_indicator_style.progressIndicatorStyle, props.sx],
		style: {
			...props.style,
			"--wds-progress-indicator-transform": `translateX(${-100 + percent}%)`
		}
	});
});
ProgressIndicator.displayName = "ProgressIndicator";
//#endregion
exports.ProgressIndicator = ProgressIndicator;

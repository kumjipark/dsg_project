'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_divider_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/divider/index.tsx
const Divider = (0, react.forwardRef)(({ size = "100%", thickness = "1px", vertical = false, color = "semantic.line.normal.normal", xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: "hr",
		ref,
		role: "separator",
		"aria-orientation": vertical ? "vertical" : "horizontal",
		...props,
		sx: [require_components_divider_style.dividerStyle({
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
exports.Divider = Divider;

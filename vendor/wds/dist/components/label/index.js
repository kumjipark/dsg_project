'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_typography_index = require("../typography/index.js");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/label/index.tsx
const Label = (0, react.forwardRef)(({ display = "inline-block", required, children, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_typography_index.Typography, {
		variant: "label1",
		weight: "bold",
		color: "semantic.label.neutral",
		as: "label",
		ref,
		display,
		...props,
		children: [children, required && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
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
exports.Label = Label;

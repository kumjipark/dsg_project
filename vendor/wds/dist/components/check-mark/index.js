'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_checkbox_index = require("../checkbox/index.js");
const require_components_check_mark_style = require("./style.js");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/check-mark/index.tsx
const CheckMark = (0, react.forwardRef)(({ size = "medium", bold = false, tight = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_checkbox_index.Checkbox, {
		ref,
		"wds-component": "check-mark",
		tight: false,
		...props,
		sx: [require_components_check_mark_style.checkMarkStyle({
			...props,
			size,
			tight,
			bold
		}), props.sx]
	});
});
CheckMark.displayName = "CheckMark";
//#endregion
exports.CheckMark = CheckMark;

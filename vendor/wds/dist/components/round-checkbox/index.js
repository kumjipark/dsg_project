'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_checkbox_index = require("../checkbox/index.js");
const require_components_round_checkbox_style = require("./style.js");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/round-checkbox/index.tsx
/**
* @deprecated
*/
const RoundCheckbox = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_checkbox_index.Checkbox, {
		ref,
		"wds-component": "round-checkbox",
		tight: false,
		...props,
		sx: [require_components_round_checkbox_style.roundCheckboxStyle(props), props.sx]
	});
});
RoundCheckbox.displayName = "RoundCheckbox";
//#endregion
exports.RoundCheckbox = RoundCheckbox;

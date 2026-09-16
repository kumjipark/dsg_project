'use client';
import { Checkbox } from "../checkbox/index.mjs";
import { roundCheckboxStyle } from "./style.mjs";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/round-checkbox/index.tsx
/**
* @deprecated
*/
const RoundCheckbox = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(Checkbox, {
		ref,
		"wds-component": "round-checkbox",
		tight: false,
		...props,
		sx: [roundCheckboxStyle(props), props.sx]
	});
});
RoundCheckbox.displayName = "RoundCheckbox";
//#endregion
export { RoundCheckbox };

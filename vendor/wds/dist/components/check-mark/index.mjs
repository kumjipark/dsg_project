'use client';
import { Checkbox } from "../checkbox/index.mjs";
import { checkMarkStyle } from "./style.mjs";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/check-mark/index.tsx
const CheckMark = forwardRef(({ size = "medium", bold = false, tight = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Checkbox, {
		ref,
		"wds-component": "check-mark",
		tight: false,
		...props,
		sx: [checkMarkStyle({
			...props,
			size,
			tight,
			bold
		}), props.sx]
	});
});
CheckMark.displayName = "CheckMark";
//#endregion
export { CheckMark };

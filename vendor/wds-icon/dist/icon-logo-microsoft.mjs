'use client';
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/icon-logo-microsoft.tsx
/**
* 마이크로소프트 로고를 표현합니다.
* 키워드: 마소
* 속성: Outlined
*/
const IconLogoMicrosoft = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsxs(Box, {
		as: "svg",
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		ref,
		...props,
		children: [
			/* @__PURE__ */ jsx("path", {
				d: "M11.3571 3H3V11.3571H11.3571V3Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M21 3H12.6429V11.3571H21V3Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M12.6429 12.6429H21V21H12.6429V12.6429Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M11.3571 12.6429H3V21H11.3571V12.6429Z",
				fill: "currentColor"
			})
		]
	});
});
//#endregion
export { IconLogoMicrosoft as default };

'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/icon-line-horizontal-thick.tsx
/**
* 정보의 변화가 없음을 표현합니다.
* 키워드: Thick, 수평라인, 라인, 수평선, Horizontal Line
* 속성: Outlined
*/
const IconLineHorizontalThick = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: "svg",
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		ref,
		...props,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4.70001 12.0002C4.70001 11.2822 5.28204 10.7002 6.00001 10.7002H18C18.718 10.7002 19.3 11.2822 19.3 12.0002C19.3 12.7182 18.718 13.3002 18 13.3002H6.00001C5.28204 13.3002 4.70001 12.7182 4.70001 12.0002Z",
			fill: "currentColor"
		})
	});
});
//#endregion
exports.default = IconLineHorizontalThick;

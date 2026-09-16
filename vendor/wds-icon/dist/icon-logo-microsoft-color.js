'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/icon-logo-microsoft-color.tsx
/**
* 마이크로소프트 로고를 표현합니다.
* 키워드: 마소
*/
const IconLogoMicrosoftColor = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.Box, {
		as: "svg",
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		ref,
		...props,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				d: "M12.6428 12.6429H21V21.0001H12.6428V12.6429Z",
				fill: "#FBB604"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				d: "M11.3571 12.6429H3V21.0001H11.3571V12.6429Z",
				fill: "#03A4EE"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				d: "M21 3H12.6428V11.3571H21V3Z",
				fill: "#7EB903"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
				d: "M11.3571 3H3V11.3571H11.3571V3Z",
				fill: "#F05022"
			})
		]
	});
});
//#endregion
exports.default = IconLogoMicrosoftColor;

'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/icon-arrow-left-thick.tsx
/**
* 왼쪽 화살표를 표현합니다.
* 키워드: 애로우, Arrow, 화살표, Left, Back, Thick
* 속성: Outlined
*/
const IconArrowLeftThick = (0, react.forwardRef)((props, ref) => {
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
			d: "M2.58089 11.0807C2.07321 11.5884 2.07321 12.4115 2.58089 12.9192L9.58086 19.9192C10.0885 20.4268 10.9117 20.4268 11.4193 19.9192C11.927 19.4115 11.927 18.5884 11.4193 18.0807L6.63859 13.2999H20.5001C21.218 13.2999 21.8001 12.7179 21.8001 11.9999C21.8001 11.282 21.218 10.6999 20.5001 10.6999L6.63859 10.6999L11.4193 5.91917C11.927 5.41148 11.927 4.58837 11.4193 4.08069C10.9117 3.57301 10.0885 3.57301 9.58086 4.08069L2.58089 11.0807Z",
			fill: "currentColor"
		})
	});
});
//#endregion
exports.default = IconArrowLeftThick;

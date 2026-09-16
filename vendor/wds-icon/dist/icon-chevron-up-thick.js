'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/icon-chevron-up-thick.tsx
/**
* 위쪽 방향의 꺾쇠를 표현합니다. 굵기와 사이즈 옵션을 조절할 수 있습니다.
* 키워드: Thick, Chevron, Arrow, Up, Top, 꺾쇠, 위, 화살표, 표시, 상단
* 속성: Outlined
*/
const IconChevronUpThick = (0, react.forwardRef)((props, ref) => {
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
			d: "M3.08096 16.4192C3.58864 16.9269 4.41175 16.9269 4.91943 16.4192L12.0002 9.33843L19.081 16.4192C19.5886 16.9269 20.4118 16.9269 20.9194 16.4192C21.4271 15.9115 21.4271 15.0884 20.9194 14.5807L12.9194 6.58071C12.4118 6.07303 11.5886 6.07303 11.081 6.58071L3.08096 14.5807C2.57327 15.0884 2.57327 15.9115 3.08096 16.4192Z",
			fill: "currentColor"
		})
	});
});
//#endregion
exports.default = IconChevronUpThick;

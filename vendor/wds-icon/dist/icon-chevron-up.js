'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/icon-chevron-up.tsx
/**
* 위쪽 방향의 꺾쇠를 표현합니다. 굵기와 사이즈 옵션을 조절할 수 있습니다.
* 키워드: Chevron, Arrow, Up, Top, 꺾쇠, 위, 화살표, 표시, 상단
* 속성: Outlined
*/
const IconChevronUp = (0, react.forwardRef)((props, ref) => {
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
			d: "M3.3633 16.1365C3.71478 16.488 4.28463 16.488 4.6361 16.1365L11.9997 8.77289L19.3633 16.1365C19.7148 16.488 20.2846 16.488 20.6361 16.1365C20.9876 15.785 20.9876 15.2152 20.6361 14.8637L12.6361 6.8637C12.2846 6.51223 11.7148 6.51223 11.3633 6.8637L3.3633 14.8637C3.01183 15.2152 3.01183 15.785 3.3633 16.1365Z",
			fill: "currentColor"
		})
	});
});
//#endregion
exports.default = IconChevronUp;

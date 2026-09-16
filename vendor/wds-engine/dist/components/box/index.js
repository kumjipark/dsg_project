'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_hooks_use_sx_props = require("../../hooks/use-sx-props.js");
let react = require("react");
let _emotion_react_jsx_runtime = require("@emotion/react/jsx-runtime");
//#region src/components/box/index.tsx
/** @jsxImportSource @emotion/react */
const Box = (0, react.forwardRef)(({ as, sx, ...props }, ref) => {
	return /* @__PURE__ */ (0, _emotion_react_jsx_runtime.jsx)(as || "div", {
		ref,
		css: require_hooks_use_sx_props.default()(sx),
		...props
	});
});
Box.displayName = "Box";
//#endregion
exports.Box = Box;

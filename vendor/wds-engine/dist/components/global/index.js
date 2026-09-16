'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_utils_interpolation = require("../../utils/interpolation.js");
const require_hooks_use_theme = require("../../hooks/use-theme.js");
let _emotion_react = require("@emotion/react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/global/index.tsx
const Global = ({ styles }) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_emotion_react.Global, { styles: require_utils_interpolation.interpolationTheme(styles, require_hooks_use_theme.default()) });
};
//#endregion
exports.Global = Global;

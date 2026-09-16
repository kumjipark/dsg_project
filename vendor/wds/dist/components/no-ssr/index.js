'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/no-ssr/index.tsx
const useEnhancedEffect = typeof window !== "undefined" ? react.useLayoutEffect : react.useEffect;
const NoSsr = ({ children, fallback }) => {
	const [mountedState, setMountedState] = (0, react.useState)(false);
	useEnhancedEffect(() => {
		if (!mountedState) setMountedState(true);
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: mountedState ? children : fallback });
};
//#endregion
exports.NoSsr = NoSsr;

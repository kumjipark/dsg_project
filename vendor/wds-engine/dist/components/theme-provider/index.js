'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_context_index = require("../../context/index.js");
let _wanteddev_wds_theme = require("@wanteddev/wds-theme");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/theme-provider/index.tsx
const ThemeProvider = ({ theme: localTheme = "light", children, provider }) => {
	const engineTheme = (0, react.useMemo)(() => {
		switch (localTheme) {
			case "light": return _wanteddev_wds_theme.theme.light;
			case "dark": return _wanteddev_wds_theme.theme.dark;
			default: console.error("WDS: Please check if the correct Theme value is set.");
		}
	}, [localTheme]);
	const Provider = provider ?? react.Fragment;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_context_index.default.Provider, {
		value: engineTheme,
		children: Boolean(provider) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Provider, {
			theme: engineTheme,
			children
		}) : children
	});
};
//#endregion
exports.ThemeProvider = ThemeProvider;

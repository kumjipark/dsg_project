'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
require("../_virtual/_rolldown/runtime.js");
const require_hooks_use_theme_control = require("../hooks/use-theme-control.js");
const require_theme_provider_store_provider_index = require("./store-provider/index.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react_jsx_runtime = require("react/jsx-runtime");
let next_themes = require("next-themes");
//#region src/theme-provider/index.tsx
const ThemeProvider = ({ children, enableDarkMode, disableTransitionOnChange = false, storageKey = "theme", disableDefaultGlobalStyle = false, provider }) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(next_themes.ThemeProvider, {
		scriptProps: typeof window === "undefined" ? void 0 : { type: "application/json" },
		themes: enableDarkMode ? ["light", "dark"] : ["light"],
		enableSystem: enableDarkMode || false,
		enableColorScheme: true,
		disableTransitionOnChange,
		forcedTheme: enableDarkMode ? void 0 : "light",
		storageKey,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PrivateThemeProvider, {
			disableDefaultGlobalStyle,
			provider,
			children
		})
	});
};
const PrivateThemeProvider = ({ children, disableDefaultGlobalStyle, provider }) => {
	const { theme } = require_hooks_use_theme_control.default();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_wanteddev_wds_engine.ThemeProvider, {
		theme,
		provider,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_theme_provider_store_provider_index.default, { children }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Global, { styles: disableDefaultGlobalStyle ? void 0 : (themeObj) => ({ body: { backgroundColor: themeObj.semantic.background.normal.normal } }) })]
	});
};
//#endregion
exports.default = ThemeProvider;

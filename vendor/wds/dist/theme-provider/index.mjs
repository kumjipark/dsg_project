'use client';
import useThemeControl from "../hooks/use-theme-control.mjs";
import StoreProvider from "./store-provider/index.mjs";
import { Global, ThemeProvider as ThemeProvider$1 } from "@wanteddev/wds-engine";
import { jsx, jsxs } from "react/jsx-runtime";
import { ThemeProvider as ThemeProvider$2 } from "next-themes";
//#region src/theme-provider/index.tsx
const ThemeProvider = ({ children, enableDarkMode, disableTransitionOnChange = false, storageKey = "theme", disableDefaultGlobalStyle = false, provider }) => {
	return /* @__PURE__ */ jsx(ThemeProvider$2, {
		scriptProps: typeof window === "undefined" ? void 0 : { type: "application/json" },
		themes: enableDarkMode ? ["light", "dark"] : ["light"],
		enableSystem: enableDarkMode || false,
		enableColorScheme: true,
		disableTransitionOnChange,
		forcedTheme: enableDarkMode ? void 0 : "light",
		storageKey,
		children: /* @__PURE__ */ jsx(PrivateThemeProvider, {
			disableDefaultGlobalStyle,
			provider,
			children
		})
	});
};
const PrivateThemeProvider = ({ children, disableDefaultGlobalStyle, provider }) => {
	const { theme } = useThemeControl();
	return /* @__PURE__ */ jsxs(ThemeProvider$1, {
		theme,
		provider,
		children: [/* @__PURE__ */ jsx(StoreProvider, { children }), /* @__PURE__ */ jsx(Global, { styles: disableDefaultGlobalStyle ? void 0 : (themeObj) => ({ body: { backgroundColor: themeObj.semantic.background.normal.normal } }) })]
	});
};
//#endregion
export { ThemeProvider as default };

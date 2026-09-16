'use client';
import ThemeContext from "../../context/index.mjs";
import { theme } from "@wanteddev/wds-theme";
import { Fragment, useMemo } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/theme-provider/index.tsx
const ThemeProvider = ({ theme: localTheme = "light", children, provider }) => {
	const engineTheme = useMemo(() => {
		switch (localTheme) {
			case "light": return theme.light;
			case "dark": return theme.dark;
			default: console.error("WDS: Please check if the correct Theme value is set.");
		}
	}, [localTheme]);
	const Provider = provider ?? Fragment;
	return /* @__PURE__ */ jsx(ThemeContext.Provider, {
		value: engineTheme,
		children: Boolean(provider) ? /* @__PURE__ */ jsx(Provider, {
			theme: engineTheme,
			children
		}) : children
	});
};
//#endregion
export { ThemeProvider };

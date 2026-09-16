'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
require("../_virtual/_rolldown/runtime.js");
let react = require("react");
let next_themes = require("next-themes");
//#region src/hooks/use-theme-control.ts
const themes = ["light", "dark"];
const useThemeControl = () => {
	const { resolvedTheme, forcedTheme, theme: themeOriginValue, setTheme } = (0, next_themes.useTheme)();
	return {
		theme: (0, react.useMemo)(() => {
			if (!resolvedTheme) return "light";
			if (themes.includes(forcedTheme)) return forcedTheme;
			return themes.includes(resolvedTheme) ? resolvedTheme : "light";
		}, [resolvedTheme, forcedTheme]),
		themeOriginValue,
		setTheme
	};
};
//#endregion
exports.default = useThemeControl;

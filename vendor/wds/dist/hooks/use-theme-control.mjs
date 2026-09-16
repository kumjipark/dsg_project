'use client';
import { useMemo } from "react";
import { useTheme } from "next-themes";
//#region src/hooks/use-theme-control.ts
const themes = ["light", "dark"];
const useThemeControl = () => {
	const { resolvedTheme, forcedTheme, theme: themeOriginValue, setTheme } = useTheme();
	return {
		theme: useMemo(() => {
			if (!resolvedTheme) return "light";
			if (themes.includes(forcedTheme)) return forcedTheme;
			return themes.includes(resolvedTheme) ? resolvedTheme : "light";
		}, [resolvedTheme, forcedTheme]),
		themeOriginValue,
		setTheme
	};
};
//#endregion
export { useThemeControl as default };

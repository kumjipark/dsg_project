'use client';
import ThemeContext from "../../context/index.mjs";
import { darkOriginTheme, lightOriginTheme } from "@wanteddev/wds-theme";
import { useMemo } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/force-theme/index.tsx
const ForceTheme = ({ theme: localTheme, children }) => {
	const engineTheme = useMemo(() => {
		switch (localTheme) {
			case "light": return lightOriginTheme;
			case "dark": return darkOriginTheme;
			default: console.error("WDS: Please check if the correct Theme value is set.");
		}
	}, [localTheme]);
	return /* @__PURE__ */ jsx(ThemeContext.Provider, {
		value: engineTheme,
		children
	});
};
ForceTheme.displayName = "ForceTheme";
//#endregion
export { ForceTheme };

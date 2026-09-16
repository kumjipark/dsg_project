'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
const require_utils_interpolation = require("../utils/interpolation.js");
const require_hooks_use_theme = require("./use-theme.js");
//#region src/hooks/use-sx-props.ts
const useSxProps = () => {
	const theme = require_hooks_use_theme.default();
	const mergeSxProps = (sx) => {
		return require_utils_interpolation.interpolationTheme(sx, theme);
	};
	return mergeSxProps;
};
//#endregion
exports.default = useSxProps;

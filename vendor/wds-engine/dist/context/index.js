'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
require("../_virtual/_rolldown/runtime.js");
let _wanteddev_wds_theme = require("@wanteddev/wds-theme");
//#region src/context/index.ts
const ThemeContext = (0, require("react").createContext)(_wanteddev_wds_theme.theme.light);
if (process.env.NODE_ENV !== "production") ThemeContext.displayName = "ThemeContext";
//#endregion
exports.default = ThemeContext;

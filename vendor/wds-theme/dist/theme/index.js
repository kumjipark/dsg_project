Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_utils_index = require("../utils/index.js");
const require_theme_breakpoint_index = require("./breakpoint/index.js");
const require_theme_opacity_index = require("./opacity/index.js");
const require_theme_spacing_index = require("./spacing/index.js");
const require_theme_z_index_index = require("./z-index/index.js");
const require_theme_atomic_index = require("./atomic/index.js");
const require_theme_semantic_index = require("./semantic/index.js");
//#region src/theme/index.ts
/**
* Theme without css variable
*/
const lightOriginTheme = {
	atomic: require_theme_atomic_index.default,
	semantic: {
		...require_theme_semantic_index.light,
		platform: { ios: { navigation: `
          background-color: ${require_utils_index.addHexOpacity(require_theme_semantic_index.light.background.elevated.normal, require_theme_opacity_index.default[88])};
          backdrop-filter: blur(32px);
      ` } }
	},
	opacity: require_theme_opacity_index.default,
	breakpoint: require_theme_breakpoint_index.default,
	spacing: require_theme_spacing_index.default,
	zIndex: require_theme_z_index_index.default
};
/**
* Theme without css variable
*/
const darkOriginTheme = {
	atomic: require_theme_atomic_index.default,
	semantic: {
		...require_theme_semantic_index.dark,
		platform: { ios: { navigation: `
          background-color: ${require_utils_index.addHexOpacity(require_theme_semantic_index.dark.background.elevated.normal, require_theme_opacity_index.default[88])};
          backdrop-filter: blur(32px);
      ` } }
	},
	opacity: require_theme_opacity_index.default,
	breakpoint: require_theme_breakpoint_index.default,
	spacing: require_theme_spacing_index.default,
	zIndex: require_theme_z_index_index.default
};
const addVarPrefix = (obj, prefix) => {
	const newObj = {};
	for (const key in obj) {
		const originPrefix = `${prefix}-${key}`;
		if (typeof obj[key] === "object") newObj[key] = addVarPrefix(obj[key], originPrefix);
		else if (typeof obj[key] === "string" && (obj[key].startsWith("#") || prefix.includes("shadow"))) newObj[key] = `var(--${originPrefix})`;
		else newObj[key] = obj[key];
	}
	return newObj;
};
const lightTheme = {
	...lightOriginTheme,
	atomic: addVarPrefix(require_theme_atomic_index.default, "atomic"),
	semantic: {
		...addVarPrefix(require_theme_semantic_index.light, "semantic"),
		platform: { ios: { navigation: `
          background-color: rgba(var(--semantic-background-elevated-normal-rgb), 0.88);
          backdrop-filter: blur(32px);
        ` } }
	}
};
const darkTheme = {
	...darkOriginTheme,
	atomic: addVarPrefix(require_theme_atomic_index.default, "atomic"),
	semantic: {
		...addVarPrefix(require_theme_semantic_index.dark, "semantic"),
		platform: { ios: { navigation: `
          background-color: rgba(var(--semantic-background-elevated-normal-rgb), 0.88);
          backdrop-filter: blur(32px);
        ` } }
	}
};
const theme = {
	light: lightTheme,
	dark: darkTheme
};
//#endregion
exports.darkOriginTheme = darkOriginTheme;
exports.darkTheme = darkTheme;
exports.lightOriginTheme = lightOriginTheme;
exports.lightTheme = lightTheme;
exports.theme = theme;

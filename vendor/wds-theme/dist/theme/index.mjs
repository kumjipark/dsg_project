import { addHexOpacity } from "../utils/index.mjs";
import breakpoint from "./breakpoint/index.mjs";
import opacity from "./opacity/index.mjs";
import spacing from "./spacing/index.mjs";
import zIndex from "./z-index/index.mjs";
import atomic_default from "./atomic/index.mjs";
import { dark, light } from "./semantic/index.mjs";
//#region src/theme/index.ts
/**
* Theme without css variable
*/
const lightOriginTheme = {
	atomic: atomic_default,
	semantic: {
		...light,
		platform: { ios: { navigation: `
          background-color: ${addHexOpacity(light.background.elevated.normal, opacity[88])};
          backdrop-filter: blur(32px);
      ` } }
	},
	opacity,
	breakpoint,
	spacing,
	zIndex
};
/**
* Theme without css variable
*/
const darkOriginTheme = {
	atomic: atomic_default,
	semantic: {
		...dark,
		platform: { ios: { navigation: `
          background-color: ${addHexOpacity(dark.background.elevated.normal, opacity[88])};
          backdrop-filter: blur(32px);
      ` } }
	},
	opacity,
	breakpoint,
	spacing,
	zIndex
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
	atomic: addVarPrefix(atomic_default, "atomic"),
	semantic: {
		...addVarPrefix(light, "semantic"),
		platform: { ios: { navigation: `
          background-color: rgba(var(--semantic-background-elevated-normal-rgb), 0.88);
          backdrop-filter: blur(32px);
        ` } }
	}
};
const darkTheme = {
	...darkOriginTheme,
	atomic: addVarPrefix(atomic_default, "atomic"),
	semantic: {
		...addVarPrefix(dark, "semantic"),
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
export { darkOriginTheme, darkTheme, lightOriginTheme, lightTheme, theme };

import objectPath from "object-path";
//#region src/utils/index.ts
const getColorByToken = (theme, token) => objectPath.get(theme, token);
const addHexOpacity = (hex, value) => hex.substring(0, 7) + Math.round(value * 255).toString(16).padStart(2, "0").toUpperCase();
//#endregion
export { addHexOpacity, getColorByToken };

//#region src/utils/interpolation.ts
const interpolationTheme = (expressions, theme) => {
	if (Array.isArray(expressions)) return expressions.map((expression) => interpolationTheme(expression, theme));
	if (typeof expressions === "function") return expressions(theme);
	return expressions;
};
//#endregion
export { interpolationTheme };

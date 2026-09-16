Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/utils/internal/css.ts
const toCssValue = (value) => {
	if (typeof value === "number") return `${value}px`;
	return value;
};
//#endregion
exports.toCssValue = toCssValue;

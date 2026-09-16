Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let react = require("react");
//#region src/hooks/internal/use-media.ts
const useMedia = (queries, values, defaultValue) => {
	const valuesRef = (0, react.useRef)(values);
	valuesRef.current = values;
	const defaultValueRef = (0, react.useRef)(defaultValue);
	defaultValueRef.current = defaultValue;
	const mediaQueryLists = (0, react.useMemo)(() => {
		if (typeof window === "undefined") return [];
		return queries.map((q) => window.matchMedia(q));
	}, Object.values(queries));
	const getValue = (0, react.useCallback)(() => {
		if (typeof window === "undefined") return defaultValueRef.current;
		const index = mediaQueryLists.findIndex((mql) => mql.matches);
		return typeof valuesRef.current[index] !== "undefined" ? valuesRef.current[index] : defaultValueRef.current;
	}, [mediaQueryLists]);
	const [value, setValue] = (0, react.useState)(getValue);
	(0, react.useEffect)(() => {
		const handler = () => setValue(getValue);
		handler();
		mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));
		return () => mediaQueryLists.forEach((mql) => mql.removeEventListener("change", handler));
	}, [mediaQueryLists, getValue]);
	return value;
};
//#endregion
exports.useMedia = useMedia;

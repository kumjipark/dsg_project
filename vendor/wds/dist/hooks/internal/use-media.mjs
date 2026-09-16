import { useCallback, useEffect, useMemo, useRef, useState } from "react";
//#region src/hooks/internal/use-media.ts
const useMedia = (queries, values, defaultValue) => {
	const valuesRef = useRef(values);
	valuesRef.current = values;
	const defaultValueRef = useRef(defaultValue);
	defaultValueRef.current = defaultValue;
	const mediaQueryLists = useMemo(() => {
		if (typeof window === "undefined") return [];
		return queries.map((q) => window.matchMedia(q));
	}, Object.values(queries));
	const getValue = useCallback(() => {
		if (typeof window === "undefined") return defaultValueRef.current;
		const index = mediaQueryLists.findIndex((mql) => mql.matches);
		return typeof valuesRef.current[index] !== "undefined" ? valuesRef.current[index] : defaultValueRef.current;
	}, [mediaQueryLists]);
	const [value, setValue] = useState(getValue);
	useEffect(() => {
		const handler = () => setValue(getValue);
		handler();
		mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));
		return () => mediaQueryLists.forEach((mql) => mql.removeEventListener("change", handler));
	}, [mediaQueryLists, getValue]);
	return value;
};
//#endregion
export { useMedia };

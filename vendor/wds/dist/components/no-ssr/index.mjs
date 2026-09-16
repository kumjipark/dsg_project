'use client';
import { useEffect, useLayoutEffect, useState } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
//#region src/components/no-ssr/index.tsx
const useEnhancedEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
const NoSsr = ({ children, fallback }) => {
	const [mountedState, setMountedState] = useState(false);
	useEnhancedEffect(() => {
		if (!mountedState) setMountedState(true);
	}, []);
	return /* @__PURE__ */ jsx(Fragment, { children: mountedState ? children : fallback });
};
//#endregion
export { NoSsr };

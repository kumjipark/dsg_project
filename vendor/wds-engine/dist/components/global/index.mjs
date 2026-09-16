'use client';
import { interpolationTheme } from "../../utils/interpolation.mjs";
import useTheme from "../../hooks/use-theme.mjs";
import { Global as Global$1 } from "@emotion/react";
import { jsx } from "react/jsx-runtime";
//#region src/components/global/index.tsx
const Global = ({ styles }) => {
	return /* @__PURE__ */ jsx(Global$1, { styles: interpolationTheme(styles, useTheme()) });
};
//#endregion
export { Global };

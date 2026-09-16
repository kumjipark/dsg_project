'use client';
import useSxProps from "../../hooks/use-sx-props.mjs";
import { forwardRef } from "react";
import { jsx } from "@emotion/react/jsx-runtime";
//#region src/components/box/index.tsx
/** @jsxImportSource @emotion/react */
const Box = forwardRef(({ as, sx, ...props }, ref) => {
	return /* @__PURE__ */ jsx(as || "div", {
		ref,
		css: useSxProps()(sx),
		...props
	});
});
Box.displayName = "Box";
//#endregion
export { Box };

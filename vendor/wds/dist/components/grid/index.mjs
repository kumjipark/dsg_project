'use client';
import { gridStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/grid/index.tsx
const Grid = forwardRef(({ as, justifyContent = "initial", alignItems = "initial", spacing = 20, rowSpacing = spacing, columnSpacing = spacing, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		as: as || "div",
		ref,
		...props,
		sx: [gridStyle({
			rowSpacing,
			columnSpacing,
			justifyContent,
			alignItems,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx]
	});
});
Grid.displayName = "Grid";
//#endregion
export { Grid };

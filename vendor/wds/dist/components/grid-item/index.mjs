'use client';
import { gridItemStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/grid-item/index.tsx
const GridItem = forwardRef(({ as, alignSelf = "initial", columns, offset, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		as: as || "div",
		ref,
		...props,
		sx: [gridItemStyle({
			columns,
			alignSelf,
			offset,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx]
	});
});
GridItem.displayName = "GridItem";
//#endregion
export { GridItem };

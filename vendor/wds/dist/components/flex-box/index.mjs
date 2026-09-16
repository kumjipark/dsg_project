'use client';
import { flexBoxStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/flex-box/index.tsx
const FlexBox = forwardRef(({ as, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, flexBasis, alignSelf, gap, rowGap, columnGap, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		as: as || "div",
		ref,
		...props,
		sx: [flexBoxStyle({
			flexDirection,
			flexWrap,
			justifyContent,
			alignItems,
			alignContent,
			order,
			flex,
			flexGrow,
			flexShrink,
			flexBasis,
			alignSelf,
			rowGap,
			columnGap,
			gap,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx]
	});
});
FlexBox.displayName = "FlexBox";
//#endregion
export { FlexBox };

'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { backgroundBlendStyle, pageCounterStyle } from "./style.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/page-counter/index.tsx
const PageCounter = forwardRef(({ totalPages = 3, currentPage = 1, size = "medium", alternative = false, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(FlexBox, {
		ref,
		...props,
		alignItems: "center",
		sx: [pageCounterStyle({
			size,
			alternative,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: [
			!alternative && /* @__PURE__ */ jsx(Box, {
				as: "span",
				role: "presentation",
				"data-role": "page-counter-background-blend",
				sx: backgroundBlendStyle
			}),
			/* @__PURE__ */ jsx("span", {
				"data-role": "page-counter-text",
				children: currentPage
			}),
			/* @__PURE__ */ jsx("span", {
				"data-role": "page-counter-divider",
				children: "/"
			}),
			/* @__PURE__ */ jsx("span", {
				"data-role": "page-counter-text",
				children: totalPages
			})
		]
	});
});
PageCounter.displayName = "PageCounter";
//#endregion
export { PageCounter };

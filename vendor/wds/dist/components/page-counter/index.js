'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_page_counter_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/page-counter/index.tsx
const PageCounter = (0, react.forwardRef)(({ totalPages = 3, currentPage = 1, size = "medium", alternative = false, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_flex_box_index.FlexBox, {
		ref,
		...props,
		alignItems: "center",
		sx: [require_components_page_counter_style.pageCounterStyle({
			size,
			alternative,
			xs,
			sm,
			md,
			lg,
			xl
		}), props.sx],
		children: [
			!alternative && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
				as: "span",
				role: "presentation",
				"data-role": "page-counter-background-blend",
				sx: require_components_page_counter_style.backgroundBlendStyle
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				"data-role": "page-counter-text",
				children: currentPage
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				"data-role": "page-counter-divider",
				children: "/"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				"data-role": "page-counter-text",
				children: totalPages
			})
		]
	});
});
PageCounter.displayName = "PageCounter";
//#endregion
exports.PageCounter = PageCounter;

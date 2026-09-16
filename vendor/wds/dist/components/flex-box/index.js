'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/flex-box/index.tsx
const FlexBox = (0, react.forwardRef)(({ as, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, flexBasis, alignSelf, gap, rowGap, columnGap, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: as || "div",
		ref,
		...props,
		sx: [require_components_flex_box_style.flexBoxStyle({
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
exports.FlexBox = FlexBox;

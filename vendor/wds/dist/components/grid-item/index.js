'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_grid_item_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/grid-item/index.tsx
const GridItem = (0, react.forwardRef)(({ as, alignSelf = "initial", columns, offset, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: as || "div",
		ref,
		...props,
		sx: [require_components_grid_item_style.gridItemStyle({
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
exports.GridItem = GridItem;

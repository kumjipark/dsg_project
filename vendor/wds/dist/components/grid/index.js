'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_grid_style = require("./style.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/grid/index.tsx
const Grid = (0, react.forwardRef)(({ as, justifyContent = "initial", alignItems = "initial", spacing = 20, rowSpacing = spacing, columnSpacing = spacing, xs, sm, md, lg, xl, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: as || "div",
		ref,
		...props,
		sx: [require_components_grid_style.gridStyle({
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
exports.Grid = Grid;

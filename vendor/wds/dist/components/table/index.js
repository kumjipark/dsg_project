'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_flex_box_index = require("../flex-box/index.js");
const require_components_typography_index = require("../typography/index.js");
const require_components_scroll_area_index = require("../scroll-area/index.js");
const require_hooks_internal_use_resize_observer = require("../../hooks/internal/use-resize-observer.js");
const require_components_table_style = require("./style.js");
const require_components_table_constants = require("./constants.js");
const require_components_table_contexts = require("./contexts.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
let react = require("react");
let _radix_ui_react_compose_refs = require("@radix-ui/react-compose-refs");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/components/table/index.tsx
const Table = (0, react.forwardRef)(({ pagination, children, viewportRef: originViewportRef, ...props }, ref) => {
	const [isSticky, setIsSticky] = (0, react.useState)(false);
	const viewportRef = (0, react.useRef)(null);
	const composedViewportRef = (0, _radix_ui_react_compose_refs.useComposedRefs)(viewportRef, originViewportRef);
	const handleResize = (0, react.useCallback)(() => {
		const target = viewportRef.current;
		if (!target) return;
		setIsSticky(target.scrollTop > 0);
	}, []);
	require_hooks_internal_use_resize_observer.default(viewportRef.current?.firstElementChild, handleResize);
	(0, react.useEffect)(() => {
		const target = viewportRef.current;
		if (!target) return;
		const handleOnScroll = (e) => {
			const eventTarget = e.target;
			setIsSticky(eventTarget.scrollTop > 0);
		};
		target.addEventListener("scroll", handleOnScroll);
		return () => target.removeEventListener("scroll", handleOnScroll);
	}, [viewportRef]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
		flexDirection: "column",
		...props,
		sx: [require_components_table_style.tableStyle, props.sx],
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_components_table_contexts.TableProvider, {
			isSticky,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_scroll_area_index.ScrollArea, {
				viewportRef: composedViewportRef,
				sx: require_components_table_style.scrollAreaStyle,
				zIndex: 1,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
					as: "table",
					ref,
					children
				})
			}), Boolean(pagination) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_flex_box_index.FlexBox, {
				flex: "1",
				justifyContent: "center",
				"data-role": "table-pagination",
				sx: require_components_table_style.paginationWrapperStyle,
				children: pagination
			})]
		})
	});
});
Table.displayName = "Table";
const TableHead = (0, react.forwardRef)((props, ref) => {
	const { isSticky } = require_components_table_contexts.useTableContext(require_components_table_constants.TABLE_HEAD_NAME);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: "thead",
		ref,
		...props,
		sx: [require_components_table_style.tableHeadStyle(isSticky), props.sx]
	});
});
TableHead.displayName = require_components_table_constants.TABLE_HEAD_NAME;
const TableBody = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: "tbody",
		ref,
		...props,
		sx: [require_components_table_style.tableBodyStyle, props.sx]
	});
});
TableBody.displayName = "TableBody";
const TableFoot = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: "tfoot",
		ref,
		...props,
		sx: [require_components_table_style.tableFootStyle, props.sx]
	});
});
TableFoot.displayName = "TableFoot";
const TableRow = (0, react.forwardRef)(({ interaction = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_wanteddev_wds_engine.Box, {
		as: "tr",
		ref,
		tabIndex: interaction ? 0 : void 0,
		...props,
		sx: [require_components_table_style.tableRowStyle(interaction), props.sx]
	});
});
TableRow.displayName = "TableRow";
const TableHeadCell = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		as: "th",
		color: "semantic.label.neutral",
		variant: "label2",
		weight: "bold",
		align: "left",
		ref,
		...props,
		sx: [require_components_table_style.tableHeadCellStyle, props.sx]
	});
});
TableHeadCell.displayName = "TableHeadCell";
const TableCell = (0, react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_components_typography_index.Typography, {
		as: "td",
		color: "semantic.label.normal",
		variant: "body1",
		weight: "regular",
		align: "left",
		ref,
		...props,
		sx: [require_components_table_style.tableCellStyle, props.sx]
	});
});
TableCell.displayName = "TableCell";
//#endregion
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCell = TableCell;
exports.TableFoot = TableFoot;
exports.TableHead = TableHead;
exports.TableHeadCell = TableHeadCell;
exports.TableRow = TableRow;

'use client';
import { FlexBox } from "../flex-box/index.mjs";
import { Typography } from "../typography/index.mjs";
import { ScrollArea } from "../scroll-area/index.mjs";
import useResizeObserver from "../../hooks/internal/use-resize-observer.mjs";
import { paginationWrapperStyle, scrollAreaStyle, tableBodyStyle, tableCellStyle, tableFootStyle, tableHeadCellStyle, tableHeadStyle, tableRowStyle, tableStyle } from "./style.mjs";
import { TABLE_HEAD_NAME } from "./constants.mjs";
import { TableProvider, useTableContext } from "./contexts.mjs";
import { Box } from "@wanteddev/wds-engine";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/table/index.tsx
const Table = forwardRef(({ pagination, children, viewportRef: originViewportRef, ...props }, ref) => {
	const [isSticky, setIsSticky] = useState(false);
	const viewportRef = useRef(null);
	const composedViewportRef = useComposedRefs(viewportRef, originViewportRef);
	const handleResize = useCallback(() => {
		const target = viewportRef.current;
		if (!target) return;
		setIsSticky(target.scrollTop > 0);
	}, []);
	useResizeObserver(viewportRef.current?.firstElementChild, handleResize);
	useEffect(() => {
		const target = viewportRef.current;
		if (!target) return;
		const handleOnScroll = (e) => {
			const eventTarget = e.target;
			setIsSticky(eventTarget.scrollTop > 0);
		};
		target.addEventListener("scroll", handleOnScroll);
		return () => target.removeEventListener("scroll", handleOnScroll);
	}, [viewportRef]);
	return /* @__PURE__ */ jsx(FlexBox, {
		flexDirection: "column",
		...props,
		sx: [tableStyle, props.sx],
		children: /* @__PURE__ */ jsxs(TableProvider, {
			isSticky,
			children: [/* @__PURE__ */ jsx(ScrollArea, {
				viewportRef: composedViewportRef,
				sx: scrollAreaStyle,
				zIndex: 1,
				children: /* @__PURE__ */ jsx(Box, {
					as: "table",
					ref,
					children
				})
			}), Boolean(pagination) && /* @__PURE__ */ jsx(FlexBox, {
				flex: "1",
				justifyContent: "center",
				"data-role": "table-pagination",
				sx: paginationWrapperStyle,
				children: pagination
			})]
		})
	});
});
Table.displayName = "Table";
const TableHead = forwardRef((props, ref) => {
	const { isSticky } = useTableContext(TABLE_HEAD_NAME);
	return /* @__PURE__ */ jsx(Box, {
		as: "thead",
		ref,
		...props,
		sx: [tableHeadStyle(isSticky), props.sx]
	});
});
TableHead.displayName = TABLE_HEAD_NAME;
const TableBody = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		as: "tbody",
		ref,
		...props,
		sx: [tableBodyStyle, props.sx]
	});
});
TableBody.displayName = "TableBody";
const TableFoot = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		as: "tfoot",
		ref,
		...props,
		sx: [tableFootStyle, props.sx]
	});
});
TableFoot.displayName = "TableFoot";
const TableRow = forwardRef(({ interaction = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(Box, {
		as: "tr",
		ref,
		tabIndex: interaction ? 0 : void 0,
		...props,
		sx: [tableRowStyle(interaction), props.sx]
	});
});
TableRow.displayName = "TableRow";
const TableHeadCell = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(Typography, {
		as: "th",
		color: "semantic.label.neutral",
		variant: "label2",
		weight: "bold",
		align: "left",
		ref,
		...props,
		sx: [tableHeadCellStyle, props.sx]
	});
});
TableHeadCell.displayName = "TableHeadCell";
const TableCell = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(Typography, {
		as: "td",
		color: "semantic.label.normal",
		variant: "body1",
		weight: "regular",
		align: "left",
		ref,
		...props,
		sx: [tableCellStyle, props.sx]
	});
});
TableCell.displayName = "TableCell";
//#endregion
export { Table, TableBody, TableCell, TableFoot, TableHead, TableHeadCell, TableRow };

import { TypographyProps } from "../typography/types.js";
import { TableBodyProps, TableCellProps, TableFootProps, TableHeadCellProps, TableHeadProps, TableProps, TableRowProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";

//#region src/components/table/index.d.ts
declare const Table: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TableProps, "table">, "ref"> & _$react.RefAttributes<HTMLTableElement>>;
declare const TableHead: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TableHeadProps, "thead">, "ref"> & _$react.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TableBodyProps, "tbody">, "ref"> & _$react.RefAttributes<HTMLTableSectionElement>>;
declare const TableFoot: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TableFootProps, "tfoot">, "ref"> & _$react.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TableRowProps, "tr">, "ref"> & _$react.RefAttributes<HTMLTableRowElement>>;
declare const TableHeadCell: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TypographyProps, "th">, "ref"> & _$react.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TypographyProps, "td">, "ref"> & _$react.RefAttributes<HTMLTableCellElement>>;
//#endregion
export { Table, TableBody, type TableBodyProps, TableCell, type TableCellProps, TableFoot, type TableFootProps, TableHead, TableHeadCell, type TableHeadCellProps, type TableHeadProps, type TableProps, TableRow, type TableRowProps };
import { TypographyProps } from "../typography/types.js";
import { ReactNode, Ref } from "react";
import { WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/table/types.d.ts
type TableProps = WithSxProps<{
  /** The pagination of the table. Pass an `Pagination` component. */pagination?: ReactNode; /** The viewport ref of the table. Pass a `ref` to the `ScrollArea` component. */
  viewportRef?: Ref<HTMLDivElement>;
  children?: ReactNode;
}>;
type TableHeadProps = WithSxProps<{
  children?: ReactNode;
}>;
type TableBodyProps = WithSxProps<{
  children?: ReactNode;
}>;
type TableFootProps = WithSxProps<{
  children?: ReactNode;
}>;
type TableRowProps = WithSxProps<{
  /** Whether to enable the interaction. */interaction?: boolean;
  children?: ReactNode;
}>;
type TableCellProps = TypographyProps;
type TableHeadCellProps = TypographyProps;
//#endregion
export { TableBodyProps, TableCellProps, TableFootProps, TableHeadCellProps, TableHeadProps, TableProps, TableRowProps };
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";
import { CSSProperties, ReactNode } from "react";

//#region src/components/grid-item/types.d.ts
type GridItemDefaultProps = WithSxProps<{
  alignSelf?: CSSProperties['alignSelf'];
  columns?: 1 | 2 | 2.4 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | true;
  offset?: number | 'auto';
  children?: ReactNode;
}>;
type GridItemResponsiveProps = ResponsiveProps<Pick<GridItemDefaultProps, 'alignSelf' | 'columns' | 'offset'>>;
type GridItemProps = Merge<GridItemDefaultProps, GridItemResponsiveProps>;
//#endregion
export { GridItemDefaultProps, GridItemProps, GridItemResponsiveProps };
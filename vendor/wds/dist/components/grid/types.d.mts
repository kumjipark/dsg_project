import { Merge, ResponsiveProps, Spacing, WithSxProps } from "@wanteddev/wds-engine";
import { CSSProperties, ReactNode } from "react";

//#region src/components/grid/types.d.ts
type GridSpacing = keyof Spacing;
type GridDefaultProps = WithSxProps<{
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  spacing?: GridSpacing;
  rowSpacing?: GridSpacing;
  columnSpacing?: GridSpacing; /** The content of the grid. Use `GridItem` components as the children. */
  children?: ReactNode;
}>;
type GridResponsiveProps = ResponsiveProps<Pick<GridDefaultProps, 'justifyContent' | 'alignItems' | 'spacing' | 'rowSpacing' | 'columnSpacing'>>;
type GridProps = Merge<GridDefaultProps, GridResponsiveProps>;
//#endregion
export { GridDefaultProps, GridProps, GridResponsiveProps, GridSpacing };
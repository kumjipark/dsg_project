import { Merge, ResponsiveProps, ThemeColorsToken, WithSxProps } from "@wanteddev/wds-engine";
import { CSSProperties } from "react";

//#region src/components/divider/types.d.ts
type DividerDefaultProps = WithSxProps<{
  /** Whether the divider is vertical. */vertical?: boolean; /** The color of the divider. */
  color?: ThemeColorsToken; /** The size of the divider. */
  size?: CSSProperties['width']; /** The thickness of the divider. */
  thickness?: CSSProperties['width'];
}>;
type DividerResponsiveProps = ResponsiveProps<Pick<DividerDefaultProps, 'size' | 'thickness' | 'vertical'>>;
type DividerProps = Merge<DividerDefaultProps, DividerResponsiveProps>;
//#endregion
export { DividerDefaultProps, DividerProps, DividerResponsiveProps };
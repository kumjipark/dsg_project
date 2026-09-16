import { Merge, ResponsiveProps, ThemeColorsToken, ThemeOpacityToken, WithSxProps } from "@wanteddev/wds-engine";
import { CSSProperties } from "react";

//#region src/components/skeleton/types.d.ts
type SkeletonDefaultProps = WithSxProps<{
  /** The variant of the skeleton. */variant?: 'text' | 'circle' | 'rectangle'; /** The width of the skeleton. */
  width?: CSSProperties['width']; /** The height of the skeleton. */
  height?: CSSProperties['height']; /** The radius of the skeleton. */
  radius?: CSSProperties['borderRadius']; /** The color of the skeleton. */
  color?: ThemeColorsToken; /** The opacity of the skeleton. */
  opacity?: ThemeOpacityToken; /** The align of the skeleton. */
  align?: 'left' | 'center' | 'right'; /** Whether the animation is enabled. */
  animation?: boolean;
}>;
type SkeletonResponsiveProps = ResponsiveProps<Pick<SkeletonDefaultProps, 'width' | 'height'>>;
type SkeletonProps = Merge<SkeletonDefaultProps, SkeletonResponsiveProps>;
//#endregion
export { SkeletonProps };
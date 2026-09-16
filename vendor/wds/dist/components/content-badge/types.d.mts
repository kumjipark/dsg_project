import { Merge, ResponsiveProps, ThemeColorsToken, WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";

//#region src/components/content-badge/types.d.ts
type ContentBadgeDefaultProps = WithSxProps<{
  /** Content displayed in the leading area. */leadingContent?: ReactNode; /** Content displayed in the trailing area. */
  trailingContent?: ReactNode; /** The size of the content badge. */
  size?: 'xsmall' | 'small' | 'medium'; /** The variant of the content badge. */
  variant?: 'solid' | 'outlined'; /** The color of the content badge. */
  color?: 'neutral' | 'accent'; /** The color of the content badge when `color=accent`. */
  accentColor?: ThemeColorsToken; /** The color of the content badge when `color=neutral`. */
  neutralColor?: ThemeColorsToken; /** The content of the content badge. */
  children?: ReactNode;
}>;
type ContentBadgeResponsiveProps = ResponsiveProps<Pick<ContentBadgeDefaultProps, 'size'>>;
type ContentBadgeProps = Merge<ContentBadgeDefaultProps, ContentBadgeResponsiveProps>;
//#endregion
export { ContentBadgeDefaultProps, ContentBadgeProps, ContentBadgeResponsiveProps };
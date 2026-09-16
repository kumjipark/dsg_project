import { ReactNode } from "react";
import { Merge, ResponsiveProps, ThemeColorsToken, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/icon-button/types.d.ts
type IconButtonVariant = 'normal' | 'background' | 'outlined' | 'solid';
type IconButtonDefaultProps = WithSxProps<{
  variant?: IconButtonVariant; /** Whether the icon button is disabled. */
  disabled?: boolean; /** Whether to disable the interaction. */
  disableInteraction?: boolean; /** The size of the icon button. */
  size?: number | 'medium' | 'small'; /** The color of the icon. */
  color?: ThemeColorsToken; /** The color of the icon button when the interaction is triggered. */
  interactionColor?: ThemeColorsToken;
  /**
   * When `variant` is `background`, if `alternative` is true, the icon button uses a dark-colored background.
   */
  alternative?: boolean; /** The content of the icon button. Use icon component as the children. */
  children?: ReactNode;
}>;
type IconButtonResponsiveProps = ResponsiveProps<Pick<IconButtonDefaultProps, 'size'>>;
type IconButtonProps = Merge<IconButtonDefaultProps, IconButtonResponsiveProps>;
//#endregion
export { IconButtonDefaultProps, IconButtonProps, IconButtonResponsiveProps, IconButtonVariant };
import { ReactNode } from "react";
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/button/types.d.ts
type ButtonVariant = 'solid' | 'outlined';
type ButtonColor = 'primary' | 'assistive';
type ButtonDefaultProps = WithSxProps<{
  size?: 'small' | 'medium' | 'large'; /** Whether the button is disabled. */
  disabled?: boolean; /** Whether to disable the interaction. */
  disableInteraction?: boolean; /** The variant of the button. */
  variant?: ButtonVariant; /** The color of the button. */
  color?: ButtonColor; /** Whether the button is full width. */
  fullWidth?: boolean; /** The content displayed in the leading area. */
  leadingContent?: ReactNode; /** The content displayed in the trailing area. */
  trailingContent?: ReactNode; /** Whether to show only the icon. If `iconOnly` is enabled, you must provide an icon component as the `children`. */
  iconOnly?: boolean; /** The content of the button. */
  children?: ReactNode; /** Whether the button is loading. */
  loading?: boolean; /** When `loading=true`, the event blocking action is disabled. */
  disableLoadingPreventEvents?: boolean;
}>;
type ButtonResponsiveProps = ResponsiveProps<Pick<ButtonDefaultProps, 'fullWidth' | 'size'>>;
type ButtonProps = Merge<ButtonDefaultProps, ButtonResponsiveProps>;
//#endregion
export { ButtonColor, ButtonDefaultProps, ButtonProps, ButtonResponsiveProps, ButtonVariant };
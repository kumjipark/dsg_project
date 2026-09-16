import { ButtonHTMLAttributes, CSSProperties, ReactNode, Ref } from "react";
import { Merge, ResponsiveProps, ThemeColorsToken, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/text-field/types.d.ts
type TextFieldDefaultProps = WithSxProps<{
  /** Whether the text field is invalid. */invalid?: boolean; /** Whether the text field is positive. */
  positive?: boolean; /** The leading content of the text field. Pass an element wrapped with `TextFieldContent`. */
  leadingContent?: ReactNode; /** The trailing content of the text field. Pass an element wrapped with `TextFieldContent`. */
  trailingContent?: ReactNode; /** The trailing button of the text field. Pass an `TextFieldButton` component. */
  trailingButton?: ReactNode; /** Whether the text field is disabled. */
  disabled?: boolean; /** The width of the text field. */
  width?: CSSProperties['width']; /** The height of the text field. */
  height?: CSSProperties['height']; /** Callback function when the reset button is clicked. */
  onReset?: (prevValue: string) => void; /** The children of the text field. */
  children?: ReactNode;
  wrapperRef?: Ref<HTMLDivElement>;
}>;
type TextFieldResponsiveProps = ResponsiveProps<Pick<TextFieldDefaultProps, 'width' | 'height'>>;
type TextFieldProps = Merge<TextFieldDefaultProps, TextFieldResponsiveProps>;
type TextFieldContentProps = WithSxProps<{
  variant?: 'custom' | 'text' | 'timer' | 'badge' | 'icon' | 'icon-button' | 'text-button';
  color?: ThemeColorsToken;
  children?: ReactNode;
}>;
type TextFieldButtonProps = WithSxProps<{
  variant?: 'normal' | 'assistive';
  loading?: boolean;
  /**
   * When `loading=true`, the event blocking action is disabled.
   */
  disableLoadingPreventEvents?: boolean;
  disabled?: boolean;
  leadingContent?: ReactNode;
  trailingContent?: ReactNode;
  children?: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}>;
//#endregion
export { TextFieldButtonProps, TextFieldContentProps, TextFieldDefaultProps, TextFieldProps, TextFieldResponsiveProps };
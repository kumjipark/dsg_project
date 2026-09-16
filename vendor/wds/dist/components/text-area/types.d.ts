import { CSSProperties, ReactNode } from "react";
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/text-area/types.d.ts
type TextAreaDefaultProps = WithSxProps<{
  /** Whether the text area is invalid. */invalid?: boolean; /** The maximum length of the text area. */
  maxLength?: number; /** The leading content of the text area. Pass an element wrapped with `TextAreaContent`. */
  leadingContent?: ReactNode; /** The trailing content of the text area. Pass an element wrapped with `TextAreaContent`. */
  trailingContent?: ReactNode; /** Whether the text area is disabled. */
  disabled?: boolean; /** The width of the text area. */
  width?: CSSProperties['width']; /** The maximum rows of the text area. */
  maxRows?: number; /** The minimum rows of the text area. */
  minRows?: number; /** The value of the text area. */
  value?: string;
}>;
type TextAreaResponsiveProps = ResponsiveProps<Pick<TextAreaDefaultProps, 'width'>>;
type TextAreaProps = Merge<TextAreaDefaultProps, TextAreaResponsiveProps>;
type TextAreaContentProps = WithSxProps<{
  variant?: 'custom' | 'button' | 'characterCounter' | 'badge' | 'chip' | 'icon' | 'icon-button';
  children?: ReactNode;
}>;
//#endregion
export { TextAreaContentProps, TextAreaDefaultProps, TextAreaProps, TextAreaResponsiveProps };
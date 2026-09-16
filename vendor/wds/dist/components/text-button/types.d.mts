import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";

//#region src/components/text-button/types.d.ts
type TextButtonColor = 'primary' | 'assistive';
type TextButtonDefaultProps = WithSxProps<{
  color?: 'primary' | 'assistive'; /** Whether the text button is disabled. */
  disabled?: boolean; /** The size of the text button. */
  size?: 'small' | 'medium'; /** Whether to disable the interaction. */
  disableInteraction?: boolean; /** The leading content of the text button. */
  leadingContent?: ReactNode; /** The trailing content of the text button. */
  trailingContent?: ReactNode; /** The children of the text button. */
  children?: ReactNode; /** Whether the text button is loading. */
  loading?: boolean; /** When `loading=true`, the event blocking action is disabled. */
  disableLoadingPreventEvents?: boolean;
}>;
type TextButtonResponsiveProps = ResponsiveProps<Pick<TextButtonDefaultProps, 'size'>>;
type TextButtonProps = Merge<TextButtonDefaultProps, TextButtonResponsiveProps>;
//#endregion
export { TextButtonColor, TextButtonDefaultProps, TextButtonProps, TextButtonResponsiveProps };
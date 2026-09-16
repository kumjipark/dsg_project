import { ReactNode } from "react";
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/top-navigation/types.d.ts
type TopNavigationProps = WithSxProps<Merge<{
  variant?: 'normal' | 'floating' | 'display' | 'search'; /** The trailing content of the top navigation. Pass an element wrapped with `TopNavigationButton`. */
  trailingContent?: ReactNode; /** The leading content of the top navigation. Pass an element wrapped with `TopNavigationButton`. */
  leadingContent?: ReactNode; /** Area attached below the navigation. */
  toolbar?: ReactNode; /** Controls the background color or gradient effect. */
  background?: boolean; /** The id to be assigned to the navigation title. */
  titleId?: string;
  children?: ReactNode;
}, ResponsiveProps<{}>>>;
type TopNavigationButtonProps = WithSxProps<{
  variant?: 'text' | 'icon';
  color?: 'primary' | 'assistive';
  disabled?: boolean;
  size?: number | 'medium' | 'small';
  children?: ReactNode;
}>;
//#endregion
export { TopNavigationButtonProps, TopNavigationProps };
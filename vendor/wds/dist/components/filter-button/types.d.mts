import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";

//#region src/components/filter-button/types.d.ts
type FilterButtonDefaultProps = WithSxProps<{
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outlined'; /** Whether the filter button is active. */
  active?: boolean; /** Whether the filter button is expanded. */
  expanded?: boolean; /** Whether the filter button is disabled. */
  disabled?: boolean; /** Whether to disable the interaction. */
  disableInteraction?: boolean; /** The active label of the filter button when `active=true`. */
  activeLabel?: ReactNode; /** The content of the filter button. */
  children?: ReactNode;
}>;
type FilterButtonResponsiveProps = ResponsiveProps<Pick<FilterButtonDefaultProps, 'size'>>;
type FilterButtonProps = Merge<FilterButtonDefaultProps, FilterButtonResponsiveProps>;
//#endregion
export { FilterButtonDefaultProps, FilterButtonProps, FilterButtonResponsiveProps };
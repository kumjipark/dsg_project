import { ReactNode } from "react";
import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/chip/types.d.ts
type ChipDefaultProps = WithSxProps<{
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outlined'; /** Whether the chip is active. */
  active?: boolean; /** Whether the chip is disabled. */
  disabled?: boolean; /** Whether to disable the interaction. */
  disableInteraction?: boolean; /** Content displayed in the leading area. */
  leadingContent?: ReactNode; /** Content displayed in the trailing area. */
  trailingContent?: ReactNode; /** The content of the chip. */
  children?: ReactNode;
}>;
type ChipResponsiveProps = ResponsiveProps<Pick<ChipDefaultProps, 'size'>>;
type ChipProps = Merge<ChipDefaultProps, ChipResponsiveProps>;
//#endregion
export { ChipDefaultProps, ChipProps, ChipResponsiveProps };
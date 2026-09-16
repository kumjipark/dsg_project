import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";

//#region src/components/progress-step-indicator/types.d.ts
type ProgressStepIndicatorDefaultProps = WithSxProps<{
  /** The size of the progress step indicator. */size?: 'small' | 'medium'; /** Whether to show the divider. */
  divider?: boolean; /** The value of the progress step indicator. */
  value?: string; /** The default value of the progress step indicator. */
  defaultValue?: string; /** Callback function when the value changes. */
  onValueChange?: (value: string) => void;
  children?: ReactNode;
}>;
type ProgressStepIndicatorResponsiveProps = ResponsiveProps<Pick<ProgressStepIndicatorDefaultProps, 'size' | 'divider'>>;
/**
 * @deprecated
 */
type ProgressStepIndicatorProps = Merge<ProgressStepIndicatorDefaultProps, ProgressStepIndicatorResponsiveProps>;
/**
 * @deprecated
 */
type ProgressStepIndicatorItemProps = WithSxProps<{
  value: string;
  children?: ReactNode;
}>;
//#endregion
export { ProgressStepIndicatorItemProps, ProgressStepIndicatorProps };
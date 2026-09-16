import { WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";

//#region src/components/stepper/types.d.ts
type StepperProps = WithSxProps<{
  /** The value of the stepper. */value?: string; /** The default value of the stepper. */
  defaultValue?: string; /** Callback function when the value changes. */
  onValueChange?: (value: string) => void;
  children?: ReactNode;
}>;
type StepperItemProps = WithSxProps<{
  value: string;
  label?: ReactNode;
  completedLabel?: ReactNode;
  children?: ReactNode;
}>;
//#endregion
export { StepperItemProps, StepperProps };
import { StepperItemProps } from "./types.js";
import * as _$react from "react";

//#region src/components/stepper/contexts.d.ts
type StepperContextValue = {
  value: string;
  onValueChange: (value: string) => void;
  steps: Array<StepperItemProps>;
  getStepIndex: (value: string) => number;
  getActiveStepIndex: () => number;
};
declare const StepperProvider: _$react.FC<StepperContextValue & {
    children: React.ReactNode;
  }>, useStepperContext: (consumerName: string) => StepperContextValue;
//#endregion
export { StepperProvider, useStepperContext };
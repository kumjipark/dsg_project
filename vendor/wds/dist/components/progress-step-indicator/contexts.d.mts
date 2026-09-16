import { ProgressStepIndicatorItemProps } from "./types.mjs";
import * as _$react from "react";

//#region src/components/progress-step-indicator/contexts.d.ts
type ProgressStepIndicatorContextValue = {
  value: string;
  onValueChange: (value: string) => void;
  steps: Array<ProgressStepIndicatorItemProps>;
  getStepIndex: (value: string) => number;
  getActiveStepIndex: () => number;
};
declare const ProgressStepIndicatorProvider: _$react.FC<ProgressStepIndicatorContextValue & {
    children: React.ReactNode;
  }>, useProgressStepIndicatorContext: (consumerName: string) => ProgressStepIndicatorContextValue;
//#endregion
export { ProgressStepIndicatorProvider, useProgressStepIndicatorContext };
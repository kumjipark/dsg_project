import { ProgressTrackerItemProps, ProgressTrackerProps } from "./types.mjs";
import * as _$react from "react";

//#region src/components/progress-tracker/contexts.d.ts
type ProgressTrackerContextValue = {
  value: string;
  onValueChange: (value: string) => void;
  steps: Array<ProgressTrackerItemProps>;
  getStepIndex: (value: string) => number;
  getActiveStepIndex: () => number;
  getTotalLength: () => number;
  direction: Exclude<ProgressTrackerProps['direction'], undefined>;
};
declare const ProgressTrackerProvider: _$react.FC<ProgressTrackerContextValue & {
    children: React.ReactNode;
  }>, useProgressTrackerContext: (consumerName: string) => ProgressTrackerContextValue;
//#endregion
export { ProgressTrackerProvider, useProgressTrackerContext };
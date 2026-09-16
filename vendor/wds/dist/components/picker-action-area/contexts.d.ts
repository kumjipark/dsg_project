import { DateType } from "../date-calendar/types.js";
import { DateRangeType } from "../date-range-calendar/types.js";
import * as _$react from "react";
import { RefObject } from "react";

//#region src/components/picker-action-area/contexts.d.ts
type PickerActionAreaContextValue = {
  timezone?: string;
  value: DateType | DateRangeType;
  initialValue: RefObject<DateType | DateRangeType>;
  onChangeComplete: (value: DateType | DateRangeType) => void;
  mode?: 'single' | 'range';
};
declare const PickerActionAreaProvider: _$react.FC<PickerActionAreaContextValue & {
    children: React.ReactNode;
  }>, usePickerActionAreaContext: (consumerName: string) => PickerActionAreaContextValue;
//#endregion
export { PickerActionAreaProvider, usePickerActionAreaContext };
import { DateType } from "../date-calendar/types.mjs";
import { HourType } from "./types.mjs";
import * as _$react from "react";
import { Dayjs } from "dayjs";

//#region src/components/time-view/contexts.d.ts
type TimeViewContextType = {
  value: DateType;
  now: Dayjs;
  hourType: HourType;
  timezone?: string;
  disabled: boolean;
  readOnly: boolean;
  onChange: (value: DateType) => void;
  onChangeComplete?: (value: DateType) => void;
};
declare const TimeViewContextProvider: _$react.FC<TimeViewContextType & {
    children: React.ReactNode;
  }>, useTimeViewContext: (consumerName: string) => TimeViewContextType;
//#endregion
export { TimeViewContextProvider, TimeViewContextType, useTimeViewContext };
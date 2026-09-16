import { DateCalendarProps, DateType } from "./types.js";
import * as _$react from "react";
import { Dispatch, RefObject, SetStateAction } from "react";
import { Dayjs } from "dayjs";

//#region src/components/date-calendar/contexts.d.ts
type DateCalendarContextType = {
  defaultSelectedDate: Date;
  setDefaultSelectedDate: Dispatch<SetStateAction<Date>>;
  now: Dayjs;
  min: DateType;
  max: DateType;
  locale?: string;
  value: DateType;
  timezone?: string;
  handleNextView: (newView: DateCalendarProps['view'], newValue: DateCalendarProps['value']) => void;
  containerRef: RefObject<HTMLDivElement | null>;
};
declare const DateCalendarContextProvider: _$react.FC<DateCalendarContextType & {
    children: React.ReactNode;
  }>, useDateCalendarContext: (consumerName: string) => DateCalendarContextType;
//#endregion
export { DateCalendarContextProvider, DateCalendarContextType, useDateCalendarContext };
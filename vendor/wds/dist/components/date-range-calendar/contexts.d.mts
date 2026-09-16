import { DateType, ViewType } from "../date-calendar/types.mjs";
import { DateRangeType } from "./types.mjs";
import * as _$react from "react";
import { Dispatch, RefObject, SetStateAction } from "react";
import { Dayjs } from "dayjs";

//#region src/components/date-range-calendar/contexts.d.ts
type DateRangeCalendarContextType = {
  rangeValue: DateRangeType;
  hoveredDate: Date | null;
  setHoveredDate: Dispatch<SetStateAction<Date | null>>;
  activePosition: 'start' | 'end';
  handleDateSelect: (date: Date) => void;
  defaultSelectedDate: Date;
  setDefaultSelectedDate: Dispatch<SetStateAction<Date>>;
  now: Dayjs;
  min: DateType;
  max: DateType;
  locale?: string;
  timezone?: string;
  containerRef: RefObject<HTMLDivElement | null>;
  view: ViewType;
  calendars: number;
  disabled?: boolean;
  readOnly?: boolean;
};
declare const DateRangeCalendarContextProvider: _$react.FC<DateRangeCalendarContextType & {
    children: React.ReactNode;
  }>, useDateRangeCalendarContext: (consumerName: string) => DateRangeCalendarContextType;
//#endregion
export { DateRangeCalendarContextProvider, DateRangeCalendarContextType, useDateRangeCalendarContext };
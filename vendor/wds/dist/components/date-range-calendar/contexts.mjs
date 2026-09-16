'use client';
import { createContext } from "@radix-ui/react-context";
//#region src/components/date-range-calendar/contexts.ts
const [DateRangeCalendarContextProvider, useDateRangeCalendarContext] = createContext("DateRangeCalendar");
//#endregion
export { DateRangeCalendarContextProvider, useDateRangeCalendarContext };

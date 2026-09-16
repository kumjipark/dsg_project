'use client';
import { createContext } from "@radix-ui/react-context";
//#region src/components/date-calendar/contexts.ts
const [DateCalendarContextProvider, useDateCalendarContext] = createContext("DateCalendar");
//#endregion
export { DateCalendarContextProvider, useDateCalendarContext };

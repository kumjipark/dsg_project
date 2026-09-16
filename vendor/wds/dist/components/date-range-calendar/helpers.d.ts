import { DateType, ViewType } from "../date-calendar/types.js";
import { DateRangeType } from "./types.js";
import { Dayjs } from "dayjs";

//#region src/components/date-range-calendar/helpers.d.ts
declare const isSameDateForView: (date1: DateType, date2: DateType, view: ViewType, timezone?: string) => boolean;
declare const isDateInRangeForView: (date: DateType, start: DateType, end: DateType, view: ViewType, timezone?: string) => boolean;
declare const getDisplayRange: (rangeValue: DateRangeType, hoveredDate: Date | null, activePosition: "start" | "end", timezone?: string) => DateRangeType;
/**
 * Focuses a date element in the range calendar container.
 * Uses string-based data attributes (ISO format for day/month, number string for year).
 */
declare const focusRangeDate: (type: ViewType, value: string, containerRef: {
  current: HTMLDivElement | null;
}) => void | undefined;
declare const scrollIntoViewRangeDate: (type: ViewType, value: string, containerRef: {
  current: HTMLDivElement | null;
}) => void;
declare const isDateInVisiblePanels: (date: Dayjs, baseDate: Date, calendars: number, timezone?: string) => boolean;
//#endregion
export { focusRangeDate, getDisplayRange, isDateInRangeForView, isDateInVisiblePanels, isSameDateForView, scrollIntoViewRangeDate };
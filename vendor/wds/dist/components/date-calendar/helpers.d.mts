import { DateType, ViewType } from "./types.mjs";
import { RefObject } from "react";
import dayjs, { Dayjs } from "dayjs";

//#region src/components/date-calendar/helpers.d.ts
type DefaultDateHelperParams = {
  max: DateType;
  min: DateType;
  value: DateType;
  timezone: string | undefined;
};
declare const isDateTypeEmpty: (date: DateType) => date is undefined | null | "";
declare const isValidDate: (date: DateType) => date is Date | string;
declare const isDisabledDate: ({
  min,
  max,
  value,
  timezone
}: DefaultDateHelperParams) => boolean;
declare const dateTypeToDateObject: (v: DateType | Dayjs, timezone: string | undefined) => Date;
declare const dayjsTimezone: (v: Dayjs, timezone: string | undefined) => dayjs.Dayjs;
declare const findClosestEnableDate: ({
  min,
  max,
  value,
  timezone
}: DefaultDateHelperParams) => Date;
declare const getWeekdays: (locale?: string) => {
  narrow: string;
  long: string;
  short: string;
}[];
declare const getMonths: (locale?: string) => {
  '2-digit': string;
  long: string;
  narrow: string;
  short: string;
  numeric: string;
}[];
type GetMeridiemResult = ReturnType<typeof getMeridiem>;
declare const getMeridiem: (locale?: string) => {
  lower: string;
  upper: string;
}[];
declare const focusDate: (type: ViewType, value: number, containerRef: RefObject<HTMLDivElement | null>) => void | undefined;
declare const scrollIntoViewDate: (type: Omit<ViewType, "day">, value: number, containerRef: RefObject<HTMLDivElement | null>) => void;
//#endregion
export { GetMeridiemResult, dateTypeToDateObject, dayjsTimezone, findClosestEnableDate, focusDate, getMeridiem, getMonths, getWeekdays, isDateTypeEmpty, isDisabledDate, isValidDate, scrollIntoViewDate };
import { DateType } from "../date-calendar/types.js";
import { HourType, TimeViewType } from "./types.js";
import { RefObject } from "react";

//#region src/components/time-view/helpers.d.ts
type GetTimeUnitsResult = ReturnType<typeof getHours>;
type GetHoursParams = {
  step?: number;
  hourType?: HourType;
  locale?: string;
};
declare const getHours: ({
  step,
  hourType,
  locale
}: GetHoursParams) => {
  value: number;
  text: string;
  numeric: string;
}[];
declare const getMinutes: () => {
  value: number;
  text: string;
}[];
declare const getSeconds: () => {
  value: number;
  text: string;
}[];
declare const scrollToTime: (view: TimeViewType, value: string, containerRef: RefObject<HTMLDivElement | null>) => void;
declare const isDisabledTime: ({
  minTime,
  maxTime,
  value,
  timezone
}: {
  minTime?: DateType;
  maxTime?: DateType;
  value: DateType;
  timezone?: string;
}) => boolean;
declare const findClosestEnableTime: ({
  minTime,
  maxTime,
  value,
  timezone
}: {
  minTime?: DateType;
  maxTime?: DateType;
  value: DateType;
  timezone?: string;
}) => string | Date | null | undefined;
//#endregion
export { GetTimeUnitsResult, findClosestEnableTime, getHours, getMinutes, getSeconds, isDisabledTime, scrollToTime };
import { DateType } from "../date-calendar/types.js";
import { HourType, TimeViewType } from "./types.js";

//#region src/components/time-view/hooks.d.ts
type Props = {
  view: TimeViewType;
  locale?: string;
  value: DateType;
  timezone?: string;
  hourType: HourType;
  minTime?: DateType;
  maxTime?: DateType;
};
declare const useTimeList: ({
  view,
  value,
  timezone,
  locale,
  hourType,
  minTime,
  maxTime
}: Props) => {
  hourType: HourType;
  currentTimeValue: string | undefined;
  timeList: {
    value: number;
    text: string;
  }[] | ({
    disabled: boolean;
    value: number;
    text: string;
    numeric: string;
  } | undefined)[];
};
//#endregion
export { useTimeList };
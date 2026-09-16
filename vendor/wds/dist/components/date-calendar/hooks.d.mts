import { DateType } from "./types.mjs";
import * as _$react from "react";
import dayjs from "dayjs";

//#region src/components/date-calendar/hooks.d.ts
declare const useDefaultSelectedDate: (value: DateType, min: DateType, max: DateType, timezone?: string) => {
  defaultSelectedDate: Date;
  setDefaultSelectedDate: _$react.Dispatch<_$react.SetStateAction<Date>>;
  now: dayjs.Dayjs;
};
//#endregion
export { useDefaultSelectedDate };
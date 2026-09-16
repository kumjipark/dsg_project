import { DateType } from "../date-calendar/types.mjs";
import { DatePickerFieldProps, DatePickerProps } from "./types.mjs";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/date-picker/index.d.ts
declare const DatePicker: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<DatePickerProps, "input">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { DatePicker, type DatePickerFieldProps, type DatePickerProps, type DateType };
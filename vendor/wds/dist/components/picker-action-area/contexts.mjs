'use client';
import { createContext } from "@radix-ui/react-context";
//#region src/components/picker-action-area/contexts.ts
const [PickerActionAreaProvider, usePickerActionAreaContext] = createContext("DatePicker OR DateRangePicker OR TimePicker");
//#endregion
export { PickerActionAreaProvider, usePickerActionAreaContext };

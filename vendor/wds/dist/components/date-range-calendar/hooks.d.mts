import { DateRangeType } from "./types.mjs";
import * as _$react from "react";

//#region src/components/date-range-calendar/hooks.d.ts
type UseRangeSelectionParams = {
  value?: DateRangeType;
  defaultValue?: DateRangeType;
  onChange?: (value: DateRangeType) => void;
  onChangeComplete?: (value: DateRangeType) => void;
  timezone?: string;
  disabled?: boolean;
  readOnly?: boolean;
};
declare const useRangeSelection: ({
  value,
  defaultValue,
  onChange,
  onChangeComplete,
  timezone,
  disabled,
  readOnly
}: UseRangeSelectionParams) => {
  rangeValue: DateRangeType;
  setRangeValue: (value: _$react.SetStateAction<DateRangeType>) => void;
  activePosition: "end" | "start";
  setActivePosition: _$react.Dispatch<_$react.SetStateAction<"end" | "start">>;
  hoveredDate: Date | null;
  setHoveredDate: _$react.Dispatch<_$react.SetStateAction<Date | null>>;
  handleDateSelect: (date: Date) => void;
};
//#endregion
export { useRangeSelection };
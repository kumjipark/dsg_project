import { DateRangeType } from "../date-range-calendar/types.js";
import { DateFormatSection } from "../date-picker/helpers.js";
import * as _$react from "react";
import { ClipboardEvent, Dispatch, FocusEvent, KeyboardEvent, MouseEvent, SetStateAction } from "react";

//#region src/components/date-range-picker/hooks.d.ts
type RangePosition = 'start' | 'end';
type RangeFocusedSection = DateFormatSection & {
  position: RangePosition;
};
type UseDateRangeFieldParams = {
  value: DateRangeType;
  format: string;
  locale?: string;
  timezone?: string;
  setValue: Dispatch<SetStateAction<DateRangeType>>;
  readOnly?: boolean;
  disabled?: boolean;
};
declare const useDateRangeField: ({
  value,
  format,
  locale,
  timezone,
  setValue,
  readOnly,
  disabled
}: UseDateRangeFieldParams) => {
  inputRef: _$react.RefObject<HTMLInputElement | null>;
  inputValue: string;
  focusedSection: RangeFocusedSection | undefined;
  handlePaste: (e: ClipboardEvent<HTMLInputElement>) => void;
  handleFocus: (e: FocusEvent<HTMLInputElement>) => void;
  handleClick: (e: MouseEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleValueChange: (v: DateRangeType) => void;
  handleInputValueChange: () => void;
};
//#endregion
export { useDateRangeField };
import { DateType } from "../date-calendar/types.mjs";
import { DatePickerProps } from "./types.mjs";
import { DateFormatSection } from "./helpers.mjs";
import * as _$react from "react";
import { ClipboardEvent, Dispatch, FocusEvent, KeyboardEvent, MouseEvent, SetStateAction } from "react";

//#region src/components/date-picker/hooks.d.ts
type UseDateFieldParams = Pick<DatePickerProps, 'value' | 'format' | 'locale' | 'timezone'> & {
  setValue: Dispatch<SetStateAction<DateType>>;
  readOnly: boolean | undefined;
  disabled: boolean | undefined;
};
declare const useDateField: ({
  value,
  format,
  locale,
  timezone,
  setValue,
  readOnly,
  disabled
}: UseDateFieldParams) => {
  inputRef: _$react.RefObject<HTMLInputElement | null>;
  inputValue: string;
  focusedSection: DateFormatSection | undefined;
  sections: DateFormatSection[];
  handlePaste: (e: ClipboardEvent<HTMLInputElement>) => void;
  handleFocus: (e: FocusEvent<HTMLInputElement>) => void;
  handleClick: (e: MouseEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleValueChange: (v: DateType) => void;
  handleInputValueChange: () => void;
};
//#endregion
export { useDateField };
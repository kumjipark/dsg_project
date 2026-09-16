import { TextFieldProps, TextFieldResponsiveProps } from "../text-field/types.js";
import { TextField } from "../text-field/index.js";
import { PopperContent } from "../popper/index.js";
import { FocusScope } from "../focus-scope/index.js";
import { DateRangeCalendarProps } from "../date-range-calendar/types.js";
import { DateRangeCalendar } from "../date-range-calendar/index.js";
import { ComponentProps, ComponentPropsWithoutRef, ElementType, ReactNode, Ref } from "react";
import { BreakPoint, DefaultComponentPropsInternal, Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/date-range-picker/types.d.ts
type DateRangePickerResponsiveProps = ResponsiveProps<NonNullable<TextFieldResponsiveProps[keyof BreakPoint]> & NonNullable<DateRangeCalendarProps[keyof BreakPoint]>>;
type DateRangePickerProps = Merge<Merge<{
  /** Whether the date range picker is open. */open?: boolean; /** Whether the date range picker is open by default. */
  defaultOpen?: boolean; /** Callback function when the open state changes. */
  onOpenChange?: (state: boolean) => void; /** The props for the content. */
  contentProps?: WithSxProps<Merge<ComponentProps<typeof PopperContent>, ComponentPropsWithoutRef<typeof FocusScope>>>; /** The format of the date. */
  format?: string; /** The ref for the input. */
  inputRef?: Ref<HTMLInputElement>;
  /**
   * Custom input component.
   */
  input?: ElementType<DateRangePickerFieldProps>; /** The action area of the date range picker. */
  actionArea?: ReactNode;
  /**
   * When the range is completed, the popover is not closed.
   */
  disableLastDateClickClose?: boolean;
}, Omit<ComponentPropsWithoutRef<typeof DateRangeCalendar>, keyof BreakPoint> & Omit<TextFieldProps, 'wrapperRef' | keyof BreakPoint>>, DateRangePickerResponsiveProps>;
type DateRangePickerFieldProps = Merge<{
  ref?: Ref<HTMLDivElement>;
  inputRef?: Ref<HTMLInputElement>;
}, DefaultComponentPropsInternal<Omit<ComponentPropsWithoutRef<typeof TextField>, 'wrapperRef'>, 'input'>>;
//#endregion
export { DateRangePickerFieldProps, DateRangePickerProps };
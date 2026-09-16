import { DateCalendar } from "../date-calendar/index.mjs";
import { TextFieldProps } from "../text-field/types.mjs";
import { TextField } from "../text-field/index.mjs";
import { PopperContent } from "../popper/index.mjs";
import { FocusScope } from "../focus-scope/index.mjs";
import { DefaultComponentPropsInternal, Merge, WithSxProps } from "@wanteddev/wds-engine";
import { ComponentProps, ComponentPropsWithoutRef, ElementType, ReactNode, Ref } from "react";

//#region src/components/date-picker/types.d.ts
type DatePickerProps = Merge<{
  /** Whether the date picker is open. */open?: boolean; /** Whether the date picker is open by default. */
  defaultOpen?: boolean; /** Callback function when the open state changes. */
  onOpenChange?: (state: boolean) => void; /** The props for the content. */
  contentProps?: WithSxProps<Merge<ComponentProps<typeof PopperContent>, ComponentPropsWithoutRef<typeof FocusScope>>>; /** The format of the date. */
  format?: string; /** The ref for the input. */
  inputRef?: Ref<HTMLInputElement>;
  /**
   * Generally not used; This is used when you want to use a different component
   * (such as Chip) instead of the default input.
   * Pass a component that accepts `DatePickerFieldProps`.
   */
  input?: ElementType<DatePickerFieldProps>; /** The action area of the date picker. Use `PickerActionArea` component as the children. */
  actionArea?: ReactNode;
  /**
   * When the last element is selected, the popover is not closed.
   */
  disableLastUnitClickClose?: boolean;
}, ComponentPropsWithoutRef<typeof DateCalendar> & Omit<TextFieldProps, 'wrapperRef'>>;
type DatePickerFieldProps = Merge<{
  ref?: Ref<HTMLDivElement>;
  inputRef?: Ref<HTMLInputElement>;
}, DefaultComponentPropsInternal<Omit<ComponentPropsWithoutRef<typeof TextField>, 'wrapperRef'>, 'input'>>;
type DatePickerFormat = 'YY' | 'YYYY' | 'M' | 'MM' | 'MMM' | 'MMMM' | 'D' | 'DD' | 'H' | 'HH' | 'h' | 'hh' | 'a' | 'A' | 'm' | 'mm' | 's' | 'ss';
//#endregion
export { DatePickerFieldProps, DatePickerFormat, DatePickerProps };
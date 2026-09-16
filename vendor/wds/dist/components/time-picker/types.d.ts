import { PopperContentProps } from "../popper/types.js";
import { DateType } from "../date-calendar/types.js";
import { TextFieldProps } from "../text-field/types.js";
import { FocusScopeProps } from "../focus-scope/types.js";
import { TimeViewProps } from "../time-view/types.js";
import { ElementType, ReactNode, Ref } from "react";
import { DefaultComponentPropsInternal, Merge, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/time-picker/types.d.ts
type TimePickerProps = Merge<{
  /** Whether the time picker is open. */open?: boolean; /** Whether the time picker is open by default. */
  defaultOpen?: boolean;
  onOpenChange?: (state: boolean) => void; /** The format of the time picker. */
  format?: string; /** The input element of the time picker. Pass a component that accepts `TimePickerFieldProps`. */
  input?: ElementType; /** The input ref of the time picker. */
  inputRef?: Ref<HTMLInputElement>; /** The content props of the time picker. */
  contentProps?: WithSxProps<Merge<PopperContentProps, FocusScopeProps>>; /** Callback function when the value changes. */
  onChange?: (date: DateType) => void; /** The action area of the time picker. Use `PickerActionArea` component as the children. */
  actionArea?: ReactNode; /** When the last element is selected, the popover is not closed. */
  disableLastUnitClickClose?: boolean;
}, TimeViewProps & Omit<TextFieldProps, 'wrapperRef'>>;
type TimePickerFieldProps = Merge<{
  ref?: Ref<HTMLDivElement>;
  inputRef?: Ref<HTMLInputElement>;
}, DefaultComponentPropsInternal<Omit<TextFieldProps, 'wrapperRef'>, 'input'>>;
//#endregion
export { TimePickerFieldProps, TimePickerProps };
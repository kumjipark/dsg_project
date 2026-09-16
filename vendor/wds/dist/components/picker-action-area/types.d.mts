import { TextButtonProps } from "../text-button/types.mjs";
import { ActionAreaProps } from "../action-area/types.mjs";
import { Merge } from "@wanteddev/wds-engine";

//#region src/components/picker-action-area/types.d.ts
type PickerActionAreaProps = ActionAreaProps;
type PickerActionAreaButtonProps = Merge<{
  /** The variant of the picker action area button. */variant?: 'now' | 'cancel' | 'accept' | 'reset';
}, TextButtonProps>;
//#endregion
export { PickerActionAreaButtonProps, PickerActionAreaProps };
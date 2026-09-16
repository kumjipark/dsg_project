import { RadioProps } from "../radio/types.mjs";
import { Radio } from "../radio/index.mjs";
import { RadioGroupContextType } from "./contexts.mjs";
import { Merge, WithSxProps } from "@wanteddev/wds-engine";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { RovingFocusGroupProps } from "@radix-ui/react-roving-focus";

//#region src/components/radio-group/types.d.ts
type RadioGroupProps = WithSxProps<{
  /** The name of the radio group. */name?: RadioGroupContextType['name']; /** Whether the radio group is required. */
  required?: RadioProps['required']; /** Whether the radio group is disabled. */
  disabled?: RadioProps['disabled']; /** The direction of the radio group. */
  dir?: RovingFocusGroupProps['dir']; /** The orientation of the radio group. */
  orientation?: RovingFocusGroupProps['orientation']; /** Whether to focus loop through the radio group. */
  loop?: RovingFocusGroupProps['loop']; /** The default value of the radio group. */
  defaultValue?: string; /** The value of the radio group. */
  value?: RadioGroupContextType['value']; /** Callback function when the value changes. */
  onValueChange?: RadioGroupContextType['onValueChange'];
  children?: ReactNode;
}>;
type RadioGroupItemProps = Merge<{
  value: string;
}, Omit<ComponentPropsWithoutRef<typeof Radio>, 'onCheck'>>;
//#endregion
export { RadioGroupItemProps, RadioGroupProps };
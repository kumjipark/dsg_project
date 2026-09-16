import { WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/virtual-input/types.d.ts
type VirtualCheckboxInputProps = WithSxProps<{
  checked?: boolean;
  bubbles?: boolean;
}>;
type VirtualValueInputProps = WithSxProps<{
  value?: string | number;
  bubbles?: boolean;
}>;
//#endregion
export { VirtualCheckboxInputProps, VirtualValueInputProps };
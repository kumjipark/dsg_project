import { CheckboxProps } from "../checkbox/types.mjs";
import { DefaultComponentProps } from "@wanteddev/wds-engine";

//#region src/components/round-checkbox/types.d.ts
type RoundCheckboxProps = Omit<DefaultComponentProps<CheckboxProps, 'button'>, 'onChange' | 'value'>;
//#endregion
export { RoundCheckboxProps };
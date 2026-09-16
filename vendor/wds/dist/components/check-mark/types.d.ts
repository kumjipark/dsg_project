import { CheckboxProps } from "../checkbox/types.js";
import { DefaultComponentProps } from "@wanteddev/wds-engine";

//#region src/components/check-mark/types.d.ts
type CheckMarkProps = Omit<DefaultComponentProps<CheckboxProps, 'button'>, 'onChange' | 'value' | 'indeterminate' | 'indeterminateIcon'>;
//#endregion
export { CheckMarkProps };
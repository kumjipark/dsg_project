import { CheckboxProps } from "./types.mjs";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/checkbox/index.d.ts
declare const Checkbox: _$react.ForwardRefExoticComponent<Omit<Omit<DefaultComponentPropsInternal<CheckboxProps, "button">, "value" | "onChange">, "ref"> & _$react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { Checkbox, type CheckboxProps };
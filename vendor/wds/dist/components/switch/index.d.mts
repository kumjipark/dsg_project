import { SwitchProps } from "./types.mjs";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/switch/index.d.ts
declare const Switch: _$react.ForwardRefExoticComponent<Omit<Omit<DefaultComponentPropsInternal<SwitchProps, "button">, "value" | "onChange">, "ref"> & _$react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { Switch, type SwitchProps };
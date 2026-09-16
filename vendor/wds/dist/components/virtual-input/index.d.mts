import { VirtualCheckboxInputProps, VirtualValueInputProps } from "./types.mjs";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/virtual-input/index.d.ts
declare const VirtualCheckboxInput: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<VirtualCheckboxInputProps, "input">, "ref"> & _$react.RefAttributes<HTMLInputElement>>;
declare const VirtualValueInput: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<VirtualValueInputProps, "input">, "ref"> & _$react.RefAttributes<HTMLInputElement>>;
//#endregion
export { VirtualCheckboxInput, type VirtualCheckboxInputProps, VirtualValueInput, type VirtualValueInputProps };
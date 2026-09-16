import { RadioProps } from "../radio/types.js";
import { RadioGroupItemProps, RadioGroupProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";

//#region src/components/radio-group/index.d.ts
declare const RadioGroup: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<RadioGroupProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: _$react.ForwardRefExoticComponent<{
  value: string;
} & Omit<Omit<Omit<Omit<Omit<DefaultComponentPropsInternal<RadioProps, "button">, "onChange">, "ref"> & _$react.RefAttributes<HTMLButtonElement>, "ref">, "onCheck">, "value"> & _$react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { RadioGroup, RadioGroupItem, type RadioGroupItemProps, type RadioGroupProps };
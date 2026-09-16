import { StepperItemProps, StepperProps } from "./types.mjs";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/stepper/index.d.ts
declare const Stepper: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<StepperProps, "ol">, "ref"> & _$react.RefAttributes<HTMLOListElement>>;
declare const StepperItem: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<StepperItemProps, "li">, "ref"> & _$react.RefAttributes<HTMLLIElement>>;
//#endregion
export { Stepper, StepperItem, type StepperItemProps, type StepperProps };
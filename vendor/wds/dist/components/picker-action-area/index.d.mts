import { ActionAreaProps } from "../action-area/types.mjs";
import { PickerActionAreaButtonProps, PickerActionAreaProps } from "./types.mjs";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/picker-action-area/index.d.ts
declare const PickerActionArea: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ActionAreaProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const PickerActionAreaButton: PolymorphicComponentInternal<PickerActionAreaButtonProps, "button">;
//#endregion
export { PickerActionArea, PickerActionAreaButton, type PickerActionAreaButtonProps, type PickerActionAreaProps };
import { ActionAreaProps } from "../action-area/types.js";
import { PickerActionAreaButtonProps, PickerActionAreaProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/picker-action-area/index.d.ts
declare const PickerActionArea: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ActionAreaProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const PickerActionAreaButton: PolymorphicComponentInternal<PickerActionAreaButtonProps, "button">;
//#endregion
export { PickerActionArea, PickerActionAreaButton, type PickerActionAreaButtonProps, type PickerActionAreaProps };
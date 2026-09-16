import { ActionAreaButtonProps, ActionAreaProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/action-area/index.d.ts
declare const ActionArea: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ActionAreaProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const ActionAreaButton: PolymorphicComponentInternal<ActionAreaButtonProps, "button">;
//#endregion
export { ActionArea, ActionAreaButton, type ActionAreaButtonProps, type ActionAreaProps };
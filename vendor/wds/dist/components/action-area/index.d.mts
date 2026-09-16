import { ActionAreaButtonProps, ActionAreaProps } from "./types.mjs";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/action-area/index.d.ts
declare const ActionArea: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ActionAreaProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const ActionAreaButton: PolymorphicComponentInternal<ActionAreaButtonProps, "button">;
//#endregion
export { ActionArea, ActionAreaButton, type ActionAreaButtonProps, type ActionAreaProps };
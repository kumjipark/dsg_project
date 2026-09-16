import { PortalProps } from "./types.mjs";
import { DefaultComponentPropsInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/portal/index.d.ts
declare const Portal: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<PortalProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Portal, type PortalProps };
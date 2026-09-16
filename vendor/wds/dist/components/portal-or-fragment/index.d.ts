import { PortalOrFragmentProps } from "./types.js";
import * as _$react from "react";

//#region src/components/portal-or-fragment/index.d.ts
declare const PortalOrFragment: _$react.ForwardRefExoticComponent<{
  container?: Element | DocumentFragment | null;
} & {
  children?: _$react.ReactNode | undefined;
} & Omit<{
  disablePortal?: boolean;
}, "children" | "container"> & _$react.RefAttributes<HTMLElement>>;
//#endregion
export { PortalOrFragment, type PortalOrFragmentProps };
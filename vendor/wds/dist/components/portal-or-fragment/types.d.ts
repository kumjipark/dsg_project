import { PortalProps } from "../portal/types.js";
import { Merge } from "@wanteddev/wds-engine";

//#region src/components/portal-or-fragment/types.d.ts
type PortalOrFragmentProps = Merge<PortalProps, {
  disablePortal?: boolean;
}>;
//#endregion
export { PortalOrFragmentProps };
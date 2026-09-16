import { PropsWithChildren } from "react";

//#region src/components/portal/types.d.ts
type PortalProps = PropsWithChildren<{
  /** Specifies the container to be displayed by Portal. */container?: Element | DocumentFragment | null;
}>;
//#endregion
export { PortalProps };
import * as _$react from "react";
import { RefObject } from "react";

//#region src/components/alert/contexts.d.ts
type AlertContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  headingId: string;
  descriptionId: string;
  containerId: string;
};
declare const AlertProvider: _$react.FC<AlertContextType & {
    children: React.ReactNode;
  }>, useAlertContext: (consumerName: string) => AlertContextType;
type AlertContainerContextType = {
  disableOutsideClickClose?: boolean;
  onDismiss?: () => void;
  dimmerRef: RefObject<HTMLDivElement | null>;
};
declare const AlertContainerProvider: _$react.FC<AlertContainerContextType & {
    children: React.ReactNode;
  }>, useAlertContainerContext: (consumerName: string) => AlertContainerContextType;
//#endregion
export { AlertContainerProvider, AlertProvider, useAlertContainerContext, useAlertContext };
import { RegionToastItem } from "../../stores/region-store.js";
import * as _$react from "react";

//#region src/components/toast/contexts.d.ts
type ToastContextType = {
  contentId: string;
  variant: Exclude<RegionToastItem['variant'], undefined>;
};
declare const ToastProvider: _$react.FC<ToastContextType & {
    children: React.ReactNode;
  }>, useToastContext: (consumerName: string) => ToastContextType;
//#endregion
export { ToastProvider, useToastContext };
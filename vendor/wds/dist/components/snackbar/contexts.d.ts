import { RegionToastItem } from "../../stores/region-store.js";
import * as _$react from "react";

//#region src/components/snackbar/contexts.d.ts
type SnackbarContextType = {
  headingId: string;
  descriptionId: string;
  variant: Exclude<RegionToastItem['variant'], undefined>;
  onOpenChange: (open: boolean) => void;
};
declare const SnackbarProvider: _$react.FC<SnackbarContextType & {
    children: React.ReactNode;
  }>, useSnackbarContext: (consumerName: string) => SnackbarContextType;
//#endregion
export { SnackbarProvider, useSnackbarContext };
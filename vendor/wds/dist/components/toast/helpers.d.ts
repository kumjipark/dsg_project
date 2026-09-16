import { CSSProperties } from "react";

//#region src/components/toast/helpers.d.ts
declare const isCursorDevice: () => boolean;
declare const makeTransitionStyle: ({
  open,
  height,
  disablePortal
}: {
  height?: number;
  open?: boolean;
  disablePortal?: boolean;
}) => CSSProperties;
//#endregion
export { isCursorDevice, makeTransitionStyle };
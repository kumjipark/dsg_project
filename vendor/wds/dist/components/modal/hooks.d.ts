import { ModalContainerProps } from "./types.js";
import { RefObject } from "react";

//#region src/components/modal/hooks.d.ts
declare const useDraggable: ({
  variant: givenVariant,
  peekHeight: givenPeekHeight,
  handle: givenHandle,
  xs,
  sm,
  md,
  lg,
  xl,
  target,
  dimmerRef
}: Omit<ModalContainerProps, "target"> & {
  target: HTMLDivElement | null;
  dimmerRef: RefObject<HTMLDivElement | null>;
}) => {
  isBottomSheetWithHandle: boolean;
  handleVisibilityHidden: () => void;
  onMouseDown: (e: React.MouseEvent | React.TouchEvent) => void;
  onTouchStart: (e: React.MouseEvent | React.TouchEvent) => void;
};
//#endregion
export { useDraggable };
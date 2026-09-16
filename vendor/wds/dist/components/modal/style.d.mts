import { ModalContainerProps, ModalContentProps, ModalNavigationProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/modal/style.d.ts
declare const modalDimmerStyle: (theme: Theme) => SerializedStyles$1;
declare const modalContainerWrapperStyle: ({
  variant,
  xs,
  sm,
  md,
  lg,
  xl
}: ModalContainerProps) => (theme: Theme) => SerializedStyles$1;
declare const modalContainerStyle: ({
  resize,
  variant,
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: ModalContainerProps) => (theme: Theme) => SerializedStyles$1;
declare const modalNavigationStyle: ({
  variant
}: ModalNavigationProps) => SerializedStyles$1 | undefined;
declare const modalGrabberStyle: (theme: Theme) => SerializedStyles$1;
declare const modalContentStyle: ({
  gap,
  xs,
  sm,
  md,
  lg,
  xl
}: ModalContentProps) => (theme: Theme) => SerializedStyles$1;
declare const modalContentItemStyle: () => SerializedStyles$1;
//#endregion
export { modalContainerStyle, modalContainerWrapperStyle, modalContentItemStyle, modalContentStyle, modalDimmerStyle, modalGrabberStyle, modalNavigationStyle };
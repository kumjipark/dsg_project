import * as _$react from "react";
import { RefObject } from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/modal/contexts.d.ts
type ModalContextValue = {
  containerRef: RefObject<HTMLDivElement | null>;
  innerContainer: HTMLDivElement | null;
  setInnerContainer: (innerContainer: HTMLDivElement | null) => void;
  containerId: string;
  titleId: string;
  headingId: string;
  summaryId: string;
  descriptionId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isBottomSheet: boolean;
  setIsBottomSheet: (isBottomSheet: boolean) => void;
  visibility: 'hidden' | 'visible';
  setVisibility: (visibility: 'hidden' | 'visible') => void;
};
declare const ModalProvider: _$react.FC<ModalContextValue & {
    children: React.ReactNode;
  }>, useModalContext: (consumerName: string) => ModalContextValue;
type ModalDimmerContextValue = {
  dimmerRef: RefObject<HTMLDivElement | null>;
  isBottomSheetWithHandle: boolean;
  handleVisibilityHidden: () => void;
  disableOutsideClickClose?: boolean;
};
declare const ModalDimmerProvider: _$react.FC<ModalDimmerContextValue & {
    children: React.ReactNode;
  }>, useModalDimmerContext: (consumerName: string) => ModalDimmerContextValue;
type ModalNavigationContextValue = {
  titleId: string;
  onOpenChange: (open: boolean) => void;
  sticky: boolean;
};
declare const ModalNavigationProvider: _$react.FC<ModalNavigationContextValue & {
    children: React.ReactNode;
  }>, useModalNavigationContext: (consumerName: string) => ModalNavigationContextValue;
type ModalActionAreaContextValue = {
  sticky: boolean;
};
declare const ModalActionAreaProvider: {
    (props: ModalActionAreaContextValue & {
      children: _$react.ReactNode;
    }): _$react_jsx_runtime0.JSX.Element;
    displayName: string;
  }, useModalActionAreaContext: () => ModalActionAreaContextValue | undefined;
//#endregion
export { ModalActionAreaProvider, ModalDimmerProvider, ModalNavigationProvider, ModalProvider, useModalActionAreaContext, useModalContext, useModalDimmerContext, useModalNavigationContext };
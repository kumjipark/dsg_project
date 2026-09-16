import { FlexBoxProps } from "../flex-box/types.js";
import { ModalCloseProps, ModalContainerProps, ModalContentItemProps, ModalContentProps, ModalDescriptionProps, ModalDimmerProps, ModalHeadingProps, ModalNavigationButtonProps, ModalNavigationProps, ModalProps, ModalSummaryProps, ModalTriggerProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$_radix_ui_react_slot0 from "@radix-ui/react-slot";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/modal/index.d.ts
declare const Modal: {
  ({
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    onVisibilityChange
  }: ModalProps): _$react_jsx_runtime0.JSX.Element;
  displayName: string;
};
declare const ModalTrigger: _$react.ForwardRefExoticComponent<_$_radix_ui_react_slot0.SlotProps & _$react.RefAttributes<HTMLElement>>;
declare const ModalContainer: PolymorphicComponentInternal<ModalContainerProps, "div">;
/**
 * Use the form `<ModalContainer dimmer={<ModalDimmer />} />`.
 * Only used to apply custom styles to the Dimmer.
 */
declare const ModalDimmer: PolymorphicComponentInternal<ModalDimmerProps, "div">;
declare const ModalNavigation: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ModalNavigationProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const ModalNavigationButton: PolymorphicComponentInternal<ModalNavigationButtonProps, "button">;
declare const ModalClose: PolymorphicComponentInternal<ModalCloseProps, "button">;
declare const ModalContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<ModalContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const ModalContentItem: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<FlexBoxProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const ModalHeading: PolymorphicComponentInternal<ModalHeadingProps, "h1">;
declare const ModalSummary: PolymorphicComponentInternal<ModalSummaryProps, "p">;
declare const ModalDescription: PolymorphicComponentInternal<ModalDescriptionProps, "p">;
//#endregion
export { Modal, ModalClose, type ModalCloseProps, ModalContainer, type ModalContainerProps, ModalContent, ModalContentItem, type ModalContentItemProps, type ModalContentProps, ModalDescription, type ModalDescriptionProps, ModalDimmer, type ModalDimmerProps, ModalHeading, type ModalHeadingProps, ModalNavigation, ModalNavigationButton, type ModalNavigationButtonProps, type ModalNavigationProps, type ModalProps, ModalSummary, type ModalSummaryProps, ModalTrigger, type ModalTriggerProps };
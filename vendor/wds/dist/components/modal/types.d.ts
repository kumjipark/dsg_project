import { TypographyProps } from "../typography/types.js";
import { FlexBoxProps } from "../flex-box/types.js";
import { FocusScopeProps } from "../focus-scope/types.js";
import { PortalProps } from "../portal/types.js";
import { TopNavigationButtonProps, TopNavigationProps } from "../top-navigation/types.js";
import { CSSProperties, PropsWithChildren, ReactNode } from "react";
import { DefaultComponentProps, Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";
import { SlotProps } from "@radix-ui/react-slot";

//#region src/components/modal/types.d.ts
type ModalProps = WithSxProps<{
  /** Whether the modal is open. */open?: boolean; /** Whether the modal is open by default. */
  defaultOpen?: boolean; /** Callback function when the open state changes. */
  onOpenChange?: (open: boolean) => void; /** When `variant=bottom` and `handle=true`, this function is executed when the display is changed by dragging. */
  onVisibilityChange?: (visibility: 'visible' | 'hidden') => void;
  children?: ReactNode;
}>;
type ModalTriggerProps = SlotProps;
type ModalContainerDefaultProps = WithSxProps<{
  variant?: 'popup' | 'bottom' | 'full'; /** When `variant` is `bottom`, the modal can be pulled down and up by dragging. */
  handle?: boolean;
  /**
   * When `variant=bottom` and `handle=true`, sets the bottom sheet's peek height (px).
   * If the peek height is not set, the bottom sheet will be peeked with navigation height.
   */
  peekHeight?: number;
  /**
   * When scrolling inside the modal, the gradient of `ModalActionArea` and
   * the `background` style of `ModalNavigation` are added.
   */
  sticky?: boolean; /** The size of the modal. */
  size?: 'small' | 'medium' | 'large' | 'xlarge'; /** The resize mode of the modal. */
  resize?: 'hug' | 'fixed';
  children?: ReactNode; /** The props of the wrapper. */
  wrapperProps?: DefaultComponentProps<{}, 'div'>;
  /**
   * This option is not commonly used. It is intended for cases where you want to add animation to the dimmer,
   * for example using framer-motion.
   */
  dimmer?: ReactNode; /** The container element where the modal will be rendered when using a portal. */
  container?: PortalProps['container']; /** Whether to disable the outside click close. */
  disableOutsideClickClose?: boolean; /** Whether to disable the escape key close. */
  disableEscapeKeyDownClose?: boolean; /** Whether to disable the remove scroll. */
  disableRemoveScroll?: boolean; /** Whether to disable the focus scope. */
  disableFocusScope?: FocusScopeProps['disableFocusScope']; /** Whether to disable the aria hidden others. */
  disableAriaHiddenOthers?: boolean;
  /**
   * React Portal does not support SSR, so it is used to support Server Side Rendering.
   *
   * If the style using tags such as h2 and div is used in the upper component, the UI may break.
   */
  disablePortal?: boolean; /** Keeps the modal mounted in the DOM even when open is false. */
  forceMount?: boolean;
}>;
type ModalContainerResponsiveProps = ResponsiveProps<Pick<ModalContainerDefaultProps, 'size' | 'variant' | 'handle' | 'resize'>>;
type ModalContainerProps = Merge<ModalContainerDefaultProps, ModalContainerResponsiveProps>;
type ModalDimmerProps = WithSxProps<{}>;
type ModalScrollProviderProps = PropsWithChildren<{
  sticky: boolean;
}>;
type ModalNavigationProps = Merge<{
  variant?: TopNavigationProps['variant'] | 'emphasized'; /** The leading content of the modal navigation. Pass an element wrapped with `ModalNavigationButton` or use `ModalClose`. */
  leadingContent?: ReactNode; /** The trailing content of the modal navigation. Pass an element wrapped with `ModalNavigationButton` or use `ModalClose`. */
  trailingContent?: ReactNode;
}, TopNavigationProps>;
type ModalNavigationButtonProps = TopNavigationButtonProps;
type ModalCloseProps = TopNavigationButtonProps;
type ModalContentDefaultProps = WithSxProps<{
  gap?: CSSProperties['gap'];
  children?: ReactNode;
}>;
type ModalContentResponsiveProps = ResponsiveProps<Pick<ModalContentDefaultProps, 'gap'>>;
type ModalContentProps = Merge<ModalContentDefaultProps, ModalContentResponsiveProps>;
type ModalContentItemProps = FlexBoxProps;
type ModalHeadingProps = TypographyProps;
type ModalSummaryProps = TypographyProps;
type ModalDescriptionProps = TypographyProps;
//#endregion
export { ModalCloseProps, ModalContainerProps, ModalContentItemProps, ModalContentProps, ModalDescriptionProps, ModalDimmerProps, ModalHeadingProps, ModalNavigationButtonProps, ModalNavigationProps, ModalProps, ModalScrollProviderProps, ModalSummaryProps, ModalTriggerProps };
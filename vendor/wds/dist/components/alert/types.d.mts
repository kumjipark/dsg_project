import { TextButtonProps } from "../text-button/types.mjs";
import { TypographyProps } from "../typography/types.mjs";
import { FlexBoxProps } from "../flex-box/types.mjs";
import { FocusScopeProps } from "../focus-scope/types.mjs";
import { PortalProps } from "../portal/types.mjs";
import { DefaultComponentProps, Merge, WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";
import { SlotProps } from "@radix-ui/react-slot";

//#region src/components/alert/types.d.ts
type AlertProps = {
  /** Whether the alert is open. */open?: boolean; /** Whether the alert is open by default. */
  defaultOpen?: boolean; /** Callback function when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
};
type AlertDimmerProps = WithSxProps<{}>;
type AlertTriggerProps = SlotProps;
type AlertContainerProps = Merge<{
  /** Keeps the alert mounted in the DOM even when open is false. */forceMount?: boolean;
  /**
   * React Portal does not support SSR, so it is used to support Server Side Rendering.
   *
   * If the style using tags such as h2 and div is used in the upper component, the UI may break.
   */
  disablePortal?: boolean; /** The container element where the alert will be rendered when using a portal. */
  container?: PortalProps['container']; /** The props for the wrapper. */
  wrapperProps?: DefaultComponentProps<{}, 'div'>; /** Whether to disable the outside click close. */
  disableOutsideClickClose?: boolean; /** Whether to disable the escape key close. */
  disableEscapeKeyDownClose?: boolean; /** Whether to disable the scroll removal. */
  disableRemoveScroll?: boolean; /** Whether to disable the focus trap. */
  disableFocusScope?: FocusScopeProps['disableFocusScope']; /** Whether to disable the aria hidden others. */
  disableAriaHiddenOthers?: boolean; /** When the esc key or dialog outside click is controlled. */
  onDismiss?: () => void;
  /**
   * This option is not commonly used. It is intended for cases where you want to add animation to the dimmer,
   * for example using framer-motion.
   */
  dimmer?: ReactNode;
}, FlexBoxProps>;
type AlertContentProps = FlexBoxProps;
type AlertHeadingProps = TypographyProps;
type AlertDescriptionProps = TypographyProps;
type AlertActionAreaProps = FlexBoxProps;
type AlertActionAreaButtonProps = Merge<{
  variant?: 'normal' | 'assistive' | 'negative';
}, Omit<TextButtonProps, 'color'>>;
//#endregion
export { AlertActionAreaButtonProps, AlertActionAreaProps, AlertContainerProps, AlertContentProps, AlertDescriptionProps, AlertDimmerProps, AlertHeadingProps, AlertProps, AlertTriggerProps };
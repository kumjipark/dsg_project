import { PopperContentProps } from "../popper/types.mjs";
import { FocusScopeProps } from "../focus-scope/types.mjs";
import { WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";
import { SlotProps } from "@radix-ui/react-slot";
import { DismissableLayerProps } from "@radix-ui/react-dismissable-layer";

//#region src/components/popover/types.d.ts
type PopoverProps = {
  /** Whether the popover is open. */open?: boolean; /** Whether the popover is open by default. */
  defaultOpen?: boolean; /** Callback function when the open state changes. */
  onOpenChange?: (state: boolean) => void;
  children?: ReactNode;
};
type PopoverTriggerProps = SlotProps;
type PopoverContentProps = WithSxProps<{
  /**
   * The children of the popover.
   * When `variant` is `'normal'`, this is used as the description.
   */
  children?: ReactNode; /** Specifies the position of the content relative to the reference element. */
  position?: PopperContentProps['position']; /** Specifies the distance in pixels the content will be offset from the reference element. */
  offset?: PopperContentProps['offset']; /** When the element is hidden, it is hidden. */
  referenceHidden?: PopperContentProps['referenceHidden']; /** When the element is hidden, the offset is adjusted. */
  referenceHiddenOffsets?: PopperContentProps['referenceHiddenOffsets']; /** The floating ui context can be obtained through a callback. */
  setContext?: PopperContentProps['setContext']; /** Specifies the container to be displayed by Portal. */
  container?: PopperContentProps['container']; /** Whether to disable the portal. */
  disablePortal?: PopperContentProps['disablePortal']; /** The props of the wrapper. */
  wrapperProps?: PopperContentProps['wrapperProps']; /** Keeps the popover mounted in the DOM even when open is false. */
  forceMount?: boolean; /** Whether to show the close button. */
  closeButton?: boolean; /** The action of the popover. */
  action?: ReactNode; /** The heading of the popover. */
  heading?: ReactNode;
  /**
   * The visual style of the popover.
   * - When `variant` is `'normal'`, the popover displays `heading`, `action`, and `closeButton` props (header, actions, close button).
   * - When `variant` is `'custom'`, only the children are rendered inside the popover.
   */
  variant?: 'normal' | 'custom';
} & Pick<FocusScopeProps, 'trappedContent' | 'onMountAutoFocus' | 'onUnmountAutoFocus' | 'trapped' | 'loop' | 'disableFocusScope'> & Pick<DismissableLayerProps, 'onInteractOutside' | 'onFocusOutside' | 'onPointerDownOutside' | 'onDismiss' | 'disableOutsidePointerEvents'>>;
//#endregion
export { PopoverContentProps, PopoverProps, PopoverTriggerProps };
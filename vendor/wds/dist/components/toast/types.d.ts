import { TypographyProps } from "../typography/types.js";
import { FlexBoxProps } from "../flex-box/types.js";
import { RegionToastItem } from "../../stores/region-store.js";
import { PortalOrFragmentProps } from "../portal-or-fragment/types.js";
import { ReactNode } from "react";
import { WithSxProps } from "@wanteddev/wds-engine";
import { SlotProps } from "@radix-ui/react-slot";

//#region src/components/toast/types.d.ts
type ToastProps = Pick<RegionToastItem, 'duration' | 'variant' | 'icon' | 'onAnimationEnd'> & WithSxProps<{
  /** Whether the toast is open by default. */defaultOpen?: boolean; /** Whether the toast is open. */
  open?: boolean; /** Callback function when the open state changes. */
  onOpenChange?: (open: boolean) => void; /** The container of the toast. */
  container?: PortalOrFragmentProps['container']; /** Whether to disable the portal. */
  disablePortal?: PortalOrFragmentProps['disablePortal']; /** Whether to disable the animation. */
  disableAnimation?: boolean;
  children?: ReactNode;
}>;
type ToastContainerProps = FlexBoxProps;
type ToastIconProps = SlotProps;
type ToastContentProps = TypographyProps;
//#endregion
export { ToastContainerProps, ToastContentProps, ToastIconProps, ToastProps };
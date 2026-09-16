import { TypographyProps } from "../typography/types.mjs";
import { FlexBoxProps } from "../flex-box/types.mjs";
import { RegionToastItem } from "../../stores/region-store.mjs";
import { PortalOrFragmentProps } from "../portal-or-fragment/types.mjs";
import { WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";
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
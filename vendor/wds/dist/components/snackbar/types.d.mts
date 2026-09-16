import { TextButtonProps } from "../text-button/types.mjs";
import { TypographyProps } from "../typography/types.mjs";
import { FlexBoxProps } from "../flex-box/types.mjs";
import { IconButtonProps } from "../icon-button/types.mjs";
import { RegionSnackbarItem } from "../../stores/region-store.mjs";
import { PortalOrFragmentProps } from "../portal-or-fragment/types.mjs";
import { BreakPoint, Merge, WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";

//#region src/components/snackbar/types.d.ts
type SnackbarProps = Pick<RegionSnackbarItem, 'duration' | 'variant' | 'onAnimationEnd'> & WithSxProps<{
  /** Whether the snackbar is open by default. */defaultOpen?: boolean; /** Whether the snackbar is open. */
  open?: boolean; /** Callback function when the open state changes. */
  onOpenChange?: (open: boolean) => void; /** The container of the snackbar. */
  container?: PortalOrFragmentProps['container'];
  disablePortal?: PortalOrFragmentProps['disablePortal']; /** The children of the snackbar. */
  children?: ReactNode; /** Whether the animation is disabled. */
  disableAnimation?: boolean; /** Keeps the snackbar mounted in the DOM even when open is false. */
  forceMount?: boolean;
}>;
type SnackbarContentProps = Merge<{
  /** The extra content of the snackbar. Pass an element wrapped with `SnackbarExtraContent`. */extraContent?: ReactNode;
  children?: ReactNode;
}, FlexBoxProps>;
type SnackbarHeadingProps = TypographyProps;
type SnackbarExtraContentProps = FlexBoxProps;
type SnackbarDescriptionProps = TypographyProps;
type SnackbarActionProps = Omit<TextButtonProps, 'size' | keyof BreakPoint>;
type SnackbarCloseButtonProps = IconButtonProps;
//#endregion
export { SnackbarActionProps, SnackbarCloseButtonProps, SnackbarContentProps, SnackbarDescriptionProps, SnackbarExtraContentProps, SnackbarHeadingProps, SnackbarProps };
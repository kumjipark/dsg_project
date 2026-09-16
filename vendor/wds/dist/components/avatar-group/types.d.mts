import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";
import { ReactNode } from "react";

//#region src/components/avatar-group/types.d.ts
type AvatarGroupDefaultProps = WithSxProps<{
  /**
   * The size of the avatar group.
   * It is recommended to use sizes consistent with `Avatar` for visual harmony.
   */
  size?: 'xsmall' | 'small'; /** The content of the avatar group. Use `Avatar` components as the children. */
  children?: ReactNode; /** The content displayed in the trailing area. */
  trailingContent?: ReactNode;
}>;
type AvatarGroupResponsiveProps = ResponsiveProps<Pick<AvatarGroupDefaultProps, 'size'>>;
type AvatarGroupProps = Merge<AvatarGroupDefaultProps, AvatarGroupResponsiveProps>;
//#endregion
export { AvatarGroupProps };
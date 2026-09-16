import { ReactNode } from "react";
import { WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/avatar-button/types.d.ts
type AvatarButtonProps = WithSxProps<{
  /** Whether the avatar button is disabled. */disabled?: boolean; /** Whether to disable the interaction. */
  disableInteraction?: boolean; /** The content of the avatar button. Use `Avatar` component as the children. */
  children?: ReactNode;
}>;
//#endregion
export { AvatarButtonProps };
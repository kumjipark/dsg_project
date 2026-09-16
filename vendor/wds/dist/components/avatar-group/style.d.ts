import { AvatarGroupProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/avatar-group/style.d.ts
declare const avatarGroupStyle: ({
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: AvatarGroupProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { avatarGroupStyle };
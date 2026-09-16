import { PushBadgeProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/push-badge/style.d.ts
declare const pushBadgeWrapperStyle: ({
  offsetX,
  offsetY,
  variant,
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: PushBadgeProps) => (theme: Theme) => SerializedStyles$1;
declare const pushBadgeStyle: ({
  variant,
  invisible,
  position
}: PushBadgeProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { pushBadgeStyle, pushBadgeWrapperStyle };
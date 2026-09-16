import { IconButtonProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/icon-button/style.d.ts
declare const iconButtonStyle: ({
  xs,
  sm,
  md,
  lg,
  xl,
  ...props
}: IconButtonProps) => (theme: Theme) => SerializedStyles$1;
declare const backgroundBlendStyle: (theme: Theme) => SerializedStyles$1;
//#endregion
export { backgroundBlendStyle, iconButtonStyle };
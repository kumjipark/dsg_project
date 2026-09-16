import { RadioProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/radio/style.d.ts
declare const radioStyle: ({
  size,
  checked,
  tight,
  disabled,
  xs,
  sm,
  md,
  lg,
  xl
}: RadioProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { radioStyle };
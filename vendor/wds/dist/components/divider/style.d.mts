import { DividerProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/divider/style.d.ts
declare const dividerStyle: ({
  vertical,
  color,
  size,
  thickness,
  xs,
  sm,
  md,
  lg,
  xl
}: DividerProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { dividerStyle };
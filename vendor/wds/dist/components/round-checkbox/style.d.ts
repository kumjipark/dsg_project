import { RoundCheckboxProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/round-checkbox/style.d.ts
declare const roundCheckboxStyle: ({
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: RoundCheckboxProps) => (theme: Theme) => SerializedStyles$1;
declare const roundCheckboxSizeStyle: ({
  size
}: RoundCheckboxProps) => SerializedStyles$1 | undefined;
//#endregion
export { roundCheckboxSizeStyle, roundCheckboxStyle };
import { ChipProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme, ThemeColorsToken } from "@wanteddev/wds-engine";

//#region src/components/chip/style.d.ts
type ChipStyleProps = ChipProps & {
  overrideColor?: ThemeColorsToken;
};
declare const chipStyle: ({
  xs,
  sm,
  md,
  lg,
  xl,
  overrideColor,
  ...props
}: ChipStyleProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { chipStyle };
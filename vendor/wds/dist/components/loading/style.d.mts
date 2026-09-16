import { LoadingProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/loading/style.d.ts
declare const loadingStyle: ({
  size,
  xl,
  lg,
  md,
  sm,
  xs
}: LoadingProps) => (theme: Theme) => SerializedStyles$1;
declare const loadingCircularAnimatedSvgStyle: (theme: Theme) => SerializedStyles$1;
declare const loadingWantedAnimatedSvgStyle: (theme: Theme) => SerializedStyles$1;
//#endregion
export { loadingCircularAnimatedSvgStyle, loadingStyle, loadingWantedAnimatedSvgStyle };
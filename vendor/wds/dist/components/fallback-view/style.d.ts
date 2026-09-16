import { FallbackViewProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { FallbackViewContextType } from "./contexts.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/fallback-view/style.d.ts
declare const fallbackViewStyle: ({
  platform,
  padding,
  width,
  xs,
  sm,
  md,
  lg,
  xl
}: FallbackViewProps) => (theme: Theme) => SerializedStyles$1;
declare const fallbackViewImageStyle: ({
  platform,
  responsive
}: FallbackViewContextType) => (theme: Theme) => SerializedStyles$1;
declare const fallbackViewContentStyle: ({
  platform,
  responsive
}: FallbackViewContextType) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { fallbackViewContentStyle, fallbackViewImageStyle, fallbackViewStyle };
import { ProgressStepIndicatorProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/progress-step-indicator/style.d.ts
declare const progressStepWrapperStyle: ({
  size,
  divider,
  xs,
  sm,
  md,
  lg,
  xl
}: Partial<ProgressStepIndicatorProps>) => (theme: Theme) => SerializedStyles$1;
declare const progressListWrapperStyle: SerializedStyles$1;
declare const progressListStyle: (theme: Theme) => SerializedStyles$1;
//#endregion
export { progressListStyle, progressListWrapperStyle, progressStepWrapperStyle };
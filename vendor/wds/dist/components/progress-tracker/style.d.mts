import { ProgressTrackerProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/progress-tracker/style.d.ts
declare const progressTrackerWrapperStyle: ({
  direction
}: ProgressTrackerProps) => SerializedStyles$1;
declare const progressTrackerItemVerticalStyle: SerializedStyles$1;
declare const progressTrackerItemVerticalLabelWrapperStyle: SerializedStyles$1;
declare const progressTrackerItemHorizontalStyle: SerializedStyles$1;
declare const progressTrackerItemHorizontalWrapperStyle: SerializedStyles$1;
declare const progressTrackerItemDividerStyle: (isActive: boolean, direction: ProgressTrackerProps["direction"]) => (theme: Theme) => SerializedStyles$1;
declare const progressTrackerItemContentStyle: SerializedStyles$1;
declare const progressCircleStyle: (isActive: boolean, completed: boolean) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { progressCircleStyle, progressTrackerItemContentStyle, progressTrackerItemDividerStyle, progressTrackerItemHorizontalStyle, progressTrackerItemHorizontalWrapperStyle, progressTrackerItemVerticalLabelWrapperStyle, progressTrackerItemVerticalStyle, progressTrackerWrapperStyle };
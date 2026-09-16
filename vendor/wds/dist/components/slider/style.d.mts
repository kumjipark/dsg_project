import { SliderProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/slider/style.d.ts
declare const sliderProgressWrapperStyle: ({
  disabled
}: SliderProps) => (theme: Theme) => SerializedStyles$1;
declare const sliderProgressStyle: SerializedStyles$1;
declare const sliderProgressRangeStyle: SerializedStyles$1;
declare const sliderThumbStyle: (theme: Theme) => SerializedStyles$1;
declare const sliderThumbInteractionStyle: (theme: Theme) => SerializedStyles$1;
//#endregion
export { sliderProgressRangeStyle, sliderProgressStyle, sliderProgressWrapperStyle, sliderThumbInteractionStyle, sliderThumbStyle };
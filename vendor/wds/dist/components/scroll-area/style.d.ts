import { ScrollBarProps } from "./types.js";
import { SerializedStyles, Theme } from "@wanteddev/wds-engine";

//#region src/components/scroll-area/style.d.ts
declare const scrollAreaStyle: SerializedStyles;
declare const viewportStyle: SerializedStyles;
declare const scrollBarStyle: ({
  orientation,
  size
}: ScrollBarProps) => (theme: Theme) => SerializedStyles;
declare const scrollBarThumbStyle: (theme: Theme) => SerializedStyles;
//#endregion
export { scrollAreaStyle, scrollBarStyle, scrollBarThumbStyle, viewportStyle };
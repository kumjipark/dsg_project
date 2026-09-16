import { TooltipContentProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/tooltip/style.d.ts
declare const tooltipWrapperStyle: ({
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: TooltipContentProps) => (theme: Theme) => SerializedStyles$1;
declare const tooltipWrapperSizeStyle: ({
  size
}: Pick<TooltipContentProps, "size">) => SerializedStyles$1 | undefined;
declare const tooltipContentStyle: (theme: Theme) => SerializedStyles$1;
declare const tooltipContentShortcutStyle: (theme: Theme) => SerializedStyles$1;
//#endregion
export { tooltipContentShortcutStyle, tooltipContentStyle, tooltipWrapperSizeStyle, tooltipWrapperStyle };
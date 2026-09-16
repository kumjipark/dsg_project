import { GridItemProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/grid-item/style.d.ts
declare const gridItemStyle: ({
  xs,
  sm,
  md,
  lg,
  xl,
  ...props
}: GridItemProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { gridItemStyle };
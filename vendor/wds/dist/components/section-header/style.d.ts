import { SectionHeaderProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/section-header/style.d.ts
declare const sectionHeaderStyle: ({
  size,
  platform,
  color,
  xs,
  sm,
  md,
  lg,
  xl
}: SectionHeaderProps) => (theme: Theme) => SerializedStyles$1;
declare const sectionHeaderNavigationStyle: (theme: Theme) => SerializedStyles$1;
declare const sectionHeaderNavigationButtonStyle: (theme: Theme) => SerializedStyles$1;
//#endregion
export { sectionHeaderNavigationButtonStyle, sectionHeaderNavigationStyle, sectionHeaderStyle };
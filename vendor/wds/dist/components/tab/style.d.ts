import { TabListProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/tab/style.d.ts
declare const tabListStyle: ({
  isScrollableLeft,
  isScrollableRight,
  resize,
  horizontalPadding,
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: TabListProps & {
  isScrollableLeft: boolean;
  isScrollableRight: boolean;
}) => (theme: Theme) => SerializedStyles$1;
declare const scrollWrapperStyle: SerializedStyles$1;
declare const tabListWrapperStyle: (theme: Theme) => SerializedStyles$1;
declare const motionDividerStyle: SerializedStyles$1;
declare const tabListItemStyle: ({
  disabled
}: {
  disabled?: boolean;
}) => (theme: Theme) => SerializedStyles$1;
declare const tabListItemInteractionStyle: SerializedStyles$1;
declare const stickyButtonStyle: SerializedStyles$1;
//#endregion
export { motionDividerStyle, scrollWrapperStyle, stickyButtonStyle, tabListItemInteractionStyle, tabListItemStyle, tabListStyle, tabListWrapperStyle };
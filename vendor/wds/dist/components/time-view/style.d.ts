import { TimeListProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/time-view/style.d.ts
declare const timeViewStyle: SerializedStyles$1;
declare const timeListStyle: () => SerializedStyles$1;
declare const timeListScrollArea: SerializedStyles$1;
declare const timeListScrollAreaStyle: () => SerializedStyles$1;
declare const timeItemStyle: ({
  active,
  disabled,
  variant
}: {
  active: boolean;
  disabled: boolean;
} & Pick<TimeListProps, "variant">) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { timeItemStyle, timeListScrollArea, timeListScrollAreaStyle, timeListStyle, timeViewStyle };
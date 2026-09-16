import { CardProps } from "../card/types.js";
import { CardListSkeletonProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/card-list/style.d.ts
declare const cardListStyle: ({
  xs,
  sm,
  md,
  lg,
  xl,
  width,
  platform
}: CardProps) => (theme: Theme) => SerializedStyles$1;
declare const cardListContentStyle: SerializedStyles$1;
declare const cardListSkeletonStyle: ({
  xs,
  sm,
  md,
  lg,
  xl,
  width,
  platform,
  hasLeadingContent,
  hasTrailingContent
}: CardListSkeletonProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { cardListContentStyle, cardListSkeletonStyle, cardListStyle };
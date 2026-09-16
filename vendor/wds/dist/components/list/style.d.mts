import { ListCellContentProps, ListCellProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/list/style.d.ts
declare const listStyle: SerializedStyles$1;
declare const listCellStyle: ({
  verticalPadding,
  fillWidth,
  interactionPadding,
  selected,
  disabled,
  disableInteraction,
  xs,
  sm,
  md,
  lg,
  xl
}: ListCellProps) => (theme: Theme) => SerializedStyles$1;
declare const listTextContentWrapperStyle: (ellipsis?: boolean) => SerializedStyles$1;
declare const listTextEllipsisStyle: (ellipsis?: boolean) => SerializedStyles$1;
declare const listCellDividerStyle: SerializedStyles$1;
declare const listCellContentStyle: ({
  variant
}: ListCellContentProps) => (theme: Theme) => SerializedStyles$1;
declare const listTextStyle: SerializedStyles$1;
//#endregion
export { listCellContentStyle, listCellDividerStyle, listCellStyle, listStyle, listTextContentWrapperStyle, listTextEllipsisStyle, listTextStyle };
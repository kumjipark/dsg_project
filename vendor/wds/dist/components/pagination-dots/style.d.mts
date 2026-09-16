import { PaginationDotsProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/pagination-dots/style.d.ts
declare const paginationDotsWrapperStyle: ({
  color,
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: Omit<PaginationDotsProps, "totalPages">) => (theme: Theme) => SerializedStyles$1;
declare const paginationDotsStyle: (scale: number, isFirst: boolean) => SerializedStyles$1;
//#endregion
export { paginationDotsStyle, paginationDotsWrapperStyle };
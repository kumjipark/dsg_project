import { PaginationProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/pagination/style.d.ts
declare const paginationStyle: ({
  variant
}: Pick<PaginationProps, "variant">) => false | SerializedStyles$1;
declare const paginationItemStyle: SerializedStyles$1;
declare const pageButtonStyle: (theme: Theme) => SerializedStyles$1;
declare const paginationFieldStyle: SerializedStyles$1;
declare const paginationContentStyle: SerializedStyles$1;
//#endregion
export { pageButtonStyle, paginationContentStyle, paginationFieldStyle, paginationItemStyle, paginationStyle };
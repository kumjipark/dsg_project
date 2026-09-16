import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/table/style.d.ts
declare const tableStyle: (theme: Theme) => SerializedStyles$1;
declare const scrollAreaStyle: SerializedStyles$1;
declare const tableHeadCellStyle: SerializedStyles$1;
declare const tableCellStyle: SerializedStyles$1;
declare const tableRowStyle: (interaction?: boolean) => (theme: Theme) => SerializedStyles$1;
declare const tableHeadStyle: (isSticky?: boolean) => (theme: Theme) => SerializedStyles$1;
declare const tableBodyStyle: SerializedStyles$1;
declare const tableFootStyle: SerializedStyles$1;
declare const paginationWrapperStyle: SerializedStyles$1;
//#endregion
export { paginationWrapperStyle, scrollAreaStyle, tableBodyStyle, tableCellStyle, tableFootStyle, tableHeadCellStyle, tableHeadStyle, tableRowStyle, tableStyle };
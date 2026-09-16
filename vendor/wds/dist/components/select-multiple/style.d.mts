import { SerializedStyles } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";

//#region src/components/select-multiple/style.d.ts
declare const customSelectMultipleRenderWrapperStyle: ({
  overflow,
  isScrollableLeft,
  isScrollableRight
}: {
  overflow: boolean;
  isScrollableLeft: boolean;
  isScrollableRight: boolean;
}) => SerializedStyles;
//#endregion
export { customSelectMultipleRenderWrapperStyle };
import { PageCounterProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/page-counter/style.d.ts
declare const pageCounterStyle: ({
  alternative,
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: Omit<PageCounterProps, "totalPages">) => (theme: Theme) => SerializedStyles$1;
declare const backgroundBlendStyle: (theme: Theme) => SerializedStyles$1;
//#endregion
export { backgroundBlendStyle, pageCounterStyle };
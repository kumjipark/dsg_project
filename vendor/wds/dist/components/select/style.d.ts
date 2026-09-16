import { SelectMultipleProps } from "../select-multiple/types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/select/style.d.ts
declare const selectStyle: ({
  invalid,
  width,
  height,
  disabled,
  xs,
  sm,
  md,
  lg,
  xl
}: SelectMultipleProps) => (theme: Theme) => SerializedStyles$1;
declare const invalidIconWrapperStyle: (theme: Theme) => SerializedStyles$1;
declare const selectIconStyle: ({
  disabled
}: SelectMultipleProps) => (theme: Theme) => SerializedStyles$1;
declare const selectTextStyle: SerializedStyles$1;
//#endregion
export { invalidIconWrapperStyle, selectIconStyle, selectStyle, selectTextStyle };
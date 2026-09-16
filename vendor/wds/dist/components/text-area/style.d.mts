import { TextAreaProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/text-area/style.d.ts
declare const textAreaWrapperStyle: ({
  disabled,
  invalid,
  width,
  xs,
  sm,
  md,
  lg,
  xl
}: TextAreaProps) => (theme: Theme) => SerializedStyles$1;
declare const textAreaStyle: ({
  xs,
  sm,
  md,
  lg,
  xl
}: TextAreaProps) => (theme: Theme) => SerializedStyles$1;
declare const textAreaBottomAreaStyle: SerializedStyles$1;
declare const textAreaContentStyle: SerializedStyles$1;
declare const textAreaCharacterCounterStyle: (theme: Theme) => SerializedStyles$1;
declare const invalidIconWrapperStyle: (theme: Theme) => SerializedStyles$1;
//#endregion
export { invalidIconWrapperStyle, textAreaBottomAreaStyle, textAreaCharacterCounterStyle, textAreaContentStyle, textAreaStyle, textAreaWrapperStyle };
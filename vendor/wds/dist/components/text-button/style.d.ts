import { TextButtonProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme, ThemeColorsToken } from "@wanteddev/wds-engine";

//#region src/components/text-button/style.d.ts
type TextButtonStyleProps = TextButtonProps & {
  overrideColor?: ThemeColorsToken;
};
declare const textButtonStyle: ({
  loading,
  xs,
  sm,
  md,
  lg,
  xl,
  ...props
}: TextButtonStyleProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { textButtonStyle };
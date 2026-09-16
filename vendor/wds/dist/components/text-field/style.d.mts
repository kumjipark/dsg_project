import { TextFieldButtonProps, TextFieldProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/text-field/style.d.ts
type TextFieldWrapperStyleProps = TextFieldProps & {
  type?: string;
  readOnly?: boolean;
};
declare const textFieldWrapperStyle: ({
  invalid,
  readOnly,
  type,
  disabled,
  width,
  height,
  xs,
  sm,
  md,
  lg,
  xl
}: TextFieldWrapperStyleProps) => (theme: Theme) => SerializedStyles$1;
declare const invalidIconWrapperStyle: (theme: Theme) => SerializedStyles$1;
declare const positiveIconWrapperStyle: (theme: Theme) => SerializedStyles$1;
declare const textFieldContentStyle: SerializedStyles$1;
declare const textFieldButtonStyle: ({
  variant,
  disabled
}: TextFieldButtonProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { invalidIconWrapperStyle, positiveIconWrapperStyle, textFieldButtonStyle, textFieldContentStyle, textFieldWrapperStyle };
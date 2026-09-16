import { SnackbarProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/snackbar/style.d.ts
declare const wrapperStyle: ({
  disableAnimation
}: Pick<SnackbarProps, "disableAnimation">) => (theme: Theme) => SerializedStyles$1;
declare const snackbarStyle: SerializedStyles$1;
declare const firstOverlayStyle: (theme: Theme) => SerializedStyles$1;
declare const secondOverlayStyle: (theme: Theme) => SerializedStyles$1;
declare const messageStyle: SerializedStyles$1;
declare const snackbarActionStyle: (theme: Theme) => SerializedStyles$1;
declare const textStyle: (theme: Theme) => SerializedStyles$1;
declare const fullWidthFlexBoxStyle: SerializedStyles$1;
declare const snackbarCloseButtonStyle: (theme: Theme) => SerializedStyles$1;
//#endregion
export { firstOverlayStyle, fullWidthFlexBoxStyle, messageStyle, secondOverlayStyle, snackbarActionStyle, snackbarCloseButtonStyle, snackbarStyle, textStyle, wrapperStyle };
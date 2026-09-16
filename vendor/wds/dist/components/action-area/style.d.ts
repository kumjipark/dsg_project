import { ActionAreaButtonProps, ActionAreaProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Merge, Theme } from "@wanteddev/wds-engine";

//#region src/components/action-area/style.d.ts
declare const actionAreaStyle: ({
  divider,
  background,
  extra
}: ActionAreaProps) => (theme: Theme) => SerializedStyles$1;
declare const actionButtonCancel: ({
  variant,
  parentVariant
}: Merge<Pick<ActionAreaButtonProps, "variant">, {
  parentVariant?: ActionAreaProps["variant"];
}>) => SerializedStyles$1 | undefined;
//#endregion
export { actionAreaStyle, actionButtonCancel };
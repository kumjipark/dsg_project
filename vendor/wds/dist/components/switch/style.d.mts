import { SwitchProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/switch/style.d.ts
declare const switchStyle: ({
  size,
  checked,
  disabled,
  xs,
  sm,
  md,
  lg,
  xl
}: SwitchProps) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { switchStyle };
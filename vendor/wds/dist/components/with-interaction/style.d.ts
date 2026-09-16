import { WithInteractionProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/with-interaction/style.d.ts
type VariantType = 'normal' | 'light' | 'strong';
declare const interactionStyle: ({
  color,
  width,
  height
}: WithInteractionProps) => (theme: Theme) => SerializedStyles$1;
declare const getWrapperStyle: ({
  disabled,
  variant,
  scale
}: WithInteractionProps) => (theme: Theme) => SerializedStyles$1;
declare const hoverInteractionStyle: (theme: Theme, variant?: VariantType) => SerializedStyles$1;
declare const activeInteractionStyle: (theme: Theme, variant?: VariantType) => SerializedStyles$1;
//#endregion
export { activeInteractionStyle, getWrapperStyle, hoverInteractionStyle, interactionStyle };
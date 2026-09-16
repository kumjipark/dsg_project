import { SerializedStyles as SerializedStyles$1 } from "../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme, ThemeShadowToken } from "@wanteddev/wds-engine";

//#region src/utils/framed-style.d.ts
type FramedStyleParams = {
  invalid?: boolean;
  disabled?: boolean;
  selected?: boolean;
  shadow?: ThemeShadowToken;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
};
declare const framedStyle: (params?: FramedStyleParams) => (theme: Theme) => SerializedStyles$1;
//#endregion
export { FramedStyleParams, framedStyle };
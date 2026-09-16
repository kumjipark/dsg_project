import { Theme } from "@wanteddev/wds-theme";
import { Interpolation } from "@emotion/react";

//#region src/utils/interpolation.d.ts
declare const interpolationTheme: (expressions: Interpolation<Theme>, theme: Theme) => Interpolation<Theme>;
//#endregion
export { interpolationTheme };
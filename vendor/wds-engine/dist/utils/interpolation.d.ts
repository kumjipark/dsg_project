import { Interpolation } from "@emotion/react";
import { Theme } from "@wanteddev/wds-theme";

//#region src/utils/interpolation.d.ts
declare const interpolationTheme: (expressions: Interpolation<Theme>, theme: Theme) => Interpolation<Theme>;
//#endregion
export { interpolationTheme };
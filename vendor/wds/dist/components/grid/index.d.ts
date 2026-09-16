import { GridProps } from "./types.js";
import { PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/grid/index.d.ts
declare const Grid: PolymorphicComponentInternal<GridProps, "div">;
//#endregion
export { Grid, type GridProps };
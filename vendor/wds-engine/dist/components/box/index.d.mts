import { BoxProps } from "./types.mjs";
import { PolymorphicComponent } from "../../types/index.mjs";

//#region src/components/box/index.d.ts
declare const Box: PolymorphicComponent<BoxProps, "div">;
//#endregion
export { Box, type BoxProps };
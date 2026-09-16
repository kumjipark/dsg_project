import { BoxProps } from "./types.js";
import { PolymorphicComponent } from "../../types/index.js";

//#region src/components/box/index.d.ts
declare const Box: PolymorphicComponent<BoxProps, "div">;
//#endregion
export { Box, type BoxProps };
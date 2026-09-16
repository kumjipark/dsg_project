'use client';
import createLooseContext from "../../hooks/internal/use-loose-context.mjs";
//#region src/components/chip/contexts.ts
/**
* Used to easily override the default color value of the chip action.
*/
const [ChipProvider, useChipContext] = createLooseContext("AnyComponent");
//#endregion
export { ChipProvider, useChipContext };

'use client';
import createLooseContext from "../../hooks/internal/use-loose-context.mjs";
//#region src/components/radio/contexts.ts
/**
* Used to easily override the default tight value of the radio.
*/
const [RadioProvider, useRadioContext] = createLooseContext("AnyComponent");
//#endregion
export { RadioProvider, useRadioContext };

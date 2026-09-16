'use client';
import createLooseContext from "../../hooks/internal/use-loose-context.mjs";
//#region src/components/text-button/contexts.ts
/**
* Used to easily override the default color value of the text button.
*/
const [TextButtonProvider, useTextButtonContext] = createLooseContext("AnyComponent");
//#endregion
export { TextButtonProvider, useTextButtonContext };

'use client';
import createLooseContext from "../../hooks/internal/use-loose-context.mjs";
//#region src/components/icon-button/contexts.ts
/**
* Used to easily override the default color value of the icon button.
*/
const [IconButtonProvider, useIconButtonContext] = createLooseContext("AnyComponent");
//#endregion
export { IconButtonProvider, useIconButtonContext };

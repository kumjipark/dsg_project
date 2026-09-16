'use client';
import createLooseContext from "../../hooks/internal/use-loose-context.mjs";
//#region src/components/checkbox/contexts.ts
/**
* Used to easily override the default tight value of the checkbox.
*/
const [CheckboxProvider, useCheckboxContext] = createLooseContext("AnyComponent");
//#endregion
export { CheckboxProvider, useCheckboxContext };

'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/components/checkbox/contexts.ts
/**
* Used to easily override the default tight value of the checkbox.
*/
const [CheckboxProvider, useCheckboxContext] = require("../../hooks/internal/use-loose-context.js").default("AnyComponent");
//#endregion
exports.CheckboxProvider = CheckboxProvider;
exports.useCheckboxContext = useCheckboxContext;

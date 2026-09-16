'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/components/radio/contexts.ts
/**
* Used to easily override the default tight value of the radio.
*/
const [RadioProvider, useRadioContext] = require("../../hooks/internal/use-loose-context.js").default("AnyComponent");
//#endregion
exports.RadioProvider = RadioProvider;
exports.useRadioContext = useRadioContext;

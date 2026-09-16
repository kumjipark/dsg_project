'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/components/chip/contexts.ts
/**
* Used to easily override the default color value of the chip action.
*/
const [ChipProvider, useChipContext] = require("../../hooks/internal/use-loose-context.js").default("AnyComponent");
//#endregion
exports.ChipProvider = ChipProvider;
exports.useChipContext = useChipContext;

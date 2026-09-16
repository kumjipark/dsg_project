'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/components/text-button/contexts.ts
/**
* Used to easily override the default color value of the text button.
*/
const [TextButtonProvider, useTextButtonContext] = require("../../hooks/internal/use-loose-context.js").default("AnyComponent");
//#endregion
exports.TextButtonProvider = TextButtonProvider;
exports.useTextButtonContext = useTextButtonContext;

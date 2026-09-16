'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region src/components/icon-button/contexts.ts
/**
* Used to easily override the default color value of the icon button.
*/
const [IconButtonProvider, useIconButtonContext] = require("../../hooks/internal/use-loose-context.js").default("AnyComponent");
//#endregion
exports.IconButtonProvider = IconButtonProvider;
exports.useIconButtonContext = useIconButtonContext;

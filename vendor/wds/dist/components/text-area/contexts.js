'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_text_area_constants = require("./constants.js");
//#region src/components/text-area/contexts.ts
const [TextAreaProvider, useTextAreaContext] = (0, require("@radix-ui/react-context").createContext)(require_components_text_area_constants.TEXT_AREA_NAME);
//#endregion
exports.TextAreaProvider = TextAreaProvider;
exports.useTextAreaContext = useTextAreaContext;

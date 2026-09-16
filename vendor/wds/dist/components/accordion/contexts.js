'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_accordion_constants = require("./constants.js");
//#region src/components/accordion/contexts.ts
const [AccordionProvider, useAccordionContext] = (0, require("@radix-ui/react-context").createContext)(require_components_accordion_constants.ACCORDION_NAME);
//#endregion
exports.AccordionProvider = AccordionProvider;
exports.useAccordionContext = useAccordionContext;

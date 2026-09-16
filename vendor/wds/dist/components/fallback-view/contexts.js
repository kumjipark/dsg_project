'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_fallback_view_constants = require("./constants.js");
//#region src/components/fallback-view/contexts.ts
const [FallbackViewProvider, useFallbackViewContext] = (0, require("@radix-ui/react-context").createContext)(require_components_fallback_view_constants.FALLBACK_VIEW_NAME);
//#endregion
exports.FallbackViewProvider = FallbackViewProvider;
exports.useFallbackViewContext = useFallbackViewContext;

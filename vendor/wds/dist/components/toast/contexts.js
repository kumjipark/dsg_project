'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_toast_constants = require("./constants.js");
//#region src/components/toast/contexts.ts
const [ToastProvider, useToastContext] = (0, require("@radix-ui/react-context").createContext)(require_components_toast_constants.TOAST_NAME);
//#endregion
exports.ToastProvider = ToastProvider;
exports.useToastContext = useToastContext;

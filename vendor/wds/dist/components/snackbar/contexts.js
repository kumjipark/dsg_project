'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_snackbar_constants = require("./constants.js");
//#region src/components/snackbar/contexts.ts
const [SnackbarProvider, useSnackbarContext] = (0, require("@radix-ui/react-context").createContext)(require_components_snackbar_constants.SNACKBAR_NAME);
//#endregion
exports.SnackbarProvider = SnackbarProvider;
exports.useSnackbarContext = useSnackbarContext;

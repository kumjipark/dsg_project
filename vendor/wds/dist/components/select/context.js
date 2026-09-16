'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_select_constants = require("./constants.js");
//#region src/components/select/context.ts
const [SelectProvider, useSelectContext] = (0, require("@radix-ui/react-context").createContext)(require_components_select_constants.SELECT_NAME);
//#endregion
exports.SelectProvider = SelectProvider;
exports.useSelectContext = useSelectContext;

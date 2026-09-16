'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_list_constants = require("./constants.js");
//#region src/components/list/contexts.ts
const [ListCellProvider, useListCellContext] = (0, require("@radix-ui/react-context").createContext)(require_components_list_constants.LIST_CELL_NAME);
//#endregion
exports.ListCellProvider = ListCellProvider;
exports.useListCellContext = useListCellContext;

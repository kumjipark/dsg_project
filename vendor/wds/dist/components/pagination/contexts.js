'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_pagination_constants = require("./constants.js");
//#region src/components/pagination/contexts.ts
const [PaginationProvider, usePaginationContext] = (0, require("@radix-ui/react-context").createContext)(require_components_pagination_constants.PAGINATION_NAME);
//#endregion
exports.PaginationProvider = PaginationProvider;
exports.usePaginationContext = usePaginationContext;

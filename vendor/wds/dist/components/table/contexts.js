'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_table_constants = require("./constants.js");
//#region src/components/table/contexts.ts
const [TableProvider, useTableContext] = (0, require("@radix-ui/react-context").createContext)(require_components_table_constants.TABLE_NAME);
//#endregion
exports.TableProvider = TableProvider;
exports.useTableContext = useTableContext;

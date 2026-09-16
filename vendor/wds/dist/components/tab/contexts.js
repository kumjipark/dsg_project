'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_tab_constants = require("./constants.js");
let _radix_ui_react_context = require("@radix-ui/react-context");
//#region src/components/tab/contexts.ts
const [TabProvider, useTabContext] = (0, _radix_ui_react_context.createContext)("Tab");
const [TabListProvider, useTabListContext] = (0, _radix_ui_react_context.createContext)(require_components_tab_constants.TAB_LIST_NAME);
//#endregion
exports.TabListProvider = TabListProvider;
exports.TabProvider = TabProvider;
exports.useTabContext = useTabContext;
exports.useTabListContext = useTabListContext;

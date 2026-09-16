'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_category_constants = require("./constants.js");
let _radix_ui_react_context = require("@radix-ui/react-context");
//#region src/components/category/contexts.ts
const [CategoryProvider, useCategoryContext] = (0, _radix_ui_react_context.createContext)(require_components_category_constants.CATEGORY_NAME);
const [CategoryListProvider, useCategoryListContext] = (0, _radix_ui_react_context.createContext)(require_components_category_constants.CATEGORY_LIST_NAME);
//#endregion
exports.CategoryListProvider = CategoryListProvider;
exports.CategoryProvider = CategoryProvider;
exports.useCategoryContext = useCategoryContext;
exports.useCategoryListContext = useCategoryListContext;

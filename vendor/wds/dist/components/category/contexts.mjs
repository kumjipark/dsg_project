'use client';
import { CATEGORY_LIST_NAME, CATEGORY_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/category/contexts.ts
const [CategoryProvider, useCategoryContext] = createContext(CATEGORY_NAME);
const [CategoryListProvider, useCategoryListContext] = createContext(CATEGORY_LIST_NAME);
//#endregion
export { CategoryListProvider, CategoryProvider, useCategoryContext, useCategoryListContext };

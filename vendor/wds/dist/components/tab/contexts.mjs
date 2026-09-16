'use client';
import { TAB_LIST_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/tab/contexts.ts
const [TabProvider, useTabContext] = createContext("Tab");
const [TabListProvider, useTabListContext] = createContext(TAB_LIST_NAME);
//#endregion
export { TabListProvider, TabProvider, useTabContext, useTabListContext };

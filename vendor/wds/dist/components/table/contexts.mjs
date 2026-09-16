'use client';
import { TABLE_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/table/contexts.ts
const [TableProvider, useTableContext] = createContext(TABLE_NAME);
//#endregion
export { TableProvider, useTableContext };

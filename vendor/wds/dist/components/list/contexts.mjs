'use client';
import { LIST_CELL_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/list/contexts.ts
const [ListCellProvider, useListCellContext] = createContext(LIST_CELL_NAME);
//#endregion
export { ListCellProvider, useListCellContext };

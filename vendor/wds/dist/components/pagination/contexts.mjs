'use client';
import { PAGINATION_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/pagination/contexts.ts
const [PaginationProvider, usePaginationContext] = createContext(PAGINATION_NAME);
//#endregion
export { PaginationProvider, usePaginationContext };

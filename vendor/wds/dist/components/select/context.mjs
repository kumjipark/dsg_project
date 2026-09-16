'use client';
import { SELECT_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/select/context.ts
const [SelectProvider, useSelectContext] = createContext(SELECT_NAME);
//#endregion
export { SelectProvider, useSelectContext };

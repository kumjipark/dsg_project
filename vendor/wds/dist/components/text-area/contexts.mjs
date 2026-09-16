'use client';
import { TEXT_AREA_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/text-area/contexts.ts
const [TextAreaProvider, useTextAreaContext] = createContext(TEXT_AREA_NAME);
//#endregion
export { TextAreaProvider, useTextAreaContext };

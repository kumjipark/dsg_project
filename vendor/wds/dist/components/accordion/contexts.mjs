'use client';
import { ACCORDION_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/accordion/contexts.ts
const [AccordionProvider, useAccordionContext] = createContext(ACCORDION_NAME);
//#endregion
export { AccordionProvider, useAccordionContext };

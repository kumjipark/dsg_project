'use client';
import { FALLBACK_VIEW_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/fallback-view/contexts.ts
const [FallbackViewProvider, useFallbackViewContext] = createContext(FALLBACK_VIEW_NAME);
//#endregion
export { FallbackViewProvider, useFallbackViewContext };

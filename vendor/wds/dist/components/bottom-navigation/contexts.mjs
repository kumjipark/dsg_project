'use client';
import { BOTTOM_NAVIGATION_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/bottom-navigation/contexts.ts
const [BottomNavigationProvider, useBottomNavigationContext] = createContext(BOTTOM_NAVIGATION_NAME);
//#endregion
export { BottomNavigationProvider, useBottomNavigationContext };

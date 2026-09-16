'use client';
import { TIME_VIEW_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/time-view/contexts.tsx
const [TimeViewContextProvider, useTimeViewContext] = createContext(TIME_VIEW_NAME);
//#endregion
export { TimeViewContextProvider, useTimeViewContext };

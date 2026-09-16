'use client';
import { ACTION_AREA_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/action-area/contexts.ts
const [ActionAreaProvider, useActionAreaContext] = createContext(ACTION_AREA_NAME);
//#endregion
export { ActionAreaProvider, useActionAreaContext };

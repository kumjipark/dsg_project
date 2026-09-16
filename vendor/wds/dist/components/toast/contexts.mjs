'use client';
import { TOAST_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/toast/contexts.ts
const [ToastProvider, useToastContext] = createContext(TOAST_NAME);
//#endregion
export { ToastProvider, useToastContext };

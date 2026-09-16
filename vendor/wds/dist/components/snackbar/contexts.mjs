'use client';
import { SNACKBAR_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/snackbar/contexts.ts
const [SnackbarProvider, useSnackbarContext] = createContext(SNACKBAR_NAME);
//#endregion
export { SnackbarProvider, useSnackbarContext };

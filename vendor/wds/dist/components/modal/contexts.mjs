'use client';
import createLooseContext from "../../hooks/internal/use-loose-context.mjs";
import { MODAL_CONTAINER_NAME, MODAL_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/modal/contexts.ts
const [ModalProvider, useModalContext] = createContext(MODAL_NAME);
const [ModalDimmerProvider, useModalDimmerContext] = createContext(MODAL_CONTAINER_NAME);
const [ModalNavigationProvider, useModalNavigationContext] = createContext(MODAL_CONTAINER_NAME);
const [ModalActionAreaProvider, useModalActionAreaContext] = createLooseContext(MODAL_CONTAINER_NAME);
//#endregion
export { ModalActionAreaProvider, ModalDimmerProvider, ModalNavigationProvider, ModalProvider, useModalActionAreaContext, useModalContext, useModalDimmerContext, useModalNavigationContext };

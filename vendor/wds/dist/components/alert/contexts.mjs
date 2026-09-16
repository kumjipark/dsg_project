'use client';
import { ALERT_CONTAINER_NAME, ALERT_NAME } from "./constants.mjs";
import { createContext } from "@radix-ui/react-context";
//#region src/components/alert/contexts.ts
const [AlertProvider, useAlertContext] = createContext(ALERT_NAME);
const [AlertContainerProvider, useAlertContainerContext] = createContext(ALERT_CONTAINER_NAME);
//#endregion
export { AlertContainerProvider, AlertProvider, useAlertContainerContext, useAlertContext };

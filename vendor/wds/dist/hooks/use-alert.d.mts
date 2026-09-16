import { AlertItem, AlertReturnType } from "../stores/alert-store.mjs";

//#region src/hooks/use-alert.d.ts
declare const useAlert: () => (item: Omit<AlertItem, "id" | "resolve">) => Promise<AlertReturnType>;
//#endregion
export { useAlert as default };
import { RegionToastItem } from "../stores/region-store.mjs";

//#region src/hooks/use-toast.d.ts
declare const useToast: () => (item: Omit<RegionToastItem, "type">) => void;
//#endregion
export { useToast as default };
import { RegionToastItem } from "../stores/region-store.js";

//#region src/hooks/use-toast.d.ts
declare const useToast: () => (item: Omit<RegionToastItem, "type">) => void;
//#endregion
export { useToast as default };
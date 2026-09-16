import { RegionSnackbarItem } from "../stores/region-store.js";

//#region src/hooks/use-snackbar.d.ts
declare const useSnackbar: () => (item: Omit<RegionSnackbarItem, "type">) => void;
//#endregion
export { useSnackbar as default };
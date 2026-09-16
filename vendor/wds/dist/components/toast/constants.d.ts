import { RegionToastItem } from "../../stores/region-store.js";
import { ReactNode } from "react";

//#region src/components/toast/constants.d.ts
declare const toastIconComponent: { [key in Exclude<RegionToastItem['variant'], undefined>]: ReactNode };
declare const TOAST_NAME = "Toast";
declare const TOAST_CONTAINER_NAME = "ToastContainer";
declare const TOAST_CONTENT_NAME = "ToastContent";
declare const TOAST_ICON_NAME = "ToastIcon";
//#endregion
export { TOAST_CONTAINER_NAME, TOAST_CONTENT_NAME, TOAST_ICON_NAME, TOAST_NAME, toastIconComponent };
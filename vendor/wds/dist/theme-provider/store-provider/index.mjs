import { AlertContext, createAlertStore } from "../../stores/alert-store.mjs";
import { RegionContext, createRegionStore } from "../../stores/region-store.mjs";
import RegionArea from "./region.mjs";
import AlertArea from "./alert.mjs";
import { useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/theme-provider/store-provider/index.tsx
const StoreProvider = ({ children }) => {
	const regionStoreRef = useRef(void 0);
	const dialogStoreRef = useRef(void 0);
	if (!regionStoreRef.current) regionStoreRef.current = createRegionStore();
	if (!dialogStoreRef.current) dialogStoreRef.current = createAlertStore();
	return /* @__PURE__ */ jsx(AlertContext.Provider, {
		value: dialogStoreRef.current,
		children: /* @__PURE__ */ jsxs(RegionContext.Provider, {
			value: regionStoreRef.current,
			children: [
				children,
				/* @__PURE__ */ jsx(RegionArea, {}),
				/* @__PURE__ */ jsx(AlertArea, {})
			]
		})
	});
};
//#endregion
export { StoreProvider as default };

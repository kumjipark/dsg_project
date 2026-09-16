Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
require("../../_virtual/_rolldown/runtime.js");
const require_stores_alert_store = require("../../stores/alert-store.js");
const require_stores_region_store = require("../../stores/region-store.js");
const require_theme_provider_store_provider_region = require("./region.js");
const require_theme_provider_store_provider_alert = require("./alert.js");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");
//#region src/theme-provider/store-provider/index.tsx
const StoreProvider = ({ children }) => {
	const regionStoreRef = (0, react.useRef)(void 0);
	const dialogStoreRef = (0, react.useRef)(void 0);
	if (!regionStoreRef.current) regionStoreRef.current = require_stores_region_store.createRegionStore();
	if (!dialogStoreRef.current) dialogStoreRef.current = require_stores_alert_store.createAlertStore();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_stores_alert_store.AlertContext.Provider, {
		value: dialogStoreRef.current,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(require_stores_region_store.RegionContext.Provider, {
			value: regionStoreRef.current,
			children: [
				children,
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_theme_provider_store_provider_region.default, {}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(require_theme_provider_store_provider_alert.default, {})
			]
		})
	});
};
//#endregion
exports.default = StoreProvider;

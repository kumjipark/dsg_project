'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
const require_stores_region_store = require("../stores/region-store.js");
//#region src/hooks/use-snackbar.ts
const useSnackbar = () => {
	const storeAdd = require_stores_region_store.useRegionStore((state) => state.add);
	const add = (item) => storeAdd({
		type: "snackbar",
		...item
	});
	return add;
};
//#endregion
exports.default = useSnackbar;

'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
const require_stores_region_store = require("../stores/region-store.js");
//#region src/hooks/use-toast.ts
const useToast = () => {
	const storeAdd = require_stores_region_store.useRegionStore((state) => state.add);
	const add = (item) => storeAdd({
		type: "toast",
		...item
	});
	return add;
};
//#endregion
exports.default = useToast;

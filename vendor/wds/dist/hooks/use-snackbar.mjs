'use client';
import { useRegionStore } from "../stores/region-store.mjs";
//#region src/hooks/use-snackbar.ts
const useSnackbar = () => {
	const storeAdd = useRegionStore((state) => state.add);
	const add = (item) => storeAdd({
		type: "snackbar",
		...item
	});
	return add;
};
//#endregion
export { useSnackbar as default };

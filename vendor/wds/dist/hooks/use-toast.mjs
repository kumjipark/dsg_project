'use client';
import { useRegionStore } from "../stores/region-store.mjs";
//#region src/hooks/use-toast.ts
const useToast = () => {
	const storeAdd = useRegionStore((state) => state.add);
	const add = (item) => storeAdd({
		type: "toast",
		...item
	});
	return add;
};
//#endregion
export { useToast as default };

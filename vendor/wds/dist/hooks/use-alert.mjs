'use client';
import { useAlertStore } from "../stores/alert-store.mjs";
//#region src/hooks/use-alert.ts
const useAlert = () => {
	const storeShow = useAlertStore((state) => state.show);
	const show = (item) => new Promise((resolve) => {
		storeShow({
			resolve,
			...item
		});
	});
	return show;
};
//#endregion
export { useAlert as default };

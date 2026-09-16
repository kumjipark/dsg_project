'use client';
Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
const require_stores_alert_store = require("../stores/alert-store.js");
//#region src/hooks/use-alert.ts
const useAlert = () => {
	const storeShow = require_stores_alert_store.useAlertStore((state) => state.show);
	const show = (item) => new Promise((resolve) => {
		storeShow({
			resolve,
			...item
		});
	});
	return show;
};
//#endregion
exports.default = useAlert;

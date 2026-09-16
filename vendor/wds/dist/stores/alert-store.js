'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../_virtual/_rolldown/runtime.js");
const require_stores_helpers = require("./helpers.js");
let react = require("react");
let zustand_vanilla = require("zustand/vanilla");
let zustand = require("zustand");
//#region src/stores/alert-store.ts
const defaultInitState = { items: [] };
const createAlertStore = (initState = defaultInitState) => {
	return (0, zustand_vanilla.createStore)()((set) => ({
		...initState,
		show: (item) => set((state) => ({ items: [...state.items, {
			id: require_stores_helpers.generateId(),
			...item
		}] })),
		hide: (id) => set((state) => ({ items: state.items.filter(({ id: diffId }) => diffId !== id) }))
	}));
};
const AlertContext = (0, react.createContext)(null);
const useAlertStore = (selector) => {
	const context = (0, react.useContext)(AlertContext);
	if (!context) throw new Error(`useAlertStore must be use within AlertProvider`);
	return (0, zustand.useStore)(context, selector);
};
//#endregion
exports.AlertContext = AlertContext;
exports.createAlertStore = createAlertStore;
exports.defaultInitState = defaultInitState;
exports.useAlertStore = useAlertStore;

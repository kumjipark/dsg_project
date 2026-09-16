'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../_virtual/_rolldown/runtime.js");
const require_stores_helpers = require("./helpers.js");
let react = require("react");
let zustand_vanilla = require("zustand/vanilla");
let zustand = require("zustand");
//#region src/stores/region-store.ts
const defaultInitState = {
	items: [],
	config: {
		viewportMaxWidth: "1060px",
		viewportBottom: "0px"
	}
};
const createRegionStore = (initState = defaultInitState) => {
	return (0, zustand_vanilla.createStore)()((set) => ({
		...initState,
		add: (item) => set((state) => {
			const id = item.id ?? require_stores_helpers.generateId();
			if (state.items.find((v) => v.id === id)) return state;
			return { items: [...state.items, {
				...item,
				visibility: "visible",
				id
			}] };
		}),
		removeAll: () => set(() => ({ items: [] })),
		remove: (id) => set((state) => ({ items: state.items.filter(({ id: diffId }) => diffId !== id) })),
		hide: (id) => set((state) => ({ items: state.items.map((item) => item.id === id ? {
			...item,
			visibility: "hidden"
		} : item) })),
		hideAll: () => set((state) => ({ items: state.items.map((item) => ({
			...item,
			visibility: "hidden"
		})) })),
		setConfig: (config) => set((state) => ({ config: {
			...state.config,
			...config
		} }))
	}));
};
const RegionContext = (0, react.createContext)(null);
const useRegionStore = (selector) => {
	const context = (0, react.useContext)(RegionContext);
	if (!context) throw new Error(`useRegionStore must be use within RegionProvider`);
	return (0, zustand.useStore)(context, selector);
};
//#endregion
exports.RegionContext = RegionContext;
exports.createRegionStore = createRegionStore;
exports.defaultInitState = defaultInitState;
exports.useRegionStore = useRegionStore;

'use client';
import { generateId } from "./helpers.mjs";
import { createContext, useContext } from "react";
import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
//#region src/stores/region-store.ts
const defaultInitState = {
	items: [],
	config: {
		viewportMaxWidth: "1060px",
		viewportBottom: "0px"
	}
};
const createRegionStore = (initState = defaultInitState) => {
	return createStore()((set) => ({
		...initState,
		add: (item) => set((state) => {
			const id = item.id ?? generateId();
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
const RegionContext = createContext(null);
const useRegionStore = (selector) => {
	const context = useContext(RegionContext);
	if (!context) throw new Error(`useRegionStore must be use within RegionProvider`);
	return useStore(context, selector);
};
//#endregion
export { RegionContext, createRegionStore, defaultInitState, useRegionStore };

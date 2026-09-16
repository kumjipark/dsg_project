'use client';
import { generateId } from "./helpers.mjs";
import { createContext, useContext } from "react";
import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
//#region src/stores/alert-store.ts
const defaultInitState = { items: [] };
const createAlertStore = (initState = defaultInitState) => {
	return createStore()((set) => ({
		...initState,
		show: (item) => set((state) => ({ items: [...state.items, {
			id: generateId(),
			...item
		}] })),
		hide: (id) => set((state) => ({ items: state.items.filter(({ id: diffId }) => diffId !== id) }))
	}));
};
const AlertContext = createContext(null);
const useAlertStore = (selector) => {
	const context = useContext(AlertContext);
	if (!context) throw new Error(`useAlertStore must be use within AlertProvider`);
	return useStore(context, selector);
};
//#endregion
export { AlertContext, createAlertStore, defaultInitState, useAlertStore };

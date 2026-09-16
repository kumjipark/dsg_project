import { TextButton } from "../components/text-button/index.js";
import * as _$react from "react";
import { ComponentProps, ReactNode } from "react";
import { StoreApi } from "zustand";

//#region src/stores/region-store.d.ts
type UseRegionStoreAddDuration = number | 'short' | 'long';
type RegionToastItem = {
  id?: string;
  type: 'toast';
  duration?: UseRegionStoreAddDuration;
  variant?: 'normal' | 'positive' | 'cautionary' | 'negative';
  icon?: ReactNode;
  content: ReactNode;
  onAnimationEnd?: (type: 'hide' | 'show') => void;
};
type RegionSnackbarItem = {
  id?: string;
  type: 'snackbar';
  duration?: UseRegionStoreAddDuration;
  variant?: 'normal';
  title?: ReactNode;
  description?: ReactNode;
  extraContent?: ReactNode;
  action: ComponentProps<typeof TextButton>;
  closeButton?: boolean;
  onAnimationEnd?: (type: 'hide' | 'show') => void;
};
type RegionItem = RegionToastItem | RegionSnackbarItem;
type WithSystemRegionStoreItem<T extends RegionItem> = T & {
  visibility?: 'visible' | 'hidden';
};
type RegionState = {
  items: Array<WithSystemRegionStoreItem<RegionItem>>;
  config: {
    viewportMaxWidth: string | number;
    viewportBottom: string | number;
  };
};
type RegionActions = {
  setConfig: (config: Partial<RegionState['config']>) => void;
  add: (item: RegionItem) => void;
  remove: (id: RegionItem['id']) => void;
  removeAll: () => void;
  hide: (id: RegionItem['id']) => void;
  hideAll: () => void;
};
type RegionStore = RegionState & RegionActions;
declare const defaultInitState: RegionState;
declare const createRegionStore: (initState?: RegionState) => StoreApi<RegionStore>;
declare const RegionContext: _$react.Context<StoreApi<RegionStore> | null>;
declare const useRegionStore: <T>(selector: (store: RegionStore) => T) => T;
//#endregion
export { RegionActions, RegionContext, RegionItem, RegionSnackbarItem, RegionState, RegionStore, RegionToastItem, UseRegionStoreAddDuration, WithSystemRegionStoreItem, createRegionStore, defaultInitState, useRegionStore };
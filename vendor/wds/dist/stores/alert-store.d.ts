import * as _$react from "react";
import { ReactNode } from "react";
import { SxProp } from "@wanteddev/wds-engine";
import { StoreApi } from "zustand";

//#region src/stores/alert-store.d.ts
type AlertReturnType = 'cancel' | 'confirm';
type AlertItem = {
  id: string;
  title?: ReactNode;
  content: ReactNode;
  direction?: 'normal' | 'reverse';
  disableOutsideClickClose?: boolean;
  disableEscapeKeyDownClose?: boolean;
  resolve: (value: AlertReturnType | PromiseLike<AlertReturnType>) => void;
  confirm: ReactNode;
  cancel?: ReactNode;
  sx?: SxProp;
};
type AlertState = {
  items: Array<AlertItem>;
};
type AlertActions = {
  show: (item: Omit<AlertItem, 'id'>) => void;
  hide: (id: AlertItem['id']) => void;
};
type AlertStore = AlertState & AlertActions;
declare const defaultInitState: AlertState;
declare const createAlertStore: (initState?: AlertState) => StoreApi<AlertStore>;
declare const AlertContext: _$react.Context<StoreApi<AlertStore> | null>;
declare const useAlertStore: <T>(selector: (store: AlertStore) => T) => T;
//#endregion
export { AlertActions, AlertContext, AlertItem, AlertReturnType, AlertState, AlertStore, createAlertStore, defaultInitState, useAlertStore };
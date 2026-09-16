import { TabListItemProps, TabListProps, TabPanelProps, TabProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/tab/index.d.ts
declare const Tab: {
  ({
    defaultValue,
    value: valueProp,
    onValueChange,
    children,
    disableScrollMoveOnChange
  }: TabProps): _$react_jsx_runtime0.JSX.Element;
  displayName: string;
};
declare const TabList: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TabListProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const TabListItem: PolymorphicComponentInternal<TabListItemProps, "div">;
declare const TabPanel: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TabPanelProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Tab, TabList, TabListItem, type TabListItemProps, type TabListProps, TabPanel, type TabPanelProps, type TabProps };
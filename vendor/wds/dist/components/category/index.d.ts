import { CategoryListItemProps, CategoryListProps, CategoryPanelProps, CategoryProps } from "./types.js";
import * as _$react from "react";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/components/category/index.d.ts
declare const Category: {
  ({
    defaultValue,
    value: valueProp,
    onValueChange,
    children,
    disableScrollMoveOnChange
  }: CategoryProps): _$react_jsx_runtime0.JSX.Element;
  displayName: string;
};
declare const CategoryList: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<CategoryListProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const CategoryListItem: PolymorphicComponentInternal<CategoryListItemProps, "button">;
declare const CategoryPanel: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<CategoryPanelProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Category, CategoryList, CategoryListItem, type CategoryListItemProps, type CategoryListProps, CategoryPanel, type CategoryPanelProps, type CategoryProps };
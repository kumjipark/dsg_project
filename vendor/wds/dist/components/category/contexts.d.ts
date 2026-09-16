import { CategoryListProps } from "./types.js";
import * as _$react from "react";
import { Dispatch, SetStateAction } from "react";
import { BreakPoint } from "@wanteddev/wds-engine";

//#region src/components/category/contexts.d.ts
type CategoryContextType = {
  value?: string;
  onValueChange: (value: string) => void;
  id: string;
  panels: Array<string>;
  onPanelsChange: Dispatch<SetStateAction<Array<string>>>;
  disableScrollMoveOnChange?: boolean;
  viewportNode: HTMLDivElement | null;
  onViewportNodeChange: (node: HTMLDivElement) => void;
};
declare const CategoryProvider: _$react.FC<CategoryContextType & {
    children: React.ReactNode;
  }>, useCategoryContext: (consumerName: string) => CategoryContextType;
type CategoryListContextType = {
  handleResize: () => void;
  variant: CategoryListProps['variant'];
  size: CategoryListProps['size'];
  responsive?: Pick<CategoryListProps, keyof BreakPoint>;
};
declare const CategoryListProvider: _$react.FC<CategoryListContextType & {
    children: React.ReactNode;
  }>, useCategoryListContext: (consumerName: string) => CategoryListContextType;
//#endregion
export { CategoryContextType, CategoryListContextType, CategoryListProvider, CategoryProvider, useCategoryContext, useCategoryListContext };
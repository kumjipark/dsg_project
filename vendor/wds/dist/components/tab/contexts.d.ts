import * as _$react from "react";
import { Dispatch, SetStateAction } from "react";

//#region src/components/tab/contexts.d.ts
type TabContextType = {
  value?: string;
  onValueChange: (value: string) => void;
  id: string;
  panels: Array<string>;
  onPanelsChange: Dispatch<SetStateAction<Array<string>>>;
  disableScrollMoveOnChange?: boolean;
  viewportNode: HTMLDivElement | null;
  onViewportNodeChange: (node: HTMLDivElement) => void;
};
declare const TabProvider: _$react.FC<TabContextType & {
    children: React.ReactNode;
  }>, useTabContext: (consumerName: string) => TabContextType;
type TabListContextType = {
  handleResize: () => void;
};
declare const TabListProvider: _$react.FC<TabListContextType & {
    children: React.ReactNode;
  }>, useTabListContext: (consumerName: string) => TabListContextType;
//#endregion
export { TabContextType, TabListContextType, TabListProvider, TabProvider, useTabContext, useTabListContext };
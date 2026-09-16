import * as _$react from "react";

//#region src/components/table/contexts.d.ts
type TableContextType = {
  isSticky: boolean;
};
declare const TableProvider: _$react.FC<TableContextType & {
    children: React.ReactNode;
  }>, useTableContext: (consumerName: string) => TableContextType;
//#endregion
export { TableProvider, useTableContext };
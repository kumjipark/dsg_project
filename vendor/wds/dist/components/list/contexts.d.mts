import { ListCellProps } from "./types.mjs";
import * as _$react from "react";

//#region src/components/list/contexts.d.ts
type ListCellContextType = Required<Pick<ListCellProps, 'selected' | 'disabled' | 'ellipsis' | 'alignItems'>> & {
  textId: string;
  captionId: string;
};
declare const ListCellProvider: _$react.FC<Required<Pick<ListCellProps, "disabled" | "ellipsis" | "selected" | "alignItems">> & {
    textId: string;
    captionId: string;
  } & {
    children: React.ReactNode;
  }>, useListCellContext: (consumerName: string) => ListCellContextType;
//#endregion
export { ListCellProvider, useListCellContext };
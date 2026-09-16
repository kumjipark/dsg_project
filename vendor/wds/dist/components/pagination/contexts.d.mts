import * as _$react from "react";

//#region src/components/pagination/contexts.d.ts
type PaginationContextType = {
  id: string;
  totalPages: number;
  disabled: boolean;
  setPage: (page: number) => void;
};
declare const PaginationProvider: _$react.FC<PaginationContextType & {
    children: React.ReactNode;
  }>, usePaginationContext: (consumerName: string) => PaginationContextType;
//#endregion
export { PaginationProvider, usePaginationContext };
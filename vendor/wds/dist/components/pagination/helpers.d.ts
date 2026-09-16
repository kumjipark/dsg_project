import { PaginationDefaultProps } from "./types.js";

//#region src/components/pagination/helpers.d.ts
type GetPaginationItem = {
  type: 'page' | 'ellipsis';
  page?: number;
};
type GetPaginationItemsParams = Pick<PaginationDefaultProps, 'defaultPage' | 'page' | 'totalPages' | 'boundaryPages' | 'siblingPages'>;
declare const getPaginationItems: ({
  defaultPage,
  page,
  totalPages,
  boundaryPages,
  siblingPages
}: GetPaginationItemsParams) => GetPaginationItem[];
//#endregion
export { GetPaginationItem, getPaginationItems };
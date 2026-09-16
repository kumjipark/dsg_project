//#region src/components/pagination-dots/helpers.d.ts
declare const getPaginationDotsVisibleArea: ({
  maxDotCount,
  totalPages,
  currentPage
}: {
  maxDotCount: number;
  currentPage: number;
  totalPages: number;
}) => [number, number];
type GetPaginationDotScaleParams = {
  index: number;
  visibleArea: [number, number];
  maxDotCount: number;
  totalPages: number;
};
declare const getPaginationDotScale: ({
  index,
  visibleArea,
  maxDotCount,
  totalPages
}: GetPaginationDotScaleParams) => 1 | 0 | 0.8 | 0.6;
//#endregion
export { getPaginationDotScale, getPaginationDotsVisibleArea };
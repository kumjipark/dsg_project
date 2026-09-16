import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";

//#region src/components/page-counter/types.d.ts
type PageCounterDefaultProps = WithSxProps<{
  size?: 'small' | 'medium'; /** The total number of pages. */
  totalPages: number; /** The current page number. */
  currentPage?: number; /** If true, renders a fallback style that looks natural in environments where `blur` is not supported. */
  alternative?: boolean;
}>;
type PageCounterResponsiveProps = ResponsiveProps<Pick<PageCounterDefaultProps, 'size'>>;
type PageCounterProps = Merge<PageCounterDefaultProps, PageCounterResponsiveProps>;
//#endregion
export { PageCounterProps };
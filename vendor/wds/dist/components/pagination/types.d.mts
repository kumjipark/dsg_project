import { FlexBoxProps } from "../flex-box/types.mjs";
import { TextFieldProps } from "../text-field/types.mjs";
import { MenuContent } from "../menu/index.mjs";
import { Merge, WithSxProps } from "@wanteddev/wds-engine";
import { ComponentPropsWithoutRef, ReactNode } from "react";

//#region src/components/pagination/types.d.ts
type PaginationProps = Merge<PaginationDefaultProps, FlexBoxProps>;
type PaginationDefaultProps = WithSxProps<{
  /**
   * The variant of the pagination.
   * `leadingContent` and `trailingContent` are only available when the variant is `extended`.
   */
  variant?: 'extended' | 'minimize' | 'compact'; /** The default page number. */
  defaultPage?: number; /** The current page number. */
  page?: number; /** The total number of pages. */
  totalPages?: number; /** The number of pages always displayed at the beginning and end. */
  boundaryPages?: number; /** The number of pages displayed around the current page. */
  siblingPages?: number; /** Whether to disable the pagination. */
  disabled?: boolean; /** Content displayed in the leading area. Pass an element `PaginationSelect` or `PaginationField`. */
  leadingContent?: ReactNode; /** Content displayed in the trailing area. Pass an element `PaginationSelect` or `PaginationField`. */
  trailingContent?: ReactNode; /** Whether to hide the previous button. */
  hidePrevButton?: boolean; /** Whether to hide the next button. */
  hideNextButton?: boolean; /** Callback function when the page changes. */
  onChange?: (page?: number) => void;
  children?: ReactNode;
}>;
type PaginationItemProps = {
  type: 'page' | 'ellipsis';
  page: number;
  itemPage?: number;
  disabled: boolean;
  onPageChange: (page: number) => void;
};
type PaginationFieldDefaultProps = WithSxProps<{
  label?: string;
  disabled?: boolean;
}>;
type PaginationFieldProps = Merge<PaginationFieldDefaultProps, TextFieldProps>;
type PaginationSelectDefaultProps = WithSxProps<{
  /** The default number of items displayed per page. */defaultPageSize?: number; /** The number of items displayed per page. */
  pageSize?: number; /** The options of the number of items displayed per page. */
  pageSizeOptions?: Array<number>; /** The label of the number of items displayed per page. */
  label?: string;
  disabled?: boolean; /** The function to render the number of items displayed per page. */
  optionRender?: (pageSize: number) => ReactNode; /** Callback function when the number of items displayed per page changes. */
  onChange?: (pageSize?: number) => void; /** Whether the number of items displayed per page is open. */
  open?: boolean; /** Callback function when the number of items displayed per page is open. */
  onOpenChange?: (open: boolean) => void; /** Whether the number of items displayed per page is open by default. */
  defaultOpen?: boolean; /** The props of the content. */
  contentProps?: ComponentPropsWithoutRef<typeof MenuContent>;
}>;
type PaginationSelectProps = Merge<PaginationSelectDefaultProps, FlexBoxProps>;
//#endregion
export { PaginationDefaultProps, PaginationFieldDefaultProps, PaginationFieldProps, PaginationItemProps, PaginationProps, PaginationSelectDefaultProps, PaginationSelectProps };
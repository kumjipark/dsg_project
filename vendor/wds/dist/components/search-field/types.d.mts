import { Merge, ResponsiveProps, WithSxProps } from "@wanteddev/wds-engine";
import { CSSProperties, Ref } from "react";

//#region src/components/search-field/types.d.ts
type SearchFieldDefaultProps = WithSxProps<{
  disabled?: boolean; /** The width of the search field. */
  width?: CSSProperties['width']; /** Callback function when the reset button is clicked. */
  onReset?: (prevValue: string) => void; /** The ref of the wrapper. */
  wrapperRef?: Ref<HTMLDivElement>; /** The size of the search field. */
  size?: 'medium' | 'small';
}>;
type SearchFieldResponsiveProps = ResponsiveProps<Pick<SearchFieldDefaultProps, 'width' | 'size'>>;
type SearchFieldProps = Merge<SearchFieldDefaultProps, SearchFieldResponsiveProps>;
//#endregion
export { SearchFieldDefaultProps, SearchFieldProps, SearchFieldResponsiveProps };
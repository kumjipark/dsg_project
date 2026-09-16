import { SearchFieldProps } from "./types.js";
import { SerializedStyles, Theme } from "@wanteddev/wds-engine";

//#region src/components/search-field/style.d.ts
type SearchFieldWrapperStyleProps = SearchFieldProps & {
  readOnly?: boolean;
};
declare const searchFieldWrapperStyle: ({
  readOnly,
  disabled,
  width,
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: SearchFieldWrapperStyleProps) => (theme: Theme) => SerializedStyles;
declare const searchFieldContentStyle: SerializedStyles;
//#endregion
export { searchFieldContentStyle, searchFieldWrapperStyle };
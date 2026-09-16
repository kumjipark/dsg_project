import { CategoryListProps } from "./types.js";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { ResponsiveProps, Theme } from "@wanteddev/wds-engine";

//#region src/components/category/style.d.ts
declare const categoryListStyle: ({
  isScrollableLeft,
  isScrollableRight,
  horizontalPadding,
  verticalPadding,
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: CategoryListProps & {
  isScrollableLeft: boolean;
  isScrollableRight: boolean;
}) => (theme: Theme) => SerializedStyles$1;
declare const scrollWrapperStyle: SerializedStyles$1;
declare const categoryListItemStyle: ({
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: Pick<CategoryListProps, "size"> & ResponsiveProps<Pick<CategoryListProps, "size">>) => (theme: Theme) => SerializedStyles$1;
declare const stickyButtonStyle: SerializedStyles$1;
//#endregion
export { categoryListItemStyle, categoryListStyle, scrollWrapperStyle, stickyButtonStyle };
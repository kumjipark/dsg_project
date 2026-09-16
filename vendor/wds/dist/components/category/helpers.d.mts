import { CategoryListItemProps } from "./types.mjs";
import { CSSInterpolation } from "../../node_modules/.pnpm/@emotion_serialize@1.3.3/node_modules/@emotion/serialize/dist/declarations/src/index.mjs";
import { CategoryListContextType } from "./contexts.mjs";

//#region src/components/category/helpers.d.ts
declare const getCategoryListItemSize: (context: Pick<CategoryListContextType, "size" | "responsive">, {
  xs,
  sm,
  md,
  lg,
  xl
}: Partial<CategoryListItemProps>) => {
  size: "small" | "medium" | "large" | "xlarge" | undefined;
  xs: {
    sx?: CSSInterpolation;
    size: "small" | "medium" | "large" | "xlarge" | undefined;
  };
  sm: {
    sx?: CSSInterpolation;
    size: "small" | "medium" | "large" | "xlarge" | undefined;
  };
  md: {
    sx?: CSSInterpolation;
    size: "small" | "medium" | "large" | "xlarge" | undefined;
  };
  lg: {
    sx?: CSSInterpolation;
    size: "small" | "medium" | "large" | "xlarge" | undefined;
  };
  xl: {
    sx?: CSSInterpolation;
    size: "small" | "medium" | "large" | "xlarge" | undefined;
  };
};
//#endregion
export { getCategoryListItemSize };
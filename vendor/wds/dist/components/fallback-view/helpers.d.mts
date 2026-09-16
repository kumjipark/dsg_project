import { FallbackViewButtonProps } from "./types.mjs";
import { CSSInterpolation } from "../../node_modules/.pnpm/@emotion_serialize@1.3.3/node_modules/@emotion/serialize/dist/declarations/src/index.mjs";
import { FallbackViewContextType } from "./contexts.mjs";

//#region src/components/fallback-view/helpers.d.ts
declare const getFallbackViewButtonSize: (context: FallbackViewContextType, {
  size,
  xs,
  sm,
  md,
  lg,
  xl
}: FallbackViewButtonProps) => {
  size: "small" | "medium" | "large" | undefined;
  xs: {
    size: "small" | "medium" | "large";
    fullWidth?: boolean;
    sx?: CSSInterpolation;
  };
  sm: {
    size: "small" | "medium" | "large";
    fullWidth?: boolean;
    sx?: CSSInterpolation;
  };
  md: {
    size: "small" | "medium" | "large";
    fullWidth?: boolean;
    sx?: CSSInterpolation;
  };
  lg: {
    size: "small" | "medium" | "large";
    fullWidth?: boolean;
    sx?: CSSInterpolation;
  };
  xl: {
    size: "small" | "medium" | "large";
    fullWidth?: boolean;
    sx?: CSSInterpolation;
  };
};
//#endregion
export { getFallbackViewButtonSize };
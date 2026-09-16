import { TopNavigationProps } from "./types.mjs";
import { SerializedStyles as SerializedStyles$1 } from "../../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.mjs";
import { Theme } from "@wanteddev/wds-engine";

//#region src/components/top-navigation/style.d.ts
declare const topNavigationStyle: ({
  background,
  variant,
  xs,
  sm,
  md,
  lg,
  xl
}: TopNavigationProps) => (theme: Theme) => SerializedStyles$1;
declare const topNavigationWrapperStyle: (variant: TopNavigationProps["variant"]) => SerializedStyles$1 | undefined;
declare const topNavigationFloatingBackgroundStyle: (theme: Theme) => SerializedStyles$1;
declare const topNavigationTitleStyle: (variant?: TopNavigationProps["variant"]) => SerializedStyles$1;
declare const topNavigationRightIconStyle: (variant?: TopNavigationProps["variant"]) => SerializedStyles$1 | undefined;
declare const topNavigationLeftIconStyle: (variant?: TopNavigationProps["variant"]) => SerializedStyles$1 | undefined;
declare const topNavigationButtonTextStyle: SerializedStyles$1;
//#endregion
export { topNavigationButtonTextStyle, topNavigationFloatingBackgroundStyle, topNavigationLeftIconStyle, topNavigationRightIconStyle, topNavigationStyle, topNavigationTitleStyle, topNavigationWrapperStyle };
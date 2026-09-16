import { TypographyProps } from "./types.mjs";
import { PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/typography/index.d.ts
declare const Typography: PolymorphicComponentInternal<TypographyProps, "span">;
//#endregion
export { Typography, type TypographyProps };
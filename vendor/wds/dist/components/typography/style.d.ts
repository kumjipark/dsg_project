import { TypographyVariant, TypographyWeight } from "./types.js";
import { SerializedStyles } from "@wanteddev/wds-engine";

//#region src/components/typography/style.d.ts
declare const variantMap: { [key in TypographyVariant]: SerializedStyles };
declare const getWeightMap: (variant: TypographyVariant) => { [key in TypographyWeight]: SerializedStyles };
//#endregion
export { getWeightMap, variantMap };
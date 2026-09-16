import { SerializedStyles } from "../node_modules/.pnpm/@emotion_utils@1.4.2/node_modules/@emotion/utils/dist/declarations/src/types.js";
import { getWeightMap, variantMap } from "../components/typography/style.js";

//#region src/utils/typography.d.ts
declare const typographyStyle: (variant: keyof typeof variantMap, weight?: keyof ReturnType<typeof getWeightMap>) => SerializedStyles;
declare const ellipsisTypographyStyle: (line?: number) => SerializedStyles;
declare const listStyle: SerializedStyles;
//#endregion
export { ellipsisTypographyStyle, listStyle, typographyStyle };
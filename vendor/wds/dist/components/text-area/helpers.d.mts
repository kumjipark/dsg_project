import { TextAreaProps } from "./types.mjs";
import { CSSProperties } from "react";

//#region src/components/text-area/helpers.d.ts
declare const getTextAreaDefaultHeight: ({
  minRows
}: Pick<TextAreaProps, "minRows">) => CSSProperties;
//#endregion
export { getTextAreaDefaultHeight };
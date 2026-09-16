import { TextAreaProps } from "./types.js";
import { CSSProperties } from "react";

//#region src/components/text-area/helpers.d.ts
declare const getTextAreaDefaultHeight: ({
  minRows
}: Pick<TextAreaProps, "minRows">) => CSSProperties;
//#endregion
export { getTextAreaDefaultHeight };
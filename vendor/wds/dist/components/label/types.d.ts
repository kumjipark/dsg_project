import { TypographyProps } from "../typography/types.js";
import { Merge } from "@wanteddev/wds-engine";

//#region src/components/label/types.d.ts
type LabelProps = Merge<{
  /**
   * If true, displays an asterisk (*) to indicate the field is required.
   */
  required?: boolean;
}, TypographyProps>;
//#endregion
export { LabelProps };
import { ButtonProps } from "./types.js";
import { PolymorphicComponentInternal } from "@wanteddev/wds-engine";

//#region src/components/button/index.d.ts
declare const Button: PolymorphicComponentInternal<ButtonProps, "button">;
//#endregion
export { Button, type ButtonProps };
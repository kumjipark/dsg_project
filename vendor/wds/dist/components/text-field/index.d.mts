import { TextFieldButtonProps, TextFieldContentProps, TextFieldProps } from "./types.mjs";
import { DefaultComponentPropsInternal, PolymorphicComponentInternal } from "@wanteddev/wds-engine";
import * as _$react from "react";

//#region src/components/text-field/index.d.ts
declare const TextField: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TextFieldProps, "input">, "ref"> & _$react.RefAttributes<HTMLInputElement>>;
declare const TextFieldContent: _$react.ForwardRefExoticComponent<Omit<DefaultComponentPropsInternal<TextFieldContentProps, "div">, "ref"> & _$react.RefAttributes<HTMLDivElement>>;
declare const TextFieldButton: PolymorphicComponentInternal<TextFieldButtonProps, "button">;
//#endregion
export { TextField, TextFieldButton, type TextFieldButtonProps, TextFieldContent, type TextFieldContentProps, type TextFieldProps };